let capture
let tracker
let osc
let env

function setup() {

    createCanvas(800, 600)
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)  

    //main oscillator 
    osc = new p5.Oscillator()
    osc.setType("sine")
    osc.amp(0)

    //main envelope
    env = new p5.Envelope()
    env.setADSR(.1, .5, .5, .1) 

}

function mousePressed(){
    osc.start()
    osc.amp(env)
    env.triggerAttack()

    }     

function mouseReleased(){
    osc.stop()
    env.triggerRelease()
}

function draw() { 

   //image(capture, 0, 0, capture.width, capture.height)

    let positions = tracker.getCurrentPosition()

   // print(positions)
   background(255)


    stroke(0)
    fill(0)

    let i = 0
    while (i < positions.length-1) {

        i += 1

      //ellipse(positions[i][0], positions[i][1], 4, 4)
   // text(i, positions[i][0], positions[i][1])
    }

    if (positions.length > 0) {

    let nose_x = positions[62][0]
    let nose_y = positions[62][1]

    frequency = map(nose_y, 0, height, 2000, 50)

    osc.freq(frequency)

   background(map(frequency, 2000, 50, 0, 255), 3, 252) 

    stroke(map(frequency, 2000, 50, 0, 255), 252, 3)

   

   strokeWeight(3)

//nose
    line(positions[41][0], positions[41][1], positions[62][0], positions[62][1])
    line(positions[39][0], positions[39][1], positions[62][0], positions[62][1])
    line(positions[35][0], positions[35][1], positions[62][0], positions[62][1])
    line(positions[37][0], positions[37][1], positions[62][0], positions[62][1])
    line(positions[36][0], positions[36][1], positions[62][0], positions[62][1])
    line(positions[38][0], positions[38][1], positions[62][0], positions[62][1])
    line(positions[33][0], positions[33][1], positions[41][0], positions[41][1])

//eyes

    line(positions[31][0], positions[31][1], positions[32][0], positions[32][1])
    line(positions[28][0], positions[28][1], positions[32][0], positions[32][1])
    line(positions[30][0], positions[30][1], positions[32][0], positions[32][1])
    line(positions[29][0], positions[29][1], positions[32][0], positions[32][1])

    line(positions[26][0], positions[26][1], positions[27][0], positions[27][1])
    line(positions[25][0], positions[25][1], positions[27][0], positions[27][1])
    line(positions[24][0], positions[24][1], positions[27][0], positions[27][1])
    line(positions[23][0], positions[23][1], positions[27][0], positions[27][1])

//mouth

    line(positions[44][0], positions[44][1], positions[60][0], positions[60][1])
    line(positions[50][0], positions[50][1], positions[60][0], positions[60][1])
    line(positions[53][0], positions[53][1], positions[60][0], positions[60][1])
    line(positions[47][0], positions[47][1], positions[60][0], positions[60][1])

//mouth

    line(positions[49][0], positions[49][1], positions[57][0], positions[57][1])
    line(positions[54][0], positions[54][1], positions[57][0], positions[57][1])
    line(positions[52][0], positions[52][1], positions[57][0], positions[57][1])
    line(positions[45][0], positions[45][1], positions[57][0], positions[57][1])


//left face
    line(0, 120, positions[2][0], positions[2][1])
    line(0, height-180, positions[2][0], positions[2][1])

    line(0, 60, positions[1][0], positions[1][1])
    line(0, height-240, positions[1][0], positions[1][1])


    line(0, 0, positions[0][0], positions[0][1])
    line(0, height-300, positions[0][0], positions[0][1])

    line(0, 180, positions[3][0], positions[3][1])
    line(0, height-120, positions[3][0], positions[3][1])

    line(0, 240, positions[4][0], positions[4][1])
    line(0, height-60, positions[4][0], positions[4][1])

//right face  
    line(width, height, positions[10][0], positions[10][1])
    line(width, 360, positions[10][0], positions[10][1])

    line(width, height-60, positions[11][0], positions[11][1])
    line(width, 300, positions[11][0], positions[11][1])

    line(width, height-120, positions[12][0], positions[12][1])
    line(width, 240, positions[12][0], positions[12][1])

    line(width, height-180, positions[13][0], positions[13][1])
    line(width, 180, positions[13][0], positions[13][1])

    line(width, height-240, positions[14][0], positions[14][1])
    line(width, 120, positions[14][0], positions[14][1])

    line(width, height-300, positions[15][0], positions[15][1])
    line(width, 60, positions[15][0], positions[15][1])


//top face
    line(60, 0, positions[19][0], positions[19][1])
    line(width-420, 0, positions[19][0], positions[19][1])

    line(120, 0, positions[20][0], positions[20][1])
    line(width-360, 0, positions[20][0], positions[20][1])

    line(180, 0, positions[21][0], positions[21][1])
    line(width-300, 0, positions[21][0], positions[21][1])

    line(250, 0, positions[22][0], positions[22][1])
    line(width-240, 0, positions[22][0], positions[22][1])

    line(300, 0, positions[18][0], positions[18][1])
    line(width-180, 0, positions[18][0], positions[18][1])

    line(360, 0, positions[17][0], positions[17][1])
    line(width-120, 0, positions[17][0], positions[17][1])

    line(420, 0, positions[16][0], positions[16][1])
    line(width-60, 0, positions[16][0], positions[16][1])


//bottom face 
    line(0, height, positions[5][0], positions[5][1])
    line(width-400, height, positions[5][0], positions[5][1])

    line(80, height, positions[6][0], positions[6][1])
    line(width-320, height, positions[6][0], positions[6][1])

    line(160, height, positions[7][0], positions[7][1])
    line(width-240, height, positions[7][0], positions[7][1])

    line(240, height, positions[8][0], positions[8][1])
    line(width-160, height, positions[8][0], positions[8][1])

    line(320, height, positions[9][0], positions[9][1])
    line(width-80, height, positions[9][0], positions[9][1])

//face contour
    //eyes
    line(positions[33][0], positions[33][1], positions[25][0], positions[25][1])
    line(positions[33][0], positions[33][1], positions[30][0], positions[30][1])
    line(positions[22][0], positions[22][1], positions[25][0], positions[25][1])
    line(positions[22][0], positions[22][1], positions[33][0], positions[33][1])
    line(positions[18][0], positions[18][1], positions[33][0], positions[33][1])
    line(positions[18][0], positions[18][1], positions[30][0], positions[30][1])
    line(positions[17][0], positions[17][1], positions[68][0], positions[68][1])
    line(positions[16][0], positions[16][1], positions[29][0], positions[29][1])
    line(positions[15][0], positions[15][1], positions[67][0], positions[67][1])
    line(positions[14][0], positions[14][1], positions[28][0], positions[28][1])
    line(positions[64][0], positions[64][1], positions[21][0], positions[21][1])
    line(positions[19][0], positions[19][1], positions[63][0], positions[63][1])
    line(positions[14][0], positions[14][1], positions[28][0], positions[28][1])
    line(positions[0][0], positions[0][1], positions[23][0], positions[23][1])
    line(positions[1][0], positions[1][1], positions[23][0], positions[23][1])
    line(positions[26][0], positions[26][1], positions[2][0], positions[2][1])
    line(positions[3][0], positions[3][1], positions[65][0], positions[65][1])
    line(positions[4][0], positions[4][1], positions[25][0], positions[25][1])
    line(positions[28][0], positions[28][1], positions[13][0], positions[13][1])
    line(positions[31][0], positions[31][1], positions[12][0], positions[12][1])
    line(positions[69][0], positions[69][1], positions[11][0], positions[11][1])
    line(positions[30][0], positions[30][1], positions[10][0], positions[10][1])
    line(positions[20][0], positions[20][1], positions[24][0], positions[24][1])
    line(positions[20][0], positions[20][1], positions[22][0], positions[22][1])
    line(positions[18][0], positions[18][1], positions[16][0], positions[16][1])
    line(positions[33][0], positions[33][1], positions[64][0], positions[64][1])
    line(positions[33][0], positions[33][1], positions[68][0], positions[68][1])




    line(positions[0][0], positions[0][1], positions[63][0], positions[63][1])
    line(positions[14][0], positions[14][1], positions[67][0], positions[67][1])
    line(positions[0][0], positions[0][1], positions[20][0], positions[20][1])
    line(positions[16][0], positions[16][1], positions[14][0], positions[14][1])
    line(positions[19][0], positions[19][1], positions[22][0], positions[22][1])
    line(positions[18][0], positions[18][1], positions[15][0], positions[15][1])
    line(positions[64][0], positions[64][1], positions[65][0], positions[65][1])
    line(positions[68][0], positions[68][1], positions[69][0], positions[69][1])
    line(positions[67][0], positions[67][1], positions[70][0], positions[70][1])
    line(positions[63][0], positions[63][1], positions[66][0], positions[66][1])
    line(positions[67][0], positions[67][1], positions[32][0], positions[32][1])
    line(positions[63][0], positions[63][1], positions[27][0], positions[27][1])        
    line(positions[68][0], positions[68][1], positions[32][0], positions[32][1])
    line(positions[64][0], positions[64][1], positions[27][0], positions[27][1])
    line(positions[66][0], positions[66][1], positions[27][0], positions[27][1])
    line(positions[32][0], positions[32][1], positions[70][0], positions[70][1])
    line(positions[27][0], positions[27][1], positions[65][0], positions[65][1])
    line(positions[69][0], positions[69][1], positions[32][0], positions[32][1])




    //nose
    line(positions[33][0], positions[33][1], positions[34][0], positions[34][1])
    line(positions[33][0], positions[33][1], positions[40][0], positions[40][1])
    line(positions[34][0], positions[34][1], positions[41][0], positions[41][1])
    line(positions[40][0], positions[40][1], positions[41][0], positions[41][1])
    line(positions[34][0], positions[34][1], positions[62][0], positions[62][1])
    line(positions[40][0], positions[40][1], positions[62][0], positions[62][1])
    line(positions[42][0], positions[42][1], positions[37][0], positions[37][1])
    line(positions[43][0], positions[43][1], positions[37][0], positions[37][1])
    line(positions[35][0], positions[35][1], positions[42][0], positions[42][1])
    line(positions[34][0], positions[34][1], positions[41][0], positions[41][1])
    line(positions[43][0], positions[43][1], positions[39][0], positions[39][1])
    line(positions[35][0], positions[35][1], positions[36][0], positions[36][1])
    line(positions[39][0], positions[39][1], positions[38][0], positions[38][1])
    line(positions[37][0], positions[37][1], positions[46][0], positions[46][1])
    line(positions[37][0], positions[37][1], positions[48][0], positions[48][1])

    line(positions[33][0], positions[33][1], positions[2][0], positions[2][1])
    line(positions[33][0], positions[33][1], positions[12][0], positions[12][1])
    line(positions[34][0], positions[34][1], positions[3][0], positions[3][1])
    line(positions[40][0], positions[40][1], positions[11][0], positions[11][1])
    line(positions[39][0], positions[39][1], positions[14][0], positions[14][1])
    line(positions[35][0], positions[35][1], positions[0][0], positions[0][1])
    line(positions[44][0], positions[44][1], positions[5][0], positions[5][1])
    line(positions[50][0], positions[50][1], positions[9][0], positions[9][1])
    line(positions[35][0], positions[35][1], positions[5][0], positions[5][1])
    line(positions[39][0], positions[39][1], positions[9][0], positions[9][1])
    line(positions[34][0], positions[34][1], positions[2][0], positions[2][1])
    line(positions[40][0], positions[40][1], positions[12][0], positions[12][1])
    line(positions[35][0], positions[35][1], positions[4][0], positions[4][1])
    line(positions[39][0], positions[39][1], positions[10][0], positions[10][1])
    line(positions[25][0], positions[25][1], positions[41][0], positions[41][1])
    line(positions[30][0], positions[30][1], positions[41][0], positions[41][1])
    line(positions[36][0], positions[36][1], positions[1][0], positions[1][1])
    line(positions[38][0], positions[38][1], positions[13][0], positions[13][1])
    line(positions[15][0], positions[15][1], positions[12][0], positions[12][1])
    line(positions[19][0], positions[19][1], positions[2][0], positions[2][1])
    line(positions[12][0], positions[12][1], positions[28][0], positions[28][1])
    line(positions[2][0], positions[2][1], positions[23][0], positions[23][1])
    line(positions[27][0], positions[27][1], positions[35][0], positions[35][1])
    line(positions[32][0], positions[32][1], positions[39][0], positions[39][1])
    line(positions[65][0], positions[65][1], positions[34][0], positions[34][1])
    line(positions[40][0], positions[40][1], positions[69][0], positions[69][1])
    line(positions[33][0], positions[33][1], positions[44][0], positions[44][1])
    line(positions[50][0], positions[50][1], positions[33][0], positions[33][1])
    line(positions[23][0], positions[23][1], positions[44][0], positions[44][1])
    line(positions[50][0], positions[50][1], positions[28][0], positions[28][1])
    line(positions[34][0], positions[34][1], positions[22][0], positions[22][1])
        line(positions[40][0], positions[40][1], positions[18][0], positions[18][1])





    //mouth

    line(positions[45][0], positions[45][1], positions[36][0], positions[36][1])
    line(positions[49][0], positions[49][1], positions[38][0], positions[38][1])
    line(positions[36][0], positions[36][1], positions[46][0], positions[46][1])
    line(positions[38][0], positions[38][1], positions[48][0], positions[48][1])
    line(positions[46][0], positions[46][1], positions[47][0], positions[47][1])
    line(positions[47][0], positions[47][1], positions[48][0], positions[48][1])
    line(positions[44][0], positions[44][1], positions[3][0], positions[3][1])
    line(positions[50][0], positions[50][1], positions[11][0], positions[11][1])
    line(positions[55][0], positions[55][1], positions[4][0], positions[4][1])
    line(positions[51][0], positions[51][1], positions[10][0], positions[10][1])
    line(positions[54][0], positions[54][1], positions[5][0], positions[5][1])
    line(positions[52][0], positions[52][1], positions[9][0], positions[9][1])
    line(positions[53][0], positions[53][1], positions[6][0], positions[6][1])
    line(positions[53][0], positions[53][1], positions[8][0], positions[8][1])
    line(positions[45][0], positions[45][1], positions[2][0], positions[2][1])
    line(positions[49][0], positions[49][1], positions[12][0], positions[12][1])

    line(positions[44][0], positions[44][1], positions[56][0], positions[56][1])
    line(positions[56][0], positions[56][1], positions[57][0], positions[57][1])
    line(positions[57][0], positions[57][1], positions[58][0], positions[58][1])
    line(positions[58][0], positions[58][1], positions[50][0], positions[50][1])
    line(positions[54][0], positions[54][1], positions[52][0], positions[52][1])
    line(positions[54][0], positions[54][1], positions[4][0], positions[4][1])
    line(positions[52][0], positions[52][1], positions[10][0], positions[10][1])

    line(positions[3][0], positions[3][1], positions[6][0], positions[6][1])
    line(positions[11][0], positions[11][1], positions[8][0], positions[8][1])
    line(positions[2][0], positions[2][1], positions[5][0], positions[5][1])
    line(positions[12][0], positions[12][1], positions[9][0], positions[9][1])
    line(positions[6][0], positions[6][1], positions[8][0], positions[8][1])
    line(positions[6][0], positions[6][1], positions[54][0], positions[54][1])
    line(positions[52][0], positions[52][1], positions[8][0], positions[8][1])
    line(positions[5][0], positions[5][1], positions[9][0], positions[9][1])
    line(positions[11][0], positions[11][1], positions[49][0], positions[49][1])
    line(positions[3][0], positions[3][1], positions[45][0], positions[45][1])
    line(positions[55][0], positions[55][1], positions[54][0], positions[54][1])
    line(positions[52][0], positions[52][1], positions[51][0], positions[51][1])
    line(positions[36][0], positions[36][1], positions[49][0], positions[49][1])
    line(positions[38][0], positions[38][1], positions[45][0], positions[45][1])
    line(positions[53][0], positions[53][1], positions[7][0], positions[7][1])
    line(positions[7][0], positions[7][1], positions[54][0], positions[54][1])
    line(positions[7][0], positions[7][1], positions[52][0], positions[52][1])
    line(positions[50][0], positions[50][1], positions[5][0], positions[5][1])
    line(positions[44][0], positions[44][1], positions[9][0], positions[9][1])



}
}
