# Horizon: Generative Art Workshop

Thanks for coming to the workshop! To start, go to this editor link: [https://editor.p5js.org/](https://editor.p5js.org/). If you want to share your work and code, feel free to make an account, but that's not required at all! Some really cool existing exampels of generative art are [L Trees](http://www.galaxykate.com/apps/Prototypes/LTrees/) and [Chaos](http://math.hws.edu/eck/js/edge-of-chaos/CA.html)! 

![example image](https://github.com/ClaireBookworm/generative-art-workshop/blob/main/example-image.png)

Here are a few code snippets you can copy and paste or refer to when you play around with it yourself:

```js
function setup() {
  createCanvas(400, 400);
  noLoop();
}
```

```js
// sausage links code — for loops in for loops
function draw() {
  background('PEACHPUFF');
  var step = 30;
  for (var x=0; x<400; x=x+step) {
    for(var y=0;y<400;y=y+step) {
      strokeWeight (1+x/step); // changes the thickness of the lines
      line(x,y,x+(step/2),y+(step/2)); // draws lines diagonal downards towards the right
      strokeWeight(1+x/step/10);
      line(x+(step/2),y+(step/2),x+step,y+step);
    }
  }
}
```

If you really want to go above and beyond, here's a [link](https://editor.p5js.org/ClaireBookworm/sketches/PLh8NtWgb) to the editor code for a constantly changing triangle mesh! Code for this should also be in the GitHub along with some other sample code for various exampels I've given.


Cheat Sheet from online:
![image](https://preview.redd.it/xnm71r8aehf21.png?width=1650&format=png&auto=webp&v=enabled&s=18bc30bee2443818ea7550447ce223603ae6c1d3)
