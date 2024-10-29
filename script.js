let result = document.getElementById("result");
let numbers = [];
let oper = [];
let thisnum = 0;

function add(number){
    thisnum = thisnum*10 + number;
    result.value = thisnum;
}

function setop(opcode){
    if(result.value === "") return;
    numbers.push(thisnum);
    thisnum = 0;
    oper.push(opcode);
    result.value = "";
}

function giveres(){
    numbers.push(thisnum);
    let final = numbers[0];
    for (let i = 0; i < oper.length; i++) {
        switch (oper[i]) {
            case 1:
                final = final + numbers[i+1];
                break;
                case 2:
                    final = final - numbers[i+1];
                    break;
                    case 3:
                        final = final * numbers[i+1];
                        break;
                        case 4:
                            if(numbers[i+1] === 0){
                                result.value = "ERROR";
                                numbers = [];
                                oper = [];
                                return;
                            }
                            final = final / numbers[i+1];
                            break;
                            default:
                return;
            }
            
        }

        result.value = final.toString();
        thisnum = final;
        numbers = [];
        oper = [];
        
    }
    
function clearall(){
    numbers = [];
    oper = [];
    thisnum = 0;
    result.value = " ";
}