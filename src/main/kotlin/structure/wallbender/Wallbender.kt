package structure.wallbender

import structure.wallStructures.WallStructure
import structure.helperClasses.SpookyWall

fun WallStructure.bendWalls(walls: List<SpookyWall>): List<SpookyWall> {
    var l = walls.map { it.copy() }
    l = color(l)
    l.forEach {
        if (track != null) it.track = track
    } // only sets the track, if it is not null. this allows nested tracks in define
    l.forEach { if (noteJumpMovementSpeed != null) it.noteJumpStartBeat = noteJumpMovementSpeed!!() }
    l.forEach { if (noteJumpMovementSpeedOffset != null) it.noteJumpStartBeatOffset = noteJumpMovementSpeedOffset!!() }
    l.forEach {
        if (bombs) it.bomb = bombs
    } // only sets the track, if it is not null. this allows nested tracks in define
    l = mirror(l)
    return l
}


