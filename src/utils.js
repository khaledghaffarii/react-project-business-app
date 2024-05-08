function detectMobileOrTablet() {
  var userAgent = navigator.userAgent.toLowerCase();

  var mobileKeywords = [
    "iphone",
    "ipod",
    "android",
    "blackberry",
    "windows phone",
    "webos",
    "opera mini",
    "iemobile",
  ];

  var tabletKeywords = [
    "ipad pro",
    "ipad air",
    "galaxy tab",
    "surface pro",
    "kindle fire",
    "playbook",
  ];

  var isMobile = mobileKeywords.some(function (keyword) {
    return userAgent.indexOf(keyword) !== -1;
  });

  var isTablet = tabletKeywords.some(function (keyword) {
    return userAgent.indexOf(keyword) !== -1;
  });

  return { isMobile: isMobile, isTablet: isTablet };
}

export { detectMobileOrTablet };
