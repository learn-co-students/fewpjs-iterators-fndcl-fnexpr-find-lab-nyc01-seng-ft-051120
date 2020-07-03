const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
]

function superbowlWin(jsObj) {
  let sbResult = jsObj.find( jsObj => jsObj.result === "W")
  if (sbResult) {
    return sbResult.year
  } else
  return undefined
}