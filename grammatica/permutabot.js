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
       "<i>" \\ Opzione1 "<br> <br>"
             \\ Opzione2 Pagina "<br> <br>"
             \\ Opzione3 "</i> <br>"
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

Unitempo ::= ( minuti | secondi | millisecondi | quarti d'ora | battiti di cuore | picosecondi )
;

Domanda ::= ( sei soddifatto di te o vuoi ritirare ^"?"
            | davvero appropriato ^"!" che aspetti ad avventurarti ^"?"
            | beh^"," non proprio il massimo ^"," ma ci accontenteremo ^"."
            | dovevano riformarti ^"," ma comunque ^"..."
            | non fanno pi ^"&ugrave" gli eroi di una volta ^"."
            | che imponenza ^"!" e adesso vai ^"!"
            )
;

Opzione1 ::= Pzione1
;

Opzione2 ::= Pzione2
;

Opzione3 ::= Pzione3
;

Pzione1 ::= (ma che schifo ^"!" voglio "<a href=https://www.eliaspallanzani.github.io/pippo>" ritirare "</a>"
            | preferivo un Razza Classe ^"," "<a href=pippo.html>" riprova "</a>" ^"."
            | questo allineamento "&egrave" contro la mia religione ^"," cambiamo ^"."
            | non sono mai stato cos ^"&igrave" offeso ^"," rifammi ^"!"
            | mmm ^"..."  andrebbe anche bene ma voglio cambiare ^"," cos ^"&igrave" ^"," senza motivo ^"."
            | ci sarebbe molto da dire ma fai prima a ritirare ^"."
            )
;

Pzione2 ::= (la mia vanit ^"&agrave" "&egrave" soddisfatta ^"," andiamo avanti
            | non vedo l'ora di pugnare ^"!"  portami immantinenti al dongione
            | ti dar ^"&ograve" corda per altri Numlett Unitempo ^"," vediamo un po'
            | yawn ^"," non mi annoiavo tanto dalle superiori ^"," proseguiamo
            | ma le caratteristiche non erano sei ^"?" comunque dai ^"," ho fatto 30 ^"," facciamo 31 ^"..."
            | a a a ^"!" tifenter ^"&ograve" patrone ti monto ^"!" ^"!" continua ^"!"
            )
;

Pzione3 ::= (mi hai perso al secondo rigo ^"," ciao ^"."
            | la mia soglia di attenzione "&egrave" di Numlett secondi ^"," addio ^"."
            | che obs dio cane ^"!" me ne vado
            | preferisco farmi bannare da facebook ^"," grazie ^"."
            | zio sei rimasto agli anni 80 "," vatti a comprare le timberland ^"."
            )
;

`
