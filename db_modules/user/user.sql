drop table if exists user_account;
create table user_account (
  user_id char(36) not null,
  account varchar(50) not null,
  password_md5 char(64) not null,
  create_datetime char(14) not null,
  last_update_datetime char(14),
  last_login_datetime char(14),
  primary key (user_id)
);
select * from user_account;

drop table if exists user_privacy;
create table user_privacy (
  user_id char(36) not null,
  user_name varchar(10),
  user_alias varchar(10),
  email varchar(50),
  mobile char(13),
  primary key (user_id)
);
select * from user_privacy;
