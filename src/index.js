module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.join('').replace(/,/g, '');
    const given = [];
  for (let bracket of str) {
    let bracketsIndex = brackets.indexOf(bracket)
    if (bracketsIndex % 2 === 0) {
      if (bracket === brackets[bracketsIndex + 1] && given[given.length - 1] ===  bracketsIndex){
        given.pop();
      } else if (bracket === brackets[bracketsIndex + 1] && given[given.length - 1] !== bracketsIndex) {
        given.push(bracketsIndex)
      }
      else{
        given.push(bracketsIndex)
      }
    }
    else {
      if (given.pop() !== bracketsIndex-1){
        return false;
      }
    }
  }
  return given.length === 0
}
