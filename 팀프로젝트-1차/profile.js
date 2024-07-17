// profile.js

document.addEventListener('DOMContentLoaded', () => {
    const comments = [
      '댓글 1', '댓글 2', '댓글 3', '댓글 4', '댓글 5',
      '댓글 6', '댓글 7', '댓글 8', '댓글 9', '댓글 10',
      '댓글 11', '댓글 12'
    ];
  
    const likes = [
      '좋아요한 댓글 1', '좋아요한 댓글 2', '좋아요한 댓글 3', 
      '좋아요한 댓글 4', '좋아요한 댓글 5', '좋아요한 댓글 6',
      '좋아요한 댓글 7', '좋아요한 댓글 8', '좋아요한 댓글 9',
      '좋아요한 댓글 10', '좋아요한 댓글 11', '좋아요한 댓글 12'
    ];
  
    function displayItems(items, container, page = 1, itemsPerPage = 3) {
      container.innerHTML = '';
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const paginatedItems = items.slice(start, end);
  
      paginatedItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'post-item';
        div.textContent = item;
        container.appendChild(div);
      });
    }
  
    function setupPagination(items, container, paginationContainer, itemsPerPage = 3) {
      paginationContainer.innerHTML = '';
      const pageCount = Math.ceil(items.length / itemsPerPage);
  
      for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        if (i === 1) button.classList.add('active');
        button.addEventListener('click', () => {
          paginationContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          displayItems(items, container, i, itemsPerPage);
        });
        paginationContainer.appendChild(button);
      }
    }
  
    const commentsContainer = document.getElementById('comments-section');
    const commentsPagination = document.getElementById('comments-pagination');
    const likesContainer = document.getElementById('likes-section');
    const likesPagination = document.getElementById('likes-pagination');
  
    displayItems(comments, commentsContainer);
    setupPagination(comments, commentsContainer, commentsPagination);
  
    displayItems(likes, likesContainer);
    setupPagination(likes, likesContainer, likesPagination);
  });
  