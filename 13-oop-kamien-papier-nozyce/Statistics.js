class Statistics {
    constructor() {
        this.gameResults = [];
    }
    addGameToStats(win, bid) {
        let gameResult = {
            win,
            bid
        }
        // console.log(gameResult);
        this.gameResults.push(gameResult)

    }
    showGameStats() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length
        let losses = this.gameResults.filter(result => !result.win).length
        // console.log(games, wins, losses);

        return [games, wins, losses]
    }
}