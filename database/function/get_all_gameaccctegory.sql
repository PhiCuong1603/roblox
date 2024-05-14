-- DROP FUNCTION public.get_all_gameaccctegory();

CREATE OR REPLACE FUNCTION public.get_all_gameaccctegory()
 RETURNS json
 LANGUAGE plpgsql
AS $function$
DECLARE 
	RESULT JSON;
BEGIN 
   SELECT JSON_AGG(ROW_TO_JSON(GAC)) INTO RESULT
    FROM (
        SELECT * FROM GAMEACCCATEGORY ORDER BY GAC_ID ASC
    ) GAC;
    
    RETURN RESULT;
END;
$function$
;