(function(){
 function toType(x){var s=Stringfy(x);return s.slice(s.indexOf('\u0020')+1,-1).toLowerCase();};
 function isFunction(x){return Stringfy(x)==='function';};


 var w=window,
 e=w.Function.prototype,
 Call=e.bind.bind(e.call),
 O=w.Object,
 Stringfy=Call((e=O.prototype).toString);

 O.defineProperty(e,'toType',{enumerable:true,value:function(){return Stringfy(this);}});

})();
