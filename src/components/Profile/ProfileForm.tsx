import React from "react";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {RootStateType} from "../../state/store";
import {changeProfileTC, ProfileStateType} from "../../state/profile-reducer";
import './Profile.module.css';

// type ProfileFormErrorType = {
//     email?: string
//     password?: string
//     rememberMe?: boolean
// }
type ProfileFormPropsType={
    closeForm:()=>void
}
export type ProfileType= {
    aboutMe:string | null
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
}
export const ProfileForm = (props:ProfileFormPropsType) => {
    let dispatch=useDispatch()
    let profileInfo=useSelector<RootStateType,ProfileStateType>((state)=>state.profile)
    let userId=useSelector<RootStateType,number|null>((state)=>state.auth.authData.id)

    const exitHandle=()=>{
        props.closeForm()
    }

    const formik = useFormik({
        initialValues: {
            aboutMe:profileInfo.profile.aboutMe,
            userId: userId,
            lookingForAJob: profileInfo.profile.lookingForAJob,
            lookingForAJobDescription: profileInfo.profile.lookingForAJobDescription,
            fullName: profileInfo.profile.fullName,
            contacts: {
                github: profileInfo.profile.contacts.github,
                vk: profileInfo.profile.contacts.vk,
                facebook: profileInfo.profile.contacts.facebook,
                instagram: profileInfo.profile.contacts.instagram,
                twitter: profileInfo.profile.contacts.twitter,
                website: profileInfo.profile.contacts.website,
                youtube: profileInfo.profile.contacts.youtube,
                mainLink: profileInfo.profile.contacts.mainLink
        }},
        // validate: (values) => {
        //     const errors: ProfileFormErrorType = {}
        //     if (!values.lookingForAJob) {
        //         errors.email = 'Required'
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.lookingForAJob)) {
        //         errors.email = 'Invalid email address'
        //     }
        //     if (!values.password){
        //         errors.password = 'Required'
        //     }
        //     return errors
        // },
        onSubmit: values => {
            dispatch(changeProfileTC(values))
            props.closeForm()
        },
    })
          return (
            <Grid container justifyContent={'center'} style={{position:'absolute', zIndex:'999', marginTop:'10px'}}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormGroup>
                                <FormControlLabel label={'Looking for a job'} control={<Checkbox
                                    checked={formik.values.lookingForAJob} {...formik.getFieldProps('lookingForAJob')}/>}/>

                                <TextField type="lookingForAJobDescription" label="Looking for a job description"
                                           margin="normal" {...formik.getFieldProps('lookingForAJobDescription')}/>
                                {formik.touched.lookingForAJobDescription && formik.errors.lookingForAJobDescription &&
                                    <div style={{color: 'red'}}>{formik.errors.lookingForAJobDescription}</div>}

                                <TextField type="aboutme" label="About Me"
                                           margin="normal" {...formik.getFieldProps('aboutMe')}/>
                                {formik.touched.lookingForAJobDescription && formik.errors.aboutMe &&
                                    <div style={{color: 'red'}}>{formik.errors.aboutMe}</div>}

                                <Button type={'submit'} variant={'contained'} color={'primary'} style={{marginBottom:'10px'}}>
                                    Submit
                                </Button>
                                <Button variant={'contained'} color={'primary'} style={{marginTop:'10px'}} onClick={()=>exitHandle()}>
                                    Exit
                                </Button>

                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        )
}

