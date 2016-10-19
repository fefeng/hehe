import refetch from 'refetch';

const Modle = {
      getNamespaces() {
            return refetch.get('/api/v1/namespaces');
      },

      changeNamespaces(namesapce) {
            if (window.localStorage) {
                  window.localStorage.NAMESAPCE = namesapce;
            } else {
                  document.cookie = 'NAMESAPCE=' + namesapce;
            }
      },

      getcurrentNamespace() {
            return window.localStorage.NAMESAPCE;
      }
};

export default Modle;