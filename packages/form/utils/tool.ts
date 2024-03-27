import { cloneDeep } from "lodash";
// 判断对象是否包含某个字段
export function hasKey(data: Record<string, any>, key: string): boolean {
  return key in data;
}
// 获取对象嵌套属性值 type: set get
export interface Result {
  ok: boolean
  data: Record<string, any>
}
function deepValueHandler(obj: Record<string, any>, keys: Array<string> = [], type: string = 'get', value: any = null) {
  let result: Result = {
    ok: true,
    data: {},
  };
  const _getValue = (_obj: Record<string, any>, _keys: Array<string> = []) => {
    if (_keys.length > 1) {
      let key = _keys.shift();
      if (key && hasKey(_obj, key)) {
        _getValue(_obj[key], _keys);
      } else {
        result.ok = false;
        console.error(`对象内不存在属性：${key}`)
      }
    } else if (_keys.length === 1) {
      let key = _keys[0];
      if (hasKey(_obj, key)) {
        result.ok = true;
        if (type === 'set') {
          _obj[key] = value
        } else {
          result.data = _obj[key];
        }
      } else {
        result.ok = false;
        console.error(`对象内不存在属性：${key}`)
      }
    } else {
      result.ok = false;
      result.data = _keys;
      console.error(`keys参数异常：${keys}`)
    }
  };
  if (obj && keys) {
    const copyData = cloneDeep(obj);
    _getValue(copyData, keys);
    if (type === 'set') {
      result.data = copyData
    }
  } else {
    result.ok = false;
    result.data = { obj, keys };
  }
  return result;
}

export function getValue(data: Record<string, any>, keys: Array<string>) {
  return deepValueHandler(data, keys, 'get')
}
export function setValue(data: Record<string, any>, keys: Array<string>, value: any) {
  return deepValueHandler(data, keys, 'set', value)
}