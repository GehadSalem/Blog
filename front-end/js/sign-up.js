const baseURL = 'http://localhost:5000'

$('#signUp').click( () => {
  const userName = $('#userName').val();
  const email = $('#email').val();
  const password = $('#password').val();
  const cPassword = $('#cPassword').val();
  const age = $('#age').val();
  // const gender = $('#gender').val();
  // const phoneNum = $('#phoneNum').val();

  const data = {
    userName,
    email,
    password,
    cPassword,
    age,
    // gender,
    // phoneNum
  }

  console.log({data});

  axios({
    method: 'post',
    url: `${baseURL}/auth/signup`,
    data: data,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
  }).then(function (response) {
    console.log({response});
    const {message} = response.data
    if(message == 'Done') {
      alert("Done")
      window.location.href = 'log-in.html';
    } else if (message == 'Email Exist') {
      alert("Email Exist")
    } else {
      console.log('fail to sign up');
      alert(message)
    }
  }).catch(function (error) {
    console.log(error);
  })
});