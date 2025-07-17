import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Text: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Input
        placeholder="Text input"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    );
  },
};

export const TextClearable: Story = {
  render: () => {
    const [val, setVal] = useState('Hello World');
    return (
      <Input
        placeholder="Clearable text input"
        clearable
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    );
  },
};

export const PasswordToggle: Story = {
  render: () => {
    const [val, setVal] = useState('');
    return (
      <Input
        type="password"
        placeholder="Password input"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    );
  },
};

export const PasswordClearableToggle: Story = {
  render: () => {
    const [val, setVal] = useState('qwerty1234');
    return (
      <Input
        type="password"
        clearable
        placeholder="Password clearable input"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    );
  },
};

export const NumberInput: Story = {
  render: () => {
    const [val, setVal] = useState<number | ''>('');
    return (
      <Input
        type="number"
        placeholder="Number input"
        value={val}
        onChange={(e) =>
          setVal(e.target.value === '' ? '' : Number(e.target.value))
        }
      />
    );
  },
};

export const NumberInputClearable: Story = {
  render: () => {
    const [val, setVal] = useState<number | ''>('');
    return (
      <Input
        type="number"
        clearable
        placeholder="Number input with clear"
        value={val}
        onChange={(e) =>
          setVal(e.target.value === '' ? '' : Number(e.target.value))
        }
      />
    );
  },
};
