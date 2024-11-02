function generatePassword() {
    const length     = document.getElementById('length').value;
    const useNumbers = document.getElementById('useNumbers').checked;
    const useSymbols = document.getElementById('useSymbols').checked;
    const useUppers  = document.getElementById('useUppers').checked;

    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';
    const uppers  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let password = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;
    if (useUppers)  characters += uppers;
    

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById('generatedPassword').textContent = password;

    document.getElementById('copyButton').style.display = 'inline';

    navigator.clipboard.writeText(password).then(() => {
        showNotification('Password copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('hide');
    }, 500);

    setTimeout(() => {
        notification.remove();
    }, 700);
}

function copyPassword() {
    const password = document.getElementById('generatedPassword').textContent;
    navigator.clipboard.writeText(password).then(() => {
        showNotification('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy password: ', err);
    });
}
