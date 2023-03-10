// https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2ConfigurationSetEventDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#configuration_set_name Sesv2ConfigurationSetEventDestination#configuration_set_name}
  */
  readonly configurationSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#event_destination_name Sesv2ConfigurationSetEventDestination#event_destination_name}
  */
  readonly eventDestinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#id Sesv2ConfigurationSetEventDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * event_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#event_destination Sesv2ConfigurationSetEventDestination#event_destination}
  */
  readonly eventDestination: Sesv2ConfigurationSetEventDestinationEventDestination;
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#default_dimension_value Sesv2ConfigurationSetEventDestination#default_dimension_value}
  */
  readonly defaultDimensionValue: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#dimension_name Sesv2ConfigurationSetEventDestination#dimension_name}
  */
  readonly dimensionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#dimension_value_source Sesv2ConfigurationSetEventDestination#dimension_value_source}
  */
  readonly dimensionValueSource: string;
}

export function sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_dimension_value: cdktf.stringToTerraform(struct!.defaultDimensionValue),
    dimension_name: cdktf.stringToTerraform(struct!.dimensionName),
    dimension_value_source: cdktf.stringToTerraform(struct!.dimensionValueSource),
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDimensionValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDimensionValue = this._defaultDimensionValue;
    }
    if (this._dimensionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionName = this._dimensionName;
    }
    if (this._dimensionValueSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionValueSource = this._dimensionValueSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultDimensionValue = undefined;
      this._dimensionName = undefined;
      this._dimensionValueSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultDimensionValue = value.defaultDimensionValue;
      this._dimensionName = value.dimensionName;
      this._dimensionValueSource = value.dimensionValueSource;
    }
  }

  // default_dimension_value - computed: false, optional: false, required: true
  private _defaultDimensionValue?: string; 
  public get defaultDimensionValue() {
    return this.getStringAttribute('default_dimension_value');
  }
  public set defaultDimensionValue(value: string) {
    this._defaultDimensionValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDimensionValueInput() {
    return this._defaultDimensionValue;
  }

  // dimension_name - computed: false, optional: false, required: true
  private _dimensionName?: string; 
  public get dimensionName() {
    return this.getStringAttribute('dimension_name');
  }
  public set dimensionName(value: string) {
    this._dimensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionNameInput() {
    return this._dimensionName;
  }

  // dimension_value_source - computed: false, optional: false, required: true
  private _dimensionValueSource?: string; 
  public get dimensionValueSource() {
    return this.getStringAttribute('dimension_value_source');
  }
  public set dimensionValueSource(value: string) {
    this._dimensionValueSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionValueSourceInput() {
    return this._dimensionValueSource;
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList extends cdktf.ComplexList {
  public internalValue? : Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference {
    return new Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination {
  /**
  * dimension_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#dimension_configuration Sesv2ConfigurationSetEventDestination#dimension_configuration}
  */
  readonly dimensionConfiguration: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | cdktf.IResolvable;
}

export function sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension_configuration: cdktf.listMapper(sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationToTerraform, true)(struct!.dimensionConfiguration),
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensionConfiguration = this._dimensionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensionConfiguration.internalValue = value.dimensionConfiguration;
    }
  }

  // dimension_configuration - computed: false, optional: false, required: true
  private _dimensionConfiguration = new Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfigurationList(this, "dimension_configuration", false);
  public get dimensionConfiguration() {
    return this._dimensionConfiguration;
  }
  public putDimensionConfiguration(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationDimensionConfiguration[] | cdktf.IResolvable) {
    this._dimensionConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionConfigurationInput() {
    return this._dimensionConfiguration.internalValue;
  }
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#delivery_stream_arn Sesv2ConfigurationSetEventDestination#delivery_stream_arn}
  */
  readonly deliveryStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#iam_role_arn Sesv2ConfigurationSetEventDestination#iam_role_arn}
  */
  readonly iamRoleArn: string;
}

export function sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_stream_arn: cdktf.stringToTerraform(struct!.deliveryStreamArn),
    iam_role_arn: cdktf.stringToTerraform(struct!.iamRoleArn),
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deliveryStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
    }
    if (this._iamRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArn = this._iamRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deliveryStreamArn = undefined;
      this._iamRoleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deliveryStreamArn = value.deliveryStreamArn;
      this._iamRoleArn = value.iamRoleArn;
    }
  }

  // delivery_stream_arn - computed: false, optional: false, required: true
  private _deliveryStreamArn?: string; 
  public get deliveryStreamArn() {
    return this.getStringAttribute('delivery_stream_arn');
  }
  public set deliveryStreamArn(value: string) {
    this._deliveryStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStreamArnInput() {
    return this._deliveryStreamArn;
  }

  // iam_role_arn - computed: false, optional: false, required: true
  private _iamRoleArn?: string; 
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
  public set iamRoleArn(value: string) {
    this._iamRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnInput() {
    return this._iamRoleArn;
  }
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#application_arn Sesv2ConfigurationSetEventDestination#application_arn}
  */
  readonly applicationArn: string;
}

export function sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_arn: cdktf.stringToTerraform(struct!.applicationArn),
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationArn = this._applicationArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationArn = value.applicationArn;
    }
  }

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }
}
export interface Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#topic_arn Sesv2ConfigurationSetEventDestination#topic_arn}
  */
  readonly topicArn: string;
}

