const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#formUsername').value.trim();
    const email = document.querySelector('#formEmail').value.trim();
    const password = document.querySelector('#formPassword').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log(JSON.stringify({ name, email, password }))
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.signUp-form')
    .addEventListener('submit', signupFormHandler);