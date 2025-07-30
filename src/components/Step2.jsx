const Step2 = ({ formData, onChange }) => (
  <div>
    <h2>Step 2: Address Details</h2>
    <label>Address:</label>
    <input type="text" name="address" value={formData.address} onChange={onChange} />
    <label>City:</label>
    <input type="text" name="city" value={formData.city} onChange={onChange} />
  </div>
);

export default Step2;
