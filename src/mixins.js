import { createApp } from 'vue';

const app = createApp({});

app.config.globalProperties.$filters = {
  formatCurrency(price) {
    if (typeof price !== 'number') {
      console.error('O valor não é um número.');
      return '';
    }

    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  },
};

export default app;
