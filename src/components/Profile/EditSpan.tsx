import {ChangeEvent, useState} from "react";
import s from '../Profile/Profile.module.css';
import {Input} from "@mui/material";

type EditSpanPropsType={
    title:string,
    changeEditSpan:(value:string)=>void

}
export const EditSpan=(props:EditSpanPropsType)=>{
    let [onDouble, setonDouble]=useState(false)
    let [value, setValue]=useState('')

    const onDoubleClickHandler=()=>{
        setValue(props.title)
        setonDouble(true)
    }
    const onBlurInputHandler=()=>{
        setonDouble(false)
        props.changeEditSpan(value)
    }

    const onChangeInputHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)

    }

    return (
        <div className={s.editField}>
            {onDouble ?
                <Input onBlur={onBlurInputHandler} onChange={onChangeInputHandler} value={value} autoFocus color={"primary"} inputProps={{
                    style: {
                        color: 'rgb(17,193,253)'
                    }
                }}/>
                :
                <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
            }
        </div>
    );
}