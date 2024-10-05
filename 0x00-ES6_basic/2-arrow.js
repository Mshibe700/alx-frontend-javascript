export default function getNeighborhoodsList() {
  this.cityNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.cityNeighborhoods.push(newNeighborhood);
    return self.cityNeighborhoods;
  };
}
