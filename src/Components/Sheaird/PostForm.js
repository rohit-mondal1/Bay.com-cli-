import { format } from "date-fns";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Context/Usercontext";

const apikey = "95ede757551f3afc03649eb34693d691";

const PostForm = () => {
  const { userdata } = useContext(Authcontext);
  const navegate = useNavigate();

  const handelpostSubmite = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.text.value;
    const img = form.file.files[0];

    const dat = format(new Date(), 'PP');

    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${apikey}`;

    // img hosting
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        const imgurl = imgdata.data.url;
        const postuplode = {
          imgurl,
          text,
          email: userdata?.email,
          date:dat,
         img: userdata?.imgurl,
         name: userdata?.naem,
         like:[]
        };
        // post user data in db
        fetch("http://localhost:8000/posts", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(postuplode),
        })
          .then((res) => res.json())
          .then((data) => {
            navegate("/");
         
          });
      });

  };
  return (
    <div className="bg-black/10  px-14 my-3 py-3 ">
      <Link to="/profile">
        <div className="flex gap-3 items-center ">
          <div className="avatar">
            <div className="w-14 rounded-full">
              <img src={userdata?.imgurl} alt="" />
            </div>
          </div>
          <h1 className="font-semibold text-xl">{userdata?.naem}</h1>
        </div>
      </Link>
      <form onSubmit={handelpostSubmite}>
        <textarea
          name="text"
          style={{ resize: "none", overflow: "hidden" }}
          placeholder="What's on your mind ?"
          className="input input-bordered input-lg w-full  border-none mt-3 mb-2 h-32"
        ></textarea>

        <input
          type="file"
          name="file"
          className="file-input file-input-bordered file-input-lg w-full"
        />

        <button className="btn w-full btn-primary my-3">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
