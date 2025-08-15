/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FsxS3AccessPointAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#name FsxS3AccessPointAttachment#name}
  */
  readonly name: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#region FsxS3AccessPointAttachment#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}
  */
  readonly type: string;
  /**
  * openzfs_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#openzfs_configuration FsxS3AccessPointAttachment#openzfs_configuration}
  */
  readonly openzfsConfiguration?: FsxS3AccessPointAttachmentOpenzfsConfiguration[] | cdktf.IResolvable;
  /**
  * s3_access_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#s3_access_point FsxS3AccessPointAttachment#s3_access_point}
  */
  readonly s3AccessPoint?: FsxS3AccessPointAttachmentS3AccessPoint[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#timeouts FsxS3AccessPointAttachment#timeouts}
  */
  readonly timeouts?: FsxS3AccessPointAttachmentTimeouts;
}
export interface FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#gid FsxS3AccessPointAttachment#gid}
  */
  readonly gid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#secondary_gids FsxS3AccessPointAttachment#secondary_gids}
  */
  readonly secondaryGids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#uid FsxS3AccessPointAttachment#uid}
  */
  readonly uid: number;
}

export function fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserToTerraform(struct?: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gid: cdktf.numberToTerraform(struct!.gid),
    secondary_gids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.secondaryGids),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_gids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.secondaryGids),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._secondaryGids !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryGids = this._secondaryGids;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gid = undefined;
      this._secondaryGids = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gid = value.gid;
      this._secondaryGids = value.secondaryGids;
      this._uid = value.uid;
    }
  }

  // gid - computed: false, optional: false, required: true
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // secondary_gids - computed: false, optional: true, required: false
  private _secondaryGids?: number[]; 
  public get secondaryGids() {
    return this.getNumberListAttribute('secondary_gids');
  }
  public set secondaryGids(value: number[]) {
    this._secondaryGids = value;
  }
  public resetSecondaryGids() {
    this._secondaryGids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryGidsInput() {
    return this._secondaryGids;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList extends cdktf.ComplexList {
  public internalValue? : FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference {
    return new FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#type FsxS3AccessPointAttachment#type}
  */
  readonly type: string;
  /**
  * posix_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#posix_user FsxS3AccessPointAttachment#posix_user}
  */
  readonly posixUser?: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser[] | cdktf.IResolvable;
}

export function fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityToTerraform(struct?: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    posix_user: cdktf.listMapper(fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserToTerraform, true)(struct!.posixUser),
  }
}


export function fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    posix_user: {
      value: cdktf.listMapperHcl(fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserToHclTerraform, true)(struct!.posixUser),
      isBlock: true,
      type: "list",
      storageClassType: "FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._posixUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixUser = this._posixUser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._posixUser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._posixUser.internalValue = value.posixUser;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // posix_user - computed: false, optional: true, required: false
  private _posixUser = new FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUserList(this, "posix_user", false);
  public get posixUser() {
    return this._posixUser;
  }
  public putPosixUser(value: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityPosixUser[] | cdktf.IResolvable) {
    this._posixUser.internalValue = value;
  }
  public resetPosixUser() {
    this._posixUser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixUserInput() {
    return this._posixUser.internalValue;
  }
}

export class FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList extends cdktf.ComplexList {
  public internalValue? : FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference {
    return new FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxS3AccessPointAttachmentOpenzfsConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#volume_id FsxS3AccessPointAttachment#volume_id}
  */
  readonly volumeId: string;
  /**
  * file_system_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#file_system_identity FsxS3AccessPointAttachment#file_system_identity}
  */
  readonly fileSystemIdentity?: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity[] | cdktf.IResolvable;
}

export function fsxS3AccessPointAttachmentOpenzfsConfigurationToTerraform(struct?: FsxS3AccessPointAttachmentOpenzfsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    file_system_identity: cdktf.listMapper(fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityToTerraform, true)(struct!.fileSystemIdentity),
  }
}


export function fsxS3AccessPointAttachmentOpenzfsConfigurationToHclTerraform(struct?: FsxS3AccessPointAttachmentOpenzfsConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_system_identity: {
      value: cdktf.listMapperHcl(fsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityToHclTerraform, true)(struct!.fileSystemIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxS3AccessPointAttachmentOpenzfsConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._fileSystemIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemIdentity = this._fileSystemIdentity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentOpenzfsConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeId = undefined;
      this._fileSystemIdentity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeId = value.volumeId;
      this._fileSystemIdentity.internalValue = value.fileSystemIdentity;
    }
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // file_system_identity - computed: false, optional: true, required: false
  private _fileSystemIdentity = new FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentityList(this, "file_system_identity", false);
  public get fileSystemIdentity() {
    return this._fileSystemIdentity;
  }
  public putFileSystemIdentity(value: FsxS3AccessPointAttachmentOpenzfsConfigurationFileSystemIdentity[] | cdktf.IResolvable) {
    this._fileSystemIdentity.internalValue = value;
  }
  public resetFileSystemIdentity() {
    this._fileSystemIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdentityInput() {
    return this._fileSystemIdentity.internalValue;
  }
}

export class FsxS3AccessPointAttachmentOpenzfsConfigurationList extends cdktf.ComplexList {
  public internalValue? : FsxS3AccessPointAttachmentOpenzfsConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference {
    return new FsxS3AccessPointAttachmentOpenzfsConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#vpc_id FsxS3AccessPointAttachment#vpc_id}
  */
  readonly vpcId?: string;
}

export function fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToHclTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcId = value.vpcId;
    }
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList extends cdktf.ComplexList {
  public internalValue? : FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference {
    return new FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxS3AccessPointAttachmentS3AccessPoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#policy FsxS3AccessPointAttachment#policy}
  */
  readonly policy?: string;
  /**
  * vpc_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#vpc_configuration FsxS3AccessPointAttachment#vpc_configuration}
  */
  readonly vpcConfiguration?: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration[] | cdktf.IResolvable;
}

export function fsxS3AccessPointAttachmentS3AccessPointToTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    vpc_configuration: cdktf.listMapper(fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToTerraform, true)(struct!.vpcConfiguration),
  }
}


export function fsxS3AccessPointAttachmentS3AccessPointToHclTerraform(struct?: FsxS3AccessPointAttachmentS3AccessPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_configuration: {
      value: cdktf.listMapperHcl(fsxS3AccessPointAttachmentS3AccessPointVpcConfigurationToHclTerraform, true)(struct!.vpcConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentS3AccessPointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FsxS3AccessPointAttachmentS3AccessPoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._vpcConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConfiguration = this._vpcConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentS3AccessPoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._vpcConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._vpcConfiguration.internalValue = value.vpcConfiguration;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // vpc_configuration - computed: false, optional: true, required: false
  private _vpcConfiguration = new FsxS3AccessPointAttachmentS3AccessPointVpcConfigurationList(this, "vpc_configuration", false);
  public get vpcConfiguration() {
    return this._vpcConfiguration;
  }
  public putVpcConfiguration(value: FsxS3AccessPointAttachmentS3AccessPointVpcConfiguration[] | cdktf.IResolvable) {
    this._vpcConfiguration.internalValue = value;
  }
  public resetVpcConfiguration() {
    this._vpcConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigurationInput() {
    return this._vpcConfiguration.internalValue;
  }
}

export class FsxS3AccessPointAttachmentS3AccessPointList extends cdktf.ComplexList {
  public internalValue? : FsxS3AccessPointAttachmentS3AccessPoint[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FsxS3AccessPointAttachmentS3AccessPointOutputReference {
    return new FsxS3AccessPointAttachmentS3AccessPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FsxS3AccessPointAttachmentTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#create FsxS3AccessPointAttachment#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#delete FsxS3AccessPointAttachment#delete}
  */
  readonly delete?: string;
}

export function fsxS3AccessPointAttachmentTimeoutsToTerraform(struct?: FsxS3AccessPointAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function fsxS3AccessPointAttachmentTimeoutsToHclTerraform(struct?: FsxS3AccessPointAttachmentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FsxS3AccessPointAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FsxS3AccessPointAttachmentTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FsxS3AccessPointAttachmentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment aws_fsx_s3_access_point_attachment}
*/
export class FsxS3AccessPointAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_fsx_s3_access_point_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FsxS3AccessPointAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FsxS3AccessPointAttachment to import
  * @param importFromId The id of the existing FsxS3AccessPointAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FsxS3AccessPointAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_fsx_s3_access_point_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/fsx_s3_access_point_attachment aws_fsx_s3_access_point_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FsxS3AccessPointAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: FsxS3AccessPointAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_fsx_s3_access_point_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._region = config.region;
    this._type = config.type;
    this._openzfsConfiguration.internalValue = config.openzfsConfiguration;
    this._s3AccessPoint.internalValue = config.s3AccessPoint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // s3_access_point_alias - computed: true, optional: false, required: false
  public get s3AccessPointAlias() {
    return this.getStringAttribute('s3_access_point_alias');
  }

  // s3_access_point_arn - computed: true, optional: false, required: false
  public get s3AccessPointArn() {
    return this.getStringAttribute('s3_access_point_arn');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // openzfs_configuration - computed: false, optional: true, required: false
  private _openzfsConfiguration = new FsxS3AccessPointAttachmentOpenzfsConfigurationList(this, "openzfs_configuration", false);
  public get openzfsConfiguration() {
    return this._openzfsConfiguration;
  }
  public putOpenzfsConfiguration(value: FsxS3AccessPointAttachmentOpenzfsConfiguration[] | cdktf.IResolvable) {
    this._openzfsConfiguration.internalValue = value;
  }
  public resetOpenzfsConfiguration() {
    this._openzfsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openzfsConfigurationInput() {
    return this._openzfsConfiguration.internalValue;
  }

  // s3_access_point - computed: false, optional: true, required: false
  private _s3AccessPoint = new FsxS3AccessPointAttachmentS3AccessPointList(this, "s3_access_point", false);
  public get s3AccessPoint() {
    return this._s3AccessPoint;
  }
  public putS3AccessPoint(value: FsxS3AccessPointAttachmentS3AccessPoint[] | cdktf.IResolvable) {
    this._s3AccessPoint.internalValue = value;
  }
  public resetS3AccessPoint() {
    this._s3AccessPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessPointInput() {
    return this._s3AccessPoint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FsxS3AccessPointAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FsxS3AccessPointAttachmentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      openzfs_configuration: cdktf.listMapper(fsxS3AccessPointAttachmentOpenzfsConfigurationToTerraform, true)(this._openzfsConfiguration.internalValue),
      s3_access_point: cdktf.listMapper(fsxS3AccessPointAttachmentS3AccessPointToTerraform, true)(this._s3AccessPoint.internalValue),
      timeouts: fsxS3AccessPointAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      openzfs_configuration: {
        value: cdktf.listMapperHcl(fsxS3AccessPointAttachmentOpenzfsConfigurationToHclTerraform, true)(this._openzfsConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxS3AccessPointAttachmentOpenzfsConfigurationList",
      },
      s3_access_point: {
        value: cdktf.listMapperHcl(fsxS3AccessPointAttachmentS3AccessPointToHclTerraform, true)(this._s3AccessPoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FsxS3AccessPointAttachmentS3AccessPointList",
      },
      timeouts: {
        value: fsxS3AccessPointAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FsxS3AccessPointAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
