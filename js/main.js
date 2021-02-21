var input;
$(document).on('keypress',function(e) {
    if(e.which == 13) {
      input = document.getElementById("minput").value;
      var outcpy ;
      outpcy = convertonp(input);
      $("#minput").slideDown("200");
      console.log(outcpy);
      $("#presult").text(outpcy);
      $("#result").show("slow");
    }
    }
);
function convertonp(input){
  var  len = input.length;
  var out = [];
  var stack = [];
  for(var a=0;a<len;a++){
    if(input[a]=='+' ||
       input[a]=='-' ||
       input[a]=='*' ||
       input[a]=='/' ||
       input[a]=='(' ||
       input[a]==')' ||
       input[a]=='^')
       {
         if(input[a] == '(') stack[stack.length] = input[a];
         else if(input[a] == ')'){
           var c = 1;
           while(stack[stack.length-1] !='(' && stack.length>0){
             out[out.length] = stack[stack.length-1];
             stack.pop();
             c++;
           }
           stack.pop();
         }
         else if(getPrio(input[a]) > getPrio(stack[stack.length-1]) || stack.length == 0){
           stack[stack.length] = input[a];
         }
         else if (getPrio(input[a]) <= getPrio(stack[stack.length-1])){
           while (getPrio(input[a]) <= getPrio(stack[stack.length-1]) && stack.length>0) {
             out[out.length] = stack[stack.length-1];
             stack.pop();
           }
           stack[stack.length] =input[a];
         }
       }
       else if(input[a] == ';'){
         for(var l =1; l<=stack.length;l++){
           out[out.length] = stack[stack.length-l];
         }
     }
       else{
         out[out.length] = input[a];
       }
  }
  return out;
}
function getPrio(sign){
  if(sign == '+'){return 1}
  else if(sign == '-'){return 1}
  else if(sign == '*'){return 2}
  else if(sign == '/'){ return 2}
  else if(sign == '('){return 0}
  else if(sign == ')'){ return 1}
  else if(sign == '^'){ return 3}
  else if(sign == 'neg'){ return 2}
  else return -1;
}
