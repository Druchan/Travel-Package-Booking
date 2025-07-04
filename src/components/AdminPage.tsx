import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { TravelPackage } from '../types';
import { travelPackages as initialPackages } from '../data/packages';

const AdminPage: React.FC = () => {
  const [packages, setPackages] = useState<TravelPackage[]>(initialPackages);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<TravelPackage>>({});
  const [isAdding, setIsAdding] = useState(false);

  const handleEdit = (pkg: TravelPackage) => {
    setIsEditing(pkg.id);
    setEditForm(pkg);
  };

  const handleSave = () => {
    if (isAdding) {
      const newPackage: TravelPackage = {
        ...editForm as TravelPackage,
        id: Date.now().toString()
      };
      setPackages([...packages, newPackage]);
      setIsAdding(false);
    } else if (isEditing) {
      setPackages(packages.map(pkg => 
        pkg.id === isEditing ? { ...editForm as TravelPackage } : pkg
      ));
      setIsEditing(null);
    }
    setEditForm({});
  };

  const handleCancel = () => {
    setIsEditing(null);
    setIsAdding(false);
    setEditForm({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this package?')) {
      setPackages(packages.filter(pkg => pkg.id !== id));
    }
  };

  const handleInputChange = (field: keyof TravelPackage, value: any) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  const startAdding = () => {
    setIsAdding(true);
    setEditForm({
      title: '',
      destination: '',
      price: 0,
      duration: '',
      image: '',
      description: '',
      highlights: [],
      itinerary: [],
      included: [],
      excluded: []
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Package Management</h1>
              <p className="text-gray-600">Manage travel packages, pricing, and availability</p>
            </div>
            <button
              onClick={startAdding}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Package</span>
            </button>
          </div>
        </div>

        {/* Add New Package Form */}
        {isAdding && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={editForm.title || ''}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                <input
                  type="text"
                  value={editForm.destination || ''}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                  type="number"
                  value={editForm.price || 0}
                  onChange={(e) => handleInputChange('price', parseInt(e.target.value))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={editForm.duration || ''}
                  onChange={(e) => handleInputChange('duration', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={editForm.image || ''}
                  onChange={(e) => handleInputChange('image', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={editForm.description || ''}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                <X className="h-4 w-4 inline mr-1" />
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Save className="h-4 w-4 inline mr-1" />
                Save Package
              </button>
            </div>
          </div>
        )}

        {/* Packages List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Package
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {packages.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-12 w-12 rounded-lg object-cover"
                          src={pkg.image}
                          alt={pkg.title}
                        />
                        <div className="ml-4">
                          {isEditing === pkg.id ? (
                            <input
                              type="text"
                              value={editForm.title || ''}
                              onChange={(e) => handleInputChange('title', e.target.value)}
                              className="text-sm font-medium text-gray-900 border border-gray-300 rounded px-2 py-1"
                            />
                          ) : (
                            <div className="text-sm font-medium text-gray-900">{pkg.title}</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isEditing === pkg.id ? (
                        <input
                          type="text"
                          value={editForm.destination || ''}
                          onChange={(e) => handleInputChange('destination', e.target.value)}
                          className="text-sm text-gray-900 border border-gray-300 rounded px-2 py-1"
                        />
                      ) : (
                        <div className="text-sm text-gray-900">{pkg.destination}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isEditing === pkg.id ? (
                        <input
                          type="text"
                          value={editForm.duration || ''}
                          onChange={(e) => handleInputChange('duration', e.target.value)}
                          className="text-sm text-gray-900 border border-gray-300 rounded px-2 py-1"
                        />
                      ) : (
                        <div className="text-sm text-gray-900">{pkg.duration}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {isEditing === pkg.id ? (
                        <input
                          type="number"
                          value={editForm.price || 0}
                          onChange={(e) => handleInputChange('price', parseInt(e.target.value))}
                          className="text-sm text-gray-900 border border-gray-300 rounded px-2 py-1 w-24"
                        />
                      ) : (
                        <div className="text-sm font-medium text-green-600">${pkg.price}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {isEditing === pkg.id ? (
                        <div className="flex space-x-2">
                          <button
                            onClick={handleSave}
                            className="text-green-600 hover:text-green-900"
                          >
                            <Save className="h-4 w-4" />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(pkg)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(pkg.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Note:</strong> Changes made here are for demonstration purposes only. 
            In a production environment, these would be saved to a database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;