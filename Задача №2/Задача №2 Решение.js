//##############################  Задача №2   #####################################

const func = (copy, xerox1, xerox2) => {

    let second = 0;
    let currentCopy = 0; // Переменная созданная для удобства чтения кода, показывает колличество имеемых копий на каждую секунду;

    xerox1 = xerox1 / xerox1 / xerox1;
    xerox2 = xerox2 / xerox2 / xerox2;
    // Это сделано для того, что бы если ксерокс печатает медленее 1 страницы в секунду, то к CurrentCopy прибавлялись доли

    for (let i = 0; currentCopy < copy; i++) {
        if (i == 0) {
            currentCopy += xerox1 > xerox2 ? xerox1 : xerox2; // Первую копию мы делаем на том ксероксе, который быстрее
            second++;
        }

        if (i > 0 && currentCopy < copy) {
            console.log(`Second = ${second}; CurrentCopy = ${currentCopy};`);
            // Выводим в консоль колличество секунд и колличество имеемых копий, к этой секунде

            currentCopy += xerox1 + xerox2;
            second++; // Одна итерация (шаг) цикла прибавляет одну секунду
        }

    }

    console.log(`Second = ${second}; CurrentCopy = ${Math.floor(currentCopy)};`);
    // Округляем имеемое колличество копий до ближайшего меньшего целого

    return second;
}

func(5, 1, 2);