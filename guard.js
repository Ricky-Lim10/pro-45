class guard{
    constructor(x,y){

    };
    
    
    movement(){
        guard.position.y = guard.position.y +speed;
        guard.position.x = guard.position.x +speed;

        if(guard.collide(this.obstacle1 || this.obstacle2) || guard.position.x > 700 || guard.position.x < 100 || guard.position.y > 700 || guard.position.y < 100){
            var random = Math.random(1,4);

            if(random === 1){
                guard.position.x = guard.position.x + speed;
            }
            if(random === 2){
                guard.position.x = guard.position.x - speed;
            }
            if(random === 3){
                guard.position.y = guard.position.x + speed;
            }
            if(random === 4){
                guard.position.y = guard.position.x - speed;
            }

            if(this.player.collide(obstacle1 || obstacle2)){
                guard
            }
        }
        
    }


}