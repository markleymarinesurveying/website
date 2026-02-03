import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const PROMPT_ID = process.env.OPENAI_PROMPT_ID;

interface ChatRequest {
  message: string;
  conversationHistory?: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Handle CORS preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    // Parse the request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Request body is required" }),
      };
    }

    const { message, conversationHistory = [] }: ChatRequest = JSON.parse(event.body);

    if (!message || typeof message !== "string") {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Message is required and must be a string" }),
      };
    }

    // Prepare the messages array for OpenAI
    const messages = [
      {
        role: "system" as const,
        content: "You are a helpful assistant for Markley Marine Surveying. You specialize in marine surveys including pre-purchase surveys, insurance surveys, and consultations. Provide helpful, professional responses about marine surveying services. Be friendly and knowledgeable, and guide users toward getting a quote when appropriate."
      },
      ...conversationHistory.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: "user" as const,
        content: message
      }
    ];

    // Call OpenAI API using chat completions
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    // Extract the response content
    const aiResponse = response.choices[0]?.message?.content || "I apologize, but I couldn't generate a response at this time.";

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        response: aiResponse,
        conversationHistory: [
          ...conversationHistory,
          { role: "user", content: message },
          { role: "assistant", content: aiResponse }
        ]
      }),
    };
  } catch (error: any) {
    console.error("Function error:", error);
    
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        error: "Internal server error", 
        details: error.message 
      }),
    };
  }
};