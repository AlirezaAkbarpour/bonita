import DoctorListComponent from "@/components/doctorListComponent";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gray-400 flex px-2 py-4 max-md:flex-col max-md:h-full">
      <div className="flex-1 max-md:flex-auto w-64 mx-2 flex justify-center">
        <DoctorListComponent/>
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
