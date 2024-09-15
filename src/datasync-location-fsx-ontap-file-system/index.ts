// https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatasyncLocationFsxOntapFileSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#id DatasyncLocationFsxOntapFileSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#security_group_arns DatasyncLocationFsxOntapFileSystem#security_group_arns}
  */
  readonly securityGroupArns: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#storage_virtual_machine_arn DatasyncLocationFsxOntapFileSystem#storage_virtual_machine_arn}
  */
  readonly storageVirtualMachineArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#subdirectory DatasyncLocationFsxOntapFileSystem#subdirectory}
  */
  readonly subdirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#tags DatasyncLocationFsxOntapFileSystem#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#tags_all DatasyncLocationFsxOntapFileSystem#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * protocol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#protocol DatasyncLocationFsxOntapFileSystem#protocol}
  */
  readonly protocol: DatasyncLocationFsxOntapFileSystemProtocol;
}
export interface DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#version DatasyncLocationFsxOntapFileSystem#version}
  */
  readonly version?: string;
}

export function datasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions): any {
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

export class DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions | undefined) {
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
export interface DatasyncLocationFsxOntapFileSystemProtocolNfs {
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#mount_options DatasyncLocationFsxOntapFileSystem#mount_options}
  */
  readonly mountOptions: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions;
}

export function datasyncLocationFsxOntapFileSystemProtocolNfsToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_options: datasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsToTerraform(struct!.mountOptions),
  }
}


export function datasyncLocationFsxOntapFileSystemProtocolNfsToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_options: {
      value: datasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolNfs | undefined) {
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
  private _mountOptions = new DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationFsxOntapFileSystemProtocolNfsMountOptions) {
    this._mountOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }
}
export interface DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#version DatasyncLocationFsxOntapFileSystem#version}
  */
  readonly version?: string;
}

export function datasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function datasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions): any {
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

export class DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions | undefined) {
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
export interface DatasyncLocationFsxOntapFileSystemProtocolSmb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#domain DatasyncLocationFsxOntapFileSystem#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#password DatasyncLocationFsxOntapFileSystem#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#user DatasyncLocationFsxOntapFileSystem#user}
  */
  readonly user: string;
  /**
  * mount_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#mount_options DatasyncLocationFsxOntapFileSystem#mount_options}
  */
  readonly mountOptions: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions;
}

export function datasyncLocationFsxOntapFileSystemProtocolSmbToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
    mount_options: datasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsToTerraform(struct!.mountOptions),
  }
}


export function datasyncLocationFsxOntapFileSystemProtocolSmbToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference | DatasyncLocationFsxOntapFileSystemProtocolSmb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: datasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsToHclTerraform(struct!.mountOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOntapFileSystemProtocolSmb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._mountOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocolSmb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._password = undefined;
      this._user = undefined;
      this._mountOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._password = value.password;
      this._user = value.user;
      this._mountOptions.internalValue = value.mountOptions;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // mount_options - computed: false, optional: false, required: true
  private _mountOptions = new DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptionsOutputReference(this, "mount_options");
  public get mountOptions() {
    return this._mountOptions;
  }
  public putMountOptions(value: DatasyncLocationFsxOntapFileSystemProtocolSmbMountOptions) {
    this._mountOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions.internalValue;
  }
}
export interface DatasyncLocationFsxOntapFileSystemProtocol {
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#nfs DatasyncLocationFsxOntapFileSystem#nfs}
  */
  readonly nfs?: DatasyncLocationFsxOntapFileSystemProtocolNfs;
  /**
  * smb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#smb DatasyncLocationFsxOntapFileSystem#smb}
  */
  readonly smb?: DatasyncLocationFsxOntapFileSystemProtocolSmb;
}

export function datasyncLocationFsxOntapFileSystemProtocolToTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolOutputReference | DatasyncLocationFsxOntapFileSystemProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nfs: datasyncLocationFsxOntapFileSystemProtocolNfsToTerraform(struct!.nfs),
    smb: datasyncLocationFsxOntapFileSystemProtocolSmbToTerraform(struct!.smb),
  }
}


