class Calculadora{
    constructor(n1,n2,op){
        this.nu1=n1;
        this.nu2=n2;
        this.opc=op;
        this.Operaciones();
    }

Operaciones(){
   switch(this.opc){
        case "+":
            let result;
            result= ( this.nu1+=  this.nu2);
            alert("El resultado de la suma es: " + result);
            break;
        case "-":
            let res;
            res = this.nu1 - this.nu2;
            alert("El resultado de la resta es: " +res);
            break;
        case "*":
            let resu;
            resu = this.nu1 * this.nu2;
            alert("El resultado de la multiplicacion es: " +resu);
            break;
        case "/":
            let re;
            re = this.nu1 / this.nu2;
            alert("El resultado de la division es: " +re);
            break;
    }
}}