const chai = require('chai')
const expect = chai.expect
const Rectangle = require("../lib/rectangle")

describe("Rectangle", () => {

  const rectangle = new Rectangle(1, 1, 6, 3)

  describe("attributes", () => {
    it("has coordinates", () => {
      expect(rectangle.leftX).to.equal(1)
      expect(rectangle.bottomY).to.equal(1)
      expect(rectangle.width).to.equal(6)
      expect(rectangle.height).to.equal(3)
    })
  })

  describe("functions", () => {
    describe("rightX, topY", () => {
      it("finds the top right coordinates", () => {
        expect(rectangle.rightX()).to.equal(7)
        expect(rectangle.topY()).to.equal(4)
      })
    })
  })

  describe("findLove", () => {
    it("takes to rectangles and returns the rectangle object where they intersect", () =>{
      const rectangleLoveInterest = new Rectangle(5, 2, 3, 6)

      const loveRectangle = {
        leftX: 5,
        bottomY: 2,
        width: 2,
        height: 2
      }

      const result = Rectangle.findLove(rectangle, rectangleLoveInterest)

      expect(result).to.deep.equal(loveRectangle)
    })
  })
})
