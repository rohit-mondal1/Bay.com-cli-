import React, { useState } from "react";
import "./mypost.css";
import { BiCommentDetail, BiLike, BiShareAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const MypostCart = ({ kk }) => {
  const { imgurl, text, name, img, date } = kk;
  const [like, setLike] = useState(false);
  // const dat = format(date, 'PP');

  console.log(like);
  //  const handellike=()=>{

  //  }

  return (
    <div>
      <div id="minetext" className="bg-black/10  my-3 py-3 ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 mx-2 items-center ">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h1 className=" text-xl">{name}</h1>
              <h1 className="text-xs">{date}</h1>
            </div>
          </div>
          <Link to="/">
            <div className="mr-2">
              <BsThreeDotsVertical />
            </div>
          </Link>
        </div>

        <div className="py-3 mx-2">
          <p>{text}</p>
        </div>

        <div className="avatar">
          <div id="imgss" className="w-full h-[500px] ">
            <img src={imgurl} alt="" />
          </div>
        </div>
        {/* lole and comment and sheair */}
        <div className="flex justify-between  w-full font-bold text-3xl mt-4 px-6 ">
          {like ? (
            <div className="text-blue-700" onClick={() => setLike(!like)}>
              <BiLike />
            </div>
          ) : (
            <div onClick={() => setLike(!like)}>
              <BiLike />
            </div>
          )}
          {/* <div onClick={()=>setLike(!like)}><BiLike/></div> */}
          <div>
            <BiCommentDetail />
          </div>
          <div>
            <BiShareAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypostCart;
