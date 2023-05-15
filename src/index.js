const cursor = document.querySelector('.cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);


function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}


const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
    const rotate = 'rotate(' + angle +'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);



const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function() {
        const className = this.getAttribute('cursor-class');
        cursor.classList.add(className);
    });

    curosrModifier.addEventListener('mouseleave', function() {
        const className = this.getAttribute('cursor-class');
        cursor.classList.remove(className);
    });
});

let targets = gsap.utils.toArray(".splited-text");
gsap.set(targets, {autoAlpha:1 });
let dur = 0.5;
let hold = 4;

targets.forEach((obj, i) => {
    console.log("SLIDE INTRO NUMBER" + i);
    let tl = gsap.timeline({
        delay: dur * i + hold * i,
        repeat: -1,
        repeatDelay: (targets.length - 1) * (dur + hold) - dur,
        defaults: {
            ease: "none",
            duration: dur
        }
    });
    tl.from(obj, { yPercent: -60, opacity: 0 });
    tl.to(obj, { yPercent: 60, opacity: 0 , onComplete:function(){
            console.log(this); //appears to be TweenLite object
        }}, "+=" + hold);
});


/*
let targets = gsap.utils.toArray(".splited-text");
gsap.set(targets, {autoAlpha:1 });
let dur = 0.5;
let hold = 4;
new SplitType('.splited-text');

targets.forEach((obj, i) => {
    let tl = gsap.timeline({
        delay: dur * i + hold * i,
        repeat: -1,
        repeatDelay: (targets.length - 1) * (dur + hold) - dur,
        defaults: {
            ease: "none",
            duration: dur
        }
    });

    //"#splitedIntro"+i+" .char"
    tl.from("#splitedIntro"+i+" .char", { y: "115px", opacity: 0 })
    .to("#splitedIntro"+i+" .char", {
        y: "0",
        stagger: 1/obj.getElementsByClassName("char").length,
        opacity: 1,
        onComplete:function(){
            console.log(this); //appears to be TweenLite object
            console.log(0.05*obj.getElementsByClassName("char").length); //appears to be TweenLite object
        }
        }, "+=" + hold + 1/obj.getElementsByClassName("char").length)
    .to("#splitedIntro"+i+" .char", {
        y: "115px",
        stagger: 0.05,
        opacity: 0,
        }, "+=" + hold);
    //tl.to("#splitedIntro"+(i-1)+" .char", { y: "115px", opacity: 0 });
});

*/

