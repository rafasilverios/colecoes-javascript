function getAdmins(map) {
    let admins = []
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}


const usuarios = new Map();

usuarios.set('Rafael', 'Admin');
usuarios.set('Monik', 'Admin');
usuarios.set('Tom', 'User');
usuarios.set('Naty', 'Admin');

console.log(getAdmins(usuarios));