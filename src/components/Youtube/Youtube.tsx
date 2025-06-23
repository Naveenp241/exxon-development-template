import React from "react";
import "./Youtube.css";

export interface YoutubeProps {
  videoId: string;
}
const Youtube: React.FC<YoutubeProps> = ({ videoId }) => {
  const srcAuto = `https://www.youtube.com/embed/${videoId}?&autoplay=0&muted=1&loop=1&showinfo=0&rel=0&showsearch=0&enablejsapi=1`;
  return (
    <div className="youtube-block">
      <div className="youtube-block__video-wrapper">
        <iframe
          src={srcAuto}
          allowFullScreen
          allow="autoplay"
          aria-label="YouTube Video"
        ></iframe>
      </div>
    </div>
  );
};
export default Youtube;
