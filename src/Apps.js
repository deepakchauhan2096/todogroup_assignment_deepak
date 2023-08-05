import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteGroup, updateGroupItems } from './redux/actions';
import TodoGroup from './components/TodoGroup';
import axios from 'axios';
import Modals from './components/Modal';
import { Button } from '@mui/material';



const App = () => {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');


  const handleDeleteGroup = (groupId) => {
    dispatch(deleteGroup(groupId));
  };

  const handleShowStatus = async () => {
    try {
      const allItemIds = groups.flatMap((group) =>
        Array.from({ length: group.to - group.from + 1 }, (_, i) => group.from + i)
      );

      const itemResponses = await Promise.all(
        allItemIds.map((id) => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`))
      );

      const itemData = itemResponses.map((response) => response.data);

      groups.forEach((group) => {
        const groupItems = itemData.filter((item) => group.from <= item.id && item.id <= group.to);
        dispatch(updateGroupItems(group.id, groupItems));
      });
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div className="app">
      <div className="todo-groups">
        {groups.map((group, index) => (
          <TodoGroup
            key={group.id}
            group={group}
            index={index + 1}
            onDeleteGroup={handleDeleteGroup}
          />
        ))}
      </div>  
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Modals />
          </div>
          <div className='col-4 text-center py-3'>
            <Button sx={{margin:"20px",textTransform:"capitalize"}} variant='contained' size='large' onClick={handleShowStatus} >Show Status</Button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
