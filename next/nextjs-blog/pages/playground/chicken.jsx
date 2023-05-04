import React, { useState, useEffect, useRef } from "react";

export default function Chicken() {
  const [hasInit, setHasInit] = useState(false);
  const canvas1 = useRef(null);
  const canvas2 = useRef(null);
  const videoRef = useRef(null);
  const init = () => {
    const ctx1 = canvas1.current.getContext("2d");
    const ctx2 = canvas2.current.getContext("2d");
    console.log("videoRef.current", videoRef.current);
    canvas1.current.height = canvas2.current.height =
      videoRef.current.offsetHeight;
    const playVideo = () => {
      requestAnimationFrame(playVideo);
      const { width, height } = canvas1.current;
      ctx1.drawImage(videoRef.current, 0, 0, width, height);
      const data = ctx1.getImageData(0, 0, width, height).data;
      ctx2.clearRect(0, 0, width, height);
      const bl = 8;
      ctx2.font = "12px serif";
      for (let i = 0; i < data.length; i += 4 * bl) {
        const x = parseInt(((i + 1) % (width * 4)) / 4);
        const y = parseInt(i / (width * 4));
        if (x % bl === 0 && y % bl === 0) {
          const g = parseInt((data[i] + data[i + 1] + data[i + 2]) / 1.5);
          ctx2.fillStyle = `rgba(${g},${g},${g},${data[i + 3]})`;
          ctx2.fillText("鸡", x, y);
        }
      }
    };
    playVideo();
  };
  const play = () => {
    videoRef.current.play();
  };
  useEffect(() => {
    if (hasInit) {
      console.log("1", 1);
      init();
    }
  }, [hasInit]);
  return (
    <div
      className="flex-row pos-re"
      style={{ height: "500px", maxWidth: "350px" }}
    >
      <video
        ref={videoRef}
        style={{ objectFit: "cover", visibility: "hidden" }}
        src="/videos/chicken.mp4"
        loop
        height={500}
        onPlay={() => {
          console.log(13);
          setHasInit(true);
        }}
      />
      <canvas
        style={{ visibility: "hidden" }}
        height={500}
        className="pos-ab p-0"
        ref={canvas1}
      ></canvas>
      <canvas height={500} className="pos-ab p-0" ref={canvas2}></canvas>
      <div
        onClick={() => play()}
        style={{ visibility: hasInit ? "hidden" : "visible" }}
        className="full pos-ab p-0 flex-row flex-a-c flex-j-c "
      >
        点击这里！！！
      </div>
    </div>
  );
}

