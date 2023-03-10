// https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlObjectLambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#account_id S3ControlObjectLambdaAccessPoint#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#id S3ControlObjectLambdaAccessPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#name S3ControlObjectLambdaAccessPoint#name}
  */
  readonly name: string;
  /**
  * configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#configuration S3ControlObjectLambdaAccessPoint#configuration}
  */
  readonly configuration: S3ControlObjectLambdaAccessPointConfiguration;
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#function_arn S3ControlObjectLambdaAccessPoint#function_arn}
  */
  readonly functionArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#function_payload S3ControlObjectLambdaAccessPoint#function_payload}
  */
  readonly functionPayload?: string;
}

export function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
    function_payload: cdktf.stringToTerraform(struct!.functionPayload),
  }
}

export class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    if (this._functionPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionPayload = this._functionPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionArn = undefined;
      this._functionPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionArn = value.functionArn;
      this._functionPayload = value.functionPayload;
    }
  }

  // function_arn - computed: false, optional: false, required: true
  private _functionArn?: string; 
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }
  public set functionArn(value: string) {
    this._functionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArnInput() {
    return this._functionArn;
  }

  // function_payload - computed: false, optional: true, required: false
  private _functionPayload?: string; 
  public get functionPayload() {
    return this.getStringAttribute('function_payload');
  }
  public set functionPayload(value: string) {
    this._functionPayload = value;
  }
  public resetFunctionPayload() {
    this._functionPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionPayloadInput() {
    return this._functionPayload;
  }
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation {
  /**
  * aws_lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#aws_lambda S3ControlObjectLambdaAccessPoint#aws_lambda}
  */
  readonly awsLambda: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda;
}

export function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference | S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_lambda: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaToTerraform(struct!.awsLambda),
  }
}

export class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsLambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsLambda = this._awsLambda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsLambda.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsLambda.internalValue = value.awsLambda;
    }
  }

  // aws_lambda - computed: false, optional: false, required: true
  private _awsLambda = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference(this, "aws_lambda");
  public get awsLambda() {
    return this._awsLambda;
  }
  public putAwsLambda(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambda) {
    this._awsLambda.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsLambdaInput() {
    return this._awsLambda.internalValue;
  }
}
export interface S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#actions S3ControlObjectLambdaAccessPoint#actions}
  */
  readonly actions: string[];
  /**
  * content_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#content_transformation S3ControlObjectLambdaAccessPoint#content_transformation}
  */
  readonly contentTransformation: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation;
}

export function s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    content_transformation: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct!.contentTransformation),
  }
}

export class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._contentTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTransformation = this._contentTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._contentTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._contentTransformation.internalValue = value.contentTransformation;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // content_transformation - computed: false, optional: false, required: true
  private _contentTransformation = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationOutputReference(this, "content_transformation");
  public get contentTransformation() {
    return this._contentTransformation;
  }
  public putContentTransformation(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation) {
    this._contentTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTransformationInput() {
    return this._contentTransformation.internalValue;
  }
}

export class S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList extends cdktf.ComplexList {
  public internalValue? : S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference {
    return new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface S3ControlObjectLambdaAccessPointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#allowed_features S3ControlObjectLambdaAccessPoint#allowed_features}
  */
  readonly allowedFeatures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#cloud_watch_metrics_enabled S3ControlObjectLambdaAccessPoint#cloud_watch_metrics_enabled}
  */
  readonly cloudWatchMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#supporting_access_point S3ControlObjectLambdaAccessPoint#supporting_access_point}
  */
  readonly supportingAccessPoint: string;
  /**
  * transformation_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#transformation_configuration S3ControlObjectLambdaAccessPoint#transformation_configuration}
  */
  readonly transformationConfiguration: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable;
}

export function s3ControlObjectLambdaAccessPointConfigurationToTerraform(struct?: S3ControlObjectLambdaAccessPointConfigurationOutputReference | S3ControlObjectLambdaAccessPointConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedFeatures),
    cloud_watch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudWatchMetricsEnabled),
    supporting_access_point: cdktf.stringToTerraform(struct!.supportingAccessPoint),
    transformation_configuration: cdktf.listMapper(s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform, true)(struct!.transformationConfiguration),
  }
}

export class S3ControlObjectLambdaAccessPointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3ControlObjectLambdaAccessPointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedFeatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFeatures = this._allowedFeatures;
    }
    if (this._cloudWatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchMetricsEnabled = this._cloudWatchMetricsEnabled;
    }
    if (this._supportingAccessPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportingAccessPoint = this._supportingAccessPoint;
    }
    if (this._transformationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationConfiguration = this._transformationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlObjectLambdaAccessPointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedFeatures = undefined;
      this._cloudWatchMetricsEnabled = undefined;
      this._supportingAccessPoint = undefined;
      this._transformationConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedFeatures = value.allowedFeatures;
      this._cloudWatchMetricsEnabled = value.cloudWatchMetricsEnabled;
      this._supportingAccessPoint = value.supportingAccessPoint;
      this._transformationConfiguration.internalValue = value.transformationConfiguration;
    }
  }

  // allowed_features - computed: false, optional: true, required: false
  private _allowedFeatures?: string[]; 
  public get allowedFeatures() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_features'));
  }
  public set allowedFeatures(value: string[]) {
    this._allowedFeatures = value;
  }
  public resetAllowedFeatures() {
    this._allowedFeatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFeaturesInput() {
    return this._allowedFeatures;
  }

  // cloud_watch_metrics_enabled - computed: false, optional: true, required: false
  private _cloudWatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudWatchMetricsEnabled() {
    return this.getBooleanAttribute('cloud_watch_metrics_enabled');
  }
  public set cloudWatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudWatchMetricsEnabled = value;
  }
  public resetCloudWatchMetricsEnabled() {
    this._cloudWatchMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchMetricsEnabledInput() {
    return this._cloudWatchMetricsEnabled;
  }

  // supporting_access_point - computed: false, optional: false, required: true
  private _supportingAccessPoint?: string; 
  public get supportingAccessPoint() {
    return this.getStringAttribute('supporting_access_point');
  }
  public set supportingAccessPoint(value: string) {
    this._supportingAccessPoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportingAccessPointInput() {
    return this._supportingAccessPoint;
  }

  // transformation_configuration - computed: false, optional: false, required: true
  private _transformationConfiguration = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationList(this, "transformation_configuration", true);
  public get transformationConfiguration() {
    return this._transformationConfiguration;
  }
  public putTransformationConfiguration(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable) {
    this._transformationConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationConfigurationInput() {
    return this._transformationConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point}
*/
export class S3ControlObjectLambdaAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_object_lambda_access_point";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlObjectLambdaAccessPointConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlObjectLambdaAccessPointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_object_lambda_access_point',
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
    this._accountId = config.accountId;
    this._id = config.id;
    this._name = config.name;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // configuration - computed: false, optional: false, required: true
  private _configuration = new S3ControlObjectLambdaAccessPointConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: S3ControlObjectLambdaAccessPointConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      configuration: s3ControlObjectLambdaAccessPointConfigurationToTerraform(this._configuration.internalValue),
    };
  }
}
