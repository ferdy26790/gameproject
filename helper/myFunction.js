class Funct{
  static roll(){
    let random = Math.round(Math.random()*4)
    return random
  }
  static  battleMech(user,enemy){
    let userAttack = Math.random()*(user.Monster.maxattack - user.Monster.minattack)+user.Monster.minattack
    let enemyAttack = Math.random()*(enemy.Monster.maxattack - enemy.Monster.minattack)+enemy.Monster.minattack
    while(user.Monster.health <= 0 || enemy.Monster.health <= 0){
      enemy.Monster.health -= userAttack
      user.Monster.health -= enemyAttack
    }
  }
}
