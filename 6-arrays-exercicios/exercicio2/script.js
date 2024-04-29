const arr1 = [2, 5, 7 , 1, 6, 9]
const arr2 = ["amor", "paz", "amizade"]
const arr3 = [1, 8, 2, "amor", true, "gratidão"]

// A) 
function tamanhoArray(arr1, arr2, arr3){
    console.log(arr1.length)
    console.log(arr2.length)
    console.log(arr3.length)
}

tamanhoArray(arr1,arr2,arr3)

// B)
function itemArray(arr1, arr2, arr3) {
    console.log(arr1[0])
    console.log(arr2[1])
    console.log(arr3[2])

    console.log(arr1.includes(7))
    console.log(arr3.includes(7))
}

console.log(itemArray(arr1, arr2, arr3))

