const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.querySelector('#formEmail').value.trim();
    const password = document.querySelector('#formPassword').value.trim();

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            console.log("Log in Success----------------------------")
            document.location.replace('/posts');
        } else {
            alert('Failed to log in');
        }
    }
};



document
    .querySelector('.login-form') 
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('#signUp')
    .addEventListener('click', function(){
      document.location.replace('/sign-up')
    });
