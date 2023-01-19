"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateOnly = void 0;
class DateOnly {
    constructor(month, day, year) {
        this.Month = month;
        this.Day = day;
        this.Year = year;
    }
    get DayOfWeek() {
        let dayOfWeek = 2; //1900
        dayOfWeek += DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1900), this, false);
        return (dayOfWeek - 1) % 7 + 1;
    }
    get DayOfYear() {
        let daysInFullMonth = 0;
        for (let month = 1; month < this.Month; month++) {
            daysInFullMonth += DateOnly.GetNumberOfDaysInMonth(month, this.Year);
        }
        return daysInFullMonth + this.Day;
    }
    AddDays(days) {
        if (days == 0)
            return new DateOnly(this.Month, this.Day, this.Year);
        if (days > 0) {
            let numberOfDaysInCurrentMonth = DateOnly.GetNumberOfDaysInMonth(this.Month, this.Year);
            if (this.Day + days <= numberOfDaysInCurrentMonth) {
                return new DateOnly(this.Month, this.Day + days, this.Year);
            }
            let day, month, year;
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
                day += remainingDays - 1;
            return new DateOnly(month, day, year);
        }
        else {
            let day, month, year;
            return new DateOnly(month, day, year);
        }
    }
    AddMonths(months) {
        let remainingMonths = months;
        let day = 1;
        day = this.Day;
        console.log(day);
        let month;
        let year = this.Year;
        if (remainingMonths >= 12) {
            year += remainingMonths / 12;
            remainingMonths = remainingMonths % 12;
        }
        if (this.Month + remainingMonths > 12) {
            month = 12 - (this.Month + remainingMonths);
            year++;
        }
        else
            month = this.Month + remainingMonths;
        if (month == 2 && day == 29 && DateOnly.IsLeapYear(year)) {
            month = 3;
            day = 1;
        }
        return new DateOnly(month, day, year);
    }
    AddYears(years) {
        if (this.Day == 29 && this.Month == 2 && !DateOnly.IsLeapYear(this.Year + years)) {
            return new DateOnly(3, 1, this.Year + years);
        }
        else {
            return new DateOnly(this.Month, this.Day, this.Year + years);
        }
    }
    Equals(a) {
        return this.Compare(a) == 0;
    }
    ToString() {
        return this.Month.toString() + "/" + this.Day.toString();
    }
    GreaterThanOrEqual(a) {
        return this.Compare(a) >= 0;
    }
    GreaterThan(a) {
        return this.Compare(a) > 0;
    }
    LessThan(a) {
        return this.Compare(a) < 0;
    }
    LessThanOrEqual(a) {
        return this.Compare(a) <= 0;
    }
    static NumerOfDaysBetweenDates(date1, date2, areBothDatesInclusive) {
        let a;
        let b;
        let multiplier = 1;
        let addition = areBothDatesInclusive ? 1 : 0;
        ;
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
        let numberOfDays;
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
    Compare(a) {
        if (this.Year != a.Year)
            return this.Year - a.Year;
        if (this.Month != a.Month)
            return this.Month - a.Month;
        return this.Day - a.Day;
    }
    static GetNumberOfDaysInYear(year) {
        return DateOnly.IsLeapYear(year) ? 366 : 365;
    }
    static GetNumberOfDaysInMonth(month, year) {
        if (month == 2) {
            return DateOnly.IsLeapYear(year) ? 29 : 28;
        }
        if (month == 4 || month == 6 || month == 9 || month == 11) {
            return 30;
        }
        return 31;
    }
    static IsLeapYear(year) {
        if (year % 4 != 0)
            return false;
        if (year % 100 != 0)
            return true;
        return year % 400 == 0;
    }
}
exports.DateOnly = DateOnly;
//# sourceMappingURL=DateOnly.js.map