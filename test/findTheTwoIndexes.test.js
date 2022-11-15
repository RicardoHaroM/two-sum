const findTheTwoIndexes = require('../app')

test('Find the index of the two numbers that sum the target',()=>{
    
    const numbers =[1,3,9,15]
    const target = 18

    const result = findTheTwoIndexes(numbers,target);
    console.log(result)
    
    expect(result).toStrictEqual([1,3])
});

test('Find the index of the two numbers that sum the target when we have two equal numbers',()=>{
    
    const numbers =[2,2]
    const target = 4

    const result = findTheTwoIndexes(numbers,target);
    console.log(result)
    
    expect(result).toStrictEqual([0,1])
});

test('Find the index of the two numbers that sum the target when we have negative numbers',()=>{
    
    const numbers =[-4,11,9,15]
    const target = 5

    const result = findTheTwoIndexes(numbers,target);
    console.log(result)
    
    expect(result).toStrictEqual([0,2])
});