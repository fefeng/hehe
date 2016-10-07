import refetch from "refetch";

const NodeModle = {
      getNodes() {
            return refetch.get('/api/v1/nodes');
      }
}

export default NodeModle;