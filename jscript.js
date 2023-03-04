 const width = 28;
 const grid = document.querySelector('.grid');
 const scoreDisplay = document.getElementById('score');
 const Name=document.getElementById('name-1');
 let squares=[];
 let score=0;

// 0 - pac-dots;
// 1 - wall 
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty


 const layout = [
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,
1,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,3,0,0,0,1,
1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,
0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,
4,4,4,4,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,4,4,4,4,4,
0,0,0,0,1,1,1,1,1,0,1,2,2,2,2,2,1,0,1,1,1,1,1,0,0,0,0,0,
1,1,1,0,1,1,1,1,1,0,1,2,2,2,2,2,1,0,1,1,1,1,1,1,0,1,1,1,
1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,
1,0,3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,3,0,0,0,1,
1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,
0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,
1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,
1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,
1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,
1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1

     

 ]

// create board

 function createBoard(){
     for (let i=0;i<layout.length;i++){
        const square=document.createElement('div');
        grid.appendChild(square);
        squares.push(square);

        if(layout[i] === 0) squares[i].classList.add('pac-dot');
        else if(layout[i] === 1) squares[i].classList.add('wall');
        else if(layout[i] === 2) squares[i].classList.add('ghost-lair');
        else if(layout[i] === 3) squares[i].classList.add('power-pellet');
        

     }
 }

 createBoard();

//  starting position of pacman
let pacmanCurrentIndex=508;
squares[pacmanCurrentIndex].classList.add('pacman');
 
// arrow keys
function control(e){
    squares[pacmanCurrentIndex].classList.remove('pacman')
    switch(e.keyCode){
        case 40:
            console.log('pressed down')
            if ( !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
                  !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                 pacmanCurrentIndex + width < width * width
                ) 
                pacmanCurrentIndex +=width
            break
        case 38:
            console.log('pressed up')
            if ( !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
                  !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                 pacmanCurrentIndex - width >=0 
                ) 
                pacmanCurrentIndex -=width
            break
        case 37:
            console.log('pressed left')
            if ( !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') &&
                  !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                 pacmanCurrentIndex % width !==0
                )
                 pacmanCurrentIndex -=1
                 if(pacmanCurrentIndex === 280) {
                    pacmanCurrentIndex = 307
                 }
            break
        case 39:
            console.log('pressed right')
            if (  !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
                  !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                  pacmanCurrentIndex % width < width -1
                 ) 
                 pacmanCurrentIndex +=1
                 if(pacmanCurrentIndex === 307) {
                    pacmanCurrentIndex = 280
                 }
            break
}
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten();
    powerPelletEaten();
    checkForWin();
    checkForGameOver();
}

document.addEventListener('keyup',control)

// pac dot eaten
function pacDotEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        score++
        scoreDisplay.innerHTML=score
    }
}

function powerPelletEaten(){
    if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        score +=10
        ghosts.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts ,7500)
        
    }
}

function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}

// ghost constructor

class Ghost {
    constructor (ClassName, StartIndex, speed){
        this.ClassName=ClassName
        this.StartIndex=StartIndex
        this.speed=speed
        this.currentIndex=StartIndex
        this.isScared=false
        this.timerId=NaN
    }
}

const ghosts = [
    new Ghost('naruto',348,250),
    new Ghost('onepiece',376,400),
    new Ghost('hxh',351,300),
    new Ghost('bleach',379,500)
]

// draw my ghosts onto my grid

ghosts.forEach(ghost => {
    squares[ghost.StartIndex].classList.add(ghost.ClassName)
     squares[ghost.currentIndex].classList.add('ghost')
})

// move the ghosts
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost){
    const directions=[-1 , +1 , -width , +width]
    let direction=directions[Math.floor(Math.random() * directions.length)]
    
    ghost.timerId = setInterval(function(){
        if(
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
            ){
                squares[ghost.currentIndex].classList.remove(ghost.ClassName)
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                ghost.currentIndex += direction
                squares[ghost.currentIndex].classList.add(ghost.ClassName)
                squares[ghost.currentIndex].classList.add('ghost')
            }
            else direction = directions[Math.floor(Math.random() * directions.length)]
        
         if(ghost.isScared){
            squares[ghost.currentIndex].classList.add('scared-ghost')
         }

         if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')){
            squares[ghost.currentIndex].classList.remove(ghost.ClassName , 'ghost' ,'scared-ghost')
            ghost.currentIndex = ghost.StartIndex
            score +=50
            squares[ghost.currentIndex].classList.add(ghost.ClassName, 'ghost')
         }
       checkForGameOver()
    }, ghost.speed)
}

// game over 

function checkForGameOver(){
    if(squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')){
        ghosts.forEach(ghost => clearInterval( ghost.timerId) )
        document.removeEventListener('keyup',control)
        Name.innerHTML='!😔You Lose😔!'
        Name.style.color="brown"
    }
}

// game win

function checkForWin(){
     if(score >= 274){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup',control)
        Name.innerHTML='!You 🥇🏆🥇 Win!'
        Name.style.color="red"
     }    
}