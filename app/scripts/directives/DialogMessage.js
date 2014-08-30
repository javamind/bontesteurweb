'use strict';

/**
 * Definition d'une directive pour mutualise la gestion des fenetres. Le controller
 * utilisant cette diective devra definir dans son scope une variable qui definira
 * - id : id de la fenetre
 * - name : nom de la fenetre
 * - buttons : liste de boutons comprenat les propriétés suivantes
 *    o styleBtn : style du bouton 1
 *    o clickBtn : action sur click
 *    o nameBtn : libelle
 */
angular.module('devoxxwebApp').directive('dialogMessage', function () {
    return {
        //Lien vers le template utilise
        templateUrl: 'views/components/dialog-message.html',
        //indique que l'on peut utiliser la balise <dialog-message>
        restrict: 'E',
        //recupère le contenu de la balise pour le passer au template
        transclude: true,
        //cherche dans le scope l'element définit dans la propriété name. Par exemple avec
        //<dialog-message name="dialog"> je devrais avoir dans le scope un element dialog
        //avec les proprietes attendues par le template
        scope: {
            dialogInfo: '=name'
        }
    };
});
