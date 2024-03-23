'use client'

import React, { useTransition } from 'react'
import { Button } from '@app/ui/components'
import { followUser } from '@app/lib/actions/users'
import { useParams } from 'next/navigation'
import { FollowButtonProps } from './follow-button.type'

export const FollowButton: React.FC<FollowButtonProps> = ({
  isFollowed,
  isFollowing,
}) => {
  const params = useParams()
  const username = params.username as string

  const [pending, start] = useTransition()

  return (
    <Button
      className="w-24 !p-0.5 text-xs !font-bold"
      variant={isFollowed ? 'secondary' : 'primary'}
      isLoading={pending}
      onClick={() => start(async () => followUser(username))}
    >
      {isFollowed ? 'Unfollow' : isFollowing ? 'Follow Back' : 'Follow'}
    </Button>
  )
}
