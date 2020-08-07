 function encrypt(){
            //Key
            var key=document.getElementById('key');
            var keyValue=parseInt(key.value);
            document.getElementById("keyp").innerHTML = ("the key is:" +keyValue);
        
            var plaintext=document.getElementById('plaintext').value;
            var text = "";
            var val;
             var lower =plaintext.toLowerCase();   
             if(/^[a-zA-Z]/.test(plaintext)){     // check if text contains letter only 
               for(let i =0; i<plaintext.length;i++){   
                   val = lower.charCodeAt(i);    // returns the Unicode of the character
                   if(val+keyValue>122){
              //  alert ("it's above z");
                   val=97+keyValue-1-(122-val);
                   text +=String.fromCharCode(val);
                  }else
                   text +=String.fromCharCode(val+keyValue);


            }


           document.getElementById("plaintextp").innerHTML =("the encryption is:"+ text);
          } else{
             document.getElementById("plaintextp").innerHTML =("the encryption is not found");
          }



             }
          function decrypt(){
            var key=document.getElementById('key');
            var keyValue=parseInt(key.value)
            document.getElementById("keyp").innerHTML = ("the key is:" +keyValue);
            var plaintext=document.getElementById('plaintext').value;
            var text = "";
            var val;
            var lower =plaintext.toLowerCase();
            if(/^[a-zA-Z]/.test(plaintext)){
            
            for(let i =0; i<plaintext.length;i++){
              
              val =lower.charCodeAt(i);
              if(val-keyValue<97){
              //  alert ("it's above z");
                val=122-(keyValue-1)+(val-97);
                text +=String.fromCharCode(val);


              }else
              text +=String.fromCharCode(val-keyValue);


          }
          document.getElementById("plaintextp").innerHTML =("the decryption is:"+ text);


         } else{
          document.getElementById("plaintextp").innerHTML =("the decryption is not found"); } 
        }