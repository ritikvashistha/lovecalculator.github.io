function checkloveper(){
        
        var nam=document.getElementById("uname").value;
     
         
        var lov=document.getElementById("lovname").value;
        
 
        
        if(nam=="")
        {
        document.getElementById('username').innerHTML="*Please Enter your Name*      ";    
        }
        else if(lov=="")
        {
        document.getElementById('lo').innerHTML="   *Please Enter your Love Name*";    
        }
        
        else
            {
            location.href="per.html";
                
            }
     sessionStorage.setItem("textvalue",nam);
       sessionStorage.setItem("textval",lov);
    }
 