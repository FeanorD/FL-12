function FIghter(character) {
    const MAX_POSSIBLE_HP = character.hp;
    let winsAmount = 0,
        lossesAmount = 0;
    return {
        getName: () => character.name,
        getDamage: () => character.damage,
        getStrength: () => character.strength,
        getAgility: () => character.agility,
        getHealth: () => character.hp,
        dealDamage: damagePoints => {
            const MIN_POSSIBLE_HP = 0;
            damagePoints < character.hp ? character.hp -= damagePoints : character.hp = MIN_POSSIBLE_HP;
        },
        heal: healPoints => {
            let isPossibleToHeal = MAX_POSSIBLE_HP > character.hp + healPoints;
            isPossibleToHeal ? character.hp += healPoints : character.hp = MAX_POSSIBLE_HP;
        },
        attack: defender => {
            const DEFENCE_POINTS = defender.getStrength() + defender.getAgility();
            const MAX_SUCCESS_PROBABILITY = 100;
            let isSuccess = Math.random() * MAX_SUCCESS_PROBABILITY < MAX_SUCCESS_PROBABILITY - DEFENCE_POINTS; 
            
            if (isSuccess) {
                defender.dealDamage(character.damage);
                console.log(`${character.name} makes ${character.damage} damage to ${defender.getName()}`)
            } else {
                console.log(`${defender.getName()} attack missed`)
            }
        },
        addWin: () => winsAmount++,
        addLoss: () => lossesAmount++,
        logCombatHistory: () => `Name: ${this.name}, Wins: ${winsAmount}, Losses: ${lossesAmount}`
        
    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight`);
        return;
    } else if (secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight`);
        return;
    } else {
        while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
            firstFighter.attack(secondFighter);
            if (secondFighter.getHealth() > 0) {
                secondFighter.attack(secondFighter);
            }
        }

        let loserFighter = firstFighter.getHealth() > 0 ? secondFighter : firstFighter;
        let winnerFighter = firstFighter.getHealth() > 0 ? firstFighter : secondFighter;

        loserFighter.addLoss();
        winnerFighter.addWin();

        console.log(`${winnerFighter.getName()} has won!`);
    }
}