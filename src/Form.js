import React, {useState} from 'react'

const Validation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

       //Validate form fields
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        //If there are no errors, submit the form
        if(Object.keys(validationErrors).length === 0) {
            //Perform form submission logic here
            console.log('Form-submitted successfully!');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        //Update the form data state
        setFormData({
            ...formData,
            [name]: value,
        });

        //Clear the error for the current field
        setErrors({
            ...errors,
        })
    }


    const validateForm = (data) => {
        let errors = {};

        //Validate username
        if(!data.username.trim()) {
            errors.username = 'Username is required';
        }

        //Validate email
    if(!data.email.trim()) {
        errors.email = 'Email is required';
    }

    //Validate password
    if(!data.password.trim()) {
        errors.password = 'Password is required';
    }

    return errors;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username:</label> 
                <input 
                    type="text"
                    id="username"
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p className='error'>{errors.username}</p>}
                </div>    
                
                <div>
                <label htmlFor='email'>Email:</label>
                <input 
                type="email"
                id="email"
                name='email'
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <p className='error'>{errors.email}</p>}
                </div>

                <div>
                <label htmlFor='password'>Password:</label>
                <input 
                type="password"
                id="password"
                name='password'
                value={formData.password}
                onChange={handleChange}
                />
                {errors.password && <p className='error'>{errors.password}</p>}
                </div>

                <div>
                    <button onSubmit={handleSubmit}>Submit</button>
                </div>
        </form>
    ) 
};

export default Validation;