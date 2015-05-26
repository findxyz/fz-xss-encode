var encodeObj = document.getElementById("encode");
var encodeObjResult = document.getElementById("encode_result");
var decodeObj = document.getElementById("decode");
var decodeObjResult = document.getElementById("decode_result");
var dianji = document.getElementsByTagName("button");
for (var i = 0; i < dianji.length; i++) {
    dianji[i].onclick = function () {
        var type = this.getAttribute("leixing");
        if (type == "jiami") {
            jiami(this.name);
        }
        if (type == "jiemi") {
            jiemi(this.name)
        }
    }
}

function jiami(s) {
    //把传入的值 赋给变量 encode
    var encode = s;
    //if选择的url编码 则进入url编码 代码块
    if (encode == "url") {
        try {
            encodeObjResult.value = encodeURIComponent(encodeObj.value);
        }
        catch (e) {
            alert(e);
        }
    }

    //如果选择的html实体编码十进制
    if (encode == "html10") {
        try {
            var jieguo = "";
            for (var i = 0; i < encodeObj.value.length; i++) {
                jieguo += "&#" + encodeObj.value.charCodeAt(i) + ";";
            }
            encodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果选择的html实体编码十六进制
    if (encode == "html16") {
        try {
            var jieguo = "";
            for (var i = 0; i < encodeObj.value.length; i++) {
                jieguo += "&#x" + encodeObj.value.charCodeAt(i).toString(16) + ";";
            }
            encodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果选择的编码是js unicode编码
    if (encode == "jsunicode") {
        try {
            var jieguo = "";
            for (var i = 0; i < encodeObj.value.length; i++) {
                jieguo += "\\u00" + encodeObj.value.charCodeAt(i).toString(16);
            }
            encodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果选择的是js16进制编码
    if (encode == "js16") {
        try {
            var jieguo = "";
            for (var i = 0; i < encodeObj.value.length; i++) {
                jieguo += "\\x" + encodeObj.value.charCodeAt(i).toString(16);
            }
            encodeObjResult.value = jieguo;
        }
        catch (e) {

            alert(e);
        }
    }

    //如果选择的是js8进制编码
    if (encode == "js8") {
        try {
            var jieguo = "";
            for (var i = 0; i < encodeObj.value.length; i++) {
                jieguo += "\\" + encodeObj.value.charCodeAt(i).toString(8);
            }
            encodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果选择的是base64编码
    if (encode == "base64") {
        try {
            encodeObjResult.value = btoa(encodeObj.value);
        }
        catch (e) {
            alert(e.message);
        }
    }
}

//以上是加密函数
//以下是解密函数

function jiemi(s) {
    //创建一个变量接受传过来的解码方式
    var decode = s;
    //如果解码方式等于URL
    if (decode == "url") {
        try {
            decodeObjResult.value = decodeURIComponent(decodeObj.value);
        }
        catch (e) {
            alert(e);
        }
    }

    //如果解码方式是html实体编码十进制
    if (decode == "html10") {
        try {
            var jieguo = "";
            var jieguoary = decodeObj.value.split("&#");
            for (var i = 1; i < jieguoary.length; i++) {
                jieguo += String.fromCharCode(parseInt(jieguoary[i].replace(';', '')));
            }
            decodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果解码方式是html实体编码十六进制
    if (decode == "html16") {
        try {
            var jieguo = "";
            var jieguoary = decodeObj.value.split("&#x");
            for (var i = 1; i < jieguoary.length; i++) {
                jieguo += String.fromCharCode(parseInt(jieguoary[i], 16));
            }
            decodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果解码方式是js unicode编码
    if (decode == "jsunicode") {
        try {
            var jieguo = "";
            var jieguoary = decodeObj.value.split("\\u00");
            for (var i = 1; i < jieguoary.length; i++) {
                jieguo += String.fromCharCode(parseInt(jieguoary[i], 16));
            }
            decodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e)
        }
    }

    //如果解码方式是js16进制编码
    if (decode == "js16") {
        try {
            var jieguo = "";
            var jieguoary = decodeObj.value.split("\\x");
            for (var i = 1; i < jieguoary.length; i++) {
                jieguo += String.fromCharCode(parseInt(jieguoary[i], 16));
            }
            decodeObjResult.value = jieguo;
        }
        catch (e) {
            alert(e);
        }
    }

    //如果解码方式是js8进制编码
    if (decode == "js8") {
        try {
            var jieguo = "";
            var jieguoary = decodeObj.value.split("\\");
            for (var i = 1; i < jieguoary.length; i++) {
                jieguo += String.fromCharCode(parseInt(jieguoary[i], 8));
            }
            decodeObjResult.value = jieguo;
        }
        catch (e) {
            alert("e");
        }
    }


    //如果解码方式是base64编码
    if (decode == "base64") {
        try {
            decodeObjResult.value = atob(decodeObj.value);
        }
        catch (e) {
            alert("e");
        }
    }
}

