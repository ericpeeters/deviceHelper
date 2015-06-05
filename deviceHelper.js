(function(window, document, undefined) {

  window.deviceHelper = {
    isTablet: navigator.userAgent.indexOf('Android') > -1 && navigator.userAgent.indexOf('Mobile') === -1 || !! navigator.userAgent.match(/Tablet|iPad|Playbook/),
    isMobile: navigator.userAgent.indexOf('Android') > -1 && navigator.userAgent.indexOf('Mobile') > -1 || !! navigator.userAgent.match(/iP(hone|od)|BlackBerry|IEMobile/),
    isDesktop: !navigator.userAgent.match(/Tablet|Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile/),
    isModern: navigator.appName == 'Netscape' || navigator.userAgent.indexOf('MSIE 10.0') > -1,
    isLegacy: navigator.appName !== 'Netscape',
    isIE: navigator.userAgent.indexOf('MSIE') > -1,
    isIE7: navigator.userAgent.indexOf('MSIE 7.0') > -1,
    isIE8: navigator.userAgent.indexOf('MSIE 8.0') > -1,
    isIE9: navigator.userAgent.indexOf('MSIE 9.0') > -1,
    isIE10: navigator.userAgent.indexOf('MSIE 10.0') > -1,
    isIE11: !! navigator.userAgent.match(/Trident.*rv[ :]*11\./),
    isFirefox: navigator.userAgent.indexOf('Firefox') > -1,
    isOpera: navigator.userAgent.indexOf('Opera') > -1,
    isChrome: navigator.userAgent.indexOf('Chrome') > -1,
    isAndroid: navigator.userAgent.indexOf('Android') > -1,
    isiOS: !! navigator.userAgent.match(/iP(hone|od|ad)/)
  }

})(window, document);
