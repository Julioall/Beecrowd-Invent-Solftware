const lines = [ '--*', 'caw caw', '*--', 'caw caw', 'caw caw', '' ];
let total = 0;

for(let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
    if (lines[i].length >1){
        switch(lines[i]) {
            case "--*":
                total += 1;
                break;
            case "-*-":
                total += 2;
                break;
            case "-**":
                total += 3;
                break;
            case "*--":
                total += 4;
                break;
            case "*-*":
                total += 5;
                break;
            case "**-":
                total += 6;
                break;
            case "***":
                total += 7;
                break;
            default:
                if (lines[i] === "caw caw"){
                    console.log(total);
                    
                }
                total = 0;
                break;
        }
        
        
    }
    
}