/**
 * You have create an utility function -> 'superClone,
 * that accepts and an object and return deepclone Object
 * 
 */

const person = {
    firstName: 'John',
    lastName: 'Doe',
    newName: null,
    address:{
        street: '123 Main St',
        city: 'New York',
        country: 'USA',
        postCodes:{
            firstBlock:10,
            secondBlock:20,
        }
    }
}

function superClone(srcObj) {
    const result = {};
    for (let key in srcObj){
        let value = srcObj[key];
        if(typeof value!="object" || value === null) {
            result[key] = value; // Primitive types and null are copied directly
        }
        else{
            result[key] = {...value};
        }
    }
    return result;
}

const deeplyClonedObject = superClone(person);
console.log("deepcloneObject", deeplyClonedObject);
person.firstName = "Jane";
console.log("After modifying original object:", person);
    
 person.address.street = "456 Elm St";
console.log("After modifying nested property in original object:", person);

person.address.postCodes.firstBlock = 100;
console.log("After modifying nested property in original object:", person);
console.log("Deeply cloned object remains unchanged:", deeplyClonedObject);


   