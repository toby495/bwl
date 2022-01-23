let date = new Date()
export default () => ({
    users:[{
        email:'metalinsanee@gmail.com',
        password:'Jose9520.,',
        fullName:'José Antonio Medina Pérez',
        logTime:'',
        createdDate:`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        lastLoginDate:'',
    }],
    loginState:true,
    buttonState:true,
    passwordInput:'lightskyblue',
    confirmPasswordInput:'lightskyblue',
    loginButton:true,
    currentUser:''
});