import React from "react";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {RootStateType} from "../../state/store";
import {Redirect} from "react-router-dom";
import {setLoginTC} from "../../state/auth-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    let dispatch=useDispatch()
    let auth=useSelector<RootStateType,boolean>((state)=>state.auth.isAuth)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password){
                errors.password = 'Required'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(setLoginTC(values))

        },
    })



    if (auth) return <Redirect to={'/'}/>
    else
        return (
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <p>To log in get registered
                                    <a href={'https://social-network.samuraijs.com/'}
                                       target={'_blank'}> here
                                    </a>
                                </p>
                                <p>or use common test account credentials:</p>
                                <p>Email: free@samuraijs.com</p>
                                <p>Password: free</p>
                            </FormLabel>
                            <FormGroup>
                                <TextField label="Email" margin="normal" {...formik.getFieldProps('email')}/>
                                {formik.touched.email && formik.errors.email && <div style={{color:'red'}}>{formik.errors.email}</div>}

                                <TextField type="password" label="Password" margin="normal" {...formik.getFieldProps('password')}/>
                                {formik.touched.password && formik.errors.password && <div style={{color:'red'}}>{formik.errors.password}</div>}

                                <FormControlLabel label={'Remember me'} control={<Checkbox checked={formik.values.rememberMe} {...formik.getFieldProps('rememberMe')}/>}/>

                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Login
                                </Button>

                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
        )
}

