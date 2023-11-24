function shag(){
    let name = document.getElementById('name').value;
    let Email = document.getElementById('Email').value;
    let Password = document.getElementById('Password').value;

    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;
    let specialcharacter = /[!,@,#,$,%,^,&,*,(,)]/g;
    let getPasswordlength = Password.length;
   
    
  
    if(name.length == 0){
        alert('Please fill in your name');
  
    }
    else if(Email.length == 0){
      alert('Please fill in email');
    }
    else if(Password.length == 0){
        alert('Please fill in password');
  
    }
    else if(Email.length == 0 && Password.length == 0){
        alert('Please fill in email and password');
  
    }
    
    else if(getPasswordlength < 7){
        alert('min of 8');
  
    }
    else if(!Password.match(numbers)){
        alert('please use 1 number in password');
  
    }
    else if(!Password.match(upperCaseLetters)){
        alert('please use 1 uppercase letter in password');
  
    }
    else if(!Password.match(lowerCaseLetters)){
        alert('please use 1 lovercase letter in your password');
  
    }
    else if(!Password.match(specialcharacter)){
      alert('please use at least 1 special character in your password');
  
    }
    else if(Email.length ==0){
        alert('please fill in email');

    }

    else {

      let shag = JSON.parse(localStorage.getItem('formdata')) || [];
  
      const duplicate = shag.some(data => data.Email === Email);
      
      if(duplicate){
        alert("use another email ");
        return;
      }
    
    
  
  
  
  const formdata = {
    name: name,
    Email: Email,
    Password: Password,
  };
  
  
  shag.push(formdata);
  
  localStorage.setItem('formdata', JSON.stringify(shag));
  
  document.getElementById('registerform').reset()
  
  
 
  
      window.location.href = " login.html " ;
        alert('Your account has been created successfully!.');
  
    }
  }
