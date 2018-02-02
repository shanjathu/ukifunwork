//script.js

SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function() {
    SC.stream('/tracks/347092093',function(sound){
         $('#start1').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop1').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404309',function(sound){
         $('#start2').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop2').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/305040225',function(sound){
         $('#start3').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop3').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404305',function(sound){
         $('#start4').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop4').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404305',function(sound){
         $('#start5').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop5').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404305',function(sound){
         $('#start6').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop6').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404305',function(sound){
         $('#start7').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop7').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404305',function(sound){
         $('#start8').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop8').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

    SC.stream('/tracks/31404305',function(sound){
         $('#start9').click(function(e) {
           e.preventDefault();
           sound.start();
         });

         $('#stop9').click(function(e) {
           e.preventDefault();
           sound.stop();
         });
    });

});
