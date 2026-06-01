# Réponses aux questions - Projet employes-admin

## Exercice 1 — Configuration de l'application

### Question 1.1 : Que représente le dataProvider dans React-Admin ? Quel est son rôle ?

Réponse :
Le dataProvider est un objet qui fait l'interface entre React-Admin et l'API backend. Son rôle est de :
- Traduire les requêtes de React-Admin (GET_LIST, GET_ONE, CREATE, UPDATE, DELETE) en appels HTTP
- Transformer les données dans le format attendu par React-Admin
- Gérer la communication asynchrone avec différentes sources de données

### Question 1.2 : Ouvrez l’onglet Network du navigateur. Quelle requête HTTP est envoyée au chargement de la liste ?
Réponse :
La requête envoyée est : GET http://localhost:3002/employees?_sort=id&_order=ASC&_start=0&_end=10


## Exercice 2 — Liste des employés

### Question 2.1 : Que fait la prop rowClick="edit" sur le Datagrid ?

**Réponse :**
La prop `rowClick="edit"` fait que lorsqu'on clique sur n'importe quelle ligne du tableau, on est automatiquement redirigé vers la page d'édition de cet enregistrement.

### Question 2.2 : Passez perPage à 2. Que se passe-t-il dans l’interface ?

**Réponse :**
Quand on passe `perPage={2}` :
- Le tableau n'affiche plus que 2 employés par page
- La pagination s'adapte automatiquement (avec 3 employés → Page 1 = 2, Page 2 = 1)
- La requête API change : `GET /employees?_start=0&_end=2` pour la page 1

## Exercice 3 — Création d’un employé

### Question 3.1 : Que se passe-t-il si vous soumettez le formulaire sans remplir le prénom ?

**Réponse :**
La validation empêche l'envoi du formulaire. Un message d'erreur "Required" s'affiche en dessous du champ Prénom. Le formulaire n'envoie pas la requête POST à l'API tant que le champ n'est pas rempli.

### Question 3.2 : Essayez de saisir un salaire de 500 euros. Que se passe-t-il ?

**Réponse :**
La validation `minValue(1500)` détecte que 500 < 1500. Un message d'erreur s'affiche en dessous du champ Salaire indiquant que le salaire doit être au minimum 1500. Le formulaire ne peut pas être soumis.

## Exercice 4 — Modification d’un employé

### Question 4.1 : Quelle méthode HTTP est utilisée lors de la sauvegarde d’une modification ? Vérifiez dans l’onglet Network.

**Réponse :**
La méthode HTTP utilisée est **PUT** : PUT http://localhost:3002/employees/1


### Question 4.2 : À quel moment useRecordContext() est-il disponible ? Que retourne-t-il si l’enregistrement n’est pas encore chargé ?

**Réponse :**
`useRecordContext()` est disponible à l'intérieur d'un composant descendant d'un `RecordContextProvider` (comme `<Edit>`, `<Show>`). 
Si l'enregistrement n'est pas encore chargé, il retourne **undefined**.

## Exercice 5 — Fiche détail

### Question 5.1 : Quelle différence y a-t-il entre SimpleShowLayout et TabbedShowLayout ?

**Réponse :**

| SimpleShowLayout | TabbedShowLayout |
|------------------|------------------|
| Affiche tous les champs sur une seule page | Organise les champs dans des onglets |
| Idéal pour peu de champs (moins de 5-6) | Idéal pour beaucoup de champs |
| Tout est visible immédiatement | L'utilisateur doit cliquer sur les onglets |
| Simple et rapide à mettre en place | Plus complexe, nécessite plusieurs sections |

## Tableau récapitulatif des requêtes HTTP

| Action | Méthode HTTP | URL |
|--------|-------------|-----|
| Charger la liste | GET | `/employees?_sort=id&_order=ASC&_start=0&_end=10` |
| Voir le détail | GET | `/employees/{id}` |
| Créer un employé | POST | `/employees` |
| Modifier un employé | PUT | `/employees/{id}` |
| Supprimer un employé | DELETE | `/employees/{id}` |


##### SUJET_PART2
## Exercice 6 — InternList
# Question: 6.1 : ReferenceField génère quel appel HTTP pour résoudre le manager ? Vérifiez dans l'onglet
Network de votre navigateur.
# Réponse: 
    **** <ReferenceField> is useful for displaying many-to-one and one-to-one relationships, e.g. the details of a user when rendering a post authored by that user. 
    **** This component fetches a referenced record (users in this example) using the dataProvider.getMany() method, and passes it to its child.

# Question: 6.2 : Que se passe-t-il visuellement si managerId ne correspond à aucun employé ?
# Réponse: 
    **** the field is empty