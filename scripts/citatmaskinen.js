function slumpCitat(statisktCitat) {
    "use strict";

    var i, citatet, citaten = [
        "0. Idag är jag det onsdag",
        "1. BAnana!",
        "2. hehehe KNIFVES!",
        "3. Hopppssan!"
    ];

    if (statisktCitat === undefined) {
        var i = Math.floor(Math.random() * citaten.length);
        citatet = citaten[i];
    } else {
        if (statisktCitat < citaten.length && statisktCitat > -1) {
            citatet = citaten[statisktCitat];
        } else {
            citatet = "Felaktigt!!";
        }
    }

    return citatet;
}
