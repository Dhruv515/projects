function validation(){
    console.log("Function is getting called")
    var username= document.getElementById('exampleInputname1').value;
    var email= document.getElementById('exampleInputEmail1').value;
    var password= document.getElementById('exampleInputPassword1').value
    var cpassword= document.getElementById('exampleInputcPassword1').value
    

    var usercheck= /^[A-Za-z]{3,50}$/;
    var emailcheck= /^[a-z0-9]{3,}@[a-z0-9]{3,}[.]{1}[a-z]{3,6}$/;
    var passwordcheck= /^[A-Za-z0-9]{3,50}$/;


    if (usercheck.test(username)){
        document.getElementById('errorname').innerHTML=" ";
    }

    else{
        document.getElementById('errorname').innerHTML="Please use only Alaphabets";
        return false;
    }

    if (emailcheck.test(email)){
    document.getElementById('erroremail').innerHTML=" ";
}

    else{
        document.getElementById('erroremail').innerHTML="Please enter a valid email-id ";
        return false;
    }

    if (passwordcheck.test(password)){
        document.getElementById('errorpassword').innerHTML=" ";
    }

    else{
        document.getElementById('errorpassword').innerHTML="Please enter a valid password ";
        return false;
    }
        

    if (cpassword.match(password)){
        document.getElementById('errorcpassword').innerHTML=" ";
    }
    
    else{
        document.getElementById('errorcpassword').innerHTML=" Password is not matching";
        return false;
    }


    return true

}


function validation2(){
    console.log("Function is getting calle")
    var username2= document.getElementById('exampleInputName2').value;
    
    var password2= document.getElementById('exampleInputPassword2').value;

    
    var usercheck2= /^[A-Za-z]{3,50}$/;
    var passwordcheck2= /^[A-Za-z0-9]{3,50}$/;
                            
    if (usercheck2.test(username2)){
        document.getElementById('errorname2').innerHTML=" ";
    }

    else{
        document.getElementById('errorname2').innerHTML="Please use only Alaphabets";
        return false;
    }
    if (passwordcheck2.test(password2)){
        document.getElementById('errorpassword2').innerHTML=" ";
    }

    else{
        document.getElementById('errorpassword2').innerHTML="Please enter a valid password ";
        return false;
    }

    return true;

}


var first= document.getElementById("first");
first.onmouseenter= function(){
                             first.style.backgroundColor="red";
};

first.onmouseleave= function(){
    first.style.backgroundColor= "#0071DC";
};