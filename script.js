var stage = new Konva.Stage({
  container: 'container', 
  width: 1000,
  height: 500,
});

var layer = new Konva.Layer();

var circle = new Konva.Circle({
  x: stage.width() / 2,
  y: stage.height() / 2,
  radius: 70,
  fill: 'red',
  stroke: 'black',
  strokeWidth: 4,
});

circle.on('click', function () {
    if (circle.fill() == 'green')
        circle.fill('red')
    else
        circle.fill('green')
});

layer.add(circle);

stage.add(layer);






