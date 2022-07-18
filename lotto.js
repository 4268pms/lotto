//번호 6개 입력
var my=[26,17,4,9,23,33]
    document.write("내가 선택한 번호는:"+my);

document.write("<br>");

var comLotto=[];

//로또 번호           
for(i=1;i<7;i++){
    var comNum=Math.floor(Math.random()*45+1);
    comLotto.push(comNum); //push로 배열에 각각 입력
}

//중복확인

for(var i=0; i<6;i++){
    for (var j=0;j<6;j++){
        if(j==i){ 
            
        }     //j,i = 0  1  2  3  4  5
        //ex:comLotto[10,20,30,40,25,15]
        //j가 x 일 경우 순차적으로 i 의 x 와 비교
        else if(comLotto[j]!=comLotto[i]){   //다른 조건       
        }             

        else{//조건이 안 맞을때
            while (true){
                if(comLotto[j]==comLotto[i]){
                    comLotto[j]=Math.floor(Math.random()*45+1);
                }// 중복일떄 다시 뽑고 비교
                else{
                    break;
                }
            }
        }
    }
}
document.write("로또 당첨 번호는:"+comLotto);

document.write("<br>");

////    보너스번호 (답 참고함)
var bonus = 0;

bonus = Math.floor(Math.random() * 45) + 1; 

for(var i=0; i<6;i++){
    if (bonus!=comLotto[i]){
        
    } else{//조건이 안 맞을때
            if(bonus==comLotto[i]){
                bonus=Math.floor(Math.random()*45+1);
            }// 중복일떄 다시 뽑고 비교
            else{
                break;
            }
        }
    }
document.write("보너스 당첨 번호는:"+bonus);
// 일치하는 수
var count = 0;
for(i=0;i<6;i++){
    for(j=0;j<6;j++){
        if(comLotto[i]==my[j]){// i[0,1,2,3,4,5] == j[0,1,2,3,4,5]
            count++; // 일치할경우 한개씩 올라감
            break;
        }
    }
}
document.write("<br>");
document.write((count)+"개 맞추셨습니다."+"<br>");

//등수
var num = "";
switch(count){
    case 0:
    case 1:
    case 2:
        num = "꽝!!! 다음기회에";
        break;
    case 3:
        num = "5등에 당첨되셨습니다.";
        break;
    case 4:
        num = "4등에 당첨되셨습니다.";
        break;
    case 5:
        num = "3등에 당첨되셨습니다.";
        //2등 처리
        for(var i=0;i<6;i=i+1){
            if(my[i]==bonus){// 보너스 번호가 3등 당첨 유저의 나머지 한번호와 일치하는경우
                // 2등 처리
                num = "2등에 당첨되셨습니다.";
            }
        }
        break;
    case 6:
        num = "1등에 당첨되셨습니다.";
        break;        
}
document.write(num);
