// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3ControlObjectLambdaAccessPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point#account_id S3ControlObjectLambdaAccessPoint#account_id}
  */
  readonly accountId?: string;
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
  private _awsLambda = new S3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationAwsLambdaOutputReference(this, "aws_lambda", true);
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
    actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.actions),
    content_transformation: s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformationToTerraform(struct!.contentTransformation),
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
    allowed_features: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedFeatures),
    cloud_watch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudWatchMetricsEnabled),
    supporting_access_point: cdktf.stringToTerraform(struct!.supportingAccessPoint),
    transformation_configuration: cdktf.listMapper(s3ControlObjectLambdaAccessPointConfigurationTransformationConfigurationToTerraform)(struct!.transformationConfiguration),
  }
}

export class S3ControlObjectLambdaAccessPointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    if (this._transformationConfiguration !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationConfiguration = this._transformationConfiguration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3ControlObjectLambdaAccessPointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedFeatures = undefined;
      this._cloudWatchMetricsEnabled = undefined;
      this._supportingAccessPoint = undefined;
      this._transformationConfiguration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedFeatures = value.allowedFeatures;
      this._cloudWatchMetricsEnabled = value.cloudWatchMetricsEnabled;
      this._supportingAccessPoint = value.supportingAccessPoint;
      this._transformationConfiguration = value.transformationConfiguration;
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
  private _transformationConfiguration?: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable; 
  public get transformationConfiguration() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('transformation_configuration')));
  }
  public set transformationConfiguration(value: S3ControlObjectLambdaAccessPointConfigurationTransformationConfiguration[] | cdktf.IResolvable) {
    this._transformationConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationConfigurationInput() {
    return this._transformationConfiguration;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_object_lambda_access_point aws_s3control_object_lambda_access_point}
*/
export class S3ControlObjectLambdaAccessPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3control_object_lambda_access_point";

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
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
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
  public get id() {
    return this.getStringAttribute('id');
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
  private _configuration = new S3ControlObjectLambdaAccessPointConfigurationOutputReference(this, "configuration", true);
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
      name: cdktf.stringToTerraform(this._name),
      configuration: s3ControlObjectLambdaAccessPointConfigurationToTerraform(this._configuration.internalValue),
    };
  }
}
