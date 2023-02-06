import kaboom from "kaboom";

// initialize context
kaboom();

loadSprite(
  "back",
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUA//8ZXC8lAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII="
);

const backimg = add([sprite("back"), pos(0, 0), area(), scale(100)]);

onKeyDown("b", () => {
  addKaboom(mousePos());
});

bx = (80 + 1180) / 2;

const p1 = add([pos(80, 120), rect(10, 100), outline(4), area()]);
const c1 = add([pos(1180, 120), rect(10, 100), outline(4), area()]);

const ball = add([pos(bx, 120), circle(16), outline(4)]);
bsy = 150;
bsx = 150;

ball.onUpdate(() => {
  ball.move(bsx, bsy);
    if(ball.pos.y < 0|| ball.pos.y>650) {
        bsy *= -1
    }
    if(ball.pos.x < 0|| ball.pos.x>1350){
        bsx *= -1
    }
 
});
