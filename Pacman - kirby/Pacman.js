$(document).ready(function(){

    var score = 0;

    var kirby = {
        y: 1,
        x: 1
    }

    var enemie = {
        y:9,
        x:1
    }

    
    var world = [
        [1,1,1,1,1,1,1,1,1,1],
        [1,2,0,0,0,1,0,0,4,1],
        [1,0,1,1,0,1,0,1,0,1],
        [1,0,0,0,0,0,0,1,0,1],
        [1,0,1,1,1,0,1,1,0,1],
        [1,1,1,0,0,0,0,0,0,1],
        [1,4,1,0,1,1,1,1,0,1],
        [1,0,0,0,0,1,0,0,0,1],
        [1,0,1,1,0,0,0,1,1,1],
        [1,0,0,0,0,1,0,0,4,1],
        [1,1,1,1,1,1,1,1,1,1],
    ]

    var dict = {
        0: "star",
        1: "wall",
        2: "kirby",
        3: "empty",
        4: "color-star",
        5: "enemie"
    }
    
    function drawWorld(){
        var row = "";

        for(var y=0; y<world.length;y++){
            row += "<div class='row'>"
            for(var x=0; x<world[y].length;x++){
                row += "<div class='"+ dict[world[y][x]] +"'></div>";
            }
            row += "</div>"
        }
        
        $("#map").html(row)
    }
    drawWorld();
    
    function moveEnemie() {
        var rando1 = Math.round(Math.random())
        var rando2 = Math.round(Math.random())
        if (rando1 === 0){
            if (rando2 ===0 && world[enemie.y][enemie.x-1] != 1){
                world[enemie.y][enemie.x] = world[enemie.y][enemie.x-1];
                enemie.x--;
            }
            
            else if (rando2 === 1 && world[enemie.y][enemie.x+1] != 1){
                world[enemie.y][enemie.x] = world[enemie.y][enemie.x+1];
                enemie.x++;
            }
        }
        else if (rando1 === 1){
            if (rando2 ===0 && world[enemie.y-1][enemie.x] != 1){
                world[enemie.y][enemie.x] = world[enemie.y-1][enemie.x];
                enemie.y--;
            }
            else if (rando2 === 1 && world[enemie.y+1][enemie.x] != 1){
                world[enemie.y][enemie.x] = world[enemie.y+1][enemie.x];
                enemie.y++;
            }
        }
        if (world[enemie.y][enemie.x]==2){
            alert("Game Over")
        }
        world[enemie.y][enemie.x] = 5;
    }


    $(document).on("keydown", function(e){ 
        if (e.keyCode == 37 && world[kirby['y']][kirby['x'] - 1] !== 1) { //Left
                world[kirby['y']][kirby['x']] = 3;
                kirby['x']--;
        }
        if (e.keyCode == 39 && world[kirby['y']][kirby['x'] + 1] !== 1) { //Right
                world[kirby['y']][kirby['x']] = 3;
                kirby['x']++;
        }
        if (e.keyCode == 38 && world[kirby['y']-1][kirby['x']] !== 1) { //Up
                world[kirby['y']][kirby['x']] = 3;
                kirby['y']--;
        }
        if (e.keyCode == 40 && world[kirby['y']+1][kirby['x']] !== 1) { //Down
                world[kirby['y']][kirby['x']] = 3;
                kirby['y']++;
        }
        if (world[kirby.y][kirby.x]===4){
            alert("Power Up");
            $(".enemie").css("background-color", "blue")
            
        }
        overallScore()
        world[kirby.y][kirby.x] = 2;
        // moveEnemie()
        drawWorld()
    })

    function overallScore() {
        if (world[kirby.y][kirby.x] == 0) {
            score += 5;
        }
        else if (world[kirby.y][kirby.x] == 4) {
            score += 25;
        }
        $('#score').html('<h1>Score: '+score+' pts</h1>')
    };
    overallScore();

    function gameLoop() {

        moveEnemie();
        drawWorld();

        setTimeout(gameLoop, 600);
    }
    gameLoop();

})