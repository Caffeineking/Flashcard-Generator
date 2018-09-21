module.exports = ClozeCard;

function ClozeCard(fullText, cloze, partial){
    this.cloze = cloze;
    this.fullText = fullText;
    this.partial= fullText.replace("George Washington", "......");

   

}

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

    console.log(firstPresidentCloze.partial); 


    var brokenCloze = new ClozeCard("I like pizza", "tacos");

    console.log(brokenCloze);