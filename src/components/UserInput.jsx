export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => {
              onChange("initialInvestment", +(e.target.value || "0"));
            }}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => {
              onChange("annualInvestment", +(e.target.value || "0"));
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => {
              onChange("expectedReturn", +(e.target.value || "0"));
            }}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => {
              onChange("duration", +(e.target.value || "0"));
            }}
          />
        </p>
      </div>
    </section>
  );
}
