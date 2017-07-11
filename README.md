# docker-rails-vue

### 1.
`docker-compose run --rm web bundle exec rails new . --force --database=postgresql --skip-bundle`

### 2. 

```
# gemfile
- # gem 'therubyracer', platforms: :ruby
+ gem 'therubyracer', platforms: :ruby
+ gem 'webpacker', github: 'rails/webpacker'
```
### 3.
`docker-compose run --rm web bundle update`

`docker-compose build`

### 4.

```
# config/database.yml
+  username: postgres
+  password: <%= ENV['POSTGRES_PASSWORD'] %>
+  host: db
```

### 5.

`docker-compose run --rm web rake db:create`

### 6.

`docker-compose run --rm web rails webpacker:install`

### 7.

`docker-compose run --rm web rails webpacker:install:vue`
