import QtQuick 2.0
import Sailfish.Silica 1.0

Page {
    id: page

    SilicaFlickable {
        anchors.fill: parent
        contentHeight: column.height

        Column {
            id: column
            width: page.width
            spacing: Theme.paddingLarge

            PageHeader {
                title: "About"
            }

            Image {
                id: icon
                anchors.topMargin: 5
                anchors.horizontalCenter: parent.horizontalCenter
                source: "../images/harbour-reaction-game.png"
            }
            Label {
                anchors.topMargin: 5
                anchors.horizontalCenter: parent.horizontalCenter
                text: "Version: 1.3"
            }
            Label {
                anchors.topMargin: 5
                anchors.horizontalCenter: parent.horizontalCenter
                text: "Made by: Nash"
            }
            TextArea {
                width: page.width
                readOnly: true
                font.pixelSize: 20
                text: 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
            }
            Label {
                anchors.topMargin: 5
                text: "Source code: https://github.com/Na5h/harbour-reaction-game"

            }

        }
    }

}
