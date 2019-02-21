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

function createAnimal(animalType) {
  function combine(deadlyDevice) {
    return{'animalType': animalType, 'deadlyDevice': deadlyDevice}
  }
  return combine
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkMaker('Laserbeam')
var sharkWithFrickinCannon = sharkMaker('Cannon')
