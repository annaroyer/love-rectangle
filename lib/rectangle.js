class Rectangle{
  constructor(leftX, bottomY, width, height){
    this.leftX = leftX
    this.bottomY = bottomY
    this.width = width
    this.height = height
  }

  rightX() {
    return this.leftX + this.width
  }

  topY() {
    return this.bottomY + this.height
  }

  static findLove(a, b){
    let maxLeft = Math.max(a.leftX, b.leftX)
    let maxBottom = Math.max(a.bottomY, b.bottomY)
    let sharedWidth = Math.min(a.rightX() - maxLeft, b.rightX() - maxLeft)
    let sharedHeight = Math.min(a.topY() - maxBottom, b.topY() - maxBottom)
    return new Rectangle(maxLeft, maxBottom, sharedWidth, sharedHeight)
  }
}

module.exports = Rectangle
