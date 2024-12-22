import { NextResponse } from 'next/server';

let feedbackData = [];

export async function POST(request) {
  const data = await request.json();
  const { name, email, feedback } = data;

  const newFeedback = { name, email, feedback, timestamp: new Date().toISOString() };
  feedbackData.push(newFeedback);

  return NextResponse.json({ message: 'Feedback submitted successfully!', data: newFeedback });
}
