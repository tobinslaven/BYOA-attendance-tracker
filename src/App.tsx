import React, { useState } from 'react';

// Define types directly in the file to avoid import issues
type AttendanceStatus = 'attending' | 'absent' | 'excused';

interface Learner {
  id: string;
  name: string;
  status: AttendanceStatus;
}

// All 42 students - alphabetically ordered by last name
const allStudents: Learner[] = [
  { id: '1', name: 'Dillen Barak', status: 'attending' },
  { id: '2', name: 'Marlee Barak', status: 'attending' },
  { id: '3', name: 'Ariel Gordon', status: 'attending' },
  { id: '4', name: 'Chrishanda Hamann', status: 'attending' },
  { id: '5', name: 'Ava Hattix', status: 'attending' },
  { id: '6', name: 'Ben Hennigan', status: 'attending' },
  { id: '7', name: 'Sindie Hurst', status: 'attending' },
  { id: '8', name: 'Catalina Hurst', status: 'attending' },
  { id: '9', name: 'Addison Jones', status: 'attending' },
  { id: '10', name: 'Aedyn Jones', status: 'attending' },
  { id: '11', name: 'Leyla Jones', status: 'attending' },
  { id: '12', name: 'Saddora Jones', status: 'attending' },
  { id: '13', name: 'Daniel Korolkov', status: 'attending' },
  { id: '14', name: 'Leah Korolova', status: 'attending' },
  { id: '15', name: 'Levi Laser', status: 'attending' },
  { id: '16', name: 'Lyla Laser', status: 'attending' },
  { id: '17', name: 'Luana Laser', status: 'attending' },
  { id: '18', name: 'Jivana Maciel', status: 'attending' },
  { id: '19', name: 'Massimo Magistri', status: 'attending' },
  { id: '20', name: 'Aidan Magoon', status: 'attending' },
  { id: '21', name: 'Isabella Matthews', status: 'attending' },
  { id: '22', name: 'Smith Morris', status: 'attending' },
  { id: '23', name: 'Mila Munive', status: 'attending' },
  { id: '24', name: 'Adan Mundo (Jover)', status: 'attending' },
  { id: '25', name: 'Daniel Ohana', status: 'attending' },
  { id: '26', name: 'Emily Ohana', status: 'attending' },
  { id: '27', name: 'Analia Ortiz', status: 'attending' },
  { id: '28', name: 'Marco Ortiz', status: 'attending' },
  { id: '29', name: 'Hazel Partin', status: 'attending' },
  { id: '30', name: 'Asa Partin', status: 'attending' },
  { id: '31', name: 'Kiara Sazunic', status: 'attending' },
  { id: '32', name: 'Luna Schmidt', status: 'attending' },
  { id: '33', name: 'Salomon Silva', status: 'attending' },
  { id: '34', name: 'Divya Slaven', status: 'attending' },
  { id: '35', name: 'Ari Sosa', status: 'attending' },
  { id: '36', name: 'Journey Sushkivilli', status: 'attending' },
  { id: '37', name: 'Sydney Till', status: 'attending' },
  { id: '38', name: 'Evan Till', status: 'attending' },
  { id: '39', name: 'Alyssa Till', status: 'attending' },
  { id: '40', name: 'Amaia Ybarra', status: 'attending' },
  { id: '41', name: 'Marco Yagui', status: 'attending' },
  { id: '42', name: 'Kaya Wise', status: 'attending' },
];

