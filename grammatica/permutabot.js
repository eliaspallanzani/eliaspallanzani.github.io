    const grammar = `

I ::=   "title:    PermutaBoh \\n"
      ^ "author:   fondazione elia spallanzani \\n"
      ^ "language: italian \\n"
      ^ "status:   refinable \\n"
      ^ "topic:    politics \\n"
      ^ "comment:  permutatore di prova \\n"
      ^ "warning:  in direzione ostinata e contraria \\n"
      ^ "created:  12/02/2023"
;


S ::= \\ 
      (
            (
                  il mattino \\n
                  ( ha l'oro in bocca
                  | alloro in bocca )
            )

            |

            (     l'oro \\n
                  ( ha il mattino in bocca
                  | in bocca ^"," al mattino )
            )

            |

            (      la bocca \\n
                  ( ah ^"," l'ora ^"..." &egrave mattino
                  | ha il mattino nell'ora )
            )
      )
      ^"."
;

`
