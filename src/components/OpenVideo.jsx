import React, { useState, useEffect } from "react";

export default function OpenVideo() {
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    // global function attach
    window.openVideoModal = (id) => {
      setVideoId(id);
      setIsOpen(true);
    };
  }, []);

  // close action
  const closeVideoModal = () => {
    setIsOpen(false);
    setVideoId("");
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white dark:bg-dark w-[90%] md:w-full md:max-w-[800px] p-2 rounded-2xl md:rounded-3xl text-center">
            {/* video */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video rounded-2xl md:rounded-3xl border-0"
            ></iframe>

            {/* close */}
            <button
              onClick={closeVideoModal}
              className="flex gap-2 mx-auto my-4 px-5 py-2 bg-primary cursor-pointer hover:bg-primary/70 transition-all text-white rounded-full"
            >
              <span>Close Video</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

{/*
Usage Example:

1. import this component

2. <OpenVideo />

3.  <button
        onClick={() => window.openVideoModal("eUQ6yZLF_4I?si=gLSjhkUw3WG53or9")}
    >
        Watch Intro
    </button>
*/}