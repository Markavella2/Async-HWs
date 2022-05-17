//Async Await Youtube video

console.log('Synchronous 1');

setTimeout(_ => console.log('Timeout 2'), 0);

Promise.resolve().then(_ => console.log('Promise'));

console.log('Synchronous 4')



promise
    .then(res => res.json())
    .then(user => {
        throw new Error('uh oh!');
        return user;
    })
    .then(user => console.log('smile', user.title))
    .catch(err => console.error('sad face', err));

console.log('Synchronous');



//Not efficient
const codeBlocker = () => {
return new Promise((resolve, reject) => {
    let i=0;
    while(i<100000000) {i++;}
    resolve('billion loops done')
})
}

//above refactored

const codeBlocker2 = () => {
    return Promise.resolve().then(v=>{
        let i=0;
    while(i<100000000) {i++;}
    return('billion loops done')
    })
}


//Basic async

const getFruit = async(name) => {
    const fruits = {
        pineapple: 'pineapple',
        peach: 'peach',
        apple: 'apple'
    }
    return Promise.resolve(fruits[name]);
}

getFruit('peach').then(console.log)