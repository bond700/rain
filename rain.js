window.onload = function(){
  
    var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
          
            
          canvas.width = 300;
          canvas.height = 490;
            
            var matrix ="I LOVE YOU";
            
            matrix = matrix.split(""); 
            
            var font_size = 10;
            var columns = canvas.width/font_size;
            
            var drops = [];
            
            for (var x = 0; x < columns; x++)
                drops[x] = 1; 
            
            function draw() {
                ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; 
                ctx.fillRect(0,0, canvas.width, canvas.height);
                
                ctx.fillStyle = "#1f81f7";  
                ctx.font = font_size + "px arial";
                
                for (var i = 0; i < drops.length; i++) {
                    var text = matrix[Math.floor(Math.random()*matrix.length)];
                    ctx.fillText(text, i*font_size, drops[i]*font_size);
                    if(drops[i]*font_size > canvas.height && Math.random() > 0.975) 
                        drops[i] = 0;
                    
                    drops[i]++;
                }
            }
            setInterval(draw, 30); 

  
};