export function datasyncLocationFsxOntapFileSystemProtocolToHclTerraform(struct?: DatasyncLocationFsxOntapFileSystemProtocolOutputReference | DatasyncLocationFsxOntapFileSystemProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nfs: {
      value: datasyncLocationFsxOntapFileSystemProtocolNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncLocationFsxOntapFileSystemProtocolNfsList",
    },
    smb: {
      value: datasyncLocationFsxOntapFileSystemProtocolSmbToHclTerraform(struct!.smb),
      isBlock: true,
      type: "list",
      storageClassType: "DatasyncLocationFsxOntapFileSystemProtocolSmbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatasyncLocationFsxOntapFileSystemProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatasyncLocationFsxOntapFileSystemProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._smb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smb = this._smb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatasyncLocationFsxOntapFileSystemProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfs.internalValue = undefined;
      this._smb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfs.internalValue = value.nfs;
      this._smb.internalValue = value.smb;
    }
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DatasyncLocationFsxOntapFileSystemProtocolNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DatasyncLocationFsxOntapFileSystemProtocolNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // smb - computed: false, optional: true, required: false
  private _smb = new DatasyncLocationFsxOntapFileSystemProtocolSmbOutputReference(this, "smb");
  public get smb() {
    return this._smb;
  }
  public putSmb(value: DatasyncLocationFsxOntapFileSystemProtocolSmb) {
    this._smb.internalValue = value;
  }
  public resetSmb() {
    this._smb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbInput() {
    return this._smb.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system aws_datasync_location_fsx_ontap_file_system}
*/
export class DatasyncLocationFsxOntapFileSystem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datasync_location_fsx_ontap_file_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatasyncLocationFsxOntapFileSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatasyncLocationFsxOntapFileSystem to import
  * @param importFromId The id of the existing DatasyncLocationFsxOntapFileSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatasyncLocationFsxOntapFileSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datasync_location_fsx_ontap_file_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.67.0/docs/resources/datasync_location_fsx_ontap_file_system aws_datasync_location_fsx_ontap_file_system} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatasyncLocationFsxOntapFileSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DatasyncLocationFsxOntapFileSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datasync_location_fsx_ontap_file_system',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.67.0',
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
    this._id = config.id;
    this._securityGroupArns = config.securityGroupArns;
    this._storageVirtualMachineArn = config.storageVirtualMachineArn;
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

  // fsx_filesystem_arn - computed: true, optional: false, required: false
  public get fsxFilesystemArn() {
    return this.getStringAttribute('fsx_filesystem_arn');
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

  // storage_virtual_machine_arn - computed: false, optional: false, required: true
  private _storageVirtualMachineArn?: string; 
  public get storageVirtualMachineArn() {
    return this.getStringAttribute('storage_virtual_machine_arn');
  }
  public set storageVirtualMachineArn(value: string) {
    this._storageVirtualMachineArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageVirtualMachineArnInput() {
    return this._storageVirtualMachineArn;
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
  private _protocol = new DatasyncLocationFsxOntapFileSystemProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DatasyncLocationFsxOntapFileSystemProtocol) {
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
      id: cdktf.stringToTerraform(this._id),
      security_group_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupArns),
      storage_virtual_machine_arn: cdktf.stringToTerraform(this._storageVirtualMachineArn),
      subdirectory: cdktf.stringToTerraform(this._subdirectory),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      protocol: datasyncLocationFsxOntapFileSystemProtocolToTerraform(this._protocol.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      storage_virtual_machine_arn: {
        value: cdktf.stringToHclTerraform(this._storageVirtualMachineArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: datasyncLocationFsxOntapFileSystemProtocolToHclTerraform(this._protocol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatasyncLocationFsxOntapFileSystemProtocolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
