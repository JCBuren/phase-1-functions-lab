function distanceFromHqInBlocks(blocks) {
if (blocks > 42) {
return blocks - 42
} else if (blocks < 42) {
return 42 - blocks
}
}

function distanceFromHqInFeet(someValue) {
    return (distanceFromHqInBlocks(someValue) * 264)
}
function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) *264
    } else if (start > destination) {
        return (start - destination) *264
    }
  }
function calculatesFarePrice(start, destination) {
let x = distanceTravelledInFeet (start, destination)
if (x<=400) {
    return 0
} else if ((x>=400) && (x<=2000)) {
    return (x - 400) *.02
} else if (2500>=x && x>2000) {
    return 25
} else if (x>2500) {
    return "cannot travel that far"
}
}