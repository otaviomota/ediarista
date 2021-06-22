import React from 'react';
import Textfield from 'ui/components/inputs/Textfield/Textfield';
import InputMask from 'react-input-mask';
import { OutlinedTextFieldProps } from '@material-ui/core'

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ mask, value, onChange, ...props }) => {
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {() => {
                return <Textfield {...props} />;
            }}
        </InputMask>
    )
}

export default TextFieldMask;
