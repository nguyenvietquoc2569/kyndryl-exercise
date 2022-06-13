import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { useTypedSelector } from '../../redux/store';

export const EmployeeDetail: FC = () => {
  const state = useTypedSelector((state) => state);
  const employee = state.empPage.employeeList.find(
    (emp) =>
      emp.email.trim().toLocaleLowerCase() ===
      state.empPage.currentEmployeeIndex.trim().toLocaleLowerCase()
  );

  return employee ? (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Avatar
              style={{ margin: 'auto' }}
              alt={employee.email}
              sx={{ width: 120, height: 120 }}
              src={employee.picture.large}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography
              style={{ textAlign: 'center' }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {`${employee.name.title ? `${employee.name.title} ` : ``}${
                employee.name.first
              } ${employee.name.last}`}
            </Typography>
          </Grid>
        </Grid>
        <Grid container sx={{textAlign: 'center'}}>
          <EmployeeRecord label="Birthday" value={new Date(employee.dob.date).toDateString()} />
          <EmployeeRecord label="Email" value={employee.email} />
          <EmployeeRecord
            label="Gender"
            value={employee.gender}
          ></EmployeeRecord>
          <EmployeeRecord label="Address" value={ `${employee.location.street.number} ${employee.location.street.name}, ${employee.location.city}, ${employee.location.state}, ${employee.location.country}, ${employee.location.postcode}`} />
          <EmployeeRecord label="Work Phone" value={employee.phone} />
          <EmployeeRecord label="Cell Phone" value={employee.cell} />
        </Grid>
      </CardContent>
    </Card>
  ) : null;
};

const EmployeeRecord = ({ label, value }: { label: string; value: string }) => {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <Typography color=""><strong>{label}: </strong> {value}</Typography>
    </Grid>
  );
};
