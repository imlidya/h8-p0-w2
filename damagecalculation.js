function attack (damage) {
  var damageAttack = 2;
  var damageDealt = damage - damageAttack;
  return damageDealt;
}
   
function damageCalculation (numberOfAttacks, damagePerAttack) {
  
  var attacksSisa = numberOfAttacks;
  
  if (numberOfAttacks === 0) {
    return 1;
  } else if (attacksSisa < numberOfAttacks) {
    attacksRemaining -= 1;
  }
  return attacksSisa * attack(damagePerAttack);
}
// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90
