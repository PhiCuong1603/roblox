-- DROP FUNCTION public.get_gameaccctegory_by_id(int4);

CREATE OR REPLACE FUNCTION public.get_gameaccctegory_by_id(p_gac_id integer)
 RETURNS json
 LANGUAGE plpgsql
AS $function$
DECLARE 
    result JSON;
BEGIN 
   
    -- Thực hiện truy vấn SELECT và lưu kết quả vào biến 'result'
    SELECT json_agg(row_to_json(GAC)) INTO result
    FROM (
        SELECT * FROM GAMEACCCATEGORY WHERE GAC_ID = p_gac_id
    ) GAC;
    
    RETURN result;
END; 
$function$
;