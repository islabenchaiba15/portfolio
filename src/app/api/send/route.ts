import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Resend API key is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["mi.benchaiba@esi-sba.dz"],
        reply_to: email,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e7e7e7; border-radius: 14px; background-color: #fafafa; color: #0a0a0a;">
            <h2 style="font-size: 20px; font-weight: 800; border-bottom: 1px solid #e7e7e7; padding-bottom: 12px; margin-top: 0; color: #0a0a0a; letter-spacing: -0.02em;">New Contact Form Submission</h2>
            
            <div style="margin-top: 20px;">
              <p style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em; color: #737373; margin: 0 0 4px 0;">Visitor Name</p>
              <p style="font-size: 14px; margin: 0 0 16px 0; font-weight: 600; color: #0a0a0a;">${name}</p>
            </div>
            
            <div>
              <p style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em; color: #737373; margin: 0 0 4px 0;">Visitor Email</p>
              <p style="font-size: 14px; margin: 0 0 16px 0; font-weight: 600;"><a href="mailto:${email}" style="color: #2f6fed; text-decoration: none;">${email}</a></p>
            </div>
            
            <div style="border-top: 1px solid #e7e7e7; padding-top: 16px; margin-top: 16px;">
              <p style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.15em; color: #737373; margin: 0 0 8px 0;">Message</p>
              <div style="font-size: 14px; line-height: 1.6; color: #404040; background-color: #ffffff; border: 1px solid #e7e7e7; padding: 16px; border-radius: 8px; white-space: pre-wrap; font-family: inherit;">${message}</div>
            </div>
            
            <footer style="margin-top: 24px; font-size: 11px; color: #737373; text-align: center; border-top: 1px solid #e7e7e7; padding-top: 12px;">
              Sent from your Next.js Portfolio Website
            </footer>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || "Failed to send email" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
