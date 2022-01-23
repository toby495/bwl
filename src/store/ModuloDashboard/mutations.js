export const changeToUsers = (state) => {
    state.dashboardState = false;
    state.dashboardButton = 'lightskyblue' ;
    state.usersButton ='darkslateblue';
}

export const changeToDashboard = (state) => {
    state.dashboardState = true;
    state.dashboardButton = 'darkslateblue' ;
    state.usersButton ='lightskyblue' ;
}
