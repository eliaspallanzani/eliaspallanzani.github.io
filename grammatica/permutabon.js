   const grammar = `
I ::=   "title:    incarico\\n"
      ^ "author:   Fondazione Elia Spallanzani\\n"
      ^ "language: italian\\n"
      ^ "status:   esperimento\\n"
      ^ "topic:    misc\\n"
      ^ "audience: la bella gente\\n"
      ^ "comment: include la grammatica nobilta' di fjf\\n"
      ^ "created:  24/04/2018"
;

S ::= "<b>" Titolo "</b> <br>"
    \\ Presentazione "<br> <br>"
    \\ Premessa "<br> <br>"
      \\ Missione "<br>"
      \\ Domanda  "<br> <br>" 
        Stacco "<br> <br>"
       "<i>" Opzioni "</i> <br>"
;

Titolo ::= ( \\ teh \\ infinite \\ quest
            | \\ looppo \\ solitario
            | \\ the \\ endless \\ ebook
            | \\ ebook of \\ sand
            )
;

Presentazione ::= {Saluto} {Aggettivo.Fav Epiteto.Fav | Aggettivo.Sfav Epiteto.Sfav} ^"!"
;

Saluto ::= (salve a te | heil^"!" | benvenuto | alla buon'ora | ti aspettavo ) 
;

Aggettivo ::= Fav: (coraggioso | impavido | scaltro | astuto)
          | Sfav: (diabolico | avido | schizofrenico | crudele);

Epiteto ::= Fav: (eroe | avventuriero | cercatore di conoscenza)
            | Sfav: (predone | violatore di tombe | spione )
;

Premessa ::= Eventi Eventi2 Eventi3
;

Eventi ::= ( il momento "&egrave" (tragico | difficile | catartico | solenne ) ^","
       ma per cambiare il futuro bisogna (innanzitutto | prima | per prima cosa) conoscere il passato) ^":" 
	"<br> <br>"
      \\ (un tempo | una volta | non "&egrave" molto che) (il nostro popolo | la nostra gente | la popolazione )
       (prosperava | gioiva | tripudiava) sotto il (lieve tallone | tenero giogo | dispotismo illuminato) di NOBILE ^","
       finch ^"&egrave" dal NS [NS] [EO] Qualita non giunse NOBILE ^","
       con le sue armate di ( turisti | forestieri | mostri | persone non belle | spettri della luce) ^"."
;

Eventi2 ::= {(la battaglia | la pugna | il certame | la guerra )} 
		{(infuriava | procedeva con alterne vicende | ristagnava da anni )} e stavamo 
		( avendo | per avere) la ( peggio | meglio) quando 
;

Eventi3 ::= Alvise tent ^"&ograve" (il tutto per tutto | una mossa disperata) lanciando il suo 
	{pi ^"&ugrave" AggettivoInc} {incantesimo} ^":" NomeIncantesimo ^"." "<br> <br>"
       \\ da quel momento non si "&egrave" capito pi ^"&ugrave" niente e siamo ridotti come vedi ^"."

       \\ per porre (fine | termine) a tutto ci ^"&ograve" ( bisogna | tocca | "&egrave" necessario ) (arrivare | risalire) alla (fonte | causa prima) ^"!"

      \\ voci bene informate dicono che Alvise si ( nasconde | trova | pu^"&ograve" trovare | cela | "&egrave" diretto ) 
      nel Profondo e l ^"&igrave" bisogna (andare | avventurarsi) ^".";

NS ::= (nord | sud | nordovest )
;

EO ::= (est | ovest)
;

Qualita ::= (assolato | nebbioso | torrido | nevoso | tempestoso | temperato ma non troppo
            | solatio | desolato | ghiacciato | variabile tendente al bello )
;


Missione ::= la tua [sacra] missione quindi "&egrave" (trovare
                                       | uccidere
                                       | sedurre
                                       | imprigionare
                                       | defenestrare
				       | incatenare
				       | coprire di pece e piume  
					| evocare
					| bandire da questo (mondo | piano di esistenza | universo )
					| appendere per ( la gola | i coglioni )
					| scovare
					| salvare
					| avere un rapporto more uxorio con
					)
                                       Alvise ^"."
;

Alvise := (il >(mago
           | fattucchiere
           | saggio
           | pranoterapeuta ) 
           | lo >( stregone | maleditto))
             \\ alvise 
;

AggettivoInc ::= (potente
                 | rutilante
                 | periglioso
                 | scenografico
                 | delirante
                 | segreto
		 | tonitruante
		 | blasfemo
		 ) 
;

NomeIncantesimo ::= (il sigillo | il turbine | l'uragano) (del caos | della scommonica | di irrazionalit ^"&agrave" )
;

Profondo ::= ( \\ profondo | \\ dongione | \\ mundus \\ subterraneus )
;

Domanda ::= ( ebbene | dunque | allora) ^"," ( non vedi l'ora di | (sei (pronto a | impaziente di)))
            ( intraprendere | cominciare | principiare | dare inizio a)
            (questa missione | quest'ordalia | questa \\ quest | il compito assegnato) ^"?" 
;




Opzioni ::= { \\ Opzione1 "<br> <br>" } { \\ Opzione2 "<br> <br>" } { \\ Opzione3 "<br> <br>" }
;

Opzione1 ::= "<a href=avanti.html>" Pzione1 "</a>"
;
Pzione1 ::= (cazzo chi aspettiamo ^"!"
            | oh io vado in sollucchero per queste stronzate ^"!"
            | purtroppo mi tocca ^"."
	    )
;
Opzione2 ::= "<a href=rifiuto.html>" Pzione2 "</a>"
;
Pzione2 ::= (mmm ^"..." mica mi conviene ^"..." quasi quasi torno a casa ^"."
            | senza denari non si cantano messe ^"!" \\ fallo fare a qualche disagiato ^"."
            | secondo me hai fuso zio ^"," ti lascio ai tuoi deliri ^"."
	    )
;

Opzione3 ::= "<a href=pippo.html>" Pzione3 "</a>"
;
Pzione3 ::= non ho capito niente ^"," ricomincia daccapo ^"!" 
		| questa missione non mi (piace | garba ) ^"," dammene un'altra ^"." 
		| i nomi altolocati mi (confondono | mettono in soggezione) ^"," potresti ripetere ^"?"
;




Stacco ::= ( Sim | Dadi )+
;
Sim ::= ( "&#9776" | "&#9777" | "&#9778" | "&#9779" | "&#9780" | "&#9781" | "&#9782" | "&#9783" )
;
Dadi ::= ( "&#9856" | "&#9857" | "&#9858" | "&#9859" | "&#9860" | "&#9611" )
;

NOBILE ::= \\ ( SCHIATTA )
;

SCHIATTA ::= \\ ( FEMMINILE1 | MASCHILE1 | FEMMINILE2 | MASCHILE2 )
;

FEMMINILE1 ::= \\ ( [TITOLIDONNA] NOMIDONNA (COGNOMI | ++(COGNOMI COGNOMI))
           [TOPONOMASTICA]( _ | -(^"," detta "<i>"^(SOPRANNOMEDONNA)^"</i>"))) ;

FEMMINILE2 ::= \\ ( [ donna | zarina | -prof"^"ssa | - avv^ "." ssa | - dott^"."ssa
           | -casalinga ] NOMIDONNA (COGNOMI | ++(COGNOMI COGNOMI)) [^"," ^TITOLIDONNA TOPONOMASTICA]) 
;

MASCHILE1 ::= \\ ( [TITOLIUOMO] NOMIUOMO (COGNOMI | +(COGNOMI COGNOMI)) [TOPONOMASTICA]
              (_ | -(^"," detto "<i>"^(SOPRANNOMEUOMO)^"</i>"))) 
;

MASCHILE2 ::= \\ ( [ don | zar | --prof^"." | -avv^"." | -dott^"."
              | --- (in attesa di prima occupazione) ] NOMIUOMO (COGNOMI | +(COGNOMI COGNOMI))
              [^"," ^TITOLIUOMO TOPONOMASTICA]) 
;

TITOLIDONNA ::= \\ 	( sua altezza reale
			| sua maest ^"&agrave" 
			| sua santit ^"&agrave"
            		| contessa 
			| duchessa 
			| ( arci | gran)^duchessa 
			| principess ^( a | ina )
			| marchesa 
			| nobildonna 
			| delfina
			| infanta
			)  
;

TITOLIUOMO ::= \\ 	( doge
			| sua altezza reale
			| sua maest ^"&agrave"
			| sua santit ^"&agrave"
			| conte 
			| ducaconte
			| duca
			| ( srci | gran ) ^duca
			| princip ^( e | ino )
			| marchese
			| visconte
			| imperatore
			| nobil^(h|u)^omo 
			| delfino
			| infante
			)
;

NOMIDONNA ::= \\ ( jacaranda
		| fatima
		| martha
		| pucci
		| melba
		| jonella
		| kicca
		| ljuba
		| diamanta
		| lavinia
		| isabella
		| ginevra
		| giuditta
		| donatella
		| micaela
		| genoveffa
		| artemisia
		| erszebeth
		| cleopatra
		| fiamma
		| letizia
		| salom ^"&egrave"
		| marinella 
		) 
;

NOMIUOMO ::= \\ ( helder
		| vlad
		| rapha ^"&#235l" 
		| fawaz
		| serge
		| rupert
		| ranier ^( i | o) 
		| ( g | r ) ^offredo
		| emanuele
		| filiberto
		| ( pier ^COMPOSTO ) 
		| ( gian ^COMPOSTO ) 
		| fulco
		| adnan
		| ascanio		
		| jakob
		| lapo
		| lupo
		| krassimir
		| orso
		| gaddo
		| manfredi
		| sigismondo
		| winifred
		| teodulo
		| urbano
		| aristide
		| august
		| pi ^"&oavute" ^ tr
		| aleksej
		| vladimir
		| anton
		| misha
		| souleyman
		)
;

COGNOMI ::= \\ ( angstr ^"&ograve" ^m 
		| serbelloni
		| mazzanti
		| viendalmare	
		| vendramin
		| t ^"&eacute" ^pes
		| santanch ^"&agrave"
		| romanov
		| rizzoli
		| rothschild
		| murdoch
		| al ^"-" ^fayed
		| bos ^"&eacute" 
		| dominguin
		| agnelli
		| spencer
		| falck
		| ruffo
		| rocco
		| caetani
		| borghese
		| pacelli		
		| elkann
		| sforza
		| ruspoli
		| arquata
		| lovatelli
		| bernardini
		| de pace
		| pecci
		| bl ^"&ugrave" ^nt
		| gruosi
		| borromeo
		| brachetti
		| peretti
		| della gherardesca
		| santapace
		| ratzinger
		| rattazzi
		| th ^"&ugrave" ^rm ^"-" ^und ^"-" ^taxis
		| bath ^"&oacute" ^ry
		| khassoggi
		| kennedy
		| auf ^"-" ^der ^"-" ^maur
		| latsis
		| onassis
		| papadimitriou
		| hilton
		| h ^"&ugrave" ^ssein
		| van helsing
		| r ^"&ograve" ^stropov
		| ant ^"&ograve" ^nov 
		| amundsen
		| bergsson
		| levy ^"-" ^strauss
		| visconti
		| doria
		| provera
		| cort ^"&egrave" ^s
		) 
;

TOPONOMASTICAITALIANA ::= ( di \\ torrepaduli 
			| di \\ calabria
			| di \\ jugoslavia
			| di \\ grecia
			| di \\ monaco
			| di \\ saint ^"-" ^ \\ just
			| di \\ hannover
			| di \\ savoia
			| di \\ borbone	
			| di \\ san \\ severo
			| d' ^\\altavilla
			| di \\ cutrofiano
			| di \\ sicilia
			| di \\ valacchia
			| di \\ bisanzio
			| di \\ turingia
			| di \\ manfredonia
			| di \\ sassonia ^"-" ^\\coburgo
			| di \\ rivombrosa
			| di \\ friburgo
			| d'^\\ oriente e ^( t | d ) ^\\occidente
			| di \\ torbellamonaca
			| del \\ tufello
			| di \\ vigata
			| di \\ malta 
			| del \\ santo \\ sepolcro
			| del \\ trono di \\ salomone
			| d'^\\ aquitania
			| d'^\\ occitania
			| d'^\\ oceania
			| di \\ modrone
			| di \\ monte ^( zemolo | zuma | cristo )
			| d'^\\otranto 
			| di \\ ocane
			) 
;

TOPONOMASTICASTRANIERA ::= \\ ( von hohenstaufen
				| von \\ bismarck
				| d'^ \\h ^"&agrave" ^uteville
                       		| de la \\serna 
				| \\ auf \\ wiedehersen
				| von \\ thyssen ^"-" ^B ^"&agrave" ^rnemisza
				| \\ hyerosolimitani
				| d'^ \\orl ^"&egrave" ^an
				)
;

TOPONOMASTICA ::= ( TOPONOMASTICAITALIANA 
		| TOPONOMASTICASTRANIERA 
		| et de SUFFISSIESTERI 
		| di tutte le SUFFISSIITALIANIF 
		| di tutti gli SUFFISSIITALIANIM 
		) 
;

SUFFISSIESTERI ::= \\ ( milan
			| russie
			| S^"&agrave" ^voy
			| paris
			)
;

SUFFISSIITALIANIF ::= \\ ( russie
			| spagne
			| ande
			| puglie
			| marche
			| sardegne
			| venezie
			)
;

SUFFISSIITALIANIM ::= \\ ( abruzzi | appennini )
;

COMPOSTO ::= ( riccardo 
		| giovanni
		| maria
		| carlo
		| roberto
		| jean
		| arturo
		| filippo
		| emanuele
		| filiberto
		| teofrasto
		)
;

SOPRANNOMEUOMO ::= ( l'impalatore
			| l'impalato
			| lo stantuffo TOPONOMASTICAITALIANA
			| il granbuco TOPONOMASTICAITALIANA 
			| il manfruito
			| \\ franco
			| \\ pipino il breve
			| il deprivato
			| lo scostumato
			| il maipeggio
			)
;

SOPRANNOMEDONNA ::= ( l'impalatrice
			| la vorace TOPONOMASTICAITALIANA
                 	| la maitresse TOPONOMASTICA 
			| gola profonda
			| poppea
			| l'insaziabile
			| malafica 
			)
;


`
