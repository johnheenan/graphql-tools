(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(1),r=t(9),o=(t(0),t(168)),l={id:"scalars",title:"Custom scalars and enums",description:"Add custom scalar and enum types to your graphql-tools generated schema."},s={id:"scalars",title:"Custom scalars and enums",description:"Add custom scalar and enum types to your graphql-tools generated schema.",source:"@site/docs/scalars.md",permalink:"/docs/scalars",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/scalars.md",sidebar:"someSidebar",previous:{title:"Resolvers composition",permalink:"/docs/resolvers-composition"},next:{title:"Mocking",permalink:"/docs/mocking"}},c=[{value:"Custom scalars",id:"custom-scalars",children:[{value:"Using a package",id:"using-a-package",children:[]},{value:"Custom <code>GraphQLScalarType</code> instance",id:"custom-graphqlscalartype-instance",children:[]}]},{value:"Custom scalar examples",id:"custom-scalar-examples",children:[{value:"Date as a scalar",id:"date-as-a-scalar",children:[]},{value:"Validations",id:"validations",children:[]}]},{value:"Enums",id:"enums",children:[{value:"Internal values",id:"internal-values",children:[]}]}],i={rightToc:c};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The GraphQL specification includes the following default scalar types: ",Object(o.b)("inlineCode",{parentName:"p"},"Int"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Float"),", ",Object(o.b)("inlineCode",{parentName:"p"},"String"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),". While this covers most of the use cases, often you need to support custom atomic data types (e.g. Date), or you want a version of an existing type that does some validation. To enable this, GraphQL allows you to define custom scalar types. Enumerations are similar to custom scalars, but their values can only be one of a pre-defined list of strings."),Object(o.b)("h2",{id:"custom-scalars"},"Custom scalars"),Object(o.b)("p",null,"To define a custom scalar you simply add it to the schema string with the following notation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scalar MyCustomScalar\n")),Object(o.b)("p",null,"Afterwards, you have to define the behavior of your ",Object(o.b)("inlineCode",{parentName:"p"},"MyCustomScalar")," custom scalar by passing an instance of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/#graphqlscalartype"}),Object(o.b)("inlineCode",{parentName:"a"},"GraphQLScalarType"))," class in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/resolvers/#resolver-map"}),"resolver map"),". This instance can be defined in a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#using-a-package"}),"dependency package")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"#custom-graphqlscalartype-instance"}),"in your own code"),"."),Object(o.b)("p",null,"For more information about GraphQL's type system, please refer to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/"}),"official documentation")," or to the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mugli/learning-graphql/blob/master/7.%20Deep%20Dive%20into%20GraphQL%20Type%20System.md"}),"Learning GraphQL")," tutorial."),Object(o.b)("p",null,"Note that ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollostack/apollo-client/issues/585"}),"Apollo Client does not currently have a way to automatically interpret custom scalars"),", so there's no way to automatically reverse the serialization on the client."),Object(o.b)("h3",{id:"using-a-package"},"Using a package"),Object(o.b)("p",null,"Here, we'll take the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/taion/graphql-type-json"}),"graphql-type-json")," package as an example to demonstrate what can be done. This npm package defines a JSON GraphQL scalar type."),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-type-json")," package to your project's dependencies :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install --save graphql-type-json\n")),Object(o.b)("p",null,"In your JavaScript code, require the type defined by in the npm package and use it :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { makeExecutableSchema } from 'graphql-tools';\nimport GraphQLJSON from 'graphql-type-json';\n\nconst schemaString = `\n\nscalar JSON\n\ntype Foo {\n  aField: JSON\n}\n\ntype Query {\n  foo: Foo\n}\n\n`;\n\nconst resolveFunctions = {\n  JSON: GraphQLJSON\n};\n\nconst jsSchema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });\n")),Object(o.b)("p",null,"Remark : ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLJSON")," is a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/#graphqlscalartype"}),Object(o.b)("inlineCode",{parentName:"a"},"GraphQLScalarType"))," instance."),Object(o.b)("p",null,"For a set of popular scalar types that are ready to reuse, try out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/urigo/graphql-scalars"}),"GraphQL Scalars npm library"),"."),Object(o.b)("h3",{id:"custom-graphqlscalartype-instance"},"Custom ",Object(o.b)("inlineCode",{parentName:"h3"},"GraphQLScalarType")," instance"),Object(o.b)("p",null,"If needed, you can define your own ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/graphql-js/type/#graphqlscalartype"}),"GraphQLScalarType")," instance. This can be done the following way :"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLScalarType } from 'graphql';\nimport { makeExecutableSchema } from 'graphql-tools';\n\nconst myCustomScalarType = new GraphQLScalarType({\n  name: 'MyCustomScalar',\n  description: 'Description of my custom scalar type',\n  serialize(value) {\n    let result;\n    // Implement your own behavior here by setting the 'result' variable\n    return result;\n  },\n  parseValue(value) {\n    let result;\n    // Implement your own behavior here by setting the 'result' variable\n    return result;\n  },\n  parseLiteral(ast) {\n    switch (ast.kind) {\n      // Implement your own behavior here by returning what suits your needs\n      // depending on ast.kind\n    }\n  }\n});\n\nconst schemaString = `\n\nscalar MyCustomScalar\n\ntype Foo {\n  aField: MyCustomScalar\n}\n\ntype Query {\n  foo: Foo\n}\n\n`;\n\nconst resolverFunctions = {\n  MyCustomScalar: myCustomScalarType\n};\n\nconst jsSchema = makeExecutableSchema({\n  typeDefs: schemaString,\n  resolvers: resolverFunctions,\n});\n")),Object(o.b)("h2",{id:"custom-scalar-examples"},"Custom scalar examples"),Object(o.b)("p",null,"Let's look at a couple of examples to demonstrate how a custom scalar type can be defined."),Object(o.b)("h3",{id:"date-as-a-scalar"},"Date as a scalar"),Object(o.b)("p",null,"The goal is to define a ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," data type for returning ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," values from the database. Let's say we're using a MongoDB driver that uses the native JavaScript ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," data type. The ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," data type can be easily serialized as a number using the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"}),Object(o.b)("inlineCode",{parentName:"a"},"getTime()")," method"),". Therefore, we would like our GraphQL server to send and receive ",Object(o.b)("inlineCode",{parentName:"p"},"Date"),"s as numbers when serializing to JSON. This number will be resolved to a ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," on the server representing the date value. On the client, the user can simply create a new date from the received numeric value."),Object(o.b)("p",null,"The following is the implementation of the ",Object(o.b)("inlineCode",{parentName:"p"},"Date")," data type. First, the schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scalar Date\n\ntype MyType {\n   created: Date\n}\n")),Object(o.b)("p",null,"Next, the resolver:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLScalarType } from 'graphql';\nimport { Kind } from 'graphql/language';\n\nconst resolverMap = {\n  Date: new GraphQLScalarType({\n    name: 'Date',\n    description: 'Date custom scalar type',\n    parseValue(value) {\n      return new Date(value); // value from the client\n    },\n    serialize(value) {\n      return value.getTime(); // value sent to the client\n    },\n    parseLiteral(ast) {\n      if (ast.kind === Kind.INT) {\n        return new Date(+ast.value) // ast value is always in string format\n      }\n      return null;\n    },\n  }),\n};\n")),Object(o.b)("h3",{id:"validations"},"Validations"),Object(o.b)("p",null,"In this example, we follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/docs/api-reference-type-system/"}),"official GraphQL documentation")," for the scalar datatype. Let's say that you have a database field that should only contain odd numbers. First, the schema:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"scalar Odd\n\ntype MyType {\n    oddValue: Odd\n}\n")),Object(o.b)("p",null,"Next, the resolver:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { GraphQLScalarType } from 'graphql';\nimport { Kind } from 'graphql/language';\n\nfunction oddValue(value) {\n  return value % 2 === 1 ? value : null;\n}\n\nconst resolverMap = {\n  Odd: new GraphQLScalarType({\n    name: 'Odd',\n    description: 'Odd custom scalar type',\n    parseValue: oddValue,\n    serialize: oddValue,\n    parseLiteral(ast) {\n      if (ast.kind === Kind.INT) {\n        return oddValue(parseInt(ast.value, 10));\n      }\n      return null;\n    },\n  }),\n};\n")),Object(o.b)("h2",{id:"enums"},"Enums"),Object(o.b)("p",null,"An Enum is similar to a scalar type, but it can only be one of several values defined in the schema. Enums are most useful in a situation where you need the user to pick from a prescribed list of options, and they will auto-complete in tools like GraphiQL."),Object(o.b)("p",null,"In the schema language, an enum looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"enum AllowedColor {\n  RED\n  GREEN\n  BLUE\n}\n")),Object(o.b)("p",null,"You can use it in your schema anywhere you could use a scalar:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  favoriteColor: AllowedColor # As a return value\n  avatar(borderColor: AllowedColor): String # As an argument\n}\n")),Object(o.b)("p",null,"Then, you query it like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  avatar(borderColor: RED)\n}\n")),Object(o.b)("p",null,"If you want to pass the enum value as a variable, use a string in your JSON, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"query MyAvatar($color: AllowedColor) {\n  avatar(borderColor: $color)\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "color": "RED"\n}\n')),Object(o.b)("p",null,"Putting it all together:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const typeDefs = `\n  enum AllowedColor {\n    RED\n    GREEN\n    BLUE\n  }\n\n  type Query {\n    favoriteColor: AllowedColor # As a return value\n    avatar(borderColor: AllowedColor): String # As an argument\n  }\n`;\n\nconst resolvers = {\n  Query: {\n    favoriteColor: () => 'RED',\n    avatar: (root, args) => {\n      // args.borderColor is 'RED', 'GREEN', or 'BLUE'\n    },\n  }\n};\n\nconst schema = makeExecutableSchema({ typeDefs, resolvers });\n")),Object(o.b)("h3",{id:"internal-values"},"Internal values"),Object(o.b)("p",null,"Often, you might have a different value for the enum in your code than in the public API. So maybe in the API we call it ",Object(o.b)("inlineCode",{parentName:"p"},"RED"),", but inside our resolvers we want to use ",Object(o.b)("inlineCode",{parentName:"p"},"#f00")," instead. That's why you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," argument to ",Object(o.b)("inlineCode",{parentName:"p"},"makeExecutableSchema")," to add custom values to your enum that only show up internally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const resolvers = {\n  AllowedColor: {\n    RED: '#f00',\n    GREEN: '#0f0',\n    BLUE: '#00f',\n  }\n};\n")),Object(o.b)("p",null,"These don't change the public API at all, but they do allow you to use that value instead of the schema value in your resolvers, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const resolvers = {\n  AllowedColor: {\n    RED: '#f00',\n    GREEN: '#0f0',\n    BLUE: '#00f',\n  },\n  Query: {\n    favoriteColor: () => '#f00',\n    avatar: (root, args) => {\n      // args.favoriteColor is '#f00', '#0f0', or '#00f'\n    },\n  }\n};\n")),Object(o.b)("p",null,"Most of the time, you don't need to use this feature of enums unless you're interoperating with some other library which already expects its values in a different form."))}p.isMDXComponent=!0},168:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return d}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s({},a,{},e)),t},u=function(e){var a=p(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return t?r.a.createElement(d,s({ref:a},i,{components:t})):r.a.createElement(d,s({ref:a},i))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);