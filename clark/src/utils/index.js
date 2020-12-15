import {Province, City} from './province'
import {Internet, GangWei} from './zhineng'

export function getProvince(){

  let ProvinceOptions = []
  for( let city in Province ){
    ProvinceOptions.push({
      value:Province[city],
      label:Province[city],
      children:[],
    })

    let arr = ProvinceOptions[ProvinceOptions.length - 1].children
    for( let cityKey in City[city] ){
      arr.push({
        value:City[city][cityKey],
        label:City[city][cityKey],
      })
    }
  }
  return ProvinceOptions;
}

export function getZhiNeng(){
  let InternetOptions = []
  for( let internet in Internet ){
    InternetOptions.push({
      value:Internet[internet],
      label:Internet[internet],
      children:[],
    })

    let arr = InternetOptions[InternetOptions.length - 1].children
    for( let internetKey in GangWei[internet] ){
      arr.push({
        value:GangWei[internet][internetKey],
        label:GangWei[internet][internetKey],
      })
    }
  }
  return InternetOptions;
}
