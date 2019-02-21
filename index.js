const app = "I don't do much."
function bumbCounter() {
  var counter = 0 ;
  function addBump() {
    counter += 1
  }
  function getBumps() {
    return counter
  }
  return {addBump, getBumps}
}
