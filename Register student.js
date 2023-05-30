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
        } info[i].nextElementSibling.innerHTML = ""
    }
}

class student{
    constructor(Name, school, email, password){
        this.Name = Name
        this.school = school;
        this.email = email;
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
// let regPhone = document.getElementById('regPhone')
let regEmail = document.getElementById('regEmail')
let regPassword = document.getElementById('regPassword')
let regName = document.getElementById('regName')
let popup = document.getElementById("popup")
let close = document.getElementById("close")


let studentArr = []
let studentBtn = document.getElementById('studentBtn')
if(studentBtn){
    studentBtn.onclick = (e) => {
        e.preventDefault()
        if( !regName.value || !School.value || !regEmail.value || !regPassword.value){
            return
        }else{
            popup.classList.add("open-popup")

        }
        let studentData = new student(regName.value, School.value, regEmail.value, regPassword.value)
        // console.log(studentArr)
        let studentInfo = JSON.parse(localStorage.getItem('studentsData')) || [];
        studentInfo.push(studentData)
        localStorage.setItem('studentsData', JSON.stringify(studentInfo))
        validation()
    }
}

if(close){
    close.onclick =()=>{
        popup.classList.remove("open-popup")

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