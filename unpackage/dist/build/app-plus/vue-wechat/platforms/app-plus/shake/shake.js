
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([[2,1],".",[1],"root{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-position:50%;background-repeat:no-repeat}\n.",[1],"shake-down,.",[1],"shake-up{height:50%;overflow:hidden;transition:all .5s ease-in-out;-webkit-transition:all .5s ease-in-out;background:#333}\n.",[1],"up{transform:translateY(-50%);-webkit-transform:translateY(-50%)}\n.",[1],"down{transform:translateY(50%);-webkit-transform:translateY(50%)}\nwx-image{height:100%;width:100%}\n",],undefined,{path:"./platforms/app-plus/shake/shake.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./platforms/app-plus/shake/shake.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      