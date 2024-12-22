'use client';

export default function ReportPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Report</h1>
      <p>Explore detailed reports and analytics on citizen feedback and survey results.</p>

      <div style={{ marginTop: '30px' }}>
        <h2>Recent Feedback Overview</h2>
        <ul>
          <li>Feedback #1: Positive - Great community park!</li>
          <li>Feedback #2: Neutral - Need improvement in road conditions.</li>
          <li>Feedback #3: Negative - Long waiting times for public services.</li>
        </ul>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Survey Insights</h2>
        <p>85% of citizens are satisfied with the recent park improvements.</p>
      </div>
    </div>
  );
}
