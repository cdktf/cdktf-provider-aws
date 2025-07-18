/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#directory_id WorkspacesDirectory#directory_id}
  */
  readonly directoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#id WorkspacesDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#ip_group_ids WorkspacesDirectory#ip_group_ids}
  */
  readonly ipGroupIds?: string[];
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#region WorkspacesDirectory#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#subnet_ids WorkspacesDirectory#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#tags WorkspacesDirectory#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#tags_all WorkspacesDirectory#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_identity_type WorkspacesDirectory#user_identity_type}
  */
  readonly userIdentityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_directory_description WorkspacesDirectory#workspace_directory_description}
  */
  readonly workspaceDirectoryDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_directory_name WorkspacesDirectory#workspace_directory_name}
  */
  readonly workspaceDirectoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_type WorkspacesDirectory#workspace_type}
  */
  readonly workspaceType?: string;
  /**
  * active_directory_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#active_directory_config WorkspacesDirectory#active_directory_config}
  */
  readonly activeDirectoryConfig?: WorkspacesDirectoryActiveDirectoryConfig;
  /**
  * certificate_based_auth_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#certificate_based_auth_properties WorkspacesDirectory#certificate_based_auth_properties}
  */
  readonly certificateBasedAuthProperties?: WorkspacesDirectoryCertificateBasedAuthProperties;
  /**
  * saml_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#saml_properties WorkspacesDirectory#saml_properties}
  */
  readonly samlProperties?: WorkspacesDirectorySamlProperties;
  /**
  * self_service_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#self_service_permissions WorkspacesDirectory#self_service_permissions}
  */
  readonly selfServicePermissions?: WorkspacesDirectorySelfServicePermissions;
  /**
  * workspace_access_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_access_properties WorkspacesDirectory#workspace_access_properties}
  */
  readonly workspaceAccessProperties?: WorkspacesDirectoryWorkspaceAccessProperties;
  /**
  * workspace_creation_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#workspace_creation_properties WorkspacesDirectory#workspace_creation_properties}
  */
  readonly workspaceCreationProperties?: WorkspacesDirectoryWorkspaceCreationProperties;
}
export interface WorkspacesDirectoryActiveDirectoryConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#domain_name WorkspacesDirectory#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#service_account_secret_arn WorkspacesDirectory#service_account_secret_arn}
  */
  readonly serviceAccountSecretArn: string;
}

export function workspacesDirectoryActiveDirectoryConfigToTerraform(struct?: WorkspacesDirectoryActiveDirectoryConfigOutputReference | WorkspacesDirectoryActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    service_account_secret_arn: cdktf.stringToTerraform(struct!.serviceAccountSecretArn),
  }
}


export function workspacesDirectoryActiveDirectoryConfigToHclTerraform(struct?: WorkspacesDirectoryActiveDirectoryConfigOutputReference | WorkspacesDirectoryActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesDirectoryActiveDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectoryActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._serviceAccountSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSecretArn = this._serviceAccountSecretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectoryActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._serviceAccountSecretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._serviceAccountSecretArn = value.serviceAccountSecretArn;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // service_account_secret_arn - computed: false, optional: false, required: true
  private _serviceAccountSecretArn?: string; 
  public get serviceAccountSecretArn() {
    return this.getStringAttribute('service_account_secret_arn');
  }
  public set serviceAccountSecretArn(value: string) {
    this._serviceAccountSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSecretArnInput() {
    return this._serviceAccountSecretArn;
  }
}
export interface WorkspacesDirectoryCertificateBasedAuthProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#certificate_authority_arn WorkspacesDirectory#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}
  */
  readonly status?: string;
}

export function workspacesDirectoryCertificateBasedAuthPropertiesToTerraform(struct?: WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference | WorkspacesDirectoryCertificateBasedAuthProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_authority_arn: cdktf.stringToTerraform(struct!.certificateAuthorityArn),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function workspacesDirectoryCertificateBasedAuthPropertiesToHclTerraform(struct?: WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference | WorkspacesDirectoryCertificateBasedAuthProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_authority_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectoryCertificateBasedAuthProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectoryCertificateBasedAuthProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateAuthorityArn = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateAuthorityArn = value.certificateAuthorityArn;
      this._status = value.status;
    }
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface WorkspacesDirectorySamlProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#relay_state_parameter_name WorkspacesDirectory#relay_state_parameter_name}
  */
  readonly relayStateParameterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#status WorkspacesDirectory#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_access_url WorkspacesDirectory#user_access_url}
  */
  readonly userAccessUrl?: string;
}

