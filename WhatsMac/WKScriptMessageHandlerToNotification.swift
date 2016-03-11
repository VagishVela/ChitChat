//
// Created by Tom Schmidt on 10.03.16.
// Copyright (c) 2016 Tom Schmidt. All rights reserved.
//

import Foundation
import WebKit

class WKScriptMessageHandlerToNotification: NSObject, WKScriptMessageHandler {
    let window: NSWindow
    var counter = 0

    init(window: NSWindow) {
        self.window = window
    }

    @available(OSX 10.10, *)
    func userContentController(userContentController: WKUserContentController, didReceiveScriptMessage message: WKScriptMessage) {
        if self.window.mainWindow {
            return
        }
        let messageBody = message.body as! [String]
        let notification = NSUserNotification()
        notification.hasReplyButton = true
        notification.responsePlaceholder = "Reply..."
        notification.title = messageBody[0]
        notification.subtitle = messageBody[1]
        let identifier = "\(messageBody[2]):\(counter)"
        notification.identifier = identifier;
        counter++

        let base64URL = NSURL(string: messageBody[3])
        let imageData = NSData(contentsOfURL: base64URL!)
        let avatar = NSImage(data: imageData!)

        notification.setValue(avatar, forKey: "_identityImage")
        NSUserNotificationCenter.defaultUserNotificationCenter().scheduleNotification(notification)
    }
}
