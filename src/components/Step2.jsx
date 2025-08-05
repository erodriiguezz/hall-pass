const Step2 = ({ formData, onChange }) => (
  <div className="w-full max-w-[650px] m-auto text-center">
    <h2 className="text-4xl font-bold mb-6">The Declaration of Independence was signed in 1776</h2>

    <div className="text-2xl">
      <label for="question">
        True
        <input type="radio" name="question" value={formData.question} onChange={onChange} className="" />
      </label>

      <label for="question">
        False
        <input type="radio" name="question" value={formData.question} onChange={onChange} className="" />
      </label>
    </div>
  </div>
);

export default Step2;
