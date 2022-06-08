module.exports = (plop) => {
  plop.setGenerator("Component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component's name?"
      },
      {
        type: "confirm",
        name: "isStyledComponent",
        message: "Is this a styed component?"
      }
    ],
    actions: function (data) {
      let actions = [
        {
          type: "add",
          path: "src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx",
          templateFile: "plop-templates/Component/component.test.js.hbs"
        },
        {
          type: "add",
          path: "src/components/{{pascalCase name}}/index.ts",
          templateFile: "plop-templates/Component/index.js.hbs"
        },
        {
          type: "add",
          path: "src/components/{{pascalCase name}}/types.ts",
          templateFile: "plop-templates/Component/types.js.hbs"
        },
        {
          type: "add",
          path: "src/components/index.ts",
          templateFile: "plop-templates/index.js.hbs",
          skipIfExists: true
        },
        {
          type: "append",
          path: "src/components/index.ts",
          pattern: `/* PLOP_INJECT_EXPORT */`,
          template: `export { {{pascalCase name}} } from './{{pascalCase name}}';`
        }
      ];

      if (data.isStyledComponent) {
        actions.push(
          {
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
            templateFile: "plop-templates/Component/styledComponent.js.hbs"
          },
          {
            type: "add",
            path: "src/components/{{pascalCase name}}/{{pascalCase name}}Styles.tsx",
            templateFile: "plop-templates/Component/componentStyles.js.hbs"
          }
        );
      } else {
        actions.push({
          type: "add",
          path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
          templateFile: "plop-templates/Component/component.js.hbs"
        });
      }

      return actions;
    }
  });

  plop.setGenerator("Hook", {
    description: "Create a custom react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your hook's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "plop-templates/Hook/hook.js.hbs"
      },
      {
        type: "add",
        path: "src/hooks/index.ts",
        templateFile: "plop-templates/hook-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/hooks/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{camelCase name}} } from './{{camelCase name}}';`
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/{{camelCase name}}.spec.ts",
        templateFile: "plop-templates/Hook/hook.spec.js.hbs"
      },
      {
        type: "add",
        path: "src/hooks/{{camelCase name}}/index.ts",
        templateFile: "plop-templates/Hook/index.js.hbs"
      }
    ]
  });

  plop.setGenerator("Util", {
    description: "Create a custom util",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your util's name?"
      }
    ],
    actions: [
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/{{camelCase name}}.ts",
        templateFile: "plop-templates/Util/util.js.hbs"
      },
      {
        type: "add",
        path: "src/utils/index.ts",
        templateFile: "plop-templates/util-index.js.hbs",
        skipIfExists: true
      },
      {
        type: "append",
        path: "src/utils/index.ts",
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{camelCase name}} } from './{{camelCase name}}';`
      },
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/{{camelCase name}}.spec.ts",
        templateFile: "plop-templates/Util/util.spec.js.hbs"
      },
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/index.ts",
        templateFile: "plop-templates/Util/index.js.hbs"
      },
      {
        type: "add",
        path: "src/utils/{{camelCase name}}/types.ts",
        templateFile: "plop-templates/Util/types.js.hbs"
      }
    ]
  });
};
