// app/api/survey/route.js
import { NextResponse } from 'next/server';

// Mock survey data
let surveyResponses = [
  { question: 'Are you satisfied with the park improvement?', answer: 'Yes' },
  { question: 'Do you think the new bike lanes are necessary?', answer: 'No' },
  { question: 'Should the local road be repaired?', answer: 'Yes' },
];

// GET - Fetch survey responses
export async function GET() {
  return NextResponse.json(surveyResponses);
}

// POST - Submit a survey response
export async function POST(request) {
  const response = await request.json();
  surveyResponses.push(response);

  return NextResponse.json({ message: 'Survey response submitted successfully', response });
}
