function xcr() {
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
var bitcoinValue = 0;

allTheCoins("https://api.coinmarketcap.com/v1/ticker/");
//matchSymName(getName());
//getValues(SYMBOL);
//doMath(BTC);
//addRow(sym, usd, btc, perc);

function getName(){
  var entry = document.getElementById("symbol");
  symbol = symbol.value;
  return symbol;
}

function allTheCoins(URL) {
  var tickerRequest = new XMLHttpRequest();
  tickerRequest.open('GET', URL);
  tickerRequest.send();
  tickerRequest.onload = function() {
    if (tickerRequest.status >= 200 && tickerRequest.status < 400) {
      var input = JSON.parse(tickerRequest.responseText);
      var walletContents = input;
      console.table(input);

      //updateWallet(walletContents);
    }
    else {
      console.log("We connected to the server, but it returned an error.");
    }
  }
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
}
