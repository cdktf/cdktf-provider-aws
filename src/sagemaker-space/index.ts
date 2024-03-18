// https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerSpaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#domain_id SagemakerSpace#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#id SagemakerSpace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#space_display_name SagemakerSpace#space_display_name}
  */
  readonly spaceDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#space_name SagemakerSpace#space_name}
  */
  readonly spaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#tags SagemakerSpace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#tags_all SagemakerSpace#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * ownership_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#ownership_settings SagemakerSpace#ownership_settings}
  */
  readonly ownershipSettings?: SagemakerSpaceOwnershipSettings;
  /**
  * space_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#space_settings SagemakerSpace#space_settings}
  */
  readonly spaceSettings?: SagemakerSpaceSpaceSettings;
  /**
  * space_sharing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#space_sharing_settings SagemakerSpace#space_sharing_settings}
  */
  readonly spaceSharingSettings?: SagemakerSpaceSpaceSharingSettings;
}
export interface SagemakerSpaceOwnershipSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#owner_user_profile_name SagemakerSpace#owner_user_profile_name}
  */
  readonly ownerUserProfileName: string;
}

export function sagemakerSpaceOwnershipSettingsToTerraform(struct?: SagemakerSpaceOwnershipSettingsOutputReference | SagemakerSpaceOwnershipSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    owner_user_profile_name: cdktf.stringToTerraform(struct!.ownerUserProfileName),
  }
}


export function sagemakerSpaceOwnershipSettingsToHclTerraform(struct?: SagemakerSpaceOwnershipSettingsOutputReference | SagemakerSpaceOwnershipSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    owner_user_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.ownerUserProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceOwnershipSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceOwnershipSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ownerUserProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUserProfileName = this._ownerUserProfileName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceOwnershipSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ownerUserProfileName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ownerUserProfileName = value.ownerUserProfileName;
    }
  }

  // owner_user_profile_name - computed: false, optional: false, required: true
  private _ownerUserProfileName?: string; 
  public get ownerUserProfileName() {
    return this.getStringAttribute('owner_user_profile_name');
  }
  public set ownerUserProfileName(value: string) {
    this._ownerUserProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUserProfileNameInput() {
    return this._ownerUserProfileName;
  }
}
export interface SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerSpaceSpaceSettingsCodeEditorAppSettings {
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec;
}

export function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_resource_spec: sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerSpaceSpaceSettingsCodeEditorAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference | SagemakerSpaceSpaceSettingsCodeEditorAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_resource_spec: {
      value: sagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsCodeEditorAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#file_system_id SagemakerSpace#file_system_id}
  */
  readonly fileSystemId: string;
}

export function sagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemToTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference | SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system_id: cdktf.stringToTerraform(struct!.fileSystemId),
  }
}


export function sagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference | SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system_id: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemId = this._fileSystemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystemId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystemId = value.fileSystemId;
    }
  }

  // file_system_id - computed: false, optional: false, required: true
  private _fileSystemId?: string; 
  public get fileSystemId() {
    return this.getStringAttribute('file_system_id');
  }
  public set fileSystemId(value: string) {
    this._fileSystemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemIdInput() {
    return this._fileSystemId;
  }
}
export interface SagemakerSpaceSpaceSettingsCustomFileSystem {
  /**
  * efs_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#efs_file_system SagemakerSpace#efs_file_system}
  */
  readonly efsFileSystem: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem;
}

export function sagemakerSpaceSpaceSettingsCustomFileSystemToTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    efs_file_system: sagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemToTerraform(struct!.efsFileSystem),
  }
}


export function sagemakerSpaceSpaceSettingsCustomFileSystemToHclTerraform(struct?: SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    efs_file_system: {
      value: sagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemToHclTerraform(struct!.efsFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._efsFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.efsFileSystem = this._efsFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsCustomFileSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._efsFileSystem.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._efsFileSystem.internalValue = value.efsFileSystem;
    }
  }

  // efs_file_system - computed: false, optional: false, required: true
  private _efsFileSystem = new SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystemOutputReference(this, "efs_file_system");
  public get efsFileSystem() {
    return this._efsFileSystem;
  }
  public putEfsFileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystemEfsFileSystem) {
    this._efsFileSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get efsFileSystemInput() {
    return this._efsFileSystem.internalValue;
  }
}

