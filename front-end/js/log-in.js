const baseURL = 'http://localhost:5000'

$('#logIn').click( () => {
  const email = $('#email').val();
  const password = $('#password').val();

  const data = {
    email,
    password
  }

  console.log({data});

  axios({
    method: 'post',
    url: `${baseURL}/auth/login`,
    data: data,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
  }).then(function (response) {
    console.log({response});
    const {message, token} = response.data
    if(message == "Done") {
      localStorage.setItem("token", token)
      window.location.href = 'add-post.html';
      console.log(data);
    } else {
      console.log('In-valid email or password');
      alert(message)
    }
  }).catch(function (error) {
    console.log(error);
  })
});


const userID = 


function updateProfile(id) {
  localStorage.setItem("userID", id)
}