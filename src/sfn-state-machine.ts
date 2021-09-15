// https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SfnStateMachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#definition SfnStateMachine#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#name SfnStateMachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#role_arn SfnStateMachine#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tags SfnStateMachine#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tags_all SfnStateMachine#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#type SfnStateMachine#type}
  */
  readonly type?: string;
  /**
  * logging_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#logging_configuration SfnStateMachine#logging_configuration}
  */
  readonly loggingConfiguration?: SfnStateMachineLoggingConfiguration[];
  /**
  * tracing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#tracing_configuration SfnStateMachine#tracing_configuration}
  */
  readonly tracingConfiguration?: SfnStateMachineTracingConfiguration[];
}
export interface SfnStateMachineLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#include_execution_data SfnStateMachine#include_execution_data}
  */
  readonly includeExecutionData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#level SfnStateMachine#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#log_destination SfnStateMachine#log_destination}
  */
  readonly logDestination?: string;
}

function sfnStateMachineLoggingConfigurationToTerraform(struct?: SfnStateMachineLoggingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    include_execution_data: cdktf.booleanToTerraform(struct!.includeExecutionData),
    level: cdktf.stringToTerraform(struct!.level),
    log_destination: cdktf.stringToTerraform(struct!.logDestination),
  }
}

export interface SfnStateMachineTracingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html#enabled SfnStateMachine#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

function sfnStateMachineTracingConfigurationToTerraform(struct?: SfnStateMachineTracingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine}
*/
export class SfnStateMachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sfn_state_machine";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sfn_state_machine.html aws_sfn_state_machine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SfnStateMachineConfig
  */
  public constructor(scope: Construct, id: string, config: SfnStateMachineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sfn_state_machine',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definition = config.definition;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._loggingConfiguration = config.loggingConfiguration;
    this._tracingConfiguration = config.tracingConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // definition - computed: false, optional: false, required: true
  private _definition: string;
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration?: SfnStateMachineLoggingConfiguration[];
  public get loggingConfiguration() {
    return this.interpolationForAttribute('logging_configuration') as any;
  }
  public set loggingConfiguration(value: SfnStateMachineLoggingConfiguration[] ) {
    this._loggingConfiguration = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration
  }

  // tracing_configuration - computed: false, optional: true, required: false
  private _tracingConfiguration?: SfnStateMachineTracingConfiguration[];
  public get tracingConfiguration() {
    return this.interpolationForAttribute('tracing_configuration') as any;
  }
  public set tracingConfiguration(value: SfnStateMachineTracingConfiguration[] ) {
    this._tracingConfiguration = value;
  }
  public resetTracingConfiguration() {
    this._tracingConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigurationInput() {
    return this._tracingConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.stringToTerraform(this._definition),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      logging_configuration: cdktf.listMapper(sfnStateMachineLoggingConfigurationToTerraform)(this._loggingConfiguration),
      tracing_configuration: cdktf.listMapper(sfnStateMachineTracingConfigurationToTerraform)(this._tracingConfiguration),
    };
  }
}
