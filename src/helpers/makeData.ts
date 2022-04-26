import { useTranslation } from 'react-i18next';

export function makeLinearData(data: Array<string>) {
  const { t } = useTranslation(['utility']);

  let result = data.map((one, index) => t(one));
  return result;
}

export function makeMatrixData(data: Array<Array<string>>) {
  const { t } = useTranslation(['utility']);

  let result = data.map((one) => {
    let subResult = one.map((row) => t(row));
    return subResult;
  });
  return result;
}
