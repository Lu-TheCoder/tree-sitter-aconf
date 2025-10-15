; Literals
;---------

(key) @constant
(comment) @comment
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

; Errors
(ERROR) @error

(_missing_comma) @error