'use client';

import { useState } from 'react';
import styles from '../../styles/feedback.module.css';

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle feedback submission
  async function submitFeedback() {
    const feedbackData = { name, email, feedback };
    
    // Send feedback data to the API
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    });

    const result = await response.json();
    if (result.message === 'Feedback submitted successfully!') {
      setMessage('Feedback submitted successfully!');
      setName('');
      setEmail('');
      setFeedback('');
    } else {
      setMessage('There was an error submitting your feedback. Please try again.');
    }
  }

  return (
    <div className={styles.pageContainer}>
      <h1>Submit Your Feedback</h1>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button onClick={submitFeedback}>Submit Feedback</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
