// Before the game start 
// - Listen for any keyboard action 
// - Start the game 

// After the game start 
// - Jump dino when a space key is pressed 
// - Listen for collision between dino and cactus 
// - If there is a collision, make the game end 
// - If there is no collision, update the score and generate obstacle 

// Game ends (Game over)

var RootElem = document.querySelector(":root")
var GameElem = document.querySelector("#game")
var DinoElem = GameElem.querySelector(".dino")
var ScoreElem = GameElem.querySelector(".score")
var GroundElem = document.querySelector(".ground")
var CactusElem = GroundElem.querySelector(".cactus")

var GameSpeed = 10
var JumpSpeed = (GameSpeed / 10) * 2 
var MaxJump = 250
var SpeedScale = 1
var Score = 0

var GameStarted = false
var GameOver = false
var Jumping = false
var SelfPlayMode = false

//RootElem, "--game-speed", GameSpeed
function SetCustomProperty(elem, prop, value){
    elem.style.setProperty(prop, value)
}

function handleJump(e){ 
    if (e.code !== "Space") return
 
    var audio = document.querySelector(".audio-jump")
    audio.play() 
    DinoElem.classList.add("dino-jump")
    Jumping = true
    DinoElem.addEventListener("animationend", function(){
        DinoElem.classList.remove("dino-jump")
        Jumping = false
    })
}

function shouldJump(){
    var minGap = 250
    var cactusXPos = CactusElem.getBoundingClientRect().x
    
    //Validation
    if (cactusXPos <= 0 || Jumping) return false
    if (cactusXPos < minGap){
        return true
    }
    return false
}

// var GameID
function startGame(){
    GameStarted = true
    GameElem.classList.add("game-started")
    document.addEventListener("keydown", handleJump)
    window.requestAnimationFrame(updateGame)
    // GameID = setInterval( ()=> {
    //     updateGame()
    // }, 100)
}

function endGame(){
    var audio = document.querySelector(".audio-die")
    audio.play()
    GameOver = true
    GameElem.classList.add("game-over")
    document.removeEventListener("keydown", handleJump)
    // clearInterval(GameID)
}

//As long as the game is running, this function is called
function updateGame(){
    SetCustomProperty(RootElem, "--game-speed", GameSpeed)
    SetCustomProperty(RootElem, "--jump-speed", JumpSpeed)
    SetCustomProperty(RootElem, "--max-jump", MaxJump)
    SetCustomProperty(RootElem, "--speed-scale", SpeedScale)

    if (SelfPlayMode){
        if (shouldJump()){
            handleJump({code: "Space"}) // Simulate a jump
        }
    }

    //Update scor
    updateScore()
    //Update cactus
    updateCactus()
    //Check if game over
    if (checkGameOver()){
        endGame()
        return
    }
    window.requestAnimationFrame(updateGame)

}

function isCollision(dinoRect, cactusRect) {  
    // AABB - Axis-aligned bounding box  
    return (
            dinoRect.x < cactusRect.x + cactusRect.width &&
            dinoRect.x + dinoRect.width > cactusRect.x &&
            dinoRect.y < cactusRect.y + cactusRect.height &&
            dinoRect.y + dinoRect.height > cactusRect.y
     )
}

function checkGameOver(){
    if (GameOver) return true

    var dinoRect = DinoElem.getBoundingClientRect()
    var cactusRect = CactusElem.getBoundingClientRect()
    if (isCollision(dinoRect, cactusRect)){
        return true
    }

    return false
}

var scoreInterval = 10  
var currentScoreInterval = 0
function updateScore(){
    currentScoreInterval += 1
    if (currentScoreInterval % scoreInterval !== 0){
        return
    }

    Score += 1

    if (Score === 0)  return

    if (Score % 100 === 0){
        var audio = document.querySelector(".audio-point")
        audio.play()
        GameSpeed -= SpeedScale
        JumpSpeed = (GameSpeed / 10) * 2
    }

    var currentScoreElem = ScoreElem.querySelector(".current-score")
    currentScoreElem.innerText = Score.toString().padStart(5, "0")
}

function updateCactus(){
    var cactusXPos = CactusElem.getBoundingClientRect().x
    var isOffScreen = cactusXPos > window.innerWidth
    if (isOffScreen === false) return
    
    var cacti = ["cactus-small-1", "cactus-small-2", "cactus-small-3" ]
    var randomNum = Math.floor(Math.random() * cacti.length)
    var cactus = cacti[randomNum]
    CactusElem.classList.remove(
        "cactus-small-1", "cactus-small-2", "cactus-small-3"
    )
    CactusElem.classList.add(cactus)
}

function fitScreen(){
    var width = window.innerWidth
    var height = window.innerHeight / 2
    GameElem.style.width = width + "px"
    GameElem.style.height = height + "px"
    GameElem.style.zoom = 1.5

}

window.addEventListener("load", function(){
    fitScreen()

    this.window.addEventListener("resize", fitScreen)
   
    var selfPlayElem = this.document.querySelector("#selfplay")
    this.window.addEventListener("change", function(){
        SelfPlayMode = selfPlayElem.checked
    })
    this.document.addEventListener("keydown", startGame, {once: true })
})