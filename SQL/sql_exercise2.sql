/**********************************************************
*	SQL Query & Function Example2
**********************************************************/
/**
-- Employees Table Columns
-- EMPLOYEE_ID
-- FIRST_NAME
-- LAST_NAME
-- EMAIL
-- PHONE_NUMBER
-- HIRE_DATE
-- JOB_ID
-- SALARY
-- COMMISSION_PCT
-- MANAGER_ID
-- DEPARTMENT_ID
**/

/**
--Departments Table Columns
--DEPARTMENT_ID
--DEPARTMENT_NAME
--MANAGER_ID
--LOCATION_ID
**/

/**
50번 부서 월급의 평균ㅡ 최고, 최저, 인원수를 구하여 출력하라
**/

select trunc(avg(salary)) 평균월급 ,max(salary) 최고월급,Min(salary) 최저월급,count(*) 인원수
from employees
GROUP by department_id
HAVING department_id=50
;



/**
각 부서별 급여의 평균, 최고, 최저, 인원수를 구하여 출력하라.
**/


select department_id 부서번호, trunc(avg(salary)) 평균월급 ,max(salary) 최고월급,Min(salary) 최저월급,count(*) 인원수
from employees
GROUP by department_id
order by department_id 
;



/**
각 부서별 같은 업무를 하는 사람의 인원수를 구하여 부서번호, 업무명, 인원수를 출력하라.
**/

select department_id 부서번호, job_id 업무명, count(*) 인원수
from employees
GROUP by department_id , job_id
order by department_id 
;



/**
같은 업무를 하는 사람의 수가 4명 이상인 업무와 인원수를 출력하라.
**/

select  job_id 업무명, count(*) 인원수
from employees
GROUP by job_id
HAVING COUNT(*) >= 4
;



/**
각 부서별 평균월급, 전체월급, 최고월급, 최저월급,을 구하여 평균월급이 많은순으로 출력하라.
**/

select department_id 부서번호, trunc(avg(salary)) 평균월급 ,max(salary) 최고월급,Min(salary) 최저월급
from employees
GROUP by department_id
order by trunc(avg(salary)) desc
;


/**
 부서번호, 부서명, 이름, 급여를 출력하라.
**/

select e.department_id 부서번호, d.department_name 부서명 ,e.first_name 이름,e.salary 급여
from employees e, departments d
where e.department_id = d.department_id
order BY e.department_id
;


/**
이름이 adam인 사원의 부서명을 출력하라.
**/

select d.department_name 부서명 
from employees e, departments d
where e.first_name ='Adam' and e.department_id = d.department_id
;


/**
employees테이블에 있는 employee_id와 manager_id를 이용하여 서로의 관계를 다음과 같이 출력하라
'smith'의 매니저는 'ford'이다.
**/

select a.employee_id ,a.first_name||'의 매니저 '||nvl(b.first_name,'없음')
from employees a,employees b
where a.manager_id=b.employee_id
;

/**
adam의 직무와 같은 직무를 갖는 사람의 이름, 부서명, 급여, 직무를 출력하라.
**/

select e.first_name 이름 ,d.department_name 부서명, e.salary 급여, e.job_id 직무
from employees e , departments d
where e.job_id=(select job_id from employees  where first_name='Adam') and e.department_id=d.department_id
;

/**
전체 사원의 평균 임금보다 많은 사원의 사원번호, 이름, 부서명, 입사일, 지역, 급여를 출력하라.
**/

select e.employee_id 사원번호,e.first_name 이름 ,d.department_name 부서명, e.hire_date 입사일
from employees e , departments d
WHERE e.salary > (SELECT avg(salary) from employees)and e.department_id=d.department_id
ORDER by e.employee_id
;

/**
50번 부서사람들 중에서 30번 부서의 사원과 같은 업무를 하는 사원의 사원번호, 이름, 부서명, 입사일을 출력하라.
**/

select e.employee_id 사원번호,e.first_name 이름 ,d.department_name 부서명, e.hire_date 입사일
from employees e , departments d
where e.department_id = d.department_id and e.job_id in (select job_id from employees where department_id =30)
ORDER by e.employee_id; 

/**
급여가 30번 부서의 최고 급여보다 높은 사원의 사원번호, 이름, 급여를 출력하라.
**/


select employee_id 사원번호,first_name 이름 ,salary 급여
from employees  
where  salary > (select max(salary) from employees where department_id =30)
ORDER by employee_id; 

