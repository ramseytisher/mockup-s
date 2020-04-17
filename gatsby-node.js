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

  const projectNodes = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/project/" } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  projectNodes.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-template.tsx`),
      context: {
        id: node.id,
      },
    })
  })

  const blogNodes = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  blogNodes.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/project-template.tsx`),
      context: {
        id: node.id,
      },
    })
  })
}
