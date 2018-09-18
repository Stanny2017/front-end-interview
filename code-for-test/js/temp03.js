function plus (n) {
    var p = function (m) {
      return plus(n + m);
    }
  
    p.toString = function () {
      return n;
    }
  
    return p;
}

plus(1)(2)(3).toString()
 