// Need to run in windows Shell
/*

Array types:
1) Continuous Array
2) Holey Array

Optimization in jS 3 ways:
1) SMI (Small Integer)
2) Packed Elements
3) Double Elements (float, string, function)


const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; packed smi
const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.15]; packed double elements
const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.15, "7"]; packed elements
const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.15, "7", function(){}]; packed elements
const myArr = [ 1, 2, 3, 4, 5, 6, 7, 8, ,, ]; holey Elements

hasOwnProperty will keep on checking in arr then proptotype then in Object its very costly operation

%DebugPrint(myArr) // {output: 




}


*/
