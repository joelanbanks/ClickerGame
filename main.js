let score = 0;
let main_1_add = 0;
let main_2_add = 1;
let main_3_add = 1;
let main_4_add = 1;

let timer_1 = null; // Moved to a higher scope to be accessible throughout the script
let timer_2 = null;
let timer_3 = null;
let timer_4 = null;

const unlock_level_2 = document.getElementById('unlock_main_2');
const main_2 = document.getElementById('main_2');

const unlock_level_3 = document.getElementById('unlock_main_3');
const main_3 = document.getElementById('main_3');

const unlock_level_4 = document.getElementById('unlock_main_4');
const main_4 = document.getElementById('main_4');

const unlock_level_1_mult = document.getElementById('level_1_mult');
let level_1_mult_price = 20;
let level_1_mult = 1;

const unlock_level_2_mult = document.getElementById('level_2_mult');
let level_2_mult_price = 500;
let level_2_mult = 1;

const unlock_level_3_mult = document.getElementById('level_3_mult');
let level_3_mult_price = 1000;
let level_3_mult = 1;

const unlock_level_1_power = document.getElementById('level_1_power');
let level_1_power_price = 100;
let level_1_power = 1;

const unlock_level_2_power = document.getElementById('level_2_power');
let level_2_power_price = 1000;
let level_2_power = 1;

const unlock_level_3_power = document.getElementById('level_3_power');
let level_3_power_price = 1000;
let level_3_power = 1;

// Level 1 being clicked
document.getElementById('main_1').addEventListener('click', function() {
    main_1_prod = 0;
    if (timer_1 !== null) return; // Prevent multiple timers if button is clicked again

    timer_1 = setInterval(function() {
        main_1_prod++;
        //main_1_add = ((level_1_mult)/main_1_prod);
        main_1_add = Math.pow((1/main_1_prod), (1/level_1_power));
        main_1_add = main_1_add * main_2_add * level_1_mult;
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
        main_2_add = 1+(Math.pow((1/main_2_prod), (1/level_2_power)));
        main_2_add = main_2_add * main_3_add * level_2_mult;
        main_2_add = Math.round(main_2_add * 100) / 100;
        document.getElementById('main_2_product').textContent = 'Level 2 is multiplying level 1 by ' + main_2_add;
        }, 1000); // Update every second
});

document.getElementById('main_3').addEventListener('click', function() {
    main_3_prod = 0;
    if (timer_3 !== null) return; // Prevent multiple timers if button is clicked again

    timer_3 = setInterval(function() {
        main_3_prod++;
        main_3_add = 1+(Math.pow((1/main_3_prod), (1/level_3_power)));
        main_3_add = main_3_add * main_4_add * level_3_mult;
        main_3_add = Math.round(main_3_add * 100) / 100;
        document.getElementById('main_3_product').textContent = 'Level 3 is multiplying level 2 by ' + main_3_add;
        }, 1000); // Update every second
});

document.getElementById('main_4').addEventListener('click', function() {
    main_4_prod = 0;
    if (timer_4 !== null) return; // Prevent multiple timers if button is clicked again

    timer_4 = setInterval(function() {
        main_4_prod++;
        main_4_add = Math.round((1+(1/main_4_prod)) * 100) / 100;
        document.getElementById('main_4_product').textContent = 'Level 4 is multiplying level 3 by ' + main_4_add;
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

document.getElementById('unlock_main_4').addEventListener('click', function() {
    score -= 1000;
    main_4.disabled = false;
    unlock_level_4.remove();
});

document.getElementById('level_1_mult').addEventListener('click', function() {
    score -= level_1_mult_price;
    level_1_mult_price = level_1_mult_price * 5;
    level_1_mult = level_1_mult * 2;
    document.getElementById('level_1_mult').textContent = 'Level 1 times 2: Cost ' + level_1_mult_price;
});

document.getElementById('level_2_mult').addEventListener('click', function() {
    score -= level_2_mult_price;
    level_2_mult_price = level_2_mult_price * 5;
    level_2_mult = level_2_mult * 2;
    document.getElementById('level_2_mult').textContent = 'Level 2 times 2: Cost ' + level_2_mult_price;
});

document.getElementById('level_3_mult').addEventListener('click', function() {
    score -= level_3_mult_price;
    level_3_mult_price = level_3_mult_price * 5;
    level_3_mult = level_3_mult * 2;
    document.getElementById('level_3_mult').textContent = 'Level 3 times 2: Cost ' + level_3_mult_price;
});

document.getElementById('level_1_power').addEventListener('click', function() {
    score -= level_1_power_price;
    level_1_power_price = level_1_power_price * 10;
    level_1_power += 1;
    document.getElementById('level_1_power').textContent = 'Slower L1 decay: Cost ' + level_1_power_price;
});

document.getElementById('level_2_power').addEventListener('click', function() {
    score -= level_2_power_price;
    level_2_power_price = level_2_power_price * 10;
    level_2_power += 1;
    document.getElementById('level_2_power').textContent = 'Slower L2 decay: Cost ' + level_2_power_price;
});

document.getElementById('level_3_power').addEventListener('click', function() {
    score -= level_3_power_price;
    level_3_power_price = level_3_power_price * 10;
    level_3_power += 1;
    document.getElementById('level_3_power').textContent = 'Slower L3 decay: Cost ' + level_3_power_price;
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

    if (score >= level_2_mult_price) {
        unlock_level_2_mult.disabled = false;
    } else {
        unlock_level_2_mult.disabled = true;
    }

    if (score >= level_3_mult_price) {
        unlock_level_3_mult.disabled = false;
    } else {
        unlock_level_3_mult.disabled = true;
    }

    if (score >= 100) {
        unlock_level_3.disabled = false;
    } else {
        unlock_level_3.disabled = true;
    }

    if (score >= 1000) {
        unlock_level_4.disabled = false;
    } else {
        unlock_level_4.disabled = true;
    }

    if (score >= level_1_power_price) {
        unlock_level_1_power.disabled = false;
    } else {
        unlock_level_1_power.disabled = true;
    }

    if (score >= level_2_power_price) {
        unlock_level_2_power.disabled = false;
    } else {
        unlock_level_2_power.disabled = true;
    }

    if (score >= level_3_power_price) {
        unlock_level_3_power.disabled = false;
    } else {
        unlock_level_3_power.disabled = true;
    }
}

setInterval(updateScore, 1000);
setInterval(unlockupgrades, 100);