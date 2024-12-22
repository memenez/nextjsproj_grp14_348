import { NextResponse } from 'next/server';

let polls = [
  { id: 1, question: 'Do you support the proposed park improvement?', options: ['Yes', 'No'], votes: { yes: 0, no: 0 } },
  { id: 2, question: 'Should we repair the local road?', options: ['Yes', 'No'], votes: { yes: 0, no: 0 } },
];

export async function GET() {
  return NextResponse.json(polls);
}

export async function POST(request) {
  const { pollId, vote } = await request.json();

  const poll = polls.find((p) => p.id === pollId);
  if (!poll) return NextResponse.json({ message: 'Poll not found' }, { status: 404 });

  if (vote === 'yes' || vote === 'no') {
    poll.votes[vote]++;
    return NextResponse.json({ message: 'Vote submitted successfully', poll });
  } else {
    return NextResponse.json({ message: 'Invalid vote option' }, { status: 400 });
  }
}
