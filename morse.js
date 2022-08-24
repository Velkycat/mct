
let mc = {
    '._':'a',
    '_...':'b',
    '_._.':'c',
    '_..':'d',
    '.':'e',
    '.._.':'f',
    '__.':'g',
    '....':'h',
    '..':'i',
    '.___':'j',
    '_._':'k',
    '._..':'l',
    '__':'m',
    '_.':'n',
    '___':'o',
    '.__.':'p',
    '__._':'q',
    '._.':'r',
    '...':'s',
    '_':'t',
    '.._':'u',
    '..._':'v',
    '.__':'w',
    '_.._':'x',
    '_.__':'y',
    '__..':'z',
    '.____':'1',
    '..___':'2',
    '...__':'3',
    '...._':'4',
    '.....':'5',
    '_....':'6',
    '__...':'7',
    '___..':'8',
    '____.':'9',
    '_____':'10',
    '..__..':'?',
    '_._.__':'!',
    '._._._':'.',
    '__..__':',',
    '_._._.':';',
    '___...':':',
    '._._.':'+',
    '_...._':'-',
    '_.._.':'/',
    '_..._':'=',
};

let switch2 = document.getElementById('switch');
switch2.addEventListener('click', function() {
    window.location.href = 'main.html'
})

let input = document.getElementById('input');
let output = document.getElementById('output');
input.addEventListener('keyup', function(event) {
        out = mc2Eng(input.value)
        output.value = out;
})

function mc2Eng(string) {
    let output = "";
    newstr=string.split(" ")
    for (let character of newstr) {
        if (character === '//') {
            output +=  " "
        } else if(mc[character]){
            output += mc[character]
        }
    }
    return output
}