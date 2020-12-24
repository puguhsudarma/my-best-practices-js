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
    switch (status) {
        case 'pending':
            return 'red';

        case 'created':
            return 'green';

        case 'progress':
            return 'blue';

        case 'delivered':
            return 'purple';

        case 'completed':
            return 'torquise';

        default:
            return 'yellow';
    }
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

// 1. Use map, foreach, find, filter, reduce to loop array

// 2. Use let instead var

// 3. For in and for of

/**
 * Function
 * -------------------------------------------------------
 */

// 1. Make it understandable

// 2. Modularize, one function only take one responsibility
