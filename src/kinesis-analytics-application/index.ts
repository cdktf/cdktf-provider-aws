// https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#code KinesisAnalyticsApplication#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#description KinesisAnalyticsApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#id KinesisAnalyticsApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}
  */
  readonly startApplication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cloudwatch_logging_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}
  */
  readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
  /**
  * inputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#inputs KinesisAnalyticsApplication#inputs}
  */
  readonly inputs?: KinesisAnalyticsApplicationInputs;
  /**
  * outputs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#outputs KinesisAnalyticsApplication#outputs}
  */
  readonly outputs?: KinesisAnalyticsApplicationOutputs[] | cdktf.IResolvable;
  /**
  * reference_data_sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}
  */
  readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources;
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}
  */
  readonly logStreamArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference | KinesisAnalyticsApplicationCloudwatchLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_stream_arn: cdktf.stringToTerraform(struct!.logStreamArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logStreamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamArn = this._logStreamArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logStreamArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logStreamArn = value.logStreamArn;
      this._roleArn = value.roleArn;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_stream_arn - computed: false, optional: false, required: true
  private _logStreamArn?: string; 
  public get logStreamArn() {
    return this.getStringAttribute('log_stream_arn');
  }
  public set logStreamArn(value: string) {
    this._logStreamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamArnInput() {
    return this._logStreamArn;
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
}
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationInputsKinesisFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsKinesisFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface KinesisAnalyticsApplicationInputsKinesisStream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference | KinesisAnalyticsApplicationInputsKinesisStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationInputsKinesisStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsKinesisStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsKinesisStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface KinesisAnalyticsApplicationInputsParallelism {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#count KinesisAnalyticsApplication#count}
  */
  readonly count?: number;
}

export function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelismOutputReference | KinesisAnalyticsApplicationInputsParallelism): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
  }
}

export class KinesisAnalyticsApplicationInputsParallelismOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsParallelism | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsParallelism | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference | KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}
  */
  readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
}

export function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference | KinesisAnalyticsApplicationInputsProcessingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda: kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct!.lambda),
  }
}

export class KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambda.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambda.internalValue = value.lambda;
    }
  }

  // lambda - computed: false, optional: false, required: true
  private _lambda = new KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda) {
    this._lambda.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordColumnsList extends cdktf.ComplexList {
  public internalValue? : KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | cdktf.IResolvable

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
  public get(index: number): KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference {
    return new KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordRowPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
  /**
  * csv block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}
  */
  readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
  /**
  * json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}
  */
  readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct!.csv),
    json: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct!.json),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
    }
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
}

export function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_parameters: kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingParameters.internalValue = value.mappingParameters;
    }
  }

  // record_format_type - computed: true, optional: false, required: false
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }

  // mapping_parameters - computed: false, optional: true, required: false
  private _mappingParameters = new KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters) {
    this._mappingParameters.internalValue = value;
  }
  public resetMappingParameters() {
    this._mappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }
}
export interface KinesisAnalyticsApplicationInputsSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | cdktf.IResolvable;
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
}

export function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaOutputReference | KinesisAnalyticsApplicationInputsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktf.listMapper(kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform, true)(struct!.recordColumns),
    record_format: kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct!.recordFormat),
  }
}

export class KinesisAnalyticsApplicationInputsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumns = this._recordColumns?.internalValue;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordEncoding = undefined;
      this._recordColumns.internalValue = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordEncoding = value.recordEncoding;
      this._recordColumns.internalValue = value.recordColumns;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_columns - computed: false, optional: false, required: true
  private _recordColumns = new KinesisAnalyticsApplicationInputsSchemaRecordColumnsList(this, "record_columns", false);
  public get recordColumns() {
    return this._recordColumns;
  }
  public putRecordColumns(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | cdktf.IResolvable) {
    this._recordColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns.internalValue;
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat = new KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat) {
    this._recordFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}
  */
  readonly startingPosition?: string;
}

export function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    starting_position: cdktf.stringToTerraform(struct!.startingPosition),
  }
}

