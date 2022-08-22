eng = {"a": " ._", 'b': ' _...', 'c': ' _._.', 'd': ' _..', 'e':' .', 'f': ' .._.', 'g': ' __.', 'h': ' ....', 'i': ' ..', 'j': ' .___', 'k': ' _._', 'l':' ._..', 'm':' __', 'n':' _.', 'o':' ___', 'p': ' .__.', 'q': ' __._', 'r':' ._.', 's': ' ...', 't': ' _', 'u':' .._', 'v':' ..._', 'w':' .__', 'x':' _.._', 'y':' _.__', 'z':' __..', '1':' .____', '2':' ..___', '3':' ...__', '4':' ...._', '5':' .....', '6':' _....', '7':' __...', '8':' ___..', '9':' ____.', '10':' _____', '?':' ..__..', '!':' _._.__', '.':' ._._._', ',':' __..__', ';':' _._._.', ':':' ___...', '+':' ._._.', '-':' _...._', '/':' _.._.', '=':' _..._'}
mc = {'._':'a', '_...':'b', '_._.':'c', '_..':'d', '.':'e', '.._.':'f', '__.':'g', '....':'h', '..':'i', '.___':'j', '_._':'k', '._..':'l', '__':'m', '_.':'n', '___':'o', '.__.':'p', '__._':'q', '._.':'r', '...':'s', '_':'t', '.._':'u', '..._':'v', '.__':'w', '_.._':'x', '_.__':'y', '__..':'z', '.____':'1', '..___':'2', '...__':'3', '...._':'4', '.....':'5', '_....':'6', '__...':'7', '___..':'8', '____.':'9', '_____':'10', '..__..':'?', '_._.__':'!', '._._._':'.', '__..__':',', '_._._.':';', '___...':':', '._._.':'+', '_...._':'-', '_.._.':'/', '_..._':'='}

def eng2mc(str):
    output=[]
    op=''
    for item in str:
        morse=eng.get(item)
        output.append(morse)
    i=0
    while i!=len(output):
        for item in output:
            if item==None:
                x=output.index(item)
                output[x]=" //"
            op=op+output[i]
            i+=1
    print(op)


def mc2eng(str):
    newstr=str.split()
    print(newstr)
    output=[]
    op=''
    for item in newstr:
        eng=mc.get(item)
        output.append(eng)
    i=0
    while i!=len(output):
        for item in output:
            if item==None:
                x=output.index(item)
                output[x]=" "
            op=op+output[i]
            i+=1
    print(op)

mc2eng('.... ..')