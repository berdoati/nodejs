A problema az volt hogy a `relationMappings` helyett `relationMapping` volt,
viszont igy mar mukodik az `.eager` query.

Futtataskor fontos hogy legyen egy `npm install` elotte, es `node -r
dotenv/config index.js` el tudjatok futtatni, jo jatekot!

Linkek:
- https://yarnpkg.com/en/
- https://nodeschool.io/
- http://knexjs.org
- https://vincit.github.io/objection.js
- https://www.npmjs.com/package/dotenv
- https://github.com/Reactive-Extensions/RxJS

Tovabbi jegyzetek, utana nezendok:
----------------------------------

nvm et rakjunk majd fel.
https://github.com/creationix/nvm

lehet valogatni node verziot, megoldja a symlinkelest is, hogy a kivalasztott verzioval menjen.


npm shrinkwrap

ha van shrinkwrap akkor az olyan mint a composer.lock, az abba egetett verziok jonnek
npm installal


npm-check-updates

faja tool, megmondja mibol van update

yarn
van lock metodika

greenkepper.io




node .
default index.js et inditja

peer dependencia
nem rakja fel alapbol


npm boom
hiba kezeles


regebbi node kod futtatasa 
zero-fill-buffer
ne felejtodjon el.


error handling, express middleware-t erdemes irni ami kezeli es logolja a hibakat.

node v7 be az async await volt a main feature.

nodesource security leirasokat meg lehet nezni.

npm init -y nem kerdez.



knex.
erdemes lehet globalisan is felinstallalni.

knex init
csinal configot.


faker
fixture data
https://www.npmjs.com/package/faker

npm install -D (--save-dev)


passwordre bcrypt
math.random ot hagyjuk


objection
knex et wrappeli ORM e
http://vincit.github.io/objection.js/


node debug [file]

node --inspect [file]


Teszteleshez package-ek

mocha
chai
chai as promise

sinon
