'use client';

export default function SurveyPage() {
  return (
    <div>
      <h1>Survey</h1>
      <p>Participate in our surveys to share your thoughts on community services.</p>
      <form>
        {/* Question 1 */}
        <div>
          <h2>1. How satisfied are you with the current community services?</h2>
          <label>
            <input type="radio" name="q1" value="very-satisfied" /> Very Satisfied
          </label>
          <label>
            <input type="radio" name="q1" value="satisfied" /> Satisfied
          </label>
          <label>
            <input type="radio" name="q1" value="neutral" /> Neutral
          </label>
          <label>
            <input type="radio" name="q1" value="unsatisfied" /> Unsatisfied
          </label>
          <label>
            <input type="radio" name="q1" value="very-unsatisfied" /> Very Unsatisfied
          </label>
        </div>

        {/* Question 2 */}
        <div>
          <h2>2. How often do you use public services in your community?</h2>
          <label>
            <input type="radio" name="q2" value="daily" /> Daily
          </label>
          <label>
            <input type="radio" name="q2" value="weekly" /> Weekly
          </label>
          <label>
            <input type="radio" name="q2" value="monthly" /> Monthly
          </label>
          <label>
            <input type="radio" name="q2" value="rarely" /> Rarely
          </label>
          <label>
            <input type="radio" name="q2" value="never" /> Never
          </label>
        </div>

        {/* Question 3 */}
        <div>
          <h2>3. Are you satisfied with the cleanliness of public facilities?</h2>
          <label>
            <input type="radio" name="q3" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="q3" value="no" /> No
          </label>
        </div>

        {/* Question 4 */}
        <div>
          <h2>4. Do you feel safe in your community?</h2>
          <label>
            <input type="radio" name="q4" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="q4" value="no" /> No
          </label>
        </div>

        {/* Question 5 */}
        <div>
          <h2>5. Would you recommend our community services to others?</h2>
          <label>
            <input type="radio" name="q5" value="yes" /> Yes
          </label>
          <label>
            <input type="radio" name="q5" value="no" /> No
          </label>
        </div>

        <button type="submit">Submit Survey</button>
      </form>
    </div>
  );
}