export function workspacesDirectorySamlPropertiesToTerraform(struct?: WorkspacesDirectorySamlPropertiesOutputReference | WorkspacesDirectorySamlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    relay_state_parameter_name: cdktf.stringToTerraform(struct!.relayStateParameterName),
    status: cdktf.stringToTerraform(struct!.status),
    user_access_url: cdktf.stringToTerraform(struct!.userAccessUrl),
  }
}


export function workspacesDirectorySamlPropertiesToHclTerraform(struct?: WorkspacesDirectorySamlPropertiesOutputReference | WorkspacesDirectorySamlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    relay_state_parameter_name: {
      value: cdktf.stringToHclTerraform(struct!.relayStateParameterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_access_url: {
      value: cdktf.stringToHclTerraform(struct!.userAccessUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesDirectorySamlPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectorySamlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._relayStateParameterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayStateParameterName = this._relayStateParameterName;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._userAccessUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccessUrl = this._userAccessUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectorySamlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._relayStateParameterName = undefined;
      this._status = undefined;
      this._userAccessUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._relayStateParameterName = value.relayStateParameterName;
      this._status = value.status;
      this._userAccessUrl = value.userAccessUrl;
    }
  }

  // relay_state_parameter_name - computed: false, optional: true, required: false
  private _relayStateParameterName?: string; 
  public get relayStateParameterName() {
    return this.getStringAttribute('relay_state_parameter_name');
  }
  public set relayStateParameterName(value: string) {
    this._relayStateParameterName = value;
  }
  public resetRelayStateParameterName() {
    this._relayStateParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateParameterNameInput() {
    return this._relayStateParameterName;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_access_url - computed: false, optional: true, required: false
  private _userAccessUrl?: string; 
  public get userAccessUrl() {
    return this.getStringAttribute('user_access_url');
  }
  public set userAccessUrl(value: string) {
    this._userAccessUrl = value;
  }
  public resetUserAccessUrl() {
    this._userAccessUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessUrlInput() {
    return this._userAccessUrl;
  }
}
export interface WorkspacesDirectorySelfServicePermissions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#change_compute_type WorkspacesDirectory#change_compute_type}
  */
  readonly changeComputeType?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#increase_volume_size WorkspacesDirectory#increase_volume_size}
  */
  readonly increaseVolumeSize?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#rebuild_workspace WorkspacesDirectory#rebuild_workspace}
  */
  readonly rebuildWorkspace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#restart_workspace WorkspacesDirectory#restart_workspace}
  */
  readonly restartWorkspace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#switch_running_mode WorkspacesDirectory#switch_running_mode}
  */
  readonly switchRunningMode?: boolean | cdktf.IResolvable;
}

export function workspacesDirectorySelfServicePermissionsToTerraform(struct?: WorkspacesDirectorySelfServicePermissionsOutputReference | WorkspacesDirectorySelfServicePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_compute_type: cdktf.booleanToTerraform(struct!.changeComputeType),
    increase_volume_size: cdktf.booleanToTerraform(struct!.increaseVolumeSize),
    rebuild_workspace: cdktf.booleanToTerraform(struct!.rebuildWorkspace),
    restart_workspace: cdktf.booleanToTerraform(struct!.restartWorkspace),
    switch_running_mode: cdktf.booleanToTerraform(struct!.switchRunningMode),
  }
}


export function workspacesDirectorySelfServicePermissionsToHclTerraform(struct?: WorkspacesDirectorySelfServicePermissionsOutputReference | WorkspacesDirectorySelfServicePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_compute_type: {
      value: cdktf.booleanToHclTerraform(struct!.changeComputeType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    increase_volume_size: {
      value: cdktf.booleanToHclTerraform(struct!.increaseVolumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rebuild_workspace: {
      value: cdktf.booleanToHclTerraform(struct!.rebuildWorkspace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_workspace: {
      value: cdktf.booleanToHclTerraform(struct!.restartWorkspace),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    switch_running_mode: {
      value: cdktf.booleanToHclTerraform(struct!.switchRunningMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesDirectorySelfServicePermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectorySelfServicePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeComputeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeComputeType = this._changeComputeType;
    }
    if (this._increaseVolumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.increaseVolumeSize = this._increaseVolumeSize;
    }
    if (this._rebuildWorkspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebuildWorkspace = this._rebuildWorkspace;
    }
    if (this._restartWorkspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartWorkspace = this._restartWorkspace;
    }
    if (this._switchRunningMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchRunningMode = this._switchRunningMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectorySelfServicePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeComputeType = undefined;
      this._increaseVolumeSize = undefined;
      this._rebuildWorkspace = undefined;
      this._restartWorkspace = undefined;
      this._switchRunningMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeComputeType = value.changeComputeType;
      this._increaseVolumeSize = value.increaseVolumeSize;
      this._rebuildWorkspace = value.rebuildWorkspace;
      this._restartWorkspace = value.restartWorkspace;
      this._switchRunningMode = value.switchRunningMode;
    }
  }

  // change_compute_type - computed: false, optional: true, required: false
  private _changeComputeType?: boolean | cdktf.IResolvable; 
  public get changeComputeType() {
    return this.getBooleanAttribute('change_compute_type');
  }
  public set changeComputeType(value: boolean | cdktf.IResolvable) {
    this._changeComputeType = value;
  }
  public resetChangeComputeType() {
    this._changeComputeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeComputeTypeInput() {
    return this._changeComputeType;
  }

  // increase_volume_size - computed: false, optional: true, required: false
  private _increaseVolumeSize?: boolean | cdktf.IResolvable; 
  public get increaseVolumeSize() {
    return this.getBooleanAttribute('increase_volume_size');
  }
  public set increaseVolumeSize(value: boolean | cdktf.IResolvable) {
    this._increaseVolumeSize = value;
  }
  public resetIncreaseVolumeSize() {
    this._increaseVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get increaseVolumeSizeInput() {
    return this._increaseVolumeSize;
  }

  // rebuild_workspace - computed: false, optional: true, required: false
  private _rebuildWorkspace?: boolean | cdktf.IResolvable; 
  public get rebuildWorkspace() {
    return this.getBooleanAttribute('rebuild_workspace');
  }
  public set rebuildWorkspace(value: boolean | cdktf.IResolvable) {
    this._rebuildWorkspace = value;
  }
  public resetRebuildWorkspace() {
    this._rebuildWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebuildWorkspaceInput() {
    return this._rebuildWorkspace;
  }

  // restart_workspace - computed: false, optional: true, required: false
  private _restartWorkspace?: boolean | cdktf.IResolvable; 
  public get restartWorkspace() {
    return this.getBooleanAttribute('restart_workspace');
  }
  public set restartWorkspace(value: boolean | cdktf.IResolvable) {
    this._restartWorkspace = value;
  }
  public resetRestartWorkspace() {
    this._restartWorkspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartWorkspaceInput() {
    return this._restartWorkspace;
  }

  // switch_running_mode - computed: false, optional: true, required: false
  private _switchRunningMode?: boolean | cdktf.IResolvable; 
  public get switchRunningMode() {
    return this.getBooleanAttribute('switch_running_mode');
  }
  public set switchRunningMode(value: boolean | cdktf.IResolvable) {
    this._switchRunningMode = value;
  }
  public resetSwitchRunningMode() {
    this._switchRunningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchRunningModeInput() {
    return this._switchRunningMode;
  }
}
export interface WorkspacesDirectoryWorkspaceAccessProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_android WorkspacesDirectory#device_type_android}
  */
  readonly deviceTypeAndroid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_chromeos WorkspacesDirectory#device_type_chromeos}
  */
  readonly deviceTypeChromeos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_ios WorkspacesDirectory#device_type_ios}
  */
  readonly deviceTypeIos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_linux WorkspacesDirectory#device_type_linux}
  */
  readonly deviceTypeLinux?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_osx WorkspacesDirectory#device_type_osx}
  */
  readonly deviceTypeOsx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_web WorkspacesDirectory#device_type_web}
  */
  readonly deviceTypeWeb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_windows WorkspacesDirectory#device_type_windows}
  */
  readonly deviceTypeWindows?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#device_type_zeroclient WorkspacesDirectory#device_type_zeroclient}
  */
  readonly deviceTypeZeroclient?: string;
}

export function workspacesDirectoryWorkspaceAccessPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference | WorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type_android: cdktf.stringToTerraform(struct!.deviceTypeAndroid),
    device_type_chromeos: cdktf.stringToTerraform(struct!.deviceTypeChromeos),
    device_type_ios: cdktf.stringToTerraform(struct!.deviceTypeIos),
    device_type_linux: cdktf.stringToTerraform(struct!.deviceTypeLinux),
    device_type_osx: cdktf.stringToTerraform(struct!.deviceTypeOsx),
    device_type_web: cdktf.stringToTerraform(struct!.deviceTypeWeb),
    device_type_windows: cdktf.stringToTerraform(struct!.deviceTypeWindows),
    device_type_zeroclient: cdktf.stringToTerraform(struct!.deviceTypeZeroclient),
  }
}


export function workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(struct?: WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference | WorkspacesDirectoryWorkspaceAccessProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type_android: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeAndroid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_chromeos: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeChromeos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_ios: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeIos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_linux: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeLinux),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_osx: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeOsx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_web: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_windows: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeWindows),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type_zeroclient: {
      value: cdktf.stringToHclTerraform(struct!.deviceTypeZeroclient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectoryWorkspaceAccessProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceTypeAndroid !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeAndroid = this._deviceTypeAndroid;
    }
    if (this._deviceTypeChromeos !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeChromeos = this._deviceTypeChromeos;
    }
    if (this._deviceTypeIos !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeIos = this._deviceTypeIos;
    }
    if (this._deviceTypeLinux !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeLinux = this._deviceTypeLinux;
    }
    if (this._deviceTypeOsx !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeOsx = this._deviceTypeOsx;
    }
    if (this._deviceTypeWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeWeb = this._deviceTypeWeb;
    }
    if (this._deviceTypeWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeWindows = this._deviceTypeWindows;
    }
    if (this._deviceTypeZeroclient !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTypeZeroclient = this._deviceTypeZeroclient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectoryWorkspaceAccessProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deviceTypeAndroid = undefined;
      this._deviceTypeChromeos = undefined;
      this._deviceTypeIos = undefined;
      this._deviceTypeLinux = undefined;
      this._deviceTypeOsx = undefined;
      this._deviceTypeWeb = undefined;
      this._deviceTypeWindows = undefined;
      this._deviceTypeZeroclient = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deviceTypeAndroid = value.deviceTypeAndroid;
      this._deviceTypeChromeos = value.deviceTypeChromeos;
      this._deviceTypeIos = value.deviceTypeIos;
      this._deviceTypeLinux = value.deviceTypeLinux;
      this._deviceTypeOsx = value.deviceTypeOsx;
      this._deviceTypeWeb = value.deviceTypeWeb;
      this._deviceTypeWindows = value.deviceTypeWindows;
      this._deviceTypeZeroclient = value.deviceTypeZeroclient;
    }
  }

  // device_type_android - computed: false, optional: true, required: false
  private _deviceTypeAndroid?: string; 
  public get deviceTypeAndroid() {
    return this.getStringAttribute('device_type_android');
  }
  public set deviceTypeAndroid(value: string) {
    this._deviceTypeAndroid = value;
  }
  public resetDeviceTypeAndroid() {
    this._deviceTypeAndroid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeAndroidInput() {
    return this._deviceTypeAndroid;
  }

  // device_type_chromeos - computed: false, optional: true, required: false
  private _deviceTypeChromeos?: string; 
  public get deviceTypeChromeos() {
    return this.getStringAttribute('device_type_chromeos');
  }
  public set deviceTypeChromeos(value: string) {
    this._deviceTypeChromeos = value;
  }
  public resetDeviceTypeChromeos() {
    this._deviceTypeChromeos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeChromeosInput() {
    return this._deviceTypeChromeos;
  }

  // device_type_ios - computed: false, optional: true, required: false
  private _deviceTypeIos?: string; 
  public get deviceTypeIos() {
    return this.getStringAttribute('device_type_ios');
  }
  public set deviceTypeIos(value: string) {
    this._deviceTypeIos = value;
  }
  public resetDeviceTypeIos() {
    this._deviceTypeIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeIosInput() {
    return this._deviceTypeIos;
  }

  // device_type_linux - computed: false, optional: true, required: false
  private _deviceTypeLinux?: string; 
  public get deviceTypeLinux() {
    return this.getStringAttribute('device_type_linux');
  }
  public set deviceTypeLinux(value: string) {
    this._deviceTypeLinux = value;
  }
  public resetDeviceTypeLinux() {
    this._deviceTypeLinux = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeLinuxInput() {
    return this._deviceTypeLinux;
  }

  // device_type_osx - computed: false, optional: true, required: false
  private _deviceTypeOsx?: string; 
  public get deviceTypeOsx() {
    return this.getStringAttribute('device_type_osx');
  }
  public set deviceTypeOsx(value: string) {
    this._deviceTypeOsx = value;
  }
  public resetDeviceTypeOsx() {
    this._deviceTypeOsx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeOsxInput() {
    return this._deviceTypeOsx;
  }

  // device_type_web - computed: false, optional: true, required: false
  private _deviceTypeWeb?: string; 
  public get deviceTypeWeb() {
    return this.getStringAttribute('device_type_web');
  }
  public set deviceTypeWeb(value: string) {
    this._deviceTypeWeb = value;
  }
  public resetDeviceTypeWeb() {
    this._deviceTypeWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeWebInput() {
    return this._deviceTypeWeb;
  }

  // device_type_windows - computed: false, optional: true, required: false
  private _deviceTypeWindows?: string; 
  public get deviceTypeWindows() {
    return this.getStringAttribute('device_type_windows');
  }
  public set deviceTypeWindows(value: string) {
    this._deviceTypeWindows = value;
  }
  public resetDeviceTypeWindows() {
    this._deviceTypeWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeWindowsInput() {
    return this._deviceTypeWindows;
  }

  // device_type_zeroclient - computed: false, optional: true, required: false
  private _deviceTypeZeroclient?: string; 
  public get deviceTypeZeroclient() {
    return this.getStringAttribute('device_type_zeroclient');
  }
  public set deviceTypeZeroclient(value: string) {
    this._deviceTypeZeroclient = value;
  }
  public resetDeviceTypeZeroclient() {
    this._deviceTypeZeroclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeZeroclientInput() {
    return this._deviceTypeZeroclient;
  }
}
export interface WorkspacesDirectoryWorkspaceCreationProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#custom_security_group_id WorkspacesDirectory#custom_security_group_id}
  */
  readonly customSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#default_ou WorkspacesDirectory#default_ou}
  */
  readonly defaultOu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#enable_internet_access WorkspacesDirectory#enable_internet_access}
  */
  readonly enableInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#enable_maintenance_mode WorkspacesDirectory#enable_maintenance_mode}
  */
  readonly enableMaintenanceMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#user_enabled_as_local_administrator WorkspacesDirectory#user_enabled_as_local_administrator}
  */
  readonly userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable;
}

export function workspacesDirectoryWorkspaceCreationPropertiesToTerraform(struct?: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference | WorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_security_group_id: cdktf.stringToTerraform(struct!.customSecurityGroupId),
    default_ou: cdktf.stringToTerraform(struct!.defaultOu),
    enable_internet_access: cdktf.booleanToTerraform(struct!.enableInternetAccess),
    enable_maintenance_mode: cdktf.booleanToTerraform(struct!.enableMaintenanceMode),
    user_enabled_as_local_administrator: cdktf.booleanToTerraform(struct!.userEnabledAsLocalAdministrator),
  }
}


export function workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(struct?: WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference | WorkspacesDirectoryWorkspaceCreationProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.customSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_ou: {
      value: cdktf.stringToHclTerraform(struct!.defaultOu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_internet_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_maintenance_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableMaintenanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_enabled_as_local_administrator: {
      value: cdktf.booleanToHclTerraform(struct!.userEnabledAsLocalAdministrator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesDirectoryWorkspaceCreationProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurityGroupId = this._customSecurityGroupId;
    }
    if (this._defaultOu !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOu = this._defaultOu;
    }
    if (this._enableInternetAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetAccess = this._enableInternetAccess;
    }
    if (this._enableMaintenanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMaintenanceMode = this._enableMaintenanceMode;
    }
    if (this._userEnabledAsLocalAdministrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.userEnabledAsLocalAdministrator = this._userEnabledAsLocalAdministrator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesDirectoryWorkspaceCreationProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSecurityGroupId = undefined;
      this._defaultOu = undefined;
      this._enableInternetAccess = undefined;
      this._enableMaintenanceMode = undefined;
      this._userEnabledAsLocalAdministrator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSecurityGroupId = value.customSecurityGroupId;
      this._defaultOu = value.defaultOu;
      this._enableInternetAccess = value.enableInternetAccess;
      this._enableMaintenanceMode = value.enableMaintenanceMode;
      this._userEnabledAsLocalAdministrator = value.userEnabledAsLocalAdministrator;
    }
  }

  // custom_security_group_id - computed: false, optional: true, required: false
  private _customSecurityGroupId?: string; 
  public get customSecurityGroupId() {
    return this.getStringAttribute('custom_security_group_id');
  }
  public set customSecurityGroupId(value: string) {
    this._customSecurityGroupId = value;
  }
  public resetCustomSecurityGroupId() {
    this._customSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupIdInput() {
    return this._customSecurityGroupId;
  }

  // default_ou - computed: false, optional: true, required: false
  private _defaultOu?: string; 
  public get defaultOu() {
    return this.getStringAttribute('default_ou');
  }
  public set defaultOu(value: string) {
    this._defaultOu = value;
  }
  public resetDefaultOu() {
    this._defaultOu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOuInput() {
    return this._defaultOu;
  }

  // enable_internet_access - computed: false, optional: true, required: false
  private _enableInternetAccess?: boolean | cdktf.IResolvable; 
  public get enableInternetAccess() {
    return this.getBooleanAttribute('enable_internet_access');
  }
  public set enableInternetAccess(value: boolean | cdktf.IResolvable) {
    this._enableInternetAccess = value;
  }
  public resetEnableInternetAccess() {
    this._enableInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetAccessInput() {
    return this._enableInternetAccess;
  }

  // enable_maintenance_mode - computed: false, optional: true, required: false
  private _enableMaintenanceMode?: boolean | cdktf.IResolvable; 
  public get enableMaintenanceMode() {
    return this.getBooleanAttribute('enable_maintenance_mode');
  }
  public set enableMaintenanceMode(value: boolean | cdktf.IResolvable) {
    this._enableMaintenanceMode = value;
  }
  public resetEnableMaintenanceMode() {
    this._enableMaintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMaintenanceModeInput() {
    return this._enableMaintenanceMode;
  }

  // user_enabled_as_local_administrator - computed: false, optional: true, required: false
  private _userEnabledAsLocalAdministrator?: boolean | cdktf.IResolvable; 
  public get userEnabledAsLocalAdministrator() {
    return this.getBooleanAttribute('user_enabled_as_local_administrator');
  }
  public set userEnabledAsLocalAdministrator(value: boolean | cdktf.IResolvable) {
    this._userEnabledAsLocalAdministrator = value;
  }
  public resetUserEnabledAsLocalAdministrator() {
    this._userEnabledAsLocalAdministrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEnabledAsLocalAdministratorInput() {
    return this._userEnabledAsLocalAdministrator;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory aws_workspaces_directory}
*/
export class WorkspacesDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspaces_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspacesDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspacesDirectory to import
  * @param importFromId The id of the existing WorkspacesDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspacesDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspaces_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/workspaces_directory aws_workspaces_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesDirectoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkspacesDirectoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_directory',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._directoryId = config.directoryId;
    this._id = config.id;
    this._ipGroupIds = config.ipGroupIds;
    this._region = config.region;
    this._subnetIds = config.subnetIds;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userIdentityType = config.userIdentityType;
    this._workspaceDirectoryDescription = config.workspaceDirectoryDescription;
    this._workspaceDirectoryName = config.workspaceDirectoryName;
    this._workspaceType = config.workspaceType;
    this._activeDirectoryConfig.internalValue = config.activeDirectoryConfig;
    this._certificateBasedAuthProperties.internalValue = config.certificateBasedAuthProperties;
    this._samlProperties.internalValue = config.samlProperties;
    this._selfServicePermissions.internalValue = config.selfServicePermissions;
    this._workspaceAccessProperties.internalValue = config.workspaceAccessProperties;
    this._workspaceCreationProperties.internalValue = config.workspaceCreationProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // customer_user_name - computed: true, optional: false, required: false
  public get customerUserName() {
    return this.getStringAttribute('customer_user_name');
  }

  // directory_id - computed: true, optional: true, required: false
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  public resetDirectoryId() {
    this._directoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
  }

  // directory_name - computed: true, optional: false, required: false
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }

  // directory_type - computed: true, optional: false, required: false
  public get directoryType() {
    return this.getStringAttribute('directory_type');
  }

  // dns_ip_addresses - computed: true, optional: false, required: false
  public get dnsIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('dns_ip_addresses'));
  }

  // iam_role_id - computed: true, optional: false, required: false
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
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

  // ip_group_ids - computed: true, optional: true, required: false
  private _ipGroupIds?: string[]; 
  public get ipGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_group_ids'));
  }
  public set ipGroupIds(value: string[]) {
    this._ipGroupIds = value;
  }
  public resetIpGroupIds() {
    this._ipGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupIdsInput() {
    return this._ipGroupIds;
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

  // registration_code - computed: true, optional: false, required: false
  public get registrationCode() {
    return this.getStringAttribute('registration_code');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // user_identity_type - computed: true, optional: true, required: false
  private _userIdentityType?: string; 
  public get userIdentityType() {
    return this.getStringAttribute('user_identity_type');
  }
  public set userIdentityType(value: string) {
    this._userIdentityType = value;
  }
  public resetUserIdentityType() {
    this._userIdentityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityTypeInput() {
    return this._userIdentityType;
  }

  // workspace_directory_description - computed: false, optional: true, required: false
  private _workspaceDirectoryDescription?: string; 
  public get workspaceDirectoryDescription() {
    return this.getStringAttribute('workspace_directory_description');
  }
  public set workspaceDirectoryDescription(value: string) {
    this._workspaceDirectoryDescription = value;
  }
  public resetWorkspaceDirectoryDescription() {
    this._workspaceDirectoryDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceDirectoryDescriptionInput() {
    return this._workspaceDirectoryDescription;
  }

  // workspace_directory_name - computed: false, optional: true, required: false
  private _workspaceDirectoryName?: string; 
  public get workspaceDirectoryName() {
    return this.getStringAttribute('workspace_directory_name');
  }
  public set workspaceDirectoryName(value: string) {
    this._workspaceDirectoryName = value;
  }
  public resetWorkspaceDirectoryName() {
    this._workspaceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceDirectoryNameInput() {
    return this._workspaceDirectoryName;
  }

  // workspace_security_group_id - computed: true, optional: false, required: false
  public get workspaceSecurityGroupId() {
    return this.getStringAttribute('workspace_security_group_id');
  }

  // workspace_type - computed: false, optional: true, required: false
  private _workspaceType?: string; 
  public get workspaceType() {
    return this.getStringAttribute('workspace_type');
  }
  public set workspaceType(value: string) {
    this._workspaceType = value;
  }
  public resetWorkspaceType() {
    this._workspaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTypeInput() {
    return this._workspaceType;
  }

  // active_directory_config - computed: false, optional: true, required: false
  private _activeDirectoryConfig = new WorkspacesDirectoryActiveDirectoryConfigOutputReference(this, "active_directory_config");
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }
  public putActiveDirectoryConfig(value: WorkspacesDirectoryActiveDirectoryConfig) {
    this._activeDirectoryConfig.internalValue = value;
  }
  public resetActiveDirectoryConfig() {
    this._activeDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryConfigInput() {
    return this._activeDirectoryConfig.internalValue;
  }

  // certificate_based_auth_properties - computed: false, optional: true, required: false
  private _certificateBasedAuthProperties = new WorkspacesDirectoryCertificateBasedAuthPropertiesOutputReference(this, "certificate_based_auth_properties");
  public get certificateBasedAuthProperties() {
    return this._certificateBasedAuthProperties;
  }
  public putCertificateBasedAuthProperties(value: WorkspacesDirectoryCertificateBasedAuthProperties) {
    this._certificateBasedAuthProperties.internalValue = value;
  }
  public resetCertificateBasedAuthProperties() {
    this._certificateBasedAuthProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBasedAuthPropertiesInput() {
    return this._certificateBasedAuthProperties.internalValue;
  }

  // saml_properties - computed: false, optional: true, required: false
  private _samlProperties = new WorkspacesDirectorySamlPropertiesOutputReference(this, "saml_properties");
  public get samlProperties() {
    return this._samlProperties;
  }
  public putSamlProperties(value: WorkspacesDirectorySamlProperties) {
    this._samlProperties.internalValue = value;
  }
  public resetSamlProperties() {
    this._samlProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlPropertiesInput() {
    return this._samlProperties.internalValue;
  }

  // self_service_permissions - computed: false, optional: true, required: false
  private _selfServicePermissions = new WorkspacesDirectorySelfServicePermissionsOutputReference(this, "self_service_permissions");
  public get selfServicePermissions() {
    return this._selfServicePermissions;
  }
  public putSelfServicePermissions(value: WorkspacesDirectorySelfServicePermissions) {
    this._selfServicePermissions.internalValue = value;
  }
  public resetSelfServicePermissions() {
    this._selfServicePermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServicePermissionsInput() {
    return this._selfServicePermissions.internalValue;
  }

  // workspace_access_properties - computed: false, optional: true, required: false
  private _workspaceAccessProperties = new WorkspacesDirectoryWorkspaceAccessPropertiesOutputReference(this, "workspace_access_properties");
  public get workspaceAccessProperties() {
    return this._workspaceAccessProperties;
  }
  public putWorkspaceAccessProperties(value: WorkspacesDirectoryWorkspaceAccessProperties) {
    this._workspaceAccessProperties.internalValue = value;
  }
  public resetWorkspaceAccessProperties() {
    this._workspaceAccessProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceAccessPropertiesInput() {
    return this._workspaceAccessProperties.internalValue;
  }

  // workspace_creation_properties - computed: false, optional: true, required: false
  private _workspaceCreationProperties = new WorkspacesDirectoryWorkspaceCreationPropertiesOutputReference(this, "workspace_creation_properties");
  public get workspaceCreationProperties() {
    return this._workspaceCreationProperties;
  }
  public putWorkspaceCreationProperties(value: WorkspacesDirectoryWorkspaceCreationProperties) {
    this._workspaceCreationProperties.internalValue = value;
  }
  public resetWorkspaceCreationProperties() {
    this._workspaceCreationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceCreationPropertiesInput() {
    return this._workspaceCreationProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      ip_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipGroupIds),
      region: cdktf.stringToTerraform(this._region),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_identity_type: cdktf.stringToTerraform(this._userIdentityType),
      workspace_directory_description: cdktf.stringToTerraform(this._workspaceDirectoryDescription),
      workspace_directory_name: cdktf.stringToTerraform(this._workspaceDirectoryName),
      workspace_type: cdktf.stringToTerraform(this._workspaceType),
      active_directory_config: workspacesDirectoryActiveDirectoryConfigToTerraform(this._activeDirectoryConfig.internalValue),
      certificate_based_auth_properties: workspacesDirectoryCertificateBasedAuthPropertiesToTerraform(this._certificateBasedAuthProperties.internalValue),
      saml_properties: workspacesDirectorySamlPropertiesToTerraform(this._samlProperties.internalValue),
      self_service_permissions: workspacesDirectorySelfServicePermissionsToTerraform(this._selfServicePermissions.internalValue),
      workspace_access_properties: workspacesDirectoryWorkspaceAccessPropertiesToTerraform(this._workspaceAccessProperties.internalValue),
      workspace_creation_properties: workspacesDirectoryWorkspaceCreationPropertiesToTerraform(this._workspaceCreationProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_id: {
        value: cdktf.stringToHclTerraform(this._directoryId),
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
      ip_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      user_identity_type: {
        value: cdktf.stringToHclTerraform(this._userIdentityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_directory_description: {
        value: cdktf.stringToHclTerraform(this._workspaceDirectoryDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_directory_name: {
        value: cdktf.stringToHclTerraform(this._workspaceDirectoryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_type: {
        value: cdktf.stringToHclTerraform(this._workspaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_directory_config: {
        value: workspacesDirectoryActiveDirectoryConfigToHclTerraform(this._activeDirectoryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesDirectoryActiveDirectoryConfigList",
      },
      certificate_based_auth_properties: {
        value: workspacesDirectoryCertificateBasedAuthPropertiesToHclTerraform(this._certificateBasedAuthProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesDirectoryCertificateBasedAuthPropertiesList",
      },
      saml_properties: {
        value: workspacesDirectorySamlPropertiesToHclTerraform(this._samlProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesDirectorySamlPropertiesList",
      },
      self_service_permissions: {
        value: workspacesDirectorySelfServicePermissionsToHclTerraform(this._selfServicePermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesDirectorySelfServicePermissionsList",
      },
      workspace_access_properties: {
        value: workspacesDirectoryWorkspaceAccessPropertiesToHclTerraform(this._workspaceAccessProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesDirectoryWorkspaceAccessPropertiesList",
      },
      workspace_creation_properties: {
        value: workspacesDirectoryWorkspaceCreationPropertiesToHclTerraform(this._workspaceCreationProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesDirectoryWorkspaceCreationPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
