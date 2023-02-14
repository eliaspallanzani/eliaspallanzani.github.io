    const grammar = `

nes (29 sloc)  792 Bytes
I ::=   "title:    PermutaBot \n"
      ^ "author:   fb.me/atpsd - archivefever.tk@gmail.com \n"
      ^ "language: italian \n"
      ^ "status:   refinable \n"
      ^ "topic:    politics \n"
      ^ "comment:  permutatore di prova \n"
      ^ "warning:  in direzione ostinata e contraria \n"
      ^ "created:  12/02/2023"
;


S ::= \ 
      (
            (
                  il mattino 
                  ( ha l'oro in bocca
                  | alloro in bocca )
            )

            |

            (     l'oro 
                  ( ha il mattino in bocca
                  | in bocca ^"," al mattino )
            )

            |

            (      la bocca 
                  ( ah ^"," l'ora ^"..." 
                  | ha il mattino nell'ora )
            )
      )
      ^"."
;

`
