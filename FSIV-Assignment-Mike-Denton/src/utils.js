export const currentTime = () => {
    var currentStartTime = new Date();
    var seconds = currentStartTime.getSeconds();
    var minutes= currentStartTime.getMinutes();
    var hours= currentStartTime.getHours();
    var twelveHourFormat="";
    if(hours>=12)
        twelveHourFormat="PM";
    else   
        twelveHourFormat="AM";

    hours = hours % 12 || 12;

    var startTimeNow=hours+":"+ minutes +":"+ seconds +" "+ twelveHourFormat;
    return startTimeNow;
}

export const currentFormattedTime = (dateNow) => {
    var currentStartTime = new Date(dateNow);
    var seconds = currentStartTime.getSeconds();
    var minutes= currentStartTime.getMinutes();
    var hours= currentStartTime.getHours();
    var twelveHourFormat="";
    if(hours>=12)
        twelveHourFormat="PM";
    else   
        twelveHourFormat="AM";

    hours = hours % 12 || 12;

    var startTimeNow=hours+":"+ minutes +":"+ seconds +" "+ twelveHourFormat;
    return startTimeNow;
}