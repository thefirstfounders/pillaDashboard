import FallbackImage from '@/components/Common/ImageWrapper'
import React from 'react'

export default function CardEmptyState() {
  return (
    <div
            className="d-flex justify-content-center flex-column align-items-center animate__bounceIn animate__animated"
            style={{ minHeight: "45vh" }}
          >
            <div className="mb-4">
              <FallbackImage
                src="/Images/Icon/Empty.png"
                width={219}
                height={101}
              />
            </div>
            <div className="grayII font-2">
              <p className="mb-0">
                You currently have no debit cards to your account.{" "}
              </p>
              <p>
                Click the &#39;Create Card&#39; button to create a new card.
              </p>
            </div>
          </div>
  )
}