function App() {
  const [learners, setLearners] = useState<Learner[]>(allStudents);
  const [sessionCompleted, setSessionCompleted] = useState(false);

  const handleStatusChange = (learnerId: string, status: AttendanceStatus) => {
    setLearners(prev => 
      prev.map(learner => 
        learner.id === learnerId 
          ? { ...learner, status }
          : learner
      )
    );
  };

  const getStatusCounts = () => {
    const attending = learners.filter(l => l.status === 'attending').length;
    const absent = learners.filter(l => l.status === 'absent').length;
    const excused = learners.filter(l => l.status === 'excused').length;
    return { attending, absent, excused, total: learners.length };
  };

  const sendEmail = async () => {
    const counts = getStatusCounts();
    
    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold;">📚 Daily Attendance Report</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; margin-bottom: 30px;">
            <div style="text-align: center; padding: 15px; background: #f0f9ff; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #1e40af;">${counts.total}</div>
              <div style="color: #64748b; font-size: 14px;">Total Students</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #f0fdf4; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #16a34a;">${counts.attending}</div>
              <div style="color: #64748b; font-size: 14px;">✅ Present</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #fef2f2; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #dc2626;">${counts.absent}</div>
              <div style="color: #64748b; font-size: 14px;">❌ Absent</div>
            </div>
            <div style="text-align: center; padding: 15px; background: #fffbeb; border-radius: 8px;">
              <div style="font-size: 24px; font-weight: bold; color: #d97706;">${counts.excused}</div>
              <div style="color: #64748b; font-size: 14px;">⏰ Excused</div>
            </div>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <div style="font-size: 18px; font-weight: bold; color: #1e293b; margin-bottom: 10px;">📊 Attendance Rate</div>
            <div style="background: #e2e8f0; height: 8px; border-radius: 4px; overflow: hidden;">
              <div style="background: linear-gradient(90deg, #10b981, #059669); height: 100%; width: ${Math.round((counts.attending / counts.total) * 100)}%; transition: width 0.3s ease;"></div>
            </div>
            <div style="text-align: center; margin-top: 8px; font-weight: bold; color: #059669;">
              ${Math.round((counts.attending / counts.total) * 100)}%
            </div>
          </div>
          
          <h3 style="color: #1e293b; margin-bottom: 15px; font-size: 18px;">👥 Student Details</h3>
          <div style="background: white; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            ${learners.map(learner => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; border-bottom: 1px solid #f1f5f9;">
                <span style="font-weight: 500; color: #1e293b;">${learner.name}</span>
                <span style="padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; ${
                  learner.status === 'attending' ? 'background: #dcfce7; color: #166534;' :
                  learner.status === 'absent' ? 'background: #fecaca; color: #991b1b;' :
                  'background: #fef3c7; color: #92400e;'
                }">
                  ${learner.status === 'attending' ? '✅ Present' :
                    learner.status === 'absent' ? '❌ Absent' :
                    '⏰ Excused Absence'}
                </span>
              </div>
            `).join('')}
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #f8fafc; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #64748b; font-size: 14px;">
              Generated by BYOA Attendance Tracker • ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    `;

    try {
      // For now, we'll use a simple mailto link as a fallback
      const subject = `Daily Attendance Report - ${new Date().toLocaleDateString()}`;
      const body = `
📚 Daily Attendance Report - ${new Date().toLocaleDateString()}

📊 Summary:
• Total Students: ${counts.total}
• Present: ${counts.attending}
• Absent: ${counts.absent}
• Excused: ${counts.excused}
• Attendance Rate: ${Math.round((counts.attending / counts.total) * 100)}%

👥 Student Details:
${learners.map(learner => 
  `• ${learner.name}: ${learner.status === 'attending' ? '✅ Present' : 
    learner.status === 'absent' ? '❌ Absent' : '⏰ Excused'}`
).join('\n')}

Generated by BYOA Attendance Tracker
      `;

      // Create mailto link
      const mailtoLink = `mailto:tobin@musttry.it?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.open(mailtoLink);
      
      alert('Opening email client to send report to tobin@musttry.it');
      setSessionCompleted(true);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  const resetSession = () => {
    setLearners(allStudents);
    setSessionCompleted(false);
  };

  const addNewLearner = () => {
    const firstName = prompt('Enter first name:');
    if (!firstName || !firstName.trim()) return;
    
    const lastName = prompt('Enter last name:');
    if (!lastName || !lastName.trim()) return;
    
    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    
    // Check if learner already exists
    if (learners.some(learner => learner.name.toLowerCase() === fullName.toLowerCase())) {
      alert('A learner with this name already exists.');
      return;
    }
    
    const newLearner: Learner = {
      id: Date.now().toString(),
      name: fullName,
      status: 'attending'
    };
    
    // Add to the list and sort alphabetically by last name
    const updatedLearners = [...learners, newLearner].sort((a, b) => {
      const aLastName = a.name.split(' ').pop() || '';
      const bLastName = b.name.split(' ').pop() || '';
      return aLastName.localeCompare(bLastName);
    });
    
    setLearners(updatedLearners);
  };

  const counts = getStatusCounts();

  if (sessionCompleted) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#f8fafc', 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{ 
          maxWidth: '400px', 
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ 
            width: '64px', 
            height: '64px', 
            backgroundColor: '#38a169', 
            borderRadius: '50%', 
            margin: '0 auto 24px auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: 'white'
          }}>
            ✓
          </div>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: '500', 
            color: '#2d3748', 
            margin: '0 0 12px 0'
          }}>
            Session Complete
          </h1>
          <p style={{ 
            color: '#718096', 
            fontSize: '16px',
            margin: '0 0 32px 0',
            lineHeight: '1.5'
          }}>
            Attendance report sent to tobin@musttry.it
          </p>
          <button 
            onClick={resetSession}
            style={{ 
              padding: '16px 32px', 
              backgroundColor: '#3182ce', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '500',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              minWidth: '180px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#2c5282';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#3182ce';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            Start New Session
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8fafc', 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: '300', 
            color: '#1a202c', 
            margin: '0 0 8px 0',
            letterSpacing: '-0.5px'
          }}>
            Attendance Tracker
          </h1>
          <p style={{ 
            color: '#718096', 
            fontSize: '16px',
            margin: '0',
            fontWeight: '400'
          }}>
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Summary */}
        <div style={{ 
          backgroundColor: 'white', 
          padding: '24px', 
          borderRadius: '12px', 
          marginBottom: '32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e2e8f0'
        }}>
          <h2 style={{ 
            margin: '0 0 20px 0', 
            color: '#2d3748', 
            fontSize: '18px',
            fontWeight: '500'
          }}>
            Summary
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '16px',
            marginBottom: '20px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: '#2d3748' }}>{counts.total}</div>
              <div style={{ color: '#718096', fontSize: '14px', marginTop: '4px' }}>Total</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: '#38a169' }}>{counts.attending}</div>
              <div style={{ color: '#718096', fontSize: '14px', marginTop: '4px' }}>Present</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: '#e53e3e' }}>{counts.absent}</div>
              <div style={{ color: '#718096', fontSize: '14px', marginTop: '4px' }}>Absent</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '600', color: '#d69e2e' }}>{counts.excused}</div>
              <div style={{ color: '#718096', fontSize: '14px', marginTop: '4px' }}>Excused</div>
            </div>
          </div>
          {counts.total > 0 && (
            <div>
              <div style={{ 
                width: '100%', 
                backgroundColor: '#e2e8f0', 
                borderRadius: '6px', 
                height: '8px',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  backgroundColor: '#38a169', 
                  height: '100%', 
                  width: `${(counts.attending / counts.total) * 100}%`,
                  transition: 'width 0.3s ease',
                  borderRadius: '6px'
                }}></div>
              </div>
              <p style={{ 
                textAlign: 'center', 
                margin: '12px 0 0 0', 
                color: '#718096',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {Math.round((counts.attending / counts.total) * 100)}% attendance rate
              </p>
            </div>
          )}
        </div>

        {/* Students List */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ 
            color: '#2d3748', 
            fontSize: '18px',
            fontWeight: '500',
            margin: '0 0 16px 0'
          }}>
            Students ({learners.length})
          </h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {learners.map(learner => (
              <div key={learner.id} style={{ 
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e2e8f0',
                borderLeft: `4px solid ${
                  learner.status === 'attending' ? '#38a169' : 
                  learner.status === 'absent' ? '#e53e3e' : '#d69e2e'
                }`
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div>
                    <div style={{ 
                      fontSize: '24px', 
                      fontWeight: '600', 
                      color: '#2d3748',
                      letterSpacing: '-0.025em'
                    }}>
                      {learner.name}
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  <button 
                    onClick={() => handleStatusChange(learner.id, 'attending')}
                    style={{
                      padding: '12px 16px',
                      fontSize: '18px',
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: learner.status === 'attending' ? '#38a169' : '#f7fafc',
                      color: learner.status === 'attending' ? 'white' : '#4a5568',
                      border: learner.status === 'attending' ? 'none' : '1px solid #e2e8f0',
                      transition: 'all 0.2s ease',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    Present
                  </button>
                  <button 
                    onClick={() => handleStatusChange(learner.id, 'absent')}
                    style={{
                      padding: '12px 16px',
                      fontSize: '18px',
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: learner.status === 'absent' ? '#e53e3e' : '#f7fafc',
                      color: learner.status === 'absent' ? 'white' : '#4a5568',
                      border: learner.status === 'absent' ? 'none' : '1px solid #e2e8f0',
                      transition: 'all 0.2s ease',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    Absent
                  </button>
                  <button 
                    onClick={() => handleStatusChange(learner.id, 'excused')}
                    style={{
                      padding: '12px 16px',
                      fontSize: '18px',
                      fontWeight: '700',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      backgroundColor: learner.status === 'excused' ? '#d69e2e' : '#f7fafc',
                      color: learner.status === 'excused' ? 'white' : '#4a5568',
                      border: learner.status === 'excused' ? 'none' : '1px solid #e2e8f0',
                      transition: 'all 0.2s ease',
                      letterSpacing: '-0.025em'
                    }}
                  >
                    Excused
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '16px',
          textAlign: 'center'
        }}>
          <button 
            onClick={addNewLearner}
            style={{ 
              padding: '16px 32px', 
              backgroundColor: 'white', 
              color: '#38a169', 
              border: '2px solid #38a169', 
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: '700',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              minWidth: '200px',
              letterSpacing: '-0.025em'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#38a169';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#38a169';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            Add New Learner
          </button>
          
          <button 
            onClick={sendEmail}
            style={{ 
              padding: '16px 32px', 
              backgroundColor: '#3182ce', 
              color: 'white', 
              border: 'none', 
              borderRadius: '12px',
              cursor: 'pointer',
              fontSize: '20px',
              fontWeight: '700',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.2s ease',
              minWidth: '200px',
              letterSpacing: '-0.025em'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#2c5282';
              e.target.style.transform = 'translateY(-1px)';
              e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#3182ce';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            Send Email Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
