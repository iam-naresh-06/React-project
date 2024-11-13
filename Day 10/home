import './Home.css'
import { Link } from 'react-router-dom';
import lo1 from './studentlist-removebg-preview.png'
import lo2 from './addstd-removebg-preview.png'
import lo3 from './image.png'
function Home()
{
    const navAdd=()=>{
        window.location.href="/addStudent";
    }
    const navList=()=>{
        window.location.href="/ListOfStudent";
    }
    const navEdit=()=>{
        window.location.href="/editStudent";
    }
    return(
        <div className='home-body'>
            <div>
            <header>
                <div className='logo'><h1>Student Management System</h1></div>
                <div className='search-box'>
                    <form action=''>
                        <input type='text' name="search" id="srch" placeholder='Search'/>
                        <button type='submit'><i className='fa fa-search'></i></button>
                    </form>
                </div>
                <ul>
                    <li><a href='/home' id="n">Home</a></li>
                    <li><a href='#'  id='n'>Student</a></li>
                    <li><a href='#' id='n'>Teacher</a></li>
                    <li><a href='#' id='n'>About</a></li>
                    <li>
                        <a href='https://www.linkedin.com/in/saravanan-c-cse' target='_blank' id="face"><i className='fab fa-linkedin'></i></a>
                        <a href='https://github.com/itzmesara/React-Projects/' target="_blank"id="whats"><i className='fab fa-github' ></i></a>
                    </li>
                </ul>
        <div className='boxesss'>
            <div className='boxes'>
                <div title="Add Student"className='box' onClick={navAdd}>
                    <p>Add Student</p>
                    <img src={lo2}></img>
                </div>
                <div title="Student List"className='box' onClick={navList}>
                    <p>Student List</p>
                    <img src={lo1}></img>
                </div>
                <div title="Edit Student" onClick={()=> window.location.href="/editStudent"} className='box'>
                    <p>Edit Student</p>
                    <img src={lo3}></img>
                </div>
            </div>
            </div>
            </header>
            <div className='navbar'>
                <ul>
                    <li>
                        <div id="icons"><a href=''><i class="fa fa-bars"></i></a>
                        <p>Menu</p>
                        </div>
                    </li>
                    <li>
                        <div id="icons"><a href=''><i class="fa-solid fa-house"></i></a>
                        <p>Home</p></div>
                    </li>
                    <li>
                        
                        <div id="icons" onClick={navAdd}><a href="/addStudent"><i class="fa-solid fa-user-plus"></i></a>
                        <p>Add Student</p>
                        </div>
                        
                    </li>
                    <li>
                        <div id='icons' onClick={navList}><a href=""><i class="fa-solid fa-users"></i></a>
                        <p>Students List</p></div>
                    </li>
                    <li>
                        <div id="icons"><a href=""><i class="fa-solid fa-book-open"></i></a>
                        <p>Academic</p></div>
                    </li>
                    <li>
                        <div id='icons'><a href=""><i class="fa-regular fa-calendar"></i></a>
                        <p>Calendar</p>
                        </div>
                    </li>
                    <li>
                        <div id='icons'><a href=""><i class="fa-solid fa-circle-info"></i></a>
                        <p>Info</p>
                        </div>
                    </li>
                    <li>
                    <Link to="/"><button className='login-btn'>Log Out</button></Link>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Home;
