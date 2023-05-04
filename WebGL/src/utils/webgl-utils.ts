export const getWebGLContext = (ref: HTMLCanvasElement) => {
    return ref.getContext("webgl");
}

export const initShaders = (gl: WebGLRenderingContext, vshader: string, fshader: string) => {
    const program = createProgram(gl, vshader, fshader);
    if (!program) {
        console.error("Can't create program!");
        return false;
    };
    gl.useProgram(program);
    ///@ts-ignore
    gl.program = program;
    return true;
}

function createProgram(gl: WebGLRenderingContext, vshader: string, fshader: string) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
    if (!vertexShader || !fragmentShader) return null;
    // create program object
    const program = gl.createProgram();
    if (!program) {
        return null;
    }
    // bind shader to program
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // link shaders
    gl.linkProgram(program);
    // check the link 
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        const error = gl.getProgramInfoLog(program);
        console.error(`can't connect to program object`, error)
        gl.deleteProgram(program);
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        return null;
    }
    return program;
}

function loadShader(gl: WebGLRenderingContext, type: number, source: string) {
    // create a shader object
    const shader = gl.createShader(type);
    if (!shader) {
        console.error("Can't load shader!");
        return null;
    }
    // edit the shader raw code
    gl.shaderSource(shader, source);
    // compile the shader
    gl.compileShader(shader);
    // check the status of shader-comilplation
    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        const error = gl.getShaderInfoLog(shader);
        console.error(`Failed to compile shader: ${error}`);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}