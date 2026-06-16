export default {
    default: {
      paths: ["features/**/*.feature"],
      import: [
        "step-definitions/**/*.ts",
        "support/**/*.ts"
      ],
      format: [
        "progress",
        "html:reports/cucumber-report.html"
      ]
    }
  };