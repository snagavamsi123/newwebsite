function include_name(){
    included_name=document.getElementById('ip1').value;
    var leng_name=included_name.length;

    if(leng_name<1){    
        document.getElementById('WishWithName').innerHTML='Hello ';
    }
    else{
    included_name_updated=included_name[0].toUpperCase() + included_name.substring(1);
    document.getElementById('WishWithName').innerHTML='Hello '+included_name_updated;
    //document.getElementById('first_name_warning').innerHTML=' ';

    }


}

//Function For validating the form
function validating()
    {
    
        f_name=document.getElementById('ip1').value;
        l_name=document.getElementById('ip2').value;
        email_id=document.getElementById('ip3').value;
        u_name=document.getElementById('ip4').value;
        password=document.getElementById('ip5').value;
       
        var f_name_regx=/^([a-z A-Z]{3,15})$/
        var l_name_regx=/^([a-z A-Z]{3,15})?$/
        var username_regx= /^([a-z A-Z]+)([0-9]+)?$/;
        var mail_regx=/^([a-z A-Z 0-9\.-]+)@([a-z A-Z]{2,8})\.([a-z A-Z]{2,8})([\. a-z A-Z]{2,8})?$/;
        var password_regx=/^([0-9 a-z A-Z @$%#&_]{10,15})$/;

        //This is for first name mandatory warning
        if(f_name.trim().length<1 || f_name_regx.test(f_name) != true)
        {
            ip1.style.border = 'solid 3px red'; 
            if(f_name.trim().length<1)
            {   
                document.getElementById('first_name_warning').innerHTML='* First Name must no be empty'; 
            }
            else if(f_name.trim().length<=4)
            {
                document.getElementById('first_name_warning').innerHTML='* Name length must be greater than 3'; 
            }
            else{
                document.getElementById('first_name_warning').innerHTML= '* Numbers and special characters are not allowed.Name must only contain alphabets.'; 
            }

        return false    
        }
       else if(l_name_regx.test(l_name) != true)
        {
            ip2.style.border = 'solid 3px red'; 
            document.getElementById('last_name_warning').innerHTML= '* Numbers and special characters are not allowed. Name must only contain alphabets.'; 
            return false    
            }


        //This is for email mandatory warning    
        else if(email_id.trim().length<1 || mail_regx.test(email_id) != true)
        {
            
            if(email_id.trim().length<1) //checking email id empty or not
            {   ip3.style.border = 'solid 3px red'; 
                document.getElementById('email_warning').innerHTML='* Email must no be empty';
                return false
            }

            else    //checking valid email or not
            {
                ip3.style.border = 'solid 3px red'; 
                document.getElementById('email_warning').innerHTML= 'Not a valid mail';
                return false
            }

        }

        //This is for username mandatory warning
        else if(u_name.trim().length<1 || username_regx.test(u_name) != true)
            {
                if (u_name.trim().length<1) // checking username is empty or not
                    {
                        ip4.style.border = 'solid 3px red'; 
                        document.getElementById('user_name_warning').innerHTML='User Id must no be empty';
                        return false
                    }

                else //checking username contain numbers or not
                {
                    ip4.style.border = 'solid 3px red'; 
                    document.getElementById('user_name_warning').innerHTML= 'User Id only contain alphabets and numbers';
                    return false
                }
            
            }
            
        //This is for password related warnings
        else if(password.trim().length<=5 || password_regx.test(password) != true)
            {   ip5.style.border = 'solid 3px red'; 
                //this inner if condition is for password not entered or length less than 5
                if(password.trim().length<1)
                {
                    document.getElementById('password_warning').innerHTML=' * Password must no be empty';
                }

                else if(password.trim().length<=10 || password.trim().length>15)
                {
                    document.getElementById('password_warning').innerHTML=' * Password must be in the range of 10 to 15 characters but your password length is : '+password.trim().length;
                }

                else{
                    document.getElementById('password_warning').innerHTML=' * Password must contain characters,number and special case (@ $ % # & _)';
                }

                return false
            }
        //this is to check username & password matching or not
        else if(u_name==password)
            {

                ip4.style.border = 'solid 3px red';
                ip5.style.border = 'solid 3px red';
                document.getElementById('extra_warnings').innerHTML='* Username and Password must not be same';
                return false
            }   
        else
            {
                return true
            }

    }

//Form validating Warning removal

function f_name_warning_removal()
    {
        document.getElementById('first_name_warning').innerHTML='';
        document.getElementById('last_name_warning').innerHTML='';
        document.getElementById('user_name_warning').innerHTML='';
        document.getElementById('password_warning').innerHTML='';
        document.getElementById('email_warning').innerHTML='';
        document.getElementById('extra_warnings').innerHTML='';

        //these css codes are to remove red indication box
        ip1.style.border = 'none';
        ip2.style.border = 'none';
        ip3.style.border = 'none';
        ip4.style.border = 'none';
        ip5.style.border = 'none';
    }

//Validing warning removal END


//F_name special validation 

/*
function first_name_special_validation()
{

    var f_name_special_regx=/^([a-z A-Z]{3,15})$/

if(f_name)




}

*/


