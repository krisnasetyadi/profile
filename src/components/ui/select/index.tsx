'use client';
import React from 'react';
import Select, { ActionMeta, MultiValue, OptionsOrGroups, SingleValue } from 'react-select';
import { useController, Control } from 'react-hook-form';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectComponentProps {
  name: string;
  label: string;
  control: Control<any>; 
  options: SelectOption[];
  isMulti?: boolean; 
  defaultValue?: SelectOption | SelectOption[]; 
  errorMessage?: string;
}

function SelectComponent({
  name,
  label,
  options,
  control,
  defaultValue,
  isMulti = false,
  errorMessage,
}: SelectComponentProps) {
  
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name,
    control,
    defaultValue: defaultValue || (isMulti ? [] : null), // Default to empty for multi-select
  });

  return (
    <div className="py-2 flex flex-col">
      <label className="uppercase mb-1" htmlFor={name}>
        {label}
      </label>
      <Select
        id={name}
        isMulti={isMulti}
        name={name}
        options={options}
        onChange={onChange}
        onBlur={onBlur} 
        value={value} 
        className={`basic-multi-select ${errorMessage ? 'border-red-600' : 'border-gray-300'}`}
        classNamePrefix="select"
      />
      {errorMessage && (
        <p className="mt-1 text-red-400">
          {errorMessage.includes('_') 
            ? errorMessage.split('_').join(' ').toLowerCase() 
            : errorMessage.toLowerCase()}
        </p>
      )}
    </div>
  );
}

export default SelectComponent;
