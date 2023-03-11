console.log("Welcome to Tik Tak Toe");
let music = new Audio("Music/music.mp3")
let audioTurn = new Audio("Music/ting.mp3")
let audioGameover = new Audio("Music/gameover.mp3")
let turn = "X"
let gameover = false;

const changeTurn = ()=> {
    if(turn === "X") {
        return "0"
    }
    else {
        return "X"
    }
}

const checkWin = () => {
    let collection = document.getElementsByClassName("content");
    // console.log(collection);
    let content = Array.from(collection);
    // console.log(content);
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    win.forEach(element => {
        if((content[element[0]].innerText === content[element[1]].innerText) && (content[element[2]].innerText === content[element[1]].innerText)&& content[element[0]].innerText !== "") {
            document.querySelector(".info").innerText = content[element[0]].innerText + " has Won"
            console.log( "Match has been won by "+ content[element[0]].innerText);
            document.querySelector("img").style.height = "20vh"
            gameover =  true;
            music.pause();
            audioGameover.play();
            
        }
    })
}

// document.querySelector("h1").style.color = "red";
// Game Logic
let boxes = document.getElementsByTagName("td");
// console.log(boxes);
music.play();
let count = 0;
Array.from(boxes).forEach(element => {
    let content = element.querySelector(".content");
    element.addEventListener('click',()=> {
        if(content.innerText==='') {
            count++;
            content.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(gameover !== true) {
                if(turn === "X") document.getElementsByClassName("info")[0].style.color = "red"
                else document.getElementsByClassName("info")[0].style.color = "blue"
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                if(count == 9) {
                    document.getElementsByClassName("info")[0].innerText = "Game Over";
                    music.pause();
                    audioGameover.play();
                    console.log(count)
                } 
            }
            
        }
    })
})
