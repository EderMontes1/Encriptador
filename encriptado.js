function encriptado (){
    document.getElementById("boton_1").addEventListener("click", function() {

        var input = document.getElementById('entrada').value;
        var salida= document.getElementById('salida')
        const array = ["enter", "imes", "ai", "ober", "ufat"];
        var nuevaCadena;
      
        nuevaCadena = input.replace(/[e]/g, array[0]).replace(/[i]/g, array[1]).replace(/[a]/g, array[2]).replace(/[o]/g, array[3]).replace(/[u]/g, array[4]);
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

    encriptado();