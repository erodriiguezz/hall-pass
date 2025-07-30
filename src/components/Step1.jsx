const Step1 = ({ formData, onChange }) => (
  <div>
    <h2>Step 1: Personal Information</h2>
    <label>Name:</label>
    <input type="text" name="name" value={formData.name} onChange={onChange} />
    <label>Email:</label>
    <input type="email" name="email" value={formData.email} onChange={onChange} />
  </div>
);

export default Step1;
