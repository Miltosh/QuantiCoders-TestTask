//##############################  Task №2   #####################################

const func = (copy, xerox1, xerox2) => {

    let second = 0;
    let currentCopy = 0; // A variable created for easier reading of the code. Displays the number of current copies for each second

    xerox1 = xerox1 / xerox1 / xerox1;
    xerox2 = xerox2 / xerox2 / xerox2;
    // If values xerox1 and/or xerox2 are not integers, we will plus fractional numbers


    for (let i = 0; currentCopy < copy; i++) {
        if (i == 0) {
            currentCopy += xerox1 > xerox2 ? xerox1 : xerox2; // First copy we make on faster xerox
            second++;
        }

        if (i > 0 && currentCopy < copy) {
            console.log(`Second = ${second}; CurrentCopy = ${currentCopy};`);
            // Displaying in console amount seconds and amount current copies by this second

            currentCopy += xerox1 + xerox2;
            second++; // One iteration (step) of the loop adds one second
        }

    }

    console.log(`Second = ${second}; CurrentCopy = ${Math.floor(currentCopy)};`);
    //Round off the available amount of copies to the nearest less integer

    return second;
}

func(5, 1, 2);