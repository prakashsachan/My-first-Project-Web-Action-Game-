//---------- STARTING GAME LOGIC ----------//

score = 0;
cross = true;

audioG = new Audio("bgmusic.mp3");
audioGo = new Audio("gameover.mp3");
audioF = new Audio("fire.mp3");
audioL = new Audio("laugh.mp3");


setTimeout(() => {
    audioG.play();
}, 2000)

setInterval(() => {
    audioF.play();
}, 8000)

setTimeout(() => {
    fire = document.querySelector(".fire");
    fire.style.visibility = 'visible'
}, 8000)

setTimeout(() => {
    pan = document.querySelector(".pan");
    pan.style.visibility = 'visible'
}, 3000)

setTimeout(() => {
    track = document.querySelector(".track");
    track.classList.add("animatetrack")
}, 2000);


//---------- MOVING CONTROL (HERO) ----------//

document.onkeydown = function (e) {
    if (e.keyCode == 38) {

        hero = document.querySelector(".hero");
        hero.classList.add("animatehero");
        setTimeout(() => {
            hero.classList.remove("animatehero")
        }, 700);
    }
    if (e.keyCode == 39) {
        hero = document.querySelector(".hero");
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
        if(heroX > 1000){
            hero.style.left = heroX;
        }
        else{
            hero.style.left = heroX + 100 + "px";

        } 
    }
    if (e.keyCode == 37) {
        hero = document.querySelector(".hero");
        heroX = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
        if(heroX < 50){
            hero.style.left = heroX;
        }
        else{
            hero.style.left = heroX - 100 + "px";

        }
    }

}


//---------- PAN HITTING LOGIC ----------//

setInterval(() => {
    hero = document.querySelector(".hero");
    pan = document.querySelector(".pan");
    gameover = document.querySelector(".gameover");
    gameoverinfo = document.querySelector(".gameoverinfo");
    heroin = document.querySelector(".heroin");
    khalnayak = document.querySelector(".khalnayak");
    happycat = document.querySelector(".happycat");
    mydance = document.querySelector(".mydance");
    sahilcry = document.querySelector(".sahilcry");
    fire = document.querySelector(".fire");
    cloud1 = document.querySelector(".cloud1");
    cloud2 = document.querySelector(".cloud2");
    cloud3 = document.querySelector(".cloud3");
    sun = document.querySelector(".sun");
    track = document.querySelector(".track");

    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue("top"));

    px = parseInt(window.getComputedStyle(pan, null).getPropertyValue("left"));
    py = parseInt(window.getComputedStyle(pan, null).getPropertyValue("top"));

    offsetx = Math.abs(hx - px);
    offsety = Math.abs(hy - py);


    //---------- GAME OVER BY HITTING PAN ----------//

    if (offsetx < 93 && offsety < 52) {
        gameover.style.visibility = 'visible';
        gameoverinfo.style.visibility = 'visible';

        pan.classList.remove('animatepan');
        cloud1.classList.remove('animatecloud1');
        cloud2.classList.remove('animatecloud2');
        cloud3.classList.remove('animatecloud3');
        fire.classList.remove('animatefire');
        sun.classList.remove('animatesun');
        track.classList.remove('animatetrack');

        sahilcry.style.visibility = 'visible';
        sahilcry.classList.add('animatesahil')
        heroin.style.visibility = 'hidden';
        hero.style.visibility = 'hidden';
        pan.style.visibility = 'hidden';
        khalnayak.style.visibility = 'hidden';
        fire.style.visibility = 'hidden';

        audioG.pause();
        audioF.pause();
        audioGo.play();

        setTimeout(() => {
            mydance.style.visibility = 'visible';
            mydance.classList.add('animatemy')
        }, 4000);

        setTimeout(() => {
            happycat.style.visibility = 'visible';
            happycat.classList.add('animatehappy')

            audioL.play();
        }, 3000);

    }


    //---------- SCORE INCREASING ON CROSSING PAN ----------//

    else if (offsetx < 90 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)


        //---------- INCREASING SPEED AND MAKING CONSTANT AT PERTICULAR TIME OF PAN ----------//

        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(pan, null).getPropertyValue("animation-duration"));
            newdur = anidur - 0.5;
            pan.style.animationDuration = newdur + 's';

            if (newdur <= 6) {
                pan.style.animationDuration = 6 + 's';
            }
        }, 1000);

    }

}, 100)


