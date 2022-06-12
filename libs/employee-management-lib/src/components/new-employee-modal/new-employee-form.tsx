import { Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useHandelInput } from '../../hooks/handle-input';
import {
  employeeInitialValue,
  IEmployee,
} from '../../redux/employee-page/type';

interface IFormData {
  fname: string;
  lname: string;
  gender: string;
  addressNumber: string;
  addressStreet: string;
  addressCity: string;
  addressCountry: string;
  addressZipcode: string;
  phone: string;
  number: string;
  photo: string;
  email: string;
  timeZone: string;
}
const formInit: IFormData = {
  fname: '',
  lname: '',
  gender: '',
  addressNumber: '',
  addressStreet: '',
  addressCity: '',
  addressCountry: '',
  addressZipcode: '',
  phone: '',
  number: '',
  photo: '',
  email: '',
  timeZone: '',
};

export const NewEmployeeForm: FC = () => {
  const [
    {
      fname,
      lname,
      gender,
      addressNumber,
      addressStreet,
      addressCity,
      addressCountry,
      addressZipcode,
      phone,
      number,
      photo,
      email,
      timeZone,
    },
    handleFormChange,
  ] = useHandelInput<IFormData>(formInit);

  //fname, lname, gender, address, phone number, photo, email, and time zone.

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            label="First Name"
            name="fname"
            value={fname}
            onChange={handleFormChange}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lname"
            value={lname}
            onChange={handleFormChange}
          />
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select
              value={gender}
              label="Gender"
              name="gender"
              onChange={handleFormChange}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="">(unrevealed)</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={handleFormChange}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            label="address number"
            name="addressNumber"
            value={addressNumber}
            onChange={handleFormChange}
          />
          <TextField
            fullWidth
            label="Street"
            name="addressStreet"
            value={addressStreet}
            onChange={handleFormChange}
          />
          <TextField
            fullWidth
            label="City"
            name="addressCity"
            value={addressCity}
            onChange={handleFormChange}
          />
          <TextField
            fullWidth
            label="Country"
            name="addressCountry"
            value={addressCountry}
            onChange={handleFormChange}
          />
           <TextField
            fullWidth
            label="Zipcode"
            name="addressZipcode"
            value={addressZipcode}
            onChange={handleFormChange}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            label="Cell Phone"
            name="phone"
            value={phone}
            onChange={handleFormChange}
          />
          <TextField
            fullWidth
            label="Home Phone"
            name="number"
            value={number}
            onChange={handleFormChange}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            fullWidth
            label="Time Zone"
            name="timeZone"
            value={timeZone}
            onChange={handleFormChange}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
