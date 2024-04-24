let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');


// Function for checking empty fields

const name = document.getElementById('.name');
const mail = document.getElementById('.mail');
const pass = document.getElementById('.pass');

form.addEventListener('submit', (event)=>{
event.preventDefault();
validate();

})

//define the validate function;
const validate = () =>{
const name = name.value.trim();
const mail = mail.value.trim();
const pass = pass.value.trim();

//validateusername
if(name==" "){
    setErrormsg(name, 'Please Enter Your Name');
}else if(name<2){
    setErrormsg(name, 'Name must be of minimum 2 charaters');
}else{
    setSuccessmsg(name);
}

//Validate email
if(mail==""){
    setErrormsg(mail, 'Please Enter Your Email ID');
}else if(!isEmail(mail)){
    setErrormsg(mail, 'Please Enter a valid Email ID');
}else{
    setSuccessmsg(mail);
}
}




// function validation(){
//     if(document.Formfill.Username.value==""){
//         document.getElementsByClassName("result").innerHTML="Enter Your Name*";
//         return false;
//     }
//     else if(document.Formfill.Email.value==""){
//         document.getElementsByClassName("result").innerHTML="Enter Your Email Id*";
//         return false;
//     }
//     if(document.Formfill.Password.value==""){
//         document.getElementsByClassName("result").innerHTML="Enter Password*";
//         return false;
//     }
//     if(document.Formfill.Password.value.length<6){
//         document.getElementsByClassName("result").innerHTML="Password Must be 6 digits*";
//         return false;
//     }
// }


signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});