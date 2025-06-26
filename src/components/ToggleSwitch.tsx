// components/ToggleSwitch.tsx
import { useState } from "react";

type ToggleSwitchProps = {
  label?: string;
  onToggle: (checked: boolean) => void;
};

const ToggleSwitch = ({ label = "", onToggle }: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex items-center space-x-3">
      {label && <span className="text-sm font-medium text-gray-700">{label}</span>}
      <button
        onClick={handleChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          checked ? "bg-blue-600" : "bg-gray-300"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
            checked ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
