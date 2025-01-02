import { useEffect } from 'react';

import './Teams.css';
import MemberCard from '../Members/MemberCard/MemberCard';
import useTeams from '../../hooks/teams.api';
import useMembers from '../../hooks/members.api';


const Categoria = () => {
    const { teams, getTeams } = useTeams();
    const { members, getMembers } = useMembers();
    useEffect(() => {
        getTeams();
        getMembers();
    }, []);

    const getTeamDataById = (id) => {
        const team = teams.find((team) => team.id == id);
        return team
    }
    const getMembersByTeam = (teamId) => {
        const membersByTeam = members.filter((member) => member.team == teamId);
        return membersByTeam
    }
    return (
        <section className='container mx-auto p-5'>

            {
                teams?.map((team) => (
                    <section className='image-card-section' key={team.id}>
                        {getMembersByTeam(team.id).length > 0 && <>
                            <button className='team-name' style={{ backgroundColor: team.color }}>
                                {team.name}
                            </button>
                            <div className='flex flex-wrap flex-row gap-5'>
                                {
                                    getMembersByTeam(team.id).map((member) => (
                                        <MemberCard
                                            key={member.id}
                                            id={member.id}
                                            image={member}
                                            getData={getMembers}
                                            url={member.image_url + "?id=" + member.id}
                                            imageUrl={member.image_url}
                                            title={member.title}
                                            colorPrimario={
                                                getTeamDataById(member.team)?.color
                                            }
                                        />
                                    ))
                                }
                            </div>
                        </>}
                    </section>
                ))
            }

            {/* {members?.map((member) => (
                    <>
                        <button key={getTeamDataById(member.team)?.id}> {getTeamDataById(member.team)?.name}</button>
                        <ImageCard
                            key={member.id}
                            id={member.id}
                            image={member}
                            getData={getMembers}
                            url={member.image_url + "?id=" + member.id}
                            title={member.title}
                            colorPrimario={
                                getTeamDataById(member.team)?.color
                            }
                        />
                    </>

                ))} */}



        </section>
    );
}

export default Categoria;