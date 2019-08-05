//
// Created by Tom Schmidt on 10.02.16.
// Copyright (c) 2016 Tom Schmidt. All rights reserved.
//
import Foundation
import AppKit

class WAMApplication : NSApplication {
    override func sendEvent(_ theEvent: NSEvent) {
        let appDelegate = self.delegate as! AppDelegate
        
        if theEvent.type == .leftMouseUp {
            appDelegate.shouldPropagateMouseUp(theEvent)
            super.sendEvent(theEvent)
            return
        }
        if theEvent.type == .leftMouseDragged {
            appDelegate.shouldPropagateMouseDraggedEvent(theEvent)
            super.sendEvent(theEvent)
            return
        }
        if theEvent.type == .keyDown && theEvent.modifierFlags.contains(NSEvent.ModifierFlags.control) {
            switch theEvent.characters! {
                case "1", "2", "3", "4", "5", "6", "7", "8", "9":
                    appDelegate.setActiveConversationAtIndex(theEvent.characters)
                    return
                default: break
            }
        }
        super.sendEvent(theEvent)
    }
}
