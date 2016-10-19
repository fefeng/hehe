import refetch from 'refetch';

export default {
   getServices(nsname, serviceId) {
      let url = '/api/v1/services/';

      if (nsname && nsname !== 'all') {
         url = `/api/v1/namespaces/${nsname}/services/`;
      }
      if (serviceId) {
         url += serviceId;
      }
      return refetch.get(url);
   }
};