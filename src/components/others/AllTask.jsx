import React, { useContext } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(Authcontext)
    // console.log(authData)
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
            <div>
                < div className='bg-fuchsia-400 mb-2 py-2 px-4 flex justify-between rounded-3xl'>
                    <h2 className='text-xl font-medium w-1/5 text-amber-100 '>Employee Name</h2>
                    <h3 className='text-xl font-medium w-1/5  text-amber-100'>New Task</h3>
                    <h5 className='text-xl font-medium w-1/5  text-amber-100'>Active Task</h5>
                    <h5 className='text-xl font-medium w-1/5  text-amber-100'>Completed</h5>
                    <h5 className='text-xl font-medium w-1/5  text-amber-100'>Failed</h5>
                </div>
            </div>

            <div className='h-[80%]'>
                {userData.map((elem, idx) => {
                    return < div key={idx} className=' mb-2 py-2 px-4 flex justify-between rounded-3xl border-2 border-emerald-400 '>
                        <h2 className='text-xl font-medium w-1/5 text-white'>{elem.firstname}</h2>
                        <h3 className='text-xl font-medium w-1/5 text-yellow-300'>{elem.taskNumbers.active}</h3>
                        <h5 className='text-xl font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h5>
                        <h5 className='text-xl font-medium w-1/5 text-amber-600'>{elem.taskNumbers.completed}</h5>
                        <h5 className='text-xl font-medium w-1/5 text-cyan-500'>{elem.taskNumbers.failed}</h5>
                    </div>
                })}
            </div>


        </div>
    )
}

export default AllTask