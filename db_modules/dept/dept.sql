drop table if exists dept_main;
create table dept_main (
  dept_id char(36) not null,
  super_dept_id char(64) not null,
  create_datetime char(14) not null,
  last_update_datetime char(14),
  primary key (dept_id)
);
select * from dept_main;

drop table if exists dept_detail;
create table dept_detail (
  dept_id char(36) not null,
  dept_code varchar(50),
  dept_name varchar(50),
  primary key (dept_id)
);
select * from dept_detail;
