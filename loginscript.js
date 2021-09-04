        
        
        var password= document.getElementById("pswd");
        var msg=document.getElementById("para");
        var exp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        console.log(password.value);

        password.onblur=function()
        {
            if(exp.test(password.value))
            {
              console.log("password right");
              msg.setAttribute("hidden","true");
            }
            else
            {
                msg.removeAttribute("hidden","true");
                msg.style.color="orange";
                msg.style.fontWeight="bold";
                msg.style.fontSize="1.2em";
                
                password.focus();
                
            }
        }
                
          
        password.onfocus=function()
        {
                password.value="";
                
        }
        