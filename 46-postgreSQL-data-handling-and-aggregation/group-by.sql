
select
    count(*),country
from
    heart
group by
    country
    having count(*) > 100