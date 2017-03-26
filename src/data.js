export const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split('.');

export const items = [
    {
        name: 'apple',
        category: 'fruit',
        description: description.slice(0,2).join('.')
    },
    {
        name: 'aubergine',
        category: 'vegetable',
        description: description.slice(0, 2).join('.')
    },
    {
        name: 'banana',
        category: 'fruit',
        description: description.slice(0, 2).join('.')
    },
    {
        name: 'broccoli',
        category: 'vegetable',
        description: description.slice(0, 2).join('.')
    },
    {
        name: 'chicken',
        category: 'meat',
        description: description.slice(0, 2).join('.')
    },
    {
        name: 'orange',
        category: 'fruit',
        description: description.slice(0, 2).join('.')
    },
    {
        name: 'beef',
        category: 'meat',
        description: description.slice(0, 2).join('.')
    },
    {
        name: 'zucchini',
        category: 'vegetable',
        description: description.slice(0, 2).join('.')
    }
];

export const categories = [
    'fruit', 'vegetable', 'meat'
];
