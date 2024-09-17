import { useState } from "react";
import Post from "./post";
import Comments from "./comments";
import kumala from "./kumala.gif";
import savesta from "./savesta.gif";
import defaultPFP from "./defaultPFP.jpg";
import Showstory from "./Showstory";
function App() {
  const [showComments, setShowComments] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "Kumala",
      id: crypto.randomUUID(),
      com: "Rizzed My gyaat so sigma 😍",
      time: "2h ago",
      pfp: savesta,
      thumb: false,
    },
    {
      name: "Savesta",
      id: crypto.randomUUID(),
      com: "Hey sigma!!, My dm's are open btw 😊",
      time: "53min ago",
      pfp: kumala,
      thumb: false,
    },
    {
      name: "GapeHornEnjoyer ",
      id: crypto.randomUUID(),
      com: "Silly goober 😝",
      time: "4h ago",
      pfp: defaultPFP,
      thumb: false,
    },
  ]);

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        background: showComments
          ? "linear-gradient(to bottom right, white, #8f8b8b, #b06f6f)"
          : "linear-gradient(to bottom right, white, #fee2e2, #fca5a5)",
      }}
    >
      <Post
        showComments={showComments}
        setShowComments={setShowComments}
        setShowStory={setShowStory}
      />
      <Comments
        comments={comments}
        setComments={setComments}
        showComments={showComments}
        setShowComments={setShowComments}
      />
      <Showstory showStory={showStory} setShowStory={setShowStory} />
    </div>
  );
}

export default App;
