import { useState,useEffect } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(()=>{createValidator()},[formState])

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const createValidator = () => {
    const fromCheckValues ={
    }
    for (const formField of Object.keys(formValidations)) {
      const [fn,errorMessage]=formValidations[formField]
      fromCheckValues(`${formField}Valid` = fn(formState[formField]))
    }
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
