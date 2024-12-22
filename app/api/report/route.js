// app/api/reports/route.js
import { NextResponse } from 'next/server';

// Mock data for reports
const reports = {
  feedbackReport: [
    { feedbackId: 1, sentiment: 'Positive', message: 'Great park improvements!' },
    { feedbackId: 2, sentiment: 'Negative', message: 'The road repairs are insufficient.' },
  ],
  surveyReport: [
    { question: 'Are you happy with the park?', satisfactionRate: '80%' },
    { question: 'Should we repair the local road?', satisfactionRate: '60%' },
  ],
};

export async function GET() {
  return NextResponse.json(reports);
}
