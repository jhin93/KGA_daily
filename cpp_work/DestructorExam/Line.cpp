#include "Line.hpp"

CLine::CLine()
{
    cout << "CLine Object is being created" << endl;
    m_pstrLineName = new char[16];
}

CLine::~CLine() // 메모리에서 해제될 때 실행
{
    cout << "CLine Object is being deleted" << endl;
    if(m_pstrLineName != NULL)
    {
        delete m_pstrLineName;
    }
}

void CLine::SetLength(double len)
{
    m_dLength = len;
}

double CLine::GetLength()
{
    return m_dLength;
}