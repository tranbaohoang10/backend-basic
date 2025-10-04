//fetch
const temp = fetch("http://localhost:8000/users");
// su dung fetch de lay du lieu tu json va ket hop voi promise de bien no danh data
temp.then((res) => res.json()).then((data) => console.log(data));
