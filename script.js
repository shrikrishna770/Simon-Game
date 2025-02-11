
let gameSeq = []
let userSeq = []
let btns = ["yellow", "green", "blue", "red"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2")
let startBtn = document.querySelector("#start")

if (window.innerWidth <= 1024) {
  h2.innerText = "Press Button To start Game"
  startBtn.style.display = "flex"
  startBtn.addEventListener("click", function () {
    if (started == false) {
      started = true
      alert("Game started")
      levelup()
    }
    startBtn.style.display = "none"
    box.style.display = "grid"
  })
}


document.addEventListener("keypress", function () {
  if (started == false) {
    started = true
    alert("Game started")
    levelup()
    startBtn.style.display = "none"
    box.style.display = "grid"
  }
})




function btnflash(btn) {
  btn.classList.add("flash")
  setTimeout(function () {
    btn.classList.remove("flash")
  }, 100)
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `Lavel ${level}`
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
    if (window.innerWidth <= 1024) {
      h2.innerHTML = `Game Over! your score <b>${level}</b> <br> Press Button To start new Game`
      box.style.display = "none"
      startBtn.style.display = "flex"

    } else {
      h2.innerHTML = `Game Over! your score <b>${level}</b> <br> Press any key to start new game`
    }
    document.querySelector('body').style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEX/AAAZ4gk3AAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=)"
    setTimeout(function () {
      document.querySelector('body').style.backgroundImage = "url(https://t3.ftcdn.net/jpg/00/88/98/18/360_F_88981880_YjJManMJ6hJmKr5CZteFJAkEzXIh8mxW.jpg  )"
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