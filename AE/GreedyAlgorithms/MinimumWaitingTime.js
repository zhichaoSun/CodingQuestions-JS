/*
 * Minimum Waiting Time
 *
 * You're given a non-empty array of positive integers representing the amounts of time
 * that specific queries take to execute. Only one query can be executed at a time,
 * but the queries can be executed in any order.
 *
 * A query's waiting time is defined as the amount of time that it must wait before its execution starts.
 * In other words, if a query is executed second, then its waiting time is the duration of the first query;
 * if a query is executed third, then its waiting time is the sum of the durations of the first two queries.
 *
 * Write a function that returns the minimum amount of total waiting time for all of the queries.
 *
 * Note: you're allowed to mutate the input array.
 *
 * eg:
 *   Input:
 *     queries = [3, 2, 1, 2, 6]
 *   Output:
 *     17
 */


/***
 *
 * O(N*log(N)) time complexity
 * O(1)
 *
 * @param queries
 * @returns {number} waiting time
 *
 */
function minimumWaitingTime(queries) {
    //the sorting will take O(N*log(N)) time
    queries.sort((a, b) => a - b)

    let ans = 0, factor = queries.length - 1
    for (const query of queries) {
        ans += query * factor--
    }

    return ans;
}