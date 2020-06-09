webpackHotUpdate(0,{

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Weather Application\"></Label>\n    <SearchBar name=\"searchBar\" hint=\"Enter City here...\" [text]=\"\"\n(submit)=\"onSubmit($event)\" color=\"yellow\" backgroundColor=\"skyblue\" textFieldHintColor=\"whitesmoke\" textFieldBackgroundColor=\"orangered\"></SearchBar>\n</ActionBar>\n<GridLayout class=\"page\">\n    <ListView [items]=\"WeatherData\" class=\"list-group\">\n        <ng-template let-WeatherData=\"item\">\n            <GridLayout class=\"list-group-item\" rows=\"auto, auto\" columns=\"50, *\">\n               <Label: [text]=\"{{WeatherData.temp_celcius}}°\" row=\"0\" col=\"0\"></Label>\n                <Label: [text]=\"{{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°\" row=\"0\" col=\"0\"></Label>\n                <Label: [text]=\"Feels Like: {{WeatherData.temp_feels_like}}°\" row=\"0\" col=\"0\"> </Label>\n                <Label: [text]=\"{{WeatherData.name}}\" row=\"0\" col=\"0\"> </Label>\n                <Label: [text]=\"Humidity: {{WeatherData.main.humidity}}%\" row=\"0\" col=\"0\"> </Label>\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa29CQUFrb0IsMEJBQTBCLHFFQUFxRSxzQkFBc0IsTUFBTSxzQkFBc0IsaUZBQWlGLDZCQUE2QixzRUFBc0Usa0JBQWtCLCtFQUErRSwyQkFBMkIscUgiLCJmaWxlIjoiMC45ODM2MWJhOTcxYWZmYmRlOGFkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIldlYXRoZXIgQXBwbGljYXRpb25cXFwiPjwvTGFiZWw+XFxuICAgIDxTZWFyY2hCYXIgbmFtZT1cXFwic2VhcmNoQmFyXFxcIiBoaW50PVxcXCJFbnRlciBDaXR5IGhlcmUuLi5cXFwiIFt0ZXh0XT1cXFwiXFxcIlxcbihzdWJtaXQpPVxcXCJvblN1Ym1pdCgkZXZlbnQpXFxcIiBjb2xvcj1cXFwieWVsbG93XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInNreWJsdWVcXFwiIHRleHRGaWVsZEhpbnRDb2xvcj1cXFwid2hpdGVzbW9rZVxcXCIgdGV4dEZpZWxkQmFja2dyb3VuZENvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiPjwvU2VhcmNoQmFyPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcIldlYXRoZXJEYXRhXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LVdlYXRoZXJEYXRhPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCI1MCwgKlxcXCI+XFxuICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcInt7V2VhdGhlckRhdGEudGVtcF9jZWxjaXVzfX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPVxcXCJ7e1dlYXRoZXJEYXRhLnRlbXBfbWlufX3CsCAvIHt7V2VhdGhlckRhdGEudGVtcF9tYXh9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcIkZlZWxzIExpa2U6IHt7V2VhdGhlckRhdGEudGVtcF9mZWVsc19saWtlfX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT1cXFwie3tXZWF0aGVyRGF0YS5uYW1lfX1cXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09XFxcIkh1bWlkaXR5OiB7e1dlYXRoZXJEYXRhLm1haW4uaHVtaWRpdHl9fSVcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj4gPC9MYWJlbD5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=