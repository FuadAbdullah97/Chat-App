const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-3xl font-semibold text-center">
                        Login <span className="text-primary">ChatAPP</span>
                    </h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="input input-bordered"/>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="input input-bordered"/>
                    </div>

                    <a href="#" className="link link-hover text-primary">
                        {"Don't"} have an account?
                    </a>

                    <div className="form-control">
                        <label className="cursor-pointer label">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" className="checkbox "/>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


//Signup Login Code


// const Login = () => {
//     return (
//         <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 <div className="card-body">
//                     <h1 className="text-3xl font-semibold text-center">
//                         Login <span className="text-primary">ChatAPP</span>
//                     </h1>
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
//                     <a href="#" className="link link-hover text-primary">
//                         {"Don't"} have an account?
//                     </a>
//
//                     <div className="form-control mt-6">
//                         <button className="btn btn-primary">Login</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default Login;