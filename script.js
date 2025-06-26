let arr = [6,8,0,1,3]
let stack = []
let ans = []
for(let i = arr.length-1; i>=0; i--){
    if(stack.length !=0 && arr[i]>stack[stack.length-1]){
        stack.pop()
    }
    if(stack.length == 0) ans[i] = -1
    else ans[i] = stack[stack.length-1]

    stack.push(arr[i])
}
console.log(ans)