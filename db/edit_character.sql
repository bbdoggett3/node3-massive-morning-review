UPDATE characters 
SET name= $2,
    image= $3
WHERE id= $1;

SELECT * FROM characters;