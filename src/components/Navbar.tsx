// import NavLink from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white bg-black rounded-md p-3 hover:bg-gray-900"
      : "text-white rounded-md p-3 hover:bg-gray-900";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="ml-4 ">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                React Jobs
              </span>
            </NavLink> */}
            <div className="">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClasses}>
                  Home
                </NavLink>
                <NavLink to="/jobs-page" className={linkClasses}>
                  Jobs
                </NavLink>
                <NavLink to="/add-jobs" className={linkClasses}>
                  Add job
                </NavLink>
                {/* <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/jobs" className={linkClass}>
                  Jobs
                </NavLink>
                <NavLink to="/add-job" className={linkClass}>
                  Add Job
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
