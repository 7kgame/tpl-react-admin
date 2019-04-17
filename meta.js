module.exports = {
  prompts: {
    name: {
      message: "Project name"
    },
    version: {
      message: "Project version",
      default: "1.0.0"
    },
    description: {
      message: "Project description",
      default: "react web framework"
    },
    author: {
      message: "Author"
    },
    port: {
      type: "nubmer",
      message: "set port for the httpserver",
      default: 8000
    }
  },
  include: [
    '*.json',
    '*.js',
    '*.ts',
  ],
  exclude: []
}