#ChitChat (formerly WhatsMac)
> This is a modified Version of ChitChat from [stonesam92](https://github.com/stonesam92/ChitChat) and was created, because he is no longer active. This project is currently on hiatus, but may be rebooted if there is enough interest so please comment on [#43](https://github.com/Neo11/ChitChat/issues/43).

A Mac app wrapper around WhatsApp's web client, [WhatsApp Web](https://web.whatsapp.com).

The latest version is available [here](https://github.com/Neo11/ChitChat/releases/latest).

Requires OSX 10.10 Yosemite and a WhatsApp Web compatible device.

![WhatsMac Screenshot](http://i.imgur.com/riXrTvx.jpg "WhatsMac Screenshot")

> Disclaimer: This is NOT an official WhatsApp Product, it is only a hobby project created by the contributors

Allows you to receive notification center notifications for new messages, and adds some useful keyboard shortcuts:

| Feature                                        | Shortcut  |
|------------------------------------------------|-----------|
| Start a new conversation                       | ⌘N        |
| Search past conversations                      | ⌘F        |
| Jump to your 1st .. 9th most recent converation| ⌘1 .. ⌘9  |
| Scroll through your conversations              | ↑ and ↓   |

Inspired by, and in small part based on, [Messenger for Mac](http://fbmacmessenger.rsms.me/), created by [Rasmus Andersson](https://twitter.com/rsms). ChitChat uses some code from this project.

##Smileys

Text2Emoji converts the following text into Smileys. Thanks to [Paul](https://github.com/c-o-m-m-a-n-d-e-r)

|ASCII        |Unicode|
|-------------|-------|
|:), :-)      |😊      |
|;), ;-)      |😉      |
|:(, :-(      |😟      |
|B),  B-)     |😎      |
|:D, :-D      |😃      |
|D:, D-:      |😩      |
|:d, :-d      |😋      |
|;p, ;-p      |😜      |
|:p, :-p      |😛      |
|:o, :-o      |😮      |
|:s, :-s      |😖      |
|:x, :-x      |😶      |
|:\|, :-\|      |😐      |
|:/, :-/      |😕      |
|:[, :-[      |😳      |
|:>, :->      |😏      |
|:@, :-@      |😷      |
|:*, :-*      |😘      |
|:!, :-!      |😬      |
|o:), o:-)    |😇      |
|>:-o         |😠      |
|>:-)         |😈      |
|:3, :-3      |😺      |
|(y),  (Y)    |👍      |
|(n),  (N)    |👎      |
|<3           |❤️     |

##Feature Support

Most features of WhatsApp Web are currently supported, and support for the remainder is being actively developed:

| Feature                                 | Working?  |
|-----------------------------------------|-----------|
| Text chat                               | YES       |
| Attached media viewing                  | YES       |
| Attached media downloading              | YES       |
| Notification center notifications       | YES       |
| Media uploading                         | NO\*      |
| Media recording (using camera + mic.)   | NO        |

\*Media uploading **is** supported when dragging the image/video file into the app's window. Uploading using the upload button is currently not supported, since WKWebView provides no easy mechanism for using `<input type="file">` tags.

##Contributing

To develop for ChitChat:
* Fork the repository
* Clone the repository with ```git clone git@github.com:<USERNAME>/ChitChat.git```, replace <USERNAME> with your username
* Download and install Xcode if you don't have it already
* You will need to change the development team (```DevelopmentTeam =```) by logging in with your Apple account (Xcode will prompt you when you try to debug), so don't include the project settings in your commit
* Use the issue number in the commmit message if there is one, e.g. ```git commit -am "#27 Fix drawer not opening"```
* Generate a pull request on GitHub and someone will look at it

##License


Copyright (c) 2015 Authors of the source code of this project

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

##Note

This project does **not** attempt to reverse engineer the WhatsApp API or attempt to reimplement any part of the WhatsApp client's communications with the WhatsApp servers.

Any communication between the user and WhatsApp servers is handled by WhatsApp Web itself; this is merely a native wrapper for WhatsApp Web, more akin to a clone of Safari than of any WhatsApp software.
