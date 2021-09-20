function quantile(arr, q) {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
  
    if (sorted[base + 1] !== undefined) {
      return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
    } else {
      return Math.floor(sorted[base]);
    }
  }
  
  function renderingPercentile(sampleData, string) {
    return (
      string +
      `p25=${quantile(sampleData, 0.25)} p50=${quantile(sampleData, 0.5)} ` +
      `p75=${quantile(sampleData, 0.75)} p95=${quantile(sampleData, 0.95)} ` +
      `hits=${sampleData.length}`
    );
  }
  
  // сравнить метрику в разных срезах
  function compareMetric(data) {
    const slice = {};
  
    const additional = Object.keys(data.pop().additional);
  
    additional.forEach((item) => (slice[item] = {}));
  
    data.forEach((element) => {
      additional.forEach((item) => {
        let obj = {};
        const name = element.additional[item]
          ? element.additional[item]
          : 'Не известно';
  
        obj[element.name] = [element.value];
  
        return slice[item][name]
          ? slice[item][name][element.name]
            ? slice[item][name][element.name].push(element.value)
            : (slice[item][name][element.name] = [element.value])
          : (slice[item][name] = obj);
      });
    });
  
    additional.forEach((addit) => {
      Object.keys(slice[addit]).forEach((element) => {
        Object.keys(slice[addit][element]).forEach((name) => {
          const sampleData = slice[addit][element][name];
          console.log(
            renderingPercentile(
              sampleData,
              `{${addit}: "${element}"}, метрика "${name}": `
            )
          );
        });
        console.log('__________________________________________________');
      });
    });
  }
  
  function prepareData(result) {
    return result.data.map((item) => {
      item.date = item.timestamp.split('T')[0];
      return item;
    });
  }
  
  fetch(
    'https://shri.yandex/hw/stat/data?counterId=725509cf-f28b-405e-a55d-d5b8f004af70'
  )
    .then((res) => res.json())
    .then((result) => {
      let data = prepareData(result);
  
      console.log(
        'Сравнение всех метрик во всех срезах: '
      );
      console.log('__________________________________________________');
      compareMetric(data);
    });