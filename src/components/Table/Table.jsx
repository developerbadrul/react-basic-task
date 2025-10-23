import { useState } from "react";
import Search from "../Search/Search";
import TableActions from "./TableActions";
import TableList from "./TableList";
import TaskModal from "./TaskModal";

const Table = () => {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "Learn React",
        description: "I want to Learn React such thanI can treat it like my slave and make it do whatever I want to do.",
        tags: ["web", "react", "js"],
        priority: "High",
        isFavorite: false,
    }


    const [tasks, setTasks] = useState([defaultTask]);
    const [showModal, setShowModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);



    const handleAddTask = (newTask, isAdd) => {
        if (isAdd) {
            setTasks([...tasks, newTask]);
        } else {
            const editedTask = tasks.map(task => {
                if (task.id === newTask.id) {
                    return newTask;
                }
                return task;
            })

            setTasks(editedTask)
        }

        handleCloseClick()
    }

    const handleCloseClick = () => {
        setShowModal(false);
        setTaskToUpdate(null)
    }

    const handleEditTask = (task) => {
        setTaskToUpdate(task)
        setShowModal(true);
    }
    return (
        <section className="mb-20" id="tasks">
            {showModal && (
                <TaskModal
                    onSave={handleAddTask}
                    onCloseClick={handleCloseClick}
                    taskToUpdate={taskToUpdate}
                />
            )}
            <div className="container">
                {/* <!-- Search Box --> */}
                <Search />
                {/* <!-- Search Box Ends --> */}
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TableActions
                        onAddClick={() => setShowModal(true)}
                    />
                    <TableList
                        tasks={tasks}
                        onEdit={handleEditTask}
                    />
                </div>
            </div>
        </section>
    );
};

export default Table;