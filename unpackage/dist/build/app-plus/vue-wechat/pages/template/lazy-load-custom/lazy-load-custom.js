
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"defaul{opacity:1;-webkit-transition:opacity .4s linear;transition:opacity .4s linear}\n.",[1],"defaul.",[1],"loaded{opacity:0}\n",],undefined,{path:"./pages/template/lazy-load-custom/lazy-load-custom.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/lazy-load-custom/lazy-load-custom.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      