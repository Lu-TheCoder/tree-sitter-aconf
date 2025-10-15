/**
 * @file tree-sitter for Aconf language
 * @author LuTheCoder <luthecoder@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'aconf',

  extras: $ => [
    /\s/,            // whitespace
    $.comment,       // support // and /* */ comments
    /\\\r?\n/,       // line continuations
  ],

  rules: {
    source_file: $ => repeat($._statement),

    _statement: $ => choice(
      $.assignment,
      $.labelled_value
    ),

    // app_name = "My App"
    assignment: $ => seq(
      $.key,
      '=',
      $._value
    ),

    // key: <any value>
    labelled_value: $ => seq(
      $.key,
      ':',
      $._value
    ),

    // Keys (identifiers)
    key: $ => /[A-Za-z_][A-Za-z0-9_]*/,

    // Values
    _value: $ => choice(
      $.string,
      $.number,
      $.boolean,
      $.array,
      $.object,
      $.null
    ),

    // "strings"
    string: $ => /"([^"\\]|\\.)*"/,

    // Numbers (integers and decimals like 1, 1., .5, 1.0)
    number: $ => /-?(?:\d+\.\d*|\.\d+|\d+)/,

    boolean: $ => choice('true', 'false'),
    null: $ => 'null',

    // Arrays: [ value, value, ... ]
    array: $ => seq(
      '[',
      optional(seq(
        $._value,
        repeat(seq(',', $._value)),
        optional(',')
      )),
      ']'
    ),
    

    // Objects: { key = value, key: [ ... ] ... }
    object: $ => seq(
      '{',
      optional(seq(
        $._object_entry,
        repeat(seq(',', $._object_entry)),
        optional(',')
      )),
      '}'
    ),
    
    _object_entry: $ => choice(
      $.assignment,       // key = value
      $.labelled_value    // key: value (including arrays and objects)
    ),

    comment: $ => token(choice(
      // Single-line comment: // ...
      seq('//', /.*/),
    
      // Multi-line comment: /* ... */
      seq(
        '/*',
        /[^*]*\*+([^/*][^*]*\*+)*/,  // any non-* content, repeated
        '*/'
      )
    )),
  }
});
