/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
alert("Objects 2");

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    var computerObject = {
        id:"",
        available: true,
        os: "linux",
        user: null,
       /* [Symbol.iterator]() {
            return [][Symbol.iterator]()
        },*/
    };


    // This is an assign function that copies descriptors and value
    function completeAssign(objectTarget, objectSource) {
        let objectSourceProperties = Object.getOwnPropertyDescriptors(objectSource);

        for (let current_property in objectSourceProperties) {
            if (!objectTarget.hasOwnProperty(current_property)) {
               objectTarget[current_property] = objectSource[current_property];
            }
        }
        return objectTarget;
    }

    document.getElementById("run").addEventListener("click", function () {

         let new_computers = computers.slice(0, computers.length);

         console.log("Original Computers");

         computers.forEach(computer => {
             console.log(computer);
         });

         console.log("Complete Computers");

         new_computers.forEach(new_computer => {
             new_computer = completeAssign(new_computer,computerObject);
         });

        let index = 0;
         new_computers.forEach(new_computer => {
             index++;
             console.log(new_computer);
             document.getElementById("target").innerHTML += `Computer ${index}: `
             Object.entries(new_computer).forEach(([key, val]) => {
                 document.getElementById("target").innerHTML += `${key}: ${val}, `
             });
             document.getElementById("target").innerHTML += '<br/>'
         });
    });
})();
