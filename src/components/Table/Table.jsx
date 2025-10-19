import Search from "../Search/Search";
import TableActions from "./TableActions";
import TableList from "./TableList";

const Table = () => {
    return (
        <section className="mb-20" id="tasks">

            <div className="container">
                {/* <!-- Search Box --> */}
                <Search />
                {/* <!-- Search Box Ends --> */}
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TableActions />
                    <TableList />
                </div>
            </div>
        </section>
    );
};

export default Table;