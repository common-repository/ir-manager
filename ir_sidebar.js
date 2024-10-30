var el = wp.element.createElement;
var __ = wp.i18n.__;
var registerPlugin = wp.plugins.registerPlugin;
var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
 
function MyDocumentSettingPlugin() {
  return el(
    PluginDocumentSettingPanel,
    {
      className: 'Ir-manager_panel',
      title: 'Border Style',
      id: 'IR_sidebar',
      icon: 'admin-post',
    },
    __( wp.element.RawHTML( {children: '<div class="row"><label for="IR_borderColor">Select your favorite color:</label><input type="color" class="IR_borderColor" id="IR_borderColor" name="IR_borderColor" value="#808080"></div><div class="row"><label>Select Border Size</label> </div><div class="row"><input type="range" class="IR_borderSize_range" id="IR_borderSize_range" name="IR_borderSize_range" min="0" max="15" value="1"></div><div class="row"><select name="IR_borderName" class="IR_borderName" id="IR_borderName"><option value="solid">Solid</option><option value="dotted">Dotted</option><option value="dashed">Dashed</option><option value="double">Double</option><option value="groove">Groove</option><option value="ridge">Ridge</option><option value="inset">Inset</option><option value="outset">Outset</option></select></div><div class="row"><label>Border Corner</label> </div><div class="row"><table class="borderRadius"><tr><td class="borderRadius_1" onclick="IRBorderRadius(\'1\')"><span></span></td><td class="borderRadius_2" onclick="IRBorderRadius(\'2\')"><span></span></td><td class="borderRadius_3" onclick="IRBorderRadius(\'3\')"><span></span></td><td class="borderRadius_5" onclick="IRBorderRadius(\'5\')"><span></span></td><td class="borderRadius_7" onclick="IRBorderRadius(\'7\')"><span></span></td><td class="borderRadius_9" onclick="IRBorderRadius(\'9\')"><span></span></td><td class="borderRadius_12" onclick="IRBorderRadius(\'12\')"><span></span></td><td class="borderRadius_15" onclick="IRBorderRadius(\'15\')"><span></span></td></tr></table></div><div class="row"><label>Border Opacity</label> </div><div class="row"><table class="borderOpacity"><tr><td class="borderopacity_1" onclick="IRBorderOpacity(\'0.125\')"><span></span></td><td class="borderopacity_2" onclick="IRBorderOpacity(\'0.25\')"><span></span></td><td class="borderopacity_3" onclick="IRBorderOpacity(\'0.375\')"><span></span></td><td class="borderopacity_4" onclick="IRBorderOpacity(\'0.5\')"><span></span></td><td class="borderopacity_5" onclick="IRBorderOpacity(\'0.625\')"><span></span></td><td class="borderopacity_6" onclick="IRBorderOpacity(\'0.75\')"><span></span></td><td class="borderopacity_7" onclick="IRBorderOpacity(\'0.875\')"><span></span></td><td class="borderopacity_8" onclick="IRBorderOpacity(\'1\')"><span></span></td></tr></table></div><div class="row"><input type="button" value="Save" class="saveBtn" onclick="myclick()"></div>'} ) )
  );
}
 
registerPlugin( 'my-document-setting-plugin', {
  render: MyDocumentSettingPlugin
} );
var SelectedElement;
var ClearTimeOut;
var BorderRadius=0;
var Borderopacity=1;
var getBorderColor="#808080";
var getBorderSize="1";
var getBorderName="solid";
function IRBorderRadius($val){
  BorderRadius=$val;
}
function IRBorderOpacity($val){
  Borderopacity=$val;
}
function hexToRgbA(hex,opacity){
    var c;
    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');
        if(c.length== 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c= '0x'+c.join('');
        return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+','+opacity+')';
    }
    throw new Error('Bad Hex');
}

// hexToRgbA('#fbafff')
function myclick(){
  // console.log("asd");
  var Elem=document.querySelector("#Div_"+SelectedElement);
  
  if (typeof(Elem) != 'undefined' && Elem != null){
    // if(Elem.hasAttribute("data-rich-text-format-boundary")){
      // console.log(SelectedElement);
      var getColor=document.querySelector("#IR_borderColor");
      if (typeof(getColor) != 'undefined' && getColor != null){
        getBorderColor=getColor.value;
      }else{
        getBorderColor=getBorderColor;
      }

      var getSize=document.querySelector("#IR_borderSize_range");

      if (typeof(getSize) != 'undefined' && getSize != null){
        getBorderSize=getSize.value;
      }else{
        getBorderSize=getBorderSize;
      }

      var getName=document.querySelector("#IR_borderName");
      
      if (typeof(getName) != 'undefined' && getName != null){
        getBorderName=getName.value;
      }else{
        getBorderName=getBorderName;
      }

      // console.log('border:'+getBorderName+' '+getBorderSize+'px '+hexToRgbA(getBorderColor,Borderopacity)+'');
      Elem.setAttribute( "style",'border:'+getBorderName+' '+getBorderSize+'px '+hexToRgbA(getBorderColor,Borderopacity)+'; border-radius:'+BorderRadius+'px;' );
      // Elem.setAttribute( "thisColor",getBorderColor);
      // Elem.setAttribute( "thisSize",getBorderSize);
      // Elem.setAttribute( "thisborder",getBorderName);
      // Elem.setAttribute( "thisopacity",Borderopacity);
      // Elem.setAttribute( "thisradius",BorderRadius);
      clearTimeout(ClearTimeOut);
      ClearTimeOut=setTimeout(function(){ myclick() }, 100);
    // }
  }
}
window.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    SelectedElement="";
  }
  if (event.keyCode == 0 || event.keyCode == 32) // `0` works in mozilla and `32` in other browsers
  {
    SelectedElement="";
  }
});
function thisActive($this){
  SelectedElement=$this;
  // console.log(SelectedElement+"=click");
  // var Elem=document.querySelector("#Div_"+SelectedElement);
  
  // if (typeof(Elem) != 'undefined' && Elem != null){
  //     var getColor=document.querySelector("#IR_borderColor");
  //     if (typeof(getColor) != 'undefined' && getColor != null){
  //        getColor.value=Elem.getAttribute("thisColor");
  //     }
  //     var getSize=document.querySelector("#IR_borderSize_range");
  //     if (typeof(getSize) != 'undefined' && getSize != null){
  //       getSize.value=Elem.getAttribute("thisSize");
  //     }
  //     var getName=document.querySelector("#IR_borderName");
  //     if (typeof(getName) != 'undefined' && getName != null){
  //       getName.value=Elem.getAttribute("thisborder");
  //     }
  //     Borderopacity=Elem.getAttribute("thisopacity");
  //     BorderRadius=Elem.getAttribute("BorderRadius");
  // }
  clearTimeout(ClearTimeOut);
  ClearTimeOut=setTimeout(function(){ myclick() }, 100);
}

function thisDeActive($this){
}
