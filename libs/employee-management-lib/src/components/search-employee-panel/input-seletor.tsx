import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

export default function InputSelector({
  name,
  label,
  value,
  options,
  onChange,
  sx
}: {
  name: string;
  label: string;
  value: string;
  options: Array<string>;
  onChange: (e: SelectChangeEvent<string>) => void;
  sx?: SxProps<Theme>;
}) {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        name={name}
        onChange={onChange}
      >
        {options.map((val) => (
          <MenuItem key={val} value={val}>
            {val}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
