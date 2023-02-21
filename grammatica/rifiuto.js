const grammar = `

I ::= "title: rifiuto\
"
^ "author: fond elia spallanzani\
"
^ "language: italian\
"
^ "status: in corso\
"
^ "topic: mah\
"
^ "audience: tutti\
"
^ "comment: mah
"
^ "created: 24/04/2018"
;

S ::= Titolo \

Reprimenda \

Profezia \

Scherno \

Risposta \

ScambioParole \

ParlaScambiato \

ScambioLettere \

ScambioTotale \

Sconforto \
 
 Domanda \

Opzione1 \

Opzione2 \

Opzione3;

Titolo ::= ("TEH INFINITE QUEST"
| "LOOPO SOLITARIO"
| "THE ENDLESS EBOOK"
| "EBOOK OF SAND"
)
;

Reprimenda ::= {Saluto} {Aggettivo.Fav Epiteto.Fav Q | Aggettivo.Sfav Epiteto.Sfav} ^”!” ;

Saluto ::= (la peste a te | allora fanculo ^“!” | allora addio | che devo sentire ^”!” | mi deludi ) ^”;” esclama il buon "Tristano" ^”,”;
Aggettivo ::= Fav: (coraggioso | impavido | scaltro | astuto)
| Sfav: (diabolico | avido | schizofrenico | crudele);
Epiteto ::= Fav: (eroe | avventuriero | cercatore di conoscenza)
| Sfav: (predone | violatore di tombe | spione );

Profezia ::= avevo il sospetto che fossi (una truffa | un bidone | un uomo dappoco) ^“,”
ma te ne pentirai ^”!” \\ l'incantesimo d ^ Alvise “&egrave” fuori controllo e
diventer ^”&agrave” sempre pi ^”&ugrave” incontrollabile finch ^”&egrave” (tutto il mondo | tutta "Rarte")
piomber ^”&agrave” nel caos ^”!”;

Scherno ::= \\ ma tu te ne infotti ^”," lasci il vecchio a (blaterare|sbavare) le sue (profezie|maledizioni)
e ti avvii (verso casa | alla taverna | al lupanare )
in cerca di pi ^”&ugrave” (facili | redditizie | sensate) avventure;

Risposta ::= lungo la strada incontri ((ArtInd.M Tizio.M) | (ArtInd.F Tizio.F)) dall'aria (spaventata | allarmata | oltraggiata | terrorizzata | incerta)
e allora chiedi che (diavolo | cazzo | madonna) sta succedendo di nuovo ^”.” \

la risposta suona pi ^”&ugrave” o meno ^”:” \
;

ArtInd ::= (M: un | F: una);

Tizio ::= M: (contadino | bell'uomo | saltimbanco | perdigiorno | armigero )
| F: (pastorella | donna | vecchia) (scarmigliata | dall'occhio febbricitante) ;

ScambioParole ::=  {(signor mio | egregio signore | maledetto impiastro)} ^”,” {[ma]}
{(non vedi | non ti accorgi | non capisci)} che {tutto} {si sta mischiando} ^”?”  \
 ;

ParlaScambiato ::= (follia | cimurro | da quando hanno chiuso i manicomi) ^”...” ”,”
pensi ^”,” e rispondi per le rime ^”,”
ma con (orrore | raccapriccio | incredulit ^”&agrave” | enorme sorpresa) senti la tua bocca
(pronunciare | dire) queste parole ^”:” \

“<<” {calmati} {non} {dire} {(sciocchezze | scemenze | assurdita')} V
{cosa} {pensi} di {farmi} paura ^”?” “>>”
;

ScambioLettere ::= “<<” ma che succede “>>” “,” ti dici ^”,” e preso da una strana ansia ti affretti verso il
paese pi ^”&ugrave” vicino ^”.” \\ intanto comincia a calare la notte e alzando lo sguardo non riconosci
le costellazioni ^”.” “<<” (Segno.M Dovrebbe.M | Segno.F Dovrebbe.F) “>>” “,” ti dici “,” ma forse
ricordi male ^”.” \\ nel frattempo sei arrivato al paese e gi ^”&agrave” scorgi l'insegna della taverna ^”,” che per ^”&ograve”
adesso dice ^”:” \

“<<” "T"^Taverna^"A" “>>” ^”.” ;

Segno ::= M: (il \\ toro | il \\ capricorno | lo \\ scorpione | \\ auriga | il (piccolo | grande) \\ carro | \\ ofiuco )
| F: ( la \\ vergine | \\ cassiopea | la \\ cintura di \\ ercole | la \\ scodella );
Dovrebbe ::= M: dovrebbe (essere pi ^”&ugrave” (a destra | basso |lungo | largo) | avere (pi ^”&ugrave” | meno) stelle) |
F: dovrebbe (essere pi ^”&ugrave” (a destra | bassa |lunga | larga) | avere (pi ^”&ugrave” | meno) stelle) ;

Taverna ::= {"A"}^{"V"}^{"E"}^{"R"}^{"N"};

ScambioTotale ::= colto da un dubbio orrendo entri e ti rivolgi (al primo Tizio.M | alla prima Tizio.F) che vedi ^”:” \
 
“<<” presto dimmi qualcosa ^”!” “>>” ^”,” gridi ^”,” “<<” qualcosa di sensato ^”!” \

“<<” ParoleFuse “>>” “,” risponde ^”,” e aggiunge \

“<<” ParoleFuse “>>” ^”.” \
;

ParoleFuse ::= Lettere^Lettere^[Lettere] | ParoleFuse [^ParoleFuse];

Lettere ::= (++a| bf | ch | dy | ++e | fk | gw | hx | +i | ll | mq | nt | ++o | ps | --q
| rl | sz | tm | u | v | -z | "'" | "," | "!" | "..." | "\\224" ) ;

Sconforto ::= allora mentre intorno a te i mobili e le sedie cominciano a tremare e a scambiarsi di posto
capisci che il vecchio diceva la verit^”&agrave” ^”!” \\ il caos sta prendendo il sopravvento e ormai
non ti resta che dire “<<” ParoleFuse “>>” ^”!” \
 ;


Alvise := el (mago
| fattucchiere
| ^lo stregone
| pranoterapeuta )
"Alvise" ;

Domanda ::= (allora | ebbene | orbene) ^”,” che vuoi fare ^”?” \\ forse sei ancora in tempo per salvare il mondo ^”!” \

(ci hai ripensato | ti sei convinto | ti sei fatto persuaso) ^”?” ``n
ora (sei (pronto a | impaziente di))
(cominciare | principiare | dare inizio a)
(questa missione | quest'ordalia | il compito assegnato) ^”?” ;


Opzione1 ::= "<a href=:rifiuto.html">" Pzione1 ^"</a>"
;
Pzione1 ::= (s ^”&iacute” ^”,” adesso "IO CREDO!" 
| guarda ^”,” proprio perch ^”&egrave” vedo che ti sei sforzato
| temo che se rifiutassi potresti commettere una sciocchezza)
;
Opzione2 ::= "<a href=:rifiuto.html>" Pzione2 ^"</a>"
;
Pzione2 ::= (apprezzo il tentativo ma no ^”,” ho di meglio da fare
| se c'era qualche minima speranza che continuassi questa indegna pantomima l'ha distrutta
| ParoleFuse ^”!” )
;
Opzione3 ::= "<a href=://www.facebook.com>" Pzione3 ^"</a>"
;
Pzione3 ::= basta diocane^”!" | ma vai a cagare^”!" | squallido nerd io me ne vado
;


`




