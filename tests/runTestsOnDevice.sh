#!/bin/bash

# Script for running tests. That's for specifying just one argument in QtCreator's configuration
/usr/bin/tst-harbour-reaction-game -input /usr/share/tst-harbour-reaction-game

# When you'll get some QML components in the main app, you'll need to import them to the test run
# /usr/bin/tst-harbour-reaction-game -input /usr/share/tst-harbour-reaction-game -import /usr/share/harbour-reaction-game/qml/components