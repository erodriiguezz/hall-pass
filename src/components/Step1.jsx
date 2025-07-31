const Step1 = ({ formData, onChange }) => (
  <div>
    {/* <h2>Step 1: Personal Information</h2> */}

    <label>Enter your First and Last Name:</label>
    <input type="text" name="name" value={formData.name} onChange={onChange} />
  </div>
);

export default Step1;
