const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions, reporter }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `blog` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach((node) => {
    console.log(JSON.stringify(node, null, 2))
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-template.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
