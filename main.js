let score = 0;
let main_1_add = 0;
let main_2_add = 1;
let main_3_add = 1;

let timer_1 = null; // Moved to a higher scope to be accessible throughout the script
let timer_2 = null;
let timer_3 = null;

const unlock_level_2 = document.getElementById('unlock_main_2');
const main_2 = document.getElementById('main_2');

const unlock_level_3 = document.getElementById('unlock_main_3');
const main_3 = document.getElementById('main_3');

const unlock_level_1_mult = document.getElementById('level_1_mult');
let level_1_mult_price = 20;
let level_1_mult = 1;

const unlock_level_1_power = document.getElementById('level_1_power');
let level_1_power_price = 100;
let level_1_power = 1;

// Level 1 being clicked
document.getElementById('main_1').addEventListener('click', function() {
    main_1_prod = 0;
    if (timer_1 !== null) return; // Prevent multiple timers if button is clicked again

    timer_1 = setInterval(function() {
        main_1_prod++;
        //main_1_add = ((level_1_mult)/main_1_prod);
        main_1_add = Math.pow((1/main_1_prod), (1/level_1_power));
        console.log(main_2_add)
        main_1_add = main_1_add * main_2_add * level_1_mult;
        console.log(main_2_add)
        main_1_add = Math.round(main_1_add * 100) / 100;
        document.getElementById('main_1_product').textContent = 'Level 1 is making you ' + main_1_add + ' per second';
        }, 1000); // Update every second
});

// Level 2 being clicked
document.getElementById('main_2').addEventListener('click', function() {
    main_2_prod = 0;
    if (timer_2 !== null) return; // Prevent multiple timers if button is clicked again

    timer_2 = setInterval(function() {
        main_2_prod++;
        main_2_add = 1+(1/main_2_prod);
        main_2_add = main_2_add * main_3_add;
        main_2_add = Math.round(main_2_add * 100) / 100;
        document.getElementById('main_2_product').textContent = 'Level 2 is multiplying level 1 by ' + main_2_add;
        }, 1000); // Update every second
});

document.getElementById('main_3').addEventListener('click', function() {
    main_3_prod = 0;
    if (timer_3 !== null) return; // Prevent multiple timers if button is clicked again

    timer_3 = setInterval(function() {
        main_3_prod++;
        main_3_add = Math.round((1+(1/main_3_prod)) * 100) / 100;
        document.getElementById('main_3_product').textContent = 'Level 3 is multiplying level 2 by ' + main_3_add;
        }, 1000); // Update every second
});

// Unlock level 2 enabled
document.getElementById('unlock_main_2').addEventListener('click', function() {
    score -= 10;
    main_2.disabled = false;
    unlock_level_2.remove();
});

document.getElementById('unlock_main_3').addEventListener('click', function() {
    score -= 100;
    main_3.disabled = false;
    unlock_level_3.remove();
});

document.getElementById('level_1_mult').addEventListener('click', function() {
    score -= level_1_mult_price;
    level_1_mult_price = level_1_mult_price * 5;
    level_1_mult = level_1_mult * 2;
    document.getElementById('level_1_mult').textContent = 'Level 1 times 2: Cost ' + level_1_mult_price;
});

document.getElementById('level_1_power').addEventListener('click', function() {
    score -= level_1_power_price;
    level_1_power_price = level_1_power_price * 10;
    level_1_power += 1;
    document.getElementById('level_1_power').textContent = 'Slower L1 decay: Cost ' + level_1_power_price;
});

//Update the scre
function updateScore() {
    score += main_1_add; // main_1_prod is now accessible and its value is used
    score = Math.round(score * 100) / 100;
    document.getElementById('score').textContent = 'You have ' + score + ' things';
}

//Repeatedly check if upgrades need unlocked
function unlockupgrades() {
    if (score >= 10) {
        unlock_level_2.disabled = false;
    } else {
        unlock_level_2.disabled = true;
    }

    if (score >= level_1_mult_price) {
        unlock_level_1_mult.disabled = false;
    } else {
        unlock_level_1_mult.disabled = true;
    }

    if (score >= 100) {
        unlock_level_3.disabled = false;
    } else {
        unlock_level_3.disabled = true;
    }

    if (score >= level_1_power_price) {
        unlock_level_1_power.disabled = false;
    } else {
        unlock_level_1_power.disabled = true;
    }
}

setInterval(updateScore, 1000);
setInterval(unlockupgrades, 1000);