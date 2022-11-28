let number = 1

function test() {
  console.log('this is the test function')
}

function doSomething(callback) {
  console.log("inside the function")

  if (callback) {
    console.log('inside the if statement')
    callback()
  }

}

//

// doSomething(test)
// doSomething(10)
// doSomething()



