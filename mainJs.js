const wordSubstitution = (text,firstWord,secondWord,regExp)=>{
    let newText = ''
    const [
        firstReplacedWord,
        seconReolaceddWord
    ] = text.match(regExp)
    
    newText = text.replace(new RegExp(firstReplacedWord),firstWord)
    newText = newText.replace(new RegExp(seconReolaceddWord),secondWord)   
    return newText
}
const text = '‘Hello mr.<<user_name>>, welcome to the company <<company>>’'
const regExp = /<<.+?>>/g

console.log(wordSubstitution(text,'myText1','MyText2',regExp))