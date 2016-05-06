/**
 * This directive represents the contents of a study item. If there is a study item of type questions, this directive represents the question itself.
 * The answers of a question will be another directive.
 *
 * Created by rizwanahmed on 3/2/14.
 */
'use strict';
angular.module('crackooApp').directive('choicecontentdesc', [
  '$compile',
  function ($compile) {
    return {
      restrict: 'E',
      scope : {
          text : '@'
      },
      link: function (scope, element) {
        //watch the value in the parent scope
        scope.$parent.$watch('text', function (value) {
          console.log(value);
          if (typeof value === 'undefined') {
            return;
          }
          //value= "$$\\sqrt{k}$$";

          element.replaceWith($compile('<div class="choiceBody"> <p> <b>' + value + '</b> </p> </div>')(scope));
        });
      }
    };
  }
]);
