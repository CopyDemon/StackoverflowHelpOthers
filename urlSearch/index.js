/**
 * @Description : User try to search url contains two make and push them into an array
 * @Link : https://stackoverflow.com/questions/71837317/javascript-adding-new-element-to-array-using-for-loop/71837558#71837558
 * 
 * @Question : Javascript - Adding new element to array using for loop
 * //I'm trying to convert url. Using for loop to extract Acura, Audi. Here what I got so far:
 * var newSrpParams = 'year=2020-2022&make=Acura&make=Audi&model=A3&model=A5&trim=2.0T%20Premium&trim=2.0T%20S%20line%20Premium&normalBodyStyle=Hatchback&normalBodyStyle=Sedan&odometer=13000-38000&internetPrice=20000-50000';

    const newSrpParamsArray = newSrpParams.split("&");

    var oldSrpParams;

    var makes = [];

    for(var i = 0 ; i < newSrpParamsArray.length; i++){
    if(newSrpParamsArray[i].includes('make')) {
        const make = newSrpParamsArray[i].replace('make=','')
        makes.push(make);
        console.log(makes)
    }
    };

    //result:
    [ 'Acura' ]
    [ 'Acura', 'Audi' ]
 */
let url = new URL(`http://localhost?year=2020-2022&make=Acura&make=Audi&model=A3&model=A5&trim=2.0T%20Premium&trim=2.0T%20S%20line%20Premium&normalBodyStyle=Hatchback&normalBodyStyle=Sedan&odometer=13000-38000&internetPrice=20000-50000`)
let params = new URLSearchParams(url.search).getAll("make")
console.log(params)

//use getAll() can get all params match the search
//use get() will get first result, but if there is more params match get(), will return N times first match. N = matchParams.length
