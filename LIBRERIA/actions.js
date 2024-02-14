document.addEventListener("DOMContentLoaded", () => { GetData(); });

let template_posts = (item) => {
      return `<tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
            <td>${item.userId}</td>
            <td><input type="button" value="Comments" class="btn btn-info" onclick="GetComments('https://jsonplaceholder.typicode.com/posts/${item.id}/comments')" /></td>
      </tr>`
};

let template_comments = (item) => {
      return `<li><ul>
            <li>${item.id}</li>
            <li>${item.name}</li>
            <li>${item.email}</li>
            <li>${item.body}</li>
      </ul></li>`
};

let GetData = () => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => InsertDataInTable(json));
}

let InsertDataInTable = (json) => {
    let rows = json.map(template_posts).join('');
      document.getElementById('table_body').innerHTML = rows;
}

let GetComments = (url) => {
      return fetch(url)
            .then(response => response.json())
            .then(json => ShowComments(json));
}

let ShowComments = (comments) => {
      document.getElementById("posts_block").hidden = true;
      document.getElementById("comments_block").hidden = false;
      let rows = comments.map(template_comments).join('');
      document.getElementById('comments').innerHTML = rows;
}

let GoBack = () => {
      document.getElementById("posts_block").hidden = false;
      document.getElementById("comments_block").hidden = true;
}