// Multiplication table of 9
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x 9 = ${i * 9}`)
}

// bonus: multiplication tables 1-10
for (let j = 1; j <= 10; j++) {
    // j gaat van 1 tot en met 10
    console.log(`Tafel van ${j}`)
    for (let k = 1; k <= 10; k++) {
        // elke keer dat j eentje omhoog gaat, gaat k 1 t/m 10
        console.log(`${k} x ${j} = ${k * j}`)
    }
}