//const form=document.querySelector("");
    
const form=document.querySelector("form");
const btn=document.querySelector("button");
const error=document.querySelector(".error");

form.onsubmit=(e)=>{
   e.preventDefault();
}

btn.onclick=()=>{

let xhr=new XMLHttpRequest();

xhr.onreadystatechange=()=>{
if(xhr.readyState===XMLHttpRequest.DONE){
     if(xhr.status===200){
              let data=xhr.response;
              
             if(data ==="success"){
             //    error.textContent=data;
                location.href="home.php";
                }
                else{
                    error.textContent=data;
                   error.style.display="block";
                   btn.innerHTML="Sign up again";
                   btn.style.fontSize="0.8em";
                   }    	
         }//status
         
      }
else{
       btn.innerHTML='<i class="fa fa-spinner fa-pulse"></i>';
       btn.style.color="white";
      btn.style.fontSize="1.2em";
     }
}

xhr.open("POST","http://localhost/websites/App1/Controllers/signupcontroller.php",true);
let formdata=new FormData(form);
xhr.send(formdata);

//"http://localhost/websites/social/sign-up/m



}


function checka(){
var d=document.getElementById("passa");
var eyea=document.getElementById("showa");
   


if(d.type==="password"){
       d.type="text";
       eyea.innerHTML='<i class="fa fa-eye-slash"></i>';
   }
else{
   d.type="password";
   eyea.innerHTML='<i class="fa fa-eye"></i>';
       
   }
}



function checkb(){
var e=document.getElementById("passb");
var eyeb=document.getElementById("showb");

if(e.type==="password"){
e.type="text";
eyeb.innerHTML='<i class="fa fa-eye-slash"></i>';
   }
else{
e.type="password";
eyeb.innerHTML='<i class="fa fa-eye"></i>';

       }
}
