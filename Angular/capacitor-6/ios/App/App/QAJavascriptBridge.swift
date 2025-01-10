import os.log
import WebKit

class QAJavaScriptBridge: NSObject, WKScriptMessageHandler {
    private let webView: WKWebView
    private let userDefaults = UserDefaults.standard
    private let TRACKING_TAG_FILE_NAME = "cs_tracking_tag.js"
    private let TAG_ID = "tagId"

    init(webView: WKWebView) {
        self.webView = webView
        super.init()
        self.webView.configuration.userContentController.add(self, name: "QAJSBridge")
    }

    deinit {
        self.webView.configuration.userContentController.removeScriptMessageHandler(forName: "QAJSBridge")
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if message.name == "QAJSBridge", let body = message.body as? [String: Any], let action = body["action"] as? String {
            switch action {
            case "deleteLocalTagId":
                deleteLocalTagId()
            case "deleteLocalTrackingTag":
                deleteLocalTrackingTag()
            default:
                break
            }
        }
    }

    func deleteLocalTagId() {
        userDefaults.removeObject(forKey: TAG_ID)
        userDefaults.synchronize()
        os_log("%{public}@", type: OSLogType.info, "CSLIBCAP Local TagId removed")
    }

    func deleteLocalTrackingTag() {
        if deleteLocalFile(fileName: TRACKING_TAG_FILE_NAME) {
            os_log("%{public}@", type: OSLogType.info, "CSLIBCAP Local Tracking Tag removed")
        }
    }

    private func deleteLocalFile(fileName: String) -> Bool {
        guard let fileURL = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask).first?.appendingPathComponent(fileName) else {
            os_log("%{public}@", type: OSLogType.info, "CSLIBCAP No Local Tracking Tag")
            return false
        }

        do {
            try FileManager.default.removeItem(at: fileURL)
            return true
        } catch {
            os_log("%{public}@", type: OSLogType.info, "CSLIBCAP No Local Tracking Tag")
            return false
        }
    }
}
