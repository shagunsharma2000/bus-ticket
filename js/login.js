function validation(){

    var name = document.getElementById('Email');
    var pw = document.getElementById('Password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(Email.value.length == 0){
        alert('Please fill in email');

    }else if(Password.value.length == 0){
        alert('Please fill in password');

    }else if(Email.value.length == 0 && Password.value.length == 0){
        alert('Please fill in email and password');

    }else if(Password.value.length > 8){
        alert('Max of 8');

    }else if(!Password.value.match(numbers)){
        alert('please add 1 number');

    }else if(!Password.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!Password.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('Email', Email.value);
        localStorage.setItem('Password', Password.value);
        alert('Your account has been created');
        window.location.href=" homepage.html " ;
    }
}


 



function check(){
    var storedEmail = localStorage.getItem('Email');
    var storedPassword = localStorage.getItem('Password');
    if(Email.value == storedEmail && Password.value == storedPassword){
        alert('You are logged in.');
    }else{
        alert('Error on login');
    }
}











// function validationdata(){
    
//     let Email = document.getElementById('Email').value;
//     let Password = document.getElementById('Password').value;
//     let lowerCaseLetters = /[a-z]/g;
//     let upperCaseLetters = /[A-Z]/g;
//     let numbers = /[0-9]/g;
//     let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
//     let getpasswordlength = Password.length;

    
  
   
//        if(email.length == 0){
//       alert('Please fill in email');
//     }
//     else if(Password.length == 0){
//         alert('Please fill in password');
  
//     }
//     else if(Email.length == 0 && Password.length == 0){
//         alert('Please fill in email and password');
  
//     }
    
//     else if(getPasswordlength < 7){
//         alert('min of 8');
  
//     }
//     else if(!Password.match(numbers)){
//         alert('please use 1 number in password');
  
//     }
//     else if(!Password.match(upperCaseLetters)){
//         alert('please use 1 uppercase letter in password');
  
//     }
//     else if(!Password.match(lowerCaseLetters)){
//         alert('please use 1 lovercase letter in your password');
  
//     }
//     else if(!Password.match(specialcharacter)){
//       alert('please use at least 1 special character in your password');
  
//     }
//     else{
  
//       let validationdata = JSON.parse(localStorage.getItem('formdata')) || [];
  
//       const duplicate = validationdata.some(data => data.Email === Email);
      
//       if(duplicate){
//         alert('use another email');
//         return;
//       }
  
  
//   const formdata = {
//     Email: Email,
//     Password: Password
//   };
  
  
//   validationdata.push(formdata);
  
//   localStorage.setItem('formdata', JSON.stringify(storedata));
  
//   document.getElementById('registerform').reset()
  
  
//       // localStorage.setItem('name', name.value);
//       //   localStorage.setItem('email', email.value);
//       //   localStorage.setItem('phoneno', phoneno.value);
//       //   localStorage.setItem('password', password.value);
  
//       window.location.href ='homepage.html';
//         alert('Your account has been created successfully!.');
  
//     }
//   }