import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlusMinus from '@/components/atoms/PlusMinus';
import SchoolDetails from '@/components/molecules/Submit/SchoolDetails';
import AddMore from '@/components/atoms/AddMore';
import api from '@/utils/api';

function AddSchool() {
    const [schools, setSchools] = useState<JSX.Element[]>([]);
    const [schoolCount, setSchoolsCount] = useState(0);
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [cities, setCities] = useState<string[]>([]); // Populate this with city data
    const [selectedCities, setSelectedCities] = useState<string[]>([]); // Store selected city values
    const [schoolsData, setSchoolsData] = useState<string[][]>([]); // Store school data

    useEffect(() => {
        api.get('/cities')
            .then((response: { data: any }) => {
                console.log(response.data);
                setCities(response.data.data);
            })
            .catch((error: any) => console.error('Error fetching cities:', error));
    }, []);

    const onCityChange = (index: number, city?: string) => {
        setSelectedCity(index.toString());
        // Clear the selected school when the city changes
        // setSchoolsData('');
    };

    const onSchoolChange = (index: number, school?: string) => {
        // Update the school data when the school changes
        // setSchoolsData('');
    }
    // Function to add the initial SchoolDetails component
    const addInitialSchools = () => {
        setSchools([
            <SchoolDetails
                key={0}
                index={0}
                // cityId={`city-0`}
                // cityName={`City`}
                // schoolNameId={`schoolId-0`}
                // schoolName={`School Name`}
                // selectedCity={selectedCities[0]}
                onCityChange={(index, city) => onCityChange(index)}
                onSchoolChange={(index, school) => onSchoolChange(index, school)}
            // cities={cities}
            // schools={schoolsData[0]}
            />,
        ]);
        setSchoolsCount(0);
    };

    useEffect(() => {
        if (selectedCity) {
            api.get(`/schools/${selectedCity}`)
                .then((response: { data: any }) => {
                    setSchools(response.data.data);
                })
                .catch((error: any) => console.error('Error fetching schools:', error));
        }
    }, [selectedCity]);


    const addSchoolRow = () => {
        const newCount = schoolCount + 1;
        setSchools((prevSchools) => [
            ...prevSchools,
            // <SchoolDetails
            //     key={newCount}
            //     cityId={`city-${newCount}`}
            //     cityName={`City`}
            //     schoolNameId={`schoolId-${newCount}`}
            //     schoolName={`School Name`}
            //     selectedCity={selectedCities[newCount]}
            //     onCityChange={selectedCity}
            //     cities={cities}
            //     schools={schoolsData[newCount]}
            // />,
            <SchoolDetails
                key={newCount}
                index={newCount}
                // cityId={`city-0`}
                // cityName={`City`}
                // schoolNameId={`schoolId-0`}
                // schoolName={`School Name`}
                // selectedCity={selectedCities[0]}
                onCityChange={(index, city) => onCityChange(index)}
                onSchoolChange={(index, school) => onSchoolChange(index, school)}
            // cities={cities}
            // schools={schoolsData[0]}
            />,
        ]);
        setSchoolsCount(newCount);
        setSelectedCities((prevSelectedCities) => [...prevSelectedCities, cities[0]]);
    };

    const handleCityChange = (index: number) => (city: string) => {
        const newSelectedCities = [...selectedCities];
        newSelectedCities[index] = city;
        setSelectedCities(newSelectedCities);
    };

    return (
        <SchoolParent>
            {schools.map((school) => (
                <div key={school.key}>{school}</div>
            ))}
            <AddMore type="button" onClick={addSchoolRow}>
                <PlusMinus /> Add More School
            </AddMore>
        </SchoolParent>
    );
}

export default AddSchool;



const SchoolParent = styled.div`
    padding-left: 40px;
    counter-reset: item-counter;
    background-image: repeating-linear-gradient(6deg, #000, #000 9px, transparent 10px, transparent 19px, #000 19px),repeating-linear-gradient(96deg, transparent, transparent 9px, transparent 9px, transparent 19px, transparent 19px),repeating-linear-gradient(186deg, transparent, transparent 7px, transparent 9px, transparent 19px, #333333 19px),repeating-linear-gradient(276deg, transparent, transparent 9px, transparent 9px, transparent 19px, #333333 19px);
    background-size: 1px 100%, 100% 1px, 1px 100% , 100% 1px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    margin-top: 40px;
`