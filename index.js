function $(id){
    return document.getElementById(id)
}
var alphabet = {
    a:"A",
    b:"B",
    c:"C",
    d:"D",
    e:"E",
    f:"F",
    g:"G",
    h:"H",
    i:"I",
    j:"J",
    k:"K",
    l:"L",
    m:"M",
    n:"N",
    o:"O",
    p:"P",
    q:"Q",
    r:"R",
    s:"S",
    t:"T",
    u:"U",
    v:"V",
    w:"W",
    x:"X",
    y:"Y",
    z:"Z",
}
function goofifyText(){
    var input = $("in").value;
    var output = $("out");
    var outputstring = "";
    var goofy = false;
    input = input.toLowerCase()
    for(var i=0; i<input.length; i++){
        if(input[i] in alphabet){
            if(goofy){
                outputstring+=alphabet[input[i]];
                goofy = false;
            } else {
                outputstring+=input[i];
                goofy = true;
            }
        } else {
            outputstring+=input[i];
        }
        
    output.value = outputstring;
    }
}