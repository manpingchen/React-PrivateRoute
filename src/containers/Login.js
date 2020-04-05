import React, { useContext } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../auth/Auth';
import { Button, TextField, IconButton, Card, Typography, makeStyles } from '@material-ui/core';
import { Visibility, VisibilityOff, GetAppOutlined } from '@material-ui/icons';
import StyledSubmitBtn from '../components/StyledSubmitBtn';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles( (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        margin: '0 auto',
        height: '100vh',
        flexDirection: 'column',
    },
    errorText: {
        marginTop: -10,
        padding: '5px 0',
        color: 'red',
        fontSize: '12px',
        textAlign: 'left',
        width: '100%',
    },
    card: {
        padding: theme.spacing(6),
    },
    logo: {
        display: 'block',
        margin: '0 auto 20px'
    },
    loginText: {
        marginBottom: theme.spacing(3)
    },
    passwordWrap: {
        position: 'relative',
        '& .MuiIconButton-root': {
            position: 'absolute',
            right: 5,
            top: 5,
        }
    },
    input: {
        width: '100%',
        marginBottom: 20,
    },
    forgotPassword: {
        textAlign: 'center',
        fontSize: 14,
        margin: '30px auto 0',
        display: 'block',
        padding: 5,
        color: '#aaa',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    downloadWrap: {
        margin: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '110%',
    }
}))

const Login = () => {

    // Style the component
    const classes = useStyles();
    //set the password state
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
   
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
        event.preventDefault();
    }
    // To use the login(), we declare the it by useContext(AuthContext)
    // In the { ... }, ... will be the value we want to trigger here
    const { login } = useContext(AuthContext);
    // To replace the history of the Route
    const history = useHistory();
    // Initialise the react hook form
    const { register, handleSubmit, errors } = useForm(); 
    
    const onSubmit = async () => {
        // Trigger the login() set inside the Auth.js
        await login()
        history.replace('/fec')
    }

    return(
        <div className={classes.root}>
            <Card className={classes.card}>
                <img src={logo} alt='logo' className={classes.logo} />
                <Typography className={classes.loginText} variant="h6" align="center">Login with Your FEC Account</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField variant="outlined" label="Email" name="email" className={classes.input}
                        inputRef={register({ 
                                    required: {
                                        value: true,
                                        message: 'Email is required.'
                                    },     
                                    pattern:  {
                                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                        message: 'The Email is not valid.'
                                    }, 
                                })} 
                                
                    />
                    {errors.email && (<p className={classes.errorText}>{errors.email.message}</p>)}

                    <div className={classes.passwordWrap}>
                        <TextField variant="outlined" label="Password" name="password" className={classes.input}
                            type={values.showPassword ? 'text' : 'password'}
                            inputRef={register({ 
                                        required: {
                                            value: true,
                                            message: 'Password is required.'
                                        }, 
                                        minLength: {
                                            value: 8,
                                            message: 'Password needs to be more than 8 numbers.'
                                        },  
                                    })}
                        />

                        {/*Password Visibility Toggle*/}            
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}                              </IconButton>
                        
                        {errors.password && (<p className={classes.errorText}>{errors.password.message}</p>)}
                    </div>

                    <StyledSubmitBtn btnText="Login" />
                    
                </form>
                
                <NavLink to='/forgotPassword' className={classes.forgotPassword}>Forgot Password?</NavLink>                  
            
            </Card>
            
            <div className={classes.downloadWrap}>
                <Typography variant="body2">Download ORA</Typography>
                <div>
                    <Button href="http://40.81.24.45/FECManagement/release/1.0.28.0/FECEdgeServiceSETUP_1.0.28.0.exe" startIcon={<GetAppOutlined color="primary" />}>Windows</Button>
                    <Button href="http://40.81.24.45/FECManagement/AndroidEdge/Ora_1.0.11_200317_release.apk" startIcon={<GetAppOutlined color="primary" />}>Android</Button>
                </div>
            </div>

        </div>
    )
}

export default Login;