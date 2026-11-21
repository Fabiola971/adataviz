const boxContainer = document.getElementById("box-container");
console.log("boxContainer")
const box = document.querySelector(".box");
console.log(box)
const datasContainer = document.getElementById("datas-container");
console.log(datasContainer);

const datas = document.querySelectorAll("#datas-container li");
console.log(datas)
const span = document.querySelectorAll("#datas-container li span ")
console.log(span);
const keySpans = ["Evenement: ", "Description: ", "Adresse: ", "Prix: ", "Accès: "]
console.log(keySpans);

// span.forEach(s =>{
//     console.log(s)
// })

const createItem = (element, tableau) =>{
    element.forEach((s, i) => {
        if(tableau != undefined){
            s.textContent = tableau[i]
        }
    })
    // console.log(`element[i]: ${element[i]}`)
}
createItem(span, keySpans)

        


//     datasContainer.appendChild(datas);
//     console.log(datas)
// }
// createBox()
// array.forEach(element => {
    
// });

const main = async () =>{

    try{
        const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/que-faire-a-paris-/records?limit=20")
        console.log(response)
            if(response.ok){
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            const results = jsonResponse.results;
            console.log(results)
            return results
            // results.forEach(res =>{
            //         console.log(res.price_type, res.pmr);
            //         return res
            // })
        }else{
            throw new Error('Erreur SERVER:' + response.status);
        }
        
    }catch(error){
        console.log(error)
    }
    
}
main()


