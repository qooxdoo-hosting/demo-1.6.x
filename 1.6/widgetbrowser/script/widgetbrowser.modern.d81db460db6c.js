qx.$$packageData['512']={"locales":{},"resources":{"qx/icon/Tango/32/status/dialog-information.png":[32,32,"png","qx"]},"translations":{}};
qx.Part.$$notifyLoad("512", function() {
(function(){var f="icon/32/status/dialog-information.png",e="widgetbrowser.pages.Basic",d="Label",c="middle",b="Image",a="Atom";
qx.Class.define(e,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
var g=this.__LL=new qx.ui.container.Composite(new qx.ui.layout.HBox(10));
this.add(g,{top:0});
this.initWidgets();
},members:{__LL:null,initWidgets:function(){var h=this._widgets;
var k=new qx.ui.basic.Label(d).set({alignY:c});
h.push(k);
this.__LL.add(k);
var i=new qx.ui.basic.Atom(b,f);
h.push(i);
this.__LL.add(i);
var j=new qx.ui.basic.Atom(a,f);
h.push(j);
this.__LL.add(j);
}}});
})();

});