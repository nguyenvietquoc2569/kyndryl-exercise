import { Button, Card, CardContent, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHandelInput } from '../../hooks/handle-input';
import { reduxEmpPageActionAddNewEmp, reduxEmpPageActionSetFilter, reduxEmpPageActionToggleNewEmpModal } from '../../redux/employee-page/actions';
import {
  employeeInitialValue,
  filterEmployeesInitvalue,
  IEmployee,
} from '../../redux/employee-page/type';

interface IFormData {
  title: string;
  fname: string;
  lname: string;
  gender: string;
  addressNumber: string;
  addressStreet: string;
  addressCity: string;
  addressCountry: string;
  addressZipcode: string;
  addressState: string;
  phone: string;
  number: string;
  photo: string;
  email: string;
  timeZone: string;
}
const formInit: IFormData = {
  title: '',
  fname: '',
  lname: '',
  gender: '',
  addressNumber: '',
  addressStreet: '',
  addressCity: '',
  addressCountry: '',
  addressZipcode: '',
  addressState: '',
  phone: '',
  number: '',
  photo: '',
  email: '',
  timeZone: '',
};

export const NewEmployeeForm: FC = () => {
  const dispatch = useDispatch()
  const [
    {
      title,
      fname,
      lname,
      gender,
      addressNumber,
      addressStreet,
      addressCity,
      addressState, //chua co input
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

  const closeModal = useCallback(()=> {
    reduxEmpPageActionToggleNewEmpModal(dispatch, false)
  }, [dispatch])

  const addNewEmployee = useCallback(() => {
    const emp: IEmployee = {
      ...employeeInitialValue,
      name: {
        ...employeeInitialValue.name,
        first: fname,
        last: lname,
        title: title
      },
      gender,
      email,
      phone,
      cell: number,
      picture: {
        thumbnail: photo,
        medium: photo,
        large: photo,
      },
      location: {
        ...employeeInitialValue.location,
        street: {
          name: addressStreet,
          number: addressNumber
        },
        city: addressCity,
        country: addressCountry,
        state: addressState,
        postcode: addressZipcode,
        timezone: timeZone
      },
    }
    reduxEmpPageActionAddNewEmp(dispatch, emp)
    reduxEmpPageActionSetFilter(dispatch, filterEmployeesInitvalue)
    reduxEmpPageActionToggleNewEmpModal(dispatch, false)

  }, [
    title,
    fname,
    lname,
    gender,
    addressNumber,
    addressStreet,
    addressCity,
    addressState,
    addressCountry,
    addressZipcode,
    phone,
    number,
    photo,
    email,
    timeZone,
    dispatch])

  //fname, lname, gender, address, phone number, photo, email, and time zone.

  return (
    <Card>
      <CardContent>
        <Box sx={{ marginTop: '10px', display: 'flex' }}>
          <FormControl fullWidth sx={{padding: '5px'}}>
            <InputLabel>Title</InputLabel>
            <Select
              value={title}
              label="Title"
              name="title"
              onChange={handleFormChange}
            >
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="">(empty)</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="First Name"
            name="fname"
            value={fname}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lname"
            value={lname}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <FormControl fullWidth sx={{padding: '5px'}}>
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
        <Box sx={{ marginTop: '10px', display: 'flex' }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
        </Box>
        <Box sx={{ marginTop: '10px', display: 'flex' }}>
          <TextField
            fullWidth
            label="address number"
            name="addressNumber"
            value={addressNumber}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <TextField
            fullWidth
            label="Street"
            name="addressStreet"
            value={addressStreet}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <TextField
            fullWidth
            label="City"
            name="addressCity"
            value={addressCity}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <TextField
            fullWidth
            label="State"
            name="addressState"
            value={addressState}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <TextField
            fullWidth
            label="Country"
            name="addressCountry"
            value={addressCountry}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
           <TextField
            fullWidth
            label="Zipcode"
            name="addressZipcode"
            value={addressZipcode}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
        </Box>
        <Box sx={{ marginTop: '10px', display: 'flex' }}>
          <TextField
            fullWidth
            label="Cell Phone"
            name="phone"
            value={phone}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
          <TextField
            fullWidth
            label="Home Phone"
            name="number"
            value={number}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
        </Box>
        <Box sx={{ marginTop: '10px', display: 'flex' }}>
          <TextField
            fullWidth
            label="Time Zone"
            name="timeZone"
            value={timeZone}
            onChange={handleFormChange}
            sx={{padding: '5px'}}
          />
        </Box>
        <Box sx={{ marginTop: '10px', display: 'block', textAlign:'right' }}>
          <Button variant='contained' onClick={addNewEmployee}>ADD</Button>
          <Button variant='text' onClick={closeModal}>Cancel</Button>
        </Box>
      </CardContent>
    </Card>
  );
};
