/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationFsxOpenzfsFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#fsx_filesystem_arn DatasyncLocationFsxOpenzfsFileSystem#fsx_filesystem_arn}
  */
  readonly fsxFilesystemArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#id DatasyncLocationFsxOpenzfsFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#security_group_arns DatasyncLocationFsxOpenzfsFileSystem#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#subdirectory DatasyncLocationFsxOpenzfsFileSystem#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#tags DatasyncLocationFsxOpenzfsFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#tags_all DatasyncLocationFsxOpenzfsFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#protocol DatasyncLocationFsxOpenzfsFileSystem#protocol}
  */
  readonly protocol: DatasyncLocationFsxOpenzfsFileSystemProtocol;
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#version DatasyncLocationFsxOpenzfsFileSystem#version}
  */
  readonly version?: string;
}

export function datasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsToTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocolNfs {
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#mount_options DatasyncLocationFsxOpenzfsFileSystem#mount_options}
  */
  readonly mountOptions: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions;
}

export function datasyncLocationFsxOpenzfsFileSystemProtocolNfsToTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: datasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsToTerraform(struct!.mountOptions),
  }
}


export function datasyncLocationFsxOpenzfsFileSystemProtocolNfsToHclTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocolNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: datasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOpenzfsFileSystemProtocolNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mountOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mountOptions.internalValue = value.mountOptions;
    }
  }

  // mount_options - computed: false, optional: false, required: true
  private _mountOptions = new DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfsMountOptions) {
    this._mountOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }
}
export interface DatasyncLocationFsxOpenzfsFileSystemProtocol {
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#nfs DatasyncLocationFsxOpenzfsFileSystem#nfs}
  */
  readonly nfs: DatasyncLocationFsxOpenzfsFileSystemProtocolNfs;
}

export function datasyncLocationFsxOpenzfsFileSystemProtocolToTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nfs: datasyncLocationFsxOpenzfsFileSystemProtocolNfsToTerraform(struct!.nfs),
  }
}


export function datasyncLocationFsxOpenzfsFileSystemProtocolToHclTerraform(struct?: DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference | DatasyncLocationFsxOpenzfsFileSystemProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nfs: {
      value: datasyncLocationFsxOpenzfsFileSystemProtocolNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncLocationFsxOpenzfsFileSystemProtocolNfsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOpenzfsFileSystemProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOpenzfsFileSystemProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfs.internalValue = value.nfs;
    }
  }

  // nfs - computed: false, optional: false, required: true
  private _nfs = new DatasyncLocationFsxOpenzfsFileSystemProtocolNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DatasyncLocationFsxOpenzfsFileSystemProtocolNfs) {
    this._nfs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system aws_datasync_location_fsx_openzfs_file_system}
*/
export class DatasyncLocationFsxOpenzfsFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_fsx_openzfs_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncLocationFsxOpenzfsFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationFsxOpenzfsFileSystem to import
  * @param importFromId The id of the existing DatasyncLocationFsxOpenzfsFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationFsxOpenzfsFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_fsx_openzfs_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/datasync_location_fsx_openzfs_file_system aws_datasync_location_fsx_openzfs_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationFsxOpenzfsFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationFsxOpenzfsFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_fsx_openzfs_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fsxFilesystemArn = config.fsxFilesystemArn;
    this._id = config.id;
    this._securityGroupArns = config.securityGroupArns;
    this._subdirectory = config.subdirectory;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._protocol.internalValue = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // fsx_filesystem_arn - computed: false, optional: false, required: true
  private _fsxFilesystemArn?: string; 
  public get fsxFilesystemArn() {
    return this.getStringAttribute('fsx_filesystem_arn');
  }
  public set fsxFilesystemArn(value: string) {
    this._fsxFilesystemArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fsxFilesystemArnInput() {
    return this._fsxFilesystemArn;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // security_group_arns - computed: false, optional: false, required: true
  private _securityGroupArns?: string[]; 
  public get securityGroupArns() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_arns'));
  }
  public set securityGroupArns(value: string[]) {
    this._securityGroupArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupArnsInput() {
    return this._securityGroupArns;
  }

  // subdirectory - computed: true, optional: true, required: false
  private _subdirectory?: string; 
  public get subdirectory() {
    return this.getStringAttribute('subdirectory');
  }
  public set subdirectory(value: string) {
    this._subdirectory = value;
  }
  public resetSubdirectory() {
    this._subdirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subdirectoryInput() {
    return this._subdirectory;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol = new DatasyncLocationFsxOpenzfsFileSystemProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DatasyncLocationFsxOpenzfsFileSystemProtocol) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fsx_filesystem_arn: cdktf.stringToTerraform(this._fsxFilesystemArn),
      id: cdktf.stringToTerraform(this._id),
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupArns),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      protocol: datasyncLocationFsxOpenzfsFileSystemProtocolToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fsx_filesystem_arn: {
        value: cdktf.stringToHclTerraform(this._fsxFilesystemArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_arns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupArns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      subdirectory: {
        value: cdktf.stringToHclTerraform(this._subdirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      protocol: {
        value: datasyncLocationFsxOpenzfsFileSystemProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncLocationFsxOpenzfsFileSystemProtocolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
