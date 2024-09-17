import React, { useState } from "react";
import story1 from "./meow1.png";
import story2 from "./meow2.png";

let share =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeklEQVR4nO3WsUtWURjH8aspgaEiQihIkDjaIvgn6BL9B0G6uIo45FKzJBE26qCDg5uDCIGNRUuB4GRToEWEROBQUa+fuLznhRe59733lXMdwu94z8PzPfeec373JMk1/xPox80YjW5gCPcwhYdYwDI2sYf3OMZvdT6iI6tZF0YwifuYwRJeYAuvcYivqGmfD1nSdManqmU6S/y9YumrvDX7UqH0b7oX8sRzEQS/cp6vt9qlHdi/5Nvs4hl+ZoyfYbjoiNwNhWX4gVXcwSP8yal72lLaAIsFwiPMoyfUP8Z5Tu1n3ErKgE68vdCgFpbhQSMAwtKsFExytpS0AUbxLgTFS4xdGO8OgdKKgzTdkligJ8RhEVMxpQN4U0K6F1M6HD5fmeM1Hks6iE/KsRZF2vQDKUOaAUNJLDDR4qw28ySatEGatwXSk9Jh0Q7oC7eJPGbaatgO4VaSRbrbO5MqwXalYZEHbuNbk3QnuSrUb5YbeI7eKxNfk1ySfxv3R9dSYeqCAAAAAElFTkSuQmCC";

export default function Showstory({ showStory, setShowStory }) {
  if (!showStory) return null;

  const [images, setImages] = useState([story1, story2]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const increment = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="absolute top-[50%] left-[50%] w-[26.1vw] h-[65.3vh] bg-gray-400 translate-x-[-50%] translate-y-[-50%] flex flex-col rounded-3xl p-5 shadow-2xl">
      <div className="flex items-end justify-end pb-[1.5vh]" id="top-section">
        <span className="text-white text-xl font-extrabold absolute right-[50%] translate-x-[50%]">
          Story
        </span>
        <button className="text-white" onClick={() => setShowStory(false)}>
          ╳
        </button>
      </div>

      <div className="" id="image-section">
        <img
          src={images[currentIndex]}
          alt="Story"
          onClick={increment}
          className="rounded-3xl hover:scale-105 transition-all duration-300 active:scale-95 "
        />
      </div>
      <div className="flex justify-center items-center mt-[5vh]">
        <input
          type="text"
          placeholder="Reply to the story..."
          className="bg-white bg-opacity-35 w-full mx-2 py-3 rounded-3xl"
        />
        <img src={share} />
      </div>
    </div>
  );
}
