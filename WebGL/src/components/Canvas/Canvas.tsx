import {CanvasHTMLAttributes, forwardRef} from "react";

interface CanvasInterface{
    width ?: number,
    height ?: number
}

const Canvas = forwardRef<HTMLCanvasElement | null, CanvasInterface>(function Canvas(props:CanvasInterface,ref){
        const {width,height} = props
        return(
                <canvas width={width} height={height} ref={ref}>
                    Please update your browser to get the best experience.
                </canvas>
        )
})


export default Canvas;

