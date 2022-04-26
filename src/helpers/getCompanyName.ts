import config from '../config/config';

const getCompanyName = (value: string) => {
  switch (value) {
    case 'coOper_data_1':
      return config.companies.coOper_data_1;
    case 'coOper_data_2':
      return config.companies.coOper_data_2;
    case 'coOper_data_3':
      return config.companies.coOper_data_3;
    case 'coOper_data_4':
      return config.companies.coOper_data_4;
    case 'coOper_data_5':
      return config.companies.coOper_data_5;
  }
};

export default getCompanyName;
