// Right.js
import { CiSearch } from "react-icons/ci";


function Right() {


  return (
    <div className=" w-1/4  h-lvh ">
       <div className=" mt-6 pl-2">
       <h1 className=" text-gray-500">Profile <span className=" text-white">Statistics</span></h1>
        <p className=" text-gray-500">Status <span className=" text-green-500">Online</span> </p>
        <p className=" text-gray-500">145 Countries </p>

        <h1 className=" text-white">Classical</h1>
        <p className=" text-gray-500">Top  68.9%</p>
        <hr className="  h-[1.5px]  bg-gradient-to-br from-green-500 to-gray-800 " />
    
        <h1 className=" text-white">Classical</h1>
        <p className=" text-gray-500">Top  68.9%</p>
        <hr className="  h-[1.5px]  bg-gradient-to-br from-gray-800  to-blue-600 " />
    
        <h1 className=" text-white">Classical</h1>
        <p className=" text-gray-500">Top  68.9%</p>
        <hr className="  h-[1.5px]  bg-gradient-to-br from-pink-600 to-green-600 " />
    
        <h1 className=" text-white mt-4">Map Distributions</h1>
        <p className=" text-gray-500">Taking <span className=" text-white">Active</span></p>
        <p className=" text-gray-600">345 elements install</p>

        <div className="bg-gray-600  rounded flex mt-8 mr-1 ">
        <input className=" pl-1  w-28 bg-gray-600  rounded outline-none  " type="text" placeholder="Search Player" />
        <CiSearch className="  mt-1 md:ml-40" />
        </div>
       </div>

<div>
  <h1>Leaderboard</h1>

  <div className=" flex border-2 rounded-xl mr-1 border-gray-600">
    <p className=" bg-gray-500 w-20  text-center m-1 h-6 rounded-xl text-white">Global</p>
    <p className=" text-gray-500 pl-2">Friends </p>
  </div>
</div>



    </div>
  );
}

export default Right;
