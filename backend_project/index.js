function validation(){
    console.log("Function is getting called")
    var username= document.getElementById('uname').value;
    var phone= document.getElementById('phone').value;
    var city= document.getElementById('city').value
    var age= document.getElementById('age').value
    

    var usercheck= /^[A-Za-z]{3,50}$/;
    var phonecheck= /^[0-9]{10}$/;
    var citycheck= /^[A-Za-z]{3,50}$/;
    var agecheck= /^[0-9]{1,3}$/;


    if (usercheck.test(username)){
        document.getElementById('errorname').innerHTML="";
    }

    else{
        document.getElementById('errorname').innerHTML="Please use only Alaphabets";
        return false;
    }

    if (phonecheck.test(phone)){
    document.getElementById('errorphone').innerHTML=" ";
}

    else{
        document.getElementById('errorphone').innerHTML="Please enter a valid phone number ";
        return false;
    }

    if (citycheck.test(city)){
        document.getElementById('errorcity').innerHTML=" ";
    }

    else{
        document.getElementById('errorcity').innerHTML="Please enter a valid city name ";
        return false;
    }
        

    if (agecheck.match(age)){
        document.getElementById('errorage').innerHTML=" ";
    }
    
    else{
        document.getElementById('errorage').innerHTML=" Password is not matching";
        return false;
    }


    return true

}