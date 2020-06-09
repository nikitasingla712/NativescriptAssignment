webpackHotUpdate(0,{

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\n    <Label class=\"action-bar-title\" text=\"Weather Application\"></Label>\n</ActionBar>\n    <SearchBar name=\"searchBar\" hint=\"Enter City here...\" [text]=\"\"\n(submit)=\"onSubmit($event)\" color=\"yellow\" backgroundColor=\"skyblue\" textFieldHintColor=\"whitesmoke\" textFieldBackgroundColor=\"orangered\">\n\n<GridLayout class=\"page\">\n    <ListView [items]=\"WeatherData\" class=\"list-group\">\n        <ng-template let-Weather=\"item\">\n            <GridLayout class=\"list-group-item\" rows=\"auto, auto\" columns=\"50, *\">\n               <Label: [text]= \"{{Weather.temp_celcius}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"{{Weather.temp_min}}° / {{WeatherData.temp_max}}°\" row=\"0\" col=\"0\">\n                <Label: [text]= \"Feels Like: {{Weather.temp_feels_like}}°\" row=\"0\" col=\"0\">\n                <Label: [text]=\"{{Weather.name}}\" row=\"0\" col=\"0\">\n                <Label: [text]=\"Humidity: {{Weather.main.humidity}}%\" row=\"0\" col=\"0\">\n            </GridLayout>\n        </ng-template>\n    </ListView>\n</GridLayout>\n</SearchBar>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscW5CQUFxbkIsc0JBQXNCLDhEQUE4RCxrQkFBa0IsTUFBTSxzQkFBc0IsMEVBQTBFLHlCQUF5Qiw2REFBNkQsY0FBYyxzRUFBc0UsdUJBQXVCLDBIIiwiZmlsZSI6IjAuMzdlZDFmZTY5ZDY3ZmJiMTQ3MmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8QWN0aW9uQmFyIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJhY3Rpb24tYmFyLXRpdGxlXFxcIiB0ZXh0PVxcXCJXZWF0aGVyIEFwcGxpY2F0aW9uXFxcIj48L0xhYmVsPlxcbjwvQWN0aW9uQmFyPlxcbiAgICA8U2VhcmNoQmFyIG5hbWU9XFxcInNlYXJjaEJhclxcXCIgaGludD1cXFwiRW50ZXIgQ2l0eSBoZXJlLi4uXFxcIiBbdGV4dF09XFxcIlxcXCJcXG4oc3VibWl0KT1cXFwib25TdWJtaXQoJGV2ZW50KVxcXCIgY29sb3I9XFxcInllbGxvd1xcXCIgYmFja2dyb3VuZENvbG9yPVxcXCJza3libHVlXFxcIiB0ZXh0RmllbGRIaW50Q29sb3I9XFxcIndoaXRlc21va2VcXFwiIHRleHRGaWVsZEJhY2tncm91bmRDb2xvcj1cXFwib3JhbmdlcmVkXFxcIj5cXG5cXG48R3JpZExheW91dCBjbGFzcz1cXFwicGFnZVxcXCI+XFxuICAgIDxMaXN0VmlldyBbaXRlbXNdPVxcXCJXZWF0aGVyRGF0YVxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXBcXFwiPlxcbiAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1XZWF0aGVyPVxcXCJpdGVtXFxcIj5cXG4gICAgICAgICAgICA8R3JpZExheW91dCBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCI1MCwgKlxcXCI+XFxuICAgICAgICAgICAgICAgPExhYmVsOiBbdGV4dF09IFxcXCJ7e1dlYXRoZXIudGVtcF9jZWxjaXVzfX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT0gXFxcInt7V2VhdGhlci50ZW1wX21pbn19wrAgLyB7e1dlYXRoZXJEYXRhLnRlbXBfbWF4fX3CsFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgICA8TGFiZWw6IFt0ZXh0XT0gXFxcIkZlZWxzIExpa2U6IHt7V2VhdGhlci50ZW1wX2ZlZWxzX2xpa2V9fcKwXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPVxcXCJ7e1dlYXRoZXIubmFtZX19XFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICAgIDxMYWJlbDogW3RleHRdPVxcXCJIdW1pZGl0eToge3tXZWF0aGVyLm1haW4uaHVtaWRpdHl9fSVcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICA8L25nLXRlbXBsYXRlPlxcbiAgICA8L0xpc3RWaWV3PlxcbjwvR3JpZExheW91dD5cXG48L1NlYXJjaEJhcj5cIiJdLCJzb3VyY2VSb290IjoiIn0=