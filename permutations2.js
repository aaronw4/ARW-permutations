var permute = function(nums) {
    let perms = []

    function getPerms(newArr, oldArr) {
        if (oldArr.length === 1) {
            let newPerm = newArr.concat(oldArr)
            perms.push(newPerm)
        } else {
            for (index in oldArr) {
                if (oldArr[index] === oldArr[index-1]) {
                    continue
                } else {
                    let newArr2 = [...newArr]
                    let oldArr2 = [...oldArr]
                    newArr2.push(oldArr[index])
                    oldArr2.splice(index, 1)
                    getPerms(newArr2, oldArr2)
                }
            }
        }
    }

    getPerms([], nums.sort((x,y) => x-y))

    return perms
};

console.log(permute([1,2,1]))