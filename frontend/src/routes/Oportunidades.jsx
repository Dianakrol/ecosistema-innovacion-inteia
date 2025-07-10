import { useEffect, useState } from 'react'

export default function Oportunidades() {
  const [oportunidades, setOportunidades] = useState([])
  const [expandedRow, setExpandedRow] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5234/api/oportunidades')
      .then(res => res.json())
      .then(data => setOportunidades(data))
      .catch(err => console.error(err))
  }, [])

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index)
  }

  const togglePostulable = (index) => {
    const updated = [...oportunidades]
    updated[index].esPostulable = !updated[index].esPostulable
    setOportunidades(updated)
  }

  return (
    <div className="w-full px-4 py-6">
      <h1 className="text-3xl font-extrabold text-indigo-600 mb-6 ">Oportunidades</h1>

      <div className="relative overflow-x-auto shadow-xl rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
          <thead className="uppercase text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-gray-400">
            <tr>
              <th className="px-6 py-4">Proceso</th>
              <th className="px-6 py-4">Descripción</th>
              <th className="px-6 py-4">Depto</th>
              <th className="px-6 py-4">Fecha Límite</th>
              <th className="px-6 py-4">Postulable</th>
              <th className="px-6 py-4">Convocatoria</th>
            </tr>
          </thead>
          <tbody>
            {oportunidades.map((o, idx) => {
              const isDisabled = !o.esPostulable
              return (
                <tr key={idx} className={`border-b dark:border-gray-700 transition-all ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}>
                  <td className="px-6 py-4 font-bold text-indigo-600 whitespace-nowrap pointer-events-auto">{o.idProceso}</td>

                  <td className="px-6 py-4 w-[300px] max-w-[300px] pointer-events-auto">
                    <div className="relative">
                      <div
                        className={`
                          overflow-hidden
                          text-gray-700 dark:text-gray-300
                          transition-[max-height] duration-700 ease-in-out
                          ${expandedRow === idx
                            ? 'max-h-[500px]'
                            : 'max-h-[2.5rem] line-clamp-2'}
                        `}
                      >
                        <p className="whitespace-pre-wrap overflow-hidden">{o.descripcion}</p>
                      </div>
                      <div className="mt-1">
                        <button
                          className="text-indigo-500 text-xs cursor-pointer hover:underline"
                          onClick={() => toggleExpand(idx)}
                        >
                          {expandedRow === idx ? 'Ver menos ▲' : 'Ver más ▼'}
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 font-medium pointer-events-auto">{o.departamento}</td>
                  <td className="px-6 py-4 pointer-events-auto">{o.fechaMaximaPostulacion}</td>

                  <td className="px-6 py-4 pointer-events-auto">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={o.esPostulable}
                        onChange={() => togglePostulable(idx)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-300 transition-colors"></div>
                    </label>
                  </td>

                  <td className="px-6 py-4 pointer-events-auto">
                    <a
                      href={o.urlConvocatoria}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:underline text-sm"
                    >
                      Ver enlace
                    </a>
                  </td>
                </tr>
              )
            })}
            {oportunidades.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center text-gray-400 py-6">No hay oportunidades disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
