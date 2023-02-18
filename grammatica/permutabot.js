    const grammar = `

I ::=   "title:    genera\\n"
      ^ "author:   Fondazione Elia Spallanzani\\n"
      ^ "language: italian\\n"
      ^ "status:   esperimento\\n"
      ^ "topic:    misc\\n"
      ^ "audience: nascita di un erore\\n"
      ^ "created:  21/04/2018"
;

S ::= "<b>" Titolo "</b> <br>"
    \\ Intro  "<br> <br>"
      Nome "-" Razza ^"," Classe ^"," Allineamento Allineamento "<br>"
      le tue caratteristiche sono ^":"  "<br>"
       Caratt Numero  "<br>"
       Caratt Numero ^Numero  "<br>"
       Caratt Numero  "<br> <br>"
     \\ Domanda  "<br> <br>" 
       "<i>" Opzioni "</i> <br>"
;

Titolo ::= ( \\ teh \\ infinite \\ quest
            | \\ looppo \\ solitario
            | \\ the \\ endless \\ ebook
            | \\ ebook of \\ sand
            )
;

Intro ::= (benvenuto nobile eroe ^"!" "," \\ tu sei
          | ancora qui ^"?" stavolta sei
          | metti alla prova il tuo coraggio ^"!" \\ ora sei
          )
;

Nome ::= (Pippo | Franco.o | Baudo) (Pippo | Franco | Baudo)
;

Pippo ::= (\\p | \\c) ^ i ^ (++ cc (_ | ++ ^i) |++ pp | zz | tt) ^ o
;

Franco ::= (\\p |++ \\f) ^ ra ^ (n ^ (z |+ c) | (zz |+ cc)) ^ (o: [i^]o | i: i)
;

Baudo ::= (++ \\b | \\p) ^ a ^ (ud | ld | ul) ^ (i | o)
;

Classe ::= (+ mago |+ bardo | lardo | lago |+ ladro | bago | babbo | largo
           | balbo | baldo | barbo | malgo | valvo | balgo | balvo | cargo
           ) [^ "-" ^ Classe]
;

Razza ::= [semi^] ( [mezz'^] >(elfo | uomo | halfling |--- helder)
                  | [mezzo ^ "-" ^] >(gnomo | coboldo)
                  )
;

Allineamento ::= ( buono | ottimo | malvagio | legale | neutrale | pessimo
              |  illegale | bello | cattivo | bravo
              )
;

Caratt ::= ( forza | destrezza | costituzione  | carisma | digeribilit ^"&agrave" | ingombro
              |  mana | sanit ^"&agrave" mentale | alito puro | intelligenza
              )
;

Pagina ::= Numero^Numero^Numero^Numero^Numero
;

Numero ::= ( 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0
           )
;

Numlett ::= ( due | tre | quattro | cinque | sei | sette | otto | nove | settordici
            )
;

Unitempo ::= ( minuti | Secondi | quarti d'ora | battiti di cuore )
;

Secondi ::= ( _ | milli | micro | pico | femto | nano ) secondi
;

Domanda ::= ( sei soddifatto di te o vuoi ritirare ^"?"
            | davvero appropriato ^"!" \\ che aspetti ad avventurarti ^"?"
            | beh^"," non proprio il massimo ^"," ma ci accontenteremo ^"."
            | dovevano riformarti ^"," ma comunque ^"..." ora che vuoi fare ^"?"
            | non fanno pi ^"&ugrave" gli eroi di una volta ^"."
            | che imponenza ^"!" e adesso vai ^"!" \\ o tu come la vedi ^"?"
            )
;

Opzioni ::= { \\ Opzione1 "<br>" | \\ Opzione2 "<br>" | \\ Opzione3 "<br>" }

Opzione1 ::= Pzione1
;

Opzione2 ::= Pzione2
;

Opzione3 ::= Pzione3
;

Pzione1 ::= (ma che schifo ^"!" voglio "<a href=index.html>" ritirare "</a>" "."
            | preferivo un Razza Classe ^"," "<a href=index.html>" riprova "</a>" ^"."
            | questo allineamento "&egrave" contro la mia religione ^"," "<a href=index.html>" cambiamo "</a>" ^"."
            | non sono mai stato cos ^"&igrave" offeso ^"," "<a href=index.html>" rifammi "</a>" ^"!"
            | mmm ^"..."  andrebbe anche bene ma voglio "<a href=index.html>" cambiare "</a>" ^"," cos ^"&igrave" ^"," senza motivo ^"."
            | ci sarebbe molto da dire ma fai prima a "<a href=index.html>" ritirare "</a>" ^"."
            )
;

Pzione2 ::= (la mia vanit ^"&agrave" "&egrave" soddisfatta ^"," andiamo "<a href=pippo.html>" avanti "</a>" ^"."
            | non vedo l'ora di pugnare ^"!"  portami immantinenti al "<a href=pippo.html>" dongione "</a>" ^"."
            | ti dar ^"&ograve" corda per altri Numlett Unitempo ^"," "<a href=pippo.html>" vediamo un po' "</a>" ^"."
            | yawn ^"," non mi annoiavo tanto dalle superiori ^"," "<a href=pippo.html>" proseguiamo "</a>" ^"."
            | ma le caratteristiche non erano sei ^"?" comunque dai ^"," ho fatto 30 ^"," "<a href=pippo.html>" facciamo 31 "</a>" "..."
            | a a a ^"!" tifenter ^"&ograve" patrone ti monto ^"!" ^"!" "<a href=pippo.html>" continua "</a>" ^"!"
            )
;

Pzione3 ::= (mi hai perso al secondo rigo ^"," "<a href=https://www.twitter.com>" ciao "</a>" ^"." ^"."
            | la mia soglia di attenzione "&egrave" di Numlett secondi ^"," addio ^"."
            | che obs dio cane ^"!" me ne vado ^"."
            | preferisco farmi bannare da facebook ^"," grazie ^"."
            | zio sei rimasto agli anni 80 "," vatti a comprare le timberland ^"."
            )
;

`
