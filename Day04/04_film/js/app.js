/*

 Otwórz zadanie http://jsfiddle.net/CodersLab/u7fj1jek/  i napisz następującą funkcję, która:
 - po kliknięciu w przycisk rozwiń, rozwinie opis filmu,
 - po kliknięciu w przycisk zamknij, zwinie opis filmu (tylko ten, który chcemy zwinąć, nie wszystkie),
 - zmodyfikuj kod tak, aby po kliknięciu w zamknij, zwijały się wszystkie opisy.


 */


$(function () {

    $('.expand').on('click', function(x){
        x.preventDefault();
        $(this).parents().next().slideDown();
    });

    /*$('.close').on('click', function(){
        $(this).parent().css('display','none')
    })*/

    $('.close').on('click', function(){
        $('.container').slideUp();
    })

});