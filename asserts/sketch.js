function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let x = random(-20, width + 20), y = random(-20, height + 20);

  //文字長度
  textSize(20);
  let mytext = random(["你是否已經資訊過曝", "我們的眼睛，像是一個長期故障、永不關閉的快門", "請戴上象徵「主動選擇」的濾鏡", "過曝檔案室",
    "           ", "#$/!@&*%", "*&#@<<!!>>$%*", "資訊過載的時代", "今天聽到了一個很...", "在 threads 上看到了一個",
    "身在資訊洪流中", "資訊轟炸的世界，你是否能主動觀看", "噴水磁磚出沒在", "今天午餐吃什麼", "這禮拜要開會喔", "明天要考期末", "檔案員的現象分析 B-02", "檔案員的現象分析 B-04", "檔案員的觀察記錄 A-01", "檔案員的觀察記錄 A-03",
    "最近...新開了...一家...店", "檔案員的研究成果報告 C-03", "這間檔案室成立的目的", "你有看到...的限時動態嗎", "                 ", "課程評鑑記得填喔", "我的學生證好像不見了", "問卷可以放交流版上", "交流版上有免費食物", "我忘記帶傘了",
    "Have you been overexposed to information?", "Please wear a filter that symbolizes 'active choice'.", "Overexposed Archives", "The age of information overload.",
    "Today I heard something...", "In a world bombarded with information, can you actively observe?", "Water-spraying tiles are everywhere.", "What are you having for lunch today?", "I have a meeting this week.",
    "I have a final exam tomorrow.", "Recently...a new store opened...", "The purpose of establishing this archive.", "Have you seen the dynamics of...", "Remember to fill out the course evaluation.", "I seem to have lost my student ID.", "I forgot my umbrella.",
    "情報過多になっていませんか？", "能動的な選択を象徴するフィルターをかけてください", "情報過多アーカイブ", "情報過多時代", "今日、とても…を聞きました", "情報洪水の中で", "情報で溢れかえる世界で、あなたは能動的に観察できますか？", "今日のランチは何を食べますか？", "今週は会議があります",
    "明日は期末試験です", "このアーカイブの目的", "…の期間限定ストーリーを見ましたか", "授業評価を忘れずに記入してください", "学生証をなくしたようです", "傘を忘れました",
    "당신은 이미 정보 과부하 상태인가요?", "‘능동적인 선택’을 상징하는 필터를 착용하세요", "과부하 아카이브", "정보 과잉의 시대", "오늘 어떤 이야기를 들었어요...", "정보의 홍수 속에서", "정보가 넘쳐나는 세상에서, 당신은 능동적으로 바라볼 수 있나요?", "오늘 점심은 뭐 먹을까요?",
    "이번 주에 회의가 있어요", "내일은 기말고사예요", "이 아카이브의 설립 목적", "…의 한정 스토리를 봤나요?", "수업 평가 잊지 말고 작성하세요", "학생증을 잃어버린 것 같아요", "우산을 두고 왔어요"]);

  let asciiString = "";
  let asciiCount = int(random(6, 13));
  for (let i = 0; i < asciiCount; i++) {
    let asciiWord = char(int(random(33, 127)));
    asciiString += asciiWord;
  }
  let w = textWidth(mytext);
  let w2 = textWidth(asciiString);

  if (random() < 1/6) {
    //陰影
    fill(0, 255, 255);
    stroke(0, 255, 255);
    rect(x + 5, y + 5, w2 + 30, 40, 15);

    //文字框
    fill(20);
    stroke(0, 255, 255);
    rect(x, y, w2 + 30, 40, 15);

    //文字
    // fill(80);
    fill(0, 255, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(asciiString, x, y, w2 + 30, 40);
  }
  else if (random() < 2/6) {
    //陰影
    fill(0, 255, 255);
    stroke(0, 255, 255);
    rect(x + 5, y + 5, w + 30, 40, 15);

    //文字框
    fill(20);
    stroke(0, 255, 255);
    rect(x, y, w + 30, 40, 15);

    //文字
    // fill(80);
    fill(0, 255, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(mytext, x, y, w + 30, 40);
  }
  else if (random() < 3/6) {
    //陰影
    fill(255, 255, 0);
    stroke(255, 255, 0);
    rect(x + 5, y + 5, w2 + 30, 40, 15);

    //文字框
    fill(20);
    stroke(255, 255, 0);
    rect(x, y, w2 + 30, 40, 15);

    //文字
    fill(255, 255, 0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(asciiString, x, y, w2 + 30, 40);
  }
  else if (random() < 4/6) {
    //陰影
    fill(255, 255, 0);
    stroke(255, 255, 0);
    rect(x + 5, y + 5, w + 30, 40, 15);

    //文字框
    fill(20);
    stroke(255, 255, 0);
    rect(x, y, w + 30, 40, 15);

    //文字
    fill(255, 255, 0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(mytext, x, y, w + 30, 40);
  }
  else if (random() < 5/6) {
    //陰影
    fill(255, 0, 255);
    stroke(255, 0, 255);
    rect(x + 5, y + 5, w2 + 30, 40, 15);

    //文字框
    fill(255);
    stroke(255, 0, 255);
    strokeWeight(2);
    rect(x, y, w2 + 30, 40, 15);

    //文字
    fill(255, 0, 255);
    stroke(255, 0, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(asciiString, x, y, w2 + 30, 40);
  }
  else {
    //陰影
    fill(255, 0, 255);
    stroke(255, 0, 255);
    rect(x + 5, y + 5, w + 30, 40, 15);

    //文字框
    fill(255);
    stroke(255, 0, 255);
    strokeWeight(2);
    rect(x, y, w + 30, 40, 15);

    //文字
    fill(255, 0, 255);
    stroke(255, 0, 255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(mytext, x, y, w + 30, 40);
  }
}


// 當視窗大小改變時，自動重新調整畫布
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}