export class SagemakerSpaceSpaceSettingsCustomFileSystemList extends cdktf.ComplexList {
  public internalValue? : SagemakerSpaceSpaceSettingsCustomFileSystem[] | cdktf.IResolvable

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
  public get(index: number): SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference {
    return new SagemakerSpaceSpaceSettingsCustomFileSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference {
    return new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerSpaceSpaceSettingsJupyterLabAppSettings {
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}
  */
  readonly codeRepository?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec;
}

export function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_repository: cdktf.listMapper(sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    default_resource_spec: sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerSpaceSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterLabAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList",
    },
    default_resource_spec: {
      value: sagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsJupyterLabAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#repository_url SagemakerSpace#repository_url}
  */
  readonly repositoryUrl: string;
}

export function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
  }
}


export function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_url: {
      value: cdktf.stringToHclTerraform(struct!.repositoryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUrl = this._repositoryUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repositoryUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repositoryUrl = value.repositoryUrl;
    }
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }
}

export class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList extends cdktf.ComplexList {
  public internalValue? : SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable

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
  public get(index: number): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference {
    return new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerSpaceSpaceSettingsJupyterServerAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * code_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#code_repository SagemakerSpace#code_repository}
  */
  readonly codeRepository?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec;
}

export function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    code_repository: cdktf.listMapper(sagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryToTerraform, true)(struct!.codeRepository),
    default_resource_spec: sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerSpaceSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference | SagemakerSpaceSpaceSettingsJupyterServerAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    code_repository: {
      value: cdktf.listMapperHcl(sagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryToHclTerraform, true)(struct!.codeRepository),
      isBlock: true,
      type: "set",
      storageClassType: "SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList",
    },
    default_resource_spec: {
      value: sagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsJupyterServerAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._codeRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRepository = this._codeRepository?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._codeRepository.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._codeRepository.internalValue = value.codeRepository;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // code_repository - computed: false, optional: true, required: false
  private _codeRepository = new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepositoryList(this, "code_repository", true);
  public get codeRepository() {
    return this._codeRepository;
  }
  public putCodeRepository(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsCodeRepository[] | cdktf.IResolvable) {
    this._codeRepository.internalValue = value;
  }
  public resetCodeRepository() {
    this._codeRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryInput() {
    return this._codeRepository.internalValue;
  }

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#app_image_config_name SagemakerSpace#app_image_config_name}
  */
  readonly appImageConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#image_name SagemakerSpace#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#image_version_number SagemakerSpace#image_version_number}
  */
  readonly imageVersionNumber?: number;
}

export function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageToTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_image_config_name: cdktf.stringToTerraform(struct!.appImageConfigName),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_version_number: cdktf.numberToTerraform(struct!.imageVersionNumber),
  }
}


