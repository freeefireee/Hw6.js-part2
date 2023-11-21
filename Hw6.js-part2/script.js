let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let userWithId2 = users.find(user => user.id === 2);
  
  console.log(userWithId2);
  