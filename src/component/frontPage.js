
import "./frontpage.css"
import {useEffect, useState} from "react"
import axios from "axios"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export function Front(){
        const [data,setData]=useState([])
        const [search,setSearch]=useState("")
        const [searchtitle,setSearchTitle]=useState("")
        const [detail,setDetail]=useState([])


        const [open, setOpen] = React.useState(false);
        const handleOpen = (id) => {
            axios.get(`http://localhost:8000/job/${id}`).then((data)=>{
            
             setDetail(data)
             
        })

        console.log("data",id)
            setOpen(true)
        };
        const handleClose = () => setOpen(false);
      

       useEffect(()=>{
           axios.get("http://localhost:8000/job").then((data)=>{
               console.log(data.data.job)
                setData(data.data.job)
           })
       },[])

       const handleSearch=(search)=>{
           
           axios.get(`http://localhost:8000/job`).then((data1)=>{
            
             var newData=data1.data.job.filter((e)=>e.city===search) 
             console.log("newData",newData)
             setData(newData)
        })
       }

       const handleSearch1=(search)=>{
           
        axios.get(`http://localhost:8000/job`).then((data1)=>{
         
          var newData1=data1.data.job.filter((e)=>e.title===search) 
          console.log("newData",newData1)
          setData(newData1)
     })
    }
        return <div className="mainDiv">
            <div className="navbar">
                <div className="navbar1stDiv">
                    
                        <button>JobHunt</button>
                        <button>findJob</button>
                        <button>Update Yourself</button>
                        <button style={{marginLeft:"300px"}}>Post a job</button>
                        <button style={{marginRight:"-200px"}}>Sign in</button>
                
                </div>
                <div className="navbar2ndDiv">
                    <h2>FIND A DREAM JOB</h2>
                    <h4>Browser your thousands of full-time or part time jobs near you</h4>

                </div>
                <div className="searchDiv">
                    
                    
                    <input onChange={(e)=>{setSearchTitle(e.target.value)}} className="titleInput" type="text" placeholder="search for title"/>
                    <button onClick={()=>{
                        handleSearch1(searchtitle)
                        setSearch("")
                    }} className="searchButton">Search by Tilte</button>
                    
                        
                        <input onChange={(e)=>{setSearch(e.target.value)}} className="titleInput" type="text" placeholder="search with location"/>
                
                    
                    <button onClick={()=>{
                        handleSearch(search)
                        setSearch("")
                    }} className="searchButton">Search by City</button>
                </div>
            </div>
            <div className="jobData">
                    {data.map(e=><div className="dataDiv" key={e.id}>
                        <div>
                        <img src={e.iamge} alt="error"/>
                        </div>
                        <div style={{marginLeft:"10px"}}>
                        <p>{e.title}</p>
                        <p>{e.description}</p>
                        <button onClick={()=>{
                            handleOpen(e.id)
                        }} className="viewDetail" style={{float:"right"}}>View Detail</button>
                        </div>
                    </div>)}
            </div>

            <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {detail.map(e=><div>
                {<p>Title: <span>{e.title}</span></p>}
                {<p>City: <span>{e.city}</span></p>}
                {<p>City: <span>{e.city}</span></p>}
                {<p>Description: <span>{e.description}</span></p>}
            </div>)}
        </Box>
      </Modal>
    </div>

        </div>
}