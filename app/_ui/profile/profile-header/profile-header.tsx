'use client'

import React from 'react'
import { Avatar } from '@app/ui/components'
import { getFullname } from '@app/lib/utils'
import { LuCalendarDays } from 'react-icons/lu'
import { format } from 'date-fns'
import { TbLink } from 'react-icons/tb'
import Link from 'next/link'
import { FollowButton } from '../follow-button'
import Image from 'next/image'
import { MdOutlineVerified } from 'react-icons/md'
import { ProfileHeaderProps } from './profile-header.type'

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  followersCount,
  followingCount,
  profileImage,
  isFollowing,
  isVerified,
  isFollowed,
  createdAt,
  firstName,
  lastName,
  username,
  isOwner,
  website = 'pulsehub.com',
  // posts,
  image,
  bio = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
}) => {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white">
      <div className="relative h-[20vh] w-full bg-gradient-to-r from-[#ff80b5] to-primary opacity-20 md:h-[25vh]">
        {profileImage && (
          <Image
            alt={'profile-background'}
            fill
            className="object-cover"
            src={profileImage}
          />
        )}
      </div>

      <div>
        <div className="rounded-b-2xl border border-stroke-1 px-4 pb-4 text-gray-5 md:px-12 md:pb-12">
          <div className="flex flex-row justify-between">
            <Avatar
              name={getFullname({ firstName, lastName })}
              src={image}
              className="relative z-10 -mt-20 h-24 w-24 md:-mt-24 md:h-32 md:w-32"
            />

            <div className="py-4">
              {!isOwner && (
                <FollowButton
                  isFollowed={isFollowed}
                  isFollowing={isFollowing}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <div className="flex flex-row flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex flex-row items-center gap-1">
                  <p className="text-xl font-bold leading-6 text-gray-9">
                    {getFullname({ firstName, lastName })}
                  </p>
                  {isVerified && (
                    <MdOutlineVerified className="h-5 w-5 fill-primary" />
                  )}
                </div>
                <p className="text-sm">@{username}</p>
              </div>

              <div className="flex flex-row flex-wrap gap-x-10 text-sm">
                {/* <span className="space-x-1">
                  <span className="font-bold text-gray-9">{posts || 0}</span>
                  <span>Posts</span>
                </span> */}

                <span className="space-x-1">
                  <span className="font-bold text-gray-9">
                    {Number(followersCount)}
                  </span>
                  <span>Followers</span>
                </span>

                <span className="space-x-1">
                  <span className="font-bold text-gray-9">
                    {Number(followingCount)}
                  </span>
                  <span>Following</span>
                </span>
              </div>
            </div>

            {bio && <p className="text-sm text-gray-9">{bio}</p>}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {website && (
                <div className="flex items-center space-x-1">
                  <TbLink className="h-4 w-4 stroke-gray-5" />
                  <Link
                    className="text-sm font-medium leading-3 text-purple-3"
                    href={website}
                    target="_blanc"
                  >
                    {website}
                  </Link>
                </div>
              )}

              <div className="flex items-center space-x-1 text-gray-5">
                <LuCalendarDays className="h-4 w-4 stroke-gray-5" />
                <p className="text-sm font-medium leading-3 ">
                  Joined {format(createdAt || new Date(), 'MMMM yyyy')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
