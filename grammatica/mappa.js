    const grammar = `

I ::=   "title:    mappa\\n"
      ^ "author:   Fondazione Elia Spallanzani\\n"
      ^ "language: italian\\n"
      ^ "status:   esperimento\\n"
      ^ "topic:    misc\\n"
      ^ "audience: tutti\\n"
      ^ "created:  21/04/2018"
;

S ::= Riga "<br>"
    Riga "<br>"
Riga "<br>"
Riga "<br>"
;

Riga ::= Car Car Car Car Car Car Car Car
;

Car ::= ( "&#176" 
        | "&#177"
        | "&#178"
        | "&#219"
        | "&#32"
        )
;

`
