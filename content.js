console.log('Harmonia');

document.addEventListener("click", function () {
  let element = event.target;
  let xpath = getXpath(element);
  console.log('Hrmonia Log', location.href);
  console.log('Hrmonia log', xpath);

  // var result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  // result.singleNodeValue.click();
});

// ref: https://qiita.com/narikei/items/fb62b543ca386fcee211
function getXpath(element) {
  if (element && element.parentNode) {
    var xpath = getXpath(element.parentNode) + '/' + element.tagName;
    var s = [];

    for (var i = 0; i < element.parentNode.childNodes.length; i++) {
      var e = element.parentNode.childNodes[i];
      if (e.tagName == element.tagName) {
        s.push(e);
      }
    }

    if (1 < s.length) {
      for (var i = 0; i < s.length; i++) {
        if (s[i] === element) {
          xpath += '[' + (i + 1) + ']';
          break;
        }
      }
    }

    return xpath.toLowerCase();
  } else {
    return '';
  }
}