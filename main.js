let eng = {
    "a": " ._",
    'b': ' _...',
    'c': ' _._.',
    'd': ' _..',
    'e':' .',
    'f': ' .._.',
    'g': ' __.',
    'h': ' ....',
    'i': ' ..',
    'j': ' .___',
    'k': ' _._',
    'l':' ._..',
    'm':' __',
    'n':' _.',
    'o':' ___',
    'p': ' .__.',
    'q': ' __._',
    'r':' ._.',
    's': ' ...',
    't': ' _',
    'u':' .._',
    'v':' ..._',
    'w':' .__',
    'x':' _.._',
    'y':' _.__',
    'z':' __..',
    '1':' .____',
    '2':' ..___',
    '3':' ...__',
    '4':' ...._',
    '5':' .....',
    '6':' _....',
    '7':' __...',
    '8':' ___..',
    '9':' ____.',
    '10':' _____',
    '?':' ..__..',
    '!':' _._.__',
    '.':' ._._._',
    ',':' __..__',
    ';':' _._._.',
    ':':' ___...',
    '+':' ._._.',
    '-':' _...._',
    '/':' _.._.',
    '=':' _..._',
    ' ':' //',
};

let switch2 = document.getElementById('switch');
switch2.addEventListener('click', function() {
    window.location.href = 'morse.html'
})

let input = document.getElementById('input');
let output = document.getElementById('output');
input.addEventListener('keyup', function(event) {
    out = eng2Mc(input.value);
    output.value = out;
})

function eng2Mc(string) {
  let output = "";
  const characters = string.toLowerCase().split("")
  console.log(characters)
  for (let character of characters) {
    console.log(character)
    if (character === " ") {
      output += ' // '  // 4 spaces (+3 of last letter, makes 7)
    } else if(eng[character]){
      output += eng[character] + "   "  // 3 spaces between letters
    }
  }
  return output
}