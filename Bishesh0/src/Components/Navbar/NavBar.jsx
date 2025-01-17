import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
         <div className=" flex gap-5m-5 p-5  justify-center w-full bg-slate-400">
      <ul className="flex gap-5  w-full justify-center">
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/about&contact">About&Contact</Link>
        </li>
        <li>
          <Link to ="/projects">Projects</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};
