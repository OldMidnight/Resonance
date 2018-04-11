"use strict";

const BLOG_POSTS = [
    { title: "some_title0"
    , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus sed nemo enim modi veniam aliquam dolorem fugiat rerum recusandae saepe facere placeat, voluptatibus sapiente iusto rem eum itaque vero voluptates repellendus earum illo quis? Possimus itaque voluptatibus ab fugiat voluptatum omnis quia accusantium dolore adipisci! Velit recusandae perspiciatis praesentium rem laborum numquam, perferendis molestiae omnis dicta, nobis, ducimus libero doloremque fugit. Voluptate vitae vel aliquam, doloremque maiores ab commodi nulla adipisci non quasi culpa, quidem quaerat beatae facere, reiciendis itaque! Dolores facere iusto, officiis aut eveniet nobis assumenda voluptate iste nihil beatae reprehenderit quisquam molestiae, nisi minus repellat inventore odit, quod reiciendis dolore voluptatibus eligendi sit delectus voluptatum nam. Officiis voluptas cumque molestias veritatis facilis nemo debitis atque id deserunt quis magni blanditiis unde, eum fugiat. Optio explicabo asperiores sunt temporibus, repellat aperiam quam deleniti mollitia. Vel illo dolores mollitia? Expedita dicta officia aut autem nemo debitis mollitia harum, nesciunt ea vero illo repellendus hic dolor placeat doloremque perferendis sapiente? Soluta possimus, iusto fugit eum provident ipsa. Ullam amet nostrum perspiciatis, a rem laborum alias, voluptatibus quia harum incidunt, velit fuga ea aspernatur hic aperiam dignissimos quasi voluptas tempore! Iure ipsam minus saepe vel exercitationem iste, rem iusto tempore."
    , date: "date/author"
    },
    { title: "some_title1"
    , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus sed nemo enim modi veniam aliquam dolorem fugiat rerum recusandae saepe facere placeat, voluptatibus sapiente iusto rem eum itaque vero voluptates repellendus earum illo quis? Possimus itaque voluptatibus ab fugiat voluptatum omnis quia accusantium dolore adipisci! Velit recusandae perspiciatis praesentium rem laborum numquam, perferendis molestiae omnis dicta, nobis, ducimus libero doloremque fugit. Voluptate vitae vel aliquam, doloremque maiores ab commodi nulla adipisci non quasi culpa, quidem quaerat beatae facere, reiciendis itaque! Dolores facere iusto, officiis aut eveniet nobis assumenda voluptate iste nihil beatae reprehenderit quisquam molestiae, nisi minus repellat inventore odit, quod reiciendis dolore voluptatibus eligendi sit delectus voluptatum nam. Officiis voluptas cumque molestias veritatis facilis nemo debitis atque id deserunt quis magni blanditiis unde, eum fugiat. Optio explicabo asperiores sunt temporibus, repellat aperiam quam deleniti mollitia. Vel illo dolores mollitia? Expedita dicta officia aut autem nemo debitis mollitia harum, nesciunt ea vero illo repellendus hic dolor placeat doloremque perferendis sapiente? Soluta possimus, iusto fugit eum provident ipsa. Ullam amet nostrum perspiciatis, a rem laborum alias, voluptatibus quia harum incidunt, velit fuga ea aspernatur hic aperiam dignissimos quasi voluptas tempore! Iure ipsam minus saepe vel exercitationem iste, rem iusto tempore."
    , date: "date/author"
    },
    { title: "some_title2"
    , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus sed nemo enim modi veniam aliquam dolorem fugiat rerum recusandae saepe facere placeat, voluptatibus sapiente iusto rem eum itaque vero voluptates repellendus earum illo quis? Possimus itaque voluptatibus ab fugiat voluptatum omnis quia accusantium dolore adipisci! Velit recusandae perspiciatis praesentium rem laborum numquam, perferendis molestiae omnis dicta, nobis, ducimus libero doloremque fugit. Voluptate vitae vel aliquam, doloremque maiores ab commodi nulla adipisci non quasi culpa, quidem quaerat beatae facere, reiciendis itaque! Dolores facere iusto, officiis aut eveniet nobis assumenda voluptate iste nihil beatae reprehenderit quisquam molestiae, nisi minus repellat inventore odit, quod reiciendis dolore voluptatibus eligendi sit delectus voluptatum nam. Officiis voluptas cumque molestias veritatis facilis nemo debitis atque id deserunt quis magni blanditiis unde, eum fugiat. Optio explicabo asperiores sunt temporibus, repellat aperiam quam deleniti mollitia. Vel illo dolores mollitia? Expedita dicta officia aut autem nemo debitis mollitia harum, nesciunt ea vero illo repellendus hic dolor placeat doloremque perferendis sapiente? Soluta possimus, iusto fugit eum provident ipsa. Ullam amet nostrum perspiciatis, a rem laborum alias, voluptatibus quia harum incidunt, velit fuga ea aspernatur hic aperiam dignissimos quasi voluptas tempore! Iure ipsam minus saepe vel exercitationem iste, rem iusto tempore."
    , date: "date/author"
    },
    { title: "some_title3"
    , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus sed nemo enim modi veniam aliquam dolorem fugiat rerum recusandae saepe facere placeat, voluptatibus sapiente iusto rem eum itaque vero voluptates repellendus earum illo quis? Possimus itaque voluptatibus ab fugiat voluptatum omnis quia accusantium dolore adipisci! Velit recusandae perspiciatis praesentium rem laborum numquam, perferendis molestiae omnis dicta, nobis, ducimus libero doloremque fugit. Voluptate vitae vel aliquam, doloremque maiores ab commodi nulla adipisci non quasi culpa, quidem quaerat beatae facere, reiciendis itaque! Dolores facere iusto, officiis aut eveniet nobis assumenda voluptate iste nihil beatae reprehenderit quisquam molestiae, nisi minus repellat inventore odit, quod reiciendis dolore voluptatibus eligendi sit delectus voluptatum nam. Officiis voluptas cumque molestias veritatis facilis nemo debitis atque id deserunt quis magni blanditiis unde, eum fugiat. Optio explicabo asperiores sunt temporibus, repellat aperiam quam deleniti mollitia. Vel illo dolores mollitia? Expedita dicta officia aut autem nemo debitis mollitia harum, nesciunt ea vero illo repellendus hic dolor placeat doloremque perferendis sapiente? Soluta possimus, iusto fugit eum provident ipsa. Ullam amet nostrum perspiciatis, a rem laborum alias, voluptatibus quia harum incidunt, velit fuga ea aspernatur hic aperiam dignissimos quasi voluptas tempore! Iure ipsam minus saepe vel exercitationem iste, rem iusto tempore."
    , date: "date/author"
    },
    { title: "some_title4"
    , body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus sed nemo enim modi veniam aliquam dolorem fugiat rerum recusandae saepe facere placeat, voluptatibus sapiente iusto rem eum itaque vero voluptates repellendus earum illo quis? Possimus itaque voluptatibus ab fugiat voluptatum omnis quia accusantium dolore adipisci! Velit recusandae perspiciatis praesentium rem laborum numquam, perferendis molestiae omnis dicta, nobis, ducimus libero doloremque fugit. Voluptate vitae vel aliquam, doloremque maiores ab commodi nulla adipisci non quasi culpa, quidem quaerat beatae facere, reiciendis itaque! Dolores facere iusto, officiis aut eveniet nobis assumenda voluptate iste nihil beatae reprehenderit quisquam molestiae, nisi minus repellat inventore odit, quod reiciendis dolore voluptatibus eligendi sit delectus voluptatum nam. Officiis voluptas cumque molestias veritatis facilis nemo debitis atque id deserunt quis magni blanditiis unde, eum fugiat. Optio explicabo asperiores sunt temporibus, repellat aperiam quam deleniti mollitia. Vel illo dolores mollitia? Expedita dicta officia aut autem nemo debitis mollitia harum, nesciunt ea vero illo repellendus hic dolor placeat doloremque perferendis sapiente? Soluta possimus, iusto fugit eum provident ipsa. Ullam amet nostrum perspiciatis, a rem laborum alias, voluptatibus quia harum incidunt, velit fuga ea aspernatur hic aperiam dignissimos quasi voluptas tempore! Iure ipsam minus saepe vel exercitationem iste, rem iusto tempore."
    , date: "date/author"
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const titleElement  = document.getElementById("blog-title");
    const bodyElement = document.getElementById("blog-body");
    const dateElement = document.getElementById("blog-date");
    const listElement = document.getElementById("blog-title-list");

    const updateBlog = id => {
        const { title, body, date } = BLOG_POSTS[Math.abs(id) % BLOG_POSTS.length];
        titleElement.innerHTML = title;
        bodyElement.innerHTML = body;
        dateElement.innerHTML = date;
        
        document.getElementsByClassName("selected-blog-title")[0].setAttribute("class", "blog-title-list-item");
        document.getElementById(`title-${id}`).setAttribute("class", "selected-blog-title");
    };

    BLOG_POSTS.forEach((post, index) => {
        let listItem = document.createElement("li");
        let hyperlink = document.createElement("a");

        hyperlink.href = "#";
        hyperlink.setAttribute("class", "blog-title-list-item");
        hyperlink.setAttribute("id", `title-${index}`);
        hyperlink.onclick = () => updateBlog(index);
        hyperlink.innerHTML = post.title;

        listItem.appendChild(hyperlink);
        listElement.appendChild(listItem);
    });

    document.getElementById(`title-0`).setAttribute("class", "selected-blog-title");
    updateBlog(0);
});
