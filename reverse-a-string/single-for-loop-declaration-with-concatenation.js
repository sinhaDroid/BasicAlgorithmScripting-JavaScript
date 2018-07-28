function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) {}
    return o;
}