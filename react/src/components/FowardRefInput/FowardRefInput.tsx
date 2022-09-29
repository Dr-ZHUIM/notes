import { forwardRef } from "react"

function ForwardRefInput(props:any,ref:any){
        const {label , ...otherProps} = props;

        return(
            <label>
                {label}
                <input {...otherProps} ref={ref} />
            </label>
        )
}

export default forwardRef(ForwardRefInput)
