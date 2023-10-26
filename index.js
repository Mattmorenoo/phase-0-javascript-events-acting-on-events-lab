// Your code here
const dodger = document.getElementById('dodger');

// Function to move the dodger to the left
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left);
  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}
document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace('px', '');
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) { // Prevents dodger from escaping off the right-hand side
      dodger.style.left = `${left + 1}px`;
    }
  }