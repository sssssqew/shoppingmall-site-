// 서버에서 가져온 데이터라고 가정하고 임시로 데이터를 생성하기 
function generateRandomId(n){
  const nums = new Array(n).fill(0) // n:3 => [0 ,0 , 0]
  return nums.map(n => Math.floor(Math.random()*10)).join("") // [0 ,0 , 0] => [3, 6, 1] => "361"
}
function generateRandomString(n){
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const str = new Array(n).fill("a") // n:3 => ["a" ,"a" , "a"]
  return str.map(s => alphabet[Math.floor(Math.random()*alphabet.length)]).join("") // n:3 => ["a" ,"a" , "a"] => ["d", "f", "z"] => "dfz"
}

const dummyData = [
  {
    videoId: generateRandomId(16),
    videoName: generateRandomString(10),
    videoLength: generateRandomId(6),
    videoDescription: generateRandomString(100)
  },
  {
    videoId: generateRandomId(16),
    videoName: generateRandomString(10),
    videoLength: generateRandomId(6),
    videoDescription: generateRandomString(100)
  },
  {
    videoId: generateRandomId(16),
    videoName: generateRandomString(10),
    videoLength: generateRandomId(6),
    videoDescription: generateRandomString(100)
  },
  {
    videoId: generateRandomId(16),
    videoName: generateRandomString(10),
    videoLength: generateRandomId(6),
    videoDescription: generateRandomString(100)
  },
  {
    videoId: generateRandomId(16),
    videoName: generateRandomString(10),
    videoLength: generateRandomId(6),
    videoDescription: generateRandomString(100)
  },
]
export default dummyData
