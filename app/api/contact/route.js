import { NextResponse } from 'next/server';

export async function POST(request) {
  // This API route is deprecated - contact form now uses Formspree directly
  // The ContactForm component calls Formspree endpoint: https://formspree.io/f/mvglzwzd
  return NextResponse.json({ 
    success: false, 
    message: 'This endpoint is deprecated. The contact form now uses Formspree directly.' 
  }, { status: 410 }); // 410 Gone - resource no longer available
}
