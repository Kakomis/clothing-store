import React, { FC, InputHTMLAttributes } from "react";
import { Group, Input, FormInputLabel,  } from './styles'

type FormInputProps  = {
  label: string,
} & InputHTMLAttributes<HTMLInputElement>


const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInputLabel 
          shrink={Boolean(
            otherProps.value && 
            typeof otherProps.value === 'string' && 
            otherProps.value.length
          )}
        >
          {label}
        </FormInputLabel>
      )}
      <Input {...otherProps} />
    </Group>
  );
};

export { FormInput };
