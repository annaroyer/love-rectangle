const pry = require('pryjs')
class LoveAnalyzer {
  static findIntersection(firstRectangle, secondRectangle){
    let firstColumns = this.getColumns(firstRectangle)
    let secondColumns = this.getColumns(secondRectangle)
    let sharedColumns = firstColumns.filter(function(column){
      return secondColumns.includes(column)
    })
    let firstRows = this.getRows(firstRectangle)
    let secondRows = this.getRows(secondRectangle)
    let sharedRows = firstRows.filter(function(row){
      return secondRows.includes(row)
    })
    return {
      leftX: sharedRows[0],
      bottomY: sharedColumns[0],
      width: sharedColumns.length,
      height: sharedRows.length
    }
  }

  static getColumns(rectangle){
    const columns = []
    for(let i = rectangle.bottomY; i < rectangle.bottomY + rectangle.height; i++){
      columns.push(i)
    }
    return columns
  }

  static getRows(rectangle){
    const rows = []
    for(let i = rectangle.leftX; i < rectangle.leftX + rectangle.width; i++){
      rows.push(i)
    }
    return rows
  }
}

module.exports = LoveAnalyzer
