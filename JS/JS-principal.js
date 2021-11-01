let numero_de_ejercicios= prompt("Que número de ejercicio quiere ver? : ");
if(numero_de_ejercicios == 1){
    let a = prompt("insert a number: ");
    if(a%2==0){
    alert("Par");
    }
    else{
    alert("Impar");
    }
}
else if(numero_de_ejercicios == 2){
    let a = prompt("insert a number: ");
    if (a%3==0){
    alert("Divisible por 3");
    }
    else{
    alert("No divisible por 3");
    }
}
else if(numero_de_ejercicios == 3){
    let a = prompt("insert a number: ");
    if(a%11==0){
    alert("Es divisivle por 11");
    }
    else{
    alert("No es divisible por 11");
    }
}
else if(numero_de_ejercicios == 4){
    let a = prompt("insert a number: ");
    let b = prompt("Insert other number: ")
    if (a%b==0){
    alert("Divisible entre si");
    }
    else{
    alert("No divisible entre si");
    }
}
else if(numero_de_ejercicios == 5){
    let a = prompt("insert a number: ");
    let b = prompt("insert the next number: ");
    let c = prompt("insert the last number: ");
    if (Math.abs(b-c)<Math.abs(a) && Math.abs(a)<Math.abs(b+c)){
    alert("El triangulo si existe")
    if(a==b && a==c && b==c){
    alert("Es equilatero");
    }
    else if (a==b||a==c||b==c) {
    alert("Es isoceles");
    }
    else{
    alert("Es escaleno");
    }
    }
    else{
    alert("El triangulo no existe")
    }
}
else if(numero_de_ejercicios == 6){
    let a = prompt("insert a number: ");
    let b = prompt("insert the next number: ");
    let c = prompt("insert the last number: ");
    let x1 = 0; let x2 = 0 ;
    if (a!=0){
    if((Math.pow(b,2)-4*a*c)<0){
    alert("La ecuacion no tiene solucion en los reales.")
    }
    else{
    x1=((-b)+Math.sqrt(Math.pow(b,2)-4*a*c,2))/(2*a);
    x2=((-b)-Math.sqrt(Math.pow(b,2)-4*a*c,2))/(2*a);
    alert(x1);
    alert(x2); 
    }
    }
    else{
    x1 = (-c)/b
    alert(x1);
    }
}
else if(numero_de_ejercicios == 7){
    let a = prompt("insert a number: ");
    if(a>0){
    if (a%4==0 && a%100!=0){
        alert("Es bisiesto");
    }
    else{
        alert("No es bisiesto")
    }
    }
    else{
    alert("Error");
    }
}
else if(numero_de_ejercicios == 8){
    let a = prompt("insert a number: ");
    let b = prompt("insert the next number: ");
    let c = prompt("insert the last number: ");
    if(a< b && b < c){
    alert("C");
    }
    else if(a > b && b > c){
    alert("D");
    }
    else if( a == b && b == c){
    alert("I");
    }
    else{
    alert("X")
    }
}
else if(numero_de_ejercicios == 9){
}
else if(numero_de_ejercicios == 10){
    let t = prompt("Inserte una temperatura del agua: ")
    if(t<=29 && 21<=t){
        alert("Tibia.")
    }
    else if(15<=t && t<21){
        alert("Friaa!!.")
    }
    else if(t>29 && t<=34){
        alert("Caliente!!.")
    }
    else if (t<15){
        alert("Fria!! F por Escamitas ")
    }
    else if (t>34) {
        alert("Caalinte !!  F por Escamitas")
    }
    else {
        alert("Intente de nuevo")
    }
}
else if(numero_de_ejercicios == 11){    
    let a = 0;
    let letra = prompt("Insert a letter: ");
    let i = 1
    if(letra === 'a'){
        while(a<1000){
            a++;
            console.log(a);
        }
    }
    else if (letra === 'b'){
        while(a<1000){
            a+=2;
            console.log(a);
        }
    }
    else if (letra ==='c'){
        a=1;
        while(a<= 1000){
            console.log(a);
            a+=2;
        }
    }
    else if(letra === 'd'){
    a = 1000;
        while(a>0){
            a--;
            console.log(a);
        }
    }
    else if(letra === 'e'){
    a = 1000;
        while(a>0){
            a-=5;
            console.log(a);
        }
    }
    else if(letra === 'f'){
        let n = prompt("Insert a limit: ");
        while(i<=n){
            console.log(i + "/2");
            i++;
        }
    }
    else if(letra === 'g'){
        let n = prompt("Insert a limit: ");
        while(i<=n){
            console.log("1/" + i );
            i++;
        }
    }
    else if(letra === 'h'){
        let n = prompt("Insert a limit: ");
        let a =1;
        let b =-2;
        while (i< n){
            console.log(a);
            console.log(b);
            a+=2
            b-=2;
            i+=2;
        }
    }
    else if(letra === 'i'){
        let n = prompt("Insert a number: ");
        while(n>=0){
            console.log(n);
            n--;
        }

    }
    else if(letra === 'j'){
        let n = prompt("Insert a limit: ");
        let a1= 0; let a2 = 1;
        console.log(a1); console.log(a2); let a3= a1+a2;
        while((a3)<=n){
            a1+=a2
            a2+=a1
            console.log(a1);
            console.log(a2);
            a3=a1+a2;
        }

    }
    else if(letra === 'k'){
        let n = prompt("Insert a limit: ");
        let a1=1; let a2=2;let p=a1*a2/2;
        while(p<=n){
            console.log(p);
            p=a1*a2/2;
            a1++; a2++;
        }

    }
    else{
        alert("Intente de nuevo")
    }
}
else if(numero_de_ejercicios== 12){
    let n = prompt("Insert a limit: ");
    let s=0;
    for(let i = 1; i<=n; i++){
        s = s + (i + Math.pow(i+1,i)) - i*i;
    }
    alert(s);
}
else if(numero_de_ejercicios == 13){
    let a = prompt("Insert a number: ")
    let b = prompt("Insert a minor number")
    let m = a%b;
    let d = a/b
    alert(Math.floor(d)); alert(m); alert(b);
}
else if(numero_de_ejercicios == 14){
    let n = prompt("Insert a number: ")
    if(n>1){
        let p=1;
        for(let i=2; i <n; i++){
            if(n%i==0){
                p=0;
            }
        }
        if(p==0){
            alert("No es primo.")
        }
        else if (p==1){
            alert("Es primo.")
        }
    }
    else{

        alert("No es primo.")
    }
}
else if(numero_de_ejercicios == 15){
    let n = prompt("Insert a number: ")
    for(let i = 1; i <=10; i++)
    alert(n + "*" + i + "=" + n*i)
}
else if(numero_de_ejercicios == 16){
}
else if(numero_de_ejercicios == 17){
    let a = prompt("Insert a number: ")
    let sum = 0;
    while(a!=0){
        sum += a;
        a = prompt("Insert a number: ")
    }
    alert(sum);
}
else if(numero_de_ejercicios == 18){
    let n = prompt("Insert a number: ")
    let ps = 0; let ip =0;
    for(let i =1; i<=n; i++){
        let x = prompt("Insert other number")
        if(x%2==0){
            ps++;
        }
        else{
            ip++;
        }
    }
    alert(ps + " Es la cantidad de pares."); alert(ip + " Es la cantidad de impares.")
}
else if(numero_de_ejercicios == 19){
}
else if(numero_de_ejercicios == 20){
}
else{
    alert("Intente de nuevo.");
}

