import Bonita from "@/components/bonita";
import DoctorListComponent from "@/components/doctorListComponent";
import Add from "@mui/icons-material/Add";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-400 flex px-2 py-4 max-md:flex-col max-md:h-full">
      <aside className="w-1/4 max-md:flex-auto mx-2 flex flex-col">
        <DoctorListComponent/>
        <div className="w-80 h-20 bg-zinc-900 mx-3 rounded-lg flex justify-center items-center px-8">
                <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center p-2">
                  <Add sx={{color:'black'}} fontSize="medium"/>
                </div>
                <div className="mx-4">
                        <div className="text-white text-base font-normal">Add new doctor</div>
                        <div className="text-gray-400 text-sm font-normal">Give contact information</div>
                </div>
        </div>
        <Bonita/>
      </aside>
      <aside className="w-1/2 max-md:flex-auto mx-2 bg-green-500">
         www
      </aside>
      <aside className="w-1/2 max-md:flex-auto mx-2 bg-blue-800">
        sss
      </aside>
    </main>
  );
}
