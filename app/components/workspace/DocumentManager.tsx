import React, { useState, useEffect } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import NotionEditor from '~/components/editor/NotionEditor'
import { 
  FileText, 
  Plus, 
  Search, 
  MoreHorizontal, 
  Star,
  Trash2,
  Edit3,
  Calendar,
  Eye
} from 'lucide-react'
import { cn } from '~/lib/utils'

interface Document {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  isStarred?: boolean
}

const DocumentManager: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      title: 'Welcome to Your Workspace',
      content: '<h1>Welcome to Your Workspace</h1><p>Start typing to create your first document...</p>',
      createdAt: new Date(),
      updatedAt: new Date(),
      isStarred: true
    }
  ])
  
  const [activeDocument, setActiveDocument] = useState<Document | null>(documents[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [isCreatingNew, setIsCreatingNew] = useState(false)

  const filteredDocuments = documents.filter(doc => 
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const createNewDocument = () => {
    const newDoc: Document = {
      id: Date.now().toString(),
      title: 'Untitled',
      content: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    setDocuments(prev => [newDoc, ...prev])
    setActiveDocument(newDoc)
    setIsCreatingNew(false)
  }

  const updateDocument = (id: string, updates: Partial<Document>) => {
    setDocuments(prev => 
      prev.map(doc => 
        doc.id === id 
          ? { ...doc, ...updates, updatedAt: new Date() }
          : doc
      )
    )
    if (activeDocument?.id === id) {
      setActiveDocument(prev => prev ? { ...prev, ...updates, updatedAt: new Date() } : null)
    }
  }

  const deleteDocument = (id: string) => {
    setDocuments(prev => prev.filter(doc => doc.id !== id))
    if (activeDocument?.id === id) {
      setActiveDocument(documents.find(doc => doc.id !== id) || null)
    }
  }

  const toggleStar = (id: string) => {
    updateDocument(id, { 
      isStarred: !documents.find(doc => doc.id === id)?.isStarred 
    })
  }

  const formatDate = (date: Date) => {
    const now = new Date()
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    
    if (diffInHours < 1) {
      return 'Just now'
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}h ago`
    } else if (diffInHours < 48) {
      return 'Yesterday'
    } else {
      return date.toLocaleDateString()
    }
  }

  return (
    <div className="flex h-full bg-gray-50">
      {/* Documents Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Documents</h2>
            <Button
              onClick={createNewDocument}
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-9"
            />
          </div>
        </div>

        {/* Documents List */}
        <div className="flex-1 overflow-auto">
          {filteredDocuments.length === 0 ? (
            <div className="p-4 text-center text-gray-500">
              <FileText className="h-8 w-8 mx-auto mb-2 text-gray-300" />
              <p>No documents found</p>
            </div>
          ) : (
            <div className="space-y-1 p-2">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className={cn(
                    "group p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-50",
                    activeDocument?.id === doc.id && "bg-blue-50 border border-blue-200"
                  )}
                  onClick={() => setActiveDocument(doc)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <FileText className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <h3 className="text-sm font-medium text-gray-900 truncate">
                          {doc.title}
                        </h3>
                        {doc.isStarred && (
                          <Star className="h-3 w-3 text-yellow-400 fill-current flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                        {doc.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(doc.updatedAt)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleStar(doc.id)
                        }}
                      >
                        <Star className={cn(
                          "h-3 w-3",
                          doc.isStarred ? "text-yellow-400 fill-current" : "text-gray-400"
                        )} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                        onClick={(e) => {
                          e.stopPropagation()
                          deleteDocument(doc.id)
                        }}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <div className="text-xs text-gray-500 text-center">
            {documents.length} document{documents.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 flex flex-col">
        {activeDocument ? (
          <NotionEditor
            key={activeDocument.id}
            content={activeDocument.content}
            title={activeDocument.title}
            onChange={(content) => updateDocument(activeDocument.id, { content })}
            onTitleChange={(title) => updateDocument(activeDocument.id, { title })}
            className="h-full"
          />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-white">
            <div className="text-center">
              <FileText className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No document selected</h3>
              <p className="text-gray-500 mb-4">Select a document from the sidebar or create a new one</p>
              <Button onClick={createNewDocument}>
                <Plus className="h-4 w-4 mr-2" />
                Create New Document
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DocumentManager 