// console.log(email);



function signIn() {
    let email = document.getElementById('email')
    let pass = document.getElementById('pass')
  
    var obj = {
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": '*',
            "Content-Type": "application/json",
        },
        data: { email: email.value, password: pass.value },
        url: 'http://localhost:5000/auth/signin'
    }

    axios(obj)
        .then((success) => { console.log(success, "SUCCESS SIGNED IN") })
        .catch((err) => { console.log(err, "ERROR WHILE SIGNING IN") })
    //     axios.post('http://localhost:5000/auth/signin',{email:email.value,password:pass.value})
    // .then((success)=>{
    // console.log(success,'sucesss')
    // })
    // .catch((err)=>{
    //     console.log(err,'error')
    // })

}