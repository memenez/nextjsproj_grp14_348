'use client';

import { useState, useEffect } from 'react';
import styles from '../../styles/polls.module.css';

export default function PollsPage() {
  const [polls, setPolls] = useState([]);
  const [votes, setVotes] = useState({});

  // Fetch polls data when the component mounts
  useEffect(() => {
    const fetchPolls = async () => {
      const response = await fetch('/api/polls');
      const result = await response.json();
      setPolls(result);
    };
    fetchPolls();
  }, []);

  // Function to handle voting
  async function submitVote(pollId, vote) {
    const response = await fetch('/api/polls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pollId, vote }),
    });

    const result = await response.json();
    if (result.message === 'Vote submitted successfully') {
      setVotes((prevVotes) => ({
        ...prevVotes,
        [pollId]: vote,
      }));
    }
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Vote for Community Initiatives</h1>
      {polls.map((poll) => (
        <div key={poll.id} className={styles.questionContainer}>
          <h2>{poll.question}</h2>
          {poll.options.map((option) => (
            <button
              key={option}
              className={styles.voteButton}
              style={{
                backgroundColor: votes[poll.id] === option ? 'green' : '',
              }}
              onClick={() => submitVote(poll.id, option)}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
