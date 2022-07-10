
type Words = {
    [key: string]: string;
  };
  
class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(term: string, definition: string) {
    if (!this.words[term]) {
      this.words[term] = definition;
    }
  }
  get(term: string) {
    return this.words[term];
  }
  delete(term: string) {
    delete this.words[term];
  }
  update(term: string, newDef: string) {
    if (this.words[term]) {
      this.words[term] = newDef;
    }
  }
  showAll() {
    Object.keys(this.words).forEach((term) =>
      console.log(`${term}: ${this.words[term]}`)
    );
  }
  count() {
    return Object.keys(this.words).length;
  }
}
  