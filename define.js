var LAppDefine = {
   
    //这里配置canvsa元素的id
    CANVAS_ID: "live2d",

    //是否允许拖拽，默认为true
    IS_DRAGABLE: true,

    //绑定按钮元素id
    BUTTON_ID: "Change",

    TEXURE_BUTTON_ID: "texure",

};


this.canvas = document.getElementById(LAppDefine.CANVAS_ID);
if (this.canvas.addEventListener) {
    this.canvas.addEventListener("click", mouseEvent, false);
    this.canvas.addEventListener("mousedown", mouseEvent, false);
    this.canvas.addEventListener("mouseup", mouseEvent, false);
    this.canvas.addEventListener("mousemove", mouseEvent, false);
}

var isDragging = false;
var mouseOffsetx = 0;
var mouseOffsety = 0;
function mouseEvent(e) {
    e.preventDefault();
    if (e.type == "mousedown") {
        if ("button" in e && e.button != 0){
            return;
        }
        isDragging = true;
        mouseOffsetx = e.pageX - document.getElementById(LAppDefine.CANVAS_ID).offsetLeft;
        mouseOffsety = e.pageY - document.getElementById(LAppDefine.CANVAS_ID).offsetTop;
    } else if (e.type == "mousemove") {
        if(isDragging == true) {
            var movex = e.pageX - mouseOffsetx;
            var movey = e.pageY - mouseOffsety;
            if(movex > window.innerWidth)
                movex = window.innerWidth - document.getElementById(LAppDefine.CANVAS_ID).width;
            if(movey > window.innerHeight - document.getElementById(LAppDefine.CANVAS_ID).height)
                movey = window.innerHeight - document.getElementById(LAppDefine.CANVAS_ID).height;
            if(movey < 0) movey = 0;
            if(LAppDefine.IS_DRAGABLE) {
                document.getElementById(LAppDefine.CANVAS_ID).style.left = movex + "px";
                document.getElementById(LAppDefine.CANVAS_ID).style.top = movey + "px";
            }
        }
    } else if (e.type == "mouseup") {
        if ("button" in e && e.button != 0) return;
        isDragging = false;
    }
}
