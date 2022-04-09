/**
 * @Description :
 * Covert key-value javascript object into array format
 * @link : https://stackoverflow.com/questions/71804149/covert-key-value-javascript-object-into-array-format/71804195#71804195
 * @UserAsk :
 *  I am trying to access java script object which is available in the below format:
 *  [
        {'To':'A','From':'X','Weight':5},
        {'To':'A','From':'Y','Weight':7},
        {'To':'A','From':'Z','Weight':6},
        {'To':'B','From':'X','Weight':2},
        {'To':'B','From':'Y','Weight':9},
        {'To':'B','From':'Z','Weight':4}
    ]
    
    How can I access above object to create array like below ?
    [
        [ 'A', 'X', 5 ],
        [ 'A', 'Y', 7 ],
        [ 'A', 'Z', 6 ],
        [ 'B', 'X', 2 ],
        [ 'B', 'Y', 9 ],
        [ 'B', 'Z', 4 ]
    ]
 */

//solution 1
let a = [{'To':'A','From':'X','Weight':5},{'To':'A','From':'Y','Weight':7},{'To':'A','From':'Z','Weight':6},{'To':'B','From':'X','Weight':2},{'To':'B','From':'Y','Weight':9},{'To':'B','From':'Z','Weight':4}]
let array = []

for(i in a){
    let temp = [a[i]['To'], a[i]['From'], a[i]['Weight']]
    array.push(temp)
}

console.log(array)

//solution 2
let arr = [{'To':'A','From':'X','Weight':5},{'To':'A','From':'Y','Weight':7},{'To':'A','From':'Z','Weight':6},{'To':'B','From':'X','Weight':2},{'To':'B','From':'Y','Weight':9},{'To':'B','From':'Z','Weight':4}]

let result = arr.map(obj => {
    return Object.values(obj)
})
console.log(result)