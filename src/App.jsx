import { useState } from "react";

import Step1 from "./components/Step1.jsx";
import Step2 from "./components/Step2.jsx";
import Step3 from "./components/Step3.jsx";

const App = () => {
  const [formData, setFormData] = useState({
    step1: { name: "", email: "" },
    step2: { address: "", city: "" },
    step3: { creditCard: "", expiry: "" },
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [`step${currentStep}`]: {
        ...formData[`step${currentStep}`],
        [name]: value,
      },
    });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <div>
        {currentStep === 1 && <Step1 formData={formData.step1} onChange={handleInputChange} />}
        {currentStep === 2 && <Step2 formData={formData.step2} onChange={handleInputChange} />}
        {currentStep === 3 && <Step3 formData={formData.step3} onChange={handleInputChange} />}
      </div>

      <div>
        {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
        {currentStep < 3 && <button onClick={nextStep}>Next</button>}
        {currentStep === 3 && <button>Submit</button>}
      </div>
    </div>
  );
};

export default App;
