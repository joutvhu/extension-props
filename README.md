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

- Use utility functions through the provided objects likes ObjectType, ArrayType, ClassType, FunctionType, RegexType, StringType. _(Recommend)_
  ```js
  const {
      ObjectType,
      ArrayType,
      ClassType,
      FunctionType,
      RegexType,
      StringType
  } = require('extension-props');
  ```

- Load additional utility functions into global objects likes String, Function, Object, Array, RegExp.
  ```js
  require('extension-props').extend();
  ```
 
### String

- `forInstance(str)`: checks whether v is a string.
    - _Variations:_
       - `StringType.forInstance(str)`
       - `String.forInstance(str)`
- `isBlank(str)`: return true, if v string is blank.
    - _Variations:_
       - `StringType.isBlank(str)`
       - `String.isBlank(str)`
- `isNotBlank(str)`: return true, if v string is not blank.
    - _Variations:_
       - `StringType.isBlank(str)`
       - `String.isBlank(str)`
- `isEmpty()`: checks a string is empty.
    - _Variations:_
       - `StringType.valueOf(str).isEmpty()`
       - `String.prototype.isEmpty()`
- `isNotEmpty()`: checks a string is not empty.
    - _Variations:_
       - `StringType.valueOf(str).isNotEmpty()`
       - `String.prototype.isNotEmpty()`
- `equals(another)`: checks a string is equals with another string.
    - _Variations:_
       - `StringType.valueOf(str).equals(another)`
       - `String.prototype.equals(another)`
- `equalsIgnoreCase(another)`: checks a string is equals with another string on the basis of content of the string irrespective of case of the string.
    - _Variations:_
       - `StringType.valueOf(str).equalsIgnoreCase(another)`
       - `String.prototype.equalsIgnoreCase(another)`
- `replaceAll(str, search, replacement)`: returns a new string with all matches of a pattern replaced by a replacement.
    - _Variations:_
       - `StringType.replaceAll(str, search, replacement)`
       - `String.replaceAll(str, search, replacement)`
       - `StringType.valueOf(str).replaceAll(search, replacement)`
       - `String.prototype.replaceAll(search, replacement)`
- `replacePlaceholders(str, map)`: returns a new string with all matches of each key in the map replaced by its value.
    - _Variations:_
       - `StringType.replacePlaceholders(str, map)`
       - `String.replacePlaceholders(str, map)`
       - `StringType.valueOf(str).replacePlaceholders(map)`
       - `String.prototype.replacePlaceholders(map)`

### Function

- `forInstance(func)`: checks whether f is a function.
    - _Variations:_
       - `FunctionType.forInstance(func)`
       - `Function.functionForInstance(func)`
- `defineFunction(name, prototype)`: define a function with dynamic name.
    - _Variations:_
       - `FunctionType.defineFunction(name, prototype)`
       - `Function.defineFunction(name, prototype)`
       - `FunctionType.valueOf(prototype).defineFunction(name)`
       - `Function.prototype.defineFunction(name)`
    - `name`: is the name of the function.
    - `prototype` (option): is a function that determines the content of the function being created.
    + returns a function.
- `isCallable(func)`: checks whether f function is callable.
    - _Variations:_
       - `FunctionType.isCallable(func)`
       - `Function.isCallable(func)`
- `isNormalFunction(func)`: checks whether f is a normal function, that means that f is not an async function nor an arrow function.
    - _Variations:_
       - `FunctionType.isNormalFunction(func)`
       - `Function.isNormalFunction(func)`
- `isAsyncFunction(func)`: checks whether f is an async function.
    - _Variations:_
       - `FunctionType.isAsyncFunction(func)`
       - `Function.isAsyncFunction(func)`
- `isSyncFunction(func)`: checks whether f is a sync function (negative of isAsyncFunction).
    - _Variations:_
       - `FunctionType.isSyncFunction(func)`
       - `Function.isSyncFunction(func)`
- `isArrowFunction(func)`: checks whether f is an arrow function.
    - _Variations:_
       - `FunctionType.isArrowFunction(func)`
       - `Function.isArrowFunction(func)`
- `isNonArrowFunction(func)`: negative of isArrowFunction.
    - _Variations:_
       - `FunctionType.isNonArrowFunction(func)`
       - `Function.isNonArrowFunction(func)`
- `clone()`: clone a function.
    - _Variations:_
       - `FunctionType.valueOf(func).clone()`
       - `Function.prototype.clone()`

### Class

- `forInstance(cls)`: checks whether c is a class.
    - _Variations:_
       - `ClassType.forInstance(cls)`
       - `Function.classForInstance(cls)`
- `defineClass(name, superclass, prototype)`: define a class with dynamic name.
    - _Variations:_
       - `ClassType.defineClass(name, superclass, prototype)`
       - `Function.defineClass(name, superclass, prototype)`
       - `ClassType.valueOf(superclass).defineClass(name, prototype)`
       - `Function.prototype.defineClass(name, prototype)`
    - `name`: is the name of the class.
    - `superclass` (option): specify a super class.
    - `prototype` (option): is a function that determines the content of constructor of the class being created.
    - return a class.
- `isES6Class(cls)`: checks whether c is an es6 class.
    - _Variations:_
       - `ClassType.isES6Class(cls)`
       - `Function.isES6Class(cls)`
