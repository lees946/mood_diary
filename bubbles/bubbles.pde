String[] data;
String[] lines;
Wanderer[] wanderer = new Wanderer[100];
Wanderer[] wanderer2 = new Wanderer[100];
int rowCount;
boolean align = false;
String userkey = "all";
String moodkey = "all";
String timekey = "all";


void setup(){
   size(1200, 650);
   noStroke();
 
   //load table
   String[] lines = loadStrings("old/info.txt");
   rowCount = lines.length;
   
  
   for (int i=7; i<rowCount; i++)
   {
     wanderer[i] = new Wanderer(random(width), random(height),i,userkey,moodkey,timekey);
     
   }
   
  
}

void draw(){
  
 background(119,166,166);
  rect(30,30,50,20, 10);
  fill(50, 52, 53);
  text("align",40,45);
  
  
   if(align){
          for (int i=7; i<rowCount; i++)
         {
          wanderer[i] = new Wanderer(40+40*i, 200, i,userkey,"happy",timekey);
           wanderer[i] = new Wanderer(40+40*i, 250, i,userkey,"energetic",timekey);
          wanderer[i].display();
         }
   }
   else{
         for (int i=7; i<rowCount; i++)//
         {
             wanderer[i].stayInsideCanvas();
             
             wanderer[i].display();
             
             
         }
   }
}

void keyPressed(){
  if(key == '1'){
    align = !align;
  }  
  if(key == '2'){
    userkey = "dean0321";
  }
  if(key == '2'){
    moodkey = "happy";
  }
}

void mousePressed(){
  if(mouseX>30 && mouseX<80 && mouseY>30 && mouseY<50){
     align=!align;
  }
}
////////////////////////////////

class Wanderer{
   
   float x;
   float y;
   float wander_theta;
   int rowNumber;
   int rowCount;
   String username;
   String mood;
   String location;
   String comment;
   String month;
   String day;
   String userkey;
   String moodkey;
   String timekey;
   boolean show = true;
   Float mouseDist;
   String[] data;
   String[] lines;
   
   float max_wander_offset = 0.2;
   float size; 
  
 
   Wanderer(float _x, float _y, int _row, String _userkey, String _moodkey, String _timekey)
   {
     x = _x;
     y = _y;
     rowNumber = _row;
     userkey = _userkey;
     moodkey = _moodkey;
     timekey = _timekey;
     
     wander_theta = random(TWO_PI);
     
     size = 20;
    
   }
   
   void importData(){
     
         String[] lines = loadStrings("old/info.txt");
         
         data =split(lines[rowNumber],',');
         username= data[0];
         mood= data[1];
         location= data[2];
         comment= data[3]; 
         month = data[4];
         
   }
   
   void dataDisplay(){
   
     
        if(moodkey.equals("all") || moodkey.equals(mood)){
             show = true; 
        }else{  show = false; }
      
      
   }

   void ellipseColor(){
     
       importData();  
     
       if(mood.equals("Happy")){
            fill(252,43,189);
       } else if (mood.equals("Energetic")){
            fill(252,122,38);
       }
       else if (mood.equals("Peaceful")){
            fill(84,157,200);
       }
       else if (mood.equals("Anxious")){
            fill(129,68,49);
       }
       else if (mood.equals("Tired")){
            fill(134,81,199);
       }
       else if (mood.equals("Depressed")){
            fill(72,59,103);
       } else {
            fill(255,255,255); 
       }
     
   }
 
   void display(){
     
     mouseDist = dist(x,y,mouseX,mouseY);
     
     if(show){
         move();
         stayInsideCanvas();
         ellipseColor();
        
         if(mouseDist < 40){
           ellipse(x,y,size*3,size*3);
           ellipse(x-20,y,size*2,size*2);
           ellipse(x+20,y,size*2,size*2);
           fill(0);
           text(username, x-20, y-12);
           text(mood, x-20, y);
           text(location, x-20, y+12);
         }else{
           ellipse(x,y,size,size);
         }
     }
       
   }
 
   void move(){
     float wander_offset = random(-max_wander_offset, max_wander_offset);
     wander_theta += wander_offset;
     
     x += cos(wander_theta)/2;
     y += sin(wander_theta)/2;
   }
   
 
   void stayInsideCanvas(){
     x %= width;
     y %= height;
   }
 

 
   float getX()
   {
     return x;
   }
   
   float getY()
   {
     return y;
   }
  
  
  }

