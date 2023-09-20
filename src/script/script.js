    'use strict';

    const numbers = document.querySelectorAll('.number');
    const outputMain = document.querySelector('.output__second input');
    const outputSecond = document.querySelector('.output__first input');
    const acBtn = document.querySelector('.ac');
    const cBtn = document.querySelector('.c');
    const delBtn = document.querySelector('.del');
    const dotBtn = document.querySelector('.dot');
    const plusBtn = document.querySelector('.plus');
    const minusBtn = document.querySelector('.minus');
    const separateBtn = document.querySelector('.separate');
    const multiplyBtn = document.querySelector('.multiply');
    const equal = document.querySelector('.equal');
    const squareBtn = document.querySelector('.square');
    
    let result = 0;
    let opFlag = false;
    let equalFlag = false;
    let dotFlag = false;
    let sqFlag = false;
    
    acBtn.addEventListener('click', () => {
        outputMain.value = 0;
        outputSecond.value = 0;
        result = 0;
        opFlag = false;
        equalFlag = false;
        dotFlag = false;
        sqFlag = false;
    });
    cBtn.addEventListener('click', () => {
        outputMain.value = 0;
        outputSecond.value = 0;
        result = 0;
        opFlag = false;
        equalFlag = false;
        dotFlag = false;
        sqFlag = false;
    })
    
    let sqrRes;
    equal.addEventListener('click', () => {
        outputMain.focus();
        
        if (outputSecond.value.match(/\s$/gm) == ' ' || sqFlag) {
            if (outputSecond.value.includes('+')){
                result.toFixed(12)
                equalFlag = true;
                result += +outputMain.value;
            }
            if (outputSecond.value.includes('-')) {
                equalFlag = true;
                result -= +outputMain.value;
            }
            if (outputSecond.value.includes('/')) {
                equalFlag = true;
                result /= +outputMain.value;
            }
            if (outputSecond.value.includes('*')) {
                equalFlag = true;
                result *= +outputMain.value;
            }
            if(outputSecond.value.includes('sqr')) {
                sqrRes = +outputMain.value;
                sqFlag = false;
                outputSecond.value += ' ='
                outputMain.value = +result.toFixed(12);
                return;
            }
            outputSecond.value += +outputMain.value;
            outputSecond.value += ' ='
            outputMain.value = +result.toFixed(12);
        } else if (outputSecond.value[outputSecond.value.length - 1] == '=' ) {
            if(outputSecond.value.includes('sqr')) {
                console.log(outputSecond.value.split(/([^\d|.]+)/gm));
                console.log(outputSecond.value.split(/\d+/gm));
                outputSecond.value = `${outputSecond.value.split(/([^\d|.]+)/gm)[0]} ${outputSecond.value.split(/([^\d|.]+)/gm)[1][1]} ${sqrRes} =`;
                return;
            }
            if (outputSecond.value.split(/\d+/gm).includes(' + ')){
                if(dotFlag) {
                    result += +outputSecond.value.split(/ \+ | =/gm).filter(item => item != '')[1];
                    outputSecond.value = `${+(result - +(outputSecond.value.split(/ \+ | =/gm).filter(item => item != '')[1])).toFixed(12)} + ${+(outputSecond.value.split(/ \+ | =/gm).filter(item => item != '')[1])} =`;
                    outputMain.value = +result.toFixed(12);
                    return;
                    }
                result += +outputSecond.value.split(/\D+/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result - (outputSecond.value.split(/\D+/gm).filter(item => item != ''))[1]).toFixed(12)} + ${+(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
            }
            if (outputSecond.value.split(/\d+/gm).includes(' - ')){
                if(dotFlag) {
                result -= +outputSecond.value.split(/ - | =/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result + +(outputSecond.value.split(/ - | =/gm).filter(item => item != '')[1])).toFixed(12)} - ${+(outputSecond.value.split(/ - | =/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
                return;
                }
                result -= +outputSecond.value.split(/\D+/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result + +(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])).toFixed(12)} - ${+(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
            }
            if (outputSecond.value.split(/\d+/gm).includes(' / ')){
                if(outputSecond.value.includes('.')) dotFlag = true;
                if(dotFlag) {
                result /= +outputSecond.value.split(/ \/ | =/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result * +(outputSecond.value.split(/ \/ | =/gm).filter(item => item != '')[1])).toFixed(12)} / ${+(outputSecond.value.split(/ \/ | =/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
                return;
                }
                result /= +outputSecond.value.split(/\D+/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result * +(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])).toFixed(12)} / ${+(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
            }
            if (outputSecond.value.split(/\d+/gm).includes(' * ')){
                if(outputSecond.value.includes('.')) dotFlag = true;
                if(dotFlag) {
                result *= +outputSecond.value.split(/ \* | =/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result / +(outputSecond.value.split(/ \* | =/gm).filter(item => item != '')[1])).toFixed(12)} * ${+(outputSecond.value.split(/ \* | =/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
                return;
                }
                result *= +outputSecond.value.split(/\D+/gm).filter(item => item != '')[1];
                outputSecond.value = `${+(result / +(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])).toFixed(12)} * ${+(outputSecond.value.split(/\D+/gm).filter(item => item != '')[1])} =`;
                outputMain.value = +result.toFixed(12);
            }
        }
        sqrRes = 0;
    })
    
    dotBtn.addEventListener('click', () => {
        dotFlag = true;
       if (outputMain.value == 0 && !outputMain.value.match(/\./gm)) {
            outputMain.value += '.';
       } else if (sqFlag || !outputMain.value.match(/\./gm) && equalFlag && opFlag) {
            equalFlag = false;
            opFlag = false;
            sqFlag = false;
            outputMain.value = '0.';
        } else if (result != 0 && opFlag && equalFlag) {
            opFlag = false;
            outputMain.value = '0.';
        } else if (!equalFlag && !opFlag && !outputMain.value.match(/\./gm)) {
            outputMain.value += '.';  
        } else if (equalFlag && !opFlag && !outputMain.value.match(/\./gm)) {
            outputMain.value = '0.';
        }
        outputMain.focus();
    })
    delBtn.addEventListener('click', () => {
         if (outputMain.value.length == 1) {
            outputMain.value = 0;
        } else {
            outputMain.value = outputMain.value.substring(0, outputMain.value.length - 1);
        }
        outputMain.focus();
    });
    plusBtn.addEventListener('click', () => {
        opFlag = true;
        if (!equalFlag) {
            if (outputSecond.value == 0) {
                outputSecond.value = +outputMain.value; 
            }
            result += +outputMain.value;
        }
      
        equalFlag = true;
        sqFlag = false;
        outputSecond.value = +result.toFixed(12);
        outputMain.value = +result.toFixed(12);
        outputSecond.value += ' + ';
        outputMain.focus();
    })
    minusBtn.addEventListener('click', () => {
        opFlag = true;
        if (!equalFlag) {
            if (outputSecond.value == 0) {
                outputSecond.value = +outputMain.value;
                result = +outputMain.value;      
                equalFlag = true;
                sqFlag = false;
                outputSecond.value = +result.toFixed(12);
                outputMain.value = +result.toFixed(12);
                outputSecond.value += ' - ';
                outputMain.focus();
                return;
            }
            
            result -= +outputMain.value;
        }
       
        equalFlag = true;
        sqFlag = false;
        outputSecond.value = +result.toFixed(12);
        outputMain.value = +result.toFixed(12);
        outputSecond.value += ' - ';
        outputMain.focus();
    })
    separateBtn.addEventListener('click', () => {
        opFlag = true;
        if (!equalFlag) {
            if (outputSecond.value == 0) {
                outputSecond.value = +outputMain.value;
                result = +outputMain.value;      
                equalFlag = true;
                sqFlag = false;
                outputSecond.value = +result.toFixed(12);
                outputMain.value = +result.toFixed(12);
                outputSecond.value += ' / ';
                outputMain.focus();
                return;
            }
            
            result /= +outputMain.value;
        }
        
        equalFlag = true;
        sqFlag = false;
        outputSecond.value = +result.toFixed(12);
        outputMain.value = +result.toFixed(12);
        outputSecond.value += ' / ';
        outputMain.focus();
    })
    multiplyBtn.addEventListener('click', () => {
        opFlag = true;
        if (!equalFlag) {
            if (outputSecond.value == 0) {
                outputSecond.value = +outputMain.value;
                result = +outputMain.value;      
                equalFlag = true;
                sqFlag = false;
                outputSecond.value = +result.toFixed(12);
                outputMain.value = +result.toFixed(12);
                outputSecond.value += ' * ';
                outputMain.focus();
                return;
            }
            
            result *= +outputMain.value;
        }
        
        equalFlag = true;
        sqFlag = false;
        outputSecond.value = +result.toFixed(12);
        outputMain.value = +result.toFixed(12);
        outputSecond.value += ' * ';
        outputMain.focus();
    })
    squareBtn.addEventListener('click', () => {
        if (outputSecond.value == '0') {
            sqFlag = true;
            outputSecond.value = `sqr(${outputMain.value})`;
            outputMain.value = +Math.pow(+outputMain.value, 2).toFixed(12);
            return;
        }
        if (sqFlag && outputSecond.value.match(/\+|\-|\*|\//gm)) {
            outputMain.value = +Math.pow(+outputMain.value, 2).toFixed(12);
            outputSecond.value = `${outputSecond.value.split(/([^\d|.]+)/gm)[0]}${outputSecond.value.split(/([^\d|.]+)/gm)[1]}sqr(${outputSecond.value.split(/([^\d|.]+)/gm)[2]}${outputSecond.value.split(/([^\d|.]+)/gm)[3]})`;
            return; 
        }
        sqFlag = true;
        if (outputSecond.value.match(/\+|\-|\*|\//gm)) {
            outputSecond.value += `sqr(${outputMain.value})`;
            outputMain.value = +Math.pow(+outputMain.value, 2).toFixed(12);
            return
        }
        outputMain.value = +Math.pow(+outputMain.value, 2).toFixed(12);
        outputSecond.value = `sqr(${outputSecond.value.split(/([^\d|.]+)/gm)[1]}${outputSecond.value.split(/([^\d|.]+)/gm)[2]}${outputSecond.value.split(/([^\d|.]+)/gm)[3]})`;
    })
    
    numbers.forEach(item => {
        item.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains('number__nine')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 9;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false
                outputMain.value = 9;
            } else if (outputMain.value != 0) {
                outputMain.value += 9;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__eight')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 8;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 8;
            } else if (outputMain.value != 0) {
                outputMain.value += 8;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__seven')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 7;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 7;
            } else if (outputMain.value != 0) {
                outputMain.value += 7;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__six')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 6;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 6;
            } else if (outputMain.value != 0) {
                outputMain.value += 6;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__five')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 5;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 5;
            } else if (outputMain.value != 0) {
                outputMain.value += 5;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__four')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 4;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 4;
            } else if (outputMain.value != 0) {
                outputMain.value += 4;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__three')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 3;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 3;
            } else if (outputMain.value != 0) {
                outputMain.value += 3;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__two')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 2;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 2;
            } else if (outputMain.value != 0) {
                outputMain.value += 2;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__one')) {
                if (outputMain.value.match(/\./gm) && !opFlag) {
                    outputMain.value += 1;
                    equalFlag = false;
                    opFlag = false;
            } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                equalFlag = false;
                opFlag = false;
                sqFlag = false;
                outputMain.value = 1;
            } else if (outputMain.value != 0) {
                outputMain.value += 1;
            }
                outputMain.focus();
            } else if (target.classList.contains('number__zero')) {
                if(outputMain.value.match(/\./gm) && !opFlag){
                    outputMain.value += 0;
                    equalFlag = false;
                    opFlag = false;
                } else if (outputMain.value == 0 || equalFlag || opFlag || sqFlag) {
                    equalFlag = false;
                    opFlag = false;
                    sqFlag = false;
                    outputMain.value = 0;
                } else if (outputMain.value !== 0) {
                    outputMain.value += 0;
                }
                outputMain.focus();
            }
        })
        })
