const testVar = {}

function superbowlWin(record) {
  let result = record.find(function(rec) {
    return rec.result === "W"
  })
  if (!!result) {
    return result.year
  } else {
    return undefined
  }
}
