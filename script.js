document.addEventListener("DOMContentLoaded", function(event){ 
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#000000', '#959BE8'],
                ['#FF485F', '#000000'],
                ['#8C8C8C', '#E80805'],
                ['#8C8C8C', '#E8E100'],
            ]
        }
    }
});
})

