import { FC } from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { EmployeeList } from '../components/employee-list';
import { EmployeeDetail } from '../components/employee-detail';
import { Grid } from '@mui/material';

export const EmployeeListView: FC = () => {
  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <EmployeeList></EmployeeList>
        </Grid>
        <Grid item xs={12} md={8}>
          <EmployeeDetail></EmployeeDetail>
        </Grid>
      </Grid>
    </Provider>
  );
};
