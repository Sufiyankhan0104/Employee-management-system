import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(Authcontext)

    return (
        <div className="bg-[#1c1c1c] p-4 md:p-5 rounded mt-5 overflow-x-auto">
            
            {/* Header */}
            <div className="hidden md:block">
                <div className="bg-fuchsia-400 mb-2 py-2 px-4 flex justify-between rounded-3xl">
                    <h2 className="text-lg font-medium w-1/5 text-amber-100">Employee Name</h2>
                    <h3 className="text-lg font-medium w-1/5 text-amber-100">New Task</h3>
                    <h5 className="text-lg font-medium w-1/5 text-amber-100">Active Task</h5>
                    <h5 className="text-lg font-medium w-1/5 text-amber-100">Completed</h5>
                    <h5 className="text-lg font-medium w-1/5 text-amber-100">Failed</h5>
                </div>
            </div>

            {/* Data */}
            <div className="space-y-4">
                {userData.map((elem, idx) => {
                    return (
                        <div
                            key={idx}
                            className="py-4 px-4 rounded-3xl border-2 border-emerald-400 
                                       flex flex-col md:flex-row md:justify-between gap-3"
                        >

                            {/* Employee Name */}
                            <div className="md:w-1/5">
                                <p className="text-sm text-gray-400 md:hidden">Employee</p>
                                <h2 className="text-lg font-medium text-white">
                                    {elem.firstname}
                                </h2>
                            </div>

                            {/* New Task */}
                            <div className="md:w-1/5">
                                <p className="text-sm text-gray-400 md:hidden">New Task</p>
                                <h3 className="text-lg font-medium text-yellow-300">
                                    {elem.taskNumbers.newTask}
                                </h3>
                            </div>

                            {/* Active Task */}
                            <div className="md:w-1/5">
                                <p className="text-sm text-gray-400 md:hidden">Active Task</p>
                                <h5 className="text-lg font-medium text-blue-600">
                                    {elem.taskNumbers.active}
                                </h5>
                            </div>

                            {/* Completed */}
                            <div className="md:w-1/5">
                                <p className="text-sm text-gray-400 md:hidden">Completed</p>
                                <h5 className="text-lg font-medium text-amber-600">
                                    {elem.taskNumbers.completed}
                                </h5>
                            </div>

                            {/* Failed */}
                            <div className="md:w-1/5">
                                <p className="text-sm text-gray-400 md:hidden">Failed</p>
                                <h5 className="text-lg font-medium text-cyan-500">
                                    {elem.taskNumbers.failed}
                                </h5>
                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AllTask
