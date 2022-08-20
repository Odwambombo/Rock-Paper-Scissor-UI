let computerCount= 0;
let playerCount = 0;
values = [];

function playRound(playSelection){
    values.push(playSelection);
    console.log(values);

    Computer = Array('ROCK','PAPER','SCISSOR')
    let computerSelection = Computer[Math.floor(Math.random()*Computer.length)];

    let val = 'ROCK ROCK';
    let val1 = 'ROCK PAPER';
    let val2 = 'ROCK SCISSOR';
    let val3 = 'PAPER PAPER';
    let val4 = 'PAPER ROCK';
    let val5 = 'PAPER SCISSOR';
    let val6 = 'SCISSOR SCISSOR';
    let val7 = 'SCISSOR ROCK';
    let val8 = 'SCISSOR PAPER';
    
    let result = `${playSelection} ${computerSelection}`;
    console.log(result);
    
    document.getElementById('RPS').innerHTML = result;
    if(result === val){
        computerCount++;
        playerCount++;
    }
    else if(result === val1){
        computerCount++;
    }
    else if(result === val2){
        playerCount++;
    }
    else if(result === val3){
        playerCount++;
        computerCount++;
    }
    else if(result === val4){
        playerCount++;

    }
    else if(result === val5){
        computerCount++;
    }
    else if(result === val6){
        playerCount++;
        computerCount++;
    }
    else if(result === val7){
        computerCount++;
    }
    else if(result === val8){
       playerCount++;
    }else{
        computerCount++;
    }
    try{
        if(values.length === 5){
            function Results(){
                if(playerCount === computerCount){
                    console.log('Its a Draw!');
                    document.getElementById('Result').innerHTML = 'Its a Draw!';
                    document.getElementById('End').innerHTML = 'Refresh the page if you want to play again!!!';
                 }else if(playerCount > computerCount){
                    console.log('Congratulations you the winner!');
                    document.getElementById('Result').innerHTML = 'Congratulations you the winner!';
                    document.getElementById('End').innerHTML = 'Refresh the page if you want to play again!!!';
                 }else{
                    console.log('Sorry you lost better Luck next time!');
                    document.getElementById('Result').innerHTML = 'Sorry you lost better Luck next time!';
                    document.getElementById('End').innerHTML = 'Refresh the page if you want to play again!!!';
                 }
        
            }
            Results();
            console.log('Refresh the page if you want to play again!!!')
        } 
        else if(values.length > 5){
            playSelection.preventDefault();
            playSelection = null;
            computerCount = null;
            computerSelection = null;
            playerCount = null;
            throw 'myException'
        }
    }catch(err){
        playSelection.preventDefault();
        console.log('Refresh the page and start over!!!')
    }
    let score =`Player: ${playerCount} Computer: ${computerCount}`;
    console.log(score);
    document.getElementById('Score').innerHTML = score;

};














