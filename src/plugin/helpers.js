export const useFetch = (promise, ok = () => {}, err = () => {}) => {
  promise()
    .then(response => {
      ok(response.data);
    })
    .catch(error => {
      err(error);
    });
};
