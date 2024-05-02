import React, { useState } from 'react';
import Button from '../components/Button';

const Blog = () => {
    const [theme, setTheme] = useState("light")
    return <>
   <div className='p-2'>

    <Button title={theme} btnClass={""}/>
    Toggling Between The Dark And The Light Theme </div></>;
}




export default Blog;