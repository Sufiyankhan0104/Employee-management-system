import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
    return (
        <div className="h-screen">
            <div className="h-[40%] w-full rounded-4xl flex items-center justify-start gap-6 flex-nowrap overflow-x-auto tasklist">
                {data.tasks.map((elem, index) => {
                    // Check completed and failed first (final states)
                    if (elem.completed) {
                        return <CompleteTask key={index} data={elem} />
                    }
                    if (elem.failed) {
                        return <FailedTask key={index} data={elem} />
                    }
                    // Then check newTask before active
                    if (elem.newTask) {
                        return <NewTask key={index} data={elem} />
                    }
                    if (elem.active) {
                        return <AcceptTask key={index} data={elem} />
                    }
                    // Return null if no conditions match
                    return null;
                })}
            </div>
        </div>
    );
};

export default TaskList;