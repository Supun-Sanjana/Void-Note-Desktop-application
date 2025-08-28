import { Plus } from 'lucide-react'
import React from 'react'

const Task = () => {
    return (
        <div>

            <div className='w-full h-[170px]  bg-[#141414] px-[30px] rounded-2xl border-1 border-[#3A3D47]'>
                <div className='flex gap-2 py-[40px] px-[30px]'>
                    <input placeholder='Add a new task ...' type="text" className='pl-[20px] w-full border-[1px] rounded-[5px] mr-3 border-[#3A3D47]' />
                    <button className='flex gap-2 bg-[#676BEB] px-6 py-1 rounded-[5px]'><Plus /> Add   </button>
                </div>
                <p className='flex justify-center text-[#717171]'>Press enter to quickly add , or click ‘Add Task’ </p>

            </div>


        </div>
    )
}

export default Task
