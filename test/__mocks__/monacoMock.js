
module.exports = {
  editor: {
    create: jest.fn(() => ({
      dispose: jest.fn()
    }))
  }
}
