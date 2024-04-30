import React, { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import not_found from "../Images/not_found.gif";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import BadgeButton from "../components/BadgeButton";

function LikeMyphoto() {
  const handleLikeIt = () => {
    if (!liked) {
      setLiked(true);
      setCount(count + 1);
    } else {
      setLiked(false);
      setCount(count - 1);
    }
  };
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(100);


  const handleChangeColor = () => {
    let color = '#';
    let list = '0123456789abcde';
    for (let i=0;i<6;i++){
        color += list[Math.floor(Math.random() * 16)]
    }
    document.querySelector('.body').style.backgroundColor=color;
  }
  return (
    <>
      <Title text="Like Me" />
      <div className="w-full  flex justify-center">
        <div className="bg-white w-80 rounded-md px-2 py-5 shadow-md">
          <div className="body">
            <img
              src={not_found}
              alt=""
              style={{ cursor: "pointer" }}
              onDoubleClick={handleLikeIt}
            />
          </div>
          <div className="footer">
            <span>
              <button className="text-2xl p-2" onClick={handleLikeIt}>
                {liked ? <AiFillLike /> : <AiOutlineLike />}
              </button>
            </span>
            <span>{count} Likes</span>
            <BadgeButton text="Change Background" onClick={handleChangeColor}/>
            {/* {color} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LikeMyphoto;
