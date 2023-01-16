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
        return 1;
    }
    get DayOfYear(): number {
        let daysInFullMonth: number = 0;
        for (i = 1; i < this.Month; i++) {
            daysInFullMonth += DateOnly.GetNumberOfDaysInMonth(i, this.Year);
        }
        return daysInFullMonth + this.Day;
    }
    static IsLeadYear(year: number): boolean {
        return year % 4 == 0;
    }
    public AddDays(days: number): DateOnly {
        let day: number, month: number, year: number;
        let remainingDays = days;
        if (remainingDays < this.RemainingDaysInCurrentMonth)
            day = this.Day + remainingDays;
        else {
            day = 1; remainingDays -= this.RemainingDaysInCurrentMonth;
            while (remainingDays > 0) {
                let numberOfDaysInMonth = DateOnly.GetNumberOfDaysInMonth(month, year);
                if (numberOfDaysInMonth < remainingDays) {
                    month += 1;
                    remainingDays -= numberOfDaysInMonth;
                }

            }
            if (remainingDays > 0)
                day += remainingDays;
        }
        return new DateOnly(month, day, year);
    }
    public AddMonths(months: number): DateOnly {
        let remainingMonths = months;
        let day: number, month: number, year: number;
        if (remainingMonths >= 12) {
            year = this.Year + remainingMonths / 12;
            remainingMonths = remainingMonths % 12;
        }
        if (this.Month + remainingMonths > 12) {
            month = 12 - (this.Month + remainingMonths)
            year++;
        }
        return new DateOnly(day, month, year)
    }
    public AddYears(years: number): DateOnly {
        let day: number, month: number, year: number;
        year = this.Year + years;
        if (this.Day == 29 && this.Month == 2 && !DateOnly.IsLeadYear(this.Year + years)) {
            day = 1;
            month = 3;
        }
        else {
            day = this.Day;
            month = this.Month;
        }
        return new DateOnly(day, month, year);
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
    private Compare(a: Date) {
        if (this.Year != a.Year) return this.Year - a.Year;
        if (this.Month != a.Month) return this.Month - a.Month;
        return this.Day - a.Day;
    }
    private static NumerOfDaysBetweenDates(a: DateOnly, b: DateOnly, areBothDatesInclusive: boolean): number {

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
    private static IsLastDayofYear(month: number, day: number): boolean {
        return month == 12 && day == 31;
    }
    private static IsLastDayOfMonth(month: number, day: number, year: number): boolean {
        return DateOnly.GetNumberOfDaysInMonth(year, month) == day;
    }
}