- `preventInheritingClass(obj, classDefinition, except)`: prevent inheriting class.
    - _Variations:_
       - `ClassType.preventInheritingClass(obj, classDefinition, except)`
       - `Object.preventInheritingClass(obj, classDefinition, except)`
       - `ClassType.valueOf(obj).preventInheritingClass(classDefinition, except)`
       - `Object.prototype.preventInheritingClass(classDefinition, except)`
    - `obj`: is an instance of subclass of classDefinition class.
    - `classDefinition`: is a superclass.
    - `except` (option): is white list, designate classes that are allowed to inherit.
    - throw a OverridingError exception, if obj is an instance of a class, and it is not allowed to inherit the classDefinition class.
    - return false, if obj is an instance of a class, and it is not subclass of classDefinition class.
    - return true, if obj is an instance of a class, and it is allowed to inherit the classDefinition class.
    - _Recommended:_ Put this function into the constructor.
- `preventOverrideFunction(obj, classDefinition, functions)`: prevent overriding of functions.
    - _Variations:_
       - `ClassType.preventOverrideFunction(obj, classDefinition, functions)`
       - `Object.preventOverrideFunction(obj, classDefinition, functions)`
       - `ClassType.valueOf(obj).preventOverrideFunction(classDefinition, functions)`
       - `Object.prototype.preventOverrideFunction(classDefinition, functions)`
    - `obj`: is an instance of subclass of classDefinition class.
    - `classDefinition`: is a superclass.
    - `functions`: is an array of functions need to prevent override.
    - throw a OverridingError exception, if obj contains a function, and it is not allowed to override in the subclass of the classDefinition class.
    - return false, if obj is an instance of a class, and it is not subclass of classDefinition class.
    - return true, if no function is prevented, it is contained in subclasses.
    - _Recommended:_ Put this function into the constructor.

### Object

- `getAllPropertyDescriptor(obj)`: returns an array of all properties of a given object.
    - _Variations:_
       - `ObjectType.getAllPropertyDescriptor(obj)`
       - `Object.getAllPropertyDescriptor(obj)`
- `getAllPropertyDescriptor(obj, prop)`: returns a property descriptor for a property of a given object.
    - _Variations:_
       - `ObjectType.getAllPropertyDescriptor(obj, prop)`
       - `Object.getAllPropertyDescriptor(obj, prop)`
- `getAllPropertyDescriptors(obj)`: returns an array of all property descriptors of a given object.
    - _Variations:_
       - `ObjectType.getAllPropertyDescriptors(obj)`
       - `Object.getAllPropertyDescriptors(obj)`
- `isBlank(obj)`: return true, if obj = undefined or obj = null.
    - _Variations:_
       - `ObjectType.isBlank(obj)`
       - `Object.isBlank(obj)`
- `isNotBlank(obj)`: return true, if obj != undefined and obj != null.
    - _Variations:_
       - `ObjectType.isNotBlank(obj)`
       - `Object.isNotBlank(obj)`

### Regex

- `forInstance(reg)`: checks whether v is a regex.
    - _Variations:_
       - `RegexType.forInstance(reg)`
       - `RegExp.forInstance(reg)`
- `escape(str)`: escape regex expression special characters.
    - _Variations:_
       - `RegexType.escape(str)`
       - `RegExp.escape(str)`
- `matchWords(str)`: create a regex string for checks match with the words in str string.
    - _Variations:_
       - `RegexType.matchWords(str)`
       - `RegExp.matchWords(str)`

### Array

- `forInstance(arr)`: checks whether v is a array.
    - _Variations:_
       - `ArrayType.forInstance(arr)`
       - `Array.forInstance(arr)`
- `isBlank(arr)`: return true, if v array is blank.
    - _Variations:_
       - `ArrayType.isBlank(arr)`
       - `Array.isBlank(arr)`
- `isNotBlank(arr)`: return true, if v array is not blank.
    - _Variations:_
       - `ArrayType.isNotBlank(arr)`
       - `Array.isNotBlank(arr)`
- `isEmpty()`: checks a array is empty.
    - _Variations:_
       - `ArrayType.valueOf(str).isEmpty()`
       - `Array.prototype.isEmpty()`
- `isNotEmpty()`: checks a array is not empty.
    - _Variations:_
       - `ArrayType.valueOf(str).isNotEmpty()`
       - `Array.prototype.isNotEmpty()`
- `equals(another)`: checks a array is equals with another array.
    - _Variations:_
       - `ArrayType.valueOf(str).equals(another)`
       - `Array.prototype.equals(another)`
- `virtualGet(index)`: get value at index. You will still get a value even if the index is out of bounds.
    - _Variations:_
       - `ArrayType.valueOf(str).virtualGet(index)`
       - `Array.prototype.virtualGet(index)`
- `insert(index, ...elements)`: insert elements into the specified position.
    - _Variations:_
       - `ArrayType.valueOf(str).insert(index, ...elements)`
       - `Array.prototype.insert(index, ...elements)`
- `lastIndexOf(element)`: returns the last index at which a given element can be found in the array, or -1 if it is not present.
    - _Variations:_
       - `ArrayType.valueOf(str).lastIndexOf(element)`
       - `Array.prototype.lastIndexOf(element)`
