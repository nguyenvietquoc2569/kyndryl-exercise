import {
  Alert,
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  MenuList,
} from '@mui/material';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  reduxEmpPageActionSetCurrentEmployeeIndex,
  reduxEmpPageActionSetError,
  reduxEmpPageActionSetLoading,
  reduxEmpPageActionSetShow,
  reduxEmpPageActionToggleNewEmpModal,
} from '../../redux/employee-page/actions';
import { EReduxEmpPageStatus, IEmployee } from '../../redux/employee-page/type';
import { useTypedSelector } from '../../redux/store';
import { EmployeeListItem } from './employee-list-item';
import Refresh from '@mui/icons-material/Refresh';
import { useFilteredEmployees } from '../../hooks/filtered-employees-hook';
import { fetchAccountService } from '../../services/accounts';
import { AddCircle } from '@mui/icons-material';

export const EmployeeList = () => {
  const dispatch = useDispatch();
  const fetchEmployees = useCallback(() => {
    dispatch(reduxEmpPageActionSetLoading());
    fetchAccountService()
      .then((res) => {
        dispatch(reduxEmpPageActionSetCurrentEmployeeIndex(' '));
        dispatch(reduxEmpPageActionSetShow(res.data.results));
      })
      .catch((e: Error) => {
        console.log(e);
        dispatch(reduxEmpPageActionSetError(e.message));
      });
  }, [dispatch]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const showNewEmpModal = useCallback(() => {
    dispatch(reduxEmpPageActionToggleNewEmpModal(true))
  }, [dispatch])

  const filteredEmployees = useFilteredEmployees()

  const state = useTypedSelector((state) => state);

  return (
    <Card>
      <CardHeader
        title={
          <>
            Employee List{' '}
            <Button
              onClick={fetchEmployees}
              startIcon={<Refresh />}
            >
            </Button>
            <Button
             startIcon={<AddCircle />}
             onClick={showNewEmpModal}>
              Add
            </Button>
            
          </>
        }
      ></CardHeader>
      <CardContent 
        sx={{ height: '52vh', overflowY: 'auto' }}
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