export function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageToHclTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_image_config_name: {
      value: cdktf.stringToHclTerraform(struct!.appImageConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_version_number: {
      value: cdktf.numberToHclTerraform(struct!.imageVersionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appImageConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appImageConfigName = this._appImageConfigName;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageVersionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersionNumber = this._imageVersionNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appImageConfigName = undefined;
      this._imageName = undefined;
      this._imageVersionNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appImageConfigName = value.appImageConfigName;
      this._imageName = value.imageName;
      this._imageVersionNumber = value.imageVersionNumber;
    }
  }

  // app_image_config_name - computed: false, optional: false, required: true
  private _appImageConfigName?: string; 
  public get appImageConfigName() {
    return this.getStringAttribute('app_image_config_name');
  }
  public set appImageConfigName(value: string) {
    this._appImageConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appImageConfigNameInput() {
    return this._appImageConfigName;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_version_number - computed: false, optional: true, required: false
  private _imageVersionNumber?: number; 
  public get imageVersionNumber() {
    return this.getNumberAttribute('image_version_number');
  }
  public set imageVersionNumber(value: number) {
    this._imageVersionNumber = value;
  }
  public resetImageVersionNumber() {
    this._imageVersionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionNumberInput() {
    return this._imageVersionNumber;
  }
}

export class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList extends cdktf.ComplexList {
  public internalValue? : SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable

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
  public get(index: number): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference {
    return new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#instance_type SagemakerSpace#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#lifecycle_config_arn SagemakerSpace#lifecycle_config_arn}
  */
  readonly lifecycleConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_arn SagemakerSpace#sagemaker_image_arn}
  */
  readonly sagemakerImageArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_alias SagemakerSpace#sagemaker_image_version_alias}
  */
  readonly sagemakerImageVersionAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sagemaker_image_version_arn SagemakerSpace#sagemaker_image_version_arn}
  */
  readonly sagemakerImageVersionArn?: string;
}

export function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    lifecycle_config_arn: cdktf.stringToTerraform(struct!.lifecycleConfigArn),
    sagemaker_image_arn: cdktf.stringToTerraform(struct!.sagemakerImageArn),
    sagemaker_image_version_alias: cdktf.stringToTerraform(struct!.sagemakerImageVersionAlias),
    sagemaker_image_version_arn: cdktf.stringToTerraform(struct!.sagemakerImageVersionArn),
  }
}


export function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifecycle_config_arn: {
      value: cdktf.stringToHclTerraform(struct!.lifecycleConfigArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_alias: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sagemaker_image_version_arn: {
      value: cdktf.stringToHclTerraform(struct!.sagemakerImageVersionArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._lifecycleConfigArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArn = this._lifecycleConfigArn;
    }
    if (this._sagemakerImageArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageArn = this._sagemakerImageArn;
    }
    if (this._sagemakerImageVersionAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionAlias = this._sagemakerImageVersionAlias;
    }
    if (this._sagemakerImageVersionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerImageVersionArn = this._sagemakerImageVersionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceType = undefined;
      this._lifecycleConfigArn = undefined;
      this._sagemakerImageArn = undefined;
      this._sagemakerImageVersionAlias = undefined;
      this._sagemakerImageVersionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceType = value.instanceType;
      this._lifecycleConfigArn = value.lifecycleConfigArn;
      this._sagemakerImageArn = value.sagemakerImageArn;
      this._sagemakerImageVersionAlias = value.sagemakerImageVersionAlias;
      this._sagemakerImageVersionArn = value.sagemakerImageVersionArn;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // lifecycle_config_arn - computed: false, optional: true, required: false
  private _lifecycleConfigArn?: string; 
  public get lifecycleConfigArn() {
    return this.getStringAttribute('lifecycle_config_arn');
  }
  public set lifecycleConfigArn(value: string) {
    this._lifecycleConfigArn = value;
  }
  public resetLifecycleConfigArn() {
    this._lifecycleConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnInput() {
    return this._lifecycleConfigArn;
  }

  // sagemaker_image_arn - computed: false, optional: true, required: false
  private _sagemakerImageArn?: string; 
  public get sagemakerImageArn() {
    return this.getStringAttribute('sagemaker_image_arn');
  }
  public set sagemakerImageArn(value: string) {
    this._sagemakerImageArn = value;
  }
  public resetSagemakerImageArn() {
    this._sagemakerImageArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageArnInput() {
    return this._sagemakerImageArn;
  }

  // sagemaker_image_version_alias - computed: false, optional: true, required: false
  private _sagemakerImageVersionAlias?: string; 
  public get sagemakerImageVersionAlias() {
    return this.getStringAttribute('sagemaker_image_version_alias');
  }
  public set sagemakerImageVersionAlias(value: string) {
    this._sagemakerImageVersionAlias = value;
  }
  public resetSagemakerImageVersionAlias() {
    this._sagemakerImageVersionAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionAliasInput() {
    return this._sagemakerImageVersionAlias;
  }

  // sagemaker_image_version_arn - computed: false, optional: true, required: false
  private _sagemakerImageVersionArn?: string; 
  public get sagemakerImageVersionArn() {
    return this.getStringAttribute('sagemaker_image_version_arn');
  }
  public set sagemakerImageVersionArn(value: string) {
    this._sagemakerImageVersionArn = value;
  }
  public resetSagemakerImageVersionArn() {
    this._sagemakerImageVersionArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerImageVersionArnInput() {
    return this._sagemakerImageVersionArn;
  }
}
export interface SagemakerSpaceSpaceSettingsKernelGatewayAppSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#lifecycle_config_arns SagemakerSpace#lifecycle_config_arns}
  */
  readonly lifecycleConfigArns?: string[];
  /**
  * custom_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#custom_image SagemakerSpace#custom_image}
  */
  readonly customImage?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable;
  /**
  * default_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#default_resource_spec SagemakerSpace#default_resource_spec}
  */
  readonly defaultResourceSpec: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec;
}

export function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifecycle_config_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleConfigArns),
    custom_image: cdktf.listMapper(sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageToTerraform, true)(struct!.customImage),
    default_resource_spec: sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToTerraform(struct!.defaultResourceSpec),
  }
}


export function sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference | SagemakerSpaceSpaceSettingsKernelGatewayAppSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifecycle_config_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleConfigArns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    custom_image: {
      value: cdktf.listMapperHcl(sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageToHclTerraform, true)(struct!.customImage),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList",
    },
    default_resource_spec: {
      value: sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecToHclTerraform(struct!.defaultResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsKernelGatewayAppSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifecycleConfigArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleConfigArns = this._lifecycleConfigArns;
    }
    if (this._customImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customImage = this._customImage?.internalValue;
    }
    if (this._defaultResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResourceSpec = this._defaultResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifecycleConfigArns = undefined;
      this._customImage.internalValue = undefined;
      this._defaultResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifecycleConfigArns = value.lifecycleConfigArns;
      this._customImage.internalValue = value.customImage;
      this._defaultResourceSpec.internalValue = value.defaultResourceSpec;
    }
  }

  // lifecycle_config_arns - computed: false, optional: true, required: false
  private _lifecycleConfigArns?: string[]; 
  public get lifecycleConfigArns() {
    return cdktf.Fn.tolist(this.getListAttribute('lifecycle_config_arns'));
  }
  public set lifecycleConfigArns(value: string[]) {
    this._lifecycleConfigArns = value;
  }
  public resetLifecycleConfigArns() {
    this._lifecycleConfigArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleConfigArnsInput() {
    return this._lifecycleConfigArns;
  }

  // custom_image - computed: false, optional: true, required: false
  private _customImage = new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImageList(this, "custom_image", false);
  public get customImage() {
    return this._customImage;
  }
  public putCustomImage(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsCustomImage[] | cdktf.IResolvable) {
    this._customImage.internalValue = value;
  }
  public resetCustomImage() {
    this._customImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customImageInput() {
    return this._customImage.internalValue;
  }

  // default_resource_spec - computed: false, optional: false, required: true
  private _defaultResourceSpec = new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(this, "default_resource_spec");
  public get defaultResourceSpec() {
    return this._defaultResourceSpec;
  }
  public putDefaultResourceSpec(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsDefaultResourceSpec) {
    this._defaultResourceSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResourceSpecInput() {
    return this._defaultResourceSpec.internalValue;
  }
}
export interface SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#ebs_volume_size_in_gb SagemakerSpace#ebs_volume_size_in_gb}
  */
  readonly ebsVolumeSizeInGb: number;
}

export function sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebs_volume_size_in_gb: cdktf.numberToTerraform(struct!.ebsVolumeSizeInGb),
  }
}


export function sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebs_volume_size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.ebsVolumeSizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsVolumeSizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsVolumeSizeInGb = this._ebsVolumeSizeInGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ebsVolumeSizeInGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ebsVolumeSizeInGb = value.ebsVolumeSizeInGb;
    }
  }

  // ebs_volume_size_in_gb - computed: false, optional: false, required: true
  private _ebsVolumeSizeInGb?: number; 
  public get ebsVolumeSizeInGb() {
    return this.getNumberAttribute('ebs_volume_size_in_gb');
  }
  public set ebsVolumeSizeInGb(value: number) {
    this._ebsVolumeSizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsVolumeSizeInGbInput() {
    return this._ebsVolumeSizeInGb;
  }
}
export interface SagemakerSpaceSpaceSettingsSpaceStorageSettings {
  /**
  * ebs_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#ebs_storage_settings SagemakerSpace#ebs_storage_settings}
  */
  readonly ebsStorageSettings: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings;
}

export function sagemakerSpaceSpaceSettingsSpaceStorageSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebs_storage_settings: sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsToTerraform(struct!.ebsStorageSettings),
  }
}


export function sagemakerSpaceSpaceSettingsSpaceStorageSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference | SagemakerSpaceSpaceSettingsSpaceStorageSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebs_storage_settings: {
      value: sagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsToHclTerraform(struct!.ebsStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettingsSpaceStorageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsStorageSettings = this._ebsStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettingsSpaceStorageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ebsStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ebsStorageSettings.internalValue = value.ebsStorageSettings;
    }
  }

  // ebs_storage_settings - computed: false, optional: false, required: true
  private _ebsStorageSettings = new SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettingsOutputReference(this, "ebs_storage_settings");
  public get ebsStorageSettings() {
    return this._ebsStorageSettings;
  }
  public putEbsStorageSettings(value: SagemakerSpaceSpaceSettingsSpaceStorageSettingsEbsStorageSettings) {
    this._ebsStorageSettings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsStorageSettingsInput() {
    return this._ebsStorageSettings.internalValue;
  }
}
export interface SagemakerSpaceSpaceSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#app_type SagemakerSpace#app_type}
  */
  readonly appType?: string;
  /**
  * code_editor_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#code_editor_app_settings SagemakerSpace#code_editor_app_settings}
  */
  readonly codeEditorAppSettings?: SagemakerSpaceSpaceSettingsCodeEditorAppSettings;
  /**
  * custom_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#custom_file_system SagemakerSpace#custom_file_system}
  */
  readonly customFileSystem?: SagemakerSpaceSpaceSettingsCustomFileSystem[] | cdktf.IResolvable;
  /**
  * jupyter_lab_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#jupyter_lab_app_settings SagemakerSpace#jupyter_lab_app_settings}
  */
  readonly jupyterLabAppSettings?: SagemakerSpaceSpaceSettingsJupyterLabAppSettings;
  /**
  * jupyter_server_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#jupyter_server_app_settings SagemakerSpace#jupyter_server_app_settings}
  */
  readonly jupyterServerAppSettings?: SagemakerSpaceSpaceSettingsJupyterServerAppSettings;
  /**
  * kernel_gateway_app_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#kernel_gateway_app_settings SagemakerSpace#kernel_gateway_app_settings}
  */
  readonly kernelGatewayAppSettings?: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings;
  /**
  * space_storage_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#space_storage_settings SagemakerSpace#space_storage_settings}
  */
  readonly spaceStorageSettings?: SagemakerSpaceSpaceSettingsSpaceStorageSettings;
}

