const Step1 = ({ formData, onChange, onClick }) => (
  <div className="relative w-full max-w-[650px] m-auto text-xl">
    <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Enter your first & last name" className="w-full rounded-full px-6 py-4" />
    <button className="absolute right-0 h-full bg-blue-600 text-white rounded-full px-6 py-4" onClick={onClick}>
      Next
    </button>
  </div>
);

export default Step1;
