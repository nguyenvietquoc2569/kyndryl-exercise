import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  CssBaseline,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  MenuList,
} from '@mui/material';
import axios from 'axios';
import { useCallback, useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  reduxEmpPageActionSetCurrentEmployeeIndex,
  reduxEmpPageActionSetError,
  reduxEmpPageActionSetLoading,
  reduxEmpPageActionSetShow,
} from '../../redux/employee-page/actions';
import { EReduxEmpPageStatus, IEmployee } from '../../redux/employee-page/type';
import { useTypedSelector } from '../../redux/store';
import { EmployeeListItem } from './employee-list-item';
import Refresh from '@mui/icons-material/Refresh';
import { useFilteredEmployees } from '../../hooks/filtered-employees-hook';

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const fetchEmployees = useCallback(() => {
    reduxEmpPageActionSetLoading(dispatch);
    axios({
      method: 'GET',
      baseURL: 'https://randomuser.me/',
      url: '/api/?results=100',
      data: {},
    })
      .then((res) => {
        reduxEmpPageActionSetCurrentEmployeeIndex(dispatch, ' ');
        reduxEmpPageActionSetShow(dispatch, res.data.results);
      })
      .catch((e: Error) => {
        console.log(e);
        reduxEmpPageActionSetError(dispatch, e.message);
      });
  }, [dispatch]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const filteredEmployees = useFilteredEmployees()

  const state = useTypedSelector((state) => state);

  return (
    <Card>
      <CardHeader
        title={
          <>
            Employee List{' '}
            <Button onClick={fetchEmployees}>
              <Refresh />
            </Button>
          </>
        }
      ></CardHeader>
      <CardContent 
        sx={{ height: '75vh', overflowY: 'auto' }}
        >
        {state.empPage.status === EReduxEmpPageStatus.LOADING && (
          <CircularProgress />
        )}
        {state.empPage.status === EReduxEmpPageStatus.SHOWING && (
          <MenuList>
            {filteredEmployees.map((employee: IEmployee, idx) => {
              return <EmployeeListItem employee={employee} key={idx} />;
            })}
          </MenuList>
        )}
        {state.empPage.status === EReduxEmpPageStatus.ERROR && (
          <Alert severity="error">{state.empPage.errorMessage}</Alert>
        )}
      </CardContent>
    </Card>
  );
};
