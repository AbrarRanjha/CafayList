import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router';
import fireDb from '../firebase';
import {useParams } from 'react-router-dom';
import { makeStyles,Button } from '@material-ui/core';
import { Card,CardActionArea,CardMedia,Typography,CardContent } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });
export const View = () => {
    const classes = useStyles();
    const[user,setUser]=useState({}); 
    const{id}=useParams();
    useEffect(()=>{
        fireDb.child(`contacts/${id}`).get().then((snapshot)=>{
            if(snapshot.exists()){
                setUser({...snapshot.val()});
            }
            else{
                setUser({});
            }
        })
    },[id])

    let history = useHistory();

          function handleClick() {
            history.push("/CafeList");
          }
    return (
        <>
         
<Card className={classes.root} style={{width:'30%', margin:'auto',backgroundColor:'crimson'}}>

         <center>
        <Button variant="contained" style={{width:'100%',backgroundColor:"crimson ",color:'white',margin:'auto',fontWeight:'bold'}}  color="secondary" onClick={handleClick}>
          Go Back
        </Button>
    </center>
      
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://thumbs.dreamstime.com/z/cafe-logo-use-natural-coffee-abstract-cup-as-icon-which-used-cafes-restaurants-other-illustrations-suitable-food-115186107.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
             <h1 style={{fontSize:'20px',fontWeight:'bold'}}> Cafe Name: <span style={{fontSize:'17px'}}> {user.name}</span></h1>
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
          <h1 style={{fontSize:'20px',fontWeight:'bold'}}> Location of Cafe: <span style={{fontSize:'17px'}}> {user.city}</span></h1>
          </Typography>
        
          <Typography variant="body2" color="textSecondary" component="p">
          <h1 style={{fontSize:'20px',fontWeight:'bold'}}> Total Drinks: <span style={{fontSize:'17px'}}> {user.drinks}</span></h1>
          </Typography>
        
          <Typography variant="body2" color="textSecondary" component="p">
          <h1 style={{fontSize:'20px',fontWeight:'bold'}}> Pin Code: <span style={{fontSize:'17px'}}> {user.pin}</span></h1>

          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>



        </>
    )
}

export default View;