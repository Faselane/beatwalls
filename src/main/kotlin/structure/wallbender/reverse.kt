package structure.wallbender

import structure.wallStructures.WallStructure
import structure.helperClasses.SpookyWall

internal fun WallStructure.reverse(l:List<SpookyWall>): List<SpookyWall> {
    if (reverse) {
        val last = l.maxByOrNull { spookyWall ->
            spookyWall.startTime + (spookyWall.duration.takeIf { it > 0 } ?: 0.0)
        }?.startTime ?: 0.0
        l.forEach { spookyWall ->
            spookyWall.startTime = last - (spookyWall.startTime + (spookyWall.duration.takeIf { it > 0 } ?: 0.0))
        }
    }

    if (reverseX) {
        l.reverseX()
    }

    if (reverseY) {
        l.reverseY()
    }
    return l
}
fun List<SpookyWall>.reverseX(){
    val min = this.minXOrZero()
    val max = this.maxXOrZero()
    val center = min + ((max-min )/ 2)
    this.forEach {
        it.startRow = center + (center - it.startRow)
        it.width *= -1
    }
}

fun List<SpookyWall>.reverseY() {
    val min = this.minYOrZero()
    val max = this.maxYOrZero()
    val center = min + ((max - min) / 2)
    this.forEach {
        it.startHeight = center + (center - it.startHeight)
        it.height *= -1
    }
}

private fun List<SpookyWall>.maxX() =
    this.maxBy { spookyWall -> spookyWall.trueMaxPoint.x }?.trueMaxPoint?.x

private fun List<SpookyWall>.minX() =
    this.minBy { spookyWall -> spookyWall.trueMinPoint.x }?.trueMinPoint?.x

private fun List<SpookyWall>.maxY() =
    this.maxBy { spookyWall -> spookyWall.trueMaxPoint.y }?.trueMaxPoint?.y

private fun List<SpookyWall>.minY() =
    this.minBy { spookyWall -> spookyWall.trueMinPoint.y }?.trueMinPoint?.y

private fun List<SpookyWall>.maxXOrZero() =
    this.maxX()?: 0.0
private fun List<SpookyWall>.minXOrZero() =
    this.minX()?: 0.0
private fun List<SpookyWall>.maxYOrZero() =
    this.maxY()?: 0.0
private fun List<SpookyWall>.minYOrZero() =
    this.minY()?: 0.0
