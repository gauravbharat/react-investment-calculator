import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const investmentResultData = calculateInvestmentResults(input);
  const initialInvestment =
    investmentResultData[0].valueEndOfYear -
    investmentResultData[0].interest -
    investmentResultData[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResultData.map(
          ({ year, interest, valueEndOfYear, annualInvestment }) => {
            const totalInterest =
              valueEndOfYear - annualInvestment * year - initialInvestment;
            const totalAmountInvested = valueEndOfYear - totalInterest;

            return (
              <tr key={year}>
                <th>{year}</th>
                <th>{formatter.format(valueEndOfYear)}</th>
                <th>{formatter.format(interest)}</th>
                <th>{formatter.format(totalInterest)}</th>
                <th>{formatter.format(totalAmountInvested)}</th>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
