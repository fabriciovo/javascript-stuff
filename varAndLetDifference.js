const func = () => {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i)); 
  }

  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i));
  }
};
