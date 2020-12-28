/**
 * If else conditional
 * -------------------------------------------------------
 */

// 1. Array.includes, Array.every, Array.some for multiple criteria
export function validatingForm(name: string, username: string, birthday: string) {
    if (name === '' || username === '' || birthday === '') {
        console.log('Please complete the form');
    } else {
        // form is complete
    }
}

export function ValidatingAllFruits() {
    const fruits = [
        { name: 'apple', color: 'red' },
        { name: 'banana', color: 'yellow' },
        { name: 'grape', color: 'purple' },
    ];

    let isAllRed = true;

    // condition: all fruits must be red
    for (const f of fruits) {
        if (!isAllRed) break;

        isAllRed = f.color === 'red';
    }

    console.log(isAllRed); // false
}

// 2. Return error first conditional, avoid nesting if
export function pickMostBestFruit(fruit?: string, quantity?: number) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    // condition 1: fruit must has value
    if (fruit) {
        // condition 2: must be red
        if (redFruits.includes(fruit)) {
            console.log('red');

            // condition 3: must be big quantity
            if (quantity && quantity > 10) {
                console.log('big quantity');
            }
        }
    } else {
        throw new Error('No fruit!');
    }
}

// 3. Lookup map
export function getStatusColor(status: string) {
    let color = '';

    if (status === 'pending') {
        color = 'red';
    } else if (status === 'created') {
        color = 'green';
    } else if (status === 'progress') {
        color = 'blue';
    } else if (status === 'delivered') {
        color = 'purple';
    } else if (status === 'completed') {
        color = 'torquise';
    } else {
        color = 'yellow';
    }

    return color;
}

// 4. Ternary operators
export function getBestTitle(big: boolean) {
    let title = '';

    if (big) {
        title = 'Big title';
    } else {
        title = 'Small title';
    }

    return title;
}

// 5. Short circuit Conditional (&&, ||)
export function TextComponent(props: any) {
    if (props.show) {
        return <>{'This is show'}</>;
    }

    return null;
}

/**
 * Looping
 * -------------------------------------------------------
 */
const arr = [
    { name: 'apple', color: 'red' },
    { name: 'banana', color: 'yellow' },
    { name: 'grape', color: 'purple' },
];

const obj = {
    a: { name: 'apple', color: 'red' },
    b: { name: 'banana', color: 'yellow' },
    c: { name: 'grape', color: 'purple' },
};

// 1. Use map, foreach, find, filter, reduce to loop array

// 2. for iteration, For in and for of

/**
 * Function
 * -------------------------------------------------------
 */

// 1. Make it understandable
function x() {
    //
}

// 2. Modularize, one function only take one responsibility
export function userRegistration({ name }: any) {
    // validation
    if (name === '') {
        throw new Error('Name is required');
    }

    // registrating user
    fetch('https://localhost/registration')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // login
            return fetch('https://localhost/login');
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // fetch profile
            return fetch('https://localhost/profile');
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            // handle error
        });
}
