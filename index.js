/**
 * If else conditional
 * -------------------------------------------------------
 */

// 1. Array.includes, Array.every, Array.some for multiple criteria
export function validatingForm(name: string, username: string, birthday: string, gender: string) {
    if ([name, username, birthday, gender].includes('')) {
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

    // condition: all fruits must be red
    const isAllRed = fruits.every((fruit) => fruit.color === 'red'); // false
    fruits.some((fruit) => fruit.color === 'red'); // true

    console.log(isAllRed); // false
}

// 2. Return error first conditional, avoid nesting if
export function pickMostBestFruit(fruit?: string, quantity?: number) {
    const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

    // check error first on fruits available
    if (!fruit) {
        throw new Error('No fruit!');
    }

    // check all fruits not in array
    if (!redFruits.includes(fruit)) {
        return;
    }

    // print red
    console.log('red');

    // check quantity
    if (quantity && quantity > 10) {
        console.log('big quantity');
    }
}

// 3. Lookup map
export function getStatusColor(status: string) {
    const objColor = {
        pending: 'red',
        created: 'green',
        progress: 'blue',
        delivered: 'purple',
        completed: 'torquise',
        history: 'black',
    };

    return objColor[status] || 'yellow';
}

// 4. Ternary operators
export function getBestTitle(big: boolean) {
    return big ? 'Big title' : 'Small title';
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
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach((ar) => {
    console.log(ar);
});

arr.find((x) => {
    return x.name === 'apple';
});

arr.filter((x) => {
    return x.name === 'apple';
});

arr.reduce((acc, item) => {
    return [...acc, item.name];
}, []); // ['apple', 'orange'];

// 2. for iteration, For in and for of

/**
 * Function
 * -------------------------------------------------------
 */

// 1. Make it understandable
export function validatingForm2() {
    //
}

// 2. Modularize, one function only take one responsibility
export async function userRegistration({ name }: any) {
    try {
        validatingUser(name);

        const registerData = await registratingUser();
        const loginData = await login();
        const profileData = await profileData();

        return { registerData, loginData, profileData };
    } catch (error) {
        // handle error
    }
}

function validatingUser(name: string) {
    // validation
    if (name === '') {
        throw new Error('Name is required');
    }
}

async function registratingUser() {
    const response = await fetch('https://localhost/registration');
    const data = await response.json();

    return data;
}

async function login() {
    const response = await fetch('https://localhost/login');
    const data = await response.json();

    return data;
}

export async function getProfile() {
    const response = await fetch('https://localhost/profile');
    const data = await response.json();

    return data;
}
