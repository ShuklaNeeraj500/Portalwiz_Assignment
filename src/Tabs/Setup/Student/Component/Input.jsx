import React from "react"

const Input =(props) =>{
    return(
        <>
            <div className="form-group row">
                <label className="col-sm-5 col-form-label">{props.field}</label>
                    <div className="col-sm-7 col-md-6 ">
                        <input  type={props.type} 
                                placeholder={props.placeholder} 
                                className={props.class} 
                                value={props.value} 
                                name={props.name} 
                                onChange={props.onChange}
                               
                                />
                    </div>
            </div>
        </>
    )
}

const Readonly_Input =(props) =>{
    return(
        <>
            <div className="form-group row">
                <label className="col-sm-5 col-form-label">{props.field}</label>
                    <div className="col-sm-7 col-md-6 ">
                        <input  type={props.type} 
                                placeholder={props.placeholder} 
                                className={props.class} 
                                value={props.value} 
                                name={props.name} 
                                onChange={props.onChange}
                                id="readonly_input_fields"
                                readOnly
                                />
                    </div>
            </div>
        </>
    )
}
export default Input 
export {Readonly_Input}