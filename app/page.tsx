import Bonita from "@/components/bonita";
import DoctorListComponent from "@/components/doctorListComponent";
import Add from "@mui/icons-material/Add";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gray-400 flex px-2 py-4 max-md:flex-col max-md:h-full">
      <aside className="w-auto max-md:flex-auto mx-2 flex flex-col">
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
      <article className="w-1/2 max-md:flex-auto mx-2">
         <section className="bg-manual_gray w-full rounded-lg px-5 py-3">
              <div className="flex justify-between p-4">
                <div className="text-zinc-800 p-1 mb-2 text-lg font-medium">Research</div>
                <div className="text-blue-800 p-1 mt-2 font-semibold text-base flex justify-center"><Add className="mx-1"  fontSize="medium"/>Add Research</div>
              </div>
              <div className="grid grid-cols-2 gap-4 ">
                <div className="w-full h-52 bg-white rounded-2xl py-2 mr-2">
                        <div className="flex justify-around">
                          <div className="py-2">
                          <div className="text-xl font-normal text-gray-500">Brain efficiency</div>
                          <div className="text-4xl font-bold text-black py-2">68%</div>
                          </div>
                          <div className="p-1 w-32 h-32">
                            <Image src="/statics/images/brain.png" alt="brain efficiency" width={128} height={128} />
                          </div>  
                        </div>
                        <div className="w-full px-4">
                                <div className="w-16 h-10 bg-yellow-200
                                 rounded-full flex justify-center items-center text-black text-lg font-semibold">18/25</div>
                                 <div className="w-full h-4 bg-manual_gray rounded-full my-2">
                                    <div className="w-1/4 h-4 rounded-full bg-gradient-to-r from-blue-800 to-purple-800"></div>
                                 </div>
                        </div>
                </div>
                <div className="w-full h-52 bg-white rounded-2xl py-2 mr-2">
                        <div className="flex justify-around">
                          <div className="py-2">
                          <div className="text-xl font-normal text-gray-500">Heart efficiency</div>
                          <div className="text-4xl font-bold text-black py-2">98%</div>
                          </div>
                          <div className="p-1 w-32 h-32">
                            <Image src="/statics/images/heart.png" alt="brain efficiency" width={128} height={121}/>
                          </div>  
                        </div>
                        <div className="w-full px-4">
                                <div className="w-16 h-10 bg-yellow-200
                                 rounded-full flex justify-center items-center text-black text-lg font-semibold">23/25</div>
                                 <div className="w-full h-4 bg-manual_gray rounded-full my-2">
                                    <div className="w-3/4 h-4 rounded-full bg-gradient-to-r from-blue-800 to-purple-800"></div>
                                 </div>
                        </div>
                </div>
              </div>
         </section>
      </article>
      <aside className="w-1/4 max-md:flex-auto mx-2 bg-blue-800">
      </aside>
    </main>
  );
}
