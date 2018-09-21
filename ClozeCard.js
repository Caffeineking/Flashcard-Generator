module.exports = ClozeCard;

function ClozeCard(fullText, cloze){
    this.cloze = cloze;
    this.fullText = fullText;
    this.partial= fullText.replace(cloze, "......");
}
