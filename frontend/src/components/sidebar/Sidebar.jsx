import Searchinput from "./Searchinput.jsx";
import Conversations from "./Conversations.jsx";
import LogoutButton from "./LogoutButton.jsx";

const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col '>
            <Searchinput/>
            <Conversations/>
            <LogoutButton/>
        </div>

    )
}

export default Sidebar;