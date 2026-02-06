import { useState, useEffect, useRef } from "react";


const FormField = ({ field, value, onChange }) => {
  const commonClasses =
    "w-60 bg-blue-200 rounded-xs focus:outline-none focus:border focus:border-blue-300 text-center h-9";

  if (field.type === "textarea") {
    return (
      <textarea
        name={field.name}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        className={`${commonClasses} h-15`}
      />
    );
  }

  return (
    <input
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      value={value}
      onChange={onChange}
      className={commonClasses}
    />
  );
};


const AutoSaveForm = ({ fields }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("Saved");

  const timerRef = useRef(null);
  const isFirstRender = useRef(true);

  const handleChange = (e) => {
    setStatus("Typing...");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setStatus("Saving...");
      console.log("Auto-saved data:", formData);
      setStatus("Saved");
    }, 1500);

    return () => clearTimeout(timerRef.current);
  }, [formData]);

  return (
    <div className="w-full mt-8 flex justify-around">
      <div className="w-1/4 bg-gray-100 p-4 flex flex-col gap-4 items-center">
        <h2 className="text-2xl text-blue-600 font-bold">
          Auto Save Form
        </h2>

        {fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={formData[field.name]}
            onChange={handleChange}
          />
        ))}

        <p className="flex gap-5">
          <strong>Status:</strong> {status}
        </p>
      </div>
    </div>
  );
};


export default function App() {
  const formFields = [
    { name: "name", type: "text", placeholder: "Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "notes", type: "textarea", placeholder: "Notes" },
  ];

  return <AutoSaveForm fields={formFields} />;
}
