/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspacesWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#bundle_id WorkspacesWorkspace#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#directory_id WorkspacesWorkspace#directory_id}
  */
  readonly directoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#id WorkspacesWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#region WorkspacesWorkspace#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#root_volume_encryption_enabled WorkspacesWorkspace#root_volume_encryption_enabled}
  */
  readonly rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#tags WorkspacesWorkspace#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#tags_all WorkspacesWorkspace#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#user_name WorkspacesWorkspace#user_name}
  */
  readonly userName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#user_volume_encryption_enabled WorkspacesWorkspace#user_volume_encryption_enabled}
  */
  readonly userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#volume_encryption_key WorkspacesWorkspace#volume_encryption_key}
  */
  readonly volumeEncryptionKey?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#timeouts WorkspacesWorkspace#timeouts}
  */
  readonly timeouts?: WorkspacesWorkspaceTimeouts;
  /**
  * workspace_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#workspace_properties WorkspacesWorkspace#workspace_properties}
  */
  readonly workspaceProperties?: WorkspacesWorkspaceWorkspaceProperties;
}
export interface WorkspacesWorkspaceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#create WorkspacesWorkspace#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#delete WorkspacesWorkspace#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#update WorkspacesWorkspace#update}
  */
  readonly update?: string;
}

export function workspacesWorkspaceTimeoutsToTerraform(struct?: WorkspacesWorkspaceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function workspacesWorkspaceTimeoutsToHclTerraform(struct?: WorkspacesWorkspaceTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspaceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspacesWorkspaceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspaceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface WorkspacesWorkspaceWorkspaceProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#compute_type_name WorkspacesWorkspace#compute_type_name}
  */
  readonly computeTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#root_volume_size_gib WorkspacesWorkspace#root_volume_size_gib}
  */
  readonly rootVolumeSizeGib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#running_mode WorkspacesWorkspace#running_mode}
  */
  readonly runningMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#running_mode_auto_stop_timeout_in_minutes WorkspacesWorkspace#running_mode_auto_stop_timeout_in_minutes}
  */
  readonly runningModeAutoStopTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#user_volume_size_gib WorkspacesWorkspace#user_volume_size_gib}
  */
  readonly userVolumeSizeGib?: number;
}

export function workspacesWorkspaceWorkspacePropertiesToTerraform(struct?: WorkspacesWorkspaceWorkspacePropertiesOutputReference | WorkspacesWorkspaceWorkspaceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_type_name: cdktf.stringToTerraform(struct!.computeTypeName),
    root_volume_size_gib: cdktf.numberToTerraform(struct!.rootVolumeSizeGib),
    running_mode: cdktf.stringToTerraform(struct!.runningMode),
    running_mode_auto_stop_timeout_in_minutes: cdktf.numberToTerraform(struct!.runningModeAutoStopTimeoutInMinutes),
    user_volume_size_gib: cdktf.numberToTerraform(struct!.userVolumeSizeGib),
  }
}


