; Literals
;---------

(key) @constant
(comment) @comment
(number) @number
(string) @string
(null) @constant.builtin
[(true) (false)] @constant.builtin.boolean

; Punctuation
;------------

[
  "."
  ","
] @punctuation.delimiter

"=" @operator
":" @operator

[
  "["
  "]"
  "[["
  "]]"
  "{"
  "}"
]  @punctuation.bracket
