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



    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
        handleCloseClick()
    }

    const handleCloseClick = () => {
        setShowModal(false);
    }

    return (
        <section className="mb-20" id="tasks">
            {showModal && (
                <TaskModal
                    onSave={handleAddTask}
                    onCloseClick={handleCloseClick}
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
                    <TableList tasks={tasks} />
                </div>
            </div>
        </section>
    );
};

export default Table;