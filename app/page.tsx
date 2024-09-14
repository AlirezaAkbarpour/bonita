import DoctorListComponent from "@/components/doctorListComponent";
import Add from "@mui/icons-material/Add";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-400 flex px-2 py-4 max-md:flex-col max-md:h-full">
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
        <div className="w-80 h-96 m-2 rounded-lg flex justify-center items-center bg-gradient-to-t from-blue-800 to-purple-800">
            <span className="text-4xl">Bonita</span>
            <svg height="384" width="320" xmlns="http://www.w3.org/2000/svg"
               className="z-50 absolute p-4 opacity-45"
            >
              <svg width="286" height="360" viewBox="0 0 320 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <line x1="134.432" y1="0.748572" x2="319.432" y2="318.749" stroke="white"/>
                 <line x1="0.431507" y1="33.7474" x2="216.432" y2="402.747" stroke="white"/>
                 <line x1="6.75118" y1="179.566" x2="318.751" y2="0.566312" stroke="white"/>
                 <line x1="6.75118" y1="329.566" x2="318.751" y2="150.566" stroke="white"/>
                 <circle cx="132" cy="257" r="16" fill="white"/>
                 <circle cx="179" cy="75" r="16" fill="white"/>
                 <circle cx="147" cy="20" r="6" fill="white"/>
                 <circle cx="294" cy="164" r="5" fill="white"/>
                 <circle cx="40" cy="311" r="5" fill="white"/>
              </svg>
            </svg>
        </div>
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
