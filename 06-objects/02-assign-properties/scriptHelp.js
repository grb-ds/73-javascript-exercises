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

    /*function ComputerBase(){
        this.available = true;
        this.os = "linux";
        this.user = null;
    }*/

    /*function Computer(id, available, os, user) {
        //ComputerBase.call();
        this.id = id;

        available !== undefined ?
            this.available = available :
            this.available = defaultProps.available;

        os !== undefined ?
            this.os = os :
            this.os = defaultProps.os;

        user !== undefined ?
            this.user = os :
            this.user = defaultProps.user;
   }*/


    var computerObject = {
        id:"",
        available: true,
        os: "linux",
        user: null,
       /* [Symbol.iterator]() {
            return [][Symbol.iterator]()
        },*/
    };



    // This is an assign function that copies full descriptors
    function completeAssign(target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                return descriptors;
            }, {});
            // by default, Object.assign copies enumerable Symbols too
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym);
                if (descriptor.enumerable) {
                    descriptors[sym] = descriptor;
                }
            });
            Object.defineProperties(target, descriptors);
        });
        return target;
    }


    // This is an assign function that copies full descriptors
    function completeAssign2(objectTarget, objectSource) {
        let objectSourceProperties = Object.getOwnPropertyDescriptors(objectSource);
        let descriptors;
        for (let current_property in objectSourceProperties) {
            if (!objectTarget.hasOwnProperty(current_property)) {
               objectTarget[current_property] = objectSource[current_property];
            }
        }

        return objectTarget;

      /*  objectSourceProperties.

        Object.keys(objectSourceProperties


        Object.keys(objectSource).forEach(property =>function ( ){



            if (!objectTarget.hasOwnProperty(property)){
                Object.defineProperties(objectTarget, property);
                Object.defineProperties()

                //Object.getOwnPropertyDescriptor
            }
        });

        Object.defineProperties(

            objectSourceProperties
            Object.keys(objectTarget).hasOwnProperty()


        let descriptors = Object.keys(sources).reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(sources, key);
            return descriptors;
        }, {});
            Object.defineProperties(target, descriptors);

        return target;*/
    }





    document.getElementById("run").addEventListener("click", function () {

         let new_computers = computers.slice(0, computers.length);

         computers.forEach(computer => {
             console.log(computer);
         });

         console.log("DESPUESSSSSS");

/*
         new_computers.forEach(new_computer => {
            if (!new_computer.hasOwnProperty("available")){
               // new_computer.available = defaultProps.available;
                new_computer.splice(1, 0, {"available": defaultProps.available})
            }
            if (!new_computer.hasOwnProperty("user")){
                new_computer.user = defaultProps.user;
                new_computer.splice(2, 0, {"user": defaultProps.user})
            }
             if (!new_computer.hasOwnProperty("os")){
                 new_computer.os = defaultProps.os;
                 new_computer.splice(3, 0, {"user": defaultProps.user})
             }
         });

         new_computers.forEach(new_computer => {
             console.log(new_computer);
         });*/


         console.log("FINAL");


         new_computers.forEach(new_computer => {
             new_computer = completeAssign2(new_computer,computerObject);





            /* if (!new_computer.hasOwnProperty("available")){
                 // new_computer.available = defaultProps.available;
             }
             if (!new_computer.hasOwnProperty("user")){
                 new_computer.user = defaultProps.user;
                 new_computer.splice(2, 0, {"user": defaultProps.user})
             }
             if (!new_computer.hasOwnProperty("os")){
                 new_computer.os = defaultProps.os;
                 new_computer.splice(3, 0, {"user": defaultProps.user})
             }*/
         });

         new_computers.forEach(new_computer => {
             console.log(new_computer);
         });





         /*  let computersObjectArray = new Array();

           computers.forEach(value => {
               let computerObject = new Computer(value.id, value.available, value.os, value.user);
               computersObjectArray.push(computerObject);
           });
   */










         /*computersObjectArray.forEach(Object.entries(value).forEach(([key, val]) => {
             console.log(key, val);
             document.getElementById("target").innerHTML += `${key}: ${val} <br/>`
         });
         );*/

      /*   computersObjectArray.forEach( entry => function(entry){

             alert(entry.id.toString());
           // console.log(entry.id, entry.available, entry.os, entry.user);



         });

         /*************************
         * var person = {name:"John", age:30, city:"New York"};

var myArray = Object.values(person);




          Object.keys(obj).forEach(function(key) {

  console.log(key, obj[key]);

  **************/

        
        
        

/*             [entry].forEach(([key, val]) => {
                 console.log(key, val);
                 document.getElementById("target").innerHTML += `${key}: ${val} <br/>`
             });*/
             /*Object.values(entry).forEach(val => {
                 console.log(val);
             });*/


/*             Object.entries(entry).forEach((key,value) => {

                 console.log(key, value);
             });*/

/*
* entry.childNodes.forEach(function(childrenEntry) { // was missing a )
                 console.log(childrenEntry.firstname);
             });*/



    });
})();
