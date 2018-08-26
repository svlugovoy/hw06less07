function Age(age: number) {
  return function (targetclass: Person) {
    return class {
      name = targetclass.name;
      age = age;
    };
  };
}

@Age(30)
class Person {
  public name = 'Serg';
}


