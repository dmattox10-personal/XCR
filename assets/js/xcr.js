/*

FLOW:
get ALL coins, store NAME and SYMBOL into an object.
loop over the names object comparing to $SYMBOL text from form, return the NAME when found.
hit the API again, with the $NAME added to the URL.
create a table row.
insert data from second API hit, into table row
SOMEWHERE in there, do the USD conversion from BTC.
*/

//var name = getName();

allTheCoins();
matchSymName(getName());
getValues(SYMBOL);
doMath(BTC);
addRow(sym, usd, btc, perc);

function getName(){
  var entry = document.getElementById("symbol");
  symbol = symbol.value;
  return symbol;
}

/*  var symbol = "";
  var symURL = "https://min-api.cryptocompare.com/data/generateAvg?fsym=PASC&tsym=BTC&markets=Poloniex";
  symURL = symURL.concat(getSymURL());
  var btcURL = "https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=BTC";
}
function getSymURL(){
  var entry = document.getElementById("symbol");
  symbol = symbol.value;
  console.log(symbol);
  return symbol;
  }
*/

/*

if (24h >= 0) {
colorRED
}
else {
colorGreen
}

*/
