/*
 The Fibonacci sequence is defined as follows: 
 the first number of the sequence is 0, the second number is 1,
 and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. 
 
 Write a function that takes in an integer n and returns the nth Fibonacci number.

 */

export function getNthFib(n) {
	if(n == 0) return 0
	if(n == 1) return 0
	if(n == 2) return 1
	
	return getNthFib(n-1) + getNthFib(n-2)
}

export function getNthFib2(n) {
	let lastTwoNum = [0, 1]
    let count = 3
    while(count <= n) {
        let nextNum = lastTwoNum[0] + lastTwoNum[1]
        lastTwoNum[0] = lastTwoNum[1]
        lastTwoNum[1] = nextNum
        count++
    }
    return n > 1 ? lastTwoNum[1] : lastTwoNum[0]
}

