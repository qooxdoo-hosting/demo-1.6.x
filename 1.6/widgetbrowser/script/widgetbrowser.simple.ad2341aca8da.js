qx.$$packageData['34']={"locales":{},"resources":{},"translations":{}};
qx.Part.$$notifyLoad("34", function() {
(function(){var k="knob",j="horizontal",i="vertical",h="Integer",g="hovered",f="left",d="top",c="mouseup",b="pressed",a="px",X="changeValue",W="interval",V="mousemove",U="resize",T="slider",S="mousedown",R="PageUp",Q="mouseout",P="x",O='qx.event.type.Data',r="Left",s="Down",p="Up",q="dblclick",n="qx.ui.form.Slider",o="PageDown",l="mousewheel",m="_applyValue",u="_applyKnobFactor",v="End",C="height",A="y",G="Right",E="width",K="_applyOrientation",I="Home",x="mouseover",N="floor",M="_applyMinimum",L="click",w="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()",y="keypress",z="ceil",B="losecapture",D="contextmenu",F="_applyMaximum",H="Number",J="changeMaximum",t="changeMinimum";
qx.Class.define(n,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(Y){qx.ui.core.Widget.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(y,this._onKeyPress);
this.addListener(l,this._onMouseWheel);
this.addListener(S,this._onMouseDown);
this.addListener(c,this._onMouseUp);
this.addListener(B,this._onMouseUp);
this.addListener(U,this._onUpdate);
this.addListener(D,this._onStopEvent);
this.addListener(L,this._onStopEvent);
this.addListener(q,this._onStopEvent);
if(Y!=null){this.setOrientation(Y);
}else{this.initOrientation();
}},events:{changeValue:O},properties:{appearance:{refine:true,init:T},focusable:{refine:true,init:true},orientation:{check:[j,i],init:j,apply:K},value:{check:w,init:0,apply:m,nullable:true},minimum:{check:h,init:0,apply:M,event:t},maximum:{check:h,init:100,apply:F,event:J},singleStep:{check:h,init:1},pageStep:{check:h,init:10},knobFactor:{check:H,apply:u,nullable:true}},members:{__CN:null,__CO:null,__CP:null,__CQ:null,__CR:null,__CS:null,__CT:null,__CU:null,__lh:null,__CV:null,__CW:null,__CX:null,_forwardStates:{invalid:true},_createChildControlImpl:function(ba,bb){var bc;

switch(ba){case k:bc=new qx.ui.core.Widget();
bc.addListener(U,this._onUpdate,this);
bc.addListener(x,this._onMouseOver);
bc.addListener(Q,this._onMouseOut);
this._add(bc);
break;
}return bc||qx.ui.core.Widget.prototype._createChildControlImpl.call(this,ba);
},_onMouseOver:function(e){this.addState(g);
},_onMouseOut:function(e){this.removeState(g);
},_onMouseWheel:function(e){var bf=this.getOrientation()===j?P:A;
var be=e.getWheelDelta(bf);
var bd=be>0?1:be<0?-1:0;
this.slideBy(bd*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bh=this.getOrientation()===j;
var bg=bh?r:p;
var forward=bh?G:s;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bg:this.slideBack();
break;
case o:this.slidePageForward();
break;
case R:this.slidePageBack();
break;
case I:this.slideToBegin();
break;
case v:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__CQ){return;
}var bk=this.__mW;
var bi=this.getChildControl(k);
var bj=bk?f:d;
var bm=bk?e.getDocumentLeft():e.getDocumentTop();
var bn=this.__CN=qx.bom.element.Location.get(this.getContentElement().getDomElement())[bj];
var bl=this.__CO=qx.bom.element.Location.get(bi.getContainerElement().getDomElement())[bj];

if(e.getTarget()===bi){this.__CQ=true;

if(!this.__CV){this.__CV=new qx.event.Timer(100);
this.__CV.addListener(W,this._fireValue,this);
}this.__CV.start();
this.__CR=bm+bn-bl;
bi.addState(b);
}else{this.__CS=true;
this.__CT=bm<=bl?-1:1;
this.__Da(e);
this._onInterval();
if(!this.__lh){this.__lh=new qx.event.Timer(100);
this.__lh.addListener(W,this._onInterval,this);
}this.__lh.start();
}this.addListener(V,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__CQ){this.releaseCapture();
delete this.__CQ;
this.__CV.stop();
this._fireValue();
delete this.__CR;
this.getChildControl(k).removeState(b);
if(e.getType()===c){var bp;
var bq;
var bo;

if(this.__mW){bp=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__CN);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[d];
bq=e.getDocumentTop()-(bo+this.getChildControl(k).getBounds().top);
}else{bp=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__CN);
bo=qx.bom.element.Location.get(this.getContentElement().getDomElement())[f];
bq=e.getDocumentLeft()-(bo+this.getChildControl(k).getBounds().left);
}
if(bq<0||bq>this.__CP||bp<0||bp>this.__CP){this.getChildControl(k).removeState(g);
}}}else if(this.__CS){this.__lh.stop();
this.releaseCapture();
delete this.__CS;
delete this.__CT;
delete this.__CU;
}this.removeListener(V,this._onMouseMove);
if(e.getType()===c){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__CQ){var bs=this.__mW?e.getDocumentLeft():e.getDocumentTop();
var br=bs-this.__CR;
this.slideTo(this._positionToValue(br));
}else if(this.__CS){this.__Da(e);
}e.stopPropagation();
},_onInterval:function(e){var bt=this.getValue()+(this.__CT*this.getPageStep());
if(bt<this.getMinimum()){bt=this.getMinimum();
}else if(bt>this.getMaximum()){bt=this.getMaximum();
}var bu=this.__CT==-1;

if((bu&&bt<=this.__CU)||(!bu&&bt>=this.__CU)){bt=this.__CU;
}this.slideTo(bt);
},_onUpdate:function(e){var bw=this.getInnerSize();
var bx=this.getChildControl(k).getBounds();
var bv=this.__mW?E:C;
this._updateKnobSize();
this.__CY=bw[bv]-bx[bv];
this.__CP=bx[bv];
this._updateKnobPosition();
},__mW:false,__CY:0,__Da:function(e){var by=this.__mW;
var bF=by?e.getDocumentLeft():e.getDocumentTop();
var bH=this.__CN;
var bz=this.__CO;
var bJ=this.__CP;
var bG=bF-bH;

if(bF>=bz){bG-=bJ;
}var bD=this._positionToValue(bG);
var bA=this.getMinimum();
var bB=this.getMaximum();

if(bD<bA){bD=bA;
}else if(bD>bB){bD=bB;
}else{var bE=this.getValue();
var bC=this.getPageStep();
var bI=this.__CT<0?N:z;
bD=bE+(Math[bI]((bD-bE)/bC)*bC);
}if(this.__CU==null||(this.__CT==-1&&bD<=this.__CU)||(this.__CT==1&&bD>=this.__CU)){this.__CU=bD;
}},_positionToValue:function(bK){var bL=this.__CY;
if(bL==null||bL==0){return 0;
}var bN=bK/bL;

if(bN<0){bN=0;
}else if(bN>1){bN=1;
}var bM=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(bM*bN);
},_valueToPosition:function(bO){var bP=this.__CY;

if(bP==null){return 0;
}var bQ=this.getMaximum()-this.getMinimum();
if(bQ==0){return 0;
}var bO=bO-this.getMinimum();
var bR=bO/bQ;

if(bR<0){bR=0;
}else if(bR>1){bR=1;
}return Math.round(bP*bR);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(bS){var bT=this.getChildControl(k).getContainerElement();

if(this.__mW){bT.setStyle(f,bS+a,true);
}else{bT.setStyle(d,bS+a,true);
}},_updateKnobSize:function(){var bV=this.getKnobFactor();

if(bV==null){return;
}var bU=this.getInnerSize();

if(bU==null){return;
}if(this.__mW){this.getChildControl(k).setWidth(Math.round(bV*bU.width));
}else{this.getChildControl(k).setHeight(Math.round(bV*bU.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bW){this.slideTo(this.getValue()+bW);
},slideTo:function(bX){if(bX<this.getMinimum()){bX=this.getMinimum();
}else if(bX>this.getMaximum()){bX=this.getMaximum();
}else{bX=this.getMinimum()+Math.round((bX-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(bX);
},_applyOrientation:function(bY,ca){var cb=this.getChildControl(k);
this.__mW=bY===j;
if(this.__mW){this.removeState(i);
cb.removeState(i);
this.addState(j);
cb.addState(j);
cb.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(j);
cb.removeState(j);
this.addState(i);
cb.addState(i);
cb.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(cc,cd){if(cc!=null){this._updateKnobSize();
}else{if(this.__mW){this.getChildControl(k).resetWidth();
}else{this.getChildControl(k).resetHeight();
}}},_applyValue:function(ce,cf){if(ce!=null){this._updateKnobPosition();

if(this.__CQ){this.__CX=[ce,cf];
}else{this.fireEvent(X,qx.event.type.Data,[ce,cf]);
}}else{this.resetValue();
}},_fireValue:function(){if(!this.__CX){return;
}var cg=this.__CX;
this.__CX=null;
this.fireEvent(X,qx.event.type.Data,cg);
},_applyMinimum:function(ch,ci){if(this.getValue()<ch){this.setValue(ch);
}this._updateKnobPosition();
},_applyMaximum:function(cj,ck){if(this.getValue()>cj){this.setValue(cj);
}this._updateKnobPosition();
}}});
})();

});