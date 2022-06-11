import { Avatar, ListItemAvatar, ListItemText, MenuItem } from '@mui/material';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { reduxEmpPageActionSetCurrentEmployeeIndex } from '../../redux/employee-page/actions';
import { IEmployee } from '../../redux/employee-page/type';

export const EmployeeListItem: FC<{
  employee: IEmployee;
}> = ({employee}) => {
  const dispatch = useDispatch()
  return (
    <MenuItem
      // key={`${idx}-${employee.cell}`}
      onClick={() => {
        reduxEmpPageActionSetCurrentEmployeeIndex(dispatch, employee.email);
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt={`${employee.name.title ? `${employee.name.title} ` : ``}${
            employee.name.first
          } ${employee.name.last}`}
          src={employee.picture.thumbnail}
        />
      </ListItemAvatar>
      <ListItemText
        primary={`${employee.name.title ? `${employee.name.title}. ` : ``}${
          employee.name.first
        } ${employee.name.last}`}
        secondary={`Gender: ${employee.gender}`}
      />
    </MenuItem>
  );
};