export function workspacesWorkspaceWorkspacePropertiesToHclTerraform(struct?: WorkspacesWorkspaceWorkspacePropertiesOutputReference | WorkspacesWorkspaceWorkspaceProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_type_name: {
      value: cdktf.stringToHclTerraform(struct!.computeTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_volume_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.rootVolumeSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_mode: {
      value: cdktf.stringToHclTerraform(struct!.runningMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_mode_auto_stop_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.runningModeAutoStopTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_volume_size_gib: {
      value: cdktf.numberToHclTerraform(struct!.userVolumeSizeGib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspacesWorkspaceWorkspacePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspacesWorkspaceWorkspaceProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeTypeName = this._computeTypeName;
    }
    if (this._rootVolumeSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolumeSizeGib = this._rootVolumeSizeGib;
    }
    if (this._runningMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningMode = this._runningMode;
    }
    if (this._runningModeAutoStopTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningModeAutoStopTimeoutInMinutes = this._runningModeAutoStopTimeoutInMinutes;
    }
    if (this._userVolumeSizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVolumeSizeGib = this._userVolumeSizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspacesWorkspaceWorkspaceProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeTypeName = undefined;
      this._rootVolumeSizeGib = undefined;
      this._runningMode = undefined;
      this._runningModeAutoStopTimeoutInMinutes = undefined;
      this._userVolumeSizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeTypeName = value.computeTypeName;
      this._rootVolumeSizeGib = value.rootVolumeSizeGib;
      this._runningMode = value.runningMode;
      this._runningModeAutoStopTimeoutInMinutes = value.runningModeAutoStopTimeoutInMinutes;
      this._userVolumeSizeGib = value.userVolumeSizeGib;
    }
  }

  // compute_type_name - computed: false, optional: true, required: false
  private _computeTypeName?: string; 
  public get computeTypeName() {
    return this.getStringAttribute('compute_type_name');
  }
  public set computeTypeName(value: string) {
    this._computeTypeName = value;
  }
  public resetComputeTypeName() {
    this._computeTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeNameInput() {
    return this._computeTypeName;
  }

  // root_volume_size_gib - computed: false, optional: true, required: false
  private _rootVolumeSizeGib?: number; 
  public get rootVolumeSizeGib() {
    return this.getNumberAttribute('root_volume_size_gib');
  }
  public set rootVolumeSizeGib(value: number) {
    this._rootVolumeSizeGib = value;
  }
  public resetRootVolumeSizeGib() {
    this._rootVolumeSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeSizeGibInput() {
    return this._rootVolumeSizeGib;
  }

  // running_mode - computed: false, optional: true, required: false
  private _runningMode?: string; 
  public get runningMode() {
    return this.getStringAttribute('running_mode');
  }
  public set runningMode(value: string) {
    this._runningMode = value;
  }
  public resetRunningMode() {
    this._runningMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeInput() {
    return this._runningMode;
  }

  // running_mode_auto_stop_timeout_in_minutes - computed: true, optional: true, required: false
  private _runningModeAutoStopTimeoutInMinutes?: number; 
  public get runningModeAutoStopTimeoutInMinutes() {
    return this.getNumberAttribute('running_mode_auto_stop_timeout_in_minutes');
  }
  public set runningModeAutoStopTimeoutInMinutes(value: number) {
    this._runningModeAutoStopTimeoutInMinutes = value;
  }
  public resetRunningModeAutoStopTimeoutInMinutes() {
    this._runningModeAutoStopTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningModeAutoStopTimeoutInMinutesInput() {
    return this._runningModeAutoStopTimeoutInMinutes;
  }

  // user_volume_size_gib - computed: false, optional: true, required: false
  private _userVolumeSizeGib?: number; 
  public get userVolumeSizeGib() {
    return this.getNumberAttribute('user_volume_size_gib');
  }
  public set userVolumeSizeGib(value: number) {
    this._userVolumeSizeGib = value;
  }
  public resetUserVolumeSizeGib() {
    this._userVolumeSizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeSizeGibInput() {
    return this._userVolumeSizeGib;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace aws_workspaces_workspace}
*/
export class WorkspacesWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspaces_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspacesWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspacesWorkspace to import
  * @param importFromId The id of the existing WorkspacesWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspacesWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspaces_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/workspaces_workspace aws_workspaces_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspacesWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspacesWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_workspace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
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
    this._bundleId = config.bundleId;
    this._directoryId = config.directoryId;
    this._id = config.id;
    this._region = config.region;
    this._rootVolumeEncryptionEnabled = config.rootVolumeEncryptionEnabled;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userName = config.userName;
    this._userVolumeEncryptionEnabled = config.userVolumeEncryptionEnabled;
    this._volumeEncryptionKey = config.volumeEncryptionKey;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceProperties.internalValue = config.workspaceProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // computer_name - computed: true, optional: false, required: false
  public get computerName() {
    return this.getStringAttribute('computer_name');
  }

  // directory_id - computed: false, optional: false, required: true
  private _directoryId?: string; 
  public get directoryId() {
    return this.getStringAttribute('directory_id');
  }
  public set directoryId(value: string) {
    this._directoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryIdInput() {
    return this._directoryId;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // root_volume_encryption_enabled - computed: false, optional: true, required: false
  private _rootVolumeEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get rootVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('root_volume_encryption_enabled');
  }
  public set rootVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._rootVolumeEncryptionEnabled = value;
  }
  public resetRootVolumeEncryptionEnabled() {
    this._rootVolumeEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeEncryptionEnabledInput() {
    return this._rootVolumeEncryptionEnabled;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // user_volume_encryption_enabled - computed: false, optional: true, required: false
  private _userVolumeEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get userVolumeEncryptionEnabled() {
    return this.getBooleanAttribute('user_volume_encryption_enabled');
  }
  public set userVolumeEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._userVolumeEncryptionEnabled = value;
  }
  public resetUserVolumeEncryptionEnabled() {
    this._userVolumeEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVolumeEncryptionEnabledInput() {
    return this._userVolumeEncryptionEnabled;
  }

  // volume_encryption_key - computed: false, optional: true, required: false
  private _volumeEncryptionKey?: string; 
  public get volumeEncryptionKey() {
    return this.getStringAttribute('volume_encryption_key');
  }
  public set volumeEncryptionKey(value: string) {
    this._volumeEncryptionKey = value;
  }
  public resetVolumeEncryptionKey() {
    this._volumeEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeEncryptionKeyInput() {
    return this._volumeEncryptionKey;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkspacesWorkspaceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkspacesWorkspaceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_properties - computed: false, optional: true, required: false
  private _workspaceProperties = new WorkspacesWorkspaceWorkspacePropertiesOutputReference(this, "workspace_properties");
  public get workspaceProperties() {
    return this._workspaceProperties;
  }
  public putWorkspaceProperties(value: WorkspacesWorkspaceWorkspaceProperties) {
    this._workspaceProperties.internalValue = value;
  }
  public resetWorkspaceProperties() {
    this._workspaceProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspacePropertiesInput() {
    return this._workspaceProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      directory_id: cdktf.stringToTerraform(this._directoryId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      root_volume_encryption_enabled: cdktf.booleanToTerraform(this._rootVolumeEncryptionEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_name: cdktf.stringToTerraform(this._userName),
      user_volume_encryption_enabled: cdktf.booleanToTerraform(this._userVolumeEncryptionEnabled),
      volume_encryption_key: cdktf.stringToTerraform(this._volumeEncryptionKey),
      timeouts: workspacesWorkspaceTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_properties: workspacesWorkspaceWorkspacePropertiesToTerraform(this._workspaceProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_volume_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._rootVolumeEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_volume_encryption_enabled: {
        value: cdktf.booleanToHclTerraform(this._userVolumeEncryptionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_encryption_key: {
        value: cdktf.stringToHclTerraform(this._volumeEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: workspacesWorkspaceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspacesWorkspaceTimeouts",
      },
      workspace_properties: {
        value: workspacesWorkspaceWorkspacePropertiesToHclTerraform(this._workspaceProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspacesWorkspaceWorkspacePropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
