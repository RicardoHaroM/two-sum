const findTheTwoIndexes = function(nums, target) {
    const numsTable={}
    let indexOfTheTwoNumbers=[]

    numsTable[nums[0]]=0;
    
    for(let i =1;i<nums.length;i++){
        
        let desiredNumber = target-nums[i]
        
        if(numsTable.hasOwnProperty(desiredNumber)){
            indexOfTheTwoNumbers.push(numsTable[desiredNumber])
            indexOfTheTwoNumbers.push(i)
            return indexOfTheTwoNumbers
        }

        numsTable[nums[i]]=i;

    }
};

const main = () =>{
    console.log(findTheTwoIndexes([2,7,11,15], 9))
    console.log(findTheTwoIndexes([3,2,4],6))
    console.log(findTheTwoIndexes([3,3],6))
};

main()

module.exports= findTheTwoIndexes;