export class KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startingPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPosition = this._startingPosition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startingPosition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startingPosition = value.startingPosition;
    }
  }

  // starting_position - computed: true, optional: true, required: false
  private _startingPosition?: string; 
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition;
  }
}

export class KinesisAnalyticsApplicationInputsStartingPositionConfigurationList extends cdktf.ComplexList {
  public internalValue? : KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference {
    return new KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisAnalyticsApplicationInputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}
  */
  readonly namePrefix: string;
  /**
  * kinesis_firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose;
  /**
  * kinesis_stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream;
  /**
  * parallelism block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#parallelism KinesisAnalyticsApplication#parallelism}
  */
  readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism;
  /**
  * processing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#processing_configuration KinesisAnalyticsApplication#processing_configuration}
  */
  readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationInputsSchema;
  /**
  * starting_position_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
  */
  readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | cdktf.IResolvable;
}

export function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputsOutputReference | KinesisAnalyticsApplicationInputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    kinesis_firehose: kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct!.kinesisFirehose),
    kinesis_stream: kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct!.kinesisStream),
    parallelism: kinesisAnalyticsApplicationInputsParallelismToTerraform(struct!.parallelism),
    processing_configuration: kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct!.processingConfiguration),
    schema: kinesisAnalyticsApplicationInputsSchemaToTerraform(struct!.schema),
    starting_position_configuration: cdktf.listMapper(kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform, true)(struct!.startingPositionConfiguration),
  }
}

export class KinesisAnalyticsApplicationInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationInputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._kinesisFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehose = this._kinesisFirehose?.internalValue;
    }
    if (this._kinesisStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStream = this._kinesisStream?.internalValue;
    }
    if (this._parallelism?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism?.internalValue;
    }
    if (this._processingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    if (this._startingPositionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingPositionConfiguration = this._startingPositionConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationInputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namePrefix = undefined;
      this._kinesisFirehose.internalValue = undefined;
      this._kinesisStream.internalValue = undefined;
      this._parallelism.internalValue = undefined;
      this._processingConfiguration.internalValue = undefined;
      this._schema.internalValue = undefined;
      this._startingPositionConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namePrefix = value.namePrefix;
      this._kinesisFirehose.internalValue = value.kinesisFirehose;
      this._kinesisStream.internalValue = value.kinesisStream;
      this._parallelism.internalValue = value.parallelism;
      this._processingConfiguration.internalValue = value.processingConfiguration;
      this._schema.internalValue = value.schema;
      this._startingPositionConfiguration.internalValue = value.startingPositionConfiguration;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name_prefix - computed: false, optional: false, required: true
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // stream_names - computed: true, optional: false, required: false
  public get streamNames() {
    return this.getListAttribute('stream_names');
  }

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose = new KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference(this, "kinesis_firehose");
  public get kinesisFirehose() {
    return this._kinesisFirehose;
  }
  public putKinesisFirehose(value: KinesisAnalyticsApplicationInputsKinesisFirehose) {
    this._kinesisFirehose.internalValue = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose.internalValue;
  }

  // kinesis_stream - computed: false, optional: true, required: false
  private _kinesisStream = new KinesisAnalyticsApplicationInputsKinesisStreamOutputReference(this, "kinesis_stream");
  public get kinesisStream() {
    return this._kinesisStream;
  }
  public putKinesisStream(value: KinesisAnalyticsApplicationInputsKinesisStream) {
    this._kinesisStream.internalValue = value;
  }
  public resetKinesisStream() {
    this._kinesisStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamInput() {
    return this._kinesisStream.internalValue;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism = new KinesisAnalyticsApplicationInputsParallelismOutputReference(this, "parallelism");
  public get parallelism() {
    return this._parallelism;
  }
  public putParallelism(value: KinesisAnalyticsApplicationInputsParallelism) {
    this._parallelism.internalValue = value;
  }
  public resetParallelism() {
    this._parallelism.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism.internalValue;
  }

  // processing_configuration - computed: false, optional: true, required: false
  private _processingConfiguration = new KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference(this, "processing_configuration");
  public get processingConfiguration() {
    return this._processingConfiguration;
  }
  public putProcessingConfiguration(value: KinesisAnalyticsApplicationInputsProcessingConfiguration) {
    this._processingConfiguration.internalValue = value;
  }
  public resetProcessingConfiguration() {
    this._processingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processingConfigurationInput() {
    return this._processingConfiguration.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new KinesisAnalyticsApplicationInputsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: KinesisAnalyticsApplicationInputsSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // starting_position_configuration - computed: false, optional: true, required: false
  private _startingPositionConfiguration = new KinesisAnalyticsApplicationInputsStartingPositionConfigurationList(this, "starting_position_configuration", false);
  public get startingPositionConfiguration() {
    return this._startingPositionConfiguration;
  }
  public putStartingPositionConfiguration(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | cdktf.IResolvable) {
    this._startingPositionConfiguration.internalValue = value;
  }
  public resetStartingPositionConfiguration() {
    this._startingPositionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionConfigurationInput() {
    return this._startingPositionConfiguration.internalValue;
  }
}
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationOutputsKinesisFirehose): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference | KinesisAnalyticsApplicationOutputsKinesisStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationOutputsKinesisStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationOutputsKinesisStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface KinesisAnalyticsApplicationOutputsLambda {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
  */
  readonly resourceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambdaOutputReference | KinesisAnalyticsApplicationOutputsLambda): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_arn: cdktf.stringToTerraform(struct!.resourceArn),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationOutputsLambdaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationOutputsLambda | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceArn = this._resourceArn;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationOutputsLambda | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceArn = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceArn = value.resourceArn;
      this._roleArn = value.roleArn;
    }
  }

  // resource_arn - computed: false, optional: false, required: true
  private _resourceArn?: string; 
  public get resourceArn() {
    return this.getStringAttribute('resource_arn');
  }
  public set resourceArn(value: string) {
    this._resourceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceArnInput() {
    return this._resourceArn;
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
}
export interface KinesisAnalyticsApplicationOutputsSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}
  */
  readonly recordFormatType: string;
}

export function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchemaOutputReference | KinesisAnalyticsApplicationOutputsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_format_type: cdktf.stringToTerraform(struct!.recordFormatType),
  }
}

export class KinesisAnalyticsApplicationOutputsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationOutputsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordFormatType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormatType = this._recordFormatType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationOutputsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordFormatType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordFormatType = value.recordFormatType;
    }
  }

  // record_format_type - computed: false, optional: false, required: true
  private _recordFormatType?: string; 
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }
  public set recordFormatType(value: string) {
    this._recordFormatType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatTypeInput() {
    return this._recordFormatType;
  }
}
export interface KinesisAnalyticsApplicationOutputs {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * kinesis_firehose block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
  */
  readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose;
  /**
  * kinesis_stream block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
  */
  readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream;
  /**
  * lambda block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}
  */
  readonly lambda?: KinesisAnalyticsApplicationOutputsLambda;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationOutputsSchema;
}

export function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    kinesis_firehose: kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct!.kinesisFirehose),
    kinesis_stream: kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct!.kinesisStream),
    lambda: kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct!.lambda),
    schema: kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct!.schema),
  }
}

export class KinesisAnalyticsApplicationOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisAnalyticsApplicationOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._kinesisFirehose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisFirehose = this._kinesisFirehose?.internalValue;
    }
    if (this._kinesisStream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisStream = this._kinesisStream?.internalValue;
    }
    if (this._lambda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambda = this._lambda?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._kinesisFirehose.internalValue = undefined;
      this._kinesisStream.internalValue = undefined;
      this._lambda.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._kinesisFirehose.internalValue = value.kinesisFirehose;
      this._kinesisStream.internalValue = value.kinesisStream;
      this._lambda.internalValue = value.lambda;
      this._schema.internalValue = value.schema;
    }
  }

  // id - computed: true, optional: false, required: false
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

  // kinesis_firehose - computed: false, optional: true, required: false
  private _kinesisFirehose = new KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference(this, "kinesis_firehose");
  public get kinesisFirehose() {
    return this._kinesisFirehose;
  }
  public putKinesisFirehose(value: KinesisAnalyticsApplicationOutputsKinesisFirehose) {
    this._kinesisFirehose.internalValue = value;
  }
  public resetKinesisFirehose() {
    this._kinesisFirehose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisFirehoseInput() {
    return this._kinesisFirehose.internalValue;
  }

  // kinesis_stream - computed: false, optional: true, required: false
  private _kinesisStream = new KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference(this, "kinesis_stream");
  public get kinesisStream() {
    return this._kinesisStream;
  }
  public putKinesisStream(value: KinesisAnalyticsApplicationOutputsKinesisStream) {
    this._kinesisStream.internalValue = value;
  }
  public resetKinesisStream() {
    this._kinesisStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisStreamInput() {
    return this._kinesisStream.internalValue;
  }

  // lambda - computed: false, optional: true, required: false
  private _lambda = new KinesisAnalyticsApplicationOutputsLambdaOutputReference(this, "lambda");
  public get lambda() {
    return this._lambda;
  }
  public putLambda(value: KinesisAnalyticsApplicationOutputsLambda) {
    this._lambda.internalValue = value;
  }
  public resetLambda() {
    this._lambda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaInput() {
    return this._lambda.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new KinesisAnalyticsApplicationOutputsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: KinesisAnalyticsApplicationOutputsSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class KinesisAnalyticsApplicationOutputsList extends cdktf.ComplexList {
  public internalValue? : KinesisAnalyticsApplicationOutputs[] | cdktf.IResolvable

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
  public get(index: number): KinesisAnalyticsApplicationOutputsOutputReference {
    return new KinesisAnalyticsApplicationOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}
  */
  readonly fileKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
  */
  readonly roleArn: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference | KinesisAnalyticsApplicationReferenceDataSourcesS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    file_key: cdktf.stringToTerraform(struct!.fileKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._fileKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileKey = this._fileKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketArn = undefined;
      this._fileKey = undefined;
      this._roleArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketArn = value.bucketArn;
      this._fileKey = value.fileKey;
      this._roleArn = value.roleArn;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // file_key - computed: false, optional: false, required: true
  private _fileKey?: string; 
  public get fileKey() {
    return this.getStringAttribute('file_key');
  }
  public set fileKey(value: string) {
    this._fileKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileKeyInput() {
    return this._fileKey;
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
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}
  */
  readonly sqlType: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.stringToTerraform(struct!.mapping),
    name: cdktf.stringToTerraform(struct!.name),
    sql_type: cdktf.stringToTerraform(struct!.sqlType),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sqlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlType = this._sqlType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mapping = undefined;
      this._name = undefined;
      this._sqlType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mapping = value.mapping;
      this._name = value.name;
      this._sqlType = value.sqlType;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sql_type - computed: false, optional: false, required: true
  private _sqlType?: string; 
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }
  public set sqlType(value: string) {
    this._sqlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlTypeInput() {
    return this._sqlType;
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList extends cdktf.ComplexList {
  public internalValue? : KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | cdktf.IResolvable

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
  public get(index: number): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference {
    return new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
  */
  readonly recordColumnDelimiter: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
  */
  readonly recordRowDelimiter: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_column_delimiter: cdktf.stringToTerraform(struct!.recordColumnDelimiter),
    record_row_delimiter: cdktf.stringToTerraform(struct!.recordRowDelimiter),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordColumnDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumnDelimiter = this._recordColumnDelimiter;
    }
    if (this._recordRowDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowDelimiter = this._recordRowDelimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordColumnDelimiter = undefined;
      this._recordRowDelimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordColumnDelimiter = value.recordColumnDelimiter;
      this._recordRowDelimiter = value.recordRowDelimiter;
    }
  }

  // record_column_delimiter - computed: false, optional: false, required: true
  private _recordColumnDelimiter?: string; 
  public get recordColumnDelimiter() {
    return this.getStringAttribute('record_column_delimiter');
  }
  public set recordColumnDelimiter(value: string) {
    this._recordColumnDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnDelimiterInput() {
    return this._recordColumnDelimiter;
  }

  // record_row_delimiter - computed: false, optional: false, required: true
  private _recordRowDelimiter?: string; 
  public get recordRowDelimiter() {
    return this.getStringAttribute('record_row_delimiter');
  }
  public set recordRowDelimiter(value: string) {
    this._recordRowDelimiter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowDelimiterInput() {
    return this._recordRowDelimiter;
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}
  */
  readonly recordRowPath: string;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_row_path: cdktf.stringToTerraform(struct!.recordRowPath),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordRowPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordRowPath = this._recordRowPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordRowPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordRowPath = value.recordRowPath;
    }
  }

  // record_row_path - computed: false, optional: false, required: true
  private _recordRowPath?: string; 
  public get recordRowPath() {
    return this.getStringAttribute('record_row_path');
  }
  public set recordRowPath(value: string) {
    this._recordRowPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRowPathInput() {
    return this._recordRowPath;
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /**
  * csv block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}
  */
  readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
  /**
  * json block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#json KinesisAnalyticsApplication#json}
  */
  readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    csv: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct!.csv),
    json: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct!.json),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._csv?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csv = this._csv?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._csv.internalValue = undefined;
      this._json.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._csv.internalValue = value.csv;
      this._json.internalValue = value.json;
    }
  }

  // csv - computed: false, optional: true, required: false
  private _csv = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference(this, "csv");
  public get csv() {
    return this._csv;
  }
  public putCsv(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv) {
    this._csv.internalValue = value;
  }
  public resetCsv() {
    this._csv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvInput() {
    return this._csv.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
  /**
  * mapping_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
  */
  readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_parameters: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct!.mappingParameters),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingParameters = this._mappingParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingParameters.internalValue = value.mappingParameters;
    }
  }

  // record_format_type - computed: true, optional: false, required: false
  public get recordFormatType() {
    return this.getStringAttribute('record_format_type');
  }

  // mapping_parameters - computed: false, optional: true, required: false
  private _mappingParameters = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference(this, "mapping_parameters");
  public get mappingParameters() {
    return this._mappingParameters;
  }
  public putMappingParameters(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters) {
    this._mappingParameters.internalValue = value;
  }
  public resetMappingParameters() {
    this._mappingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingParametersInput() {
    return this._mappingParameters.internalValue;
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}
  */
  readonly recordEncoding?: string;
  /**
  * record_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}
  */
  readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | cdktf.IResolvable;
  /**
  * record_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}
  */
  readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record_encoding: cdktf.stringToTerraform(struct!.recordEncoding),
    record_columns: cdktf.listMapper(kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform, true)(struct!.recordColumns),
    record_format: kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct!.recordFormat),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recordEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordEncoding = this._recordEncoding;
    }
    if (this._recordColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordColumns = this._recordColumns?.internalValue;
    }
    if (this._recordFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordFormat = this._recordFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recordEncoding = undefined;
      this._recordColumns.internalValue = undefined;
      this._recordFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recordEncoding = value.recordEncoding;
      this._recordColumns.internalValue = value.recordColumns;
      this._recordFormat.internalValue = value.recordFormat;
    }
  }

  // record_encoding - computed: false, optional: true, required: false
  private _recordEncoding?: string; 
  public get recordEncoding() {
    return this.getStringAttribute('record_encoding');
  }
  public set recordEncoding(value: string) {
    this._recordEncoding = value;
  }
  public resetRecordEncoding() {
    this._recordEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordEncodingInput() {
    return this._recordEncoding;
  }

  // record_columns - computed: false, optional: false, required: true
  private _recordColumns = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList(this, "record_columns", false);
  public get recordColumns() {
    return this._recordColumns;
  }
  public putRecordColumns(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | cdktf.IResolvable) {
    this._recordColumns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordColumnsInput() {
    return this._recordColumns.internalValue;
  }

  // record_format - computed: false, optional: false, required: true
  private _recordFormat = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference(this, "record_format");
  public get recordFormat() {
    return this._recordFormat;
  }
  public putRecordFormat(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat) {
    this._recordFormat.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordFormatInput() {
    return this._recordFormat.internalValue;
  }
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}
  */
  readonly tableName: string;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#s3 KinesisAnalyticsApplication#s3}
  */
  readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}
  */
  readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
}

export function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference | KinesisAnalyticsApplicationReferenceDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_name: cdktf.stringToTerraform(struct!.tableName),
    s3: kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct!.s3),
    schema: kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct!.schema),
  }
}

