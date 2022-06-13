import { SxProps, TextField } from '@mui/material';
import { Theme } from '@mui/material';
import { ChangeEvent } from 'react';

export default function InputText({
  name,
  value,
  placeHolder,
  onChange,
  sx,
}: {
  name: string;
  value: string;
  placeHolder: string;
  onChange: (e: ChangeEvent) => void;
  sx?: SxProps<Theme>;
}) {
  return (
    <TextField
      fullWidth
      sx={sx}
      placeholder={placeHolder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
}
