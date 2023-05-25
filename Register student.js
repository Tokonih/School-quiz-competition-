let info = document.querySelectorAll('.info')

function validation(){
    for( let i=0; i<info.length; i++){
        if (info[i].value == "" || info[i].value == null){
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        }
    }
}

class student{
    constructor(school, state, email, phone, address, password){
        this.school = school;
        this.state =state;
        this.email = email;
        this.phone =phone;
        this.address = address;
        this.password = password
    }
    login (email, password){
        if(email == this.email && password == this.password){
            alert('Login Successful')
        }else{
            alert('Invalid Email or phone Number')
        }
    }
}

// let school = document.getElementById('school')
// let state = document.getElementById('state')
// let email = document.getElementById('email')
// let phone = document.getElementById('phone')
// let address = document.getElementById('address')
// let password = document.getElementById('password')


let studentBtn = document.getElementById('studentBtn')

if(studentBtn){
    studentBtn.onclick = (e) => {
        e.preventDefault()
        validation()
    }
}