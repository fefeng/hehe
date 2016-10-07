import refetch from "refetch";

const Modle = {
      getNameSpaces() {
            return refetch.get('/api/v1/namespaces');
      }
}

export default Modle;