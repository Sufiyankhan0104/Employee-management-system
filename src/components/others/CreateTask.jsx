import React, { useContext } from 'react'
import { useState } from 'react'
import { Authcontext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(Authcontext)

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [asignTo, setAsignto] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskCategory, setTaskCategory] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        // Task object directly banao, state mein store karne ki zaroorat nahi
        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: taskCategory,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        }

        // Deep copy banao to avoid reference issues
        const updatedUserData = userData.map((employee) => {
            if (asignTo === employee.firstname) {
                return {
                    ...employee,
                    tasks: [...employee.tasks, newTask],
                    taskNumbers: {
                        ...employee.taskNumbers,
                        newTask: employee.taskNumbers.newTask + 1
                    }
                }
            }
            return employee
        })
                                
        // Context update karo
        setUserData(updatedUserData)

        // localStorage mein save karo
        localStorage.setItem('employees', JSON.stringify(updatedUserData))

        // Success message
        alert(`Task assigned to ${asignTo} successfully!`)

        // Form fields clear karo
        setTaskTitle("")
        setTaskDate("")
        setAsignto("")
        setTaskDescription("")
        setTaskCategory("")
    }

    return (
        <div className="m-10">
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className="bg-gray-800 border border-gray-600 rounded-2xl shadow-xl p-10">
                <div className="flex items-start justify-between gap-8">

                    {/* Left Section */}
                    <div className="space-y-6 w-1/2">

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                className="bg-gray-700 border border-cyan-300 w-full outline-none px-4 py-2 rounded-xl text-white"
                                type="text"
                                placeholder="Make a UI Design"
                                required
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Date:</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                className="bg-gray-700 border border-cyan-300 w-full px-4 py-2 rounded-xl outline-none text-white"
                                type='date'
                                required
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Assign to:</h3>
                            <input
                                value={asignTo}
                                onChange={(e) => {
                                    setAsignto(e.target.value)
                                }}
                                className="bg-gray-700 border border-cyan-300 w-full outline-none px-4 py-2 rounded-xl text-white"
                                type="text"
                                placeholder="Employee name"
                                required
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Category:</h3>
                            <input
                                value={taskCategory}
                                onChange={(e) => {
                                    setTaskCategory(e.target.value)
                                }}
                                className="bg-gray-700 border border-cyan-300 w-full outline-none px-4 py-2 rounded-xl text-white"
                                type="text"
                                placeholder="Design, Development, etc..."
                                required
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-1/2">
                        <h3 className="text-xl font-bold text-white mb-2">Description</h3>

                        <textarea
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            className="bg-gray-700 border border-cyan-300 w-full rounded-2xl p-4 text-white outline-none"
                            cols="35"
                            rows="6"
                            required
                        ></textarea>

                        <button
                            className="bg-green-500 hover:bg-green-700 transition-all py-3 px-10 w-full rounded-xl mt-4 font-semibold text-white"
                            type="submit"
                        >
                            Create Task
                        </button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default CreateTask