/***********************
* Adobe Edge コンポジションアクション
*
* このファイルを編集する際には注意が必要です。必ず関数シグニチャと
* 「Edge」で始まるコメントを保持して、 Adobe Edge 内からこれらのアクションを
* 操作可能な状態にしておいてください。
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // よく使用する Edge クラスのエイリアス

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

//=========================================================
   //Edge symbol: 'backgroundArea'
   (function(symbolName) {

   })("background");
   //Edge symbol end:'background'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'catAnimation_black'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play("waiting");

      });
      //Edge binding end

   })("blackcatSprite");
   //Edge symbol end:'blackcatSprite'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'blackcatSprite_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         sym.play("waiting");

      });
         //Edge binding end

      })("whitecatSprite");
   //Edge symbol end:'whitecatSprite'

//=========================================================
   //Edge symbol: 'menu'
   (function(symbolName) {

   })("menu");
   //Edge symbol end:'menu'

})(jQuery, AdobeEdge, "EDGE-76607325");