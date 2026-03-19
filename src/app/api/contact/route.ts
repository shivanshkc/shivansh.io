import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: NextRequest) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "shivanshbox@gmail.com",
            subject: `Contact from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Failed to send message." },
            { status: 500 }
        );
    }
}
