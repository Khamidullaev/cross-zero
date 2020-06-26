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
            // if (score % 2 == 0 && b[i][j] == 0) {
            //     iks(i, j);
            //     b[i][j] = 2;
            //     score++;
            // } else if (score % 2 == 1 && b[i][j] == 0) {
            //     
            // }
 let column1 = 0;
            let column2 = 0;
            let column3 = 0;
            let row1 = 0;
            let row2 = 0;
            let row3 = 0;
            let diagonal1 = 0;
            let diagonal2 = 0;

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
                for (let m=1; m<100; m++) {    
                        let p1 = getRandomIntInclusive(0, 2);
                        let p2 = getRandomIntInclusive(0, 2);
                        if (b[p1][p2]==0&&win==true) {
                            nolik(p1, p2);
                                b[p1][p2] = 10;
                                    score++;
                                console.log(`[${p1}][${p2}]`);
                                break;
                        }
                    } 

//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
let column1 = 0;     
let column2 = 0;
let column3 = 0;
let row1 = 0;
let row2 = 0;
let row3 = 0;
let diagonal1 = 0;
let diagonal2 = 0;       



           

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
                }
            if (row1 == 30 || row2 == 30 || row3 == 30 || column1 == 30 || column2 == 30 || column3 == 30 || diagonal1 == 30 || diagonal2 == 30) 
                {nolikWin();
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

function iksWin() {
    alert("X lar g'olib bo'ldi!!!");
}

function nolikWin() {
    alert("0 lar g'olib bo'ldi!!!");
}


