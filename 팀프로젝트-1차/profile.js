const commentsPerPage = 15;
let currentPage = 1;
let comments = []; // 서버에서 받아온 댓글 데이터를 이곳에 할당
let totalComments = comments.length;

function renderComments(comments, page) {
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = '';

    const start = (page - 1) * commentsPerPage;
    const end = start + commentsPerPage;
    const paginatedComments = comments.slice(start, end);

    paginatedComments.forEach(comment => {
        const li = document.createElement('li');
        li.className = 'comment';
        li.innerHTML = `
            ${comment.comment_contents}
            <button type="button" onclick="deleteComment(${comment.comment_id});">삭제</button>
        `;
        commentList.appendChild(li);
    });
}

function setupPagination(totalComments) {
    const prevPageBtn = document.getElementById('prevPageBtn');
    const nextPageBtn = document.getElementById('nextPageBtn');

    prevPageBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderComments(comments, currentPage);
        }
    };

    nextPageBtn.onclick = () => {
        if (currentPage < Math.ceil(totalComments / commentsPerPage)) {
            currentPage++;
            renderComments(comments, currentPage);
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    renderComments(comments, currentPage);
    setupPagination(totalComments);
});

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "triangle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});

document.getElementById('editNicknameBtn').onclick = function() {
    document.getElementById('nicknameModal').style.display = "block";
};

document.querySelectorAll('.close').forEach(function(element) {
    element.onclick = function() {
        document.getElementById('nicknameModal').style.display = "none";
        document.getElementById('alertModal').style.display = "none";
    };
});

document.getElementById('saveNicknameBtn').onclick = function() {
    var newNickname = document.getElementById('newNickname').value;
    document.getElementById('nicknameDisplay').innerText = newNickname;
    document.getElementById('nicknameModal').style.display = "none";
};

document.getElementById('deleteAccountBtn').onclick = function() {
    document.getElementById('confirmModal').style.display = "block";
};

document.getElementById('confirmYesBtn').onclick = function() {
    // 회원 탈퇴 로직 구현
    document.getElementById('alertModal').style.display = "block";
    document.getElementById('confirmModal').style.display = "none";
};

document.getElementById('confirmNoBtn').onclick = function() {
    document.getElementById('confirmModal').style.display = "none";
};

document.getElementById('alertOkBtn').onclick = function() {
    // 로그아웃 처리 또는 페이지 리다이렉션
    document.location.href = '/';
};

function logout() {
    // 로그아웃 처리 로직
}
