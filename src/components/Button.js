import React from 'react';

function Button({title,btnClass,onClick}) {
    return (<>
    <button type="button" onClick={onClick} className={`text-white bg-[#050708] ${btnClass} hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2`}>
   {title}

</button></>  );
}

export default Button;