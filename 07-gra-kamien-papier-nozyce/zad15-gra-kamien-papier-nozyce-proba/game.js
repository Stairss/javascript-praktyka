const gameResult = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    playerHand: "",
    aiHand: "",
}
const hands = document.querySelectorAll('.select img');
const btn = document.querySelector('.start');

const playerChoice = function () {
    game.playerHand = this.dataset.option

    hands.forEach(hand => hand.style.boxShadow = '')
    this.style.boxShadow = '0 0 0 4px red';
}
const aiChoice = function () {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;

}
const checkResult = function (player, ai) {

    if (player === ai) {
        return 'draw';

    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return 'win';

    } else {
        return 'loss';

    }


}
const publishResult = function (player, ai, result) {
    const playerHand = document.querySelector('[data-summary="your-choice"]');
    const aiHand = document.querySelector('[data-summary="ai-choice"]');
    const winner = document.querySelector('[data-summary="who-win"]');
    player = playerHand.textContent;
    ai = aiHand.textContent;
    document.querySelector('p.numbers span').textContent = ++gameResult.numbers;
    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameResult.wins;
        winner.textContent = "Ty wygrałeś!!!"
        winner.style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameResult.losses;
        winner.textContent = "Komputer wygrał :((("
        winner.style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameResult.draws;
        winner.textContent = "Remis"
        winner.style.color = "grey";
    }

}
//inicjajca
const startGame = function () {

    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    console.log(gameResult);
    publishResult();





}
hands.forEach((hand) => {
    hand.addEventListener('click', playerChoice);
})
btn.addEventListener('click', startGame);