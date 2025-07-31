const Step2 = ({ formData, onChange }) => (
  <div>
    <h2>The Declaration of Independence was signed in 1776</h2>

    <label for="question">
      True
      <input type="radio" name="question" value={formData.question} onChange={onChange} />
    </label>

    <label for="question">
      False
      <input type="radio" name="question" value={formData.question} onChange={onChange} />
    </label>
  </div>
);

export default Step2;
