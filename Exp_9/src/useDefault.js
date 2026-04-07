import { useState } from 'react';

//Custom Hook: useDefault
//Returns a stateful value that falls back to a default if set to null/undefined
function useDefault(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  const setValueWithDefault = (newValue) => {
    if (newValue === null || newValue === undefined) {
      setValue(defaultValue);
    } else {
      setValue(newValue);
    }
  };

  return [value, setValueWithDefault];
}

export default useDefault;
