var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu");
//Abrir menu
menuToggle.addEventListener("click", function (event) {
    menu.classList.toggle("active");
    event.stopPropagation(); 
});

//Cerrar menu
document.addEventListener("click", function (event) {
    if (menu.classList.contains("active") && !menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove("active");
    }
});


const canvas1 = document.getElementById('canvaTorrente');
const ctx1 = canvas1.getContext('2d');
ctx1.scale(1.5, 1.5);
function dibujarCoche() {
    // TUBO DE ESCAPE
    ctx1.beginPath();
    ctx1.fillStyle = 'black'; 
    ctx1.fillRect(93, 160, 16, 6); 
    ctx1.closePath();
    // CUERPO
    ctx1.fillStyle = 'rgb(236, 210, 30)';
    ctx1.beginPath();

    ctx1.moveTo(100, 120);
    
    ctx1.arcTo(300, 120, 300, 170, 15);  // Esquina superior derecha
    ctx1.arcTo(300, 170, 100, 170, 20);  // Esquina inferior derecha
    ctx1.arcTo(100, 170, 100, 120, 15);  // Esquina inferior izquierda
    ctx1.arcTo(100, 120, 300, 120, 10);  // Esquina superior izquierda
    
    ctx1.closePath();
    ctx1.fill();

    // TECHO
    ctx1.fillStyle = 'rgb(70,70,70)';
    ctx1.beginPath();
    ctx1.moveTo(150, 90);  // Esquina superior izquierda del trapecio
    ctx1.lineTo(230, 90);  // Esquina superior derecha del trapecio
    ctx1.lineTo(260, 125); // Esquina inferior derecha del trapecio
    ctx1.lineTo(130, 125); // Esquina inferior izquierda del trapecio
    ctx1.closePath();
    ctx1.fill();
    //Ventana izquierda
    ctx1.fillStyle = 'rgb(100,100,150)';
    ctx1.beginPath();
    ctx1.moveTo(155, 95);  // Esquina superior izquierda del trapecio
    ctx1.lineTo(190, 95);  // Esquina superior derecha del trapecio
    ctx1.lineTo(190, 120); // Esquina inferior derecha del trapecio
    ctx1.lineTo(140, 120); // Esquina inferior izquierda del trapecio
    
    ctx1.closePath();
    ctx1.fill();

    //Ventana derecha
    ctx1.fillStyle = 'rgb(100,100,150)';
    ctx1.beginPath();
    ctx1.moveTo(195, 95);  // Esquina superior izquierda del trapecio
    ctx1.lineTo(230, 95);  // Esquina superior derecha del trapecio
    ctx1.lineTo(249, 120); // Esquina inferior derecha del trapecio
    ctx1.lineTo(195, 120); // Esquina inferior izquierda del trapecio

    ctx1.closePath();
    ctx1.fill();
    //letras
    ctx1.font = '8px Arial';  
    ctx1.fillStyle = 'white';  
    ctx1.textAlign = 'center'; 
    ctx1.textBaseline = 'middle'; 
    ctx1.fillText('Penelope', 215, 100);

    // Rueda izquierda
    ctx1.fillStyle = 'rgb(50,50,50)';
    ctx1.beginPath();
    ctx1.arc(140, 170, 20, 0, Math.PI * 2, true);
    ctx1.fill();

    // Llanta izquierda
    ctx1.fillStyle = 'rgb(198, 198, 198)'; // Cambia el color a amarillo
    ctx1.beginPath();
    ctx1.arc(140, 170, 10, 0, Math.PI * 2, true); // Radio más pequeño
    ctx1.fill();

    // Rueda derecha
    ctx1.fillStyle = 'rgb(50,50,50)';
    ctx1.beginPath();
    ctx1.arc(260, 170, 20, 0, Math.PI * 2, true);
    ctx1.fill();

    // Llanta derecha
    ctx1.fillStyle = 'rgb(198, 198, 198)'; // Cambia el color a amarillo
    ctx1.beginPath();
    ctx1.arc(260, 170, 10, 0, Math.PI * 2, true); // Radio más pequeño
    ctx1.fill();

    //Aleron
    ctx1.fillStyle = 'rgb(0,0,0)';
    ctx1.beginPath();
    ctx1.moveTo(108, 113);  // Esquina superior izquierda del trapecio
    ctx1.lineTo(122, 113);  // Esquina superior derecha del trapecio
    ctx1.lineTo(118, 125); // Esquina inferior derecha del trapecio
    ctx1.lineTo(112, 125); // Esquina inferior izquierda del trapecio
    
    ctx1.closePath();
    ctx1.fill();

    //faro 1
    ctx1.fillStyle = 'rgba(224, 224, 224)'; 
    ctx1.beginPath();
    ctx1.arc(289, 133, 8, 0, Math.PI * 2, true); 
    ctx1.closePath();
    ctx1.fill();

    //faro 2
    ctx1.fillStyle = 'rgba(224, 224, 224)'; 
    ctx1.beginPath();
    ctx1.arc(293, 150, 5, 0, Math.PI * 2, true); 
    ctx1.closePath();
    ctx1.fill();

    //Linea horizontal
    ctx1.strokeStyle = 'rgb(66, 66, 66)'; 
    ctx1.lineWidth = 2; 
    ctx1.beginPath();
    ctx1.moveTo(120, 135); 
    ctx1.lineTo(270, 135); 
    ctx1.stroke();

    //Linea vertical centro
    ctx1.strokeStyle = 'gray'; 
    ctx1.lineWidth = 1; 
    ctx1.beginPath();
    ctx1.moveTo(193, 125); 
    ctx1.lineTo(193, 170); 
    ctx1.stroke(); 
    //Linea vertical izquierda
    ctx1.strokeStyle = 'gray'; 
    ctx1.lineWidth = 1;
    ctx1.beginPath();
    ctx1.moveTo(140, 125); 
    ctx1.lineTo(140, 150); 
    ctx1.stroke(); 
    //Linea vertical derecha
    ctx1.strokeStyle = 'gray'; 
    ctx1.lineWidth = 1; 
    ctx1.beginPath();
    ctx1.moveTo(250, 125); 
    ctx1.lineTo(250, 154); 
    ctx1.stroke(); // Dibujar la línea

    //Manilla izquierda
    ctx1.strokeStyle = 'rgb(1, 1, 1)'; 
    ctx1.lineWidth = 1; 
    ctx1.beginPath();
    ctx1.moveTo(200, 130); 
    ctx1.lineTo(210, 130); 
    ctx1.stroke(); 
    //Manilla derecha
    ctx1.strokeStyle = 'rgb(1, 1, 1)'; 
    ctx1.lineWidth = 1; 
    ctx1.beginPath();
    ctx1.moveTo(150, 130); 
    ctx1.lineTo(160, 130); 
    ctx1.stroke(); // Dibujar la línea
    

}
function ponerLuz(){
//LUZ
ctx1.fillStyle = 'rgba(255, 255, 0, 0.8)';
ctx1.beginPath();
ctx1.moveTo(300, 130); // Esquina superior izquierda
ctx1.lineTo(380, 100); // Esquina superior derecha
ctx1.lineTo(380, 190); // Esquina inferior derecha
ctx1.lineTo(300, 150); // Esquina inferior izquierda
ctx1.closePath();
ctx1.fill();
}
function quitarLuz(){
    //SIN LUZ
    ctx1.fillStyle = '#E0F7FA';
    ctx1.beginPath();
    ctx1.moveTo(300, 90); // Esquina superior izquierda
    ctx1.lineTo(380, 90); // Esquina superior derecha
    ctx1.lineTo(380, 190); // Esquina inferior derecha
    ctx1.lineTo(300, 190); // Esquina inferior izquierda
    ctx1.closePath();
    ctx1.fill();
    }

