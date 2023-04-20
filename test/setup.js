import { JSDOM } from "jsdom"

function setUpDomEnvironment() {
    const jsdom = new JSDOM("<!doctype html><html><body></body></html>", {
        url: "http://localhost/",
    })
    const { window } = jsdom

    global.window = window
    global.document = window.document
    global.navigator = {
        userAgent: "node.js",
    }
}

setUpDomEnvironment()
