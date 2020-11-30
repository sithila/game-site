
var viewer       = document.querySelector('.viewer'),
bgviewer      = document.querySelector('.viewer-bg'),
frame_count  = 16,
nums = ['100','300','400','60','40'],
sum = 0,


offset_value = 100;

// init controller
var controller = new ScrollMagic.Controller({
globalSceneOptions: {
triggerHook: 0,
reverse: true
}
});




var scene = new ScrollMagic.Scene({
    triggerElement: "#sticky", 
    triggerHook: "onEnter",
    duration: (frame_count * offset_value) + 'px',
    reverse: true
})
.setPin("#sticky") // pins the element for the the scene's duration
.addTo(controller)
.on("leave", function (e) { 
    //setTimeout(addBoxes, 500, 9);
    controller.scrollTo(scene);
    for(var i=0; i < nums.length; i++){

        sum += parseInt(nums[i]);
        if(sum >= 4500){
            sum = 0  
        }
    
    }
    
    var bgimg = 'img/bg' + sum + '.jpg';
    document.getElementById("viewer-bg").style.backgroundImage = 'url('+bgimg+')';
    
});



// pseudo function to add new content. In real life it would be done through an ajax request.
function addBoxes () {
  // build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
    new ScrollMagic.Scene({
        triggerElement: '#sticky',
        triggerHook: "onEnter",
        offset: i * offset_value
      })
      
      
      
      .setClassToggle(".viewer, .viewer-bg, .door", 'frame' + i)
      
      //.addIndicators()
      .addTo(controller)
      
      scene.on("leave", function (event) {
        
        
        
        
        
       // console.log("Restart Fist Animation");
       
        //controller.updateScene(scene, true);
        
    });
      
    
      //$("#sticky").removeClass("active");
  }
  // "loading" done -> revert to normal state
   // make sure the scene gets the new start position
  
}

// add some boxes to start with.
addBoxes();













