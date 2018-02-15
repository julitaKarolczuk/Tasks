const data = [
    {
    "uid":      "b1435d5771c14c2498642f07ce04b087",
    "step":     "likert",
    "sequence": 1,
  
    "observations": {
      "cheat_customer": {
        "responseValue":    "5",
        "responseSequence": ["5"],
        "timeElapsed":      8,
        "viewCount":        1
      },
  
      "work_integrity": {
        "responseValue":    "3",
        "responseSequence": ["2", "3", "4", "3"],
        "timeElapsed":      48,
        "viewCount":        5
      },
  
      "personal_honesty": {
        "responseValue":    "1",
        "responseSequence": ["5", "1"],
        "timeElapsed":      17,
        "viewCount":        2
      }
    },
  
    "metas": {
      "timeElapsed":    486,
      "helpBarClicks":  3,
      "viewCount":      1
    }
    },
    {
        "uid":      "b1435d5771c14c2498642f07ce04b087",
        "step":     "introduction",
        "sequence": 1,
    
        "observations": {
        },
    
        "metas": {
          "timeElapsed":    38,
          "deviceRotation": ["p", "l", "p"]
        }
      }

]
function transform(jsonFile){
    const output= []

 const emptyObj = {
    questionCode: null,
    questionResponse: null,
    section: jsonFile.step,
    timeElapsed: null,
    viewCount: null,
    responseSequence: null 
 }

 const observations = jsonFile.observations
 const metas = jsonFile.metas

 for(key of Object.keys(observations)){
    let newItem = {
        ...emptyObj,
        questionCode: key
    }
     for(prop of Object.keys(observations[key])){
         if(prop === 'responseValue'){
            newItem.questionResponse = Number((observations[key])[prop])
         } 
        else{
            if((Object.keys(emptyObj)).includes(prop)){
             newItem[prop] = (observations[key])[prop]
            }
         }
     }
     output.push(newItem)
 }

let newItem = {
    ...emptyObj
}
 for(key of Object.keys(metas)){
    
    if((Object.keys(newItem)).includes(key)){
        
        newItem.questionCode = `_${emptyObj.section}`
        newItem[key] = metas[key]
        output.push(newItem)
    }
    else{
        let newItem = {
            ...emptyObj
        }
        
        newItem.questionCode = `_${emptyObj.section}_${key}`
        newItem.questionResponse = metas[key]
        output.push(newItem)   
    }
}
let count = 0
const index = []
for(i in output){
    if(output[Number(i)].questionCode === `_${jsonFile.step}`){
        count ++
        index.push(i)
    }
}
if(count>1){
    for(i in index){
        if(Number(i) != 0 ){
            output.splice(Number(index[i]),1)
        }
    }
    
}
console.table(output)
}

for(elem of data){
    transform(elem)
}
 
  


