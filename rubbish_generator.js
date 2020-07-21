function rubbishGenerator (job) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let rubbish = ""

  if (!job) return "(ERROR) 請選取一位!!!"
  else if (job === 'engineer') rubbish += '工程師' + task.engineer[randomNumber()] + phrase[randomNumber()]
  else if (job === 'designer') rubbish += '設計師' + task.designer[randomNumber()] + phrase[randomNumber()]
  else if (job === 'entrepreneur') rubbish += '創業家' + task.entrepreneur[randomNumber()] + phrase[randomNumber()]
  
  return rubbish
}

function randomNumber () {
  return Math.floor(Math.random() * 4)
}

module.exports = rubbishGenerator
