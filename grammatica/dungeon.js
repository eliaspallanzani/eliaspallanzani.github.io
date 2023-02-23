const grammar = `

I ::= "title: dungeon\\n"
      ^"author: Spallanzani Elia\\n"
      ^"language: italian\\n"
      ^"status: refinable\\n"
      ^"topic: mah\\n"
      ^"comment: un generatore di stanze dungeon\\n"
;

S ::= \\ sei in Nomestanza ^"." "<br>"
\\ Descrizionest "<br>"
;

Nomestanza ::= ( N1.M [ LUCE.M ] 
               | N1.F [ LUCE.F ]
               )
;

N1 ::= M: un (corridoio lungo NUM metri
          | ^o stanzino di BIVI x 1 metri
          | incrocio con BIVI biforcazioni
          | pianerottolo
          | cunicolo
          | ^o studio 
          )
       |
       F: una ( stanza >DACHE di NUM x NUM metri
          | cloaca
          | palestra ( di scherma | per gladiatori )
          | cucina ( sporca | abbandonata | depredata | col fuoco acceso )
          | camera >DACHE
          | stalla  ( dei maiali | dei cinghiali | dei dragonzoli )
          | piazza ( sotterranea | dei lamenti | delle statue )
          | fortezza
          | caserma
          | cantina ( sporca | abbandonata | depredata | ricchissima )
          | caverna ( di basalto | di arenaria | piena di stalattiti )
      )
;
DACHE ::= da letto
   | da allenamento
   | da pranzo
   | della \\ notte
   | da bagno
   | della musica
   | del MOB.N
   | dei \\ tappeti
   | del \\ focolare
   | della \\ giustizia
   | militare
   | principale
;

LUCE ::= M: ( 
                ( [(semi|del tutto)]buio  
                )
            | 
                ( illuminato da 
                | privo di 
                ) FONTELUCE
            | 
                (con un poco di 
                | pieno di 
                ) ATMOSFERA 
            )
       | F: ( 
                ( buia 
                | semibuia 
                | del tutto buia 
                )
            | 
                ( illuminata da 
                | priva di 
                ) FONTELUCE
            | 
                (con un poco di 
                | pieno di 
                ) ATMOSFERA
            )
;

FONTELUCE ::= ( torce 
              | candele 
              | fuochi fatui
              | feritoie
              )
;

ATMOSFERA ::= ( nebbia 
              | fumo 
              | ombre 
              | echi 
              )
;

Descrizionest ::= ST1^ "<br>" \\^COSE^ "<br>" \\^Osservi;

ST1 ::= "&egrave" piuttosto AGG.F e AGG.F"."
| \\al centro c' ^"&egrave" un grande disco translucido ^"," quasi fosse una
lastra di ghiaccio posata su un abisso senza fine^"."
| \\sei ad un incrocio tra un corso principale ed una strada secondaria^"."
| \\probabilmente ti trovi in prossimit ^"&agrave" di uno degli accessi al secondo livello^"."
| \\non ricordi di aver visto prima questo luogo sinistro^"."
| \\le pareti sono screpolate e fanno temere un crollo^"."
| \\un odore di ( ODORE.M | ODORE.F ) ti riempie le narici^"."
| \\si direbbe che qui ci fosse una stalla^"."
| \\  proprio il posto adatto per un agguato^"."
| \\il pavimento scintilla come se fosse cosparso da schegge di mica^"."
| \\vedi una scala AGGETTIVOO che conduce verso la parte pi^"&ugrave" bassa del labirinto^"."
| \\a pavimentazione "&egrave" fatta di lastre AGGETTIVOO^"."
| \\il soffitto sembra di granito e con il pavimento AGGETTIVOO^"."
| \\c'^"&egrave" una sorta di AGG.M e AGG.M ponte AGGETTIVOO oltrepassa il fossato riempito di melma e acqua^"."
| \\stai percorrendo un AGG.M [e AGG.M] ponte AGGETTIVOO^"."
| N1 "&egrave" una stanza non molto AGG.F^"."
| \\contiene solo degli scaffali sui quali poggiano sacchi di (SPADA.N | CAMICIA) ^"."
| \\pavimento e soffitto sono AGGETTIVOO mentre i muri rimangono AGGETTIVOO^"."
;

COSE ::= ci sono delle casse di legno ammuffite accatastate a forma di piramide^"."
| un camino spento fa bella mostra di s^"&eacute" in un angolo^"."
| c'^"&egrave" un tavolo di legno con quattro sedie scompagnate stile cena dallo sceriffo di Nottingham^"."
| alla parete c'^"&egrave" una libreria con tomi dalle seriche copertine ^"."
| un mucchio di vestiti gettati a casaccio emana prepotente odore di sterco di MOB.N ^"."
| sul pavimento riesci a distinguere un mosaico che reca scritta in tutte le lingue la parola '(\\MOB.N | \\ARIA | CAMICIA)' ^"."
| al centro della stanza c'^"&egrave" una statua velata dalle forme inquietanti ^"." \\sul basamento c'^"&egrave" scritto '(\\MOB.N | \\ARIA | \\CAMICIA)' ^"."
| sulla parete est poggia un'enoteca contenente un grande numero di diverse qualit^"&agrave" di vino e liquori ^"," tra i quali noti il famoso liquore LIQUORE^"."
;

ODORE ::= (M: (piscio
             | zolfo
             | muschio
             | zafferano
             | letame
             | sterco
             | sangue 
             | pummarola
             )
          |
          F: (merda
             | acqua
             | colla
             | cipolla
             | panna
             | gloria
             | paura
             )
           )
;

AGG ::= (M: (scarno
            | alto
            | basso
            | formoso
            | baffuto
            | gobbo
            | puzzolente
            | pustoloso
            | enorme
            | grezzo
            | povero
            | robusto
            | muscoloso
            | massiccio
            | peloso
            )
        |
        F: (scarna
           | alta
           | bassa
           | formosa
           | baffuta
           | gobba
           | puzzolente
           | pustolosa
           | enorme
           | grezza
           | povera
           | robusta
           | muscolosa
           | massiccia
           | pelosa
           )
        )
;

SPADA ::= S: SPADA1.S [AGGETTIVOO] [DACHE] | N: SPADA1.N [AGGETTIVOO] [DACHE];
SPADA1 ::= (S:una | N:_) spada
       | (S:una | N:_) betoniera giocattolo
       | (S:una | N:_) marionetta di MOB.S
       | (S:una | N:_) sciabola
       | (S:una | N:_) tonnellata di tritolo
       | (S:una | N:_) borsa
       | (S:una | N:_) lavagna luminosa
       | (S:una | N:_) penna a sfera
       | (S:una | N:_) pirofila
       | (S:una | N:_) vasca da bagno
       | (S:una | N:_) bisarca
       | (S:una | N:_) torcia
       | (S:una | N:_) lampadina
       | (S:una | N:_) zimarra
       | (S:una | N:_) sedia
       | (S:una | N:_) cassa
       | (S:una | N:_) panchina
       | (S:una | N:_) stuoia
;

AGGETTIVOO ::= dalla lama nera
           | dal colore indefinito
           | con una grossa pezza
           | di peltro
           | di ferro
           | di fluorite
           | di gomma
           | di velluto
           | di maglia
           | di vetro
           | di maglia
           | di lana
           | di quel metallo elfico che nessuno sapeva forgiare
           | di zinco
           | d'argento
           | di AGG.M legno [-AGGETTIVOO]
           | di cristallo
           | di canapa
           | di mogano
           | di tela
           | di canne
;

MOB ::= (S:_ | N:_) \\ignatius
        | (S:un | N:_)bardo
        | (S:un | N:_)mendicante
        | (S:il | N:_)\\varuna \\nero
        | (S:un | N:_)imp
        | (S:un | N:_)bel cagnolino
        | (S:un | N:_)cavallo (COLORE.S)
        | (S:un | N:_)topo muschiato
        | (S:_ | N:_) \\valorm
        | (S:_ | N:_) \\tolvaas
        | (S:l' | N:_)araldo
        | (S:un | N:_)gallo
        | (S:un | N:_)leone
        | (S:un | N:_)lupo
        | (S:un | N:_)gigante della folgore
        | (S:un | N:_)tapongo [COLORE.S]
        | (S:un | N:_)criceto tonante
        | (S:un | N:_)capromorfo
        | (S:uno | N:_)pterodonte [COLORE.S] [AGG.M]
        | (S:un | N:_)tirannosauro nano
        | (S:il | N:_)\\varuna \\COLORE.S
        | (S:un | N:_)nano [AGG.M]
        | (S:un | N:_)ranger
        | (S:un | N:_)cane [AGG.M]
        | (S:un | N:_)orso [(AGG.M | COLORE.S)]
;

COLORE ::= (P: COLORE1.P [TONO.P] | S: COLORE1.S [TONO.S] | F: COLORE1.F [TONO.F]);
COLORE1 ::=
P: (neri | gialli | verdi | blu | azzurri | biondi | castani | rossi
   | arancioni | a pois | rosa | marroni | viola | bruni) |
S: (nero | giallo | verde | blu | azzurro | biondo | castano | rosso
   | arancione | a pois | rosa | marrone | viola | bruno) |
F: (nera | gialla | verde | blu | azzurra | bionda | castana | rossa
   | arancione | a pois | rosa | marrone | viola | bruna)
;

TONO ::= P: (scuri | chiari | ramati | meshati ) |
S: (scuro | chiaro | ramato | meshato) |
F: (scura | chiara | ramata | meshata)
;

ARIA ::= beffarda | sorniona | idiota | intelligente | losca | furba;

CAMICIA ::= CAMICIA1 [AGGETTIVOO] [DACHE];

CAMICIA1 ::= ( camicia 
             | zimarra 
             | sciarpa 
             | tunica 
             | giacchetta 
             | giacca
             )
;

PARTE ::= ( al polpaccio 
          | alla gamba (POS.F) 
          | al piede (POS.M)
          | alla testa 
          | al braccio (POS.M)
          | alla zimarra [(POS.F)] 
          | al petto 
          | alla mano (POS.F)
          | all'occhio (POS.M) 
          | all'inguine 
          | alla fungia
          | all'orecchio (POS.M)
          | al (mignolo 
               | anulare 
               | medio 
               | indice 
               | pollice
               ) 
                 (del piede (POS.M)
                 | della mano (POS.F)
                 )
         )
;

POS ::= (M:(destro 
           | sinistro
           ) 
        | F:(destra 
            | sinistra
            )
        )
;

LIQUORE ::= \\lo stura (CAMICIA | MOB.N);

NUM ::= UNIT[^ZERI^];
UNIT ::= (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) ;
ZERI ::= (0 | 00 | 000 | 0000);
BIVI ::= (2 | 3 | 4) ;

Osservi ::= osservi la stanza e vedi Varco ^"." "<br>"
  [ \\inoltre a ben vedere c'^"&egrave" anche Varco2 "<br>" Opzione2 ] "<br>" Opzione1 "<br>" Opzione3;

Varco := ( Tipo.Basso sul Posto.Pav
      | Tipo.Lato sulla Posto.Pareti
      | Tipo.Alto nel Posto.Soff ) ;

Tipo ::= Alto: un
               ( pozzo (di pietra | di melma | _)
               | buco (regolare | irregolare | _)
               | foro (gocciolante | _))
     | Basso: una (botola ( di legno | di ferro | _)
              | fossa (puzzolente | recente |_))
     | Basso: un avvallamento
     | Lato: una ( porta (borchiata | di rame | di legno | _)
             | finestra (con le grate che sembra dare su un abisso | _))
     | Lato: un ( portone (istoriato | di quercia | _)
             | portale (di marmo| con simboli arcani | _)
             | passaggio (stretto | _)
             | cunicolo (poco pi^"&ugrave" largo di una tana di cinghiali | _)
             )
     ;
Posto ::= (Soff: soffitto
          | Pav: pavimento
          | Pareti: parete
          ) 
;

Varco2 := Tipo.Basso sul Posto.Pav
      | Tipo.Lato sulla Posto.Pareti
      | Tipo.Alto nel Posto.Soff;



Opzione1 ::= "<i><a href=dungeon.html>" Pzione1 ^"</a></i><br>"
;
Pzione1 ::= imbocca Varco
;
Opzione2 ::= "<i><a href=dungeon.html>" Pzione2 ^"</a></i><br>"
;
Pzione2 ::= imbocca Varco2
;
Opzione3 ::= "<i><a href= >" Pzione3 ^"</a></i><br>"
;
Pzione3 ::= basta diocane^"!" | ma vai a cagare^"!" | squallido nerd io me ne vado^"."
;

`
