// https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigConfigurationRecorderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#name ConfigConfigurationRecorder#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#role_arn ConfigConfigurationRecorder#role_arn}
  */
  readonly roleArn: string;
  /**
  * recording_group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#recording_group ConfigConfigurationRecorder#recording_group}
  */
  readonly recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
}
export interface ConfigConfigurationRecorderRecordingGroup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#all_supported ConfigConfigurationRecorder#all_supported}
  */
  readonly allSupported?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#include_global_resource_types ConfigConfigurationRecorder#include_global_resource_types}
  */
  readonly includeGlobalResourceTypes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html#resource_types ConfigConfigurationRecorder#resource_types}
  */
  readonly resourceTypes?: string[];
}

function configConfigurationRecorderRecordingGroupToTerraform(struct?: ConfigConfigurationRecorderRecordingGroup): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_supported: cdktf.booleanToTerraform(struct!.allSupported),
    include_global_resource_types: cdktf.booleanToTerraform(struct!.includeGlobalResourceTypes),
    resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder}
*/
export class ConfigConfigurationRecorder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_config_configuration_recorder";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_configuration_recorder.html aws_config_configuration_recorder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigConfigurationRecorderConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigConfigurationRecorderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_config_configuration_recorder',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._recordingGroup = config.recordingGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // recording_group - computed: false, optional: true, required: false
  private _recordingGroup?: ConfigConfigurationRecorderRecordingGroup[];
  public get recordingGroup() {
    return this.interpolationForAttribute('recording_group') as any;
  }
  public set recordingGroup(value: ConfigConfigurationRecorderRecordingGroup[] ) {
    this._recordingGroup = value;
  }
  public resetRecordingGroup() {
    this._recordingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordingGroupInput() {
    return this._recordingGroup
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      recording_group: cdktf.listMapper(configConfigurationRecorderRecordingGroupToTerraform)(this._recordingGroup),
    };
  }
}
