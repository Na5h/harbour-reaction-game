.import QtQuick.LocalStorage 2.0 as Sql

function getDatabase(){
    var db = Sql.LocalStorage.openDatabaseSync("ReactionGameDB", "1.0", "Database used to store highscore for the Reaction Game", 10000);
    return db;
}

function getHighScore(){
    var curr_highscore = 0;
    var db = getDatabase();

    db.transaction(
        function(tx){
            tx.executeSql("CREATE TABLE IF NOT EXISTS Highscore(id INT, score INT, PRIMARY KEY(id))");
            var result = tx.executeSql("SELECT * FROM Highscore");
            if(result.rows.length > 0){
                var row = result.rows.item(0);
                curr_highscore = row.score;
            }
        }
    );
    return curr_highscore;
}

function insertHighScore(new_highscore){
    var db = getDatabase();
    db.transaction(
        function(tx){
            tx.executeSql("DROP TABLE IF EXISTS Highscore");
            tx.executeSql("CREATE TABLE IF NOT EXISTS Highscore(id INT, score INT, PRIMARY KEY(id))");
            tx.executeSql("INSERT INTO Highscore VALUES(?, ?)", ['1', new_highscore]);
        }
    );
}

function deleteHighScore(){
    var db = getDatabase();
    db.transaction(
        function(tx){
            tx.executeSql("DROP TABLE IF EXISTS Highscore");
        }
    );
}
