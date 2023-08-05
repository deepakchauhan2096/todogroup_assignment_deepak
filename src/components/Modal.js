import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import { useSelector, useDispatch } from 'react-redux';
import { addGroup } from '../redux/actions';
import { TextField, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: 'none',
  borderRadius: '10px',
};

const Modals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const handleAddGroup = () => {
    const newGroup = {
      id: groups.length + 1,
      from: parseInt(from),
      to: parseInt(to),
      items: [],
    };

    dispatch(addGroup(newGroup));
    setFrom('');
    setTo('');
    setError('');
    handleClose();
  };



  return (
    <div>
      <Button onClick={handleOpen} sx={{ margin: '0 10px', textTransform: 'capitalize', textDecoration: 'none' }}>
        <AddIcon sx={{ marginRight: '15px' }} />{' '}
        <b style={{ color: '#696969' }}>Add Group</b>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>Add Group</Typography>
          <div style={{ display: 'flex', gap: '20px', padding: '10px 0' }}>
            <TextField
              id="outlined-basic"
              label="From"
              variant="outlined"
              size="small"
              type="number"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
            />
            <TextField
              id="outlined-basic"
              label="to"
              variant="outlined"
              size="small"
              type="number"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
            />
          </div>
          <Button variant="contained" onClick={handleAddGroup}>
            Add Group
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
