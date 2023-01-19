export class DateOnly {
    readonly Day: number;
    readonly Month: number;
    readonly Year: number;
    constructor(month: number, day: number, year: number) {
        this.Month = month;
        this.Day = day;
        this.Year = year;
    }
    get DayOfWeek(): number {
        let dayOfWeek: number = 2;//1900
        dayOfWeek += DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1900), this, false);
        return (dayOfWeek - 1) % 7 + 1;
    }
    get DayOfYear(): number {
        let daysInFullMonth: number = 0;
        for (let month = 1; month < this.Month; month++) {
            daysInFullMonth += DateOnly.GetNumberOfDaysInMonth(month, this.Year);
        }
        return daysInFullMonth + this.Day;
    }

    public AddDays(days: number): DateOnly {
        if (days == 0)
            return new DateOnly(this.Month, this.Day, this.Year);
        if (days > 0) {
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
                else
                    break;

            }
            while (remainingDays > 0) {
                let numberOfDaysInYear = DateOnly.GetNumberOfDaysInYear(year);
                if (numberOfDaysInYear <= remainingDays) {
                    year++;
                    remainingDays -= numberOfDaysInYear;
                }
                else
                break;

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
                day += remainingDays-1;
            return new DateOnly(month, day, year);
        }
        else {

            let day: number, month: number, year: number;
            return new DateOnly(month, day, year);
        }
    }
    public AddMonths(months: number): DateOnly {
        let remainingMonths = months;
        let day: number = 1;
        day = this.Day;
        console.log(day);
        let month: number;
        let year: number = this.Year;
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
        if (month == 2 && day == 29 && DateOnly.IsLeapYear(year)) {
            month = 3;
            day = 1;
        }
        return new DateOnly(month, day, year)
    }
    public AddYears(years: number): DateOnly {
        if (this.Day == 29 && this.Month == 2 && !DateOnly.IsLeapYear(this.Year + years)) {
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
    public static NumerOfDaysBetweenDates(date1: DateOnly, date2: DateOnly, areBothDatesInclusive: boolean): number {

        let a: DateOnly;
        let b: DateOnly;
        let multiplier = 1;
        let addition = areBothDatesInclusive ? 1 : 0;;
        if (date1.GreaterThan(date2)) {
            a = date2;
            b = date1;
            multiplier = -1;
        }
        else {
            a = date1;
            b = date2;
        }
        if (a.Year == b.Year && a.Month == b.Month)
            return (b.Day - a.Day + addition) * multiplier;

        let numberOfDays: number;

        if (a.Month == 1 && a.Day == 1 && a.Year < b.Year)
            numberOfDays = DateOnly.GetNumberOfDaysInYear(a.Year);
        else {
            numberOfDays = DateOnly.GetNumberOfDaysInMonth(a.Month, a.Year) - a.Day + 1;


            for (let month = a.Month + 1; month <= 12; month++) {
                if (a.Year == b.Year && month == b.Month)
                    return (numberOfDays + b.Day - 1 + addition) * multiplier;

                numberOfDays += DateOnly.GetNumberOfDaysInMonth(month, a.Year);
            }
        }
        for (let year = a.Year + 1; year < b.Year; year++)
            numberOfDays += DateOnly.GetNumberOfDaysInYear(year);

        for (let month = 1; month < b.Month; month++)
            numberOfDays += DateOnly.GetNumberOfDaysInMonth(month, b.Year);
        numberOfDays += b.Day + addition - 1;
        return numberOfDays * multiplier;
    }
    private Compare(a: DateOnly) {
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
        if (year % 4 != 0)
            return false;
        if (year % 100 != 0)
            return true;

        return year % 400 == 0;
    }

}