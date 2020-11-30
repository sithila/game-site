
var viewer       = document.querySelector('.viewer'),
    bgviewer      = document.querySelector('.viewer-bg'),
    frame_count  = 16,
    offset_value = 100;

// init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 0,
    reverse: true
  }
});

// build pinned scene
new ScrollMagic.Scene({
  triggerElement: '#sticky',
  duration: (frame_count * offset_value) + 'px',
  reverse: true
  
})
.setPin('#sticky')
//.addIndicators()
.addTo(controller);


// build step frame scene
for (var i = 1, l = frame_count; i <= l; i++) {
  new ScrollMagic.Scene({
      triggerElement: '#sticky',
      offset: i * offset_value
    })
    
    
    .setClassToggle(".viewer, .viewer-bg", 'frame' + i)
    //.addIndicators()
    .addTo(controller);
    controller.update();
}






