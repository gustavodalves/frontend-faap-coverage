import api from '../../api/'

const bot = (data: any[]) => api.post('/bot', {
    botMessage: data
});

export default bot;