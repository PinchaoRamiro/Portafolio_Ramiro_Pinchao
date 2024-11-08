import React, { useRef, useEffect } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Setup de requestAnimFrame para la animación
    window.requestAnimFrame = function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    };

    // Inicializar canvas
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);

    let mouse = { x: false, y: false };
    let last_mouse = {};
    let maxl = 300,
      minl = 50,
      n = 30,
      numt = 450,
      tent = [],
      target = { x: 0, y: 0 },
      last_target = {},
      t = 0

    class segment {
      constructor(parent, l, a, first) {
        this.first = first;
        if (first) {
          this.pos = {
            x: parent.x,
            y: parent.y
          };
        } else {
          this.pos = {
            x: parent.nextPos.x,
            y: parent.nextPos.y
          };
        }
        this.l = l;
        this.ang = a;
        this.nextPos = {
          x: this.pos.x + this.l * Math.cos(this.ang),
          y: this.pos.y + this.l * Math.sin(this.ang)
        };
      }
      update(t) {
        this.ang = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
        this.pos.x = t.x + this.l * Math.cos(this.ang - Math.PI);
        this.pos.y = t.y + this.l * Math.sin(this.ang - Math.PI);
        this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
        this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
      }
      fallback(t) {
        this.pos.x = t.x;
        this.pos.y = t.y;
        this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
        this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
      }
      show() {
        c.lineTo(this.nextPos.x, this.nextPos.y);
      }
    }
    
    class tentacle {
      constructor(x, y, l, n) {
        this.x = x;
        this.y = y;
        this.l = l;
        this.n = n;
        this.t = {};
        this.rand = Math.random();
        this.segments = [new segment(this, this.l / this.n, 0, true)];
        for (let i = 1; i < this.n; i++) {
          this.segments.push(
            new segment(this.segments[i - 1], this.l / this.n, 0, false)
          );
        }
      }
      move(last_target, target) {
        this.angle = Math.atan2(target.y - this.y, target.x - this.x);
        this.dt = dist(last_target.x, last_target.y, target.x, target.y) + 5;
        this.t = {
          x: target.x - 0.8 * this.dt * Math.cos(this.angle),
          y: target.y - 0.8 * this.dt * Math.sin(this.angle)
        };
        if (this.t.x) {
          this.segments[this.n - 1].update(this.t);
        } else {
          this.segments[this.n - 1].update(target);
        }
        for (let i = this.n - 2; i >= 0; i--) {
          this.segments[i].update(this.segments[i + 1].pos);
        }
        if (
          dist(this.x, this.y, target.x, target.y) <=
          this.l + dist(last_target.x, last_target.y, target.x, target.y)
        ) {
          this.segments[0].fallback({ x: this.x, y: this.y });
          for (let i = 1; i < this.n; i++) {
            this.segments[i].fallback(this.segments[i - 1].nextPos);
          }
        }
      }
      
      show(target) {
        if (dist(this.x, this.y, target.x, target.y) <= this.l) {
          c.globalCompositeOperation = "lighter";
          c.beginPath();
          c.lineTo(this.x, this.y);
          for (let i = 0; i < this.n; i++) {
            this.segments[i].show();
          }
          c.strokeStyle =
            "hsl(" + (this.rand * 40 + 200) +",100%," +(this.rand * 60 + 25) +"%)";
          c.lineWidth = this.rand * 2;
          c.lineCap = "round";
          c.lineJoin = "round";
          c.stroke();
          c.globalCompositeOperation = "source-over";
        }
      }
      show2(target) {
        c.beginPath();
        if (dist(this.x, this.y, target.x, target.y) <= this.l) {
          c.arc(this.x, this.y, 2 * this.rand + 1, 0, 2 * Math.PI);
          c.fillStyle = "white";
        } else {
          c.arc(this.x, this.y, this.rand * 2, 0, 2 * Math.PI);
          c.fillStyle = "darkcyan";
        }
        c.fill();
      }
    }

    for (let i = 0; i < numt; i++) {
      tent.push(
        new tentacle(
          Math.random() * w,
          Math.random() * h,
          Math.random() * (maxl - minl) + minl,
          n,
          Math.random() * 2 * Math.PI
        )
      );
    }

    function dist(p1x, p1y, p2x, p2y) {
      return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
    }

    let direction = Math.random() * Math.PI * 2; // Dirección inicial aleatoria (en radianes)
    let speed = 5; // Velocidad de movimiento
    
    // Definimos el tamaño del canvas
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    function draw() {
      // Movimiento en línea recta con dirección constante
      target.errx = Math.cos(direction) * speed;
      target.erry = Math.sin(direction) * speed;
    
      target.x += target.errx;
      target.y += target.erry;
    
      // Aseguramos que el pulpo no se salga de la pantalla (canvas)
      if (target.x <= 0 || target.x >= canvasWidth) {
        direction = Math.PI - direction; // Cambia la dirección en el eje X cuando choca con el borde
      }
      if (target.y <= 0 || target.y >= canvasHeight) {
        direction = -direction; // Cambia la dirección en el eje Y cuando choca con el borde
      }
    
      // Dibuja el círculo
      c.beginPath();
      c.arc(
        target.x,
        target.y,
        dist(last_target.x, last_target.y, target.x, target.y) + 3,
        0,
        2 * Math.PI
      );
      c.fillStyle = "hsl(" + (t * 60 + 180) + ",100%,80%)";
      c.fill();
    
      // Dibuja los tentáculos
      for (let i = 0; i < numt; i++) {
        tent[i].move(last_target, target);
        tent[i].show2(target);
      }
      for (let i = 0; i < numt; i++) {
        tent[i].show(target);
      }
    
      last_target.x = target.x;
      last_target.y = target.y;
    
      t += 0.01; // Ajusta la velocidad de los efectos de color
    }
    
    

    function loop() {
      window.requestAnimationFrame(loop); 
      c.clearRect(0, 0, w, h);
      draw();
    }
    

    canvas.addEventListener("mousemove", (e) => {
      last_mouse.x = mouse.x;
      last_mouse.y = mouse.y;
      mouse.x = e.pageX - canvas.offsetLeft;
      mouse.y = e.pageY - canvas.offsetTop;
    });

    canvas.addEventListener("mouseleave", () => {
      mouse.x = false;
      mouse.y = false;
    });

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    loop();

    return () => {
      // Limpiar eventos cuando el componente se desmonta
      canvas.removeEventListener("mousemove", () => {});
      canvas.removeEventListener("mouseleave", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-background" />;
};

export default AnimatedBackground;
