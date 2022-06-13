import { Modal, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useCallback, useState } from 'react';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { reduxEmpPageActionToggleNewEmpModal } from '../../redux/employee-page/actions';
import { useTypedSelector } from '../../redux/store';
import { NewEmployeeForm } from './new-employee-form';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: any) => ({
  paper: {
    position: 'absolute',
    width: '1000px',
    backgroundColor: 'white',
    boxShadow: 'white-smoke',
    padding: '10px',
    outline: 'none',
  },
}));

export const NewEmployeeModal: FC = () => {
  const dispatch = useDispatch();
  const isOpen = useTypedSelector((state) => state.empPage.isNewModalOpen);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const onClose = useCallback(() => {
    reduxEmpPageActionToggleNewEmpModal(dispatch, false);
  }, [dispatch]);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: 'flex',
        p: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={modalStyle} className={classes.paper}>
        <Typography variant="h6" id="modal-title">
          Add New Employee
        </Typography>
        <NewEmployeeForm
        ></NewEmployeeForm>
      </div>
    </Modal>
  );
};
