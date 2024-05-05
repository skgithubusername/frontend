import { FaHome } from "react-icons/fa";
import { GiButterflyKnife } from "react-icons/gi";
import { FaPlug } from "react-icons/fa";
import { FaGlasses } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";


function Left() {
  return (
    <div className=" w-1/6  h-lvh border-r-2 border-gray-800">
     <h1 className=" ml-4 text-yellow-400 mb-6  mt-4 font-semibold ">Flame</h1>

     <div >
     <h1 className="flex pb-2 m-2  font-semibold cursor-pointer text-gray-200"><FaHome className="m-1  bg-gray-500  rounded-full" />Dashboard</h1>

     <h1 className="flex pb-2 m-2  font-semibold cursor-pointer text-gray-500"><GiButterflyKnife  className="m-1" />Play</h1>
     <h1 className="flex pb-2 m-2  font-semibold cursor-pointer text-gray-500"><FaPlug className="m-1" />Tournament</h1>
     <h1 className="flex pb-2 m-2  font-semibold cursor-pointer text-gray-500"><FaGlasses  className="m-1" />Watch</h1>
     <h1 className="flex pb-2 m-2  font-semibold cursor-pointer text-gray-500"><MdLeaderboard className="m-1" />Leadership</h1>
     <h1 className="flex pb-2 mt-40  font-semibold cursor-pointer text-gray-500"><IoLogOutSharp   className="m-1" />Logout</h1>
     
     </div>
    </div>
  );
}

export default Left;
