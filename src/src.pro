TEMPLATE=app
# The name of your app binary (and it's better if you think it is the whole app name as it's referred to many times)
# Must start with "harbour-"
TARGET = harbour-reaction-game

# In the bright future this config line will do a lot of stuff to you
CONFIG += sailfishapp

SOURCES += main.cpp

OTHER_FILES = \
# You DO NOT want .yaml be listed here as Qt Creator's editor is completely not ready for multi package .yaml's
#
# Also Qt Creator as of Nov 2013 will anyway try to rewrite your .yaml whenever you change your .pro
# Well, you will just have to restore .yaml from version control again and again unless you figure out
# how to kill this particular Creator's plugin
#    ../rpm/harbour-reaction-game.yaml \
    ../rpm/harbour-reaction-game.spec \
    qml/main.qml \
    qml/pages/GamePage.qml \
    qml/game.js \
    qml/pages/AboutPage.qml \
    qml/pages/ResetDialog.qml \
    qml/db.js \
    qml/pages/CoverPage.qml

INCLUDEPATH += $$PWD

HEADERS += \
    IconProvider.h
