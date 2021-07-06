
var preloader = document.getElementById('loading');
function myFunction(){
    preloader.style.display='none';
}

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    scrollHorizontally: true,

    onLeave:(origin,destination,direction)=>{
        const section= destination.item;
        const tl = new TimelineMax({delay:0.5});

        if(destination.index === 0){
            const circle1 = document.querySelector(".circle1");
            tl.from(circle1,0.5,{y:"20px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)})
              .from(".circle2",0.5,{y:"20px" ,opacity:0, ease:
              Back. easeOut.config( 1.7)},"-=0.5")
              .from(".intro",1, {x:"-150px" ,opacity:0,  ease:
            Back. easeOut.config( 1.7)}) 
            .from(".h_image",1, {x:"150px" ,opacity:0,  ease:
            Back. easeOut.config( 1.7)},"-=1")        
        }   
        if(destination.index === 1){
            tl.from(".a_circle1",0.5,{y:"20px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)})
            .from(".a_circle2",0.5,{y:"20px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)},"-=0.5")
            .from(".card",0.8, {x:"150px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)})
            .from(".a_image",0.8, {x:"-150px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)},"-=0.8")
        }
        if(destination.index === 2){
            tl.from(".a_circle1",0.5,{y:"20px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)})
            .from(".a_circle2",0.5,{y:"20px" ,opacity:0 ,  ease:
            Back. easeOut.config( 1.7)},"-=0.5")
            .from(".c_image",0.8, {x:"150px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)})
            .from(".contact_form",0.8, {x:"-150px" ,opacity:0, ease:
            Back. easeOut.config( 1.7)},"-=0.8")
        }
    }
    
});

const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove',e=>{
    cursor.setAttribute('style',"top: "+(e.pageY -10)+"px; left:"+(e.pageX-10)+"px;")

})



//methods
//movemnt animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');
//Items
const title = document.querySelector('.title');
const description = document.querySelector('.description')
const circle = document.querySelector('.circle')
const image = document.querySelector('.img')
const contact_form = document.querySelector('.contact_form')

// moving animation event
container.addEventListener('mousemove' , (e) =>{
   let xAxis = (window.innerWidth/2 - e.pageX)/25;
   let yAxis = (window.innerWidth/2 - e.pageY)/25;
   card.style.transform = 'rotateY('+xAxis+'deg) rotateX('+yAxis+'deg)' 
   contact_form.style.transform = 'rotateY('+xAxis+'deg) rotateX('+yAxis+'deg)' 

});
//animate In
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
   
    //popup
    title.style.transform = "translateZ(120px) scale(1.4)"
    description.style.transform = "translateZ(90px)"
    //circle.style.transform = "rotateX(60deg) translateY(100px) scale(1)"
    image.style.transform = "translateZ(120px) scale(2)"
});


//animate out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = 'all 0.5s ease';
    contact_form.style.transition = 'all 0.5s ease';
    card.style.transform='rotateY(0deg) rotateX(0deg)';
    contact_form.style.transform='rotateY(0deg) rotateX(0deg)';
    title.style.transform = "translateZ(0px) scale(1)";
    title.style.transition = 'all 0.5s ease';
    description.style.transform = "translateZ(0px)";
    description.style.transition = 'all 0.5s ease';
    //circle.style.transform = "rotateX(0deg) translateY(0px) scale(1)";
    //circle.style.transition = 'all 0.5s ease';
    image.style.transform = "translateZ(0px) scale(1)";
    image.style.transition = 'all 0.5s ease';
});



const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelector(".navlinks li");

hamburger.addEventListener("click",()=>{
    navlinks.classList.toggle("open");
    
});



