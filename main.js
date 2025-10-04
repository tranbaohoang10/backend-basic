const greeting = (name, callback) => {
  console.log("Xin chao: ", name);
  callback();
};
const hello = () => {
  console.log("learn callback..");
};
const hi = () => {
  console.log("say hi..");
};
greeting("Bao Hoang", hello);
greeting("Bao Hoang", hi);
