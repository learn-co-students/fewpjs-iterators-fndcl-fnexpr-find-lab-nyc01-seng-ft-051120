const testVar = {}

function testFunc() {
  return "hi"
}

function isWin(game){
  return game.result === 'W'
}

function superbowlWin(record){
   let match = record.find(isWin)
   return !!match ? match.year : undefined
}
 




