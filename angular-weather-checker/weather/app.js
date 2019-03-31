// MODULE

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

var twoPageSelect = document.getElementById('twoPage');
var fivePageSelect = document.getElementById('fivePage');
var sevenPageSelect = document.getElementById('sevenPage');
var searchField = document.getElementsByClassName('form-control');
var formControl = $('.form-control');

var linkList = $('#link-list');

$('#link-list .page-link').hover(function () {
    Cookies.set('currentCity', $('.form-control').val());
    console.log('inside of watch: ' + Cookies.get('currentCity'));
});
