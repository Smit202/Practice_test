// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() < 0.5) {
//                 resolve('Data received');
//             } else {
//                 reject('Error occurred');
//             }
//         }, 1000);
//     });
// }

async function getData() {
    try {
        return await data();
    } catch (error) {
        return error.message;
    }
}

function data() {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            return 'Data received';
        } 
        else {
            return new Error('Error occurred');
        }
    }, 1000);
}