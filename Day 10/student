import { useEffect, useState } from 'react';
import './stdList.css'
import axios from 'axios';

function List()
{
    const [name,setName]=useState([]);
    const [reg,setReg]=useState([]);
    const [course,setCourse]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/Student")
        .then((res)=>{
            const data=res.data;
            setName(data.map(index => index.Student_name))
            setReg(data.map(index => index.Student_reg));
            setCourse(data.map(index => index.Student_Course));
        }
        )
})
    return(
        <div className="list-con">
            <div className="l1">
                <h1>STUDENT LIST</h1>
                <div>
                    <div className='std-list-grid'>
                        <h2>Name</h2>
                        <h2>Register</h2>
                        <h2>Course</h2>
                    </div>
            
                    
                   {
                    name.map((item, index) => (
                        <div key={index} className='std-list-grid'>
                            <h6>{item}</h6>
                            <h6>{reg[index]}</h6>
                            <h6>{course[index]}</h6>
                        </div>
                    ))
                   }
                </div> 
            </div>
            <a href='/home' className='a3'><h3 id="h3-l">Back</h3></a>
        </div>
    )
}
export default List;
