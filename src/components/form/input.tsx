import { useField } from '@unform/core';
import { useEffect, useRef } from 'react';
import { InputContainer } from '.';

// interface Props {
//   invoiceNumber: string;
// }

// type InputProps = JSX.IntrinsicElements['input'] & Props;

function Input({ name, ...rest }: any) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer>
      <input ref={inputRef} {...rest} />

      {error && <span style={{ color: '#F00' }}>{error}</span>}
    </InputContainer>
  );
}

export { Input };
