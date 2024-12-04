import { Link } from "react-router-dom";


function Button({children, disabled, to}) {

const className="bg-yellow-400 tracking-wide rounded-full uppercase font-semibold text-stone-800 py-3 px-4 inline-block hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed sm:px-6 sm:py-4";

    if(to) 
return(<Link to={to} className={className}>{children}</Link>);
  
    return (
    <button disabled={disabled} className={className}>{children}</button>
  )
}

export default Button;