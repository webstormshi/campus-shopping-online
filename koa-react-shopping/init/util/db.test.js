const db = require("./db")
// @ponicode
describe("db.query", () => {
    test("0", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"], ["a", "b", "043", "foo bar"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            db.query("DELETE FROM Projects WHERE pid = %s", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            db.query("DROP TABLE tmp;", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], [-1, 0.5, 1, 2, 3, 4, 5], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            db.query("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [[10, -45.9, 103.5, 0.955674], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            db.query("UNLOCK TABLES;", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["elio@example.com", "Elio", "Dillenberg"], ["foo bar", -0.353, "**text**", 4653], ["elio@example.com", "Elio", "Dillenberg"]]
        let object2 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let object3 = [["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"], ["elio@example.com", "Elio", "Dillenberg"]]
        let param2 = [object, object2, object3]
        let callFunction = () => {
            db.query("DROP TABLE tmp;", param2)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            db.query(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
