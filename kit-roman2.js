!(function (t) {
    var e = {};
    function n(o) {
        if (e[o]) return e[o].exports;
        var i = (e[o] = { i: o, l: !1, exports: {} });
        return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: o });
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 18));
})({
    18: function (t, e, n) {
        t.exports = n(19);
    },
    19: function (t, e, n) {
        "use strict";
        n(20);
    },
    20: function (t, e, n) {
        const o = n(21);
        $(document).ready(function () {
            let t = $("input[name=googleInputKeyCode]").val(),
                e = new XMLHttpRequest(),
                n = !1;
            t ||
                ((t = "ne-t-i0-und"),
                console.error('Google Input Key Code not defined. So defaulting to Nepali (ne-t-i0-und). Please specify hidden input: <input type="hidden" name="googleInputKeyCode" value="inputKeyCode(ne-t-i0-und)">')),
                $("#input_tool").on("keydown", function (t) {
                    (function (t) {
                        if (71 === t.which && t.ctrlKey) return t.preventDefault(), !0;
                        return !1;
                    })(t) && (n = !n);
                });
            var i = {};
            $("#input_tool").on("keyup", function (t) {
                8 == t.which &&
                    ($("#input_tool_helper").empty(), n ? $("#input_tool_helper").append("<em>English mode enabled. Press (CTRL + G) to switch back.</em>") : $("#input_tool_helper").append("<em>Suggestion Word Appears Here!</em>"));
            }),
                $("#input_tool").click(function (n) {
                    for (var l = [" ", "\n", "\r", "\t"], u = $(this).val(), p = $(this)[0].selectionStart, r = $(this)[0].selectionEnd; p > 0 && -1 == l.indexOf(u[p]); ) --p;
                    for (++p; r < u.length && -1 == l.indexOf(u[r]); ) ++r;
                    var s = u.substr(p, r - p);
                    if (s) {
                        var c = i[s];
                        void 0 === c && (c = s),
                            o(e, c, t, 4).then(function (t) {
                                t.push(c);
                                let e = "";
                                t.forEach(function (t) {
                                    e += '<button class="btn">' + t + "</button>";
                                }),
                                    $("#input_tool_helper").empty(),
                                    $("#input_tool_helper").append(e),
                                    $(".btn").on("click", function (t) {
                                        let e = $(this).html();
                                        i[e] = c;
                                        var n = u.slice(0, p) + e + u.slice(r);
                                        $("#input_tool").val(n);
                                    });
                            });
                    }
                }),
                $("#input_tool").on("keyup", function (l) {
                    if (n) return $("#input_tool_helper").empty(), void $("#input_tool_helper").append("<em>English mode enabled. Press (CTRL + G) to switch back.</em>");
                    if (32 == l.which || 229 == l.which) {
                        let n = $(this).val().split(" "),
                            l = n[n.length - 2];
                        if (void 0 === l) return;
                        o(e, l, t, 4).then(function (t) {
                            t.push(l);
                            let e = "",
                                o = 0;
                            t.forEach(function (t) {
                                e += '<button class="btn ' + (1 == ++o ? "btn-success" : "") + '">' + t + "</button>";
                            }),
                                $("#input_tool_helper").empty(),
                                $("#input_tool_helper").append(e),
                                $(".btn").on("click", function (t) {
                                    let e = $(this).html();
                                    i[e] = l;
                                    let n = $("#input_tool").val().split(" ");
                                    (n[n.length - 2] = e), (n = n.join(" ")), $("#input_tool").val(n), $(".btn").removeClass("btn-success"), $(this).addClass("btn-success");
                                }),
                                (n[n.length - 2] = t[0]),
                                (n = n.join(" ")),
                                (i[t[0]] = l),
                                $("#input_tool").val(n);
                        });
                    } else $("#input_tool_helper").empty(), n ? $("#input_tool_helper").append("<em>English mode enabled. Press (CTRL + G) to switch back.</em>") : $("#input_tool_helper").append("<em>Suggestion Word Appears Here!</em>");
                });
        });
    },
    21: function (t, e, n) {
        "use strict";
        t.exports = function (t, e, n, o) {
            return new Promise(function (i, l) {
                let u = encodeURI("https://inputtools.google.com/request?text=" + e + "&itc=" + n + "&num=" + o + "&cp=0&cs=1&ie=utf-8&oe=utf-8&app=demopage");
                t.open("GET", u),
                    (t.onreadystatechange = function () {
                        if (t.readyState == t.DONE)
                            if (200 == t.status) {
                                let t = JSON.parse(this.responseText);
                                i(t[1][0][1]);
                            } else l("Rejected status code: " + t.status);
                    }),
                    (t.onerror = function () {
                        l(Error("Network Error"));
                    }),
                    t.send();
            });
        };
    },
});

function replacePeriodWithDanda(textarea) {
    const inputValue = textarea.value;
    const convertedValue = inputValue.replace(/\./g,'।');
    textarea.value = convertedValue;
}





function clearContent()
{
    document.getElementById("input_tool").value='';
	document.getElementById("input_tool").value='';
}



 function copyUnicode(event){
            var copyText = document.getElementById("input_tool");
            doCopying(copyText,event);
        }
        function doCopying(copyText,event){
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");

            //debugger;
            event.target.innerHTML="Copied &#10003;"
            setTimeout(function(){
                event.target.innerHTML="Copy";
            },3000);
        }



