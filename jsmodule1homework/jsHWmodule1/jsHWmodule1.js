'use strict'
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const cancelAdminLogin = 'Отменено пользователем!';
const wrongAdminLogin = 'Доступ запрещен!';

const cancelAdminPassword = 'Отменено пользователем!';
const wrongAdminPassword = 'Доступ запрещен, неверный пароль!';

const greetPerson = 'Добро пожаловать!';

const adminLoginLogin = prompt('Пожалуйста, введите ваш логин', '');

if (adminLoginLogin === null) {
    alert(cancelAdminLogin);
} else if (adminLoginLogin !== adminLogin) {
    alert(wrongAdminLogin);
} else {

    const adminPasswordPass = prompt('Пожалуйста, введите ваш пароль', '');
    if (adminPasswordPass === null) {
        alert(cancelAdminPassword);
    } else if (adminPasswordPass !== adminPassword) {
        alert(wrongAdminPassword);
    } else {
        alert(greetPerson);
    }
}