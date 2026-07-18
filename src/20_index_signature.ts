 type NumberDict = {[k:string]: number}

 const counters: NumberDict ={}
 counters["likes"] = 1
 counters["values"] = 10


 type Metrices =Record<'likes'| 'views'|'shares', number>
 const mm:Metrices = {likes: 2, views: 40,shares: 30}

 type LooseType = Record<string, number| undefined>

 const n:LooseType = {likes: 2, yuna: 4, }

 //
 const priceMap = new Map<string, number[]>

priceMap.set("likes", [2, 4])
