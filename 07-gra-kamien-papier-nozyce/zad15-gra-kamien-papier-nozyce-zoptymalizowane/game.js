const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}
const game = {
    playerHand: "",
    aiHand: "",
}
const hands = [...document.querySelectorAll('.select img')];
// piewsza funkcja 
function handSelection() {
    game.playerHand = this.dataset.option
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 20px 4px red';
}

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';

    } else if ((player === "papier" && ai === "kamień") || (player === "kamień" && ai === "nożyczki") || (player === "nożyczki" && ai === "papier")) {
        return 'win';

    } else {
        return 'loss';

    }

}
// publikacja wyniku
function publishResult(player, ai, result) {
    const aiHand = document.querySelector('[data-summary="ai-choice"]');
    const playerHand = document.querySelector('[data-summary="your-choice"]');
    const winner = document.querySelector('[data-summary="who-win"]');
    playerHand.textContent = player;
    aiHand.textContent = ai;


    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        winner.textContent = "Ty wygrałeś!!!"
        winner.style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        winner.textContent = "Komputer wygrał :((("
        winner.style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        winner.textContent = "Remis"
        winner.style.color = "grey";
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
    game.aiHand = "";
}
// funkcja sterująca
function startGame() {
    if (!game.playerHand) {
        return alert("wybierz dłoń!!!! ")
    }
    game.aiHand = aiChoice()
    const gameResult = checkResult(game.playerHand, game.aiHand)
    console.log(gameResult);
    publishResult(game.playerHand, game.aiHand, gameResult)
    endGame()



}
hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)