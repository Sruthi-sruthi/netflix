import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Navbar(){
    return(
        <>
           <div className="nav">
        <div className="left-container">
            <img className='nav-main-icon' src="https://th.bing.com/th/id/R.d01a8fbdf7bbb4d9dc936d06e151039f?rik=M%2fRoSy9w3784Dg&riu=http%3a%2f%2fwww.tubefilter.com%2fwp-content%2fuploads%2f2016%2f07%2fNetflix_logo.jpg&ehk=P%2b64IrAZDD9owhjJ6jQ9ubpeHNhDoTjfAZZ0VABXp3E%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <div className="nav-btn-group">
        <p className='nav-btn'>Home</p>
        <p className='nav-btn'>TV shows</p>
        <p className='nav-btn'>Movies</p>
        <p className='nav-btn'>New & popular</p>
        <p className='nav-btn'>My List</p>
        </div>
        </div>
        <div className="right-container">
            <SearchIcon/>
            <p>children</p>
            <NotificationsIcon/>

            <img className='user-icon' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
        < ArrowDropDownIcon/>
        </div>
        </div>
        </>
    )
}
export default Navbar