function setPlayerStyle(player){
    player.style.border = '1px solid maroon';
    player.style.margin = '10px';
    player.style.padding = '10px';
    player.style.borderRadius = '20px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    
}

function addPlayer(){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor incidunt placeat a unde nulla vitae, debitis dicta eius saepe excepturi soluta voluptatum consectetur sequi, commodi illum ullam quam, at accusantium?</p>
    ` ;
    setPlayerStyle(player);
    playersContainer.appendChild(player);
   
}

document.getElementById('players').addEventListener('click', function(event){
    // console.log(event.target.tagName.toLowerCase()); 
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'purple';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'cyan';
    }
})