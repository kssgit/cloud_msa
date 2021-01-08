/**********************************************************
*	SQL Query & Function Example1
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

--�μ���ȣ�� 10���� �μ��� ��� �� �����ȣ, �̸�, ������ ����϶�

select EMPLOYEE_ID, LAST_NAME, SALARY 
from employees
where DEPARTMENT_ID =10;



--�����ȣ�� 100�� ��� �� �̸�, �Ի���, �μ� ��ȣ�� ����϶�.


select DEPARTMENT_ID, LAST_NAME, DEPARTMENT_ID 
from employees
where EMPLOYEE_ID =100;

--�̸��� Ellen�� ����� ��� ������ ����϶�.

select * 
from employees
where FIRST_NAME ='Ellen';



--�Ի����� 08/04/21�� ����� �̸�, �μ���ȣ, ������ ����϶�.
select ename �̸�, deptno �μ���ȣ, sal ����


select first_name, department_id, salary 
from employees
where HIRE_DATE='08/04/21'
;



--������ SA_MAN �ƴ� ����� ��� ������ ����϶�.

select * 
from employees
where JOB_ID != 'SA_MAN'


--�Ի����� 08/04/21 ���Ŀ� �Ի��� ����� ������ ����϶�.

select * 
from employees
where HIRE_DATE >= '08/04/21';


--�μ���ȣ�� 20,30���� ������ ��� ����� �̸�, �����ȣ, �μ���ȣ�� ����϶�.

select first_name, employee_id, department_id 
from employees
where department_id not in (20,30)
;


--�̸��� S�� �����ϴ� ����� �����ȣ, �̸�, �Ի���, �μ���ȣ�� ����϶�.

select employee_id,first_name ,hire_date, department_id 
from employees
where first_name like 'S%'
;

--�̸��� s�� �����ϰ� ������ ���ڰ� t�� ����� ������ ����϶�.

select *
from employees
where first_name like 's%t' 
;


/**
employees ���̺��� �̸�, �޿�, ��, �Ѿ��� ���Ͽ� �Ѿ� ���� ������ ����϶� �� �󿩱��� NULL�� ����� ����

*/

select first_name , salary ,commission_pct*salary sc, salary+(commission_pct*salary) total
from employees
where commission_pct is not null
order by salary+(commission_pct*salary)  desc 
;


/**
10�� �μ��� ��� ����鿡�� �޿��� 13%�� ���ʽ��� �����ϱ�� �Ͽ���. �̸�, �޿�, ���ʽ��ݾ�, �μ���ȣ�� ����϶�.
**/

select first_name , salary ,salary*0.13 ,department_id
from employees
where department_id =10;


/**
30�� �μ��� ������ ����Ͽ� �̸�, �μ���ȣ, �޿�, ������ ����϶�. �� ������ �޿��� 150%�� ���ʽ��� �����Ѵ�.
   -- ���� = sal*12+(sal*1.5)
**/

select first_name , department_id, salary, (salary*12)+(salary*1.5) total
from employees
where department_id =30;


/**
�μ���ȣ�� 20�� �μ��� �ð��� �ӱ��� ����Ͽ� ����϶�. �� 1���� �ٹ��ϼ��� 12���̰� 1�� �ٹ��ð��� 5�ð��̴�.
��¾���� �̸�, �޿�, �ð��� �ӱ�(�Ҽ����� 1��° �ڸ����� �ݿø�)�� ����϶�.
   -- �ñ� = sal/�ϼ�/�ð�  -> sal/ 12/5 
   -- round(m, n) m�� �Ҽ��� n�ڸ����� �ݿø� 
**/

select first_name , salary, round(salary/12/5,1) hw
from employees
where department_id =20;


/**
�޿��� 1500���� 3000������ ����� �޿��� 5%�� ȸ��� �����ϱ�� �Ͽ���. �̸� �̸�, �޿�, ȸ��(-2�ڸ����� �ݿø�)�� ����϶�.
	-- ȸ��  = sal * 0.05	
	-- -2�ڸ����� �ݿø� : ���� 2��° �ڸ����� �ݿø�.. 100������  
**/

