import { useState } from "react";

export function useForm(initialState) {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return {
    formState: formState,
    setFormState: setFormState,
    handleChange: handleChange
  };


}
