package structure.specialStrucures

import structure.NoodleHelix
import structure.helperClasses.CuboidConstrains
import structure.helperClasses.Point
import structure.helperClasses.SpookyWall
import kotlin.math.*

fun NoodleHelix.run(): List<SpookyWall> {
    val l = mutableListOf<SpookyWall>()
    for(ci in 0 until count){
        val points = arrayOfNulls<Point>(amount+1)
        val countOffset = ci.toDouble()/count*2*PI
        for(i in 0..amount){
            val j = i.toDouble()/amount
            val currentRot = (j*rotationAmount+startRotation)/360*2*PI + countOffset
            val x = cos(currentRot)
            val y = sin(currentRot)
            points[i] = Point(x,y,j)
        }
        for(i in 0 until amount){
            val r = radius + (endRadius?:radius -radius) * (i.toDouble()/amount)
            val p1= points[i]!!
            val p2= points[i+1]!!
            val x1 = center.x + p1.x*r
            val x2 = center.x + p2.x*r
            val y1 = center.y + p1.y*r
            val y2 = center.y + p2.y*r
            val a = y2 - y1
            val b = x1 - x2
            val c = sqrt(a.pow(2) + b.pow(2))
            val degree = atan(a/b)
            // todo this is hacky and bad. too bad!
            val cc = CuboidConstrains(p1.copy(x=x1,y=y1),p2.copy(x=x2,y=y2))
            val startRow  = cc.sx + cc.width/2-c/2
            val startHeight = cc.sy + cc.height/2
            val startTime = p1.z
            val width = c
            val height = 0.0
            val duration = p2.z-p1.z
            val localRotZ =  180 - degree/(2*PI)*360 + localRotationOffset
            val lrz = if (p1.x > p2.x) localRotZ else localRotZ + 180
            l.add(SpookyWall(
                startRow = startRow,
                duration = duration,
                width = width,
                height = height,
                startHeight = startHeight,
                startTime = startTime,
                localRotation = arrayOf(0.0, 0.0,lrz)
            ))
        }
    }
    return l.toList()
}
