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
                  il mattino "<br>"
                  ( ha l'oro  "<br>" in bocca
                  | alloro in bocca )
            )

            |

            (     l'oro "<br>"
                  ( ha il mattino "<br>" in bocca
                  | in bocca ^"," "<br>" al mattino )
            )

            |

            (      la bocca "<br>"
                  ( ah ^"," l'ora ^"..." "<br>" "&egrave" mattino
                  | ha il mattino "<br>" nell'ora )
            )
      )
      ^"."
;

`
