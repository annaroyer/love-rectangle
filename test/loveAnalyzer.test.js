const chai = require('chai')
const expect = chai.expect
const LoveAnalyzer = require("../lib/loveAnalyzer")

describe("LoveAnalyzer", () => {
  describe("functions", () => {

    describe("findIntersection", () => {
       const firstRectangle = {
      // Coordinates of bottom-left corner
        leftX: 1,
        bottomY: 1,
        // Width and height
        width: 6,
        height: 3,
      }

      const secondRectangle =  {
      // Coordinates of bottom-left corner
        leftX: 5,
        bottomY: 2,
        // Width and height
        width: 3,
        height: 6,
      }

      it("takes to rectangles and returns the rectangle object where they intersect", () =>{
        const loveRectangle = {
          leftX: 5,
          bottomY: 2,
          width: 2,
          height: 2
        }

        expect(LoveAnalyzer.findIntersection(firstRectangle, secondRectangle)).to.deep.equal(loveRectangle)
      })
    })
  })
})
