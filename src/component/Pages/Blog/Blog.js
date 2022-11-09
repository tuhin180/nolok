import React from "react";

import useTitle from "../../../Hooks/useTitle";
const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <h1 className="text-5xl font-bold m-10">Blogs</h1>
      <div>
        <h1>
          <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                    <h3 className="text-3xl font-semibold">Jhonkar Mahbub</h3>
                    <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                      Questions
                    </span>
                  </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                      <h3 className="text-xl font-semibold tracking-wide">
                        Different betwwen SQL and NOSQL
                      </h3>

                      <p className="mt-3">
                        SQL databases are primarily called as Relational
                        Databases (RDBMS); whereas NoSQL database are primarily
                        called as non-relational or distributed database.SQL
                        databases defines and manipulates data based structured
                        query language (SQL). Seeing from a side this language
                        is extremely powerful. SQL is one of the most versatile
                        and widely-used options available which makes it a safe
                        choice especially for great complex queries. But from
                        other side it can be restrictive. SQL requires you to
                        use predefined schemas to determine the structure of
                        your data before you work with it. Also all of your data
                        must follow the same structure. This can require
                        significant up-front preparation which means that a
                        change in the structure would be both difficult and
                        disruptive to your whole system. A NoSQL database has
                        dynamic schema for unstructured data. Data is stored in
                        many ways which means it can be document-oriented,
                        column-oriented, graph-based or organized as a KeyValue
                        store. This flexibility means that documents can be
                        created without having defined structure first. Also
                        each document can have its own unique structure. The
                        syntax varies from database to database, and you can add
                        fields as you go.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                      <h3 className="text-xl font-semibold tracking-wide">
                        What is jwt and how does it works?
                      </h3>

                      <p className="mt-3">
                        JWT or JSON Web Token, is an open standard used to share
                        security information between two parties — a client and
                        a server. Each JWT contains encoded JSON objects,
                        including a set of claims. JWTs are signed using a
                        cryptographic algorithm to ensure that the claims cannot
                        be altered after the token is issued. JWTs differ from
                        other web tokens in that they contain a set of claims.
                        Claims are used to transmit information between two
                        parties. What these claims are depends on the use case
                        at hand. For example, a claim may assert who issued the
                        token, how long it is valid for, or what permissions the
                        client has been granted. A JWT is a string made up of
                        three parts, separated by dots (.), and serialized using
                        base64. In the most common serialization format, compact
                        serialization, the JWT looks something like this:
                        xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON
                        strings: The header and the payload. The signature.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                      <h3 className="text-xl font-semibold tracking-wide">
                        What is the difference between javaScript and nodeJs?
                      </h3>

                      <p className="mt-3">
                        JavaScript is a client-side scripting language that is
                        lightweight, cross-platform, and interpreted. Both Java
                        and HTML include it. Node.js, on the other hand, is a
                        V8-based server-side programming language.As a result,
                        it is used to create network-centric applications. It's
                        a networked system made for data-intensive real-time
                        applications. JavaScript is a simple programming
                        language that can be used with any browser that has the
                        JavaScript Engine installed. Node.js, on the other hand,
                        is an interpreter or execution environment for the
                        JavaScript programming language. It requires libraries
                        that can be conveniently accessed from JavaScript
                        programming to be more helpful.Any engine may run
                        JavaScript. As a result, writing JavaScript is
                        incredibly easy, and any working environment is similar
                        to a complete browser. Node.js, on the other hand, only
                        enables the V8 engine. Written JavaScript code, on the
                        other hand, can run in any context, regardless of
                        whether the V8 engine is supported
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                      <h3 className="text-xl font-semibold tracking-wide">
                        How does nodes nodejs handle Multiple request at the
                        same time?
                      </h3>

                      <p className="mt-3">
                        Node.js is an open-source, cross-platform, back-end
                        JavaScript runtime environment that runs on a JavaScript
                        Engine (i.e. V8 engine) and executes JavaScript code
                        outside a web browser, which was designed to build
                        scalable network applications. Node.js lets developers
                        use JavaScript to write command line tools and for
                        server-side scripting—running scripts server-side to
                        produce dynamic web page content before the page is sent
                        to the user's web browser. Consequently, Node.js
                        represents a "JavaScript everywhere" paradigm, unifying
                        web-application development around a single programming
                        language, rather than different languages for
                        server-side and client-side scripts.
                        <strong>
                          Node.js accepts the request from the clients and sends
                          the response, while working with the request node.js
                          handles them with a single thread. To operate I/O
                          operations or requests node.js use the concept of
                          threads. Thread is a sequence of instructions that the
                          server needs to perform. It runs parallel on the
                          server to provide the information to multiple clients.
                          Node.js is an event loop single-threaded language. It
                          can handle concurrent requests with a single thread
                          without blocking it for one request. Node.js basically
                          works on two concept Asynchronous Non-blocking I/O
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </h1>
      </div>
    </div>
  );
};

export default Blog;
