import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    createValidators();
  }, [formState]);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    }

    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onBlur = ({ target }) => {
    const { name } = target;
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setTouched({});
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };

  const setAllTouched = () => {
    const newTouched = {};
    Object.keys(formState).forEach((key) => {
      newTouched[key] = true;
    });
    setTouched(newTouched);
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onBlur,

    ...formValidation,
    isFormValid,
    touched,
    setAllTouched,
  };
};
