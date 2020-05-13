// zad5

function rentCost(days) {
    let cost = 0;
    let numberOfWeeks = Math.floor(days / 7);
    let discount = numberOfWeeks * 50;

    if (days === 1) {
        cost = days * 200;
    }
    if (days === 2 || days === 3) {
        cost = days * 180;
    }
    if (days >= 4 && days <= 6) {
        cost = days * 160;
    }
    if (days === 7) {
        cost = days * 160;
    }
    if (days >= 8) {
        cost = days * 150;
    }

    cost = cost - discount;
    console.log(cost);
}
rentCost(100);
