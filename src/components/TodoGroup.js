import React from 'react';
import TodoItem from './TodoItem';
import { Button, ButtonGroup, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const TodoGroup = ({ group, onDeleteGroup, index }) => {



    console.log(group,"group")






    return (
        <div className="container pt-4" > 
            <div className="row">
                <div className='col-12 d-flex'>
                    <Button ><DeleteIcon onClick={() => onDeleteGroup(group.id)} /></Button>
                    <div className="container">
                        <div className="row" >
                            <div className="col-3">
                                <ButtonGroup size='large' variant="outlined" aria-label="outlined button group" fullWidth>
                                    <Button disabled style={{ background: "#f9f9f9", width: "100%", textTransform: "capitalize" }}>Group {index}</Button>
                                    <Button disabled style={{ width: "20%", textAlign: "left" }}>{group.from}</Button>
                                    <Button disabled style={{ background: "#f9f9f9", color: "blue", width: "20%" }}><ArrowForwardIcon fontSize='14px' /></Button>
                                    <Button disabled style={{ width: "20%" }}>{group.to}</Button>
                                </ButtonGroup>
                            </div>

                            <div className="col-9">
                                <ButtonGroup size='large' variant="outlined" aria-label="outlined button group" fullWidth>
                                    <Typography disabled 
                                        style={{ background: "#f9f9f9",
                                        width: "100%", height:"41px", display: "flex",
                                        border: "1px solid whitesmoke",
                                        padding: "8px 10px",
                                        position:"relative",
                                        borderRadius: "5px" }}>
                                        {group.items.map((item,index) => (
                                            <TodoItem key={index} item={item} index={index}/>
                                        ))}
                                    <CheckCircleRoundedIcon sx={{position:"absolute",right:"10px",color:"lightgreen"}} />    
                                    </Typography>
                                    
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoGroup;
