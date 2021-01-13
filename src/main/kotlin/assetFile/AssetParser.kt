package assetFile

import beatwalls.errorExit
import structure.*
import structure.math.Point
import structure.wallStructures.Define
import structure.wallStructures.EmptyWallStructure
import structure.wallStructures.WallStructure
import types.*
import types.bwDouble
import types.bwInt
import kotlin.random.Random
import kotlin.reflect.*
import kotlin.reflect.full.createInstance
import kotlin.reflect.full.createType
import kotlin.reflect.full.memberProperties
import kotlin.reflect.full.withNullability

//   ____  ____   __   ____  ____  ____
//  (  _ \(  __) / _\ (    \(  __)(  _ \
//   )   / ) _) /    \ ) D ( ) _)  )   /
//  (__\_)(____)\_/\_/(____/(____)(__\_)
//
// I basically wrote a new script language.
// Below is what needed to go automatically set all the values for all the parameters.


//global variables
var RandomSeed = Random(Random.nextInt())

fun findStructure(name: String, definedStructure: List<Define>): Any {
    val structName = name.toLowerCase()
    val specialStructs = WallStructure::class.sealedSubclasses
    val specialStructsNames = specialStructs.map { it.simpleName?.toLowerCase()?:""}

    val definedStructureNames = definedStructure.map { it.name.toLowerCase() }
    val struct: Any

    // sets the struct
    struct = when (structName) {
        in definedStructureNames -> findDefinedStruct(structName,definedStructure)
        in specialStructsNames -> findSpecialStruct(structName,specialStructs)
        else -> {
            errorExit { "structure $structName not found" }
        }
    }
    return struct
}

fun findDefinedStruct(structName: String, definedStructure: List<Define>): Define {
    return TODO("Old and busted")
    //val found = definedStructure.findLast { it.name.toLowerCase() == structName }!!.deepCopy()
    //val def = Define()
    //def.structures = listOf(found)
    // return def
}

fun findSpecialStruct(structName: String,specialStructs: List<KClass<out WallStructure>>): WallStructure {
    return specialStructs.find { it.simpleName!!.toLowerCase() == structName }!!.createInstance()
}

/**
 * fills the given structure with the option, if it exist
 */
fun readWallStructOptions(lastObject: Any, option: Pair<String, String>, definedStructure: List<Define>){
    if (lastObject is EmptyWallStructure){
        return
    }

    val property = findProperty(lastObject,option.key())

    if (property != null) {
        fillProperty(
            lastObject = lastObject,
            property = property,
            value = option.value(),
            definedStructure = definedStructure
        )
    }else{
        if( lastObject is Define) {
            if(lastObject.structures.firstOrNull() != null){
                readWallStructOptions(lastObject.structures.first(), option, definedStructure)
            }
        }else{
            errorExit { "The WallStructure $lastObject does not have the property ${option.key()}" }
        }
    }
}
fun findProperty(lastObject: Any, key:String): KProperty1<out Any, Any?>? {
    val properties = lastObject::class.memberProperties.toMutableList()
    return  properties.find { it.name.toLowerCase() ==key.toLowerCase() }

}

@OptIn(ExperimentalStdlibApi::class)
fun fillProperty(
    property: KProperty1<out Any, Any?>,
    value: String,
    definedStructure: List<Define>,
    lastObject: Any
){
    val valueType:Any?
    //todo add nullability check
    val returnType = property.returnType.withNullability(false)

    // todo refactor default
    // curently it does not allow easing
    val ss = if (lastObject is WallStructure)
        lastObject.structureState
    else
        StructureState()

    valueType = when (returnType) {
        typeOf<Boolean>() -> value.toBoolean()
        typeOf<Int>() -> value.toIntOrNull()
        typeOf<Double>()-> value.toDoubleOrNull()
        typeOf<BwDouble>()  -> bwDouble(value,ss)
        typeOf<BwInt>()  -> bwInt(value,ss)
        typeOf<()->Double>() -> value.toDoubleFunc()
        typeOf<String>() -> value
        typeOf<Point>() -> value.toPoint()
        typeOf<WallStructure>() -> value.toWallStructure(definedStructure)
        typeOf<List<WallStructure>>() -> value.toWallStructureList(definedStructure)
        else -> errorExit { "Unknown type: $returnType" }
    }

    try {
        lastObject.writeProperty(property, valueType)
    } catch (e: Exception) {
        val beat = if (lastObject is WallStructure) lastObject.beat.toString() else "COULDNOTFIND"
        errorExit(e) { "Failed to parse value $value of property ${property.name} with type $returnType of wallstructure $lastObject at beat $beat . Perhaps in your syntax you have some typos?" }
    }

}

fun<E> E.writeProperty(property: KProperty1<out E, Any?>?, value : Any?){
    if (property is KMutableProperty<*>){
        return property.setter.call(this,value)
    }
    throw(Exception())
}

fun<E> E.readProperty(property: KProperty1<out E, Any?>?): Any? {
    if (property is KMutableProperty<*>){
        return property.getter.call(this)
    }
    throw(Exception())
}

fun getWallListType(): KType {
    val l = WallStructure::class.createType()
    val k = KTypeProjection(type = l, variance = KVariance.INVARIANT)
    return List::class.createType(listOf(k))
}

/**
 * creates the list of key-value Pairs
 */
fun parseAssetString(s:String): MutableList<Pair<String, String>> =
    s
        .lines()
        .asSequence()
        .map { it.trim() }
        .filterNot { it.startsWith("#") || it.isEmpty() }
        .map { it.replace("\\t".toRegex(), "") }
        .map { it.replaceAfter("#", "") }
        .map { it.replace("#", "") }
        .map { it.split(":") }
        .map { it.map { l -> l.trim() } }
        .map { it[0].toLowerCase() to it.minus(it[0]).joinToString(":") }
        .filterNot{ it.first.isEmpty() || it.second.isEmpty()}
        .toMutableList()

/**
 * different name for componen1/component2
 */
fun Pair<String,String>.value(): String {
    return this.component2()
}
fun Pair<String,String>.key(): String {
    return this.component1()
}

