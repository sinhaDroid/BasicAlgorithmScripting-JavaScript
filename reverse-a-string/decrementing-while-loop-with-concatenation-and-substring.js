function reverse(s) {
    var i = s.length,
        o = '';
    while (i > 0) {
        o += s.substring(i - 1, i);
        i--;
    }
    return o;
}
