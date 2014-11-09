.import "db.js" as Database

var buttons_arr = ['redbutton', 'greenbutton', 'yellowbutton', 'purplebutton'];
var status_messages = ['STATUS: Game started', 'WRONG BUTTON! GAME OVER!', 'TOO SLOW! GAME OVER!'];
var timerdefault = 1000; // default: 1000
var active_button_no = 0;
var game_running = false;
var hit = 0;
var score = 0;
var iteration = 0;
var score_set = false;

function setAllButtonsInactive(){
    redbutton.highlighted = false;
    greenbutton.highlighted = false;
    yellowbutton.highlighted = false;
    purplebutton.highlighted = false;

    redbutton.update();
    greenbutton.update();
    yellowbutton.update();
    purplebutton.update();
}

function setButtonsReady(readyval){
    var buttonopacity = 0.4;
    if(readyval === 1){
        buttonopacity = 1.0;
    }
    redbutton.opacity = buttonopacity;
    greenbutton.opacity = buttonopacity;
    yellowbutton.opacity = buttonopacity;
    purplebutton.opacity = buttonopacity;
    redbutton.update();
    greenbutton.update();
    yellowbutton.update();
    purplebutton.update();
}

function reset(){
    // Game over: reset game
    game_running = false;
    gametimer.stop();
    gametimer.interval = timerdefault;
    setAllButtonsInactive();
    hit = 0;
    active_button_no = 0;
    iteration = 0;

    // New highscore?
    if(parseInt(score) > parseInt(Database.getHighScore())){
        setHighScore(score);
    }
}

// Set button inactive
function setButtonInactive(button_no){
    if(button_no === 1){
        redbutton.highlighted = false;
        redbutton.update();
    }
    else if(button_no === 2){
        greenbutton.highlighted = false;
        //greenbutton.update();
    }
    else if(button_no === 3){
        yellowbutton.highlighted = false;
        //yellowbutton.update();
    }
    else if(button_no === 4){
        purplebutton.highlighted = false;
        //purplebutton.update();
    }
}

// Check if clicked button is active: HIT OR MISS?
function check(clicked_button_no){
    // HIT
    if(game_running === true){
        if(active_button_no === clicked_button_no){
            hit = 1;

            setButtonInactive(clicked_button_no)

            if(score_set === false && game_running === true){
                score_set = true;
                score++;
            }
            scorelabel.text = 'Score: '+score;
        }
        else{
            // GAME OVER, MISS
            reset();
            setButtonsReady(0);
            pulldown.visible = true;
            gamestatus.text = status_messages[1];
            score = 0;
        }
    }
}

// Start a new game
function newGame(){
    reset();
    setButtonsReady(1);
    score = 0;
    scorelabel.text = "Score: 0";
    gamestatus.text = status_messages[0];
    gametimer.start();
    pulldown.visible = false;
    game_running = true;
}

// Set a new random button as active
function setButtonActive(){
    var rand = buttons_arr[Math.floor(Math.random() * buttons_arr.length)];
    console.log(rand);
    // Increase speed?
    if(iteration === 13)
    {
        iteration = 0;

        // Speed up game...but set a limit
        if(gametimer.interval > 600){
            gametimer.interval = gametimer.interval * 0.9;
        }
        // Ludicrous speed...stop timer before it gets worse (technically, the game should not be able to reach this point)
        if(gametimer.interval < 10){
            gametimer.stop();
            gametimer.interval = timerdefault;
        }
    }
    setButtonInactive(active_button_no);
    score_set = false;

    // GAME OVER, TOO SLOW
    // Player didn't hit the active button in time. Game over.
    if(iteration !== 0 && hit === 0){
        reset();
        setButtonsReady(0);

        gamestatus.text = status_messages[2];
    }

    if(rand === "redbutton"){
        redbutton.highlighted = true;
        redbutton.icon.source = "image://myIcons/button_red_active";
        //redbutton.update();
        active_button_no = 1;
    }
    else if(rand === "greenbutton"){
        greenbutton.highlighted = true;
        greenbutton.icon.source = "image://myIcons/button_green_active";
        //greenbutton.update();
        active_button_no = 2;
    }
    else if(rand === "yellowbutton"){
        yellowbutton.highlighted = true;
        yellowbutton.icon.source = "image://myIcons/button_yellow_active";
        //yellowbutton.update();
        active_button_no = 3;
    }
    else if(rand === "purplebutton"){
        purplebutton.highlighted = true;
        purplebutton.icon.source = "image://myIcons/button_purple_active";
        //purplebutton.update();
        active_button_no = 4;
    }
    iteration++;
    hit = 0;
}

function showHighScore(){
    highscorelabel.text = 'Highscore: '+Database.getHighScore();
}
function setHighScore(new_highscore){
    Database.insertHighScore(new_highscore);
    highscorelabel.text = 'Highscore: '+Database.getHighScore();
}
function resetHighScore(){
    Database.deleteHighScore();
    highscorelabel.text = 'Highscore: '+Database.getHighScore();
}
