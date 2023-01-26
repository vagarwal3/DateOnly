export class DateOnly {
    readonly Day: number;
    readonly Month: number;
    readonly Year: number;
    constructor(month: number, day: number, year: number) {
        if (month < 1 || month > 12) {
            throw Error();
        }
        if (year < 999 || year > 5000) {
            throw Error();
        }
        if (day < 1 || day > DateOnly.GetNumberOfDaysInMonth(month, year)) {
            throw Error();
        }

        this.Month = month;
        this.Day = day;
        this.Year = year;
    }
    get DayOfWeek(): number {
        //"1/1/1000"=>Monday
        let numberOfDaysSinceYear1000 = DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1000), this, false);
        return (numberOfDaysSinceYear1000 + 1) % 7 + 1;
    }
    get DayOfYear(): number {
        let daysInFullMonth: number = 0;
        for (let month = 1; month < this.Month; month++) {
            daysInFullMonth += DateOnly.GetNumberOfDaysInMonth(month, this.Year);
        }
        return daysInFullMonth + this.Day;
    }

    public AddDays(value: number): DateOnly {
        if (value == 0) {
            return new DateOnly(this.Month, this.Day, this.Year);
        }

        if (value > 0) {
            let remainingDays = value;
            let day: number;
            let month = this.Month;
            let year = this.Year;
            if (this.Day > 28) {
                remainingDays += this.Day - 28;
                day = 28;
            }
            else {
                day = this.Day;
            }

            while (remainingDays >= 365) {
                let numberOfDaysInOneYear: number;
                if (month > 2)
                    numberOfDaysInOneYear = DateOnly.GetNumberOfDaysInYear(month, year + 1);
                else
                    numberOfDaysInOneYear = DateOnly.GetNumberOfDaysInYear(month, year);
                if (remainingDays >= numberOfDaysInOneYear) {
                    remainingDays -= numberOfDaysInOneYear;
                    year++;
                }
                else
                    break;
            }
            while (remainingDays >= 28) {
                let numberOfDaysInOneMonth = DateOnly.GetNumberOfDaysInMonth(month, year);
                if (remainingDays >= numberOfDaysInOneMonth) {
                    remainingDays -= numberOfDaysInOneMonth;
                    if (month == 12) {
                        month = 1; year++
                    }
                    else {
                        month++;
                    }
                }
                else
                    break;
            }
            let numberOfDaysInLastMonth = DateOnly.GetNumberOfDaysInMonth(month, year);
            if (day + remainingDays <= numberOfDaysInLastMonth) {
                day += remainingDays;
            }
            else {
                day += remainingDays - numberOfDaysInLastMonth;
                if (month == 12) {
                    month = 1;
                    year++;
                }
                else {
                    month++;
                }
            }
            return new DateOnly(month, day, year);
        }
        else {
            let remainingDays = value;
            let day: number;
            let month = this.Month;
            let year = this.Year;
            if (this.Day > value)
                return new Date(this.Month, this.Day - value, this.Year);
            if (this.Day > 28) {
                remainingDays -= this.Day - 28;
                day = 28;
            }
            else {
                day = this.Day;
            }

            while (remainingDays >= 365) {
                let numberOfDaysInOneYear: number;
                if (month > 2)
                    numberOfDaysInOneYear = DateOnly.GetNumberOfDaysInYear(month, year);
                else
                    numberOfDaysInOneYear = DateOnly.GetNumberOfDaysInYear(month, year - 1);
                if (remainingDays >= numberOfDaysInOneYear) {
                    remainingDays -= numberOfDaysInOneYear;
                    year--;
                }
                else
                    break;
            }
            while (remainingDays >= 28) {
                let numberOfDaysInOneMonth: number;
                if (month == 1)
                    numberOfDaysInOneMonth = DateOnly.GetNumberOfDaysInMonth(12, year - 1);
                else
                    numberOfDaysInOneMonth = DateOnly.GetNumberOfDaysInMonth(month - 1, year);
                if (remainingDays >= numberOfDaysInOneMonth) {
                    remainingDays -= numberOfDaysInOneMonth;
                    if (month == 1) {
                        month = 12; year--
                    }
                    else {
                        month--;
                    }
                }
                else
                    break;
            }
            let numberOfDaysInLastMonth: number;
            if (month == 1)
                numberOfDaysInOneMonth = DateOnly.GetNumberOfDaysInMonth(12, year - 1);
            else
                numberOfDaysInOneMonth = DateOnly.GetNumberOfDaysInMonth(month - 1, year);
            if (day > remainingDays) {
                day -= remainingDays;
            }
            else {
                day += numberOfDaysInLastMonth - remainingDays;
                if (month == 1) {
                    month = 12;
                    year--;
                }
                else {
                    month--;
                }
            }
            return new DateOnly(month, day, year);
        }
    }
    public AddMonths(value: number): DateOnly {

        if (value == 0) {
            return new DateOnly(month, this.Day, year);
        }
        let month: number;
        let year: number;
        if (value > 0) {
            if (this.Month + value > 12) {
                year = this.Year + parseInt((this.Month + value) / 12);
                month = (this.Month + value) % 12;
            }
            else {
                year = this.Year;
                month = this.Month + value;
            }
        }
        else {
            if (this.Month <= value) {
                year = this.Year - parseInt((value - this.Month) / 12);
                month = (value - this.Month) % 12;
            }
            else {
                year = this.Year;
                month = value - this.Month;
            }
        }
        if (this.Day > DateOnly.GetNumberOfDaysInMonth(month, year)) {
            new DateOnly(month + 1, 1, year)
        }
        return new DateOnly(month, this.Day, year)
    }
    public AddYears(value: number): DateOnly {
        if (this.Day == 29 && this.Month == 2 && !DateOnly.IsLeapYear(this.Year + value)) {
            return new DateOnly(3, 1, this.Year + value);
        }
        else {
            return new DateOnly(this.Month, this.Day, this.Year + value);
        }
    }
    public Equals(a: DateOnly): boolean {
        return this.Compare(a) == 0;
    }
    public toString() {
        return this.Month.toString() + "/" + this.Day.toString() + "/" + this.Year.toString();
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
        let addition = areBothDatesInclusive ? 1 : 0;
        if (date1.GreaterThan(date2)) {
            a = date2;
            b = date1;
            multiplier = -1;
        }
        else {
            a = date1;
            b = date2;
        }
        while (a.Day > 28 && a.LessThan(b)) {
            numberOfDays++;
            a = a.AddDays(1);
        }
        if (a.Equals(b))
            return numberOfDays;
        while (a.AddYears(1).LessThanOrEqual(b)) {
            if (a.Month > 2)
                numberOfDays += DateOnly.GetNumberOfDaysInYear(a.Year + 1);
            else
                numberOfDays += DateOnly.GetNumberOfDaysInYear(a.Year);
            a = a.AddYears(1);
        }
        while (a.AddMonths(1).LessThanOrEqual(b)) {
            numberOfDays += DateOnly.GetNumberOfDaysInYear(a.Month, a.Year);
            a = a.AddMonths(1);
        }
        if(a.Month==b.Month)
            numberOfDays += b.Day - a.Day;
        else 
            numberOfDays += b.Day + (DateOnly.GetNumberOfDaysInMonth(a.month,a.Year) - a.Day);
        return numberOfDays * multiplier;
    }
    private Compare(value: DateOnly) {
        if (this.Year != value.Year) {
            return this.Year - value.Year;
        }
        if (this.Month != value.Month) {
            return this.Month - value.Month;
        }
        return this.Day - value.Day;
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
        if (year % 4 != 0) {
            return false;
        }
        if (year % 100 != 0) {
            return true;
        }

        return year % 400 == 0;
    }
}