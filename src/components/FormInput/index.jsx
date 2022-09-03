import React from "react";
import { Group, Input, FormInputLabel,  } from './styles'

const FormInput = ({ label, ...otherProps }) => {
  
  return (
    <Group>
      {label && (
        <FormInputLabel shrink={1}>
          {label}
        </FormInputLabel>
      )}
      <Input {...otherProps} />
    </Group>
  );
};

export { FormInput };
