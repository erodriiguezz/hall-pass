const Step3 = ({ formData, onChange }) => (
  <div>
    <h2>Step 3: Payment Information</h2>
    <label>Credit Card Number:</label>
    <input type="text" name="creditCard" value={formData.creditCard} onChange={onChange} />
    <label>Expiry Date:</label>
    <input type="text" name="expiry" value={formData.expiry} onChange={onChange} />
  </div>
);

export default Step3;
