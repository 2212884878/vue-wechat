
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],"wx-view{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}\n.",[1],"title{margin:",[0,80]," 0 ",[0,20],"}\n",],undefined,{path:"./pages/template/countdown/countdown.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/template/countdown/countdown.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      