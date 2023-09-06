'use client'

function AdminScreen() {
    const handleUpload = async (e: any) => {
      const file =  e.target.files[0]
      const formData = new FormData;
      formData.append('file', file);
      const response = await fetch('http://localhost:3005/api/file/upload', {
          method: 'POST',
          body: formData
      });
      console.log('response', response)
    }
    return (
        <div>
            <p>asd</p>
            <input onChange={handleUpload} type="file" />
        </div>
    )
}

export default AdminScreen