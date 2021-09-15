// https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaWorkgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#description AthenaWorkgroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#force_destroy AthenaWorkgroup#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#name AthenaWorkgroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#state AthenaWorkgroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags AthenaWorkgroup#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#tags_all AthenaWorkgroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#configuration AthenaWorkgroup#configuration}
  */
  readonly configuration?: AthenaWorkgroupConfiguration[];
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_option AthenaWorkgroup#encryption_option}
  */
  readonly encryptionOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#kms_key_arn AthenaWorkgroup#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

function athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encryption_option: cdktf.stringToTerraform(struct!.encryptionOption),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export interface AthenaWorkgroupConfigurationResultConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#output_location AthenaWorkgroup#output_location}
  */
  readonly outputLocation?: string;
  /**
  * encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#encryption_configuration AthenaWorkgroup#encryption_configuration}
  */
  readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration[];
}

function athenaWorkgroupConfigurationResultConfigurationToTerraform(struct?: AthenaWorkgroupConfigurationResultConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
    encryption_configuration: cdktf.listMapper(athenaWorkgroupConfigurationResultConfigurationEncryptionConfigurationToTerraform)(struct!.encryptionConfiguration),
  }
}

export interface AthenaWorkgroupConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#bytes_scanned_cutoff_per_query AthenaWorkgroup#bytes_scanned_cutoff_per_query}
  */
  readonly bytesScannedCutoffPerQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#enforce_workgroup_configuration AthenaWorkgroup#enforce_workgroup_configuration}
  */
  readonly enforceWorkgroupConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#publish_cloudwatch_metrics_enabled AthenaWorkgroup#publish_cloudwatch_metrics_enabled}
  */
  readonly publishCloudwatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#requester_pays_enabled AthenaWorkgroup#requester_pays_enabled}
  */
  readonly requesterPaysEnabled?: boolean | cdktf.IResolvable;
  /**
  * result_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html#result_configuration AthenaWorkgroup#result_configuration}
  */
  readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration[];
}

function athenaWorkgroupConfigurationToTerraform(struct?: AthenaWorkgroupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bytes_scanned_cutoff_per_query: cdktf.numberToTerraform(struct!.bytesScannedCutoffPerQuery),
    enforce_workgroup_configuration: cdktf.booleanToTerraform(struct!.enforceWorkgroupConfiguration),
    publish_cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.publishCloudwatchMetricsEnabled),
    requester_pays_enabled: cdktf.booleanToTerraform(struct!.requesterPaysEnabled),
    result_configuration: cdktf.listMapper(athenaWorkgroupConfigurationResultConfigurationToTerraform)(struct!.resultConfiguration),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup}
*/
export class AthenaWorkgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_athena_workgroup";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html aws_athena_workgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaWorkgroupConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_workgroup',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._state = config.state;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._configuration = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
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

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string ) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state
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

  // configuration - computed: false, optional: true, required: false
  private _configuration?: AthenaWorkgroupConfiguration[];
  public get configuration() {
    return this.interpolationForAttribute('configuration') as any;
  }
  public set configuration(value: AthenaWorkgroupConfiguration[] ) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      configuration: cdktf.listMapper(athenaWorkgroupConfigurationToTerraform)(this._configuration),
    };
  }
}
