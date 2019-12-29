'use strict';

const MIN_EMAIL_LENGTH = 5;
const MIN_PASSWD_LENGTH = 6;

let usrEmail = prompt('Please, enter your email: ','');

if ( usrEmail === '' || usrEmail === null ) {
    alert('Canceled');
} else if ( usrEmail.length < MIN_EMAIL_LENGTH ) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if ( usrEmail === 'user@gmail.com'|| usrEmail === 'admin@gmail.com' ) {
    let usrPassword = prompt('Please, enter your password: ', '');

    if ( usrPassword === '' || usrPassword === null ) {
        alert('Canceled');
    } else if ( usrEmail === 'user@gmail.com' && usrPassword !== 'UserPass' || 
                usrEmail === 'admin@gmail.com' && usrPassword !== 'AdminPass') {
        alert('Wrong password');
    } else {
        if ( confirm('Do you want to change your password?') ) {
            let currentPassword = prompt('Please, enter your current password: ', '');

            if ( currentPassword === usrPassword ) {
                let newPassword = prompt('Please, enter new password: ');

                if (newPassword === '' || newPassword === null) {
                    alert('Canceled');
                } else if ( newPassword < MIN_PASSWD_LENGTH ) {
                    alert(`It’s too short password. Sorry.`);
                } else if ( newPassword === prompt('Please, enter new password one more time: ', '') ) {
                    usrPassword = newPassword;
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.');
                }
            } else {
                alert('Canceled');
            }
        } else {
            alert('You have failed the change.');
        }
    }
} else {
    alert(`I don’t know you`);
}