import React, { useState, useEffect } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  value,
  onChange,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
  const [internalValue, setInternalValue] = useState(value ?? '');

  useEffect(() => {
    setInternalValue(value ?? '');
  }, [value]);

  const inputType = type === 'password' && visible ? 'text' : type;
  const isNumberType = inputType === 'number';

  const currentValue = value !== undefined && value !== null ? String(value) : internalValue;

  const handleToggleVisibility = () => {
    setVisible((v) => !v);
  };

  const handleClear = () => {
    setInternalValue('');
    if (onChange) {
      const event = {
        target: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    if (onChange) onChange(e);
  };

  const showClearButton = clearable && currentValue !== '';

  return (
    <div className="relative inline-block w-[250px]">
      <input
        {...rest}
        type={inputType}
        value={currentValue}
        onChange={handleChange}
        className={`w-full px-2.5 py-2 rounded border border-gray-300 text-base outline-none focus:border-blue-500 ${isNumberType && clearable ? 'pr-9' : 'pr-3'
          }`}
      />

      {type === 'password' && (
        <button
          type="button"
          onClick={handleToggleVisibility}
          aria-label={visible ? 'Hide password' : 'Show password'}
          className={`absolute top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer text-lg select-none ${showClearButton ? 'right-7' : 'right-2'
            }`}
        >
          {visible ? '👁️' : '🙈'}
        </button>
      )}

      {showClearButton && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear input"
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent border-0 cursor-pointer text-lg select-none"
        >
          ✕
        </button>
      )}
    </div>
  );
};
