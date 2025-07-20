import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1 hover:opacity-80 transition-all">
          <Link to={"/"} className=" btn btn-ghost text-xl">
            <h1>Z-Link</h1>
          </Link>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {authUser && (
                <li>
                  <Link to={"/profile"} className="justify-between">
                    Profile
                  </Link>
                </li>
              )}


              <li>
                <Link to={"/settings"}>Settings</Link>
              </li>


              {authUser && (
                <li>
                  <button onClick={logout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
