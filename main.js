var canvas = new fabric.canvas('myCanvas');

power_image_width = 30;
power_image_height = 30;
hero_x = 10;
hero_y = 10;

var hero_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img) {
hero_object=Img;

hero_object.scaleToWidth(150);
hero_object.scaleToHeight(140);
hero_object.set({
    top:player_y,
    left:player_x    
});
canvas.add(player_object);

});
} 

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img) {
    power_image_object=Img;
    power_image_object.scaleToWidth(block_image_width);
    power_image_object.scaleToHeight(block_image_height);
    power_image_object.set({
        top:player_y,
        left:player_x    
    });
    canvas.add(block_image_object);
    
    });
    } 