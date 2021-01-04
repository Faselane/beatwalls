package beatwalls

import java.io.File
import java.lang.Exception

object GlobalConfig{
    //flags
    var clearAll: Boolean = false
    var deleteAllPrevious: Boolean = false
    var noUpdate: Boolean = false

    // char options
    var neValues: Boolean = true
    var bwFile: File = File("")
    var ceFile: File = File("")

    var bpm: Double = 0.0
    var hjsDuration = 0.0
    var offset = 0.0


    fun reload() {
        try {
            bwFile = readPath()
            bpm = readBpm()
            hjsDuration = readHjsDuration()
            offset = readOffset()
            neValues = readNeValues()
        } catch (e: Exception) {
            errorExit(e) { "Failed to read some parameters. Please drag your song into beatwalls.exe" }
        }
        check()
        logger.info { "reloaded config $this" }
    }

    override fun toString(): String {
        return "clearAll: $clearAll, deleteAllPrevious: $deleteAllPrevious, noupdate:$noUpdate, neValues: $neValues bwfileL $bwFile bpm:$bpm, hjsDuration: $hjsDuration, offset: $offset"
    }

    private fun check() {
        if (!bwFile.canRead())
            errorExit { "cant read bw file:$bwFile, setup this program by dragging a Song into it" }
        if (bpm <= 0.0)
            errorExit { "Failed to read in the bpm. It cannot be negative or null" }
        if (hjsDuration <= 0.0)
            errorExit { "Failed to read in the hjsDuration. It cannot be negative or null" }
        if (hjsDuration <= 0.0)
            errorExit { "Failed to read in the hjsDuration. It cannot be negative or null" }
    }
}
