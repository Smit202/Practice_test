

fetchData('http://localhost:8000/data')
.then(result => console.log(result))
.catch(err => console.log(err.message));


function fetchData(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {mode: "cors"})
        .then(response => {
            if(response.ok) {
                resolve(response.json());
            }
            reject(new Error('unable to fetch data from api'));
        })
        .catch(err => {
            reject(new Error(err.message));
        });
    });
}