export class KinesisAnalyticsApplicationReferenceDataSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KinesisAnalyticsApplicationReferenceDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KinesisAnalyticsApplicationReferenceDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableName = undefined;
      this._s3.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableName = value.tableName;
      this._s3.internalValue = value.s3;
      this._schema.internalValue = value.schema;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // table_name - computed: false, optional: false, required: true
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }

  // s3 - computed: false, optional: false, required: true
  private _s3 = new KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: KinesisAnalyticsApplicationReferenceDataSourcesS3) {
    this._s3.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application aws_kinesis_analytics_application}
*/
export class KinesisAnalyticsApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kinesis_analytics_application";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_analytics_application aws_kinesis_analytics_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KinesisAnalyticsApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kinesis_analytics_application',
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
    this._code = config.code;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._startApplication = config.startApplication;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cloudwatchLoggingOptions.internalValue = config.cloudwatchLoggingOptions;
    this._inputs.internalValue = config.inputs;
    this._outputs.internalValue = config.outputs;
    this._referenceDataSources.internalValue = config.referenceDataSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // create_timestamp - computed: true, optional: false, required: false
  public get createTimestamp() {
    return this.getStringAttribute('create_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // last_update_timestamp - computed: true, optional: false, required: false
  public get lastUpdateTimestamp() {
    return this.getStringAttribute('last_update_timestamp');
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

  // start_application - computed: false, optional: true, required: false
  private _startApplication?: boolean | cdktf.IResolvable; 
  public get startApplication() {
    return this.getBooleanAttribute('start_application');
  }
  public set startApplication(value: boolean | cdktf.IResolvable) {
    this._startApplication = value;
  }
  public resetStartApplication() {
    this._startApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startApplicationInput() {
    return this._startApplication;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // cloudwatch_logging_options - computed: false, optional: true, required: false
  private _cloudwatchLoggingOptions = new KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options");
  public get cloudwatchLoggingOptions() {
    return this._cloudwatchLoggingOptions;
  }
  public putCloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions) {
    this._cloudwatchLoggingOptions.internalValue = value;
  }
  public resetCloudwatchLoggingOptions() {
    this._cloudwatchLoggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLoggingOptionsInput() {
    return this._cloudwatchLoggingOptions.internalValue;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new KinesisAnalyticsApplicationInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: KinesisAnalyticsApplicationInputs) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs = new KinesisAnalyticsApplicationOutputsList(this, "outputs", true);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: KinesisAnalyticsApplicationOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  public resetOutputs() {
    this._outputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // reference_data_sources - computed: false, optional: true, required: false
  private _referenceDataSources = new KinesisAnalyticsApplicationReferenceDataSourcesOutputReference(this, "reference_data_sources");
  public get referenceDataSources() {
    return this._referenceDataSources;
  }
  public putReferenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources) {
    this._referenceDataSources.internalValue = value;
  }
  public resetReferenceDataSources() {
    this._referenceDataSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceDataSourcesInput() {
    return this._referenceDataSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktf.stringToTerraform(this._code),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      start_application: cdktf.booleanToTerraform(this._startApplication),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cloudwatch_logging_options: kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(this._cloudwatchLoggingOptions.internalValue),
      inputs: kinesisAnalyticsApplicationInputsToTerraform(this._inputs.internalValue),
      outputs: cdktf.listMapper(kinesisAnalyticsApplicationOutputsToTerraform, true)(this._outputs.internalValue),
      reference_data_sources: kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(this._referenceDataSources.internalValue),
    };
  }
}
