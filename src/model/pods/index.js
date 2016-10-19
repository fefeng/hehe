import refetch from 'refetch';

const PodsModle = {
   getPods(namespace) {
      if (namespace) {
         return refetch.get('/api/v1/namespaces/' + namespace + '/pods');
      } else {
         return refetch.get('/api/v1/pods');
      }
   }
};

export default PodsModle;