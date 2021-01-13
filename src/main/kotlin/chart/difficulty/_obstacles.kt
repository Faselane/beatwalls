@file:Suppress("ClassName")

package chart.difficulty

import com.google.gson.annotations.SerializedName

data class _obstacles (
    @SerializedName("_time") var _time : Double,
    @SerializedName("_lineIndex") val _lineIndex : Int,
    @SerializedName("_type") val _type : Int,
    @SerializedName("_duration") var _duration : Double,
    @SerializedName("_width") val _width : Int,
    @SerializedName("_customData") val _obstacleCustomData : _obstacleCustomData?
)
