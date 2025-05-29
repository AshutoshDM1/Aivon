import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("signin/*", "routes/signIn.tsx"),
  route("signup/*", "routes/signUp.tsx"),
  route("workspace/*", "routes/workspace/workspaceLayout.tsx", [
    route("index", "routes/workspace/index.tsx"),
    route("page", "routes/workspace/page.tsx"),
  ]),
] satisfies RouteConfig;
