function ir_alert_(message)
{
    document.getElementById("ir_alert").style.visibility = "visible";
    document.getElementById("ir_alert").style.opacity = "1";
    document.getElementById("ir_alert").innerHTML = message;
    setTimeout(function(){ document.getElementById("ir_alert").style.visibility = "hidden"; document.getElementById("ir_alert").style.opacity = "0"; }, 3500);

}
(function( $ ) {
( function( wp ) {
// const smileIcon = wp.element.createElement('svg', 
//     { 
//         width: 20, 
//         height: 20 
//     },
//     wp.element.createElement( 'path',
//         { 
//             d: "M550.188,0H18.972C8.495,0,0,8.495,0,18.972v531.216c0,10.478,8.495,18.972,18.972,18.972h531.216 c10.478,0,18.972-8.494,18.972-18.972V18.972C569.16,8.495,560.666,0,550.188,0z M507.96,507.96H61.2V61.2h446.76V507.96z" 
//         }
//     )
// );
const smileIcon = wp.element.createElement('svg', 
    { 
        width: "20px", 
        height: "20px",
        xmlns:"http://www.w3.org/2000/svg" ,
        viewBox:"0 0 569.16 569.16"
    },
    wp.element.createElement( 'path',
        { 
            d: "M550.188,0H18.972C8.495,0,0,8.495,0,18.972v531.216c0,10.478,8.495,18.972,18.972,18.972h531.216 c10.478,0,18.972-8.494,18.972-18.972V18.972C569.16,8.495,560.666,0,550.188,0z M507.96,507.96H61.2V61.2h446.76V507.96z" 
        }
    )
);
    var MyCustomButton = function( props ) {
        return wp.element.createElement(
            wp.blockEditor.RichTextToolbarButton, {
                icon: smileIcon,
                title: 'Border',
                onClick: function() {
                	// console.log( "val="+$("#IR_borderColor").val() );
                	var random = Math.floor((Math.random() * 10000) + 1);
                    props.onChange( wp.richText.toggleFormat(
                        props.value,
                        { type: 'my-custom-format/sample-output', attributes: { id:'Div_'+random+'',onclick:"thisActive("+random+")"},}
                    ) );
                    document.querySelector("#Div_"+random).click();
                },
                isActive: props.isActive,
            }
        );
    }
    wp.richText.registerFormatType(
        'my-custom-format/sample-output', {
            title: 'ahsan',
            tagName: 'span',
            className: "border-solid-1-gray",
            attributes: { style: 'border', "ahsan":"ahsan2"},
            edit: MyCustomButton,
        }
    );
} )( window.wp );
})( jQuery );
