import DoctorListComponent from "@/components/doctorListComponent";
import Add from "@mui/icons-material/Add";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-400 flex px-2 py-4 max-md:flex-col max-md:h-full">
      <div className="flex-1 max-md:flex-auto w-56 mx-2 flex flex-col">
        <DoctorListComponent/>
        <div className="w-full h-24 bg-black mx-3 rounded-lg flex justify-center items-center px-8">
                <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center p-2">
                  <Add sx={{color:'black'}}/>
                </div>
                <div className="mx-4">
                        <div className="">Add new doctor</div>
                        <div>Give contact info</div>
                </div>
        </div>
      </div>
      <div className="flex-2 max-md:flex-auto mx-2 bg-green-500">
         www
      </div>
      <div className="flex-1 max-md:flex-auto mx-2 bg-blue-800">
        sss
      </div>
    </div>
  );
}
