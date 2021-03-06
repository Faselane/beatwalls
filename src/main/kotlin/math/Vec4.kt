package math

import kotlin.math.sqrt

data class Vec4(var x: Double = 0.0, var y: Double = 0.0, var z: Double = 0.0,var w: Double = 0.0){
    constructor(x: Number, y: Number, z: Number, t: Number): this(x.toDouble(), y.toDouble(), z.toDouble(), t.toDouble())
    val length
    get() = sqrt(x * x + y * y + z * z + w * w)

    /**
     * Normalise the vector to length 1
     */

    fun normalize(){
        val l = 1.0/ sqrt(x * x + y * y + z * z + w*w)
        x*=l; y*= l; z*=l; w*= l
    }

    fun toVec2(): Vec2 {
        return Vec2(x,y)
    }

    fun toVec3(): Vec3 {
        return Vec3(x,y,z)
    }

    operator fun plus(vec4: Vec4): Vec4 {
        return Vec4(x + vec4.x, y + vec4.y, z + vec4.z, w + vec4.w)
    }
    operator fun minus(vec4: Vec4): Vec4 {
        return Vec4(x - vec4.x, y - vec4.y, z - vec4.z, w -vec4.w)
    }
    operator fun times(fac: Double): Vec4 {
        return Vec4(x * fac, y * fac, z * fac, w*fac)
    }
    operator fun times(fac: Int): Vec4 {
        return Vec4(x * fac, y * fac, z * fac, w*fac)
    }
    operator fun div(fact: Double): Vec4 {
        val xfact = 1.0/ fact
        return Vec4(x * xfact, y * xfact, z * xfact, w*fact)
    }
    operator fun div(fact: Int): Vec4 {
        val xfact = 1.0/ fact
        return Vec4(x * xfact, y * xfact, z * xfact, w*fact)
    }
    operator fun get(index: Int) = when(index){
        0 -> x; 1 -> y; 2 -> z; 3 -> w
        else -> throw IndexOutOfBoundsException()
    }
    operator fun set(index: Int, value: Double) = when(index){
        0 -> x = value; 1 -> y = value; 2 -> z = value; 3 -> w = value
        else -> throw IndexOutOfBoundsException()
    }

    operator fun times(mat4: Mat4): Vec4 =
        Vec4(
            x=x*mat4.x.x + y*mat4.y.x + z* mat4.z.x + w * mat4.w.x,
            y=x*mat4.x.y + y*mat4.y.y + z* mat4.z.y + w * mat4.w.y,
            z=x*mat4.x.z + y*mat4.y.z + z* mat4.z.z + w * mat4.w.z,
            w=x*mat4.x.w + y*mat4.y.w + z* mat4.z.w + w * mat4.w.w,
        )

    fun toList(): List<Double> =
        listOf(x,y,z,w)

    operator fun times(vec4: Vec4): Vec4 {
        return Vec4(
            vec4.x * x,
            vec4.y * y,
            vec4.z * z,
            vec4.w * w,
        )
    }
}

