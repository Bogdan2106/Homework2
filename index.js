var size = 1000;

var
    arrOrig = [],
    arrOne,
    arrTwo;

function getRandom() {
    return Math.floor( Math.random()*99)
}
//заполнение массива рандомными числами
console.time("fill");
for (var i=0;i<size;i++) {
    arrOrig[i] = getRandom();
}
console.timeEnd("fill");
//сортировка по возростанию
function sortN1(a,b) {
    return a - b;
}
//сортировка по убыванию
function sortN2(a,b) {
    return b - a;
}

arrOne = arrOrig.slice();
arrTwo = arrOrig.slice();

console.log('Result:');

console.time("n1");
arrOne.sort(sortN1);
console.timeEnd("n1");

console.time("n2");
arrTwo.sort(sortN2);
console.timeEnd("n2");

console.log("i: orig one two");
for(var i = 0; i <size; i++){
    console.log(i,arrOrig[i], arrOne[i], arrTwo[i]);
    //console.log("%d: %d %d %d", i,  arrOrig[i], arrOne[i], arrTwo[i]);
}

console.log('Summ:');
//нахождение суммы елементов массива
function arraySum(array) {
    var sum=0;
    for(var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(arraySum(arrOne));

/*Транспортна задача*/
console.log('Transport task')
var matrixA = [60, 80, 100];
var matrixB = [40, 60, 80, 60];
var matrixC = [ [1, 3, 4, 2],[4, 5, 8, 3],[2, 3, 6, 7] ];
var matrixVoidD =[];
for (var i = 0; i < matrixA.length; i++) {
    matrixVoidD.push( [] );
    for (var j = 0; j < matrixB.length; j++) {
        if (matrixA[i] >= matrixB[j]) {
            matrixVoidD[i][j] =  matrixB[j];
            matrixA[i] = matrixA[i] - matrixB[j];
            matrixB[j] = 0;
        } else if (matrixB[j] > matrixA[i]){
            matrixVoidD[i][j] =  matrixA[i];
            matrixB[j] = matrixB[j] - matrixA[i];
            matrixA[i] = 0;
        } else{
            matrixVoidD[i][j] = 0;
        }
        matrixVoidD[i].push( matrixVoidD[i][j] );
        matrixVoidD[i].pop( matrixVoidD[i][j] );
    }
    console.log( matrixVoidD[i] );
}