import StudentTabs from './student-tabs';
import { Container } from '@/components/layout/container';
import SectionHeading from '@/components/shared/section-heading';

const StudentView = () => {
  return (
    <Container>
      <SectionHeading
        title='Jobs & Bounties'
        description='Find all types of jobs and bounties for only for you.'
      />
      <a href='https://smartatssystem.streamlit.app/'>
        <p>
          <button style={{ backgroundColor: '#73AD21', color: 'white',borderRadius: '5px', // Adding border radius
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer'}}>check your resume score</button>
        </p>
        
      </a>
      <StudentTabs />
    </Container>
  );
};

StudentView.displayName = 'StudentView';
export default StudentView;
