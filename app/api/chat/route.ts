import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { google } from "@ai-sdk/google";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = await streamText({
    model: google("models/gemini-flash-latest"),
    system: `You are the BC WildWatch Campus Safety Assistant for Belgium Campus. 
    Your primary job is to help students calmly deal with animal hazards (e.g., snakes, bee swarms, stray dogs, spiders) and guide them to report these sightings. 
    Provide short, concise, and highly actionable safety advice. 
    Strictly refuse to answer any questions unrelated to campus safety, animal hazards, or the BC WildWatch reporting process.`,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}