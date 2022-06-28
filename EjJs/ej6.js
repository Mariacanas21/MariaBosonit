



            let roundTo = (num, red) => {
                return Number(Math.round(num + "e" + red));
            }

            const roundedResult = roundTo(2.123,2);

            console.log(roundedResult);

           const roundedResult1 = roundTo(1.12345678,6);
            console.log(roundedResult1);