canvas1.addEventListener('mouseover', () => {
    ponerLuz(); 
});
canvas1.addEventListener('mouseout', quitarLuz);
//HUMO----------------
function humo(){
    ctx1.fillStyle = '#444444';
    ctx1.beginPath();
    ctx1.arc(80, 155, 15, 0, Math.PI * 2, true);
    ctx1.arc(70, 150, 15, 0, Math.PI * 2, true);
    ctx1.arc(65, 150, 15, 0, Math.PI * 2, true);
    ctx1.arc(60, 145, 15, 0, Math.PI * 2, true);
    ctx1.arc(50, 140, 15, 0, Math.PI * 2, true);
    ctx1.arc(45, 145, 15, 0, Math.PI * 2, true);
    ctx1.arc(45, 140, 18, 0, Math.PI * 2, true);
    ctx1.arc(40, 134, 15, 0, Math.PI * 2, true);
    ctx1.fill();
    }
    function quitarhumo(){
        ctx1.fillStyle = '#E0F7FA';
        ctx1.beginPath();
        ctx1.moveTo(10, 80); // Esquina superior izquierda
        ctx1.lineTo(97, 80); // Esquina superior derecha
        ctx1.lineTo(97, 190); // Esquina inferior derecha
        ctx1.lineTo(10, 190); // Esquina inferior izquierda
        ctx1.closePath();
        ctx1.fill();
        }
    
    canvas1.addEventListener('mouseover', () => {
        humo(); 
    });
    canvas1.addEventListener('mouseout', quitarhumo);

