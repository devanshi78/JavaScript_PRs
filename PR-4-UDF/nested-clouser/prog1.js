let num = 10;
const mainfunc = () => {
    num = 15;
    const innerfunc = () => {
        num = 20;
        const subfunc = () => {
            num = 30;
            console.log(`sub : ${num}`)
        }
        subfunc();
        console.log(`inner : ${num}`);
    }
    innerfunc();
    console.log(`main : ${num}`);
}
console.log(`outter : ${num}`);
mainfunc();