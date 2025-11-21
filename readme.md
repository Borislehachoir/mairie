__Partie motivationnelle du projet__


Salut !

A l'origine de ce projet, il y a un questionnement :

" Pourrais-je proposer un service équivalent, mais une expérience améliorée ?"

Je suis étudiant en webdesign à l'IUT de Cortè, donc quand je suis tombé sur le site web de la mairie de mon village, évidemment, quelque chose m'a tapé dans l'oeil : la base du site est excellente, mais l'expérience qu'on a dessus... comment dire, j'aurais eu 8/20 si c'était ce que j'avais proposé comme portfolio en fin de première année. 

Je développe ce site seul, sans soutien financier et d'ailleurs, ce n'est pas pour l'argent que je fais ça : je le fais pour les connaissances que réaliser ce projet m'apporte. 

Après tout, Newton lui-même n'a-il pas dit, en son temps, "Ce que nous savons est une goutte d'eau [mais] ce que nous ignorons est un océan" ? Gorki n'a-il pas écrit, dans Ma vie d'enfant (1914), "Si tu apprends tout pendant que tu es jeune, tu n'auras plus de questions à poser quand tu seras vieux", reprenant ainsi une autre idée de Léonard de Vinci datant du XVè siècle ?

C'est pourquoi je propose ce site ici, et que je le propose aussi à la mairie de mon village. Aujourd'hui, je me pose mille questions parce qu'il y a encore des tonnes de choses que je ne sais pas. En acquérissant des compétences, en trouvant des réponses à mes questions, je deviendrais une personne plus complète, et une fois vieux et épuisé, je pourrai regarder derrière moi en souriant, le coeur libre de regrets. 

Mes plus sincères salutations, et en vous souhaitant une excellente expérience sur ce site, 

Boris


__Partie technique du projet et mises à jour :__

*MISE A JOUR INITIALE DU 27 OCTOBRE 2025:* 

-Création d'une première page page de test, basée sur la section "Services publics" (([voir site](https://www.mairie-de-sisco.com/services-publics/)));
-Développement d'un en-tête réutilisable systématiquement, en conservant chacune des sections et sous-sections initiales;
- Intégration d'une librairie d'icônes en ligne, Lucide, par le biais d'un *Node Package Module* (npm) lui-même installé grâce à l'outil Windows Powershell;
-Création d'un premier script en language JavaScript, et d'un premier fichier de styles en language CSS. 
- Elaboration de ce README

Projets pour une prochaine mise à jour (dénommée *Update* suivi d'une date dans la suite de ce document): 

-Développement d'un footer réutilisable. 
-Etablir des scripts, notamment en se servant de librairies comme Node.js ou React.
-Création d'une base de données sur Firebase et hébergement de ce site sur Github (.js/.css/.html et SQL/PHP si nécessaire.) 
-Recherche d'une méthode efficace et peu onéreuse pour proposer une solution d'hébergement acceptant des languages back-end comme MySQL ou PHP, afin de proposer un back office simple, fonctionnel et pratique, avec un système d'authentification sécurisé et une interface d'administrateur complète. 
-Retravailler la distribution informationnelle à l'aide d'un MVC, en s'appuyant sur des méthodes 
-Utilisations d'APÏ et de librairies de style pour proposer une expérience d'utilisation satisfaisante et ergonomique. 


*UPDATE du 31 octobre 2025 :*

- Ajout d'un système de login d'après un exemple en libre accès sur Github, disponible à l'(([adresse suivante](https://github.com/LakshayD02/Signup-Login-Form-with-Validation/tree/main)))
- Correction de bug, intégration d'un back office hébergé en ligne par l'intermédiaire de l'API Sanity. NOTE : Le login donne justement accès à ce back office, par le biais d'une redirection vers son URL. 
- Ajout d'un premier système de sécurité par le biais d'un Captcha V2
- Ajout d'un fichier .env pour offrir une première sécurité des identifiants ou des clés Captcha. 
- Création d'une page d'articles dynamique basée encore une fois sur la page ''Actualités'' du site de la mairie, reliée à ladite API par le biais du Sanity Studio (= 'back office' auquel se réfère cette update). 
- Barre de navigation actualisée, et simplifiée. Jonctions de certaines pages en une seule (notamment au niveau de Services Publics)

Difficultés rencontrées :

- Arriver à choisir une API qui soit accessible à n'importe qui, et qui puisse efficacement gérer les tâches pour lesquelles elle serait sollicitée (-> ajouter, supprimer ou modifier des articles, les rattacher à des catégories et afficher le tout de manière dynamique sur le site Internet + gros bonus si l'interface est simple, moderne et minimaliste; et si je peux m'en servir plus tard pour faire d'autres trucs que gérer uniquement des articles)
- Refus de connexion entre le back office et le site web. Processus de trial and error, plusieurs fois, afin de parvenir à trouver une solution n'impliquant pas de modifications irréversibles. 
- Première tentative d'intégration d'une solution OTP (One-Time Password), qui consiste, si on doit l'expliquer en français, à envoyer un code par e-mail ou par sms, et à demander ce même code sur le site web visité. Vous avez aussi la forme Google-esque, où ils vous demandent d'appuyer sur un bouton style "C'est bien moi", souvent sur votre téléphone ou votre tablette, lors d'une toute première connexion sur un ordinateur ou autre. 
    --> Cette tentative figure parmi les difficultés rencontrées pour une raison très simple. Si vous souhaitez développer cette méthode, vous n'avez le choix qu'entre deux solutions : soit vous creusez pendant quatre heures à la recherche d'une API fonctionnelle, soit vous essayez de le développer vous-même... La recherche d'API, ou d'une solution ne nécéssitant pas de tout coder ex nihilo, se poursuit donc avec beaucoup d'espoir et d'ardeur. 

Nouveaux projets pour une prochaine mise à jour :

- Traduire la page dans deux autres langues (grosse hésitation entre corse/anglais et italien/anglais pour le coup), et par conséquent, ajouter un bouton langues dans la barre de navigation. 
- Proposer une autre couche d'authentification au niveau de la page de connexion (login, en anglais). 
- Ajouter des moyens de cryptages pour sécuriser l'accès à des informations sensibles comme les identifiants de connexion, la clé privée du Captcha ou l'espace Sanity. 
- Créer d'autres pages du site de la Mairie
-Proposer d'autres solution orientée UX, comme par exemple la possibilité de copier automatiquement un mail en destinataire à l'aide d'un "mailto:", et d'ainsi simplifier cette partie de l'interaction entre les habitants de Sisco et leur mairie. 
-Mettre à jour la liste de commerces/ producteurs/ associations/ restaurants/ hébergement présentée sur le site originel (l'auto-école n'existe pas; il y a une productrice de miel à Balba.)