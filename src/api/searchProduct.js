const searchProduct = (key) => {
    const url = `http://10.6.4.108:8080/app/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchProduct;
