// write your code be
function happyHolidays()
{
return("Happy holidays!")
}


function happyHolidaysTo(name)
{
  return(`Happy holidays, ${name}!`)
}


function happyCustomHolidayTo(holiday, name)
{
  return (`Happy ${holiday}, ${name}!`)
}

function holidayCountdown(holiday, days)
{
  return(`It's ${days} days until ${holiday}!`)
}

log();
var log = function() {
  console.log(greeting);
  var greeting = 'Hello!';
}