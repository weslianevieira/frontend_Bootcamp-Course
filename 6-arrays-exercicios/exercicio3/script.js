const arr1 = [2, 5, 7, 1, 6, 9]
const arr2 = ["amor", "paz", "amizade"]
const arr3 = [1, 8, 2, "amor", true, "gratidão"]

const arr1Copia = arr1.slice()
const arr2Copia = arr2.slice()
const arr3Copia = arr3.slice()

// A) 
function adicionaNoInicio(arr1) {
    arr1Copia.unshift(9)
    console.log(arr1)
    console.log(arr1Copia)
}
adicionaNoInicio(arr1)

// B)
function removeUltimoItem(arr2) {
    arr2Copia.pop()
    console.log(arr2)
    console.log(arr2Copia)
}
removeUltimoItem(arr2)

// C)
function removeSegundo(arr3) {

    arr3Copia.splice(1,1)
    console.log(arr3)
    console.log(arr3Copia)
}
removeSegundo(arr3)
