import React, { useContext, useState } from 'react'
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

        setUserData(updatedUserData)
        localStorage.setItem('employees', JSON.stringify(updatedUserData))

        alert(`Task assigned to ${asignTo} successfully!`)

        setTaskTitle("")
        setTaskDate("")
        setAsignto("")
        setTaskDescription("")
        setTaskCategory("")
    }

    return (
        <div className="p-4 md:p-10">
            <form
                onSubmit={submitHandler}
                className="bg-gray-800 border border-gray-600 rounded-2xl shadow-xl p-6 md:p-10"
            >
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Left Section */}
                    <div className="space-y-6 w-full md:w-1/2">

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                className="bg-gray-700 border border-cyan-300 w-full outline-none px-4 py-2 rounded-xl text-white"
                                type="text"
                                placeholder="Make a UI Design"
                                required
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                className="bg-gray-700 border border-cyan-300 w-full px-4 py-2 rounded-xl outline-none text-white"
                                type="date"
                                required
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Assign to</h3>
                            <input
                                value={asignTo}
                                onChange={(e) => setAsignto(e.target.value)}
                                className="bg-gray-700 border border-cyan-300 w-full outline-none px-4 py-2 rounded-xl text-white"
                                type="text"
                                placeholder="Employee name"
                                required
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1 font-semibold">Category</h3>
                            <input
                                value={taskCategory}
                                onChange={(e) => setTaskCategory(e.target.value)}
                                className="bg-gray-700 border border-cyan-300 w-full outline-none px-4 py-2 rounded-xl text-white"
                                type="text"
                                placeholder="Design, Development, etc..."
                                required
                            />
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">Description</h3>

                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            className="bg-gray-700 border border-cyan-300 w-full rounded-2xl p-4 text-white outline-none resize-none"
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
