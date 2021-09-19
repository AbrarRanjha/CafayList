import { Button,Paper} from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import fireDb from "../firebase";

const initialState={
    name:'',
    city:'',
    drinks:'',
    pin:'',
}

export const AddEdit = () => {
const  [state,setState]=useState(initialState);
const{name,city,drinks,pin}=state;
const handleInputChange=(e)=>{
const{name,value}=e.target;
setState({...state,[name]:value});
}
const handleSubmit=(e)=>{
e.preventDefault();
if(!name || !drinks || !pin || !city){
    toast.error('Fill all the fields properly');
}
else{
    fireDb.child("contacts").push(state,(err)=>{
if(err){
    toast.error(err);
}
else{
toast.success('Cafe Added Sucessfully!');
}
    })
}
}

let history = useHistory();

function handleClick() {
  history.push("/CafeList");
}

    return (
        <>
        
   <form  style={{width:'40%',margin:'auto',lineHeight:'50px'}} onSubmit={handleSubmit}>
  <div class="row mb-3 ">
    <div class="col-sm-10">
      <input type="text" 
      placeholder="Cafe Name"
      class="form-control" 
      id="name" 
      name="name"
      value={name}
      onChange={handleInputChange}
      />
    </div>
  </div>


  <div class="row mb-3 ">
    <div class="col-sm-10">
      <input type="text"
       class="form-control"
       placeholder="City"
       id="city" 
      name="city"
      value={city}
      onChange={handleInputChange}
      />
    </div>
  </div>




  <div class="row mb-3 ">
    <div class="col-sm-10">
      <input type="number" 
      class="form-control"
      placeholder="Drinks"
       id="drinks" 
      name="drinks"
      value={drinks}
      onChange={handleInputChange}
      />
    </div>
  </div>





  <div class="row mb-3 ">
    
    <div class="col-sm-10">
      <input type="number" 
      class="form-control" 
      placeholder="Pin Code"
      id="pin"
      name="pin"
      value={pin}
      onChange={handleInputChange}
      />
    </div>
  </div>

  <Button  style={{marginLeft:'15%'}} variant="contained"  color="primary" type="submit">
          add new cafe
    </Button>
    
  <Button style={{marginLeft:'0%'}} variant="contained" color="secondary" onClick={handleClick}>
          Cafe Information
  </Button>
</form>

        </>
    )
}
export default AddEdit;
