package structure.wallStructures

import structure.helperClasses.Point
import structure.helperClasses.SpookyWall

/**
 * 3d Grid
 */
class FurryGrid : WallStructure() {
    /**
     * the X-Size of one panel in the grid
     */
    var panelX = 1.0

    /**
     * the Y-Size of one panel in the grid
     */
    var panelY = 0.0

    /**
     * the Z-Size of one panel in the grid
     */
    var panelZ = 1.0

    /**
     * the X-Size of the whole grid, aka how often it will repeat in the X-direction
     */
    var gridX = 8

    /**
     * the Y-Size of the whole grid, aka how often it will repeat in the Y-direction
     */
    var gridY = 1

    /**
     * the Z-Size of the whole grid aka how often it will repeat in the Z-direction
     */
    var gridZ = 8

    /**
     * different modes of walls
     *
     * 0 = create every wall in the pattern
     *
     * 1 = chess-pattern
     *
     * want more? write me
     */
    var mode = 0

    /**
     * the start Point of the grid
     */
    var p1: Point =
        Point(-4, 0, 0)

    /**
     * generating the Walls
     */
    override fun create(): List<SpookyWall> {
        val l = mutableListOf<SpookyWall>()
        var x = p1.x
        var y = p1.y
        var z = p1.z
        repeat(gridX) { itX ->
            repeat(gridY) { itY ->
                repeat(gridZ) { itZ ->
                    val w =SpookyWall(startRow = x, duration = panelZ, width = panelX, height = panelY, startHeight = y, startTime = z)
                    if((itZ+itY+itX)%2==0 || mode == 0)
                        l.add(w)
                    z += panelZ
                }
                z = p1.z
                y += panelY
            }
            y = p1.y
            x += panelX
        }
        x = p1.x
        return l.toList()
    }
}