USE tech_blog_db;

INSERT INTO users (username, password)
VALUES
('test_user', 'password123'),
('second_user', 'password123'),
('third_user', 'password123');

INSERT INTO posts (title, content, user_id)
VALUES
('First Post', 'This is the first post.', 1),
('Second Post', 'This is the second post', 1),
('Third Post', 'This is the third post', 2);

INSERT INTO comments (content, user_id, post_id)
VALUES
('Wow!', 2, 1),
('Cool', 3, 1),
('Nice', 1, 3);
