import React from 'react';
import s from './FormsControls.module.scss';

export const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form_control + " " + (hasError ? s.error : "")}>
            {props.children}
            { hasError && <span>{meta.error}</span>}
        </div>
    );
}

export const Textarea = (props) => {
    debugger
    const {input, ...restProps} = props;
    return <FormControl {...props} >
        <textarea {...input} {...restProps} ></textarea>
    </FormControl>
}
export const Input = (props) => {
    const {input, ...restProps} = props;
    return <FormControl {...props} >
        <input {...input} {...restProps} ></input>
    </FormControl>
}