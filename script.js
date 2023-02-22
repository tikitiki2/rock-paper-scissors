

function getcompchoice(){
    return Math.floor(Math.random()*(3-1 +1)+1)
}


function play(comp,player){
    player=player.toLowerCase()
    
    switch(comp){
        case 1:
            comp=='rock';
            break;
        case 2:
            comp='paper';
            break;
        case 3:
            comp='scissors';
            break;
    }
    if (comp==player){
        return 'its a tie';

    }
    else if (player=='rock' & comp=='scissors'){
        return 'you win rock beats scissors'

    }
    else if (player=='paper' & comp=='rock'){
        return 'you win paper beats rock'
    }
    else if (player=='scissors' & comp=='paper'){
        return 'you win scissors beats paper'

    }
    else{
        return 'you lose '+comp+' beats '+player
    }
}  


let result=play(getcompchoice(),'RoCk')
console.log(result)
