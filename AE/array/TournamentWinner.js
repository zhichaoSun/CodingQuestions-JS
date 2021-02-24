/*
 * Tournament Winner
 *
 * There's an algorithms tournament taking place in which teams of programmers
 * compete against each other to solve algorithmic problems as fast as possible.
 * Teams compete in a round robin, where each team faces off against all other teams.
 * Only two teams compete against each other at a time, and for each competition,
 * one team is designated the home team, while the other team is the away team.
 * In each competition there's always one winner and one loser; there are no ties.
 * A team receives 3 points if it wins and 0 points if it loses.
 * The winner of the tournament is the team that receives the most amount of points.
 *
 * Given an array of pairs representing the teams that have competed against each other
 * and an array containing the results of each competition,
 * write a function that returns the winner of the tournament.
 * The input arrays are named competitions and results, respectively,
 * The competitions array has elements in the form of [homeTeam, awayTeam],
 * where each team is a string of at most 30 characters representing the name of the team.
 * The result array contains information about the winner of each corresponding competition in the competitions array.
 * Specifically, results[i] denotes the winner of competitions[i],
 * where a 1 in the results array means that the home team in the corresponding competition won
 * and a 0 means that the away team won.
 *
 * eg:
 *   Input:
 *     competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
 *     results      = [0, 0, 1]
 *   Output:
 *     Python
 *
 */


/***
 *
 * A very easy-to-implement solution:
 * Using a object to store the teams' names and points (not all, at least won once),
 * then convert to array, sort (O(N*log(N)) time), and finally get the element with max points.
 *
 * O(N*log(N)) time complexity
 * O(K) aux space where K is the number of teams
 *
 * @param competitions
 * @param results
 * @returns {string} the winner
 *
 */
function tournamentWinner(competitions, results) {
    let points = {}

    for(let i = 0; i < competitions.length; i++) {
        if(results[i]) points = {...points,
            [competitions[i][0]]: (points[competitions[i][0]] || 0) + 3
        }
        else points = {...points,
            [competitions[i][1]]: (points[competitions[i][1]] || 0) + 3
        }
    }

    return Object.entries(points).sort((a, b) => b[1] - a[1])[0][0]
}


/***
 *
 * A similar but faster solution, dynamic set the current best during traversing
 *
 * O(N) time complexity
 * O(K) aux space where K is the number of teams
 *
 * @param competitions
 * @param results
 * @returns {string} the winner
 *
 */
function tournamentWinner2(competitions, results) {
    let currBest = "", points = {}

    for(let i = 0; i < competitions.length; i++) {
        const winningTeam = results[i] ? competitions[i][0] : competitions[i][1]
        points = {...points,
            [winningTeam]: (points[winningTeam] || 0) + 3
        }
        if(points[winningTeam] > (points[currBest] || 0)) currBest = winningTeam
    }

    return currBest
}
