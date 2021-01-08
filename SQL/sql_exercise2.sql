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
50�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
**/

select trunc(avg(salary)) ��տ��� ,max(salary) �ְ����,Min(salary) ��������,count(*) �ο���
from employees
GROUP by department_id
HAVING department_id=50
;



/**
�� �μ��� �޿��� ���, �ְ�, ����, �ο����� ���Ͽ� ����϶�.
**/


select department_id �μ���ȣ, trunc(avg(salary)) ��տ��� ,max(salary) �ְ����,Min(salary) ��������,count(*) �ο���
from employees
GROUP by department_id
order by department_id 
;



/**
�� �μ��� ���� ������ �ϴ� ����� �ο����� ���Ͽ� �μ���ȣ, ������, �ο����� ����϶�.
**/

select department_id �μ���ȣ, job_id ������, count(*) �ο���
from employees
GROUP by department_id , job_id
order by department_id 
;



/**
���� ������ �ϴ� ����� ���� 4�� �̻��� ������ �ο����� ����϶�.
**/

select  job_id ������, count(*) �ο���
from employees
GROUP by job_id
HAVING COUNT(*) >= 4
;



/**
�� �μ��� ��տ���, ��ü����, �ְ����, ��������,�� ���Ͽ� ��տ����� ���������� ����϶�.
**/

select department_id �μ���ȣ, trunc(avg(salary)) ��տ��� ,max(salary) �ְ����,Min(salary) ��������
from employees
GROUP by department_id
order by trunc(avg(salary)) desc
;


/**
 �μ���ȣ, �μ���, �̸�, �޿��� ����϶�.
**/

select e.department_id �μ���ȣ, d.department_name �μ��� ,e.first_name �̸�,e.salary �޿�
from employees e, departments d
where e.department_id = d.department_id
order BY e.department_id
;


/**
�̸��� adam�� ����� �μ����� ����϶�.
**/

select d.department_name �μ��� 
from employees e, departments d
where e.first_name ='Adam' and e.department_id = d.department_id
;


/**
employees���̺� �ִ� employee_id�� manager_id�� �̿��Ͽ� ������ ���踦 ������ ���� ����϶�
'smith'�� �Ŵ����� 'ford'�̴�.
**/

select a.employee_id ,a.first_name||'�� �Ŵ��� '||nvl(b.first_name,'����')
from employees a,employees b
where a.manager_id=b.employee_id
;

/**
adam�� ������ ���� ������ ���� ����� �̸�, �μ���, �޿�, ������ ����϶�.
**/

select e.first_name �̸� ,d.department_name �μ���, e.salary �޿�, e.job_id ����
from employees e , departments d
where e.job_id=(select job_id from employees  where first_name='Adam') and e.department_id=d.department_id
;

/**
��ü ����� ��� �ӱݺ��� ���� ����� �����ȣ, �̸�, �μ���, �Ի���, ����, �޿��� ����϶�.
**/

select e.employee_id �����ȣ,e.first_name �̸� ,d.department_name �μ���, e.hire_date �Ի���
from employees e , departments d
WHERE e.salary > (SELECT avg(salary) from employees)and e.department_id=d.department_id
ORDER by e.employee_id
;

/**
50�� �μ������ �߿��� 30�� �μ��� ����� ���� ������ �ϴ� ����� �����ȣ, �̸�, �μ���, �Ի����� ����϶�.
**/

select e.employee_id �����ȣ,e.first_name �̸� ,d.department_name �μ���, e.hire_date �Ի���
from employees e , departments d
where e.department_id = d.department_id and e.job_id in (select job_id from employees where department_id =30)
ORDER by e.employee_id; 

/**
�޿��� 30�� �μ��� �ְ� �޿����� ���� ����� �����ȣ, �̸�, �޿��� ����϶�.
**/


select employee_id �����ȣ,first_name �̸� ,salary �޿�
from employees  
where  salary > (select max(salary) from employees where department_id =30)
ORDER by employee_id; 