//---------- FIRE HITTING LOGIC ----------//

setInterval(() => {
    hero = document.querySelector(".hero")
    pan = document.querySelector(".pan")
    gameover = document.querySelector(".gameover")
    gameoverinfo = document.querySelector(".gameoverinfo")
    fire = document.querySelector(".fire")
    cloud1 = document.querySelector(".cloud1")
    cloud2 = document.querySelector(".cloud2")
    cloud3 = document.querySelector(".cloud3")
    sun = document.querySelector(".sun")
    heroin = document.querySelector(".heroin")
    khalnayak = document.querySelector(".khalnayak")
    happycat = document.querySelector(".happycat")
    mydance = document.querySelector(".mydance")
    sahilcry = document.querySelector(".sahilcry")
    track = document.querySelector(".track");


    hx = parseInt(window.getComputedStyle(hero, null).getPropertyValue("left"));
    hy = parseInt(window.getComputedStyle(hero, null).getPropertyValue("top"));

    fx = parseInt(window.getComputedStyle(fire, null).getPropertyValue("left"));
    fy = parseInt(window.getComputedStyle(fire, null).getPropertyValue("top"));

    offsetx = Math.abs(hx - fx);
    offsety = Math.abs(hy - fy);


    //---------- GAME OVER BY HITTING FIRE ----------//

    if (offsetx < 93 && offsety < 52) {
        gameover.style.visibility = 'visible';
        gameoverinfo.style.visibility = 'visible';
        pan.classList.remove('animatepan');
        cloud1.classList.remove('animatecloud1');
        cloud2.classList.remove('animatecloud2');
        cloud3.classList.remove('animatecloud3');
        fire.classList.remove('animatefire');
        sun.classList.remove('animatesun');
        track.classList.remove('animatetrack');
        happycat.classList.add('animatehappy')
        sahilcry.style.visibility = 'visible';
        sahilcry.classList.add('animatesahil')
        heroin.style.visibility = 'hidden';
        hero.style.visibility = 'hidden';
        pan.style.visibility = 'hidden';
        khalnayak.style.visibility = 'hidden';
        fire.style.visibility = 'hidden';

        audioG.pause();
        audioF.pause();
        audioGo.play();

        setTimeout(() => {
            mydance.style.visibility = 'visible';
            mydance.classList.add('animatemy')
        }, 4000);

        setTimeout(() => {
            happycat.style.visibility = 'visible';
            happycat.classList.add('animatehappy')

            audioL.play();
        }, 3000);


        //---------- SCORE INCREASING ON CROSSING FIRE ----------//

    }
    else if (offsetx < 75 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
    }

}, 100)


//---------- SCORE UPDATION ON HTML ----------//

function updatescore(score) {
    scorecount.innerHTML = "Your Score : " + score;
}



//---------- HISCORE FUNCTIONALITY ----------//

// let hiscore = localStorage.getItem('hiscore');
// if (hiscore === null) {
//     hiscoreval = 0;
//     localStorage.setItem('hiscore', JSON.stringify(hiscoreval))
// }
// else {
//     hiscoreval = JSON.parse(hiscore)
//     hiscorecount.innerHTML = "Hiscore : " + hiscore;
// }
// if (score > hiscoreval) {
//     hiscoreval = score;
//     localStorage.setItem('hiscore', JSON.stringify(hiscoreval))
//     hiscorecount.innerHTML = "Hiscore : " + hiscoreval;

// }
// if (score > hiscoreval) {
//     hiscoreval = score;
//     localStorage.setItem('hiscore', JSON.stringify(hiscoreval))
//     hiscorecount.innerHTML = "Hiscore : " + hiscoreval;

// }
