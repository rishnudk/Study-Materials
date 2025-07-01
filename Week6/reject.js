const rejectPromise = Promise.reject("error occured");
rejectPromise.catch((error) => console.log(error)
)