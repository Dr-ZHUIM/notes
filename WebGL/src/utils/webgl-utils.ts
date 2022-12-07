export const getWebGLContext = (ref:HTMLCanvasElement) => {
    return ref.getContext("webgl");
}