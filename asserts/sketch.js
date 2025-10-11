function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  let x=random(-20, width+20), y=random(-20, height+20);
  
	//文字長度
	textSize(20);
	let mytext = random(["你是否已經資訊過曝","我們的眼睛，像是一個長期故障、永不關閉的快門", "請戴上象徵「主動選擇」的濾鏡", "過曝檔案室", 
                       "           ", "#$/!@&*%", "*&#@<<!!>>$%*", "資訊過載的時代", "今天聽到了一個很...", "在 threads 上看到了一個", 
                       "身在資訊洪流中", "資訊轟炸的世界，你是否能主動觀看", "噴水磁磚出沒在", "今天午餐吃什麼", "這禮拜要開會喔", "明天要考期末", "檔案員的現象分析 B-02", "檔案員的現象分析 B-04", "檔案員的觀察記錄 A-01", "檔案員的觀察記錄 A-03", 
                       "最近...新開了...一家...店", "檔案員的研究成果報告 C-03", "這間檔案室成立的目的", "你有看到...的限時動態嗎", "                 ", "課程評鑑記得填喔"]);
	let w = textWidth(mytext);

  if(random() < 0.3){	
		//陰影
		// fill(80);
    // stroke(80);
    fill(0,255,255);
    stroke(0,255,255);
    rect(x+5, y+5, w+30, 40 , 15);

    //文字框
		fill(20);
		stroke(0,255,255);
    rect(x, y, w+30, 40, 15);   
		
		//文字
		// fill(80);
    fill(0,255,255);
    noStroke();
    textAlign(CENTER, CENTER);
		text(mytext, x, y, w+30, 40);
  }
  else if(random() < 0.6){	
		//陰影
		// fill(80);
    // stroke(80);
    fill(255,255,0);
    stroke(255,255,0);
    rect(x+5, y+5, w+30, 40 , 15);

    //文字框
		fill(20);
		stroke(255,255,0);
    rect(x, y, w+30, 40, 15);   
		
		//文字
		// fill(80);
    fill(255,255,0);
    noStroke();
    textAlign(CENTER, CENTER);
		text(mytext, x, y, w+30, 40);
  }
  else{
		//陰影
    // fill(255);
    // stroke(255);
    fill(255,0,255);
    stroke(255,0,255);
    rect(x+5, y+5, w+30, 40, 15);

		//文字框
    fill(255);
    stroke(255,0,255);
    strokeWeight(2);
    rect(x, y, w+30, 40, 15);

		//文字
    // fill(255);
    fill(255,0,255);
    stroke(255,0,255);
    noStroke();
    textAlign(CENTER, CENTER);
    text(mytext, x, y, w+30, 40);
  }
  // blendMode(DODGE);
}


// 當視窗大小改變時，自動重新調整畫布
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}