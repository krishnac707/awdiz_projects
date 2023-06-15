function register(event) {
  // event.preventDefault();
  let name = document.getElementById("userName").value;
  console.log(name, "Name");
  let number = document.getElementById("userNumber").value;
  console.log(number, "number");
  let email = document.getElementById("userEmail").value;
  console.log(email, "email");
  let password = document.getElementById("userPassword").value;
  console.log(password, "password");

  document.getElementById("userName").value = "";
  document.getElementById("userNumber").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
  alert("form Submitted successfully");

  const setStudentDetail = {
    userName: name,
    userNumber: number,
    userEmail: email,
    userPassword: password,
  };

  localStorage.setItem("students", JSON.stringify(setStudentDetail));

}

function getStudentDetail(){
    let getStudent = JSON.parse(localStorage.getItem("students"));
    console.log(getStudent);
}

// let dataObject ={
//     username:"krishna",
//     userNumber: 1234567890,
//     userEmail: "noemail@TextDecoderStream.com",
//     userPassword: "lsjf93489"
// }

// console.log(dataObject.username);
// console.log(dataObject.userNumber);
// console.log(dataObject.userEmail);
// console.log(dataObject.userPassword);

// let userData = [
//     {
//         namee : "krishna",
//         email: "noemail@test.com",
//         number: 23456789
//     },
//     {
//         namee : "Ravi",
//         email: "noemail@test.com",
//         number: 09876
//     },
//     {
//         namee : "aakash",
//         email: "noemail@test.com",
//         number: 23456789
//     }

// ]
// console.log(userData[1].namee);
// for (let i = 0; i < userData.length; i++) {
//     console.log(userData[i]);
// }

// let userObject = {
//     namee : "krishna",
//     number: 2345678,
//     newObject: { nameee : "ravii",number:86483675438},
//     newArrayy:[1,4,5,6]
// }

// console.log(userObject.newArrayy[2]);

// JS TO JSON
//JSON.stringify(DATA)

//JSON TO JS
//JSON.parse(data)
