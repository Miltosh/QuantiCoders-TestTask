//##############################  Задача №1   #####################################

const treats = (candy, pineapple, apple, weight) => {

    let version = 0; // Переменная, в которую будет записывается колличество вариаций.

    // Создаём вложенный цикл, в котором пошагово, увеличиваем колличество каждого угощения, 
    // пока его вес не будет меньше равен общему весу подарка (weight).
    // Колличество угощений записываем в новую переменную Count.
    // Для каждого угощения свой цикл, со своим Count.
    for (var candyCount = 0; candyCount <= weight / candy; ++candyCount) {

        for (let pineappleCount = 0; pineappleCount <= weight / pineapple; ++pineappleCount) {

            for (let appleCount = 0; appleCount <= weight / apple; ++appleCount) {

                if ((candyCount * candy) + (pineappleCount * pineapple) + (appleCount * apple) == weight) {
                    // Перебираем все возможные комбинации с разными колличествами для каждого угощения отдельно.
                    // Если комбинация равна весу угощения, прибавляем к перменной version единицу.
                    version++;
                    console.log(`+1 Вариация: ${candyCount} конфет + ${pineappleCount} ананасов + ${appleCount} яблок = ${weight}`)
                }
            }
        }
    }
    console.log(`Колличество вариаций: ${version}`);
    return version;
}

treats(10, 25, 15, 40);