function desencriptado (){
    document.getElementById("boton_2").addEventListener("click", function() {

        var input = document.getElementById('entrada').value;
        var salida= document.getElementById('salida')
        var nuevaCadena;
      
        nuevaCadena = input.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        salida.value = nuevaCadena;
        //copyToClip(nuevaCadena);

        if (input.match(/[A-Z]/g)){
                    
            salida.value = "Por favor evite usar mayúsculas";
            
        }
        
        if (input.match(/[#\$\!\%\&\?\¿\¡\+\-\*\=\|]/g)){
            
            salida.value = "Por favor evite los caracteres especiales solo letras minúsculas";
            
        }
        
        if (input.match(/[áéíóú]/g)){
            
           salida.value = "Por favor evite letras acentuadas";
            

        }
        
        if (input.match(/[0-9]/g)){
            
           salida.value = "Por favor evite usar números";  

        }

       
     });

};

function copyToClip(){

    navigator.clipboard.writeText(salida.value);
       

}

    desencriptado();