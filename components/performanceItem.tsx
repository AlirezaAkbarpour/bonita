import { ArrowUpward } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'
import React from 'react'

export default function PerformanceItem() {
  return (
    <div className='w-full h-16 bg-white rounded-lg flex justify-between items-center my-4 px-2 text-black'>
            <div className='text-lg font-medium'>Hart</div>
            <div className='flex items-center text-sm font-medium'><CircularProgress color='info' sx={{width:'24px',height:'24px',margin:.5,padding:0.5}} variant='determinate' value={86}/> 86% </div>
            <div className='text-black text-base font-normal flex justify-between'>Summer <div className='text-gray-400 mx-2'>7-8-2023</div> </div>
            <div className='bg-yellow-200 px-2 py-1 rounded-full
             text-black font-normal flex 
             justify-center items-center'><ArrowUpward className=''/>3% </div>
    </div>
  )
}
