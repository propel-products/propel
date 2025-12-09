import { NextResponse } from 'next/server';

// Placeholder for Azure OpenAI integration
// To enable: Set AZURE_OPENAI_API_KEY, AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_DEPLOYMENT in .env.local

export async function POST(request) {
  try {
    const { messages } = await request.json();

    // Check if Azure OpenAI is configured
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4';

    if (!apiKey || !endpoint) {
      // Demo mode - return a helpful response explaining the setup
      return NextResponse.json({
        message: `I'm currently running in demo mode because the Azure OpenAI API is not configured yet.\n\nTo enable full AI capabilities, add these environment variables to your .env.local file:\n\n• AZURE_OPENAI_API_KEY\n• AZURE_OPENAI_ENDPOINT\n• AZURE_OPENAI_DEPLOYMENT\n\nOnce configured, I'll be powered by GPT-4 and can help with a wide range of tasks!`
      });
    }

    // Azure OpenAI API call
    const response = await fetch(
      `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=2024-02-15-preview`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
        },
        body: JSON.stringify({
          messages: [
            {
              role: 'system',
              content: `You are Propel's AI assistant - a helpful, knowledgeable, and friendly AI. You help users with questions about AI, technology, coding, business automation, and digital products. You're concise but thorough, and you always aim to be practical and actionable. When discussing code, you provide clear examples. You're part of Propel, a digital and AI studio that builds modern web apps, automation systems, and intelligent tools.`
            },
            ...messages.map(m => ({
              role: m.role,
              content: m.content
            }))
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Azure OpenAI error:', error);
      throw new Error('Failed to get AI response');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({ message: assistantMessage });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { message: 'Sorry, something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
