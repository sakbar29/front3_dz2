//DZ_1

const box = document.getElementsByClassName("box");

let positionX = 0;
let positionY = 0;

const move = () => {
    if (positionX <= 440 && positionY <= 0) {
    positionX += 16;
    box[0].style.left = `${positionX}px`;
    setTimeout(move, 100);
    } else if (positionX >= 440 && positionY <= 440){
    positionY +=16;
    box[0].style.top = `${positionY}px`;
    setTimeout(move, 100);
    }else if(positionY >= 440 && positionX >=10){
    positionX-=16
    box[0].style.left = `${positionX}px`;
    setTimeout(move, 100);
    }else if(positionX <= 440 && positionY >=10){
    positionY-=16
    box[0].style.top = `${positionY}px`;
    setTimeout(move, 100);
    }
};
move();

//DZ_2


function interval (num){
    console.log(num);

    let  stopInterval = setInterval(() => {
        num++
        if(num === 61) {
            clearInterval(stopInterval)
        }

        console.log('ok:', num);
    },1000);
}

interval(1);