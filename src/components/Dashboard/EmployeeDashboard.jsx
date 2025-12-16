import React from 'react'
import Header from '../others/Header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  return (
    <div>
      <Header changeUser={props.changeUser} data={props.data} />
      <div className='p-10 bg-gray-700'>
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>


  )
}

export default EmployeeDashboard
