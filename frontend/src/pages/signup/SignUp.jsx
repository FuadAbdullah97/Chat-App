import GenderCheck from "./GenderCheck.jsx";
import {useState} from "react";
import useSignup from "../../hooks/useSignup.js";
import {Link} from "react-router-dom";



const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };


    return (
        <form className="flex flex-col justify-center items-center min-w-96 mx-auto" onSubmit={handleSubmit}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-3xl font-semibold text-center">
                        SignUp <span className="text-primary">ChatAPP</span>
                    </h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Fullname"
                            className="input input-bordered"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="input input-bordered"
                            value={inputs.userName}
                            onChange={(e) => setInputs({...inputs, userName: e.target.value})}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="input input-bordered"
                            value={inputs.password}
                            onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Confirm Password"
                            className="input input-bordered"
                            value={inputs.confirmPassword}
                            onChange={(e) =>
                                setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>

                    <div>
                        <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender = {inputs.gender} />
                    </div>

                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" className="checkbox"/>
                        </label>
                    </div>
                    <Link to="/login" className="link link-hover text-primary">
                       Already have an account?
                    </Link>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary" disabled={loading}>
                            {loading ? <span className='loading loading-spinner' > </span> : "Sign Up"}

                            </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;


//Starter Sign Up Code

//
// import GenderCheck from "../../components/GenderCheck.jsx";
//
// const SignUp = () => {
//     return (
//         <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body">
//                     <h1 className="text-3xl font-semibold text-center">
//                         SignUp <span className="text-primary">ChatAPP</span>
//                     </h1>
//
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Full Name</span>
//                         </label>
//                         <input type="text" placeholder="Enter Fullname" className="input input-bordered" />
//                     </div>
//
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Username</span>
//                         </label>
//                         <input type="text" placeholder="Enter username" className="input input-bordered" />
//                     </div>
//
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Password" className="input input-bordered" />
//                     </div>
//
//                     <div className="form-control">
//                         <label className="label">
//                             <span className="label-text">Confirm Password</span>
//                         </label>
//                         <input type="password" placeholder="Enter Confirm Password" className="input input-bordered" />
//                     </div>
//
//                     <div>
//                         <GenderCheck />
//                     </div>
//
//                     <a href="#" className="link link-hover text-primary">
//                         Don't have an account?
//                     </a>
//
//                     <div className="form-control mt-6">
//                         <button className="btn btn-primary">Sign Up</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default SignUp;