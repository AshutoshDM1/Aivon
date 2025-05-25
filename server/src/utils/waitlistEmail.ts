import { Resend } from 'resend';
import * as dotenv from 'dotenv';

dotenv.config();
// Check if API key is configured
const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not configured in environment variables');
}

const resend = new Resend(RESEND_API_KEY);

export const emailService = {
  async sendWaitlistEmail(userEmail: string) {
    try {
      console.log('Attempting to send confirmation email to:', userEmail);
      const response = await resend.emails.send({
        from: 'Aivon <waitlist@aivon.tech>',
        to: userEmail,
        subject: 'Welcome to Aivon Waitlist! 🚀',
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 700; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                🚀 Welcome to Aivon!
              </h1>
              <p style="color: #f0f4ff; margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">
                You're on the waitlist for something amazing
              </p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px; background-color: #ffffff;">
              <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">
                  Thank you for joining our waitlist! ✨
                </h2>
                <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0;">
                  We're thrilled to have you as part of our early community. You'll be among the first to experience Aivon when we launch.
                </p>
              </div>

              <!-- Status Card -->
              <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 25px; border-radius: 12px; margin: 30px 0; border-left: 4px solid #667eea;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="background-color: #667eea; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px;">
                    ✓
                  </div>
                  <h3 style="color: #2d3748; margin: 0; font-size: 18px; font-weight: 600;">
                    Waitlist Status: Confirmed
                  </h3>
                </div>
                <p style="color: #4a5568; margin: 0; font-size: 14px; line-height: 1.5;">
                  Your spot is secured! We'll notify you as soon as Aivon is ready for early access.
                </p>
              </div>

              <!-- What's Next -->
              <div style="margin: 30px 0;">
                <h3 style="color: #2d3748; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">
                  What happens next?
                </h3>
                <div style="space-y: 15px;">
                  <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <span style="color: #667eea; font-size: 18px; margin-right: 12px; margin-top: 2px;">📧</span>
                    <p style="color: #4a5568; margin: 0; font-size: 15px; line-height: 1.5;">
                      <strong>Stay tuned:</strong> We'll send you updates on our progress and exclusive previews
                    </p>
                  </div>
                  <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                    <span style="color: #667eea; font-size: 18px; margin-right: 12px; margin-top: 2px;">🎯</span>
                    <p style="color: #4a5568; margin: 0; font-size: 15px; line-height: 1.5;">
                      <strong>Early access:</strong> You'll get priority access when we launch
                    </p>
                  </div>
                  <div style="display: flex; align-items: flex-start;">
                    <span style="color: #667eea; font-size: 18px; margin-right: 12px; margin-top: 2px;">💬</span>
                    <p style="color: #4a5568; margin: 0; font-size: 15px; line-height: 1.5;">
                      <strong>Community:</strong> Join our community for behind-the-scenes content
                    </p>
                  </div>
                </div>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="https://aivon.tech" 
                   style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 16px 32px; text-decoration: none; 
                          border-radius: 8px; display: inline-block; font-weight: 600; font-size: 16px; 
                          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); transition: all 0.3s ease;">
                  Visit Our Website
                </a>
              </div>

              <!-- Footer Message -->
              <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #e2e8f0;">
                <p style="color: #718096; font-size: 14px; line-height: 1.6; margin: 0;">
                  Questions? Reply to this email - we'd love to hear from you!<br>
                  <span style="color: #a0aec0;">The Aivon Team</span>
                </p>
              </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #f7fafc; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
              <p style="color: #a0aec0; font-size: 12px; margin: 0;">
                © 2024 Aivon. All rights reserved.<br>
                You're receiving this because you joined our waitlist.
              </p>
            </div>
          </div>
        `,
      });
      console.log('Email sent successfully:', response);
      return response;
    } catch (error: unknown) {
      console.error('Detailed error sending waitlist email:', {
        error,
        userEmail,
      });
      throw error;
    }
  },
};