function dibujarCarretera() {
    // Carretera
    ctx1.fillStyle = 'rgb(60, 60, 60)';
    ctx1.fillRect(0, 190, canvas1.width, 80); // Rectángulo para la carretera

    // Líneas discontinuas en el centro de la carretera
    ctx1.strokeStyle = 'white';
    ctx1.lineWidth = 5;
    ctx1.setLineDash([25, 15]); // Patrón de línea discontinua
    ctx1.beginPath();
    ctx1.moveTo(0, 220); // Línea central
    ctx1.lineTo(canvas1.width, 220);
    ctx1.stroke();
    ctx1.setLineDash([]); 
}
dibujarCarretera();
dibujarCoche();

//CANVAS 2----------------------------------


const canvas2 = document.getElementById('canvaC15');
const ctx2 = canvas2.getContext('2d');
ctx2.scale(1.5, 1.5); 
function dibujarCoche2() {
    //TUBO
    ctx2.beginPath();
    
    ctx2.fillStyle = 'black'; 
    ctx2.fillRect(285, 160, 16, 6);
    ctx2.closePath();
    

    ctx2.fillStyle = 'rgb(132,132,132)';
    //CUERPO
    ctx2.beginPath();
    ctx2.moveTo(100, 120);  
    ctx2.arcTo(295, 120, 300, 170, 0);  
    ctx2.arcTo(295, 170, 100, 170, 10);  
    ctx2.arcTo(140, 170, 100, 120, 0);  
    ctx2.arcTo(140, 120, 300, 120, 0); 
    ctx2.closePath(); 
    ctx2.fill();      
    
    // TECHO
    ctx2.fillStyle = 'rgb(132,132,132)';
ctx2.beginPath();


ctx2.moveTo(205, 65);  
ctx2.arcTo(295, 65, 295, 120, 10); 
ctx2.arcTo(295, 120, 205, 120, 0); 
ctx2.arcTo(205, 120, 205, 65, 0); 
ctx2.arcTo(205, 65, 220, 65, 8); 
ctx2.closePath(); 
ctx2.fill(); 

    // CABINA
ctx2.fillStyle = 'rgb(132,132,132)';
ctx2.beginPath();

ctx2.moveTo(180, 75);  

ctx2.arcTo(206, 75, 205, 120, 0);  

ctx2.arcTo(206, 120, 140, 120, 0); 

ctx2.arcTo(140, 120, 140, 75, 0); 

ctx2.arcTo(180, 75, 185, 75, 20); 

ctx2.closePath(); 
ctx2.fill(); 
    
//MORRO
ctx2.fillStyle = 'rgb(132,132,132)';
ctx2.beginPath();
ctx2.arcTo(140, 120, 140, 170, 0); 
ctx2.arcTo(140, 170, 90, 170, 0);  
ctx2.arcTo(90, 170, 90, 130, 10);   
ctx2.arcTo(90, 130, 120, 120, 10);   
ctx2.closePath();
ctx2.fill();

//Ventana izquierda
ctx2.fillStyle = 'rgb(166,166,192)';
ctx2.beginPath();
ctx2.moveTo(180, 85);  
ctx2.lineTo(200, 85);  
ctx2.lineTo(200, 115); 
ctx2.lineTo(155, 115); 

ctx2.closePath();
ctx2.fill();
ctx2.strokeStyle = 'rgb(0, 0, 0)'; 
ctx2.lineWidth = 1; 

ctx2.stroke(); 
//Ventana derecha
ctx2.fillStyle = 'rgb(166,166,192)';
ctx2.beginPath();
ctx2.moveTo(212, 85);  
ctx2.lineTo(243, 85);  
ctx2.lineTo(245, 115); 
ctx2.lineTo(210, 115); 

ctx2.closePath();
ctx2.fill();
ctx2.strokeStyle = 'rgb(0, 0, 0)'; 
ctx2.lineWidth = 1; 
ctx2.stroke(); 
// Rueda izquierda
ctx2.fillStyle = 'rgb(50,50,50)';
ctx2.beginPath();
ctx2.arc(130, 165, 20, 0, Math.PI * 2, true);
ctx2.fill();

// Llanta izquierda
ctx2.fillStyle = 'rgb(198, 198, 198)'; 
ctx2.beginPath();
ctx2.arc(130, 165, 10, 0, Math.PI * 2, true); 
ctx2.fill();

// Rueda derecha
ctx2.fillStyle = 'rgb(50,50,50)';
ctx2.beginPath();
ctx2.arc(260, 165, 20, 0, Math.PI * 2, true);
ctx2.fill();

// Llanta derecha
ctx2.fillStyle = 'rgb(198, 198, 198)'; 
ctx2.beginPath();
ctx2.arc(260, 165, 10, 0, Math.PI * 2, true); 
ctx2.fill();

//Linea horizontal grande
ctx2.strokeStyle = 'rgb(66, 66, 66)'; 
ctx2.lineWidth = 6; 
ctx2.beginPath();
ctx2.moveTo(138, 140); 
ctx2.lineTo(290, 140); 
ctx2.stroke(); 

//Linea vertical derecha
ctx2.strokeStyle = 'rgb(68,68,68)'; 
ctx2.lineWidth = 0.8; 
ctx2.beginPath();
ctx2.moveTo(200, 116); 
ctx2.lineTo(200, 170); 
ctx2.stroke(); 

//Linea vertical izquierda
ctx2.strokeStyle = 'rgb(68,68,68)'; 
ctx2.lineWidth = 0.8; 
ctx2.beginPath();
ctx2.moveTo(154, 116); 
ctx2.lineTo(154, 170); 
ctx2.stroke(); 

//Manilla izquierda
ctx2.strokeStyle = 'black'; 
ctx2.lineWidth = 1; 
ctx2.beginPath();
ctx2.moveTo(185, 122); 
ctx2.lineTo(195, 122); 
ctx2.stroke(); 

//ANTENA
ctx2.strokeStyle = 'black'; 
ctx2.lineWidth = 1; 
ctx2.beginPath();
ctx2.moveTo(178, 80); 
ctx2.lineTo(195, 63); 
ctx2.stroke(); 

//FOCOS RECTANGULARES
ctx2.fillStyle = 'rgb(230, 230, 230)'; 
ctx2.fillRect(92, 135, 12, 7); // Foco grande
ctx2.fillStyle = 'rgb(255, 160, 16)';
ctx2.fillRect(92, 150, 8, 5); // Foco pequeño




}
function ponerLuz2(){
    //LUZ
    ctx2.fillStyle = 'rgba(255, 255, 0, 0.8)';
    ctx2.beginPath();
    ctx2.moveTo(20, 100); // Esquina superior izquierda
    ctx2.lineTo(90, 130); // Esquina superior derecha
    ctx2.lineTo(90, 160); // Esquina inferior derecha
    ctx2.lineTo(20, 180); // Esquina inferior izquierda
    ctx2.closePath();
    ctx2.fill();
    }
    function quitarLuz2(){
        //SIN LUZ
        ctx2.fillStyle = '#E0F7FA';
        ctx2.beginPath();
        ctx2.moveTo(20, 90); // Esquina superior izquierda
        ctx2.lineTo(90, 130); // Esquina superior derecha
        ctx2.lineTo(90, 160); // Esquina inferior derecha
        ctx2.lineTo(20, 185); // Esquina inferior izquierda
        ctx2.closePath();
        ctx2.fill();
        }
    
    canvas2.addEventListener('mouseover', () => {
        ponerLuz2(); 
    });
    canvas2.addEventListener('mouseout', quitarLuz2);
    //HUMO----------------
    function humo2(){
        ctx2.fillStyle = '#444444';
        ctx2.beginPath();
        ctx2.arc(320, 155, 15, 0, Math.PI * 2, true);
        ctx2.arc(330, 150, 15, 0, Math.PI * 2, true);
        ctx2.arc(340, 145, 15, 0, Math.PI * 2, true);
        ctx2.arc(350, 140, 15, 0, Math.PI * 2, true);
        ctx2.arc(360, 135, 15, 0, Math.PI * 2, true);
        ctx2.arc(370, 130, 15, 0, Math.PI * 2, true);
        ctx2.arc(355, 130, 15, 0, Math.PI * 2, true);
        ctx2.arc(345, 130, 15, 0, Math.PI * 2, true);
        ctx2.arc(350, 155, 15, 0, Math.PI * 2, true);
        ctx2.arc(360, 140, 15, 0, Math.PI * 2, true);
        ctx2.fill();
        }
        function quitarhumo2(){
            ctx2.fillStyle = '#E0F7FA';
            ctx2.beginPath();
            ctx2.moveTo(304, 80); // Esquina superior izquierda
            ctx2.lineTo(390, 80); // Esquina superior derecha
            ctx2.lineTo(390, 185); // Esquina inferior derecha
            ctx2.lineTo(304, 185); // Esquina inferior izquierda
            ctx2.closePath();
            ctx2.fill();
            }
        
        canvas2.addEventListener('mouseover', () => {
            humo2(); 
        });
        canvas2.addEventListener('mouseout', quitarhumo2);
    
// Llamada a la función para dibujar el coche
function dibujarCarretera2() {
    // Carretera
    ctx2.fillStyle = 'rgb(60, 60, 60)';
    ctx2.fillRect(0, 185, canvas1.width, 80); 

    // Líneas discontinuas en el centro de la carretera
    ctx2.strokeStyle = '#FFB93D';
    ctx2.lineWidth = 5;
    ctx2.setLineDash([25, 15]); 
    ctx2.beginPath();
    ctx2.moveTo(0, 220); // Línea central 
    ctx2.lineTo(canvas1.width, 220);
    ctx2.stroke();
    ctx2.setLineDash([]); 
}
dibujarCarretera2();
dibujarCoche2();

function activar_funciones(){
    ponerLuz();
    ponerLuz2();
    humo();
    humo2();
}
function desactivar_funciones(){
    quitarLuz();
    quitarLuz2();
    quitarhumo();
    quitarhumo2();
}


