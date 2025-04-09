export const getArrNumbersForLokAndEpis = (num: number | undefined) => {
  if (num !== undefined) {
    let arrNumbersEpisodes = []
    for (let i = 1; i <= num; i++) {
      arrNumbersEpisodes.push(i)
    }

    return arrNumbersEpisodes;
  }
  return []
}