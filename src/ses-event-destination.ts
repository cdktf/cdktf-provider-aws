// https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SesEventDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#configuration_set_name SesEventDestination#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#enabled SesEventDestination#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#matching_types SesEventDestination#matching_types}
  */
  readonly matchingTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#name SesEventDestination#name}
  */
  readonly name: string;
  /**
  * cloudwatch_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#cloudwatch_destination SesEventDestination#cloudwatch_destination}
  */
  readonly cloudwatchDestination?: SesEventDestinationCloudwatchDestination[];
  /**
  * kinesis_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#kinesis_destination SesEventDestination#kinesis_destination}
  */
  readonly kinesisDestination?: SesEventDestinationKinesisDestination[];
  /**
  * sns_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#sns_destination SesEventDestination#sns_destination}
  */
  readonly snsDestination?: SesEventDestinationSnsDestination[];
}
export interface SesEventDestinationCloudwatchDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#default_value SesEventDestination#default_value}
  */
  readonly defaultValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#dimension_name SesEventDestination#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#value_source SesEventDestination#value_source}
  */
  readonly valueSource: string;
}

function sesEventDestinationCloudwatchDestinationToTerraform(struct?: SesEventDestinationCloudwatchDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    value_source: cdktf.stringToTerraform(struct!.valueSource),
  }
}

export interface SesEventDestinationKinesisDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#role_arn SesEventDestination#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#stream_arn SesEventDestination#stream_arn}
  */
  readonly streamArn: string;
}

function sesEventDestinationKinesisDestinationToTerraform(struct?: SesEventDestinationKinesisDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export interface SesEventDestinationSnsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html#topic_arn SesEventDestination#topic_arn}
  */
  readonly topicArn: string;
}

function sesEventDestinationSnsDestinationToTerraform(struct?: SesEventDestinationSnsDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination}
*/
export class SesEventDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ses_event_destination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html aws_ses_event_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SesEventDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: SesEventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ses_event_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._configurationSetName = config.configurationSetName;
    this._enabled = config.enabled;
    this._matchingTypes = config.matchingTypes;
    this._name = config.name;
    this._cloudwatchDestination = config.cloudwatchDestination;
    this._kinesisDestination = config.kinesisDestination;
    this._snsDestination = config.snsDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName: string;
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matching_types - computed: false, optional: false, required: true
  private _matchingTypes: string[];
  public get matchingTypes() {
    return this.getListAttribute('matching_types');
  }
  public set matchingTypes(value: string[]) {
    this._matchingTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypesInput() {
    return this._matchingTypes
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

  // cloudwatch_destination - computed: false, optional: true, required: false
  private _cloudwatchDestination?: SesEventDestinationCloudwatchDestination[];
  public get cloudwatchDestination() {
    return this.interpolationForAttribute('cloudwatch_destination') as any;
  }
  public set cloudwatchDestination(value: SesEventDestinationCloudwatchDestination[] ) {
    this._cloudwatchDestination = value;
  }
  public resetCloudwatchDestination() {
    this._cloudwatchDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchDestinationInput() {
    return this._cloudwatchDestination
  }

  // kinesis_destination - computed: false, optional: true, required: false
  private _kinesisDestination?: SesEventDestinationKinesisDestination[];
  public get kinesisDestination() {
    return this.interpolationForAttribute('kinesis_destination') as any;
  }
  public set kinesisDestination(value: SesEventDestinationKinesisDestination[] ) {
    this._kinesisDestination = value;
  }
  public resetKinesisDestination() {
    this._kinesisDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDestinationInput() {
    return this._kinesisDestination
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination?: SesEventDestinationSnsDestination[];
  public get snsDestination() {
    return this.interpolationForAttribute('sns_destination') as any;
  }
  public set snsDestination(value: SesEventDestinationSnsDestination[] ) {
    this._snsDestination = value;
  }
  public resetSnsDestination() {
    this._snsDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDestinationInput() {
    return this._snsDestination
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      matching_types: cdktf.listMapper(cdktf.stringToTerraform)(this._matchingTypes),
      name: cdktf.stringToTerraform(this._name),
      cloudwatch_destination: cdktf.listMapper(sesEventDestinationCloudwatchDestinationToTerraform)(this._cloudwatchDestination),
      kinesis_destination: cdktf.listMapper(sesEventDestinationKinesisDestinationToTerraform)(this._kinesisDestination),
      sns_destination: cdktf.listMapper(sesEventDestinationSnsDestinationToTerraform)(this._snsDestination),
    };
  }
}
