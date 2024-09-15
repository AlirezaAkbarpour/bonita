import Link from "next/link";
import SearchIcon from "./SearchIcon";
import ListItem from "./ListItem";

export default function DoctorListComponent() {
  return (
    <div className="w-80 bg-manual_gray px-1 py-1 mx-3 rounded-lg overflow-hidden">
        <div className="flex flex-row w-full px-4 h-16 items-center justify-between">
            <div className="text-black text-lg font-semibold">Your Doctor</div>
            <div className="text-blue-600 py-1 px-2  text-sm rounded-full hover:cursor-pointer font-semibold hover:ring hover:bg-blue-200 transition-all">
                <Link href=''>See all</Link>
            </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-72 mx-5 h-12 px-1 bg-white 
            rounded-2xl flex justify-between items-center border border-gray-200">
            <SearchIcon/>
            <input className="w-64 mx-2 focus:outline-none focus:ring-0 text-gray-600" placeholder="Search">
            </input>
          </div> 
        </div>
        <ul className="w-full h-full px-4">
          <ListItem/> 
          <ListItem/> 
          <ListItem/>     
          <ListItem/>  
        </ul>
    </div>
  )
}
