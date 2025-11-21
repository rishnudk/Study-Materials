function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = { message: "hiii!" };
      // If successful, call resolve with the data
      resolve(message); 

      // If an error occurs, call reject with the error
      // reject("Failed to fetch data"); 
    }, 1000);
  });
}

function myPromise(data) {
  return new Promise((resolve, reject) => {
    if(data){
      console.log('data fetched successfully');
      resolve(data);
    } else {
      reject('Error fetching data');
    }
  });
}

function printData(data) {
  return new Promise((resolve, reject) => {
    if(data){
      console.log('data printing');
      resolve(data);
    } else {
      reject('Error printing data');
    }
  });
}

fetchData()
  .then((data) => myPromise(data))
  .then((data) => printData(data))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Completed');
  });