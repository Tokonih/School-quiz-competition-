let schName = JSON.parse(localStorage.getItem('schools'))
console.log(schName)
let regSchool = document.getElementById('regSchool')
schName.forEach(
    function schools(data){
        let option = document.createElement('option');
        option.value = data.school;
        option.innerHTML =data.school;
        regSchool.appendChild(option)
    }
)

let info = document.querySelectorAll('.info')

function validation(){
    for( let i=0; i<info.length; i++){
        if (info[i].value == "" || info[i].value == null){
            info[i].nextElementSibling.innerHTML = info[i].previousElementSibling.innerHTML + " is required"
        }
    }
}

class student{
    constructor(school, email, phone, password){
        this.school = school;
        this.email = email;
        this.phone =phone;
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


let School = document.getElementById('regSchool')
let regPhone = document.getElementById('regPhone')
let regEmail = document.getElementById('regEmail')
let regPassword = document.getElementById('regPassword')


let studentArr = []
let studentBtn = document.getElementById('studentBtn')
if(studentBtn){
    studentBtn.onclick = (e) => {
        e.preventDefault()
        if(!School.value || !regEmail.value || !regPhone.value || !regPassword.value){
            return
        }else{
            alert('Student Registration Successful')
        }
        let studentData = new student(School.value, regEmail.value,  regPhone.value, regPassword.value)
        studentArr.push(studentData)
        console.log(studentArr)
        localStorage.setItem('studentsData', JSON.stringify(studentArr))
        validation()
    }
}

// let signIn = document.getElementById('signIn')
// if(signIn){
//     signIn.onclick = (e) =>{
//         e.preventDefault()
//         validation()
//         alert("working")
//     }
// }