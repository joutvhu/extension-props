# extension-props

 A utility library delivering some additional utility functions.


## Installation

```bash
npm install extension-props
# or
yarn add extension-props
```

## Usage

 You can use this utilities by two way:

- Load additional utility functions into global objects likes String, Function, Object, Array, RegExp.
  ```js
  require('extension-props').extend();
  ```

- Use utility functions through the provided objects likes ObjectType, ArrayType, ClassType, FunctionType, RegularType, StringType.
  ```js
  const {
      ObjectType,
      ArrayType,
      ClassType,
      FunctionType,
      RegularType,
      StringType
  } = require('extension-props');
  ```
 
### String

- `forInstance(v)`: checks whether v is a string.
- `isBlank(v)`: return true, if v string is blank.
- `isNotBlank(v)`: return true, if v string is not blank.
- `isEmpty()`: checks a string is empty.
- `isNotEmpty()`: checks a string is not empty.
- `equals(v)`: checks a string is equals with another string.
- `equalsIgnoreCase(v)`: checks a string is equals with another string on the basis of content of the string irrespective of case of the string.

### Function

- `forInstance(f)`: checks whether f is a function.
- `defineFunction(name, prototype)`: define a function with dynamic name.
    + `name`: is the name of the function.
    + `prototype` (option): is a function that determines the content of the function being created.
    + returns a function.
- `isCallable(f)`: checks whether f function is callable.
- `isNormalFunction(f)`: checks whether f is a normal function, that means that f is not an async function nor an arrow function.
- `isAsyncFunction(f)`: checks whether f is an async function.
- `isSyncFunction(f)`: checks whether f is a sync function (negative of isAsyncFunction).
- `isArrowFunction(f)`: checks whether f is an arrow function.
- `isNonArrowFunction(f)`: negative of isArrowFunction.
- `clone()`: clone a function.

### Class

- `forInstance(c)`: checks whether c is a class.
- `defineClass(name, superclass, prototype)`: define a class with dynamic name.
    + `name`: is the name of the class.
    + `superclass` (option): specify a super class.
    + `prototype` (option): is a function that determines the content of constructor of the class being created.
    + return a class.
- `isES6Class(c)`: checks whether c is an es6 class.
- `preventInheritingClass(obj, classDefinition, except)`: prevent inheriting class.
    + `obj`: is an instance of subclass of classDefinition class.
    + `classDefinition`: is a superclass.
    + `except` (option): is white list, designate classes that are allowed to inherit.
    + throw a OverridingError exception, if obj is an instance of a class, and it is not allowed to inherit the classDefinition class.
    + return false, if obj is an instance of a class, and it is not subclass of classDefinition class.
    + return true, if obj is an instance of a class, and it is allowed to inherit the classDefinition class.
    + **Recommended**: Put this function into the constructor.
- `preventOverrideFunction(obj, classDefinition, functions)`: prevent overriding of functions.
    + `obj`: is an instance of subclass of classDefinition class.
    + `classDefinition`: is a superclass.
    + `functions`: is an array of functions need to prevent override.
    + throw a OverridingError exception, if obj contains a function, and it is not allowed to override in the subclass of the classDefinition class.
    + return false, if obj is an instance of a class, and it is not subclass of classDefinition class.
    + return true, if no function is prevented, it is contained in subclasses.
    + **Recommended**: Put this function into the constructor.

### Object

- `getAllPropertyDescriptor(obj)`: returns an array of all properties of a given object.
- `getAllPropertyDescriptor(obj, prop)`: returns a property descriptor for a property of a given object.
- `getAllPropertyDescriptors(obj)`: returns an array of all property descriptors of a given object.
- `isBlank(obj)`: return true, if obj = undefined or obj = null.
- `isNotBlank(obj)`: return true, if obj != undefined and obj != null.

### Regular

- `forInstance(v)`: checks whether v is a regular.
- `escape(str)`: escape regular expression special characters.
- `matchWords(str)`: create a regular string for checks match with the words in str string.

### Array

- `forInstance(v)`: checks whether v is a array.
- `isBlank(v)`: return true, if v array is blank.
- `isNotBlank(v)`: return true, if v array is not blank.
- `isEmpty()`: checks a array is empty.
- `isNotEmpty()`: checks a array is not empty.
- `equals(v)`: checks a array is equals with another array.
- `virtualGet(index)`: get value at index. You will still get a value even if the index is out of bounds.
- `insert(index, ...elements)`: insert elements into the specified position.
- `lastIndexOf(element)`: returns the last index at which a given element can be found in the array, or -1 if it is not present.
