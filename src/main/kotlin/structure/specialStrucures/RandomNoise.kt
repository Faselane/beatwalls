package structure.specialStrucures

import structure.helperClasses.CuboidConstrains
import structure.wallStructures.RandomNoise
import structure.helperClasses.SpookyWall
import kotlin.math.roundToInt
import kotlin.random.Random

fun RandomNoise.run(): List<SpookyWall> {
    val l = mutableListOf<SpookyWall>()
    val c = CuboidConstrains(p1, p2,seed?.invoke()?: Random.nextInt())
    amount = amount ?: (8 * (c.ez - c.sz)).roundToInt()
    repeat(amount!!) {
        val p = c.random(true)
        val w = SpookyWall(
            startRow = p.x,
            duration = 0.0,
            width = 0.0,
            height = 0.0,
            startHeight = p.y,
            startTime = c.sz + (it.toDouble() / amount!! * (c.ez - c.sz))
        )
        l.add(w)
    }
    return l.toList()
}
