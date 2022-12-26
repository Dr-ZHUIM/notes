import { useEffect, useRef } from "react";
import { getWebGLContext } from "../utils/webgl-utils";
import Canvas from "../components/Canvas/Canvas";

export default function CanvasDemonstration() {
  const canvas = useRef<HTMLCanvasElement>(null);

  // native canvas methods
  const drawRectangle = () => {
    const canvasElement = canvas.current;
    if (!canvasElement) {
      console.warn("There is no canvas, you should create one!");
      return;
    }
    const ctx = canvasElement.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "rgba(0,0,255,1)";
      ctx.fillRect(120, 10, 150, 150);
    }
  };

  // WebGL methods

  const helloWebGL = (gl: WebGLRenderingContext) => {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  };

  const drawPoint = (gl: WebGLRenderingContext) => {
    const VSHARDER_SOURCE = "void main() {\n" + "gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n" + "gl_PointSize = 10.0;\n" + "}\n";
    const FSHARDER_SOURCE = "void main() {\n" + "gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n" + "}\n";
  };

  useEffect(() => {
    const canvasElement = canvas.current;
    if (!canvasElement) {
      console.warn("There is no canvas, you should create one!");
      return;
    }
    const gl = getWebGLContext(canvasElement);
    if (gl) {
      helloWebGL(gl);
    }
  }, []);

  return (
    <div>
      <Canvas width={400} height={400} ref={canvas}></Canvas>
    </div>
  );
}

