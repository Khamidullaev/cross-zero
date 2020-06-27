function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}


let a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let column1 = 0;
            let column2 = 0;
            let column3 = 0;
            let row1 = 0;
            let row2 = 0;
            let row3 = 0;
            let diagonal1 = 0;
            let diagonal2 = 0;

a[0][0] = document.querySelector('#one');
a[0][1] = document.querySelector('#two');
a[0][2] = document.querySelector('#three');
a[1][0] = document.querySelector('#four');
a[1][1] = document.querySelector('#five');
a[1][2] = document.querySelector('#six');
a[2][0] = document.querySelector('#seven');
a[2][1] = document.querySelector('#eight');
a[2][2] = document.querySelector('#nine');

function nolik(i, j) {
    a[i][j]
        .classList
        .add('far', 'fa-circle');
};

function iks(i, j) {
    a[i][j]
        .classList
        .add('fas', 'fa-times');
};

let b = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let score = 0;
let win = true;
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        a[i][j].onclick = () => {
            if(score%2==0&&b[i][j]==0&&win==true){
            // if (score % 2 == 0 && b[i][j] == 0) {
            //     iks(i, j);
            //     b[i][j] = 2;
            //     score++;
            // } else if (score % 2 == 1 && b[i][j] == 0) {
            //     
            // }
                column1 = 0;
             column2 = 0;
             column3 = 0;
             row1 = 0;
             row2 = 0;
             row3 = 0;
             diagonal1 = 0;
             diagonal2 = 0;
             let cornerElement = getRandomIntInclusive(1, 7);

            iks(i, j);
                b[i][j] = 2;
                score++;
                console.log(b);

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        switch (i) {
                            case 0:
                                row1 += b[i][j];
                                break;
                            case 1:
                                row2 += b[i][j];
                                break;
                            case 2:
                                row3 += b[i][j];
                                break;
                        }
    
                        switch (j) {
                            case 0:
                                column1 += b[i][j];
                                break;
                            case 1:
                                column2 += b[i][j];
                                break;
                            case 2:
                                column3 += b[i][j];
                                break;
                        }
    
                        if (i == j) 
                            diagonal1 += b[i][j];
                        if (i + j == 2) 
                            diagonal2 += b[i][j];
    
                        }
                    }


                if (row1 == 6 || row2 == 6 || row3 == 6 || column1 == 6 || column2 == 6 || column3 == 6 || diagonal1 == 6 || diagonal2 == 6) 
                {
                    win = false;
                console.log(b);}
            if (row1 == 30 || row2 == 30 || row3 == 30 || column1 == 30 || column2 == 30 || column3 == 30 || diagonal1 == 30 || diagonal2 == 30) 
                {
                    win = false;
                console.log(b);}

            setTimeout(() => {
                if(win==true){
                   
                   if(b[1][1]==0) {
                       nolik(1, 1);
                       b[1][1]=10;
                       score ++;
                   } 

                   else if(row1 == 20 || row2 == 20 || row3 == 20 || column1 == 20 || column2 == 20 || column3 == 20 || diagonal1 == 20 || diagonal2 == 20)
                    {
                        if(row1==20){
                        for(let w=0; w<3; w++) {
                            if(b[0][w]==0) {
                                nolik(0, w);
                                b[0][w]=10;
                                score ++;
                            }
                        }
                    }
                    else if(row2==20){
                        for(let w=0; w<3; w++) {
                            if(b[1][w]==0) {
                                nolik(1, w);
                                b[1][w]=10;
                                score ++;
                            }
                        }
                    }
                    else if(row3==20){
                        for(let w=0; w<3; w++) {
                            if(b[2][w]==0) {
                                nolik(2, w);
                                b[2][w]=10;
                                score ++;
                            }
                        }
                    }
                    else if(column1==20){
                        for(let w=0; w<3; w++) {
                            if(b[w][0]==0) {
                                nolik(w, 0);
                                b[w][0]=10;
                                score ++;
                            }
                        }
                    }
                    else if(column2==20){
                        for(let w=0; w<3; w++) {
                            if(b[w][1]==0) {
                                nolik(w, 1);
                                b[w][1]=10;
                                score ++;
                            }
                        }
                    }
                    else if(column3==20){
                        for(let w=0; w<3; w++) {
                            if(b[w][2]==0) {
                                nolik(w, 2);
                                b[w][2]=10;
                                score ++;
                            }
                        }
                    }

                    else if(diagonal1==20) {
                        for(let w=0; w<3; w++) {
                            if(b[w][w]==0) {
                                nolik(w, w);
                                b[w][w]=10;
                                score++;
                            }
                        }
                    }

                    else if(diagonal2==20) {
                        for(let w1=0; w1<3; w1++) {
                            for(let w2=0; w2<3; w2++){
                                if(b[w1][w2]==0&&w1+w2==2) {
                                    nolik(w1, w2);
                                b[w1][w2]=10;
                                score++;
                                }
                            }
                        }
                    }



                }
//-------------------------------------------------------------------
else if(row1 == 4 || row2 == 4 || row3 == 4 || column1 == 4 || column2 == 4 || column3 == 4 || diagonal1 == 4 || diagonal2 == 4)
{
                        if(row1==4){
                            for(let w=0; w<3; w++) {
                                if(b[0][w]==0) {
                                    nolik(0, w);
                                    b[0][w]=10;
                                    score ++;
                                }
                            }
                        }
                        else if(row2==4){
                            for(let w=0; w<3; w++) {
                                if(b[1][w]==0) {
                                    nolik(1, w);
                                    b[1][w]=10;
                                    score ++;
                                }
                            }
                        }
                        else if(row3==4){
                            for(let w=0; w<3; w++) {
                                if(b[2][w]==0) {
                                    nolik(2, w);
                                    b[2][w]=10;
                                    score ++;
                                }
                            }
                        }
                        else if(column1==4){
                            for(let w=0; w<3; w++) {
                                if(b[w][0]==0) {
                                    nolik(w, 0);
                                    b[w][0]=10;
                                    score ++;
                                }
                            }
                        }
                        else if(column2==4){
                            for(let w=0; w<3; w++) {
                                if(b[w][1]==0) {
                                    nolik(w, 1);
                                    b[w][1]=10;
                                    score ++;
                                }
                            }
                        }
                        else if(column3==4){
                            for(let w=0; w<3; w++) {
                                if(b[w][2]==0) {
                                    nolik(w, 2);
                                    b[w][2]=10;
                                    score ++;
                                }
                            }
                        }

                        else if(diagonal1==4) {
                            for(let w=0; w<3; w++) {
                                if(b[w][w]==0) {
                                    nolik(w, w);
                                    b[w][w]=10;
                                    score++;
                                }
                            }
                        }
    
                        else if(diagonal2==4) {
                            for(let w1=0; w1<3; w1++) {
                                for(let w2=0; w2<3; w2++){
                                    if(b[w1][w2]==0&&w1+w2==2) {
                                        nolik(w1, w2);
                                    b[w1][w2]=10;
                                    score++;
                                    }
                                }
                            }
                        }
                    
                    }




                    // if(row1 == 4 || row2 == 4 || row3 == 4 || column1 == 4 || column2 == 4 || column3 == 4 || diagonal1 == 4 || diagonal2 == 4||row1 == 20 || row2 == 20 || row3 == 20 || column1 == 20 || column2 == 20 || column3 == 20 || diagonal1 == 20 || diagonal2 == 20)
                    // { for(let u=0; u<3; u++) {
                    //         if((row1==4||row1==20)&&b[0][u]==0) {
                    //             nolik(0, u);
                    //             b[0][u]=10;
                    //             score++;
                    //             break;
                    //         }
                    // }}


                   
                    
                else if((b[0][0]==0||b[0][2]||b[2][0]==0||b[2][2]==0)&&cornerElement<=1&&score<3) {
                    for(let n=0; n<50; n++) {
                        let numberOfCorner = getRandomIntInclusive(1, 4);
                        if(numberOfCorner==1&&b[0][0]==0) {
                            nolik(0, 0);
                            b[0][0]=10;
                            score ++;
                            break;
                        } 
                        if(numberOfCorner==2&&b[0][2]==0) {
                            nolik(0, 2);
                            b[0][2]=10;
                            score ++;
                            break;
                        } 
                        if(numberOfCorner==3&&b[2][0]==0) {
                            nolik(2, 0);
                            b[2][0]=10;
                            score ++;
                            break;
                        } 
                        if(numberOfCorner==4&&b[2][2]==0) {
                            nolik(2, 2);
                            b[2][2]=10;
                            score ++;
                            break;
                        } 
                    }
                }
                    
                    else{ 
                for (let m=1; m<100; m++) {    
                        let p1 = getRandomIntInclusive(0, 2);
                        let p2 = getRandomIntInclusive(0, 2);
                        if (b[p1][p2]==0) {
                            nolik(p1, p2);
                                b[p1][p2] = 10;
                                    score++;
                                console.log(`[${p1}][${p2}]`);
                                break;
                        }
                    } }}

//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
 column1 = 0;     
 column2 = 0;
 column3 = 0;
 row1 = 0;
 row2 = 0;
 row3 = 0;
 diagonal1 = 0;
 diagonal2 = 0;       



           

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    switch (i) {
                        case 0:
                            row1 += b[i][j];
                            break;
                        case 1:
                            row2 += b[i][j];
                            break;
                        case 2:
                            row3 += b[i][j];
                            break;
                    }

                    switch (j) {
                        case 0:
                            column1 += b[i][j];
                            break;
                        case 1:
                            column2 += b[i][j];
                            break;
                        case 2:
                            column3 += b[i][j];
                            break;
                    }

                    if (i == j) 
                        diagonal1 += b[i][j];
                    if (i + j == 2) 
                        diagonal2 += b[i][j];

                    }
                }

            if (row1 == 6 || row2 == 6 || row3 == 6 || column1 == 6 || column2 == 6 || column3 == 6 || diagonal1 == 6 || diagonal2 == 6) 
                {iksWin();
                    win=false;
                }
            if (row1 == 30 || row2 == 30 || row3 == 30 || column1 == 30 || column2 == 30 || column3 == 30 || diagonal1 == 30 || diagonal2 == 30) 
                {nolikWin();
                    win=false;
                    }
            
            if (row1 == 6 || row1 == 30) {
                one.style.backgroundColor = 'darkslategrey';
                two.style.backgroundColor = 'darkslategrey';
                three.style.backgroundColor = 'darkslategrey';
            }

            if (row2 == 6 || row2 == 30) {
                four.style.backgroundColor = 'darkslategrey';
                five.style.backgroundColor = 'darkslategrey';
                six.style.backgroundColor = 'darkslategrey';
            }

            if (row3 == 6 || row3 == 30) {
                seven.style.backgroundColor = 'darkslategrey';
                eight.style.backgroundColor = 'darkslategrey';
                nine.style.backgroundColor = 'darkslategrey';
            }

            if (column1 == 6 || column1 == 30) {
                one.style.backgroundColor = 'darkslategrey';
                four.style.backgroundColor = 'darkslategrey';
                seven.style.backgroundColor = 'darkslategrey';
            }

            if (column2 == 6 || column2 == 30) {
                two.style.backgroundColor = 'darkslategrey';
                five.style.backgroundColor = 'darkslategrey';
                eight.style.backgroundColor = 'darkslategrey';
            }

            if (column3 == 6 || column3 == 30) {
                three.style.backgroundColor = 'darkslategrey';
                six.style.backgroundColor = 'darkslategrey';
                nine.style.backgroundColor = 'darkslategrey';
            }

            if (diagonal1 == 6 || diagonal1 == 30) {
                one.style.backgroundColor = 'darkslategrey';
                five.style.backgroundColor = 'darkslategrey';
                nine.style.backgroundColor = 'darkslategrey';
            }
            if (diagonal2 == 6 || diagonal2 == 30) {
                three.style.backgroundColor = 'darkslategrey';
                five.style.backgroundColor = 'darkslategrey';
                seven.style.backgroundColor = 'darkslategrey';
            }
            if (score == 9 && column1 != 6 && column1 != 30 && column2 != 6 && column2 != 30 && column3 != 6 && column3 != 30 && row1 != 6 && row1 != 30 && row2 != 6 && row2 != 30 && row3 != 6 && row3 != 30 && diagonal1 != 6 && diagonal1 != 30 && diagonal2 != 6 && diagonal2 != 30) 
                alert('Durang!');

 }, 500); 



        }
            }
        }
}

function iksWin() {
    // alert("X lar g'olib bo'ldi!!!");
}

function nolikWin() {
    // alert("0 lar g'olib bo'ldi!!!");
}


document.querySelector('.reset').onclick = () => {
     b = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for(let r1=0; r1<3; r1++) {
        for(let r2=0; r2<3; r2++) {
            a[r1][r2].classList.remove('far', 'fa-circle', 'fas', 'fa-times');
            a[r1][r2].style.backgroundColor = 'transparent';
        }
    }
    score = 0;
    win = true;
}
document.querySelector('.back').onclick = () => {
     b = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    for(let r1=0; r1<3; r1++) {
        for(let r2=0; r2<3; r2++) {
            a[r1][r2].classList.remove('far', 'fa-circle', 'fas', 'fa-times');
            a[r1][r2].style.backgroundColor = 'transparent';
        }
    }
    score = 0;
    win = true;
}