export function sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic_arn: cdktf.stringToTerraform(struct!.topicArn),
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicArn = this._topicArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination | undefined) {
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
export interface Sesv2ConfigurationSetEventDestinationEventDestination {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#enabled Sesv2ConfigurationSetEventDestination#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#matching_event_types Sesv2ConfigurationSetEventDestination#matching_event_types}
  */
  readonly matchingEventTypes: string[];
  /**
  * cloud_watch_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#cloud_watch_destination Sesv2ConfigurationSetEventDestination#cloud_watch_destination}
  */
  readonly cloudWatchDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination;
  /**
  * kinesis_firehose_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#kinesis_firehose_destination Sesv2ConfigurationSetEventDestination#kinesis_firehose_destination}
  */
  readonly kinesisFirehoseDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination;
  /**
  * pinpoint_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#pinpoint_destination Sesv2ConfigurationSetEventDestination#pinpoint_destination}
  */
  readonly pinpointDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination;
  /**
  * sns_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination#sns_destination Sesv2ConfigurationSetEventDestination#sns_destination}
  */
  readonly snsDestination?: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination;
}

export function sesv2ConfigurationSetEventDestinationEventDestinationToTerraform(struct?: Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference | Sesv2ConfigurationSetEventDestinationEventDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    matching_event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchingEventTypes),
    cloud_watch_destination: sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationToTerraform(struct!.cloudWatchDestination),
    kinesis_firehose_destination: sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationToTerraform(struct!.kinesisFirehoseDestination),
    pinpoint_destination: sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationToTerraform(struct!.pinpointDestination),
    sns_destination: sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationToTerraform(struct!.snsDestination),
  }
}

