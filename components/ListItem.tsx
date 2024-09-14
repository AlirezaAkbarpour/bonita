import Image from 'next/image'
import MoreHoriz from '@mui/icons-material/MoreHoriz'
import { Divider } from '@mui/material'

export default function ListItem() {
  return (
    <>
    <li className="w-full my-2">
                  <div className="w-full flex justify-between py-2">
                      <div className="flex">
                        <Image src='/statics/images/photo.jpg' width={48} height={48} alt="Doctor Picture"
                             className="w-12 h-12 rounded-full mx-2 shadow-lg"
                        />
                        <div className="px-2">
                          <div className="text-base text-black font-medium">lizzie Alexandra</div>
                          <div className="text-sm text-gray-400 font-normal">oncology</div>
                        </div>
                      </div>
                      <div className="w-6 h-6 mr-6 flex items-start">
                        <MoreHoriz sx={{color:"gray"}}/>
                      </div>
                  </div>
                    <Divider orientation="horizontal" className='mt-1' sx={{color:'gray'}} variant="fullWidth" />      
          </li>   
    </>
  )
}
