 const alphabetMap = new Map([
                ["a", 1],["b", 2],["c", 3],["d", 4],
                ["e", 5],["f", 8],["g", 3],["h", 5],
                ["i", 1],["j", 1],["k", 2],["l", 3],
                ["m", 4],["n", 5],["o", 7],["p", 8],
                ["q", 1],["r", 2],["s", 3],["t", 4],
                ["u", 6],["v", 6],["w", 6],["x", 5],
                ["y", 1],["z", 7]
                ]);
            function getNumerologyVal() {
                let babyName = document.getElementById("baby-name").value;
                let nameArr = babyName.trim().toLowerCase().split('');
                let originalCount=0, resultSum=0;
                for(let i=0;i<nameArr.length;i++){
                    if(nameArr[i].length === 1 && nameArr[i].match(/[a-z]/i)) {
                        originalCount += alphabetMap.get(nameArr[i]);        
                    }                    
                }
                let value = originalCount;
                while (value) {
                    resultSum += value % 10;
                    value = Math.floor(value / 10);
                }
                resultSum = resultSum===10 ? 1 : resultSum;
                document.getElementById("result").innerHTML = "The numerology value for " + babyName + " is " + resultSum;
                document.getElementById("totalCount").innerHTML = "Total Sum =  " + originalCount;
            }