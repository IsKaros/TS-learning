class Student {
  fullName: string,
  constructor(public firstName:string,public lastName:string)
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person:Person) {
  return 'Hello, ' + person.firstName + '.' + person.lastName
}

let user = {firstName:'Jack',lastName:'Leonardo'}
document.body.innerHTML = greeter(user)