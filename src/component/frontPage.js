
import "./frontpage.css"
import {useEffect, useState} from "react"
import axios from "axios"
export function Front(){
        const [data,setData]=useState([])
        const [search,setSearch]=useState("")

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
                    
                    
                    <input  className="titleInput" type="text" placeholder="search for title"/>
                    
                    
                        
                        <input onChange={(e)=>{setSearch(e.target.value)}} className="titleInput" type="text" placeholder="search with location"/>
                
                    
                    <button onClick={()=>{
                        handleSearch(search)
                        setSearch("")
                    }} className="searchButton">Search</button>
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
                        <button className="viewDetail" style={{float:"right"}}>View Detail</button>
                        </div>
                    </div>)}
            </div>

        </div>
}