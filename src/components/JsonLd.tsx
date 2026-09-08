/**
 * Renders a schema.org graph as JSON-LD.
 *
 * `<` is escaped because a `</script>` inside any string — a project name, a
 * quote, an intro paragraph — would otherwise close the tag early and dump the
 * rest of the graph into the document as markup.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
