function operations(num1,num2,op){
    let result;
    switch(op){
        case '+': result = num1 + num2;break
        case '-': result = num1 - num2;break
        case '*': result = num1 * num2;break
        case '/': result = num1 / num2;break
        case '%': result = num1 % num2;break
        case '**': result = num1 ** num2;break
    }

    console.log(result)
}
operations(5, 6, '+')