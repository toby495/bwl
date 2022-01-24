//Cambiar al compenente crear usuario
export const changeToCreateUser = (state) => {
    state.loginState = false;
}

//Cambiar al componente iniciar sesión
export const changeToLogin = (state) => {
    state.loginState = true;
}

//crea un usuario(
export const createUser = (state, payload) => {
    let user = {...state.users.find(element => element.email === payload.email)}
    let date = new Date();
    if(user.email === payload.email){
        state.createUserErrorAler = true
    }else{
        state.createUserErrorAler = false
        setTimeout(() => {
            state.loginState= true;
            state.users.push({
             email: payload.email,
             password: payload.password,
             fullName: payload.fullName,
             createdDate:`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
            });        
            state.buttonState = true;
            state.createUserErrorAler = ''
        }, 2000);
       
    }
}

//Desbloquea el boton de crear usuario
export const activeButton = (state) => {
    state.buttonState=false;
}

//Bloquea el botón de crear usuario
export  const disabledButton = (state) => {
    state.buttonState=true;
}

//Alerta que inputPassword no coincide con inputConfirmPassword
export const passwordWarning = (state) => {
    state.passwordInput = "red";
    state.buttonState=true;
}

//Devuelve el color original a  inputPassword
export const samePassword = (state) => {
    state.passwordInput = "lightskyblue"
}

//Alerta que inputConfirmPassword no coincide con password
export const confirmPasswordWaring = (state) => {
    state.confirmPasswordInput = "red";
    state.buttonState = true;
}

//Devuelve el color orignial a inputConfirmPassword 
export const sameConfirmPassword = (state) => {
    state.confirmPasswordInput = "lightskyblue";
}

//incio de sesión
export const getCurrentUser = (state, payload) =>{
    state.currentUser = payload.currentUserIndex;
    state.users[state.currentUser].logTime = payload.logTime;
    state.users[state.currentUser].lastLoginDate = payload.lastLoginDate;
}
 
//Activa la alerta error 
export const activatedErrorAlert = (state, payload) =>{
    state.errorLogAlert = payload;
}