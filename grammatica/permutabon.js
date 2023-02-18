    const grammar = `

I ::=   "title:    PermutaBot \\n"
      ^ "author:   fb.me/atpsd - archivefever.tk@gmail.com \\n"
      ^ "language: italian \\n"
      ^ "status:   refinable \\n"
      ^ "topic:    politics \\n"
      ^ "comment:  permutatore di affermazione sincera \\n"
      ^ "warning:  in direzione ostinata e contraria \\n"
      ^ "created:  12/02/2023"
;


S ::= \\ 
      (
            (
                  il fascismo "<br>" non "&egrave" 
                  ( un'opinione ^"," "<br>" "&egrave" un reato
                  | un reato ^"," "<br>" "&egrave" un'opinione )
            )

            |

            (     il reato "<br>" non "&egrave"
                  ( un'opinione ^"," "<br>" "&egrave" un fascismo
                  | un fascismo ^"," "<br>" "&egrave" un'opinione )
            )

            |

            (      l'opinione "<br>" non "&egrave" 
                  ( un fascismo ^"," "<br>" "&egrave" un reato
                  | un reato ^"," "<br>" "&egrave" un fascismo )
            )
      )
      ^"."
;

`