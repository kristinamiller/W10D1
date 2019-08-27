function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    const context = this;
    const args = arguments;

    // The function to be called after debounce time has elapsed
    const later = function () {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not in the beginning
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period - returns true
    timeout = setTimeout(later, wait);

    // Call immediately if you're doing a leading end execution
    if (callNow) func.apply(context, args);
  };
}

let slideAndScroll = document.getElementsByClassName("slide-and-scroll")[0];

let debouncedScroll = debounce(function() {
  let winTop = window.visualViewport.pageTop;
  let winHeight = window.visualViewport.height;
  let winBottom = winTop+winHeight;
  let images = Array.from(document.getElementsByClassName("slide"));
  images.forEach((image) => {
    let imgMidCoords = image.height/2 + image.y;
    let imgBottomCoords = image.height+image.y;
    if (imgMidCoords < winBottom && imgMidCoords > winTop) {
      image.classList.add("active");
    } else if (imgBottomCoords < winHeight || image.y > winBottom){
      image.classList.remove("active");
    }
  });
}, 250);

window.addEventListener("scroll", (e) => {
  debouncedScroll();
});