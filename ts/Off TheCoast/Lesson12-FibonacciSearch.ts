export default[
    function<T>(arr:T[],target:T):number{
        function fibonacci():number[]{
            const fib:number[] =[]
            fib[0]=1
            fib[1]=1
            for(let i =2,length=arr.length;i<length;++i){
               fib[i]=fib[i-2]+fib[i-1]
            }
            return fib
        }
        let left = 0,right = arr.length,length=arr.length,k=0,mid=0
        const fib = fibonacci()
        /**
         * //这里的f[k]是arr距离斐波那契数列最近的数值，为什么-1，为了符合数组特性(数组最大元素下标是数组长度-1
         */
        while(length>fib[k]-1){
            ++k
        }
        const temp = arr.concat()
        for(let i = length;i<fib[k]-1;++i ){
            temp[i]=arr[i-1]
        }
        while(left<=right){
            mid = left + fib[k-1]-1
            if(temp[mid]>target){
                right=mid-1
                --k
            }else if(temp[mid]<target){
                left = mid+1
                k-=2
            }else{
                 if(mid<length){
                    return mid
                 }else{
                     return length-1
                 }
            }
        }
        return -1
    }
]