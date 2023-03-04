// https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#id ConfigConfigurationRecorder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#name ConfigConfigurationRecorder#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#role_arn ConfigConfigurationRecorder#role_arn}
  */
  readonly roleArn: string;
  /**
  * recording_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#recording_group ConfigConfigurationRecorder#recording_group}
  */
  readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup;
}
export interface ConfigConfigurationRecorderRecordingGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#all_supported ConfigConfigurationRecorder#all_supported}
  */
  readonly allSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
  */
  readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
}

export function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroupOutputReference | ConfigConfigurationRecorderRecordingGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_supported: cdktf.booleanToTerraform(struct!.allSupported),
    include_global_resource_types: cdktf.booleanToTerraform(struct!.includeGlobalResourceTypes),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceTypes),
  }
}

export class ConfigConfigurationRecorderRecordingGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigConfigurationRecorderRecordingGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSupported = this._allSupported;
    }
    if (this._includeGlobalResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGlobalResourceTypes = this._includeGlobalResourceTypes;
    }
    if (this._resourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypes = this._resourceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigConfigurationRecorderRecordingGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allSupported = undefined;
      this._includeGlobalResourceTypes = undefined;
      this._resourceTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allSupported = value.allSupported;
      this._includeGlobalResourceTypes = value.includeGlobalResourceTypes;
      this._resourceTypes = value.resourceTypes;
    }
  }

  // all_supported - computed: false, optional: true, required: false
  private _allSupported?: boolean | cdktf.IResolvable; 
  public get allSupported() {
    return this.getBooleanAttribute('all_supported');
  }
  public set allSupported(value: boolean | cdktf.IResolvable) {
    this._allSupported = value;
  }
  public resetAllSupported() {
    this._allSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSupportedInput() {
    return this._allSupported;
  }

  // include_global_resource_types - computed: false, optional: true, required: false
  private _includeGlobalResourceTypes?: boolean | cdktf.IResolvable; 
  public get includeGlobalResourceTypes() {
    return this.getBooleanAttribute('include_global_resource_types');
  }
  public set includeGlobalResourceTypes(value: boolean | cdktf.IResolvable) {
    this._includeGlobalResourceTypes = value;
  }
  public resetIncludeGlobalResourceTypes() {
    this._includeGlobalResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGlobalResourceTypesInput() {
    return this._includeGlobalResourceTypes;
  }

  // resource_types - computed: false, optional: true, required: false
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  public resetResourceTypes() {
    this._resourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder aws_config_configuration_recorder}
*/
export class ConfigConfigurationRecorder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_config_configuration_recorder";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder aws_config_configuration_recorder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationRecorderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_recorder',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
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
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._recordingGroup.internalValue = config.recordingGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // recording_group - computed: false, optional: true, required: false
  private _recordingGroup = new ConfigConfigurationRecorderRecordingGroupOutputReference(this, "recording_group");
  public get recordingGroup() {
    return this._recordingGroup;
  }
  public putRecordingGroup(value: ConfigConfigurationRecorderRecordingGroup) {
    this._recordingGroup.internalValue = value;
  }
  public resetRecordingGroup() {
    this._recordingGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingGroupInput() {
    return this._recordingGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      recording_group: configConfigurationRecorderRecordingGroupToTerraform(this._recordingGroup.internalValue),
    };
  }
}
