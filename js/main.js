//$.fn.fullpage.setMouseWheelScrolling(false);

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-caret-left');

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function () {
  SidebarCollapse();
});

function SidebarCollapse() {
  //$('.menu-collapsed').toggleClass('d-none');
  $('.sidebar-submenu').toggleClass('d-none');
  $('.submenu-icon').toggleClass('d-none');
  $('.main-container').toggleClass('nav-open');
  $('#histories-container').css({ 'inset': '0px auto auto', 'width': '100%' })
  $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');

  // Treating d-flex/d-none on separators with title
  var SeparatorTitle = $('.sidebar-separator-title');
  if (SeparatorTitle.hasClass('d-flex')) {
    SeparatorTitle.removeClass('d-flex');
  } else {
    SeparatorTitle.addClass('d-flex');
  }

  // Collapse/Expand icon
  $('#collapse-icon').toggleClass('fa-caret-left fa-caret-right');
  $('.close-sidenav').toggleClass('nav-open');

}

// init controller
    //var controller = new ScrollMagic.Controller();

/*
var scene = new ScrollMagic.Scene({
  triggerElement: "#trigger1",
 duration: "100%" })
  .setClassToggle("#history-item", "position-fixed")
  .addIndicators({ name: "2 - change inline style" }) // add indicators (requires plugin)
  .addTo(controller);
  */



/*
TweenLite.defaultEase = Linear.easeNone;
var controller = new ScrollMagic.Controller();

$(".history-item").each(function(i) {
  var target = $(this).find("div.row");
  var tl = new TimelineMax();

  tl.from(target, 0.25, { opacity:0 });
  tl.to(target, 0.25, { opacity:0 }, 0.75);

  new ScrollMagic.Scene({
    triggerElement: this,
    //triggerHook: 0.2,
    duration: '100%'
  })
    .setPin(this)
    .setTween(tl)
    .addIndicators()
    .addTo(controller);
});
*/


/*
var scene = new ScrollMagic.Scene({
     triggerElement: "#trigger1",
    duration: "300%" })
     .setClassToggle("#reveal1", "position-fixed")
     //.addIndicators({ name: "2 - change inline style" }) // add indicators (requires plugin)
     .addTo(controller);

     timeline.add(tween1).add(tween2).add(tween3);
           scene.setTween(timeline)
           scene.addIndicators();
           scene.addTo(controller);


   // build scene
   var animateElem = document.getElementById("text-h");
   new ScrollMagic.Scene({
     triggerElement: "#trigger1",
    duration: "100%" })
     .on("enter", function () {
       // trigger animation by changing inline style.
       animateElem.innerHTML = "Si me da Covid, ¿me pueden atender?";
     })
     .on("leave", function () {
       // reset style
       animateElem.innerHTML = "";
     })
     .setClassToggle("#reveal1", "visible")
     .addIndicators({ name: "2 - change inline style" }) // add indicators (requires plugin)
     .addTo(controller);

     new ScrollMagic.Scene({
     triggerElement: "#trigger2",
    duration: "100%" })
     .on("enter", function () {
       // trigger animation by changing inline style.
       animateElem.innerHTML = "A pesar de las cifras oficiales de ocupación que dicen que hay suficientes camas disponibles,";
     })
     .on("leave", function () {
       // reset style
       animateElem.innerHTML = "";
     })
     .setClassToggle("#reveal1", "visible")
     .addIndicators({ name: "2 - change inline style" }) // add indicators (requires plugin)
     .addTo(controller);
*/



/*
        new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          triggerHook: 1, // show, when scrolled 10% into view
          duration: "120%", // hide 10% before exiting view (80% + 10% from bottom)
          offset: 50 // move trigger to center of element
        })
          .setClassToggle("#reveal1", "visible") // add class to reveal
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);

        new ScrollMagic.Scene({
          triggerElement: "#trigger2",
          triggerHook: 1, // show, when scrolled 10% into view
          duration: "120%", // hide 10% before exiting view (80% + 10% from bottom)
          offset: "50%" // move trigger to center of element
        })
          .setClassToggle("#reveal2", "visible") // add class to reveal
          .addIndicators() // add indicators (requires plugin)
          .addTo(controller);
    */
