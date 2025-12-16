import React from 'react'

const TaskListNumber = ({data}) => {
    return (
        <div className='m-8 flex justify-around gap-5  '>
        
                <div className='bg-blue-400 w-[40%] h-min p-8 rounded-3xl '>
                    <h1 className='text-4xl font-bold'>{data.taskNumbers.newTask}</h1>
                    <h3 className='text-2xl font-semibold'>New Task</h3>
                </div>
                <div className='bg-red-400 w-[40%] h-min p-8 rounded-3xl'>
                    <h1 className='text-4xl font-bold'>{data.taskNumbers.active}</h1>
                    <h3 className='text-2xl font-semibold'>Accept Task</h3>
                </div>
                <div className='bg-emerald-400 w-[40%] h-min p-8 rounded-3xl'>
                    <h1 className='text-4xl font-bold'>{data.taskNumbers.completed}</h1>
                    <h3 className='text-2xl font-semibold'>Complete Task </h3>
                </div>
                <div className='bg-yellow-400 w-[40%] h-min p-8 rounded-3xl'>
                    <h1 className='text-4xl font-bold'>{data.taskNumbers.failed}</h1>
                    <h3 className='text-2xl font-semibold'>Failed Task</h3>
                </div>
        
        </div>
    )
}

export default TaskListNumber
