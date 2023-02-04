import kaboom from 'kaboom';

// initialize context
kaboom()

loadSprite("back","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEUA//8ZXC8lAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=")


const  backimg = add([
    sprite("back"),
    pos(0,0),
    area(),
    scale(100)
]);