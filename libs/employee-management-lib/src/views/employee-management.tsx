import { FC } from 'react';
import store from '../redux/store';
import { Provider } from 'react-redux';
import { EmployeeList } from '../components/employee-list';
import { EmployeeDetail } from '../components/employee-detail';
import { Grid } from '@mui/material';
import { EmployeeFilterPanel } from '../components/search-employee-panel';
import { NewEmployeeModal } from '../components/new-employee-modal';
import { IntroCard } from '../components/introduce-card/introduce-card';

export const EmployeeListView: FC = () => {
  return (
    <Provider store={store}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <IntroCard></IntroCard>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <EmployeeFilterPanel></EmployeeFilterPanel>
        </Grid>
        <Grid item xs={12} md={4}>
          <EmployeeList></EmployeeList>
        </Grid>
        <Grid item xs={12} md={8}>
          <EmployeeDetail></EmployeeDetail>
        </Grid>
      </Grid>
      <NewEmployeeModal></NewEmployeeModal>
    </Provider>
  );
};
