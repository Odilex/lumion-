import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // For now, just log the contact form submission
    console.log('Contact form submission:', { name, email, message });

    // In production, you would send an email here using nodemailer
    // For now, just return a success response
    return NextResponse.json(
      { message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { message: 'Error processing your request' },
      { status: 500 }
    );
  }
} 