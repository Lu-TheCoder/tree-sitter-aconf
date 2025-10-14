import XCTest
import SwiftTreeSitter
import TreeSitterAconf

final class TreeSitterAconfTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_aconf())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Aconf grammar")
    }
}
