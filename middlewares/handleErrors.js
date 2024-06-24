// handle errors
handleErrors = (err) =>{
    let errors = { username: '', password: '' };
    console.log(err.message);

    // duplicate error code

    if(err.code === 11000){
        errors.username= 'that username is already registered';
    }

    // validation error
    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
    }

    // incorrect username

    if(err.message.includes('incorrect username')){
        errors.username = 'username is not registered';
    }

    // incorrect password

    if(err.message.includes('incorrect password')){
        errors.password = 'password is incorrect';
    }

    return { errors: errors };
}

module.exports = handleErrors;