import { Analytics } from "@vercel/analytics/react";
import {
  isRouteErrorResponse,
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/clerk-react";
import { AnimatePresence } from "motion/react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export function meta() {
  return [
    { title: "Aivon" },
    {
      name: "description",
      content: "Welcome to Aivon a Notion AI with Lotion",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('vite-ui-theme') || 'light';
                  var root = document.documentElement;
                  
                  root.classList.remove('light', 'dark');
                  
                  if (theme === 'system') {
                    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    root.classList.add(systemTheme);
                  } else {
                    root.classList.add(theme);
                  }
                } catch (e) {
                  // Fallback to dark theme if there's an error
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            signInUrl="/signIn"
            afterSignOutUrl="/"
            signUpUrl="/signUp"
          >
            <Analytics />
            <Toaster />
            {children}
          </ClerkProvider>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let details = "An unexpected error occurred.";
  let stack: string | undefined;
  let message = "Oops!";

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 container mx-auto text-center">
      <div className="space-y-6 max-w-md w-full mx-auto bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {message}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">{details}</p>
        {isRouteErrorResponse(error) && error.status === 404 && (
          <div className="py-6">
            <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 mb-4">
              404
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-white px-6 py-3 rounded-md text-sm font-medium inline-block hover:opacity-90 transition-opacity"
            >
              Return Home
            </Link>
          </div>
        )}
        {stack && (
          <pre className="w-full p-4 overflow-x-auto bg-gray-100 dark:bg-zinc-800 rounded-md text-left">
            <code className="text-sm">{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
