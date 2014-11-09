import QtQuick 2.0
import Sailfish.Silica 1.0

Dialog {
    id: resetdialog
    height: column.height

    Column {
        id: column
        width: page.width
        anchors.verticalCenter: parent.Center;
        anchors.fill: parent

        DialogHeader {
            acceptText: "Accept"
            cancelText: "Cancel"
        }

        Label {
            anchors.horizontalCenter: parent.horizontalCenter
            text: "Really reset highscore?"
        }
    }
}
