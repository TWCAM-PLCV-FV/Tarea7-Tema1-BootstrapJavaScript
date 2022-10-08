function resaltarIn(value){
    value.style.fontWeight="bold";
}

function resaltarOut(value){
    value.style.fontWeight="normal";
}

const productos=[];

function comprar(elem){

    let producto = new Object();
    producto.nombre = (document.getElementById("nombre"+elem)).innerHTML;    
    producto.cantidad = (Number(document.getElementById("cantidad"+elem).value));
    producto.precio = (document.getElementById("precio"+elem)).innerHTML;
    producto.precio= (Number(producto.precio))*(Number(producto.cantidad));

    if(productos.length==0){
        console.log("Carrito vacío. Creando...");
        productos.push(producto);
        crearElemento(producto,elem);             
    }else{ 
        let cantidad = productos.length;
        for(let i=0; i<cantidad; i++){
            if(productos[i].nombre==producto.nombre){
                console.log("Sumando 1 más...");
                producto.cantidad= (Number(producto.cantidad))+(Number(productos[i].cantidad));
                producto.precio= (Number(producto.precio))+(Number(productos[i].precio));
                productos[i]=producto;
                actualizarElemento(producto,elem);
            }
            else{
                console.log("Creando nuevo producto...");
                productos[i]=producto;
                crearElemento(producto,elem);
            }        
        }
    }
     
}

function crearElemento(producto,id){
    let remover = document.getElementById(id);
    if(remover!=null){
        remover.remove();
    }
    let carrito = document.getElementById("carrito");
    let v= document.getElementById("vacio");
    if(v!=null){
        carrito.removeChild(v);
    }
    var texto_a = document.createTextNode(producto.nombre+" - "+producto.cantidad+" - "+producto.precio+"€");    
    var a = document.createElement("div");
    a.id="div"+id;
    a.innerHTML= "<a class='dropdown-item'>"+texto_a.data+" "+" <button id="+id+" type='button' class='btn btn-danger' onclick='eliminarElemento(this.id)' >X</button> </a>";

    carrito.appendChild(a);
    
}

function actualizarElemento(producto,id){
    let remover = document.getElementById(id);
    if(remover!=null){
        remover.remove();
    }
    let carrito = document.getElementById("carrito");
    let texto_a = document.createTextNode(producto.nombre+" - "+producto.cantidad+" - "+producto.precio+"€");
    var a = document.createElement("div");
    a.id="div"+id;
    a.innerHTML= "<a class='dropdown-item'>"+texto_a.data+" "+" <button type='button' class='btn btn-danger' > X </button> </a>";
    carrito.appendChild(a);
}

function eliminarElemento(id){
    let remover = document.getElementById("div"+id);
    console.log(remover);
    let carrito = document.getElementById("carrito");
    if(remover!=null){
        remover.remove();
        if(carrito.hasChildNodes){
            console.log("entra");
            var a = document.createElement("div");
            a.id="vacio";
            a.innerHTML="<a id=vacio class=dropdown-item>Vacío</a>"
            carrito.appendChild(a);
        }
    }
}