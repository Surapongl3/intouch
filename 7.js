function Calculate(x) {
  let water = 5832; // ปริมาณน้ำเริ่มต้น (ลิตร)
  
  for (let day = 1; day <= x; day++) {
    water = water * (2 / 3);  // เหลือ 2 ใน 3 ของน้ำตอนเช้า
  }

  
  return water;
}

console.log(Calculate(3));
