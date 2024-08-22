import React from 'react';
import { FormControl, InputLabel, OutlinedInput, FormHelperText } from '@mui/material';

interface EmailInputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

export default function EmailInput({
  label,
  value,
  onChange,
  error = false,
  helperText = ''
}: EmailInputProps) {
  return (
    <FormControl fullWidth variant="outlined" error={error} sx={{ m: 1 }}>
      <InputLabel htmlFor="outlined-email">{label}</InputLabel>
      <OutlinedInput
        id="outlined-email"
        type="email"
        value={value}
        onChange={onChange}
        label={label}
        aria-describedby="email-helper-text"
      />
      {helperText && <FormHelperText id="email-helper-text">{helperText}</FormHelperText>}
    </FormControl>
  );
}
