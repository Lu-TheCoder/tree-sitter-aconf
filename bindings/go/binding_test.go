package tree_sitter_aconf_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_aconf "github.com/tree-sitter/tree-sitter-aconf/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_aconf.Language())
	if language == nil {
		t.Errorf("Error loading Aconf grammar")
	}
}
