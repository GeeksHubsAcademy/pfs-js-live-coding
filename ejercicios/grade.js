function gradeSwitch(note) {
  switch (note) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
      // case (0, 1, 2, 3, 4):
      return 'insuficiente';
    case 5:
    case 6:
      return 'suficiente';
    case 7:
    case 8:
      return 'notable';
    case 9:
    case 10:
      return 'excelente';
    default:
      throw new Error('Invalid note');
  }
}

console.log(gradeSwitch(10));
