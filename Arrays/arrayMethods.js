	//*Introduction

    // Understanding array methods in JavaScript is crucial for writing efficient and readable code. Knowing the right method can simplify your logic and reduce the number of lines of code you need to write 

//*Arrow Functions

   /* An arrow function is a concise way to write functions in JavaScript. It uses the => syntax and can omit the return keyword and curly braces if it consists of a single expression 
*/

//*Common Array Methods------------------------------------------------

//? forEach
    //     Syntax: array.forEach(callback)
    //     Executes a provided function once for each array element.
    //     Example:

        food.forEach(item => console.log(item));

    //*    This will log each item in the food array 

//?map

    // Syntax: array.map(callback)
    // Creates a new array populated with the results of calling a provided function on every element in the calling array.
    // Example:

    const bananas = food.map(item => 'banana');

    //*This returns a new array filled with 'banana' for each item in the original array 

//?filter

    // Syntax: array.filter(callback)
    // Creates a new array with all elements that pass the test implemented by the provided function.
    // Example:

    const fruits = food.filter(item => item.type === 'fruit');

   //* This filters the food array to include only items of type 'fruit' 

//?concat

    // Syntax: array.concat(value1, value2, ...)
    // Merges two or more arrays and returns a new array.
    // Example:

    const combined = fruits.concat(vegetables);

//*    This combines the fruits and vegetables arrays into a new array 


//?find

    // Syntax: array.find(callback)
    // Returns the value of the first element in the provided array that satisfies the provided testing function.
    // Example:

    const yellowItem = food.find(item => item.color === 'yellow');

//*    This returns the first item with the color yellow 

//?findIndex

    // Syntax: array.findIndex(callback)
    // Returns the index of the first element in the array that satisfies the provided testing function.
    // Example:

    const bananaIndex = food.findIndex(item => item.color === 'yellow');

//*    This returns the index of the first yellow item 

//?includes

    // Syntax: array.includes(value)
    // Determines whether an array includes a certain value among its entries.
    // Example:

    const hasPotato = food.includes('potato');

//*    This checks if 'potato' is in the food array 

//?push

    // Syntax: array.push(value)
    // Adds one or more elements to the end of an array and returns the new length of the array.
    // Example:

    food.push('onion');

//*    This adds 'onion' to the end of the food array 

//?pop

    // Syntax: array.pop()
    // Removes the last element from an array and returns that element.
    // Example:

    const lastItem = food.pop();

//*    This removes the last item from the food array 

//?shift

    // Syntax: array.shift()
    // Removes the first element from an array and returns that element.
    // Example:

    const firstItem = food.shift();

//*    This removes the first item from the food array 

//?unshift

    // Syntax: array.unshift(value)
    // Adds one or more elements to the beginning of an array and returns the new length of the array.
    // Example:

    food.unshift('onion');

//*    This adds 'onion' to the start of the food array 

//?join

    // Syntax: array.join(separator)
    // Joins all elements of an array into a string.
    // Example:

    const foodString = food.join(', ');

//*    This creates a string of all elements in the food array separated by commas 

//?fill

    // Syntax: array.fill(value, start, end)
    // Fills all the elements of an array from a start index to an end index with a static value.
    // Example:

    food.fill('banana', 2, 6);

//*    This fills the food array with 'banana' from index 2 to 6 

//?copyWithin

    // Syntax: array.copyWithin(target, start, end)
    // Copies part of an array to another location in the same array and returns it.
    //! Example:
    food.copyWithin(2, 0, 2);

//*    This copies the first two elements to index 2 

//?Conclusion

    //!Mastering these array methods will enhance your JavaScript programming skills, making your code more efficient and easier to read.*/

//*Array Methods in JavaScript----------------------------------------------------

//?1. Copy Within

    // Description: The copyWithin method copies part of an array to another location in the same array without modifying its length.
    
    //!Example:
         Syntax: array.copyWithin(target, start, end)
    
        //  If target is 2, start is 4, and end is 6, it copies elements from index 4 to 5 into index 2.
        //!Result: Original array remains unchanged for elements outside the copied range 

//?2. Slice

    // Description: The slice method returns a shallow copy of a portion of an array into a new array object.
   
   //! Example:
        Syntax: array.slice(start, end)
   
        // If start is 2 and end is 4, it returns elements from index 2 to 3 (end index not included).
        // If only start is provided, it slices from that index to the end 

//?3. Splice

    // Description: The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
   //! Example:
        Syntax: array.splice(start, deleteCount, item1, item2, ...)
      
        // To remove one element at index 0: array.splice(0, 1) removes the first element.
        // To add an element: array.splice(0, 1, 'January') removes the first element and adds 'January' at index 0 

//?4. Sort

    // Description: The sort method sorts the elements of an array in place and returns the sorted array.
    //!Example:
    function: array.sort((a, b) => a - b) //for ascending order

        // Default sorting converts elements to strings, which may lead to unexpected order (e.g., '80' comes before '9').
        // To sort numbers correctly, provide a compare 
 
//?5. Reverse

    //Description: The reverse method reverses the elements of an array in place.
    
    //!Example: Calling array.reverse() 
    
    //on an array of numbers will reverse their order 

//?6. From

    // Description: The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
    //!Example: Converting a string to an array: 
    Array.from('1234')//* results in an array of strings 

//?7. Is Array

    // Description: The Array.isArray() method determines whether the passed value is an Array.
    //!Example:
     Array.isArray([1, 2, 3]) //*returns true
     while Array.isArray('string')//* returns false 

//?8. Reduce

    // Description: The reduce method executes a reducer function on each element of the array, resulting in a single output value.
    //!Example: To sum an array:

    const sum = array.reduce((accumulator, current) => accumulator + current, 0);

    //*The second parameter is the initial value 

//?9. Flat

    // Description: The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    //!Example:
     array.flat(depth)//* where depth is the number of levels to flatten 

//?10. Flat Map

    // Description: The flatMap method first maps each element using a mapping function, then flattens the result into a new array.
    //! Example:

    const result = array.flatMap(x => [x * 2]);

    //*This is equivalent to calling map followed by flat 
