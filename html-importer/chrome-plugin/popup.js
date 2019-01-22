// Generated by CoffeeScript 1.10.0
(function() {
  var getCurrentTabUrl;

  getCurrentTabUrl = function(callback) {
    return chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function(tabs) {
      var url;
      url = tabs[0].url;
      console.assert(typeof url === 'string', 'tab.url should be a string');
      return callback(url);
    });
  };

  document.addEventListener('DOMContentLoaded', function() {
    chrome.windows.update(chrome.windows.WINDOW_ID_CURRENT, {
      width: 970
    });
    return chrome.tabs.executeScript(null, {
      file: "vendor/jquery-2.1.4.js"
    }, function() {
      return chrome.tabs.executeScript(null, {
        file: "vendor/underscore-min.js"
      }, function() {
        return chrome.tabs.executeScript(null, {
          file: "reader.js"
        });
      });
    });
  });

  $('.output').text("loading...");

  chrome.extension.onMessage.addListener(function(request, sender, response) {
    $('#url').val(request.url);
    $('.output').text(JSON.stringify(request, null, 2));
    return $.ajax({
      method: "POST",
      url: "http://localhost:9000/pages",
      data: JSON.stringify(request),
      contentType: "application/json"
    });
  });

}).call(this);

//# sourceMappingURL=popup.js.map