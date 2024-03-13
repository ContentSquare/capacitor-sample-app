import { ContentsquarePlugin } from "@contentsquare/capacitor-plugin";

// We map the url of the screen with the screen name
const mapScreenURL: Record<string, string> = {
  "/home": "Menu",
  "/privacy": "Privacy",
  "/screen-views": "Screen Views Menu",
  "/transactions": "Transactions",
  "/dynamic-variables": "Dynamic Vars",
  "/screen-views/default": "Screen Default",
  "/screen-views/modal": "Screen Modal",
  "/screen-views/modal/my-modal": "My Modal Screen",
  "/screen-views/slide/one": "Screen Slide 1",
  "/screen-views/slide/two": "Screen Slide 2",
  "/screen-views/slide/three": "Screen Slide 3",
  "/screen-views/tabs/one": "Tab 1",
  "/screen-views/tabs/two": "Tab 2",
  "/screen-views/tabs/three": "Tab 3",
};

// Some URLs could be excluded. For example, "/screen-views/slide" and "/screen-views/tabs" are only containers.
// We only need to send the name of the slide screens or tabs
const excludedURL = ["/screen-views/slide", "/screen-views/tabs"];

/**
 * Send the screen name to the SDK
 * @param visitedUrl url visited
 */
const sendScreenName = (visitedUrl: string) => {
  if (
    visitedUrl !== "/" &&
    excludedURL.filter((url) => visitedUrl === url).length === 0
  ) {
    ContentsquarePlugin.sendScreenName(mapScreenURL[visitedUrl])
      .then((_) =>
        console.log("Screen name " + mapScreenURL[visitedUrl] + " sent")
      )
      .catch((e) => console.log(e));
  }
};

export default sendScreenName;
