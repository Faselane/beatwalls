package structure.wallStructures

import structure.helperClasses.Point
import structure.helperClasses.SpookyWall
import kotlin.math.*

/**
 * spinning time! make walls spin around the player
 */
class Helix: WallStructure() {

    /**
     * how many spirals will be created
     */
    var count = 2

    /**
     * The radius of the Helix
     */
    var radius = 2.0

    /**
     * does not reflect the actual amount of walls, instead is more of an multiplier (will be changed with version 1.0)
     */
    var amount = 10

    /**
     * the start in degree
     */
    var startRotation = 0.0

    /**
     * describes, how many "Spins" the helix has
     */
    var rotationAmount = 1.0

    /**
     * Point of the center, defaults to 0,2,0
     */
    var center = Point(0, 2, 0)

    /**
     * generating the Walls
     */
     override fun create()  = (
         circle(
             count = this.count,
             fineTuning = this.amount,
             heightOffset = this.center.y,
             radius = this.radius,
             startRotation = this.startRotation,
             rotationCount = this.rotationAmount,
             helix = true
         )
     ).toList<SpookyWall>()
}

/** A function to getSpookyWallList a circle of walls or a helix, probably should have splitted those up */
fun circle(
    count: Int = 1, //how many spirals
    radius: Double = 1.9, //how big
    fineTuning: Int = 10, //how many walls
    startRotation: Double = 0.0, //startRotation offset
    rotationCount: Double = 1.0, //how many rotations
    heightOffset: Double = 2.0, //height of the center
    startRowOffset: Double = 0.0,
    speedChange: Double? = null, //speedChange, speed up or slowDown
    wallDuration: Double? = null, //the default duration
    helix: Boolean = false, //if its a helix or a circle
    reverse: Boolean = false //if its reversed
): ArrayList<SpookyWall> {
    val list = arrayListOf<SpookyWall>()
    val max = 2.0 * PI * fineTuning * rotationCount

    var x: Double
    var y: Double
    var nX: Double
    var nY: Double

    var width: Double
    var height: Double
    var startRow: Double
    var startHeight: Double

    var startTime: Double
    var duration: Double

    for (o in 0..count) {
        //the offset controls the starting point
        val offset = round((o * 2.0 * PI * fineTuning) / count) + startRotation / 360 * (2 * PI)
        var lastStartTime = 0.0
        for (j in 0 until round(max).toInt()) {
            val i = if (!reverse) j else (max - j).toInt()
            x = radius * cos((i + offset) / fineTuning)
            y = radius * sin((i + offset) / fineTuning)

            nX = radius * cos(((i + offset) + 1) / fineTuning)
            nY = radius * sin(((i + offset) + 1) / fineTuning)

            startRow = x + (nX - x) + startRowOffset
            width = abs(nX - x).coerceAtLeast(0.001)
            startHeight = y + heightOffset
            height = abs(nY - y).coerceAtLeast(0.001)

            //sets the duration to, 1: the given duration, 2: if its a helix the duration to the next wall 3: the defaultDuration: 1.0

            duration = wallDuration ?: if (helix) {
                if (speedChange == null) {
                    1.0 / max
                } else {
                    ((j + 1) / max).pow(1.0 / speedChange) - ((j) / max).pow(1.0 / speedChange)
                }
            } else {
                1.0
            }
            val tempDuration =
                if (speedChange == null) {
                    1.0 / max
                } else {
                    ((j + 1) / max).pow(1.0 / speedChange) - ((j) / max).pow(1.0 / speedChange)
                }

            //changes the startTime, and then saves it to lastStartTime
            startTime = if (helix) lastStartTime + tempDuration else 0.0
            lastStartTime = startTime

            //adds the Obstacle
            list.add(
                SpookyWall(
                    startRow,
                    duration,
                    width,
                    height,
                    startHeight,
                    startTime
                )
            )
        }
    }
    return list
}
