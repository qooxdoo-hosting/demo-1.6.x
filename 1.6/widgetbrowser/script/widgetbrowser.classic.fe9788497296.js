qx.$$packageData['64']={"locales":{},"resources":{"widgetbrowser/people.json":"widgetbrowser"},"translations":{}};
qx.Part.$$notifyLoad("64", function() {
(function(){var f="List (virtual)",e="List",d="widgetbrowser.pages.List",c="List (virtual, grouped)";
qx.Class.define(d,{extend:widgetbrowser.pages.AbstractPage,construct:function(){widgetbrowser.pages.AbstractPage.call(this);
this.__ju=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));
this.__LF=qx.util.ResourceManager.getInstance().toUri("widgetbrowser/people.json");
this.add(this.__ju);
this.initWidgets();
},members:{__ju:null,__LF:null,initWidgets:function(){var g=this._widgets;
var k=new qx.ui.basic.Label(e);
this.__ju.add(k,{row:0,column:0});
var i=this.__LG();
this.__ju.add(i,{row:1,column:0});
g.push(i);
k=new qx.ui.basic.Label(f);
this.__ju.add(k,{row:0,column:1});
var h=this.__LH();
this.__ju.add(h,{row:1,column:1});
g.push(h);
k=new qx.ui.basic.Label(c);
this.__ju.add(k,{row:0,column:2});
var j=this.__LI();
this.__ju.add(j,{row:1,column:2});
g.push(j);
},__LG:function(){var m=new qx.ui.form.List();
m.setWidth(150);
var l=new qx.io.request.Xhr(this.__LF);
l.setParser("json");
l.addListener("success",function(){var n=l.getResponse().people;
n.forEach(function(o){var p=new qx.ui.form.ListItem(""+o.lastname+", "+o.firstname);
p.setHeight(25);
m.add(p);
});
});
l.send();
return m;
},__LH:function(){var q=new qx.ui.list.List().set({height:280,width:150,labelPath:"firstname",labelOptions:{converter:function(r,s){return s?s.getLastname()+", "+r:"no model...";
}}});
this.__LJ(q);
return q;
},__LI:function(){var t=this.__LH();
var u={sorter:function(a,b){a=a.getLastname();
b=b.getLastname();
return a>b?1:a<b?-1:0;
},group:function(v){return v.getLastname().charAt(0).toUpperCase();
}};
t.setDelegate(u);
return t;
},__LJ:function(w){var x=new qx.data.store.Json(this.__LF);
x.bind("model.people",w,"model");
}}});
})();

});