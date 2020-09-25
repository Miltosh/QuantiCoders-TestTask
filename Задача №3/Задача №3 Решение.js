//##############################  Задача №3   #####################################

const employees = [
    { "id": 1, "name": "Mildred Carson", "drinks": ["Macchiato"] },
    { "id": 2, "name": "Clifford Brown", "drinks": ["Latte"] },
    { "id": 3, "name": "Kellie Fletcher", "drinks": ["Flat White", "Espresso"] },
    { "id": 4, "name": "Don Parsons", "drinks": ["Espresso"] },
    { "id": 5, "name": "Renee Reynolds", "drinks": ["Cappuccino", "Macchiato"] },
    { "id": 6, "name": "Rudolph Bishop", "drinks": ["Latte", "Macchiato", "Flat White"] },
    { "id": 7, "name": "Geraldine Carpenter", "drinks": ["Espresso"] },
    { "id": 8, "name": "Hilda Jimenez", "drinks": ["Latte", "Macchiato", "Espresso"] },
    { "id": 9, "name": "Pauline Roberson", "drinks": ["Espresso"] },
    { "id": 10, "name": "Vanessa Barrett", "drinks": ["Flat White", "Cappuccino", "Latte"] }
]
const recipes = {
    "Cappuccino": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.09
    },
    "Espresso": {
        "coffee": 0.01,
        "water": 0.035
    },
    "Latte": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.135
    },
    "Flat White": {
        "coffee": 0.02,
        "water": 0.04,
        "milk": 0.11
    },
    "Macchiato": {
        "coffee": 0.01,
        "water": 0.035,
        "milk": 0.015
    }
}
const prices = {
    "coffee": 3.6,
    "water": 1,
    "milk": 1.5
}

const partyBudget = (budget) => {


    // Получаем общую стоимость напитков для каждого сотрудника
    const totalDrinksCost = employees => {
        const costPerEmployee = {}; // Объект с общей стоимостью всех желаемых напитков каждого сотрудника

        const total = employees.map(empl => {
            empl.drinks.forEach(drink => {

                let price = 0;

                for (let component in recipes[drink]) {
                    // Высчитываем стоимость каждого напитка, умножая стоимость на пропорции(в рецпете)
                    price += recipes[drink][component] * prices[component];
                }

                // Если у сотрудника больше одного предпочитаемого напитка, суммируем стоимость нескольких напитков
                costPerEmployee[empl.id] ? costPerEmployee[empl.id] += price : costPerEmployee[empl.id] = price;

            })
            return { id: empl.id, total: +costPerEmployee[empl.id].toFixed(4) }
        })
        return total;

    }


    // Вычисляем сотрудников, стоимость которых удовлетворяет наш бюджет
    const budgetSuccessMembers = (budget, total) => {

        const accepted = [];
        let temporaryBudget = 0;
        let coincidence_index = 0;


        for (let index = 0; budget - temporaryBudget > 0;) {
            budget -= temporaryBudget;
            let min = Infinity;

            total.forEach((elem, i) => {
                if (min > elem.total) {
                    min = elem.total;
                    index = i;
                }
            })

            if (budget - min > 0) {
                accepted.push(total.splice(index, 1).pop());
                temporaryBudget = accepted[coincidence_index++].total;
            }
        }

        return accepted;
    }


    // Оформляем вывод данных
    const invited = (members, employees) => {
        //Создаём массив, в который будем добавлять объекты
        let participants = [];

        employees.forEach(empl => {
            members.forEach(member => {
                if (empl['id'] === member['id']) {
                    participants.push({ id: empl['id'], Name: empl['name'], Drinks: empl['drinks'] })
                    // Метод .push позволяет реализовать сортировку по возрастанию
                }
            })
        })
        return participants;
    }


    const total = totalDrinksCost(employees);
    const acceptedMembers = budgetSuccessMembers(budget, total);

    return invited(acceptedMembers, employees);
}

partyBudget(0.1)