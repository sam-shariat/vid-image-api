import { ImageResponse } from '@vercel/og';
// eslint-disable-next-line @next/next/no-server-import-in-page
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const OgImageHandler = async (req) => {
  const { pathname } = new URL(req.url);
  const name = pathname;
  const title = pathname.slice(5, -4);
  const subtitle = pathname.slice(-4);

  return new ImageResponse(
    (
      <div
        style={{
          background:
            '#161618',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          display: 'flex',
        }}>
        
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={'venom id logo'}
            width={70}
            height={60}
            style={{position:'absolute',top:30,left:30}}
            src={'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEzNDggMTA4OCIgd2lkdGg9IjEzNDgiIGhlaWdodD0iMTA4OCI+Cgk8dGl0bGU+VmVub20gSUQgTG9nbzwvdGl0bGU+Cgk8ZGVmcz4KCQk8bGluZWFyR3JhZGllbnQgaWQ9ImcxIiB4Mj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNTY4LjE2Miw4MTguNzI0LC00MTcuNzA3LDI4OS44NzIsODc0LjAxLC0zMDkuNDExKSI+CgkJCTxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFmYjU3MyIvPgoJCQk8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDc2NzUiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxsaW5lYXJHcmFkaWVudCBpZD0iZzIiIHgyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg1MzIuODk0LC04MzcuMDYsNDE2LjQ4NywyNjUuMTQ3LC02NS41ODIsNTAyLjc0OCkiPgoJCQk8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxMzc0ODciLz4KCQkJPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBhOGI0Ii8+CgkJPC9saW5lYXJHcmFkaWVudD4KCTwvZGVmcz4KCTxzdHlsZT4KCQkuczAgeyBmaWxsOiB1cmwoI2cxKSB9IAoJCS5zMSB7IGZpbGw6IHVybCgjZzIpIH0gCgk8L3N0eWxlPgoJPGcgaWQ9IkxheWVyIDEiPgoJCTxnIGlkPSImbHQ7R3JvdXAmZ3Q7Ij4KCQkJPHBhdGggaWQ9IiZsdDtDb21wb3VuZCBQYXRoJmd0OyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iczAiIGQ9Im05MDUuMiA5MTAuMWwtNi45IDEwLjdjLTUwIDc3LjMtMTMzLjQgMTIwLjMtMjE5LjMgMTIyLjRxLTIuOCAwLTUuNiAwLTIuOSAwLTUuOCAwYy04NS44LTIuMS0xNjkuMi00NS4xLTIxOS4zLTEyMi40bC02LjgtMTAuNi0yOTIuMS00NTEuNWMtODMuNS0xMjktNDEuNy0zMDMuNiA5NC41LTM3OS45IDEyNC4xLTY5LjYgMjgxLjMtMjYuOSAzNTguNiA5Mi41bDcwLjggMTA5LjUgNjAuMSA5Mi45IDE2NS40IDI1NS42YzEyLjQgMTkuMiAyMi4xIDM5LjQgMjkgNjAuMiAyNC45IDczLjkgMTUuOCAxNTQuNi0yMi42IDIyMC42em0tOTEuMS0yMjZsLTE0MC44LTIxNy42LTYwLjEtOTIuOC05OC0xNTEuNmMtNTIuNS04MS4xLTE2My43LTEwMS43LTI0Mi00Mi4yLTY4IDUxLjYtODMuNiAxNTUuMi0zNy4yIDIyNi45bDE4Mi44IDI4Mi42IDEwOC4yIDE2Ny4zYzEyLjkgMjMuMSAzMS40IDQzLjUgNTUuMiA1OC45IDI5LjMgMTkgNjIuNSAyNy42IDk1LjEgMjYuNyAzMC0wLjYgNjAuMi05LjIgODcuMi0yNi43IDIzLjgtMTUuNCA0Mi40LTM1LjkgNTUuMy01OS4yIDI5LTUyLjMgMjktMTE4LjYtNS43LTE3Mi4zeiIvPgoJCQk8cGF0aCBpZD0iJmx0O1BhdGgmZ3Q7IiBjbGFzcz0iczEiIGQ9Im0xMTE3LjggODcuOGMtMTI0LjMtODAuNC0yOTAuNy00NC43LTM3MSA3OS41bC03My41IDExMy41IDYwLjEgOTIuOSA5OC4xLTE1MS42YzUwLjEtNzcuNSAxNTQtOTkuOCAyMzEuNS00OS43IDc3LjUgNTAuMiA5OS43IDE1NC4xIDQ5LjYgMjMxLjZsLTE4NC44IDI4NS41LTEwOCAxNjYuOWMtMTIuOSAyMy4zLTMxLjUgNDMuOC01NS4zIDU5LjItMjcgMTcuNS01Ny4yIDI2LjEtODcuMiAyNi43LTMyLjYgMC45LTY1LjgtNy43LTk1LjEtMjYuNy0yMy44LTE1LjQtNDIuMy0zNS44LTU1LjItNTguOS0yOS4xLTUyLjQtMjkuMi0xMTguOCA1LjYtMTcyLjZsMTQwLjctMjE3LjYtNjAuMS05Mi44LTE2NS40IDI1NS42Yy0xMi40IDE5LjItMjIgMzkuNC0yOSA2MC4xLTI0LjkgNzQtMTUuNyAxNTQuNyAyMi43IDIyMC44bDYuOCAxMC42YzUwLjEgNzcuMyAxMzMuNSAxMjAuMyAyMTkuMyAxMjIuNHEyLjkgMCA1LjggMCAyLjggMCA1LjYgMGM4NS45LTIuMSAxNjkuMy00NS4xIDIxOS4zLTEyMi40bDYuOS0xMC43IDI5Mi4xLTQ1MS4zYzgwLjMtMTI0LjMgNDQuNy0yOTAuNy03OS41LTM3MXoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPg=='}
          />
          {subtitle !== '' && (
            <p
              style={{
                fontSize: 56,
                lineHeight: 1.1,
                position:'absolute',
                fontWeight:'bold',
                top:10,
                right:30
              }}>
                <span style={{color:'#2bb673'}}>
                {subtitle.slice(0,1)}
                </span>
                <span style={{color:'#22b288'}}>
                {subtitle.slice(1,2)}
                  
                </span>
                <span style={{color:'#1daf98'}}>
                {subtitle.slice(2,3)}
                  
                </span>
                <span style={{color:'#10a9b6'}}>
                {subtitle.slice(3,4)}
                  
                </span>
              
            </p>
          )}
        
          {title !== '' && (
            <p
              style={{
                fontSize: title.length < 10 ? 56 : title.length > 18 ? 32 : 44,
                lineHeight: 1.1,
                textAlign: 'center',
                color: '#f5f5f5',
              }}>
              {title}
            </p>
          )}
      </div>
    ),
    {
      width: 600,
      height: 600,
    }
  );
};

export default OgImageHandler;
