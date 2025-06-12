const person = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        postCodes: {
            firstBlock: 12,
            secondBlock: 67,
        }
    }
}

// output 
//  person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address.street: '123 Main St',
//     address.city: 'Anytown',
//     address.state: 'CA',
//     address.postCodes.firstBlock: 12,
//     address.postCodes.secondBlock: 67
// };

function serializeObjUtil(srcObject) {
    const result = {};
    for (let key in srcObject) {
        let innerElem = srcObject[key];
        if (typeof innerElem != 'object' || innerElem == null) {
            result[key] = innerElem;
        } else {
            // console.log('Processing object:', key);
            const innerserializedObject = serializeObjUtil(innerElem);
            for (let innerKey in innerserializedObject) {
                // result[`${key}.${innerKey}`] = innerserializedObject[innerKey];
                result[key + '.' + innerKey] = innerserializedObject[innerKey];
            }
        }
    }
    return result;
}

const serializedPerson = serializeObjUtil(person);
console.log("serializedObject:  ", serializedPerson);