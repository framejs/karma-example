describe("<my-element>", function() {
  describe("Can render shadow dom", function() {
    it("should return hello", function() {
      const myEl = document.createElement("my-element");
      const inst = document.body.appendChild(myEl);

        assert.equal(inst.shadowRoot.innerHTML, 'Hello');
    });
  });
});
