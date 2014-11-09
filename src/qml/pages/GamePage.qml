import QtQuick 2.0
import Sailfish.Silica 1.0

import "../game.js" as Game

Page {
    id: page

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height

        PullDownMenu {

            id: pulldown
            visible: true

            MenuItem {
                text: "About"
                onClicked: pageStack.push(Qt.resolvedUrl("AboutPage.qml"))
            }
            MenuItem {
                text: "Reset highscore"
                onClicked: {
                    var dialog = pageStack.push(Qt.resolvedUrl("ResetDialog.qml"))
                    dialog.accepted.connect(function(){
                        Game.resetHighScore();
                    })
                }
            }
            MenuItem {
                text: "Start a new game"
                onClicked: Game.newGame()
            }
        }

        Column {
            id: column
            width: page.width
            spacing: 20

            Label{
                id: gamestatus
                opacity: 0.9
                font.pixelSize: 20
                text: "STATUS: Not started"
            }
            Label{
                id: scorelabel
                opacity: 0.9
                font.pixelSize: 50
                text: "Score: 0"
            }
            Label{
                id: highscorelabel
                font.pixelSize: 20
                text: 'Highscore: '+Game.showHighScore()
            }

            // Buttons
            IconButton {
                id:redbutton
                opacity: 0.4
                highlighted: false
                height: 150
                anchors.horizontalCenter: parent.horizontalCenter
                icon.source: "image://myIcons/button_red"
                onDownChanged: Game.check(1);
            }
            IconButton {
                id:greenbutton
                opacity: 0.4
                highlighted: false
                height: 150
                anchors.horizontalCenter: parent.horizontalCenter
                icon.source: "image://myIcons/button_green"
                onDownChanged: Game.check(2);
            }
            IconButton {
                id:purplebutton
                opacity: 0.4
                highlighted: false
                height: 150
                anchors.horizontalCenter: parent.horizontalCenter
                icon.source: "image://myIcons/button_purple"
                onDownChanged: Game.check(4);
            }
            IconButton {
                id: yellowbutton
                opacity: 0.4
                highlighted: false
                height: 150
                anchors.horizontalCenter: parent.horizontalCenter
                icon.source: "image://myIcons/button_yellow"
                onDownChanged: Game.check(3);
            }
        }

        Timer{
            id: gametimer
            interval: 1000; running: false; repeat: true;
            onTriggered: Game.setButtonActive();
        }

    }
}
