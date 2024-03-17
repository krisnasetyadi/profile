'use client'
import React from 'react';

import Select, { ActionMeta, MultiValue, OptionsOrGroups, SingleValue } from 'react-select';

interface SelectOnChangeProps {
    onChange?: ((newValue: MultiValue<string | {
        label: string;
        value: string;
    }> | SingleValue<string | {
        label: string;
        value: string;
    }>, actionMeta: ActionMeta<string | {
        label: string;
        value: string;
    }>) => void) | undefined;
}

interface SelectComponentProps {
    name: string;
    label: string;
    isMulti?: boolean;
    defaultValue?: string | {
        label: string;
        value: string;
    }
    options: string[] | {
        label: string;
        value: string;
    }[]
    onChange?: (newValue: MultiValue<string | { label: string; value: string }> | SingleValue<string | { label: string; value: string }>, actionMeta: ActionMeta<string | { label: string; value: string }>) => void | undefined;
    errorMessage: {
        [key: string]: string;
    }
}

 function SelectComponent(props: SelectComponentProps) {
    const { name, label, options, defaultValue, isMulti=false, errorMessage, onChange } = props

    return (
    <div className="py-2 flex flex-col">
    <label className="uppercase">{label}</label>
        <Select
            defaultValue={defaultValue}
            isMulti={isMulti}
            name={name}
            options={options}
            onChange={onChange}
            className="basic-multi-select"
            classNamePrefix="select"
        />
        {errorMessage && errorMessage[name] && (
            <p className='text-red-400'>
                {errorMessage[name].includes('_') 
                ? errorMessage[name].split('_').join(' ') 
                : errorMessage[name]}
            </p>
        )}
    </div>
    )
};

export type { SelectOnChangeProps }
export default SelectComponent