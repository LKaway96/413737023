let angle=0

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0) //背景黑色
  angleMode(DEGREES)//設定使用到角度，採用0~360
  frameRate(12.5)
}

function draw() {
  background("#003049");
  translate(width/2,height/2)
  noFill()//不填滿
  stroke(225)//框線白色
  strokeWeight(2)//線條粗度
  rectMode(CENTER)//設定中心點座標

  for(let i=0; i<150; i=i+1){
    //let r = random(50,255) //抽取一個亂數，值介於50(包含)~255(不包含)
    //let g = random(50,255)
    //let b = random(50,255)

    let r = map(sin(frameCount),-1,1,50,100)//對應，sin的值介於-1~1之間，當sin()的值位於-1~1間的位置，對應到50~255間的位置
    let g = map(cos(frameCount/2),-1,1,100,255)//對應
    let b = map(sin(frameCount/4),-1,1,200,255)//對應
    stroke(r,g,b)
    rotate(sin(angle-i*4)*5)//三角函數sin的值介於-1~1間，*40之後，旋轉較度介於-40~40間
    rect(0,0,600-i*3.5,600-i*3.5,100)//方形(600,600)
}

  angle=angle+10
}
