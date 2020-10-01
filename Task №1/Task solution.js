//##############################  Task №1   #####################################

const treats = (candy, pineapple, apple, weight) => {

    let version = 0; // The variable to which the number of variations will be written.

    // Create a nested loop, in which, step by step, increase the amount of each treat,
    // until its weight is less than the total weight of the gift (weight).
    // The amount of treats is written into the new Count variable.
    // Each treat has its own cycle, with its own Count.
    for (var candyCount = 0; candyCount <= weight / candy; ++candyCount) {

        for (let pineappleCount = 0; pineappleCount <= weight / pineapple; ++pineappleCount) {

            for (let appleCount = 0; appleCount <= weight / apple; ++appleCount) {

                if ((candyCount * candy) + (pineappleCount * pineapple) + (appleCount * apple) == weight) {
                    // We go through all combinations of different quantities for each treat separately.
                    // If the combination is equal to the weight of the treat, increase version variable by one.
                    version++;
                    console.log(`+1 version: ${candyCount} candies + ${pineappleCount} pineapples + ${appleCount} apples = ${weight}`)
                }
            }
        }
    }
    console.log(`Amount version: ${version}`);
    return version;
}

treats(10, 25, 15, 40);