select first_name , salary, round(salary*0.05,2) dutch
from employees
where salary BETWEEN 1500 and 3000;



/**
�Ի��Ϻ��� ���ݱ����� ��¥���� ����϶�. �μ���ȣ, �̸�, �Ի���, ������, �ٹ��ϼ�(�Ҽ�����������), �ٹ����,
 �ٹ�����(30�� ����)�� ����϶�.
	-- ���� ��¥ : sysdate 
	-- �ٹ� �ϼ� : ���糯¥ - �Ի��� = sysdate - hire_date  -> ��¥ - ��¥ : �ϼ� ����
	-- �ٹ� ��� : to_char(sysdate,'YYYY')-to_char(hiredate,'YYYY')
	-- �ٹ� ���� : �ٹ��ϼ� / 1��(30��)
**/


select department_id , first_name,hire_date,sysdate, TRUNC(sysdate-hire_date) d,
to_char(sysdate,'YYYY')-to_char(hire_date,'YYYY') y,TRUNC(TRUNC(sysdate-hire_date)/30) m
from employees
where salary BETWEEN 1500 and 3000;




/**
�Ի��Ϸκ��� ���ñ����� �ϼ��� ���Ͽ� �̸�, �Ի���, �ٹ��ϼ��� ����϶�.
--round(sysdate-hiredate,0) �ٹ��ϼ�
**/

select  first_name,hire_date, round(sysdate-hire_date,0) day
from employees
;

/**
�Ի����� 2012�� 7�� 5���� ���·� �̸�, �Ի����� ����϶�.
	-- ��¥ ���� �տ� fm �� ���� '0'�� ǥ������ �ʴ´ٴ� ��.. 
	-- 'fmYYYY"��" MM"��" DD"��' 
**/

select  TO_CHAR(hire_date,'fmYYYY"��" MM"��" DD"��' )
from employees
;


/**
�̸�(first_name)�� ���ڼ��� 6���̻��� ����� �̸��� �տ��� 3�ڸ� ���Ͽ� �ҹ��ڷ� �̸����� ����϶�.
	-- substr(str, position, length) : str ���ڸ� positin ���� length���� ��ŭ ǥ��
	-- lower(str)  �ҹ��� ��ȯ
	-- length(str)  str�� ����
**/


select  SUBSTR(first_name,0,3)
from employees
where length(first_name)>=6
;



/**
10�� �μ� ������ ��դ� �ְ�, ����, �ο����� ���Ͽ� ����϶�
**/


select  Avg(salary) avg ,Max(salary) max,Min(salary) min,count(employee_id) count
from employees
where department_id=10
;


/**
�� �μ��� �޿��� ���, �ְ�, ����, �ο����� ���Ͽ� ����϶�.
**/


select department_id ,trunc(Avg(salary)) avg ,Max(salary) max,Min(salary) min,count(employee_id) count
from employees
group by department_id
order by department_id
;



/**
�� �μ��� ���� ������ �ϴ� ����� �ο����� ���Ͽ� �μ���ȣ, ������, �ο����� ����϶�.
**/

select department_id �μ���ȣ ,job_id ����,count(*) �ο���
from employees
group by department_id ,job_id
order by department_id
;



/**
���� ������ �ϴ� ����� ���� 4�� �̻��� ������ �ο����� ����϶�.
**/

select job_id ����,count(*) �ο���
from employees
group by job_id
HAVING count(job_id)>= 4
;



/**
�� �μ��� ��տ���, ��ü����, �ְ����, ��������,�� ���Ͽ� ��տ����� ���������� ����϶�.
**/

select trunc(avg(salary)) ��տ���,sum(salary) ��ü����,Min(salary) ��������
from employees
group by department_id
order by avg(salary) desc
;


