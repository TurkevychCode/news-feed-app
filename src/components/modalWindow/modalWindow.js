import {useState} from "react";

export default function ModalWindow({closeModal, users}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedUser, setSelectedUser] = useState('');

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
                selectedUser,
            }),
        });
        console.log('Server response:', response)
    }

    function handleSelect(event) {
        setSelectedUser(event.target.value)
    }

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-overlay-modal'>
                <form className='modal-overlay-modal-form' onSubmit={handleSubmit}>
                    <label className='modal-overlay-modal-title'>Title</label>
                    <div className="modal-overlay-modal-field">
                        <input className='modal-overlay-modal-field-inputForm'
                               type="text"
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="modal-overlay-modal-field-line">
                        </div>
                    </div>
                    <label className='modal-overlay-modal-title'>Description</label>
                    <div className="modal-overlay-modal-field">
                        <input className='modal-overlay-modal-field-inputForm'
                               type="text"
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="modal-overlay-modal-field-line">
                        </div>
                    </div>
                </form>
                <p className='modal-overlay-modal-title'>User</p>
                <select className='modal-overlay-modal-select'
                        value={selectedUser}
                        onChange={handleSelect}>
                    {
                        users.map((user, id) => (
                            <option key={id} className='modal-overlay-modal-select-option' value={user.id}>
                                {user.name}
                            </option>
                        ))
                    }
                </select>
                <button onClick={handleSubmit} type="submit" className='modal-overlay-modal-button'>Submit</button>
            </div>
        </div>
    );
}