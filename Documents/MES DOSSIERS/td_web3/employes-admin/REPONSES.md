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
# Response: 
    **** the field is empty


## Questions 7.1 — Quelle méthode HTTP est émise lors de la soumission de InternCreate ?
# Response 
:POST /interns — React-Admin calles dataProvider.create("interns", { data: {...} }).

## 7.2 — Quel hook pour la validation conditionnelle de remuneration ?
useWatch permet to read in real time the field value


## 8.1 — Différence entre useGetOne et ReferenceField ?
ReferenceField : declarative component for displaying a reference 
useGetOne : hook that gives full control over
rendering 

## 8.2 — Que se passe-t-il si useGetOne reçoit id: undefined sans enabled ?
React-Admin envoie immédiatement GET /employees/undefined, Error


## 9.1 — Différence entre useGetList et ReferenceManyField ?
ReferenceManyField : declarative and only works inside a SimpleShowLayout.
useGetList is essential when you need a custom render (title with total, styled list,
empty message) or need to access the total independently from the data.

## 9.2 — Comment optimiser la requête de DepartmentStats ?
On utilise perPage: 1 
Un seul enregistrement est transféré au lieu de tous les employés du département.


## 10.1 — Quelle méthode HTTP useUpdate utilise-t-il par défaut ?
PUT by default. To force PATCH: pass meta: { method: "PATCH" } in the parameters.

## 10.2 — Pourquoi previousData est-il nécessaire ?
It allows React-Admin to perform an optimistic update (UI updated immediately)
and restore the previous state on error (rollback). Without it, optimistic update
is disabled and the UI waits for the server response.


## 11.1 — Différence entre useCreate et le composant <Create> ?
<Create> is a dedicated page with React-Admin layout and redirect after success.
useCreate is a low-level hook that creates without navigating, usable in any
component (modal, drawer, inline).

## 11.2 — Comment recharger la liste après useCreate ?
Call useRefresh() in the onSuccess callback. It invalidates the React-Admin cache
and triggers a new getList that updates the Datagrid automatically.


## 12.1 — Les 4 appels useGetList se font-ils en parallèle ou en séquence ?
In parallel. Each useGetList is an independent hook executed in the same React
render cycle. The 4 HTTP requests are triggered simultaneously.

## 12.2 — Pourquoi perPage: 1 est préférable à perPage: 100 ?
Only the total field is needed, not the data itself. perPage: 1 reduces the amount
of data transferred, speeds up the server response and limits memory used by
the React-Admin cache.