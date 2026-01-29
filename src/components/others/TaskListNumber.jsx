import React from 'react'

const TaskListNumber = ({ data }) => {
    return (
        <div className="m-4 md:m-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="bg-blue-400 p-6 md:p-8 rounded-3xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    {data.taskNumbers.newTask}
                </h1>
                <h3 className="text-xl md:text-2xl font-semibold">
                    New Task
                </h3>
            </div>

            <div className="bg-red-400 p-6 md:p-8 rounded-3xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    {data.taskNumbers.active}
                </h1>
                <h3 className="text-xl md:text-2xl font-semibold">
                    Accept Task
                </h3>
            </div>

            <div className="bg-emerald-400 p-6 md:p-8 rounded-3xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    {data.taskNumbers.completed}
                </h1>
                <h3 className="text-xl md:text-2xl font-semibold">
                    Complete Task
                </h3>
            </div>

            <div className="bg-yellow-400 p-6 md:p-8 rounded-3xl text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    {data.taskNumbers.failed}
                </h1>
                <h3 className="text-xl md:text-2xl font-semibold">
                    Failed Task
                </h3>
            </div>

        </div>
    )
}

export default TaskListNumber
