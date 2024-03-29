import { assert, expect } from "chai";
import { DateOnly } from "../DateOnly";

describe('DateOnly', () => {
    it('Parse is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
        assert.equal(DateOnly.Parse("1/1/2020"),new DateOnly(1, 1, 1000));
    })
});

describe('DateOnly', () => {
    it('ToString is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 1, 1000).toString(), "");
        assert.equal(new DateOnly(1, 11, 1100).toString(), 2);
        assert.equal(new DateOnly(1, 1, 1200).toString(), 2);
        assert.equal(new DateOnly(1, 10, 1300).toString(), 2);
        assert.equal(new DateOnly(6, 1, 1400).toString(), 2);
        assert.equal(new DateOnly(1, 2, 1500).toString(), 3);
        assert.equal(new DateOnly(1, 7, 1600).toString(), 1);
        assert.equal(new DateOnly(8, 8, 1700).toString(), 2);
        assert.equal(new DateOnly(1, 8, 1800).toString(), 2);
        
        //post 1900 dates
        assert.equal(new DateOnly(11, 8, 1900).toString(), 2);
        assert.equal(new DateOnly(4, 6, 1928).toString(), 6);
        assert.equal(new DateOnly(12, 31, 1956).toString(), 2);
        assert.equal(new DateOnly(2, 29, 1960).toString(), 2);
        assert.equal(new DateOnly(2, 28, 1961).toString(), 3);
        assert.equal(new DateOnly(10, 10, 1970).toString(), 7);
        assert.equal(new DateOnly(1, 1, 1971).toString(), 6);
        assert.equal(new DateOnly(2, 2, 1980).toString(), 7);
        assert.equal(new DateOnly(4, 2, 1989).toString(), 1);
        assert.equal(new DateOnly(4, 30, 1991).toString(), 3);
        assert.equal(new DateOnly(1, 31, 1995).toString(), 3);
        assert.equal(new DateOnly(3, 31, 1996).toString(), 1);
        assert.equal(new DateOnly(4, 1, 1999).toString(), 5);
        assert.equal(new DateOnly(8, 9, 2001).toString(), 5);
        assert.equal(new DateOnly(2, 1, 2002).toString(), 6);
        assert.equal(new DateOnly(12, 1, 2005).toString(), 5);
        assert.equal(new DateOnly(6, 30, 2011).toString(), 5);
        assert.equal(new DateOnly(5, 1, 2016).toString(), 1);
        assert.equal(new DateOnly(7, 11, 2022).toString(), 2);
        assert.equal(new DateOnly(1, 17, 2023).toString(), 3);
        assert.equal(new DateOnly(12, 12, 2030).toString(), 5);
        assert.equal(new DateOnly(1, 15, 2041).toString(), 3);
        assert.equal(new DateOnly(7, 8, 2055).toString(), 5);
        assert.equal(new DateOnly(3, 3, 2070).toString(), 2);
        assert.equal(new DateOnly(9, 10, 2082).toString(), 5);
        assert.equal(new DateOnly(1, 8, 2092).toString(), 3);
        assert.equal(new DateOnly(9, 8, 2095).toString(), 5);
        assert.equal(new DateOnly(12, 31, 2099).toString(), 5);

        //post 2099 dates
        assert.equal(new DateOnly(12, 31, 3100).toString(), 5);
        assert.equal(new DateOnly(12, 31, 3200).toString(), 5);
        assert.equal(new DateOnly(12, 31, 3500).toString(), 5);
        assert.equal(new DateOnly(12, 31, 4000).toString(), 5);
        assert.equal(new DateOnly(12, 31, 4500).toString(), 5);
        assert.equal(new DateOnly(12, 31, 4999).toString(), 5);
    })
});


