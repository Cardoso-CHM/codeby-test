import jsonWithFee from '../assets/json/acima-10-reais.json';
import jsonWithoutFee from '../assets/json/abaixo-10-reais.json';

const fakeApi = {
  get: (withFee) => {
    const randomDeplay = Math.floor(Math.random() * 2000) + 1;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(withFee ? jsonWithoutFee : jsonWithFee);
      }, randomDeplay)
    });
  }
};

export default fakeApi;