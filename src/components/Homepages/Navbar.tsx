import { IoArrowForwardCircleOutline } from "react-icons/io5";
import logo from "../../assets/image/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    const navigate = useNavigate();
    return(
        <div className="flex flex-row justify-between h-14 bg-transparent text-white">
            <div className="ml-10 flex justify-center items-center mt-3" style={{height:'35px', width: '40px', cursor:"pointer"}}>
               <img src={logo} onClick={()=>{navigate("/")}}></img>
            </div>
            <div className="flex flex-row justify-center items-center">
                <p className="link font-bold" style={{fontSize:'18px'}} onClick={()=>{navigate("/")}}>Home</p>
                <p className="ml-10 link font-bold" style={{fontSize:'18px'}} onClick={()=>{navigate("/about")}}>About</p>
                <p className="ml-10 link font-bold" style={{fontSize:'18px'}} onClick={()=>{navigate("/features")}}>Features</p>
                <p className="ml-10 link font-bold" style={{fontSize:'18px'}} onClick={()=>{navigate("/pricing")}}>Pricing</p>
            </div>
            <div className="mr-10 flex flex-row justify-center items-center">
            <button type="button" className="flex flex-row justify-center items-center btn" onClick={()=>{navigate("/login")}}>
                <IoArrowForwardCircleOutline style={{height: '25px', width: '25px'}}/> 
            <p className="ml-1" style={{fontSize:'16px', fontWeight:'600', marginBottom:'3px'}}>Login</p> </button>
            </div>
        </div>
    )
}

export default Navbar;