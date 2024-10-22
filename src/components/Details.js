import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import  Card  from '@mui/material/Card';
import  CardContent  from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from "@mui/icons-material/Phone";
import WorkIcon from "@mui/icons-material/Work";
import LocationIcon from "@mui/icons-material/LocationOn";

const Details = () => {
  return (
    <div className='container mt-3'>
        <h1 style={{fontWeight:400 , fontStyle:'italic'}}>Welcome</h1>

        <Card sx={{ maxWidth: 600 }}  >
            <CardContent>
            <div className='add_btn '>
                            <button className='btn btn-primary mx-2'><CreateIcon /></button> 
                            <button className='btn btn-danger'><DeleteOutlineIcon /></button>
                        </div>
                <div className='row'>
                    <div className='left_view col-lg-6 col-md-6 col-12'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' style={{width:'100px'}} />
                        <h3 className='mt-3' >Name: <span >Akuno</span></h3>
                        <h3 className='mt-3' >Age: <span >29</span></h3>
                        <p className='mt-3'><MailOutlineIcon /> Email: <span>akunoxan.com</span></p>
                        <p className='mt-3'><WorkIcon /> Work: <span>Coder</span></p>
                        
                    </div>
                    <div className='right_view col-lg-6 col-md-6 col-12'>
                        <p>  </p>

                        <p className='mt-5'><PhoneIcon/> Mobile: <span>1234567890</span></p>
                        <p className='mt-3'><LocationIcon />Address: <span>Home</span></p>
                        <p className='mt-3'>Description : <spam> Lorem ipsum dolor sit amet consectetur adipisicing elit. </spam></p>
                    </div>
                </div>
            </CardContent>
        </Card>

    </div>
  )
}

export default Details