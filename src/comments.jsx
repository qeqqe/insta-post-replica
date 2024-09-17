import React, { useState } from "react";
import pfp from "./defaultPFP.jpg";

let thumbsUp =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1ElEQVR4nO2UrQoCQRSFP1AEs8nmK5hsdi0WQZNBMPgYmzT6Ept8AavVYl9MuiDYDaI4snDD4N/OuHthgwcuO7N7zndmykJBNQRCoKQBHwBXwAATTbgBFlrwszynecH7FnwORLJuasBrwF1uUc4K71nwQN51Zb/OfnY4PMGRtUmZJNexQWkBWysHfzL7Xwtc9JL7BDJFLGhJJtYqCCUz0yioAxfgBjQ0CgLxL11BxqOgAhzF39YoGIl3++5jHgUb8Y6/FWSdE1D1KdjJuMBj+RH+hZceCr2ZFfRJUFcAAAAASUVORK5CYII=";

let thumbsUpActive =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAi0lEQVR4nGNgGIzg////of///1/2//9/VloYHv7////f/yFgNrUND0EyHATm09JwEMigpeEgYEBLw7/+//+fhVaGg8ABarj+938KALJBWCUoMXzUAmLAG1rHQRstLfjz//9/BVpasAo9vVPbAltaWnAeW46lpgVJtLTg9f///zlpaUErhuGjgIEAAACDjGVponLU9gAAAABJRU5ErkJggg==";

export default function Comments({
  comments,
  setComments,
  showComments,
  setShowComments,
}) {
  if (!showComments) return null;

  const handleThumbClick = (id) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === id ? { ...comment, thumb: !comment.thumb } : comment
      )
    );
  };

  return (
    <div className="absolute top-[50%] left-[50%] w-[26.1vw] h-[65vh] bg-gray-800 translate-x-[-50%] translate-y-[-50%] flex flex-col rounded-3xl p-5 shadow-2xl">
      <div className="flex items-end justify-end pb-[1.5vh]" id="top-section">
        <span className="text-white text-xl absolute right-[50%] translate-x-[50%]">
          Comments
        </span>
        <button className="text-white" onClick={() => setShowComments(false)}>
          ╳
        </button>
      </div>
      <hr className="border-gray-600" />
      <div className="overflow-y-auto flex-1 mt-[2vh] " id="comment-area">
        <ul className="list-disc list-inside text-white">
          {comments.map((comment) => (
            <li key={comment.id} className=" list-none py-[2vh]">
              <div
                className="flex flex-col justify-center gap-2 py-2"
                id="comment"
              >
                <div
                  className="flex flex-row gap-2  border-1 border-white rounded-3xl"
                  id="top-half"
                >
                  <img
                    src={comment.pfp}
                    className="w-[4vh] h-[4vh] rounded-full"
                  />{" "}
                  <span className="font-semibold text-l">{comment.name}</span>•{" "}
                  {comment.time}
                </div>
                <div className="text-md text-gray-300">{comment.com}</div>
                <button>
                  <img
                    src={comment.thumb ? thumbsUpActive : thumbsUp}
                    onClick={() => handleThumbClick(comment.id)}
                  />
                </button>
              </div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
      <div className="" id="input-comment">
        <div className="">
          <input
            type="text"
            placeholder="Enter your comment..."
            className="placeholder-slate-500 w-[23.5vw] py-[2px] px-[3px] bg-gray-900 rounded-xl pl-[5px] outline-none border-gray-800 border-1"
          />
        </div>
      </div>
    </div>
  );
}
