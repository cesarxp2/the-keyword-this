//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //This is used to recall properties within an object.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Explicit - Invoke a function that is not withing an object. You give it the context(object) in the first param. Can use fn.call(), fn.apply(), and fn.bind();
      //fn.call() - takes in a function then inside call you add the context(object), it then adds the function to the object.
      //fn.apply() - just like call() but apply() can take a whole array instead of putting each character
      //fn.bind() - creates a new array under var.

      //Implicit - Takes place on the left of the dot. i.e. obj.fn(); This method must exist inside the object already.
      //New - Creates a new objcect called this.
      //Default/Window -

  // 3) What is the difference between call and apply?

      //Call asks you to list the items of an array as arguments, explicitly whereas apply allows you to list the array and will do the work on its own.

  // 4) What does .bind do?

    // bind creates a new object under var



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*


     var user = {
       username: 'cesar',
       email: 'cesarxp2@hotmail.com',
       getUsername: function() {
         return this.username;
       }
     };

     user.getUsername();

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
    return this.move + 10;
  };
}


var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
getYear.call(prius);
getYear.call(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser);

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)

//undefined;

//In the example above, what is the 'this keyword' bound to when getUsername runs?

//The window

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
