//##############################  Task №3   #####################################

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

    // Get total drinks price for each employee
    const totalDrinksCost = employees => {
        const costPerEmployee = {}; // Object with the total cost of all the preferences drinks for each employee

        const total = employees.map(empl => {
            empl.drinks.forEach(drink => {

                let price = 0;

                for (let component in recipes[drink]) {
                    // Calculate price for each drink, multiplying cost at proportions(in a recipes)
                    price += recipes[drink][component] * prices[component];
                }

                // If employee has more than one preferences drinks, summ cost every preference drink this employee
                costPerEmployee[empl.id] ? costPerEmployee[empl.id] += price : costPerEmployee[empl.id] = price;

            })
            return { id: empl.id, total: +costPerEmployee[empl.id].toFixed(4) }
        })
        return total;

    }


    // Calculate employees, the cost of which satisfy our budget
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


    // Styling data output
    const invited = (members, employees) => {

        let participants = []; // Create array, in which will add objects

        employees.forEach(empl => {
            members.forEach(member => {
                if (empl['id'] === member['id']) {
                    participants.push({ id: empl['id'], Name: empl['name'], Drinks: empl['drinks'] })
                    // .push Method at this case allows to implement ascending sorting
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