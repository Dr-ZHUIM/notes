import { useEffect, useRef } from "react";
import Canvas from "../components/Canvas/Canvas";
export default function CanvasDemonstration() {
  const canvas = useRef<HTMLCanvasElement>(null);

  const drawRectangle = () => {
    const canvasElement = canvas.current;
    if (!canvasElement) {
      console.warn("There is no canvas, you should create one!");
      return;
    }
    const ctx = canvasElement.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "rgba(0,0,255,1)";
      ctx.fillRect(120,10,150,150);
    }
  };

  useEffect(()=>{
    drawRectangle();
  },[])

  return (
    <div>
      <Canvas width={400} height={400} ref={canvas}></Canvas>
    </div>
  );
}
