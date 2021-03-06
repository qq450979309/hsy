/**
 * 深拷贝
 */
export const deepClone = source => {
    if (!source || typeof source !== 'object') {
        throw new Error('error arguments', 'shallowClone')
    }

    var targetObj = source.constructor === Array ? [] : {}
    for (var keys in source) {
        if (source.hasOwnProperty(keys)) {
            if (source[keys] && typeof source[keys] === 'object') {
                targetObj[keys] = source[keys].constructor === Array ? [] : {}
                targetObj[keys] = deepClone(source[keys])
            } else {
                targetObj[keys] = source[keys]
            }
        }
    }
    return targetObj
}
