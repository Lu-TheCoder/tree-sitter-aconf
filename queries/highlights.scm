; Literals
;---------

(key) @constant
(comment) @comment
(block_comment) @comment
(number) @number
(string) @string
(null) @constant.builtin
(boolean) @constant.builtin.boolean

; Punctuation
;------------

[
  ","
] @punctuation.delimiter

"=" @operator
":" @operator

[
  "["
  "]"
  "{"
  "}"
]  @punctuation.bracket
