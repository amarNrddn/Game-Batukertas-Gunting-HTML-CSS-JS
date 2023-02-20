class Start{
    constructor(){
        this.playerName = "ANDA"
        this.botName = "amarBot"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption(){
        return this.getBotOption;
    }

    set setBotOption(option){
        this.botOption = option;
    }

    get getPlayerOption(){
        return this.playerOption;
    }

    set setPlayerOption (option) {
        this.playerOption = option;
    }

    botBrain(){
        const option = ["✌", "✊", "🖐"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winClculation() {
        if (this.botOption == "🖐" && this.playerOption=="✌"){
            return this.winner = this.playerName
        }else if (this.botOption == "🖐" && this.playerOption=="✊") {
            return this.winer = this.botName
        }else if (this.botOption == "✊" && this.playerOption=="✌") {
            return this.winer = this.botName
        }else if (this.botOption == "✊" && this.playerOption=="🖐") {
            return this.winer = this.playerName
        }else if (this.botOption == "✌" && this.playerOption=="🖐"){
            return this.winer = this.botName
        }else if (this.botOption == "✌" && this.playerOption=="✊"){
            return this.winer = this.playerName
        } else {
            return this.winer = "SERI"
        }
    }

    matchResult(){
        if (this.winer != "SERI"){
            return `${this.winer} MENANG`;
        }else {
            return `${this.winer} DRAW😒`;
        }
    }
}

function pickOption(params){
    const start = new Start();
    start.playerOption = params;
    start.setBotOption = start.botBrain();
    start.winClculation();

    inGame.textContent = "...."
    result.textContent = "...."
    setTimeout(() => {
        inGame.textContent = `${start.playerOption} VS ${start.setBotOption}`;
        result.textContent = start.matchResult();
    },1500);

   
}  