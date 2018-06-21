const initData = () => (
    fetch('http://10.6.4.108:8080/app/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
