
let gameSeq = []
let userSeq = []
let btns = ["yellow", "green", "blue", "red"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function () {
  if (started == false) {
    started = true
    levelup()
  }
})




function btnflash(btn) {
  btn.classList.add("flash")
  setTimeout(function () {
    btn.classList.remove("flash")
  }, 100)
}

function lav() {
  h2.innerText = "Game Stated"
  setTimeout(function () {
    h2.innerText = `Lavel ${level}`
  }, 500)
}

function levelup() {
  userSeq = [];
  level++;
  lav()
  let renNum = Math.floor(Math.random() * 4)
  index = btns[renNum]
  let ranbtn = document.querySelector(`.${index}`)
  gameSeq.push(index)
  console.log(gameSeq);

  btnflash(ranbtn)
}


function check(idx) {
  // let idx = level-1

  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      if (level < 5) {
        setTimeout(levelup, 1000)
      } else if (level > 8) {
        setTimeout(levelup, 500)
      } else {
        setTimeout(levelup, 100)
      }
    }
  } else {
    h2.innerHTML = `Game Over! yore score <b>${level}</b> <br> Press any key to start new game`
    document.querySelector('body').style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=)"
    setTimeout(function () {
      document.querySelector('body').style.backgroundImage = "URL(https://media.istockphoto.com/id/497269685/vector/soccer-illustration.jpg?s=612x612&w=0&k=20&c=FuHt9Tr4-4ikdcJdB_jYr7TlS0hdQ4ZEXj82WpBaLNI=)"
    })
    reset();
  }
}

function userpress() {
  let btn = this
  btnflash(btn)
  userColor = btn.getAttribute("id")
  userSeq.push(userColor)
  console.log(userColor)
  check(userSeq.length - 1)
}


let userBtn = document.querySelectorAll(".btn")

for (btn of userBtn) {
  btn.addEventListener("click", userpress)
}

function reset() {
  started = false;
  level = 0
  gameSeq = []
  userSeq = []
}