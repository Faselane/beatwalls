package compiler.property

import structure.WallStructure
import kotlin.reflect.KProperty

class BwDouble: BwProperty<Double>() {
    override fun getValue(thisRef: WallStructure, property: KProperty<*>): Double {
        val expression = getExpression(expressionString, getConstants(thisRef))
        if(!checkExpression(expression)) throw InvalidExpressionException(
            expression
        )
        return expression.calculate()
    }
}