export function sagemakerSpaceSpaceSettingsToTerraform(struct?: SagemakerSpaceSpaceSettingsOutputReference | SagemakerSpaceSpaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_type: cdktf.stringToTerraform(struct!.appType),
    code_editor_app_settings: sagemakerSpaceSpaceSettingsCodeEditorAppSettingsToTerraform(struct!.codeEditorAppSettings),
    custom_file_system: cdktf.listMapper(sagemakerSpaceSpaceSettingsCustomFileSystemToTerraform, true)(struct!.customFileSystem),
    jupyter_lab_app_settings: sagemakerSpaceSpaceSettingsJupyterLabAppSettingsToTerraform(struct!.jupyterLabAppSettings),
    jupyter_server_app_settings: sagemakerSpaceSpaceSettingsJupyterServerAppSettingsToTerraform(struct!.jupyterServerAppSettings),
    kernel_gateway_app_settings: sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsToTerraform(struct!.kernelGatewayAppSettings),
    space_storage_settings: sagemakerSpaceSpaceSettingsSpaceStorageSettingsToTerraform(struct!.spaceStorageSettings),
  }
}


export function sagemakerSpaceSpaceSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSettingsOutputReference | SagemakerSpaceSpaceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_editor_app_settings: {
      value: sagemakerSpaceSpaceSettingsCodeEditorAppSettingsToHclTerraform(struct!.codeEditorAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsCodeEditorAppSettingsList",
    },
    custom_file_system: {
      value: cdktf.listMapperHcl(sagemakerSpaceSpaceSettingsCustomFileSystemToHclTerraform, true)(struct!.customFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsCustomFileSystemList",
    },
    jupyter_lab_app_settings: {
      value: sagemakerSpaceSpaceSettingsJupyterLabAppSettingsToHclTerraform(struct!.jupyterLabAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsJupyterLabAppSettingsList",
    },
    jupyter_server_app_settings: {
      value: sagemakerSpaceSpaceSettingsJupyterServerAppSettingsToHclTerraform(struct!.jupyterServerAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsJupyterServerAppSettingsList",
    },
    kernel_gateway_app_settings: {
      value: sagemakerSpaceSpaceSettingsKernelGatewayAppSettingsToHclTerraform(struct!.kernelGatewayAppSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsList",
    },
    space_storage_settings: {
      value: sagemakerSpaceSpaceSettingsSpaceStorageSettingsToHclTerraform(struct!.spaceStorageSettings),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerSpaceSpaceSettingsSpaceStorageSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._codeEditorAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeEditorAppSettings = this._codeEditorAppSettings?.internalValue;
    }
    if (this._customFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFileSystem = this._customFileSystem?.internalValue;
    }
    if (this._jupyterLabAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterLabAppSettings = this._jupyterLabAppSettings?.internalValue;
    }
    if (this._jupyterServerAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jupyterServerAppSettings = this._jupyterServerAppSettings?.internalValue;
    }
    if (this._kernelGatewayAppSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernelGatewayAppSettings = this._kernelGatewayAppSettings?.internalValue;
    }
    if (this._spaceStorageSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceStorageSettings = this._spaceStorageSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appType = undefined;
      this._codeEditorAppSettings.internalValue = undefined;
      this._customFileSystem.internalValue = undefined;
      this._jupyterLabAppSettings.internalValue = undefined;
      this._jupyterServerAppSettings.internalValue = undefined;
      this._kernelGatewayAppSettings.internalValue = undefined;
      this._spaceStorageSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appType = value.appType;
      this._codeEditorAppSettings.internalValue = value.codeEditorAppSettings;
      this._customFileSystem.internalValue = value.customFileSystem;
      this._jupyterLabAppSettings.internalValue = value.jupyterLabAppSettings;
      this._jupyterServerAppSettings.internalValue = value.jupyterServerAppSettings;
      this._kernelGatewayAppSettings.internalValue = value.kernelGatewayAppSettings;
      this._spaceStorageSettings.internalValue = value.spaceStorageSettings;
    }
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // code_editor_app_settings - computed: false, optional: true, required: false
  private _codeEditorAppSettings = new SagemakerSpaceSpaceSettingsCodeEditorAppSettingsOutputReference(this, "code_editor_app_settings");
  public get codeEditorAppSettings() {
    return this._codeEditorAppSettings;
  }
  public putCodeEditorAppSettings(value: SagemakerSpaceSpaceSettingsCodeEditorAppSettings) {
    this._codeEditorAppSettings.internalValue = value;
  }
  public resetCodeEditorAppSettings() {
    this._codeEditorAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeEditorAppSettingsInput() {
    return this._codeEditorAppSettings.internalValue;
  }

  // custom_file_system - computed: false, optional: true, required: false
  private _customFileSystem = new SagemakerSpaceSpaceSettingsCustomFileSystemList(this, "custom_file_system", false);
  public get customFileSystem() {
    return this._customFileSystem;
  }
  public putCustomFileSystem(value: SagemakerSpaceSpaceSettingsCustomFileSystem[] | cdktf.IResolvable) {
    this._customFileSystem.internalValue = value;
  }
  public resetCustomFileSystem() {
    this._customFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFileSystemInput() {
    return this._customFileSystem.internalValue;
  }

  // jupyter_lab_app_settings - computed: false, optional: true, required: false
  private _jupyterLabAppSettings = new SagemakerSpaceSpaceSettingsJupyterLabAppSettingsOutputReference(this, "jupyter_lab_app_settings");
  public get jupyterLabAppSettings() {
    return this._jupyterLabAppSettings;
  }
  public putJupyterLabAppSettings(value: SagemakerSpaceSpaceSettingsJupyterLabAppSettings) {
    this._jupyterLabAppSettings.internalValue = value;
  }
  public resetJupyterLabAppSettings() {
    this._jupyterLabAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterLabAppSettingsInput() {
    return this._jupyterLabAppSettings.internalValue;
  }

  // jupyter_server_app_settings - computed: false, optional: true, required: false
  private _jupyterServerAppSettings = new SagemakerSpaceSpaceSettingsJupyterServerAppSettingsOutputReference(this, "jupyter_server_app_settings");
  public get jupyterServerAppSettings() {
    return this._jupyterServerAppSettings;
  }
  public putJupyterServerAppSettings(value: SagemakerSpaceSpaceSettingsJupyterServerAppSettings) {
    this._jupyterServerAppSettings.internalValue = value;
  }
  public resetJupyterServerAppSettings() {
    this._jupyterServerAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterServerAppSettingsInput() {
    return this._jupyterServerAppSettings.internalValue;
  }

  // kernel_gateway_app_settings - computed: false, optional: true, required: false
  private _kernelGatewayAppSettings = new SagemakerSpaceSpaceSettingsKernelGatewayAppSettingsOutputReference(this, "kernel_gateway_app_settings");
  public get kernelGatewayAppSettings() {
    return this._kernelGatewayAppSettings;
  }
  public putKernelGatewayAppSettings(value: SagemakerSpaceSpaceSettingsKernelGatewayAppSettings) {
    this._kernelGatewayAppSettings.internalValue = value;
  }
  public resetKernelGatewayAppSettings() {
    this._kernelGatewayAppSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelGatewayAppSettingsInput() {
    return this._kernelGatewayAppSettings.internalValue;
  }

  // space_storage_settings - computed: false, optional: true, required: false
  private _spaceStorageSettings = new SagemakerSpaceSpaceSettingsSpaceStorageSettingsOutputReference(this, "space_storage_settings");
  public get spaceStorageSettings() {
    return this._spaceStorageSettings;
  }
  public putSpaceStorageSettings(value: SagemakerSpaceSpaceSettingsSpaceStorageSettings) {
    this._spaceStorageSettings.internalValue = value;
  }
  public resetSpaceStorageSettings() {
    this._spaceStorageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceStorageSettingsInput() {
    return this._spaceStorageSettings.internalValue;
  }
}
export interface SagemakerSpaceSpaceSharingSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#sharing_type SagemakerSpace#sharing_type}
  */
  readonly sharingType: string;
}

export function sagemakerSpaceSpaceSharingSettingsToTerraform(struct?: SagemakerSpaceSpaceSharingSettingsOutputReference | SagemakerSpaceSpaceSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sharing_type: cdktf.stringToTerraform(struct!.sharingType),
  }
}


export function sagemakerSpaceSpaceSharingSettingsToHclTerraform(struct?: SagemakerSpaceSpaceSharingSettingsOutputReference | SagemakerSpaceSpaceSharingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sharing_type: {
      value: cdktf.stringToHclTerraform(struct!.sharingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerSpaceSpaceSharingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerSpaceSpaceSharingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingType = this._sharingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerSpaceSpaceSharingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sharingType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sharingType = value.sharingType;
    }
  }

  // sharing_type - computed: false, optional: false, required: true
  private _sharingType?: string; 
  public get sharingType() {
    return this.getStringAttribute('sharing_type');
  }
  public set sharingType(value: string) {
    this._sharingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingTypeInput() {
    return this._sharingType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space aws_sagemaker_space}
*/
export class SagemakerSpace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_space";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerSpace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerSpace to import
  * @param importFromId The id of the existing SagemakerSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerSpace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_space", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.41.0/docs/resources/sagemaker_space aws_sagemaker_space} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerSpaceConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerSpaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_space',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.41.0',
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
    this._domainId = config.domainId;
    this._id = config.id;
    this._spaceDisplayName = config.spaceDisplayName;
    this._spaceName = config.spaceName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._ownershipSettings.internalValue = config.ownershipSettings;
    this._spaceSettings.internalValue = config.spaceSettings;
    this._spaceSharingSettings.internalValue = config.spaceSharingSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // home_efs_file_system_uid - computed: true, optional: false, required: false
  public get homeEfsFileSystemUid() {
    return this.getStringAttribute('home_efs_file_system_uid');
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

  // space_display_name - computed: false, optional: true, required: false
  private _spaceDisplayName?: string; 
  public get spaceDisplayName() {
    return this.getStringAttribute('space_display_name');
  }
  public set spaceDisplayName(value: string) {
    this._spaceDisplayName = value;
  }
  public resetSpaceDisplayName() {
    this._spaceDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceDisplayNameInput() {
    return this._spaceDisplayName;
  }

  // space_name - computed: false, optional: false, required: true
  private _spaceName?: string; 
  public get spaceName() {
    return this.getStringAttribute('space_name');
  }
  public set spaceName(value: string) {
    this._spaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceNameInput() {
    return this._spaceName;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // ownership_settings - computed: false, optional: true, required: false
  private _ownershipSettings = new SagemakerSpaceOwnershipSettingsOutputReference(this, "ownership_settings");
  public get ownershipSettings() {
    return this._ownershipSettings;
  }
  public putOwnershipSettings(value: SagemakerSpaceOwnershipSettings) {
    this._ownershipSettings.internalValue = value;
  }
  public resetOwnershipSettings() {
    this._ownershipSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipSettingsInput() {
    return this._ownershipSettings.internalValue;
  }

  // space_settings - computed: false, optional: true, required: false
  private _spaceSettings = new SagemakerSpaceSpaceSettingsOutputReference(this, "space_settings");
  public get spaceSettings() {
    return this._spaceSettings;
  }
  public putSpaceSettings(value: SagemakerSpaceSpaceSettings) {
    this._spaceSettings.internalValue = value;
  }
  public resetSpaceSettings() {
    this._spaceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceSettingsInput() {
    return this._spaceSettings.internalValue;
  }

  // space_sharing_settings - computed: false, optional: true, required: false
  private _spaceSharingSettings = new SagemakerSpaceSpaceSharingSettingsOutputReference(this, "space_sharing_settings");
  public get spaceSharingSettings() {
    return this._spaceSharingSettings;
  }
  public putSpaceSharingSettings(value: SagemakerSpaceSpaceSharingSettings) {
    this._spaceSharingSettings.internalValue = value;
  }
  public resetSpaceSharingSettings() {
    this._spaceSharingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceSharingSettingsInput() {
    return this._spaceSharingSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      space_display_name: cdktf.stringToTerraform(this._spaceDisplayName),
      space_name: cdktf.stringToTerraform(this._spaceName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      ownership_settings: sagemakerSpaceOwnershipSettingsToTerraform(this._ownershipSettings.internalValue),
      space_settings: sagemakerSpaceSpaceSettingsToTerraform(this._spaceSettings.internalValue),
      space_sharing_settings: sagemakerSpaceSpaceSharingSettingsToTerraform(this._spaceSharingSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      space_display_name: {
        value: cdktf.stringToHclTerraform(this._spaceDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_name: {
        value: cdktf.stringToHclTerraform(this._spaceName),
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
      ownership_settings: {
        value: sagemakerSpaceOwnershipSettingsToHclTerraform(this._ownershipSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerSpaceOwnershipSettingsList",
      },
      space_settings: {
        value: sagemakerSpaceSpaceSettingsToHclTerraform(this._spaceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerSpaceSpaceSettingsList",
      },
      space_sharing_settings: {
        value: sagemakerSpaceSpaceSharingSettingsToHclTerraform(this._spaceSharingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerSpaceSpaceSharingSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
