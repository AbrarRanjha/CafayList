import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router';
import fireDb from '../firebase';
import { Link } from 'react-router-dom';
import {TableContainer,Table,Button,TableBody,TableHead,TableRow,TableCell,Paper,TablePagination} from "@material-ui/core";

import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  tcell:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
  },
  tcells:{
    color:'black',
    textAlign:'center',
  
   
  },
  thead:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'red'
  },
  button:{
    backgroundColor:'white',
    color:"Black",
    borderRadius:'5px',
    marginLeft:'5%'
  }

  
});
export const Home = () => {
  const classes = useStyles();
    const [data,setData]=useState({});
    const [page,setPage]=useState(0);
    const[rowsPerPage,setRowsPerPage]=useState(5);
    useEffect(
        ()=>{
            fireDb.child('contacts').on("value",(snapshot)=>{
                if(snapshot.val() !==null){
                    setData({...snapshot.val()});
                }
                else{
                    setData({});
                }
            });
            return()=> {
                setData({});
            }
        },[]
    );

    const onChangePage=(event,nextPage)=>{
        setPage(nextPage);
          }
        
        
          const onRowsPerPageChange=(event)=>{
            setRowsPerPage(event.target.value);
          }
          let history = useHistory();

          function handleClick() {
            history.push("/");
          }
    return (
        <>
       <h1  style={{backgroundColor:"crimson ",border:'1px solid grey',fontSize:'50px' ,color:'white',width:'60%',margin:'auto'}}>
         <center>
        <Button variant="contained"   color="secondary" onClick={handleClick}>
          Go Back
        </Button>
    </center>
      </h1>
        <TableContainer  style={{width:'60%',margin:'auto'}} component={Paper}> 
   
  <Table>
   
    <TableHead >
      <TableRow style={{fontWeight:'bold',backgroundColor:"crimson "}}>
        <TableCell className={classes.tcell}>Cafe Name </TableCell>
        <TableCell className={classes.tcell}>City Name </TableCell>
        <TableCell className={classes.tcell}>Drinks</TableCell>
        <TableCell className={classes.tcell}>Pin Code </TableCell>
        <TableCell className={classes.tcell}>View </TableCell>
      </TableRow>
    </TableHead>
    {Object.keys(data).sort().reverse().slice(page*rowsPerPage,page*rowsPerPage+rowsPerPage).map((id,index) => (
    <TableBody>
    <TableRow key={id} >
  <TableCell  className={classes.tcells}>{data[id].name}</TableCell>
  <TableCell  className={classes.tcells}>{data[id].city}</TableCell>
  <TableCell  className={classes.tcells}>{data[id].drinks}</TableCell>
  <TableCell  className={classes.tcells}>{data[id].pin}</TableCell>
  <TableCell  className={classes.tcells}><Link style={{textDecoration:'none'}} to={`/view/${id}`}>Details</Link></TableCell>
    </TableRow>
    

    </TableBody>
))}
  </Table>
  <TablePagination
 rowsPerPageOptions={[5,10,15,20]}
 count={Object.keys(data).length}
 rowsPerPage={rowsPerPage}
 page={page}
 onPageChange={onChangePage}
 onRowsPerPageChange={onRowsPerPageChange}
 />
 
 
</TableContainer>
 




        </>
    )
}
export default Home;
