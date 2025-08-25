function calculateMarks() {
      let marks = [];
      for (let i = 1; i <= 5; i++) {
        marks.push(Number(document.getElementById("sub" + i).value));
      }
      
      // calculate total and average
      let total = marks.reduce((a, b) => a + b, 0);
      let average = total / marks.length;
    
      let grade = "";
      if (average >= 90) grade = "A+";
      else if (average >= 75) grade = "A";
      else if (average >= 60) grade = "B";
      else if (average >= 40) grade = "C";
      else grade = "Fail";
      
      // display result
      document.getElementById("result").innerHTML =
        `Total Marks: ${total} <br> Average: ${average.toFixed(2)} <br> Grade: ${grade}`;
    }