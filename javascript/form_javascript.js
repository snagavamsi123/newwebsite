
function include_name(){
    included_name=document.getElementById('ip1').value;
    var leng_name=included_name.length;

    if(leng_name<1){    
        document.getElementById('including_name').innerHTML='Hello ';

    }
    else{

    name_expect_firstletter = 
    included_name_updated=included_name[0].toUpperCase() + included_name.substring(1);
    document.getElementById('WishWithName').innerHTML='Hello '+included_name_updated;


    }


}

