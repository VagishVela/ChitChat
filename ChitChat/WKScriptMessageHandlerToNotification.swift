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
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if self.window.isMainWindow {
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
        counter += 1

        let base64URL = URL(string: messageBody[3])
        let imageData = try? Data(contentsOf: base64URL!)
        let avatar = NSImage(data: imageData!)

        notification.setValue(avatar, forKey: "_identityImage")
        NSUserNotificationCenter.default.scheduleNotification(notification)
    }
}