export class Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Sesv2ConfigurationSetEventDestinationEventDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._matchingEventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingEventTypes = this._matchingEventTypes;
    }
    if (this._cloudWatchDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchDestination = this._cloudWatchDestination?.internalValue;
    }
    if (this._kinesisFirehoseDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehoseDestination = this._kinesisFirehoseDestination?.internalValue;
    }
    if (this._pinpointDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinpointDestination = this._pinpointDestination?.internalValue;
    }
    if (this._snsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsDestination = this._snsDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Sesv2ConfigurationSetEventDestinationEventDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._matchingEventTypes = undefined;
      this._cloudWatchDestination.internalValue = undefined;
      this._kinesisFirehoseDestination.internalValue = undefined;
      this._pinpointDestination.internalValue = undefined;
      this._snsDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._matchingEventTypes = value.matchingEventTypes;
      this._cloudWatchDestination.internalValue = value.cloudWatchDestination;
      this._kinesisFirehoseDestination.internalValue = value.kinesisFirehoseDestination;
      this._pinpointDestination.internalValue = value.pinpointDestination;
      this._snsDestination.internalValue = value.snsDestination;
    }
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

  // matching_event_types - computed: false, optional: false, required: true
  private _matchingEventTypes?: string[]; 
  public get matchingEventTypes() {
    return this.getListAttribute('matching_event_types');
  }
  public set matchingEventTypes(value: string[]) {
    this._matchingEventTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingEventTypesInput() {
    return this._matchingEventTypes;
  }

  // cloud_watch_destination - computed: false, optional: true, required: false
  private _cloudWatchDestination = new Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestinationOutputReference(this, "cloud_watch_destination");
  public get cloudWatchDestination() {
    return this._cloudWatchDestination;
  }
  public putCloudWatchDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationCloudWatchDestination) {
    this._cloudWatchDestination.internalValue = value;
  }
  public resetCloudWatchDestination() {
    this._cloudWatchDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchDestinationInput() {
    return this._cloudWatchDestination.internalValue;
  }

  // kinesis_firehose_destination - computed: false, optional: true, required: false
  private _kinesisFirehoseDestination = new Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestinationOutputReference(this, "kinesis_firehose_destination");
  public get kinesisFirehoseDestination() {
    return this._kinesisFirehoseDestination;
  }
  public putKinesisFirehoseDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationKinesisFirehoseDestination) {
    this._kinesisFirehoseDestination.internalValue = value;
  }
  public resetKinesisFirehoseDestination() {
    this._kinesisFirehoseDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseDestinationInput() {
    return this._kinesisFirehoseDestination.internalValue;
  }

  // pinpoint_destination - computed: false, optional: true, required: false
  private _pinpointDestination = new Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestinationOutputReference(this, "pinpoint_destination");
  public get pinpointDestination() {
    return this._pinpointDestination;
  }
  public putPinpointDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationPinpointDestination) {
    this._pinpointDestination.internalValue = value;
  }
  public resetPinpointDestination() {
    this._pinpointDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinpointDestinationInput() {
    return this._pinpointDestination.internalValue;
  }

  // sns_destination - computed: false, optional: true, required: false
  private _snsDestination = new Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestinationOutputReference(this, "sns_destination");
  public get snsDestination() {
    return this._snsDestination;
  }
  public putSnsDestination(value: Sesv2ConfigurationSetEventDestinationEventDestinationSnsDestination) {
    this._snsDestination.internalValue = value;
  }
  public resetSnsDestination() {
    this._snsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsDestinationInput() {
    return this._snsDestination.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination}
*/
export class Sesv2ConfigurationSetEventDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_configuration_set_event_destination";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sesv2_configuration_set_event_destination aws_sesv2_configuration_set_event_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2ConfigurationSetEventDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2ConfigurationSetEventDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_configuration_set_event_destination',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._configurationSetName = config.configurationSetName;
    this._eventDestinationName = config.eventDestinationName;
    this._id = config.id;
    this._eventDestination.internalValue = config.eventDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // event_destination_name - computed: false, optional: false, required: true
  private _eventDestinationName?: string; 
  public get eventDestinationName() {
    return this.getStringAttribute('event_destination_name');
  }
  public set eventDestinationName(value: string) {
    this._eventDestinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDestinationNameInput() {
    return this._eventDestinationName;
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

  // event_destination - computed: false, optional: false, required: true
  private _eventDestination = new Sesv2ConfigurationSetEventDestinationEventDestinationOutputReference(this, "event_destination");
  public get eventDestination() {
    return this._eventDestination;
  }
  public putEventDestination(value: Sesv2ConfigurationSetEventDestinationEventDestination) {
    this._eventDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventDestinationInput() {
    return this._eventDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_set_name: cdktf.stringToTerraform(this._configurationSetName),
      event_destination_name: cdktf.stringToTerraform(this._eventDestinationName),
      id: cdktf.stringToTerraform(this._id),
      event_destination: sesv2ConfigurationSetEventDestinationEventDestinationToTerraform(this._eventDestination.internalValue),
    };
  }
}
