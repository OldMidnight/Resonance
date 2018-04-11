"use strict";

const blogPosts = [
    { title: "First Blog"
    , body: `<p>Hi!</p>
             <p>Welcome to the first post on our new blog! This will be used by the team to announce news and go into more depth on new products. All of our social media accounts will provide links to this blog for those who wish to read about announcements in more detail.</p>
             <p>Thanks for reading!</p>
             <p>Conor.</p>`
    , date: "Conor 1/04/2018"
    },
    { title: "New Logo Released"
    , body: `<p>Hi!</p>
             <p>After a lot of hard work, we are proud to present our first logo. We chose this design as it is modern and minimal, which we believe represents us, as a company, well. The new logo can be seen below.</p>
             <div style="text-align:center"><img src='../../../Resources/Images/Products_Page_Images/Resonance-Logo.png'/></div>
             <p>Thanks for reading!</p>
             <p>Conor</p>`
    , date: "Conor 4/04/2018"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const titleElement  = document.getElementById("blog-title");
    const bodyElement = document.getElementById("blog-body");
    const dateElement = document.getElementById("blog-date");
    const listElement = document.getElementById("blog-title-list");

    const updateBlog = id => {
        const { title, body, date } = blogPosts[Math.abs(id) % blogPosts.length];
        titleElement.innerHTML = title;
        bodyElement.innerHTML = body;
        dateElement.innerHTML = date;
        
        document.getElementsByClassName("selected-blog-title")[0].setAttribute("class", "blog-title-list-item");
        document.getElementById(`title-${id}`).setAttribute("class", "selected-blog-title");
    };

    blogPosts.forEach((post, index) => {
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
