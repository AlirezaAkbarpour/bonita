import {  FilterAltOutlined } from '@mui/icons-material'
import React from 'react'
import PerformanceItem from './performanceItem'

export interface dataType {
  id:number,
  name:string,
  value:number,
  date: Date,
  increase:number,
}

const data : dataType[] = [
  {
    id:125,
    name:"Hart",
    value:50,
    date: new Date('2023-05-04'),
    increase:8,
  },
  {
    id:524,
    name:"Legs",
    value:72,
    date: new Date('2022-08-06'),
    increase:5,
  },
]

export default function Performance() {
  return (
    <div className='w-full bg-manual_gray rounded-xl px-4 py-4'>
                <div className='w-full flex items-center justify-between'>
                    <div className='w-1/2 text-black text-xl font-medium'>Performance</div>
                    <div className='w-24 rounded-full text-blue-600 text-lg font-light flex 
                    items-center justify-end p-1 transition-all hover:ring hover:bg-blue-200 hover:cursor-pointer'>Filter <FilterAltOutlined className='mx-1'/></div>
                </div>
                <ul className='mt-8'>
                    {data.map((item,index) => (<PerformanceItem key={index} id={item.id}
                    name={item.name} value={item.value} date={item.date} increase={item.increase}/>))}
                </ul>
    </div>
  )
}
