/**
 * Created by Vlad on 02.08.2017.
 */

let app = angular.module('ssuBugTracker', ['ui.bootstrap']);

app.run(function (paginationConfig) {
    paginationConfig.firstText = 'Перша';
    paginationConfig.previousText = 'Попередня';
    paginationConfig.lastText = 'Остання';
    paginationConfig.nextText = 'Наступна';
});