class DateOnly
{
    Day:number;
    Month:number;
    Year:number;
    constructor(month:number,day:number,year:number)
    {
        this.Month=month;
        this.Day=day;
        this.Year=year;
    }
    DayOfWeek:number;
    DayOfYear:number;
    AddDays(days:number):DateOnly
    {

    }
    AddMonths(months:number):DateOnly
    {

    }
    AddYears(years:number):DateOnly
    {

    }
    Equals(a:DateOnly):boolean
    {}
    ToString()
    {}
    GreaterThanOrEqual(a:DateOnly):boolean
    {}
    GreaterThan(a:DateOnly):boolean
    {}
    LessThan(a:DateOnly):boolean
    {}
    LessThanOrEqual(a:DateOnly):boolean
    {}
    NumerOfDays(a:DateOnly,b:DateOnly,areBothDatesInclusive:boolean):number
    {

    }

}