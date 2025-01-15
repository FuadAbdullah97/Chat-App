import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
    const  {loading, logout} = useLogout();
    return (
        <div className='mt-auto text-3xl'>

            {!loading ? (<CiLogout onClick={logout} />) : (
                <span className='loading loading-spinner'></span>
            )}


        </div>
    )
}
export default LogoutButton;