class DateOnly {
    readonly Day: number;
    readonly Month: number;
    readonly Year: number;
    constructor(month: number, day: number, year: number) {
        this.Month = month;
        this.Day = day;
        this.Year = year;
    }
    get DayOfWeek(): number {
        let dayOfWeek: number = 6;//1960
        dayOfWeek += DateOnly.NumerOfDaysBetweenDates(new Date(1, 1, 1960), this);
        return dayOfWeek % 7 + 1;
    }
    get DayOfYear(): number {
        let daysInFullMonth: number = 0;
        for (month = 1; month < this.Month; month++) {
            daysInFullMonth += DateOnly.GetNumberOfDaysInMonth(month, this.Year);
        }
        return daysInFullMonth + this.Day;
    }

    public AddDays(days: number): DateOnly {
        let numberOfDaysInCurrentMonth = DateOnly.GetNumberOfDaysInMonth(this.Month, this.Year);
        if (this.Day + days <= numberOfDaysInCurrentMonth) {
            return new DateOnly(this.Month, this.Day + days, this.Year);
        }

        let day: number, month: number, year: number;
        let remainingDays = days - (numberOfDaysInCurrentMonth - this.Day);
        day = 1;
        if (this.Month == 12) {
            month = 1;
            year = this.Year + 1;
        }
        else {
            month = this.Month + 1;
            year = this.Year;
        }

        while (remainingDays > 0 && month > 1) {
            let numberOfDaysInMonth = DateOnly.GetNumberOfDaysInMonth(month, year);
            if (numberOfDaysInMonth <= remainingDays) {
                if (this.Month == 12) {
                    month = 1;
                    year++;
                }
                else {
                    month++;
                }
                remainingDays -= numberOfDaysInMonth;
            }

        }
        while (remainingDays > 0) {
            let numberOfDaysInYear = DateOnly.GetNumberOfDaysInYear(year);
            if (numberOfDaysInYear <= remainingDays) {
                year++;
                remainingDays -= numberOfDaysInYear;
            }

        }
        while (remainingDays > 0) {
            let numberOfDaysInMonth = DateOnly.GetNumberOfDaysInMonth(month, year);
            if (numberOfDaysInMonth <= remainingDays) {
                month++;
                remainingDays -= numberOfDaysInMonth;
            }
            else
                break;

        }
        if (remainingDays > 0)
            day += remainingDays;

        return new DateOnly(month, day, year);
    }
    public AddMonths(months: number): DateOnly {
        let remainingMonths = months;
        let day: number, month: number, year: number = this.Year;
        if (remainingMonths >= 12) {
            year += remainingMonths / 12;
            remainingMonths = remainingMonths % 12;
        }

        if (this.Month + remainingMonths > 12) {
            month = 12 - (this.Month + remainingMonths)
            year++;
        }
        else
            month = this.Month + remainingMonths;
        if (month == 2 && day == 29 && DateOnly.IsLeadYear(year)) {
            month = 3;
            day = 1;
        }
        return new DateOnly(day, month, year)
    }
    public AddYears(years: number): DateOnly {
        if (this.Day == 29 && this.Month == 2 && !DateOnly.IsLeadYear(this.Year + years)) {
            return new DateOnly(3, 1, this.Year + years);
        }
        else {
            return new DateOnly(this.Month, this.Day, this.Year + years);
        }
    }
    public Equals(a: DateOnly): boolean {
        return this.Compare(a) == 0;
    }
    public ToString() {
        return this.Month.toString() + "/" + this.Day.toString();
    }
    public GreaterThanOrEqual(a: DateOnly): boolean {
        return this.Compare(a) >= 0;
    }
    public GreaterThan(a: DateOnly): boolean {
        return this.Compare(a) > 0;
    }
    public LessThan(a: DateOnly): boolean {
        return this.Compare(a) < 0;
    }
    public LessThanOrEqual(a: DateOnly): boolean {
        return this.Compare(a) <= 0;
    }
     public static NumerOfDaysBetweenDates(a: DateOnly, b: DateOnly, areBothDatesInclusive: boolean): number {

        if (a.Year == b.Year && a.Month == b.Month)
            return b.Day - a.Day;

        let numberOfDays: number;

        if (a.Month == 1 && a.Day == 1 && a.Year < b.Year)
            numberOfDays = DateOnly.GetNumberOfDaysInYear(a.Year);
        else {
            numberOfDays = DateOnly.GetNumberOfDaysInMonth(a.Month, a.Year) - a.Day;


            for (let month = a.Month + 1; month <= 12; month++) {
                if (a.Year == b.Year && month == b.Month)
                    return numberOfDays + b.Day;

                numberOfDays += DateOnly.GetNumberOfDaysInMonth(month, a.Year);
            }
        }
        for (let year = a.Year + 1; year < b.Year; year++)
            numberOfDays += DateOnly.GetNumberOfDaysInYear(year);

        for (let month = 1; month < b.Month; month++)
            numberOfDays += DateOnly.GetNumberOfDaysInMonth(month, b.Year);
        numberOfDays += b.Day;
        return numberOfDays;
    }
    private Compare(a: Date) {
        if (this.Year != a.Year) return this.Year - a.Year;
        if (this.Month != a.Month) return this.Month - a.Month;
        return this.Day - a.Day;
    }

    private static GetNumberOfDaysInYear(year: number) {
        return DateOnly.IsLeapYear(year) ? 366 : 365;
    }
    private static GetNumberOfDaysInMonth(month: number, year: number): number {
        if (month == 2) {
            return DateOnly.IsLeapYear(year) ? 29 : 28;
        }
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            return 30;
        }
        return 31;
    }
    private static IsLeapYear(year: number): boolean {
        return year % 4 == 0;
    }

}