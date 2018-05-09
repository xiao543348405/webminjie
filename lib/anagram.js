function anagram(str)
{
  
    if(!str)
    {
        return result
    }
    if(str.length == 2)
    {
        return [str[0] + str[1],str[1] + str[0]]
    }
    var result = []
    result.push(str)
    return result
}

module.exports = anagram