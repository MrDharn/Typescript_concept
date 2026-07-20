//Exclude
type EventType1 = "click"| "submit"| "keydown"|"esc"
type EventType2 = Exclude<EventType1, "keydown"| "esc">

function handleEvent(e: EventType2){
    console.log(e)
}

handleEvent("click") //only the other events other than keydownw and esc will be available to be passed


//Extract
type ActionN1 = "admin"|"customer"|"manager" | "marketer"

type ActionN2 = Extract<ActionN1, "admin"| "manager">

function handleAction(e: ActionN2){
    console.log(e)
}

handleAction("admin") //Only what is included in the ActionN2 will be available to be passed into the function


//Nullable
type DataType = number | null | undefined

type RemoveNullableDataType = NonNullable<DataType>

function multiplyNum(a: RemoveNullableDataType, b: RemoveNullableDataType){
    return a*b
}

console.log(multiplyNum(3, 10))