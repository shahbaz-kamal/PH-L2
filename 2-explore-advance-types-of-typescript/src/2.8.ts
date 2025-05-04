{
  //Promise

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "hel";
      if (data) {
        resolve(data);
      } else {
        reject("Failed To load Data");
      }
    });
  };

  //calling createPromis

  const showData = async (): Promise<string> => {
    const data = await createPromise();
    console.log(data);
    return data;
  };
  //   showData();
  //getting data from json p[llacehjolder
  type ToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    // console.log(data);
    return data;
  };
  getToDo().then((toDo) => {
    console.log(toDo);
  });
}
