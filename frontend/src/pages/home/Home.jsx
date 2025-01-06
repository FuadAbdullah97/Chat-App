import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const home = () => {
    return(
    <>
    <div className='flex sm:h-[450px] md:h-[550px]    w-full  rounded-lg backdrop-blur-sm bg-white/30'>

        <Sidebar/>
        <MessageContainer/>


        </div>
    </> )
}
export default home;