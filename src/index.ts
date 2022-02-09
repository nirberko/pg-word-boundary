export default (regex: string): string => {
  if (!regex.length) {
    throw new Error('Regex value is empty');
  }

  const regexByWordBoundaries = regex.split('\\b');

  const result = [];
  let firstOccurrence = true;
  for (let i = 0; i < regexByWordBoundaries.length; i++) {
    result.push(regexByWordBoundaries[i]);
    if (i !== regexByWordBoundaries.length - 1) {
      if (firstOccurrence) {
        result.push('\\m');
        firstOccurrence = false;
      } else {
        result.push(`\\M`);
        firstOccurrence = true;
      }
    }
  }

  return result.join('');
}
