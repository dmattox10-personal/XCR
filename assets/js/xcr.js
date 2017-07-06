function requests() {
  var symbol = "";
  var symURL = "https://api.nanopool.org/v1/eth/balance/";
  symURL = symURL.concat(getSymURL());
  var btcURL = "https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=BTC";
}
function getSymURL(){
  var entry = document.getElementById("symbol");
  symbol = symbol.value;
  console.log(symbol);
  return symbol;
  }


/*

if (24h >= 0) {
colorRED
}
else {
colorGreen
}

*/
