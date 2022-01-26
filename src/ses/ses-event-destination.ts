// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Email Service
*/
export interface SesEventDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#enabled SesEventDestination#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#matching_types SesEventDestination#matching_types}
  */
  readonly matchingTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#name SesEventDestination#name}
  */
  readonly name: string;
  /**
  * cloudwatch_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}
  */
  readonly cloudwatchDestination?: SesEventDestinationCloudwatchDestination[] | cdktf.IResolvable;
  /**
  * kinesis_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}
  */
  readonly kinesisDestination?: SesEventDestinationKinesisDestination;
  /**
  * sns_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#sns_destination SesEventDestination#sns_destination}
  */
  readonly snsDestination?: SesEventDestinationSnsDestination;
}
export interface SesEventDestinationCloudwatchDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#default_value SesEventDestination#default_value}
  */
  readonly defaultValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#dimension_name SesEventDestination#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#value_source SesEventDestination#value_source}
  */
  readonly valueSource: string;
}

export function sesEventDestinationCloudwatchDestinationToTerraform(struct?: SesEventDestinationCloudwatchDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    value_source: cdktf.stringToTerraform(struct!.valueSource),
  }
}

export interface SesEventDestinationKinesisDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#role_arn SesEventDestination#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#stream_arn SesEventDestination#stream_arn}
  */
  readonly streamArn: string;
}

export function sesEventDestinationKinesisDestinationToTerraform(struct?: SesEventDestinationKinesisDestinationOutputReference | SesEventDestinationKinesisDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}

export class SesEventDestinationKinesisDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SesEventDestinationKinesisDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesEventDestinationKinesisDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._streamArn = value.streamArn;
    }
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

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface SesEventDestinationSnsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination#topic_arn SesEventDestination#topic_arn}
  */
  readonly topicArn: string;
}

export function sesEventDestinationSnsDestinationToTerraform(struct?: SesEventDestinationSnsDestinationOutputReference | SesEventDestinationSnsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export class SesEventDestinationSnsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SesEventDestinationSnsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SesEventDestinationSnsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topicArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topicArn = value.topicArn;
    }
  }

  // topic_arn - computed: false, optional: false, required: true
  private _topicArn?: string; 
  public get topicArn() {
    return this.getStringAttribute('topic_arn');
  }
  public set topicArn(value: string) {
    this._topicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicArnInput() {
    return this._topicArn;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination aws_ses_event_destination}
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
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ses_event_destination aws_ses_event_destination} Resource
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
    this._kinesisDestination.internalValue = config.kinesisDestination;
    this._snsDestination.internalValue = config.snsDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // configuration_set_name - computed: false, optional: false, required: true
  private _configurationSetName?: string; 
  public get configurationSetName() {
    return this.getStringAttribute('configuration_set_name');
  }
  public set configurationSetName(value: string) {
    this._configurationSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSetNameInput() {
    return this._configurationSetName;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matching_types - computed: false, optional: false, required: true
  private _matchingTypes?: string[]; 
  public get matchingTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('matching_types'));
  }
  public set matchingTypes(value: string[]) {
    this._matchingTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypesInput() {
    return this._matchingTypes;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // cloudwatch_destination - computed: false, optional: true, required: false
  private _cloudwatchDestination?: SesEventDestinationCloudwatchDestination[] | cdktf.IResolvable; 
  public get cloudwatchDestination() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('cloudwatch_destination')));
  }
  public set cloudwatchDestination(value: SesEventDestinationCloudwatchDestination[] | cdktf.IResolvable) {
    this._cloudwatchDestination = value;
  }
  public resetCloudwatchDestination() {
    this._cloudwatchDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchDestinationInput() {
    return this._cloudwatchDestination;
  }

  // kinesis_destination - computed: false, optional: true, required: false
  private _kinesisDestination = new SesEventDestinationKinesisDestinationOutputReference(this, "kinesis_destination", true);
  public get kinesisDestination() {
    return this._kinesisDestination;
  }
  public putKinesisDestination(value: SesEventDestinationKinesisDestination) {
    this._kinesisDestination.internalValue = value;
  }
  public resetKinesisDestination() {
    this._kinesisDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDestinationInput() {
    return this._kinesisDestination.internalValue;
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination = new SesEventDestinationSnsDestinationOutputReference(this, "sns_destination", true);
  public get snsDestination() {
    return this._snsDestination;
  }
  public putSnsDestination(value: SesEventDestinationSnsDestination) {
    this._snsDestination.internalValue = value;
  }
  public resetSnsDestination() {
    this._snsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDestinationInput() {
    return this._snsDestination.internalValue;
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
      kinesis_destination: sesEventDestinationKinesisDestinationToTerraform(this._kinesisDestination.internalValue),
      sns_destination: sesEventDestinationSnsDestinationToTerraform(this._snsDestination.internalValue),
    };
  }
}