describe('DateOnly', () => {
    it('DayOfWeek is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 1, 1000).DayOfWeek, 2);
        assert.equal(new DateOnly(1, 11, 1100).DayOfWeek, 2);
        assert.equal(new DateOnly(1, 1, 1200).DayOfWeek, 2);
        assert.equal(new DateOnly(1, 10, 1300).DayOfWeek, 2);
        assert.equal(new DateOnly(6, 1, 1400).DayOfWeek, 2);
        assert.equal(new DateOnly(1, 2, 1500).DayOfWeek, 3);
        assert.equal(new DateOnly(1, 7, 1600).DayOfWeek, 1);
        assert.equal(new DateOnly(8, 8, 1700).DayOfWeek, 2);
        assert.equal(new DateOnly(1, 8, 1800).DayOfWeek, 2);
        
        //post 1900 dates
        assert.equal(new DateOnly(11, 8, 1900).DayOfWeek, 2);
        assert.equal(new DateOnly(4, 6, 1928).DayOfWeek, 6);
        assert.equal(new DateOnly(12, 31, 1956).DayOfWeek, 2);
        assert.equal(new DateOnly(2, 29, 1960).DayOfWeek, 2);
        assert.equal(new DateOnly(2, 28, 1961).DayOfWeek, 3);
        assert.equal(new DateOnly(10, 10, 1970).DayOfWeek, 7);
        assert.equal(new DateOnly(1, 1, 1971).DayOfWeek, 6);
        assert.equal(new DateOnly(2, 2, 1980).DayOfWeek, 7);
        assert.equal(new DateOnly(4, 2, 1989).DayOfWeek, 1);
        assert.equal(new DateOnly(4, 30, 1991).DayOfWeek, 3);
        assert.equal(new DateOnly(1, 31, 1995).DayOfWeek, 3);
        assert.equal(new DateOnly(3, 31, 1996).DayOfWeek, 1);
        assert.equal(new DateOnly(4, 1, 1999).DayOfWeek, 5);
        assert.equal(new DateOnly(8, 9, 2001).DayOfWeek, 5);
        assert.equal(new DateOnly(2, 1, 2002).DayOfWeek, 6);
        assert.equal(new DateOnly(12, 1, 2005).DayOfWeek, 5);
        assert.equal(new DateOnly(6, 30, 2011).DayOfWeek, 5);
        assert.equal(new DateOnly(5, 1, 2016).DayOfWeek, 1);
        assert.equal(new DateOnly(7, 11, 2022).DayOfWeek, 2);
        assert.equal(new DateOnly(1, 17, 2023).DayOfWeek, 3);
        assert.equal(new DateOnly(12, 12, 2030).DayOfWeek, 5);
        assert.equal(new DateOnly(1, 15, 2041).DayOfWeek, 3);
        assert.equal(new DateOnly(7, 8, 2055).DayOfWeek, 5);
        assert.equal(new DateOnly(3, 3, 2070).DayOfWeek, 2);
        assert.equal(new DateOnly(9, 10, 2082).DayOfWeek, 5);
        assert.equal(new DateOnly(1, 8, 2092).DayOfWeek, 3);
        assert.equal(new DateOnly(9, 8, 2095).DayOfWeek, 5);
        assert.equal(new DateOnly(12, 31, 2099).DayOfWeek, 5);

        //post 2099 dates
        assert.equal(new DateOnly(12, 31, 3100).DayOfWeek, 5);
        assert.equal(new DateOnly(12, 31, 3200).DayOfWeek, 5);
        assert.equal(new DateOnly(12, 31, 3500).DayOfWeek, 5);
        assert.equal(new DateOnly(12, 31, 4000).DayOfWeek, 5);
        assert.equal(new DateOnly(12, 31, 4500).DayOfWeek, 5);
        assert.equal(new DateOnly(12, 31, 4999).DayOfWeek, 5);
    })
});
describe('DateOnly', () => {
    it('DayOfYear is returning incorrect value', () => {
        
        //pre-1900 dates
        assert.equal(new DateOnly(1, 5, 1000).DayOfYear, 1);
        assert.equal(new DateOnly(4, 6, 1200).DayOfYear, 97);
        assert.equal(new DateOnly(12, 31, 1409).DayOfYear, 366);
        assert.equal(new DateOnly(2, 29, 1609).DayOfYear, 60);
        assert.equal(new DateOnly(2, 28, 1878).DayOfYear, 59);

        //post 1900 dates
        assert.equal(new DateOnly(1, 1, 1900).DayOfYear, 1);
        assert.equal(new DateOnly(4, 6, 1928).DayOfYear, 97);
        assert.equal(new DateOnly(12, 31, 1956).DayOfYear, 366);
        assert.equal(new DateOnly(2, 29, 1960).DayOfYear, 60);
        assert.equal(new DateOnly(2, 28, 1961).DayOfYear, 59);
        assert.equal(new DateOnly(10, 10, 1970).DayOfYear, 283);
        assert.equal(new DateOnly(1, 1, 1971).DayOfYear, 1);
        assert.equal(new DateOnly(2, 2, 1980).DayOfYear, 33);
        assert.equal(new DateOnly(4, 2, 1989).DayOfYear, 92);
        assert.equal(new DateOnly(4, 30, 1991).DayOfYear, 120);
        assert.equal(new DateOnly(1, 31, 1995).DayOfYear, 31);
        assert.equal(new DateOnly(3, 31, 1996).DayOfYear, 91);
        assert.equal(new DateOnly(4, 1, 1999).DayOfYear, 91);
        assert.equal(new DateOnly(8, 9, 2001).DayOfYear, 221);
        assert.equal(new DateOnly(2, 1, 2002).DayOfYear, 32);
        assert.equal(new DateOnly(12, 1, 2005).DayOfYear, 335);
        assert.equal(new DateOnly(6, 30, 2011).DayOfYear, 181);
        assert.equal(new DateOnly(5, 1, 2016).DayOfYear, 122);
        assert.equal(new DateOnly(7, 11, 2022).DayOfYear, 192);
        assert.equal(new DateOnly(1, 17, 2023).DayOfYear, 17);
        assert.equal(new DateOnly(12, 12, 2030).DayOfYear, 346);
        assert.equal(new DateOnly(1, 15, 2041).DayOfYear, 15);
        assert.equal(new DateOnly(7, 8, 2055).DayOfYear, 189);
        assert.equal(new DateOnly(3, 3, 2070).DayOfYear, 62);
        assert.equal(new DateOnly(9, 10, 2082).DayOfYear, 253);
        assert.equal(new DateOnly(1, 8, 2092).DayOfYear, 8);
        assert.equal(new DateOnly(9, 8, 2095).DayOfYear, 251);
        assert.equal(new DateOnly(12, 31, 2099).DayOfYear, 365);

        //post 2099 dates
        assert.equal(new DateOnly(12, 31, 2100).DayOfYear, 365);
        assert.equal(new DateOnly(12, 1, 2504).DayOfYear, 365);
        assert.equal(new DateOnly(1, 31, 3001).DayOfYear, 365);
        assert.equal(new DateOnly(1, 3, 3503).DayOfYear, 365);
        assert.equal(new DateOnly(3, 4, 4000).DayOfYear, 365);
        assert.equal(new DateOnly(3, 4, 4500).DayOfYear, 365);
        assert.equal(new DateOnly(12, 31, 4999).DayOfYear, 365);
    })
});
describe('DateOnly', () => {
    it('AddDays is returning incorrect value', () => {

        //pre-1900 dates - add days
        expect(new DateOnly(1, 1, 1000).AddDays(30)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 1, 1203).AddDays(131)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(12, 1, 1408).AddDays(230)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 1, 1654).AddDays(431)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(12, 1, 1801).AddDays(630)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 1, 1900).AddDays(831)).to.deep.equal(new DateOnly(1, 1, 2020));

        //pre-1900 dates - subtract days
        expect(new DateOnly(12, 1, 1203).AddDays(-131)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(12, 1, 1408).AddDays(-230)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 1, 1654).AddDays(-431)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(12, 1, 1801).AddDays(-630)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 1, 1900).AddDays(-831)).to.deep.equal(new DateOnly(1, 1, 2020));

        //post 1900 dates
        expect(new DateOnly(1, 1, 2020).AddDays(0)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(1, 1, 2020).AddDays(1)).to.deep.equal(new DateOnly(1, 2, 2020));
        expect(new DateOnly(1, 1, 2020).AddDays(-1)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 31, 2020).AddDays(0)).to.deep.equal(new DateOnly(12, 31, 2020));
        expect(new DateOnly(12, 31, 2020).AddDays(1)).to.deep.equal(new DateOnly(1, 1, 2021));
        expect(new DateOnly(12, 31, 2020).AddDays(-1)).to.deep.equal(new DateOnly(12, 30, 2020));
        expect(new DateOnly(2, 28, 2019).AddDays(0)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(2, 28, 2019).AddDays(1)).to.deep.equal(new DateOnly(3, 1, 2019));
        expect(new DateOnly(2, 28, 2019).AddDays(-1)).to.deep.equal(new DateOnly(2, 27, 2019));
        expect(new DateOnly(2, 28, 2020).AddDays(0)).to.deep.equal(new DateOnly(2, 28, 2020));
        expect(new DateOnly(2, 28, 2020).AddDays(1)).to.deep.equal(new DateOnly(2, 29, 2020));
        expect(new DateOnly(2, 28, 2020).AddDays(-1)).to.deep.equal(new DateOnly(2, 27, 2020));
        expect(new DateOnly(2, 28, 2020).AddDays(2)).to.deep.equal(new DateOnly(3, 1, 2020));
        expect(new DateOnly(2, 29, 2020).AddDays(1)).to.deep.equal(new DateOnly(3, 1, 2020));
        expect(new DateOnly(12, 1, 2019).AddDays(30)).to.deep.equal(new DateOnly(12, 31, 2019));
        expect(new DateOnly(12, 1, 2019).AddDays(31)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(1, 1, 2019).AddDays(365)).to.deep.equal(new DateOnly(1, 1, 2020));
        expect(new DateOnly(1, 1, 2020).AddDays(366)).to.deep.equal(new DateOnly(1, 1, 2021));
        expect(new DateOnly(1, 1, 2020).AddDays(-365)).to.deep.equal(new DateOnly(1, 1, 2019));
        expect(new DateOnly(1, 1, 2021).AddDays(-366)).to.deep.equal(new DateOnly(1, 1, 2020));

        expect(new DateOnly(1, 1, 1900).AddDays(555)).to.deep.equal(new DateOnly(7, 9, 1901));
        expect(new DateOnly(4, 6, 1928).AddDays(34)).to.deep.equal(new DateOnly(5, 10, 1928));
        expect(new DateOnly(12, 31, 1956).AddDays(0)).to.deep.equal(new DateOnly(12, 31, 1956));
        expect(new DateOnly(2, 29, 1960).AddDays(1)).to.deep.equal(new DateOnly(3, 1, 1960));
        expect(new DateOnly(2, 28, 1961).AddDays(31)).to.deep.equal(new DateOnly(3, 31, 1961));
        expect(new DateOnly(10, 10, 1970).AddDays(3544)).to.deep.equal(new DateOnly(6, 23, 1980));
        expect(new DateOnly(1, 1, 1971).AddDays(34546)).to.deep.equal(new DateOnly(8, 1, 2065));
        expect(new DateOnly(2, 2, 1980).AddDays(-1)).to.deep.equal(new DateOnly(2, 1, 1980));
        expect(new DateOnly(4, 2, 1989).AddDays(578)).to.deep.equal(new DateOnly(11, 1, 1990));
        expect(new DateOnly(4, 30, 1991).AddDays(677)).to.deep.equal(new DateOnly(3, 7, 1993));
        expect(new DateOnly(1, 31, 1995).AddDays(45)).to.deep.equal(new DateOnly(3, 17, 1995));
        expect(new DateOnly(3, 31, 1996).AddDays(444)).to.deep.equal(new DateOnly(6, 18, 1997));
        expect(new DateOnly(4, 1, 1999).AddDays(88)).to.deep.equal(new DateOnly(6, 28, 1999));
        expect(new DateOnly(8, 9, 2001).AddDays(-100)).to.deep.equal(new DateOnly(5, 1, 2001));
        expect(new DateOnly(2, 1, 2002).AddDays(202)).to.deep.equal(new DateOnly(8, 22, 2002));
        expect(new DateOnly(12, 1, 2005).AddDays(63)).to.deep.equal(new DateOnly(2, 2, 2006));
        expect(new DateOnly(6, 30, 2011).AddDays(365)).to.deep.equal(new DateOnly(6, 29, 2012));
        expect(new DateOnly(5, 1, 2016).AddDays(453)).to.deep.equal(new DateOnly(7, 28, 2017));
        expect(new DateOnly(7, 11, 2022).AddDays(3423)).to.deep.equal(new DateOnly(11, 24, 2031));
        expect(new DateOnly(1, 17, 2023).AddDays(233)).to.deep.equal(new DateOnly(9, 7, 2023));
        expect(new DateOnly(12, 12, 2030).AddDays(-2222)).to.deep.equal(new DateOnly(11, 11, 2024));
        expect(new DateOnly(1, 15, 2041).AddDays(28)).to.deep.equal(new DateOnly(2, 12, 2041));
        expect(new DateOnly(7, 8, 2055).AddDays(34)).to.deep.equal(new DateOnly(8, 11, 2055));
        expect(new DateOnly(3, 3, 2070).AddDays(31)).to.deep.equal(new DateOnly(4, 3, 2070));
        expect(new DateOnly(9, 10, 2082).AddDays(41)).to.deep.equal(new DateOnly(10, 21, 2082));
        expect(new DateOnly(1, 8, 2092).AddDays(-111)).to.deep.equal(new DateOnly(9, 19, 2091));
        expect(new DateOnly(9, 8, 2095).AddDays(356)).to.deep.equal(new DateOnly(8, 29, 2096));
        expect(new DateOnly(12, 31, 2099).AddDays(-33)).to.deep.equal(new DateOnly(11, 28, 2099));

        //post 2099 dates - add days
        expect(new DateOnly(12, 3, 2200).AddDays(133)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(1, 5, 2500).AddDays(233)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(3, 31, 3000).AddDays(331)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(12, 17, 3500).AddDays(533)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(5, 30, 4000).AddDays(636)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(8, 28, 4500).AddDays(733)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(10, 31, 4999).AddDays(939)).to.deep.equal(new DateOnly(11, 28, 2099));

        //post 2099 dates - subtract days
        expect(new DateOnly(12, 3, 2200).AddDays(-133)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(1, 5, 2500).AddDays(-233)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(3, 31, 3000).AddDays(-331)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(12, 17, 3500).AddDays(-533)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(5, 30, 4000).AddDays(-636)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(8, 28, 4500).AddDays(-733)).to.deep.equal(new DateOnly(11, 28, 2099));
        expect(new DateOnly(10, 31, 4999).AddDays(-939)).to.deep.equal(new DateOnly(11, 28, 2099));
    })
});
describe('DateOnly', () => {
    it('AddMonths is returning incorrect value', () => {

        //pre-1900 dates - add months
        expect((new DateOnly(1, 26, 1000)).AddMonths(11)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(10, 21, 1200)).AddMonths(12)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(11, 24, 1400)).AddMonths(31)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(3, 22, 1600)).AddMonths(551)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(6, 23, 1800)).AddMonths(601)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(9, 28, 1900)).AddMonths(61)).to.deep.equal(new DateOnly(2, 28, 2019));

        ////pre-1900 dates - subtract months
        expect((new DateOnly(1, 26, 1000)).AddMonths(-11)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(10, 21, 1200)).AddMonths(-12)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(11, 24, 1400)).AddMonths(-31)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(3, 22, 1600)).AddMonths(-551)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(6, 23, 1800)).AddMonths(-601)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect((new DateOnly(9, 28, 1900)).AddMonths(-61)).to.deep.equal(new DateOnly(2, 28, 2019));


        //post 1900 dates - boundary cases
        expect((new DateOnly(1, 28, 2019)).AddMonths(1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(1, 29, 2019).AddMonths(1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(1, 30, 2019).AddMonths(1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(1, 31, 2019).AddMonths(1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(1, 28, 2020).AddMonths(1)).to.deep.equal(new DateOnly(2, 28, 2020));
        expect(new DateOnly(1, 29, 2020).AddMonths(1)).to.deep.equal(new DateOnly(2, 29, 2020));
        expect(new DateOnly(1, 30, 2020).AddMonths(1)).to.deep.equal(new DateOnly(2, 29, 2020));
        expect(new DateOnly(1, 31, 2020).AddMonths(1)).to.deep.equal(new DateOnly(2, 29, 2020));
        expect(new DateOnly(3, 31, 2019).AddMonths(-1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(3, 30, 2019).AddMonths(-1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(3, 29, 2019).AddMonths(-1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(3, 28, 2019).AddMonths(-1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(5, 31, 2019).AddMonths(-3)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(5, 30, 2019).AddMonths(-3)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(5, 29, 2019).AddMonths(-3)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(5, 28, 2019).AddMonths(-3)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(3, 31, 2020).AddMonths(1)).to.deep.equal(new DateOnly(4, 30, 2020));


        //post 1900 dates - Random cases
        expect(new DateOnly(1, 1, 1900).AddMonths(555)).to.deep.equal(new DateOnly(4, 1, 1946));
        expect(new DateOnly(4, 6, 1928).AddMonths(34)).to.deep.equal(new DateOnly(2, 6, 1931));
        expect(new DateOnly(12, 31, 1956).AddMonths(0)).to.deep.equal(new DateOnly(12, 31, 1956));
        expect(new DateOnly(2, 29, 1960).AddMonths(1)).to.deep.equal(new DateOnly(3, 29, 1960));
        expect(new DateOnly(2, 28, 1961).AddMonths(31)).to.deep.equal(new DateOnly(9, 28, 1963));
        expect(new DateOnly(10, 10, 1970).AddMonths(560)).to.deep.equal(new DateOnly(6, 10, 2017));
        expect(new DateOnly(1, 1, 1971).AddMonths(34)).to.deep.equal(new DateOnly(11, 1, 1973));
        expect(new DateOnly(2, 2, 1980).AddMonths(-1)).to.deep.equal(new DateOnly(1, 2, 1980));
        expect(new DateOnly(4, 2, 1989).AddMonths(66)).to.deep.equal(new DateOnly(10, 2, 1994));
        expect(new DateOnly(4, 30, 1991).AddMonths(33)).to.deep.equal(new DateOnly(1, 30, 1994));
        expect(new DateOnly(1, 31, 1995).AddMonths(45)).to.deep.equal(new DateOnly(10, 31, 1998));
        expect(new DateOnly(3, 31, 1996).AddMonths(444)).to.deep.equal(new DateOnly(3, 31, 2033));
        expect(new DateOnly(4, 1, 1999).AddMonths(88)).to.deep.equal(new DateOnly(8, 1, 2006));
        expect(new DateOnly(8, 9, 2001).AddMonths(-100)).to.deep.equal(new DateOnly(4, 9, 1993));
        expect(new DateOnly(2, 1, 2002).AddMonths(202)).to.deep.equal(new DateOnly(12, 1, 2018));
        expect(new DateOnly(12, 1, 2005).AddMonths(63)).to.deep.equal(new DateOnly(3, 1, 2011));
        expect(new DateOnly(6, 30, 2011).AddMonths(365)).to.deep.equal(new DateOnly(11, 30, 2041));
        expect(new DateOnly(5, 1, 2016).AddMonths(453)).to.deep.equal(new DateOnly(2, 1, 2054));
        expect(new DateOnly(7, 11, 2022).AddMonths(3423)).to.deep.equal(new DateOnly(10, 11, 2307));
        expect(new DateOnly(1, 17, 2023).AddMonths(233)).to.deep.equal(new DateOnly(6, 17, 2042));
        expect(new DateOnly(12, 12, 2030).AddMonths(-332)).to.deep.equal(new DateOnly(4, 12, 2003));
        expect(new DateOnly(1, 15, 2041).AddMonths(28)).to.deep.equal(new DateOnly(5, 15, 2043));
        expect(new DateOnly(7, 8, 2055).AddMonths(34)).to.deep.equal(new DateOnly(5, 8, 2058));
        expect(new DateOnly(3, 3, 2070).AddMonths(31)).to.deep.equal(new DateOnly(10, 3, 2072));
        expect(new DateOnly(9, 10, 2082).AddMonths(41)).to.deep.equal(new DateOnly(2, 10, 2086));
        expect(new DateOnly(1, 8, 2092).AddMonths(-111)).to.deep.equal(new DateOnly(10, 8, 2082));
        expect(new DateOnly(9, 8, 2095).AddMonths(45)).to.deep.equal(new DateOnly(6, 8, 2099));
        expect(new DateOnly(12, 31, 2099).AddMonths(-33)).to.deep.equal(new DateOnly(3, 31, 2097));

        //post 2099 dates - add months
        expect(new DateOnly(12, 1, 2100).AddMonths(23)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(1, 1, 2500).AddMonths(113)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(12, 3, 3000).AddMonths(73)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(2, 6, 3500).AddMonths(35)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(10, 13, 4000).AddMonths(70)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(8, 18, 4500).AddMonths(100)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(5, 10, 4999).AddMonths(118)).to.deep.equal(new DateOnly(3, 31, 2097));

        //post 2099 dates - subtract months
        expect(new DateOnly(12, 1, 2100).AddMonths(-23)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(1, 1, 2500).AddMonths(-113)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(12, 3, 3000).AddMonths(-73)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(2, 6, 3500).AddMonths(-35)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(10, 13, 4000).AddMonths(-70)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(8, 18, 4500).AddMonths(-100)).to.deep.equal(new DateOnly(3, 31, 2097));
        expect(new DateOnly(5, 10, 4999).AddMonths(-118)).to.deep.equal(new DateOnly(3, 31, 2097));

    })
});
describe('DateOnly', () => {
    it('AddYears is returning incorrect value', () => {

        //pre-1900 dates - add years
        expect(new DateOnly(1, 24, 1000).AddYears(101)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(11, 10, 1270).AddYears(189)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(9, 4, 1460).AddYears(202)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(4, 5, 1640).AddYears(98)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(7, 21, 1930).AddYears(70)).to.deep.equal(new DateOnly(1, 28, 2020));

        //pre-1900 dates - subtract years
        expect(new DateOnly(1, 24, 1000).AddYears(-101)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(11, 10, 1270).AddYears(-189)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(9, 4, 1460).AddYears(-202)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(4, 5, 1640).AddYears(-98)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(7, 21, 1930).AddYears(-70)).to.deep.equal(new DateOnly(1, 28, 2020));


        //post 1900 dates - boundary cases
        expect(new DateOnly(1, 28, 2019).AddYears(1)).to.deep.equal(new DateOnly(1, 28, 2020));
        expect(new DateOnly(1, 29, 2019).AddYears(1)).to.deep.equal(new DateOnly(1, 29, 2020));
        expect(new DateOnly(1, 30, 2019).AddYears(1)).to.deep.equal(new DateOnly(1, 30, 2020));
        expect(new DateOnly(1, 31, 2019).AddYears(1)).to.deep.equal(new DateOnly(1, 31, 2020));
        expect(new DateOnly(1, 28, 2020).AddYears(1)).to.deep.equal(new DateOnly(1, 28, 2021));
        expect(new DateOnly(1, 29, 2020).AddYears(1)).to.deep.equal(new DateOnly(1, 29, 2021));
        expect(new DateOnly(1, 30, 2020).AddYears(1)).to.deep.equal(new DateOnly(1, 30, 2021));
        expect(new DateOnly(1, 31, 2020).AddYears(1)).to.deep.equal(new DateOnly(1, 31, 2021));
        expect(new DateOnly(3, 31, 2019).AddYears(-1)).to.deep.equal(new DateOnly(3, 31, 2018));
        expect(new DateOnly(2, 28, 2018).AddYears(1)).to.deep.equal(new DateOnly(2, 28, 2019));
        expect(new DateOnly(2, 28, 2019).AddYears(-1)).to.deep.equal(new DateOnly(2, 28, 2018));
        expect(new DateOnly(3, 1, 2020).AddYears(-1)).to.deep.equal(new DateOnly(3, 1, 2019));
        expect(new DateOnly(2, 29, 2020).AddYears(1)).to.deep.equal(new DateOnly(3, 1, 2021));


        //post 1900 dates - Random cases
        expect(new DateOnly(1, 1, 1900).AddYears(149)).to.deep.equal(new DateOnly(1, 1, 2049));
        expect(new DateOnly(4, 6, 1928).AddYears(34)).to.deep.equal(new DateOnly(4, 6, 1962));
        expect(new DateOnly(12, 31, 1956).AddYears(0)).to.deep.equal(new DateOnly(12, 31, 1956));
        expect(new DateOnly(2, 29, 1960).AddYears(1)).to.deep.equal(new DateOnly(3, 1, 1961));
        expect(new DateOnly(2, 28, 1961).AddYears(31)).to.deep.equal(new DateOnly(2, 28, 1992));
        expect(new DateOnly(10, 10, 1970).AddYears(106)).to.deep.equal(new DateOnly(10, 10, 2076));
        expect(new DateOnly(1, 1, 1971).AddYears(34)).to.deep.equal(new DateOnly(1, 1, 2005));
        expect(new DateOnly(2, 2, 1980).AddYears(-1)).to.deep.equal(new DateOnly(2, 2, 1979));
        expect(new DateOnly(4, 2, 1989).AddYears(66)).to.deep.equal(new DateOnly(4, 2, 2055));
        expect(new DateOnly(4, 30, 1991).AddYears(33)).to.deep.equal(new DateOnly(4, 30, 2024));
        expect(new DateOnly(1, 31, 1995).AddYears(45)).to.deep.equal(new DateOnly(1, 31, 2040));
        expect(new DateOnly(3, 31, 1996).AddYears(44)).to.deep.equal(new DateOnly(3, 31, 2040));
        expect(new DateOnly(4, 1, 1999).AddYears(88)).to.deep.equal(new DateOnly(4, 1, 2087));
        expect(new DateOnly(8, 9, 2001).AddYears(-100)).to.deep.equal(new DateOnly(8, 9, 1901));
        expect(new DateOnly(2, 1, 2002).AddYears(202)).to.deep.equal(new DateOnly(2, 1, 2204));
        expect(new DateOnly(12, 1, 2005).AddYears(63)).to.deep.equal(new DateOnly(12, 1, 2068));
        expect(new DateOnly(6, 30, 2011).AddYears(65)).to.deep.equal(new DateOnly(6, 30, 2076));
        expect(new DateOnly(5, 1, 2016).AddYears(45)).to.deep.equal(new DateOnly(5, 1, 2061));
        expect(new DateOnly(7, 11, 2022).AddYears(23)).to.deep.equal(new DateOnly(7, 11, 2045));
        expect(new DateOnly(1, 17, 2023).AddYears(33)).to.deep.equal(new DateOnly(1, 17, 2056));
        expect(new DateOnly(12, 12, 2030).AddYears(-20)).to.deep.equal(new DateOnly(12, 12, 2010));
        expect(new DateOnly(1, 15, 2041).AddYears(28)).to.deep.equal(new DateOnly(1, 15, 2069));
        expect(new DateOnly(7, 8, 2055).AddYears(34)).to.deep.equal(new DateOnly(7, 8, 2089));
        expect(new DateOnly(3, 3, 2070).AddYears(26)).to.deep.equal(new DateOnly(3, 3, 2096));
        expect(new DateOnly(9, 10, 2082).AddYears(17)).to.deep.equal(new DateOnly(9, 10, 2099));
        expect(new DateOnly(1, 8, 2092).AddYears(-111)).to.deep.equal(new DateOnly(1, 8, 1981));
        expect(new DateOnly(9, 8, 2095).AddYears(4)).to.deep.equal(new DateOnly(9, 8, 2099));
        expect(new DateOnly(12, 31, 2099).AddYears(-33)).to.deep.equal(new DateOnly(12, 31, 2066));

        //post 2099 dates - add years
        expect(new DateOnly(12, 30, 2100).AddYears(43)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(1, 3, 2500).AddYears(343)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(12, 14, 3000).AddYears(783)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(4, 30, 3500).AddYears(13)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(12, 23, 4000).AddYears(3)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(3, 31, 4500).AddYears(788)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(12, 17, 4900).AddYears(333)).to.deep.equal(new DateOnly(12, 31, 2066));

        //post 2099 dates - subtract years
        expect(new DateOnly(12, 30, 2100).AddYears(-43)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(1, 3, 2500).AddYears(-343)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(12, 14, 3000).AddYears(-783)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(4, 30, 3500).AddYears(-13)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(12, 23, 4000).AddYears(-3)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(3, 31, 4500).AddYears(-788)).to.deep.equal(new DateOnly(12, 31, 2066));
        expect(new DateOnly(12, 17, 4900).AddYears(-333)).to.deep.equal(new DateOnly(12, 31, 2066));
    })
});
describe('DateOnly', () => {
    it('Equals is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 1, 1000).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 6, 1200).Equals(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(1, 1, 1400).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(12, 5, 1600).Equals(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 10, 1800).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 7, 1900).Equals(new DateOnly(8, 6, 1928)), false);

        //post 1900 dates
        assert.equal(new DateOnly(1, 1, 1900).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 6, 1928).Equals(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 31, 1956).Equals(new DateOnly(12, 31, 1956)), true);
        assert.equal(new DateOnly(2, 29, 1960).Equals(new DateOnly(2, 19, 1960)), false);
        assert.equal(new DateOnly(2, 28, 1961).Equals(new DateOnly(2, 28, 1961)), true);
        assert.equal(new DateOnly(10, 10, 1970).Equals(new DateOnly(10, 10, 1971)), false);
        assert.equal(new DateOnly(1, 1, 1971).Equals(new DateOnly(1, 1, 1971)), true);
        assert.equal(new DateOnly(2, 2, 1980).Equals(new DateOnly(2, 2, 1980)), true);
        assert.equal(new DateOnly(4, 2, 1989).Equals(new DateOnly(4, 2, 1989)), true);
        assert.equal(new DateOnly(4, 30, 1991).Equals(new DateOnly(4, 30, 1990)), false);
        assert.equal(new DateOnly(1, 31, 1995).Equals(new DateOnly(1, 31, 1995)), true);
        assert.equal(new DateOnly(3, 31, 1996).Equals(new DateOnly(3, 31, 1996)), true);
        assert.equal(new DateOnly(4, 1, 1999).Equals(new DateOnly(4, 1, 1999)), true);
        assert.equal(new DateOnly(8, 9, 2001).Equals(new DateOnly(8, 9, 2001)), true);
        assert.equal(new DateOnly(2, 1, 2002).Equals(new DateOnly(2, 1, 2002)), true);
        assert.equal(new DateOnly(12, 1, 2005).Equals(new DateOnly(12, 1, 2005)), true);
        assert.equal(new DateOnly(6, 30, 2011).Equals(new DateOnly(5, 30, 2055)), false);
        assert.equal(new DateOnly(5, 1, 2016).Equals(new DateOnly(5, 1, 2016)), true);
        assert.equal(new DateOnly(7, 11, 2022).Equals(new DateOnly(7, 11, 2022)), true);
        assert.equal(new DateOnly(1, 17, 2023).Equals(new DateOnly(1, 17, 2023)), true);
        assert.equal(new DateOnly(12, 12, 2030).Equals(new DateOnly(12, 12, 2030)), true);
        assert.equal(new DateOnly(1, 15, 2041).Equals(new DateOnly(1, 15, 2041)), true);
        assert.equal(new DateOnly(7, 8, 2055).Equals(new DateOnly(7, 8, 2055)), true);
        assert.equal(new DateOnly(3, 3, 2070).Equals(new DateOnly(1, 23, 2065)), true);
        assert.equal(new DateOnly(9, 10, 2082).Equals(new DateOnly(9, 10, 2082)), true);
        assert.equal(new DateOnly(1, 8, 2092).Equals(new DateOnly(1, 8, 2092)), true);
        assert.equal(new DateOnly(9, 8, 2095).Equals(new DateOnly(9, 8, 2095)), true);
        assert.equal(new DateOnly(12, 31, 2099).Equals(new DateOnly(12, 3, 2099)), true);
        assert.equal(new DateOnly(12, 31, 2099).Equals(new DateOnly(12, 31, 2099)), true);


        assert.equal(new DateOnly(2, 28, 2019).Equals(new DateOnly(2, 27, 2019)), false);
        assert.equal(new DateOnly(2, 28, 2019).Equals(new DateOnly(3, 1, 2019)), false);
        assert.equal(new DateOnly(2, 28, 2019).Equals(new DateOnly(3, 28, 2019)), false);
        assert.equal(new DateOnly(2, 28, 2019).Equals(new DateOnly(2, 28, 2020)), false);
        assert.equal(new DateOnly(2, 28, 2019).Equals(new DateOnly(2, 28, 2019)), true);
        assert.equal(new DateOnly(12, 31, 2020).Equals(new DateOnly(12, 31, 2020)), true);


        //post 2099 dates 
        assert.equal(new DateOnly(1, 1, 2100).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 6, 2500).Equals(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(1, 1, 3500).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(12, 5, 4000).Equals(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 10, 4500).Equals(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 7, 4999).Equals(new DateOnly(8, 6, 1928)), false);
    })
});
describe('DateOnly', () => {
    it('GreaterThanOrEqual is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 10, 1000).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 1200).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 1400).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 1600).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 1800).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 1900).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);


        //post 1900 dates
        assert.equal(new DateOnly(1, 1, 1900).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 6, 1928).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 31, 1956).GreaterThanOrEqual(new DateOnly(12, 31, 1956)), true);
        assert.equal(new DateOnly(2, 29, 1960).GreaterThanOrEqual(new DateOnly(2, 19, 1960)), true);
        assert.equal(new DateOnly(2, 28, 1961).GreaterThanOrEqual(new DateOnly(2, 28, 1961)), true);
        assert.equal(new DateOnly(10, 10, 1970).GreaterThanOrEqual(new DateOnly(10, 10, 1971)), true);
        assert.equal(new DateOnly(1, 1, 1971).GreaterThanOrEqual(new DateOnly(1, 1, 1971)), true);
        assert.equal(new DateOnly(2, 2, 1980).GreaterThanOrEqual(new DateOnly(2, 2, 1980)), true);
        assert.equal(new DateOnly(4, 2, 1989).GreaterThanOrEqual(new DateOnly(4, 2, 1989)), true);
        assert.equal(new DateOnly(4, 30, 1991).GreaterThanOrEqual(new DateOnly(4, 30, 1990)), true);
        assert.equal(new DateOnly(1, 31, 1995).GreaterThanOrEqual(new DateOnly(1, 31, 1995)), true);
        assert.equal(new DateOnly(3, 31, 1996).GreaterThanOrEqual(new DateOnly(3, 31, 1996)), true);
        assert.equal(new DateOnly(4, 1, 1999).GreaterThanOrEqual(new DateOnly(4, 1, 1999)), true);
        assert.equal(new DateOnly(8, 9, 2001).GreaterThanOrEqual(new DateOnly(8, 9, 2001)), true);
        assert.equal(new DateOnly(2, 1, 2002).GreaterThanOrEqual(new DateOnly(2, 1, 2002)), true);
        assert.equal(new DateOnly(12, 1, 2005).GreaterThanOrEqual(new DateOnly(12, 1, 2005)), true);
        assert.equal(new DateOnly(6, 30, 2011).GreaterThanOrEqual(new DateOnly(5, 30, 2055)), true);
        assert.equal(new DateOnly(5, 1, 2016).GreaterThanOrEqual(new DateOnly(5, 1, 2016)), true);
        assert.equal(new DateOnly(7, 11, 2022).GreaterThanOrEqual(new DateOnly(7, 11, 2022)), true);
        assert.equal(new DateOnly(1, 17, 2023).GreaterThanOrEqual(new DateOnly(1, 17, 2023)), true);
        assert.equal(new DateOnly(12, 12, 2030).GreaterThanOrEqual(new DateOnly(12, 12, 2030)), true);
        assert.equal(new DateOnly(1, 15, 2041).GreaterThanOrEqual(new DateOnly(1, 15, 2041)), true);
        assert.equal(new DateOnly(7, 8, 2055).GreaterThanOrEqual(new DateOnly(7, 8, 2055)), true);
        assert.equal(new DateOnly(3, 3, 2070).GreaterThanOrEqual(new DateOnly(1, 23, 2065)), true);
        assert.equal(new DateOnly(9, 10, 2082).GreaterThanOrEqual(new DateOnly(9, 10, 2082)), true);
        assert.equal(new DateOnly(1, 8, 2092).GreaterThanOrEqual(new DateOnly(1, 8, 2092)), true);
        assert.equal(new DateOnly(9, 8, 2095).GreaterThanOrEqual(new DateOnly(9, 8, 2095)), true);
        assert.equal(new DateOnly(12, 31, 2099).GreaterThanOrEqual(new DateOnly(12, 3, 2099)), true);
        assert.equal(new DateOnly(12, 31, 2099).GreaterThanOrEqual(new DateOnly(12, 31, 2099)), true);


        assert.equal(new DateOnly(2, 28, 2019).GreaterThanOrEqual(new DateOnly(2, 27, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThanOrEqual(new DateOnly(3, 1, 2019)), false);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThanOrEqual(new DateOnly(3, 28, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThanOrEqual(new DateOnly(2, 28, 2020)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThanOrEqual(new DateOnly(2, 28, 2019)), true);
        assert.equal(new DateOnly(12, 31, 2020).GreaterThanOrEqual(new DateOnly(12, 31, 2020)), true);

        //post 2099 dates 
        assert.equal(new DateOnly(1, 10, 2100).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 2500).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 3000).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 3500).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 4000).GreaterThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 4500).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(9, 16, 4999).GreaterThanOrEqual(new DateOnly(8, 6, 1928)), false);
    })
});
describe('DateOnly', () => {
    it('GreaterThan is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 10, 1000).GreaterThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 1200).GreaterThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 1400).GreaterThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 1600).GreaterThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 1800).GreaterThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 1900).GreaterThan(new DateOnly(8, 6, 1928)), false);

        //post 1900 dates
        assert.equal(new DateOnly(1, 1, 1900).GreaterThan(new DateOnly(1, 1, 1900)), false);
        assert.equal(new DateOnly(4, 6, 1928).GreaterThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 31, 1956).GreaterThan(new DateOnly(12, 31, 1956)), false);
        assert.equal(new DateOnly(2, 29, 1960).GreaterThan(new DateOnly(2, 19, 1960)), true);
        assert.equal(new DateOnly(2, 28, 1961).GreaterThan(new DateOnly(2, 28, 1961)), true);
        assert.equal(new DateOnly(10, 10, 1970).GreaterThan(new DateOnly(10, 10, 1971)), true);
        assert.equal(new DateOnly(1, 1, 1971).GreaterThan(new DateOnly(1, 1, 1971)), true);
        assert.equal(new DateOnly(2, 2, 1980).GreaterThan(new DateOnly(2, 2, 1980)), true);
        assert.equal(new DateOnly(4, 2, 1989).GreaterThan(new DateOnly(4, 2, 1989)), true);
        assert.equal(new DateOnly(4, 30, 1991).GreaterThan(new DateOnly(4, 30, 1990)), true);
        assert.equal(new DateOnly(1, 31, 1995).GreaterThan(new DateOnly(1, 31, 1995)), true);
        assert.equal(new DateOnly(3, 31, 1996).GreaterThan(new DateOnly(3, 31, 1996)), true);
        assert.equal(new DateOnly(4, 1, 1999).GreaterThan(new DateOnly(4, 1, 1999)), true);
        assert.equal(new DateOnly(8, 9, 2001).GreaterThan(new DateOnly(8, 9, 2001)), true);
        assert.equal(new DateOnly(2, 1, 2002).GreaterThan(new DateOnly(2, 1, 2002)), true);
        assert.equal(new DateOnly(12, 1, 2005).GreaterThan(new DateOnly(12, 1, 2005)), true);
        assert.equal(new DateOnly(6, 30, 2011).GreaterThan(new DateOnly(5, 30, 2055)), true);
        assert.equal(new DateOnly(5, 1, 2016).GreaterThan(new DateOnly(5, 1, 2016)), true);
        assert.equal(new DateOnly(7, 11, 2022).GreaterThan(new DateOnly(7, 11, 2022)), true);
        assert.equal(new DateOnly(1, 17, 2023).GreaterThan(new DateOnly(1, 17, 2023)), true);
        assert.equal(new DateOnly(12, 12, 2030).GreaterThan(new DateOnly(12, 12, 2030)), true);
        assert.equal(new DateOnly(1, 15, 2041).GreaterThan(new DateOnly(1, 15, 2041)), true);
        assert.equal(new DateOnly(7, 8, 2055).GreaterThan(new DateOnly(7, 8, 2055)), true);
        assert.equal(new DateOnly(3, 3, 2070).GreaterThan(new DateOnly(1, 23, 2065)), true);
        assert.equal(new DateOnly(9, 10, 2082).GreaterThan(new DateOnly(9, 10, 2082)), true);
        assert.equal(new DateOnly(1, 8, 2092).GreaterThan(new DateOnly(1, 8, 2092)), true);
        assert.equal(new DateOnly(9, 8, 2095).GreaterThan(new DateOnly(9, 8, 2095)), true);
        assert.equal(new DateOnly(12, 31, 2099).GreaterThan(new DateOnly(12, 3, 2099)), true);
        assert.equal(new DateOnly(12, 31, 2099).GreaterThan(new DateOnly(12, 31, 2099)), true);


        assert.equal(new DateOnly(2, 28, 2019).GreaterThan(new DateOnly(2, 27, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThan(new DateOnly(3, 1, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThan(new DateOnly(3, 28, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThan(new DateOnly(2, 28, 2020)), true);
        assert.equal(new DateOnly(2, 28, 2019).GreaterThan(new DateOnly(2, 28, 2019)), true);
        assert.equal(new DateOnly(12, 31, 2020).GreaterThan(new DateOnly(12, 31, 2020)), true);

        //post 2099 dates 
        assert.equal(new DateOnly(1, 10, 2100).GreaterThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 2500).GreaterThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 3000).GreaterThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 3500).GreaterThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 4000).GreaterThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 4500).GreaterThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(9, 16, 4999).GreaterThan(new DateOnly(8, 6, 1928)), false);
    })
});
describe('DateOnly', () => {
    it('LessThan is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 10, 1000).LessThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 1200).LessThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 1400).LessThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 1600).LessThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 1800).LessThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 1900).LessThan(new DateOnly(8, 6, 1928)), false);


        //post 1900 dates
        assert.equal(new DateOnly(1, 1, 1900).LessThan(new DateOnly(1, 1, 1900)), false);
        assert.equal(new DateOnly(4, 6, 1928).LessThan(new DateOnly(8, 6, 1928)), true);
        assert.equal(new DateOnly(12, 31, 1956).LessThan(new DateOnly(12, 31, 1956)), true);
        assert.equal(new DateOnly(2, 29, 1960).LessThan(new DateOnly(2, 19, 1960)), true);
        assert.equal(new DateOnly(2, 28, 1961).LessThan(new DateOnly(2, 28, 1961)), true);
        assert.equal(new DateOnly(10, 10, 1970).LessThan(new DateOnly(10, 10, 1971)), true);
        assert.equal(new DateOnly(1, 1, 1971).LessThan(new DateOnly(1, 1, 1971)), true);
        assert.equal(new DateOnly(2, 2, 1980).LessThan(new DateOnly(2, 2, 1980)), true);
        assert.equal(new DateOnly(4, 2, 1989).LessThan(new DateOnly(4, 2, 1989)), true);
        assert.equal(new DateOnly(4, 30, 1991).LessThan(new DateOnly(4, 30, 1990)), true);
        assert.equal(new DateOnly(1, 31, 1995).LessThan(new DateOnly(1, 31, 1995)), true);
        assert.equal(new DateOnly(3, 31, 1996).LessThan(new DateOnly(3, 31, 1996)), true);
        assert.equal(new DateOnly(4, 1, 1999).LessThan(new DateOnly(4, 1, 1999)), true);
        assert.equal(new DateOnly(8, 9, 2001).LessThan(new DateOnly(8, 9, 2001)), true);
        assert.equal(new DateOnly(2, 1, 2002).LessThan(new DateOnly(2, 1, 2002)), true);
        assert.equal(new DateOnly(12, 1, 2005).LessThan(new DateOnly(12, 1, 2005)), true);
        assert.equal(new DateOnly(6, 30, 2011).LessThan(new DateOnly(5, 30, 2055)), true);
        assert.equal(new DateOnly(5, 1, 2016).LessThan(new DateOnly(5, 1, 2016)), true);
        assert.equal(new DateOnly(7, 11, 2022).LessThan(new DateOnly(7, 11, 2022)), true);
        assert.equal(new DateOnly(1, 17, 2023).LessThan(new DateOnly(1, 17, 2023)), true);
        assert.equal(new DateOnly(12, 12, 2030).LessThan(new DateOnly(12, 12, 2030)), true);
        assert.equal(new DateOnly(1, 15, 2041).LessThan(new DateOnly(1, 15, 2041)), true);
        assert.equal(new DateOnly(7, 8, 2055).LessThan(new DateOnly(7, 8, 2055)), true);
        assert.equal(new DateOnly(3, 3, 2070).LessThan(new DateOnly(1, 23, 2065)), true);
        assert.equal(new DateOnly(9, 10, 2082).LessThan(new DateOnly(9, 10, 2082)), true);
        assert.equal(new DateOnly(1, 8, 2092).LessThan(new DateOnly(1, 8, 2092)), true);
        assert.equal(new DateOnly(9, 8, 2095).LessThan(new DateOnly(9, 8, 2095)), true);
        assert.equal(new DateOnly(12, 31, 2099).LessThan(new DateOnly(12, 3, 2099)), true);
        assert.equal(new DateOnly(12, 31, 2099).LessThan(new DateOnly(12, 31, 2099)), true);


        assert.equal(new DateOnly(2, 28, 2019).LessThan(new DateOnly(2, 27, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThan(new DateOnly(3, 1, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThan(new DateOnly(3, 28, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThan(new DateOnly(2, 28, 2020)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThan(new DateOnly(2, 28, 2019)), true);
        assert.equal(new DateOnly(12, 31, 2020).LessThan(new DateOnly(12, 31, 2020)), true);

        //post 2099 dates 
        assert.equal(new DateOnly(1, 10, 2100).LessThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 2500).LessThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 3000).LessThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 3500).LessThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 4000).LessThan(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 4500).LessThan(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(9, 16, 4999).LessThan(new DateOnly(8, 6, 1928)), false);
    })
});
describe('DateOnly', () => {
    it('LessThanOrEqual is returning incorrect value', () => {

        //pre-1900 dates
        assert.equal(new DateOnly(1, 10, 1000).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 1200).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 1400).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 1600).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 1800).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 1900).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);


        //post 1900 dates
        assert.equal(new DateOnly(1, 1, 1900).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(4, 6, 1928).LessThanOrEqual(new DateOnly(8, 6, 1928)), true);
        assert.equal(new DateOnly(12, 31, 1956).LessThanOrEqual(new DateOnly(12, 31, 1956)), true);
        assert.equal(new DateOnly(2, 29, 1960).LessThanOrEqual(new DateOnly(2, 19, 1960)), true);
        assert.equal(new DateOnly(2, 28, 1961).LessThanOrEqual(new DateOnly(2, 28, 1961)), true);
        assert.equal(new DateOnly(10, 10, 1970).LessThanOrEqual(new DateOnly(10, 10, 1971)), true);
        assert.equal(new DateOnly(1, 1, 1971).LessThanOrEqual(new DateOnly(1, 1, 1971)), true);
        assert.equal(new DateOnly(2, 2, 1980).LessThanOrEqual(new DateOnly(2, 2, 1980)), true);
        assert.equal(new DateOnly(4, 2, 1989).LessThanOrEqual(new DateOnly(4, 2, 1989)), true);
        assert.equal(new DateOnly(4, 30, 1991).LessThanOrEqual(new DateOnly(4, 30, 1990)), true);
        assert.equal(new DateOnly(1, 31, 1995).LessThanOrEqual(new DateOnly(1, 31, 1995)), true);
        assert.equal(new DateOnly(3, 31, 1996).LessThanOrEqual(new DateOnly(3, 31, 1996)), true);
        assert.equal(new DateOnly(4, 1, 1999).LessThanOrEqual(new DateOnly(4, 1, 1999)), true);
        assert.equal(new DateOnly(8, 9, 2001).LessThanOrEqual(new DateOnly(8, 9, 2001)), true);
        assert.equal(new DateOnly(2, 1, 2002).LessThanOrEqual(new DateOnly(2, 1, 2002)), true);
        assert.equal(new DateOnly(12, 1, 2005).LessThanOrEqual(new DateOnly(12, 1, 2005)), true);
        assert.equal(new DateOnly(6, 30, 2011).LessThanOrEqual(new DateOnly(5, 30, 2055)), true);
        assert.equal(new DateOnly(5, 1, 2016).LessThanOrEqual(new DateOnly(5, 1, 2016)), true);
        assert.equal(new DateOnly(7, 11, 2022).LessThanOrEqual(new DateOnly(7, 11, 2022)), true);
        assert.equal(new DateOnly(1, 17, 2023).LessThanOrEqual(new DateOnly(1, 17, 2023)), true);
        assert.equal(new DateOnly(12, 12, 2030).LessThanOrEqual(new DateOnly(12, 12, 2030)), true);
        assert.equal(new DateOnly(1, 15, 2041).LessThanOrEqual(new DateOnly(1, 15, 2041)), true);
        assert.equal(new DateOnly(7, 8, 2055).LessThanOrEqual(new DateOnly(7, 8, 2055)), true);
        assert.equal(new DateOnly(3, 3, 2070).LessThanOrEqual(new DateOnly(1, 23, 2065)), true);
        assert.equal(new DateOnly(9, 10, 2082).LessThanOrEqual(new DateOnly(9, 10, 2082)), true);
        assert.equal(new DateOnly(1, 8, 2092).LessThanOrEqual(new DateOnly(1, 8, 2092)), true);
        assert.equal(new DateOnly(9, 8, 2095).LessThanOrEqual(new DateOnly(9, 8, 2095)), true);
        assert.equal(new DateOnly(12, 31, 2099).LessThanOrEqual(new DateOnly(12, 3, 2099)), true);
        assert.equal(new DateOnly(12, 31, 2099).LessThanOrEqual(new DateOnly(12, 31, 2099)), true);


        assert.equal(new DateOnly(2, 28, 2019).LessThanOrEqual(new DateOnly(2, 27, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThanOrEqual(new DateOnly(3, 1, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThanOrEqual(new DateOnly(3, 28, 2019)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThanOrEqual(new DateOnly(2, 28, 2020)), true);
        assert.equal(new DateOnly(2, 28, 2019).LessThanOrEqual(new DateOnly(2, 28, 2019)), true);
        assert.equal(new DateOnly(12, 31, 2020).LessThanOrEqual(new DateOnly(12, 31, 2020)), true);

        //post 2099 dates 
        assert.equal(new DateOnly(1, 10, 2100).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(3, 6, 2500).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(6, 11, 3000).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(8, 6, 3500).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(12, 21, 4000).LessThanOrEqual(new DateOnly(1, 1, 1900)), true);
        assert.equal(new DateOnly(9, 16, 4500).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);
        assert.equal(new DateOnly(9, 16, 4999).LessThanOrEqual(new DateOnly(8, 6, 1928)), false);
    })
});

describe('DateOnly', () => {
    it('NumerOfDaysBetweenDates is returning incorrect value', () => {
        
        //pre-1900 dates
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1000), new DateOnly(6, 7, 1909), false), 3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1200), new DateOnly(6, 7, 1909), false), 3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1400), new DateOnly(6, 7, 1909), false), 3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1600), new DateOnly(6, 7, 1909), false), 3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1800), new DateOnly(6, 7, 1909), false), 3445);
        
        //post 1900 dates
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1900), new DateOnly(6, 7, 1909), false), 3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 6, 1928), new DateOnly(5, 20, 1928), false), 44);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 31, 1956), new DateOnly(3, 28, 1957), false), 87);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 29, 1960), new DateOnly(2, 7, 1961), false), 344);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 28, 1961), new DateOnly(8, 31, 1973), false), 4567);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 10, 1970), new DateOnly(4, 27, 1972), false), 565);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1971), new DateOnly(3, 31, 1971), false), 89);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 2, 1980), new DateOnly(4, 10, 1981), false), 433);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 2, 1989), new DateOnly(9, 19, 1991), false), 900);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 30, 1991), new DateOnly(5, 8, 1991), false), 8);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 31, 1995), new DateOnly(2, 10, 1995), false), 10);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 31, 1996), new DateOnly(7, 9, 1996), false), 100);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 1, 1999), new DateOnly(1, 3, 1999), false), -88);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(8, 9, 2001), new DateOnly(10, 26, 2001), false), 78);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 1, 2002), new DateOnly(12, 12, 2003), false), 679);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 1, 2005), new DateOnly(3, 22, 2006), false), 111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(6, 30, 2011), new DateOnly(10, 23, 2011), false), 115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 1, 2016), new DateOnly(2, 26, 2018), false), 666);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 11, 2022), new DateOnly(7, 23, 2022), false), 12);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 17, 2023), new DateOnly(11, 16, 2024), false), 669);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 12, 2030), new DateOnly(3, 13, 2031), false), 91);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 15, 2041), new DateOnly(4, 15, 2041), false), 90);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 8, 2055), new DateOnly(10, 28, 2055), false), 112);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 3, 2070), new DateOnly(6, 5, 2071), false), 459);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(9, 10, 2082), new DateOnly(12, 20, 2082), false), 101);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 8, 2092), new DateOnly(5, 2, 2092), false), 115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(9, 8, 2095), new DateOnly(12, 28, 2095), false), 111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 31, 2099), new DateOnly(7, 9, 2100), false), 190);



        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(6, 7, 1909), new DateOnly(1, 1, 1900), false), -3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 20, 1928), new DateOnly(4, 6, 1928), false), -44);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 28, 1957), new DateOnly(12, 31, 1956), false), -87);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 7, 1961), new DateOnly(2, 29, 1960), false), -344);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(8, 31, 1973), new DateOnly(2, 28, 1961), false), -4567);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 27, 1972), new DateOnly(10, 10, 1970), false), -565);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 31, 1971), new DateOnly(1, 1, 1971), false), -89);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 10, 1981), new DateOnly(2, 2, 1980), false), -433);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(9, 19, 1991), new DateOnly(4, 2, 1989), false), -900);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 8, 1991), new DateOnly(4, 30, 1991), false), -8);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 10, 1995), new DateOnly(1, 31, 1995), false), -10);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 9, 1996), new DateOnly(3, 31, 1996), false), -100);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 3, 1999), new DateOnly(4, 1, 1999), false), -88);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 26, 2001), new DateOnly(8, 9, 2001), false), -78);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 12, 2003), new DateOnly(2, 1, 2002), false), -679);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 22, 2006), new DateOnly(12, 1, 2005), false), -111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 23, 2011), new DateOnly(6, 30, 2011), false), -115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 26, 2018), new DateOnly(5, 1, 2016), false), -666);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 23, 2022), new DateOnly(7, 11, 2022), false), -12);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(11, 16, 2024), new DateOnly(1, 17, 2023), false), -669);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 13, 2031), new DateOnly(12, 12, 2030), false), -91);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 15, 2041), new DateOnly(1, 15, 2041), false), -90);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 28, 2055), new DateOnly(7, 8, 2055), false), -112);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(6, 5, 2071), new DateOnly(3, 3, 2070), false), -459);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 20, 2082), new DateOnly(9, 10, 2082), false), -101);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 2, 2092), new DateOnly(1, 8, 2092), false), -115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 28, 2095), new DateOnly(9, 8, 2095), false), -111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 9, 2100), new DateOnly(12, 31, 2099), false), -190);


        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 28, 2019), new DateOnly(2, 28, 2019), false), 0);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 28, 2019), new DateOnly(3, 1, 2019), false), 1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 31, 2019), new DateOnly(1, 1, 2020), false), 1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 31, 2020), new DateOnly(4, 1, 2020), false), 1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 30, 2020), new DateOnly(5, 1, 2020), false), 1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 1, 2019), new DateOnly(3, 1, 2019), false), 28);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 1, 2020), new DateOnly(3, 1, 2020), false), 29);



        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2019), new DateOnly(2, 28, 2019), false), -1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 2020), new DateOnly(12, 31, 2019), false), -1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 1, 2020), new DateOnly(3, 31, 2020), false), -1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 1, 2020), new DateOnly(4, 30, 2020), false), -1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2019), new DateOnly(2, 1, 2019), false), -28);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2020), new DateOnly(2, 1, 2020), false), -29);



        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1900), new DateOnly(6, 7, 1909), true), 3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 6, 1928), new DateOnly(5, 20, 1928), true), 44);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 31, 1956), new DateOnly(3, 28, 1957), true), 87);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 29, 1960), new DateOnly(2, 7, 1961), true), 344);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 28, 1961), new DateOnly(8, 31, 1973), true), 4567);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 10, 1970), new DateOnly(4, 27, 1972), true), 565);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 1971), new DateOnly(3, 31, 1971), true), 89);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 2, 1980), new DateOnly(4, 10, 1981), true), 433);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 2, 1989), new DateOnly(9, 19, 1991), true), 900);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 30, 1991), new DateOnly(5, 8, 1991), true), 9);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 31, 1995), new DateOnly(2, 10, 1995), true), 10);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 31, 1996), new DateOnly(7, 9, 1996), true), 100);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 1, 1999), new DateOnly(1, 3, 1999), true), -88);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(8, 9, 2001), new DateOnly(10, 26, 2001), true), 78);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 1, 2002), new DateOnly(12, 12, 2003), true), 679);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 1, 2005), new DateOnly(3, 22, 2006), true), 111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(6, 30, 2011), new DateOnly(10, 23, 2011), true), 115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 1, 2016), new DateOnly(2, 26, 2018), true), 666);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 11, 2022), new DateOnly(7, 23, 2022), true), 12);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 17, 2023), new DateOnly(11, 16, 2024), true), 669);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 12, 2030), new DateOnly(3, 13, 2031), true), 91);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 15, 2041), new DateOnly(4, 15, 2041), true), 90);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 8, 2055), new DateOnly(10, 28, 2055), true), 112);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 3, 2070), new DateOnly(6, 5, 2071), true), 459);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(9, 10, 2082), new DateOnly(12, 20, 2082), true), 101);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 8, 2092), new DateOnly(5, 2, 2092), true), 115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(9, 8, 2095), new DateOnly(12, 28, 2095), true), 111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 31, 2099), new DateOnly(7, 9, 2100), true), 190);



        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(6, 7, 1909), new DateOnly(1, 1, 1900), true), -3445);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 20, 1928), new DateOnly(4, 6, 1928), true), -44);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 28, 1957), new DateOnly(12, 31, 1956), true), -87);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 7, 1961), new DateOnly(2, 29, 1960), true), -344);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(8, 31, 1973), new DateOnly(2, 28, 1961), true), -4567);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 27, 1972), new DateOnly(10, 10, 1970), true), -565);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 31, 1971), new DateOnly(1, 1, 1971), true), -89);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 10, 1981), new DateOnly(2, 2, 1980), true), -433);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(9, 19, 1991), new DateOnly(4, 2, 1989), true), -900);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 8, 1991), new DateOnly(4, 30, 1991), true), -8);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 10, 1995), new DateOnly(1, 31, 1995), true), -10);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 9, 1996), new DateOnly(3, 31, 1996), true), -100);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 3, 1999), new DateOnly(4, 1, 1999), true), -88);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 26, 2001), new DateOnly(8, 9, 2001), true), -78);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 12, 2003), new DateOnly(2, 1, 2002), true), -679);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 22, 2006), new DateOnly(12, 1, 2005), true), -111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 23, 2011), new DateOnly(6, 30, 2011), true), -115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 26, 2018), new DateOnly(5, 1, 2016), true), -666);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 23, 2022), new DateOnly(7, 11, 2022), true), -12);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(11, 16, 2024), new DateOnly(1, 17, 2023), true), -669);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 13, 2031), new DateOnly(12, 12, 2030), true), -91);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 15, 2041), new DateOnly(1, 15, 2041), true), -90);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(10, 28, 2055), new DateOnly(7, 8, 2055), true), -112);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(6, 5, 2071), new DateOnly(3, 3, 2070), true), -459);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 20, 2082), new DateOnly(9, 10, 2082), true), -101);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 2, 2092), new DateOnly(1, 8, 2092), true), -115);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 28, 2095), new DateOnly(9, 8, 2095), true), -111);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(7, 9, 2100), new DateOnly(12, 31, 2099), true), -190);


        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 28, 2019), new DateOnly(2, 28, 2019), true), 1);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 28, 2019), new DateOnly(3, 1, 2019), true), 2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(12, 31, 2019), new DateOnly(1, 1, 2020), true), 2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 31, 2020), new DateOnly(4, 1, 2020), true), 2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 30, 2020), new DateOnly(5, 1, 2020), true), 2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 1, 2019), new DateOnly(3, 1, 2020), true), 29);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(2, 1, 2020), new DateOnly(3, 1, 2020), true), 30);



        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2019), new DateOnly(2, 28, 2019), true), -2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(1, 1, 2020), new DateOnly(12, 31, 2019), true), -2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(4, 1, 2020), new DateOnly(3, 31, 2020), true), -2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(5, 1, 2020), new DateOnly(4, 30, 2020), true), -2);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2020), new DateOnly(2, 1, 2019), true), -29);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2020), new DateOnly(2, 1, 2020), true), -30);

        //post 2099 dates 
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2100), new DateOnly(2, 1, 2020), true), -30);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 2500), new DateOnly(2, 1, 2020), true), -30);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 3000), new DateOnly(2, 1, 2020), true), -30);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 3500), new DateOnly(2, 1, 2020), true), -30);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 4000), new DateOnly(2, 1, 2020), true), -30);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 4500), new DateOnly(2, 1, 2020), true), -30);
        assert.equal(DateOnly.NumerOfDaysBetweenDates(new DateOnly(3, 1, 4999), new DateOnly(2, 1, 2020), true), -30);
    })
});
