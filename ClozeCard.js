module.exports = ClozeCard;

function ClozeCard(fullText, cloze, partial){
    this.cloze = cloze;
    this.fullText = fullText;
    this.partial= fullText.replace("George Washington", "......");
}
