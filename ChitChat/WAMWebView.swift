//
// Created by Tom Schmidt on 10.02.16.
// Copyright (c) 2016 Tom Schmidt. All rights reserved.
//

import Foundation
import WebKit

class WAMWebView : WKWebView {
    override func performKeyEquivalent(with theEvent:NSEvent) -> Bool {
        let result: Bool = super.performKeyEquivalent(with: theEvent)
        switch theEvent.keyCode {
        case 53, 123, 124:
            return true;
        default:
            return result;
        }
    }
}
