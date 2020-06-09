webpackHotUpdate(0,{

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Weather Application\"></Label>\n    <SearchBar name=\"searchBar\" hint=\"Enter City here...\" [text]=\"\"\n(submit)=\"onSubmit($event)\" color=\"yellow\" backgroundColor=\"skyblue\" textFieldHintColor=\"whitesmoke\" textFieldBackgroundColor=\"orangered\"></SearchBar>\n</ActionBar>\n<GridLayout class=\"page\">\n    <ListView [items]=\"WeatherData\" class=\"list-group\">\n        <ng-template let-WeatherData=\"item\">\n            <GridLayout class=\"list-group-item\" rows=\"auto, auto\" columns=\"50, *\">\n               <Label [text]=\"{{WeatherData.temp_celcius}}°\" row=\"0\" col=\"0\"></Label>\n                <Label [text]=\"{{WeatherData.temp_min}}° / {{WeatherData.temp_max}}°\" row=\"0\" col=\"0\"></Label>\n                <Label [text]=\"Feels Like: {{WeatherData.temp_feels_like}}°\" row=\"0\" col=\"0\"> </Label>\n                <Label [text]=\"{{WeatherData.name}}\" row=\"0\" col=\"0\"> </Label>\n                <Label [text]=\"Humidity: {{WeatherData.main.humidity}}%\" row=\"0\" col=\"0\"> </Label>\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsaW9CQUFpb0IsMEJBQTBCLG9FQUFvRSxzQkFBc0IsTUFBTSxzQkFBc0IsZ0ZBQWdGLDZCQUE2QixxRUFBcUUsa0JBQWtCLDhFQUE4RSwyQkFBMkIscUgiLCJmaWxlIjoiMC40N2MyYjQ3NjUxZGMwMWRlMjk3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIjxBY3Rpb25CYXIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPlxcbiAgICA8TGFiZWwgY2xhc3M9XFxcImFjdGlvbi1iYXItdGl0bGVcXFwiIHRleHQ9XFxcIldlYXRoZXIgQXBwbGljYXRpb25cXFwiPjwvTGFiZWw+XFxuICAgIDxTZWFyY2hCYXIgbmFtZT1cXFwic2VhcmNoQmFyXFxcIiBoaW50PVxcXCJFbnRlciBDaXR5IGhlcmUuLi5cXFwiIFt0ZXh0XT1cXFwiXFxcIlxcbihzdWJtaXQpPVxcXCJvblN1Ym1pdCgkZXZlbnQpXFxcIiBjb2xvcj1cXFwieWVsbG93XFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInNreWJsdWVcXFwiIHRleHRGaWVsZEhpbnRDb2xvcj1cXFwid2hpdGVzbW9rZVxcXCIgdGV4dEZpZWxkQmFja2dyb3VuZENvbG9yPVxcXCJvcmFuZ2VyZWRcXFwiPjwvU2VhcmNoQmFyPlxcbjwvQWN0aW9uQmFyPlxcbjxHcmlkTGF5b3V0IGNsYXNzPVxcXCJwYWdlXFxcIj5cXG4gICAgPExpc3RWaWV3IFtpdGVtc109XFxcIldlYXRoZXJEYXRhXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cFxcXCI+XFxuICAgICAgICA8bmctdGVtcGxhdGUgbGV0LVdlYXRoZXJEYXRhPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCI1MCwgKlxcXCI+XFxuICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwie3tXZWF0aGVyRGF0YS50ZW1wX2NlbGNpdXN9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+PC9MYWJlbD5cXG4gICAgICAgICAgICAgICAgPExhYmVsIFt0ZXh0XT1cXFwie3tXZWF0aGVyRGF0YS50ZW1wX21pbn19wrAgLyB7e1dlYXRoZXJEYXRhLnRlbXBfbWF4fX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPjwvTGFiZWw+XFxuICAgICAgICAgICAgICAgIDxMYWJlbCBbdGV4dF09XFxcIkZlZWxzIExpa2U6IHt7V2VhdGhlckRhdGEudGVtcF9mZWVsc19saWtlfX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJ7e1dlYXRoZXJEYXRhLm5hbWV9fVxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPiA8L0xhYmVsPlxcbiAgICAgICAgICAgICAgICA8TGFiZWwgW3RleHRdPVxcXCJIdW1pZGl0eToge3tXZWF0aGVyRGF0YS5tYWluLmh1bWlkaXR5fX0lXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+IDwvTGFiZWw+XFxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9