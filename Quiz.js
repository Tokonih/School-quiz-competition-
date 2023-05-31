let studentDetail = document.getElementById('studentDetail')
let getStudent = localStorage.getItem('participant')
let storedstudent = JSON.parse(getStudent)
console.log(storedstudent)
// for (let i = 0; i < storedstudent.length; i++) {
   // console.log(storedstudent)
   let nav = `
   <div>
   <strong>Name: </strong><p>${storedstudent.Name}</p>
</div>
<div>
   <strong>School:</strong><p>${storedstudent.school}</p>
</div>
   `
   studentDetail.innerHTML = nav
// }

let questionsArr = [
   {
      ques: "When did Nigeria gain independence",
      options: ["1999", "1970", "1960"],
      ans: "1960"
   },
   {
      ques: "What year did NYSC start in Nigeria",
      options: ["1991", "1973", "2021"],
      ans: "1973"

   },
   {
      ques: "what is the full meaning of NDLEA",
      options: ["Nigerian Drug Legal Employment Agency", "National Drug Law Enforcement Agency", "Niegerian Debuging Legal enterpreneurship Agency"],
      ans: "National Drug Law Enforcement Agency"
   },
   {
      ques: "what is the name of CBN governor",
      options: ["Buhari", "Peter Obi", "Godwin Emefiele "],
      ans: "Godwin Emefiele "
   }, {
      ques: "which country colonied Nigeria",
      options: ["Great Britain", "Unitesd States of America", "Ghana"],
      ans: "Great Britain"
   },
   {
      ques: "what is the name of the vice president of Nigeria",
      options: ["Peter Obi", "Prof Yemi Osinbajo", "Bola Ahmed Tinibu"],
      ans: "Prof Yemi Osinbajo"
   },
   {
      ques: "when did Nigeria gain her Democracy",
      options: ["1999", "2018", "1960"],
      ans: "1999"
   },
   {
      ques: "who was the first milliatry head of state in Nigeria",
      options: ["ALHAJI ABUBAKAR TAFAWA BALEWA", "Muhammad Buhari", "Bola Amhed Tinibu"],
      ans: "ALHAJI ABUBAKAR TAFAWA BALEWA"
   },
   {
      ques: "when did rework start",
      options: ["2022", "2020", "2010"],
      ans: "2022"
   },
   {
      ques: "what is the name of the minister of FCT",
      options: ["Bala Abdulkadir Mohammed", "Mohammed Musa Bello", "Festus Keyamu"],
      ans: "Mohammed Musa Bello"
   },
   {
      ques: "which country won the last world cup",
      options: ["Agentina", "France", "Nigeria"],
      ans: "Agentina"
   }
]


let index = 0
let point = 0 
let quizContainer = document.getElementById("ansBtn")

function generateQuestion() {
   let quizQuestion = `<h2 class="questions">${questionsArr[index].ques}</h2>`;
   quizContainer.innerHTML += quizQuestion;
   questionsArr[index].options.forEach((answer)=>{
      let btns = `
      <button class="answers">${answer}</button>
      `
      quizContainer.innerHTML += btns
   })

   // let questionsArr = questions.length
   // let index = Math.floor(Math.random() * questionsArr)
   // result = questions[index]
   // console.log(result)
   // localStorage.setItem('Ques & ans', JSON.stringify(result))
   // document.getElementById('questions').innerHTML = result.ques
}
generateQuestion()

quizContainer.addEventListener("click", (e) =>{
   if(e.target.className == "answers"){
      if(e.target.innerHTML == questionsArr[index].ans){
         index++
         quizContainer.innerHTML=""
         generateQuestion()at
         if(index == questionsArr.length){
            alert("game over");
            index = questionsArr.length -1
         }

      }else{
         alert('wrong answer')
      }
   }
})

// let ansBtn = document.getElementById('ansBtn')
// function answers() {
//    let getAns = localStorage.getItem("Ques & ans")
//    let storedAns = JSON.parse(getAns)
//    let Btns = `
//   <div>
//   <button class="select" >${storedAns.options[0]}</button>
//    </div>
//    <div>
//    <button class="select">${storedAns.options[1]}</button>
//    </div>
//    <div>
//   <button class="select">${storedAns.options[2]}</button>
// </div>
//   `
//    ansBtn.innerHTML = Btns

//    let select = document.querySelectorAll('.select')
//    for (let i = 0; i < select.length; i++) {
//       select[i].addEventListener('click', (e) => {
//          // alert('working')
//          // e.preventDefault()
//          if(select[i].innerHTML == storedAns.ans){
//             // setInterval(()=>{
//             //    alert('correct ')
//             // }, 500);
//             // setTimeout(()=>{
//             //    // window.location.reload()
//             // }, 1000)
//             // alert('correct')
//             point++
//             console.log(point)
//             setTimeout(function() {
//                console.log("This message will be displayed after a delay");
//              }, 2000);
             
//          }else{
//             // alert('wrong answer')
//             setTimeout(function() {
//                console.log("This message will be displayed after a delay");
//              }, 1000);
//          }
//       })
//    }

// }
// answers()



