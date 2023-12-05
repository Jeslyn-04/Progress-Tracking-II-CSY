// import * as React from 'react';
// import { useState} from 'react';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';

// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';

// import './Signup.css'
// function Copyright(props) {
//   return (
    
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
  
//     const [errors, setErrors] = useState({});
//     const [dis,setdis]=useState(false)
//      const handleSubmit = (event) => {
    
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//     event.preventDefault();
//     //Validate form fields
//     const validationErrors = validateForm(formData);
//     setErrors(validationErrors);

//     //If there are no errors, submit the form
//     if(Object.keys(validationErrors).length === 0) {
//         //Perform form submission logic here
//         setdis(!dis)
//         console.log('Form-submitted successfully!');
//     }
    
//   };
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     //Update the form data state
//     setFormData({
//         ...formData,
//         [name]: value,
//     });

//     //Clear the error for the current field
//     setErrors({
//         ...errors,
//     })
// }


// const validateForm = (data) => {
//     let errors = {};

//     const regex =  /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

//     //Validate email
// if(!data.email.trim()) {
//     errors.email = 'Email is required';
// }

// if(!regex.test(data.email)){
//     errors.email = "This is not a valid email format!";

//   }

// //Validate password
// if(!data.password.trim()) {
//     errors.password = 'Password is required';
// }
// if((data.password).length<4 && (data.password).length>0){
//   errors.password = "Password must be more than 4 characters";
// }
// if((data.password).length>16){
//       errors.password = "Password cannot be more than 16 characters";
// }
// return errors;
// };
//   const nav= useNavigate();
//   const handleLogin = () =>{
//     nav('/Login')
//   }
//   const handleHome = () =>{
//       nav('/Motion')
    
//   }

  


//   return (
//     <div className="signup">
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
         
         
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
             

//               <Grid item xs={12}>
//               <h2>Ready to watch Movies?</h2>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
                 
//                   value={formData.email}
//                   onChange={handleChange}
                 
//                 />
//                 {errors.email && <p className='error'>{errors.email}</p>}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
                  
//                   value={formData.password}
//                   onChange={handleChange}
                  
//                 />
//                 {errors.password && <p className='error'>{errors.password}</p>}
//               </Grid>
             
//             </Grid>
            
//            {(dis)?
//                 <Button
              
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="error"
//               sx={{ mt: 4, mb: 3 }}
//               onClick={handleHome}>SignUp</Button>:<Button
              
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="error"
//               sx={{ mt: 4, mb: 3 }}
//               >SignUp</Button>}
              
            
              
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2" onClick={handleLogin}>
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
        
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//     </div>
//   );
// }

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
//   const nav=useNavigate();

//   const handlelogin = () =>
//   {
//     nav("/Login")
//   }
//   const handlehome = () =>
//   {
//     nav("/Home")
//   }

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               onClick={handlehome}
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2" onClick={handlelogin}  >
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 5 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import {Link} from 'react-router-dom'
// import Stack from '@mui/material/Stack';
// import {useState} from 'react'
// import axios from 'axios';
// import Button from '@mui/material/Button';

// export default function Register() {
//   const [email,setName]=useState();
//   const [pass,setpass]=useState();
//   const handleSubmit = async (e) => {
//     await axios.post('http://localhost:3000/users',{"email":email,"pass":pass});
//     console.log("skdkdkdkkkdkd");
//   }

//   return (
//     <body>
//       <div className='REG'>
//     <Box className='aa'
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '35ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
      
//         <div className='icon'>
//         <h1>Registration Page</h1>
//         </div>
//       <div id="a">
//         <TextField
//         required
//         id="outlined-required"
//         label="Email"
//         onChange={(e)=>{setName(e.target.value)}}
//         />
//         <br/>
//         <TextField
//         required
//         id="outlined-password-input"
//         label="Password"
//         onChange={(e)=>{setpass(e.target.value)}}
//         type="password"
//           autoComplete="current-password"
//           />
//           <br/>
//         <TextField
//         required
//           id="outlined-password-input"
//           label="Confirm Password"
//           type="Confirm password"
//           autoComplete="current-password"
//           />
//           <br/>
//           <br/>
          
//           {/* <Link to='/ho'> */}
            
//           <Button onClick={handleSubmit} variant='contained' color='inherit' className='abc'>Register</Button>
//           {/* </Link> */}
//           <br></br><br></br>
//             <h4>Already have an Account  
//             <Link to='/Login'>Sign In</Link>
            
//             </h4>
       
//       </div>
//     </Box>
//     </div>
//           </body>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

export default function Register() {
  const [email,setName]=useState(' ');
  const [pass,setpass]=useState(' ');
    const [errors, setErrors] = useState({});
    const [dis,setdis]=useState(false)
  const handleSubmit = async (e) => {
    
    const validationErrors = validateForm(email,pass);
    setErrors(validationErrors);
    
    //If there are no errors, submit the form
    if(Object.keys(validationErrors).length === 0) {
      await axios.post('http://localhost:3000/posts',{"email":email,"pass":pass});
    console.log("skdkdkdkkkdkd");
        //Perform form submission logic here
        setdis(!dis)
        console.log('Form-submitted successfully!');
        
      }
      
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    //Update the form data state
    setName(e.target.value)

    //Clear the error for the current field
    setErrors({
        ...errors,
    })
}
const handleChange1 = (e) => {
  const { name, value } = e.target;

  //Update the form data state
  setpass(e.target.value)

  //Clear the error for the current field
  setErrors({
      ...errors,
  })
}


const validateForm = (email,pass) => {
    let errors = {};

    const regex =  /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    //Validate email
    
if(!email.trim())// or (email===' ')
 {
    errors.email = 'Email is required';
}

if(!regex.test(email) && email!==' '){
    errors.email = "This is not a valid email format!";

  }

//Validate password
if(pass===' ') //or (!pass.trim())
{
    errors.pass = 'Password is required';
}
if((pass).length<4 && (pass).length>0 && pass!==' '){
  errors.pass = "Password must be more than 4 characters";
}
if((pass).length>16 && pass!==' '){
      errors.pass = "Password cannot be more than 16 characters";
}
return errors;
};
const nav= useNavigate();
const handleLogin = () =>{
  nav('/Login')
}
function Onclick(e)
{
   handleSubmit();
   if(dis===true){
   handleLogin();
   }
    
}

  return (
    <body className='whole'>
      <div className='REG'>
    <Box className='aa'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      
        <div className='icon'>
        <h1 id='signup'>Sign Up</h1>
        </div>
      <div id="a">
        <TextField
        required
        id="outlined-required"
        label="Email"
        onChange={handleChange}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
        <br/>
        <TextField
        required
        id="outlined-password-input"
        label="Password"
        onChange={handleChange1}
        type="password"
          autoComplete="current-password"
          />
          {errors.pass && <p className='error'>{errors.pass}</p>}
          <br/>
        
          <br/>
          
          {/* <Link to='/ho'> */}
            
          <Button onClick={Onclick} variant='contained' id='register'>Register</Button>
          {/* </Link> */}
          <br></br><br></br>
            <h4 id='login'>Already have an Account  
            <Link to='/Login' style={{textDecoration:'none',color:'brown'}}> Sign In</Link>
            
            </h4>
       
      </div>
    </Box>
    </div>
          </body>
  );
}