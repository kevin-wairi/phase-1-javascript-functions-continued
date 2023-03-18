// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

const mondayWork=function (activity1="go to the office"){
    return `This Monday, I will ${activity1}.`;
}
mondayWork();
// a fullstop almost made me sweat off this test 

function wrapAdjective(aste='*'){
    return function(str='special'){
        return `You are ${aste}${str}${aste}!`;
    }
}
wrapAdjective()();
console.log(wrapAdjective()());