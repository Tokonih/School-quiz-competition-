let schName = JSON.parse(localStorage.getItem('schools'))
console.log(schName)
let signinSch = document.getElementById('signinSch')
schName.forEach(
    function schools(data){
        let option = document.createElement('option')
        option.value = data.school;
        option.innerHTML = data.school;
        signinSch.appendChild(option)
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

let signinEmail = document.getElementById('signinEmail')
let signinPass = document.getElementById('signinPass')


let signIn = document.getElementById('signIn')
if(signIn){
    signIn.onclick = (e) =>{
        e.preventDefault()
        let getStudent = localStorage.getItem('studentsData')
        let storedstudent = JSON.parse(getStudent)
        if(storedstudent == null){
            alert('no student avaliable')
        }else {
            for(let i=0; i<storedstudent.length; i++){
                if(storedstudent[i].school == signinSch.value && storedstudent[i].email ==signinEmail.value && storedstudent[i].password == signinPass.value){
                    alert('login successful')
                }else{
                    alert('invalid login details')
                }
            }
        }
        validation()
        // alert("working")
    }
}