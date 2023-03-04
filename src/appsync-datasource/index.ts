// https://www.terraform.io/docs/providers/aws/r/appsync_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#api_id AppsyncDatasource#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#description AppsyncDatasource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#id AppsyncDatasource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#name AppsyncDatasource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#service_role_arn AppsyncDatasource#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#type AppsyncDatasource#type}
  */
  readonly type: string;
  /**
  * dynamodb_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#dynamodb_config AppsyncDatasource#dynamodb_config}
  */
  readonly dynamodbConfig?: AppsyncDatasourceDynamodbConfig;
  /**
  * elasticsearch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#elasticsearch_config AppsyncDatasource#elasticsearch_config}
  */
  readonly elasticsearchConfig?: AppsyncDatasourceElasticsearchConfig;
  /**
  * http_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_config AppsyncDatasource#http_config}
  */
  readonly httpConfig?: AppsyncDatasourceHttpConfig;
  /**
  * lambda_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#lambda_config AppsyncDatasource#lambda_config}
  */
  readonly lambdaConfig?: AppsyncDatasourceLambdaConfig;
  /**
  * relational_database_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#relational_database_config AppsyncDatasource#relational_database_config}
  */
  readonly relationalDatabaseConfig?: AppsyncDatasourceRelationalDatabaseConfig;
}
export interface AppsyncDatasourceDynamodbConfigDeltaSyncConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#base_table_ttl AppsyncDatasource#base_table_ttl}
  */
  readonly baseTableTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_name AppsyncDatasource#delta_sync_table_name}
  */
  readonly deltaSyncTableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_table_ttl AppsyncDatasource#delta_sync_table_ttl}
  */
  readonly deltaSyncTableTtl?: number;
}

export function appsyncDatasourceDynamodbConfigDeltaSyncConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference | AppsyncDatasourceDynamodbConfigDeltaSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_table_ttl: cdktf.numberToTerraform(struct!.baseTableTtl),
    delta_sync_table_name: cdktf.stringToTerraform(struct!.deltaSyncTableName),
    delta_sync_table_ttl: cdktf.numberToTerraform(struct!.deltaSyncTableTtl),
  }
}

export class AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceDynamodbConfigDeltaSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseTableTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseTableTtl = this._baseTableTtl;
    }
    if (this._deltaSyncTableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSyncTableName = this._deltaSyncTableName;
    }
    if (this._deltaSyncTableTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSyncTableTtl = this._deltaSyncTableTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceDynamodbConfigDeltaSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseTableTtl = undefined;
      this._deltaSyncTableName = undefined;
      this._deltaSyncTableTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseTableTtl = value.baseTableTtl;
      this._deltaSyncTableName = value.deltaSyncTableName;
      this._deltaSyncTableTtl = value.deltaSyncTableTtl;
    }
  }

  // base_table_ttl - computed: false, optional: true, required: false
  private _baseTableTtl?: number; 
  public get baseTableTtl() {
    return this.getNumberAttribute('base_table_ttl');
  }
  public set baseTableTtl(value: number) {
    this._baseTableTtl = value;
  }
  public resetBaseTableTtl() {
    this._baseTableTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseTableTtlInput() {
    return this._baseTableTtl;
  }

  // delta_sync_table_name - computed: false, optional: false, required: true
  private _deltaSyncTableName?: string; 
  public get deltaSyncTableName() {
    return this.getStringAttribute('delta_sync_table_name');
  }
  public set deltaSyncTableName(value: string) {
    this._deltaSyncTableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncTableNameInput() {
    return this._deltaSyncTableName;
  }

  // delta_sync_table_ttl - computed: false, optional: true, required: false
  private _deltaSyncTableTtl?: number; 
  public get deltaSyncTableTtl() {
    return this.getNumberAttribute('delta_sync_table_ttl');
  }
  public set deltaSyncTableTtl(value: number) {
    this._deltaSyncTableTtl = value;
  }
  public resetDeltaSyncTableTtl() {
    this._deltaSyncTableTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncTableTtlInput() {
    return this._deltaSyncTableTtl;
  }
}
export interface AppsyncDatasourceDynamodbConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#table_name AppsyncDatasource#table_name}
  */
  readonly tableName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#use_caller_credentials AppsyncDatasource#use_caller_credentials}
  */
  readonly useCallerCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#versioned AppsyncDatasource#versioned}
  */
  readonly versioned?: boolean | cdktf.IResolvable;
  /**
  * delta_sync_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#delta_sync_config AppsyncDatasource#delta_sync_config}
  */
  readonly deltaSyncConfig?: AppsyncDatasourceDynamodbConfigDeltaSyncConfig;
}

export function appsyncDatasourceDynamodbConfigToTerraform(struct?: AppsyncDatasourceDynamodbConfigOutputReference | AppsyncDatasourceDynamodbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    table_name: cdktf.stringToTerraform(struct!.tableName),
    use_caller_credentials: cdktf.booleanToTerraform(struct!.useCallerCredentials),
    versioned: cdktf.booleanToTerraform(struct!.versioned),
    delta_sync_config: appsyncDatasourceDynamodbConfigDeltaSyncConfigToTerraform(struct!.deltaSyncConfig),
  }
}

export class AppsyncDatasourceDynamodbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceDynamodbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    if (this._useCallerCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCallerCredentials = this._useCallerCredentials;
    }
    if (this._versioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.versioned = this._versioned;
    }
    if (this._deltaSyncConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaSyncConfig = this._deltaSyncConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceDynamodbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._tableName = undefined;
      this._useCallerCredentials = undefined;
      this._versioned = undefined;
      this._deltaSyncConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._tableName = value.tableName;
      this._useCallerCredentials = value.useCallerCredentials;
      this._versioned = value.versioned;
      this._deltaSyncConfig.internalValue = value.deltaSyncConfig;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // use_caller_credentials - computed: false, optional: true, required: false
  private _useCallerCredentials?: boolean | cdktf.IResolvable; 
  public get useCallerCredentials() {
    return this.getBooleanAttribute('use_caller_credentials');
  }
  public set useCallerCredentials(value: boolean | cdktf.IResolvable) {
    this._useCallerCredentials = value;
  }
  public resetUseCallerCredentials() {
    this._useCallerCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCallerCredentialsInput() {
    return this._useCallerCredentials;
  }

  // versioned - computed: false, optional: true, required: false
  private _versioned?: boolean | cdktf.IResolvable; 
  public get versioned() {
    return this.getBooleanAttribute('versioned');
  }
  public set versioned(value: boolean | cdktf.IResolvable) {
    this._versioned = value;
  }
  public resetVersioned() {
    this._versioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionedInput() {
    return this._versioned;
  }

  // delta_sync_config - computed: false, optional: true, required: false
  private _deltaSyncConfig = new AppsyncDatasourceDynamodbConfigDeltaSyncConfigOutputReference(this, "delta_sync_config");
  public get deltaSyncConfig() {
    return this._deltaSyncConfig;
  }
  public putDeltaSyncConfig(value: AppsyncDatasourceDynamodbConfigDeltaSyncConfig) {
    this._deltaSyncConfig.internalValue = value;
  }
  public resetDeltaSyncConfig() {
    this._deltaSyncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncConfigInput() {
    return this._deltaSyncConfig.internalValue;
  }
}
export interface AppsyncDatasourceElasticsearchConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}
  */
  readonly region?: string;
}

export function appsyncDatasourceElasticsearchConfigToTerraform(struct?: AppsyncDatasourceElasticsearchConfigOutputReference | AppsyncDatasourceElasticsearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    region: cdktf.stringToTerraform(struct!.region),
  }
}

export class AppsyncDatasourceElasticsearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceElasticsearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceElasticsearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._region = value.region;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_region AppsyncDatasource#signing_region}
  */
  readonly signingRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#signing_service_name AppsyncDatasource#signing_service_name}
  */
  readonly signingServiceName?: string;
}

export function appsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigToTerraform(struct?: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference | AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signing_region: cdktf.stringToTerraform(struct!.signingRegion),
    signing_service_name: cdktf.stringToTerraform(struct!.signingServiceName),
  }
}

export class AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signingRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingRegion = this._signingRegion;
    }
    if (this._signingServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingServiceName = this._signingServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signingRegion = undefined;
      this._signingServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signingRegion = value.signingRegion;
      this._signingServiceName = value.signingServiceName;
    }
  }

  // signing_region - computed: false, optional: true, required: false
  private _signingRegion?: string; 
  public get signingRegion() {
    return this.getStringAttribute('signing_region');
  }
  public set signingRegion(value: string) {
    this._signingRegion = value;
  }
  public resetSigningRegion() {
    this._signingRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingRegionInput() {
    return this._signingRegion;
  }

  // signing_service_name - computed: false, optional: true, required: false
  private _signingServiceName?: string; 
  public get signingServiceName() {
    return this.getStringAttribute('signing_service_name');
  }
  public set signingServiceName(value: string) {
    this._signingServiceName = value;
  }
  public resetSigningServiceName() {
    this._signingServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingServiceNameInput() {
    return this._signingServiceName;
  }
}
export interface AppsyncDatasourceHttpConfigAuthorizationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_type AppsyncDatasource#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * aws_iam_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_iam_config AppsyncDatasource#aws_iam_config}
  */
  readonly awsIamConfig?: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig;
}

export function appsyncDatasourceHttpConfigAuthorizationConfigToTerraform(struct?: AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference | AppsyncDatasourceHttpConfigAuthorizationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_type: cdktf.stringToTerraform(struct!.authorizationType),
    aws_iam_config: appsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigToTerraform(struct!.awsIamConfig),
  }
}

export class AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceHttpConfigAuthorizationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationType = this._authorizationType;
    }
    if (this._awsIamConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamConfig = this._awsIamConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceHttpConfigAuthorizationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationType = undefined;
      this._awsIamConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationType = value.authorizationType;
      this._awsIamConfig.internalValue = value.awsIamConfig;
    }
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // aws_iam_config - computed: false, optional: true, required: false
  private _awsIamConfig = new AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfigOutputReference(this, "aws_iam_config");
  public get awsIamConfig() {
    return this._awsIamConfig;
  }
  public putAwsIamConfig(value: AppsyncDatasourceHttpConfigAuthorizationConfigAwsIamConfig) {
    this._awsIamConfig.internalValue = value;
  }
  public resetAwsIamConfig() {
    this._awsIamConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamConfigInput() {
    return this._awsIamConfig.internalValue;
  }
}
export interface AppsyncDatasourceHttpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#endpoint AppsyncDatasource#endpoint}
  */
  readonly endpoint: string;
  /**
  * authorization_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#authorization_config AppsyncDatasource#authorization_config}
  */
  readonly authorizationConfig?: AppsyncDatasourceHttpConfigAuthorizationConfig;
}

export function appsyncDatasourceHttpConfigToTerraform(struct?: AppsyncDatasourceHttpConfigOutputReference | AppsyncDatasourceHttpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    authorization_config: appsyncDatasourceHttpConfigAuthorizationConfigToTerraform(struct!.authorizationConfig),
  }
}

export class AppsyncDatasourceHttpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceHttpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._authorizationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceHttpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._authorizationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._authorizationConfig.internalValue = value.authorizationConfig;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // authorization_config - computed: false, optional: true, required: false
  private _authorizationConfig = new AppsyncDatasourceHttpConfigAuthorizationConfigOutputReference(this, "authorization_config");
  public get authorizationConfig() {
    return this._authorizationConfig;
  }
  public putAuthorizationConfig(value: AppsyncDatasourceHttpConfigAuthorizationConfig) {
    this._authorizationConfig.internalValue = value;
  }
  public resetAuthorizationConfig() {
    this._authorizationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationConfigInput() {
    return this._authorizationConfig.internalValue;
  }
}
export interface AppsyncDatasourceLambdaConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#function_arn AppsyncDatasource#function_arn}
  */
  readonly functionArn: string;
}

export function appsyncDatasourceLambdaConfigToTerraform(struct?: AppsyncDatasourceLambdaConfigOutputReference | AppsyncDatasourceLambdaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    function_arn: cdktf.stringToTerraform(struct!.functionArn),
  }
}

export class AppsyncDatasourceLambdaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceLambdaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionArn = this._functionArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceLambdaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functionArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functionArn = value.functionArn;
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
}
export interface AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#aws_secret_store_arn AppsyncDatasource#aws_secret_store_arn}
  */
  readonly awsSecretStoreArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#database_name AppsyncDatasource#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#db_cluster_identifier AppsyncDatasource#db_cluster_identifier}
  */
  readonly dbClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#region AppsyncDatasource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#schema AppsyncDatasource#schema}
  */
  readonly schema?: string;
}

export function appsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigToTerraform(struct?: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference | AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_secret_store_arn: cdktf.stringToTerraform(struct!.awsSecretStoreArn),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    db_cluster_identifier: cdktf.stringToTerraform(struct!.dbClusterIdentifier),
    region: cdktf.stringToTerraform(struct!.region),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}

export class AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsSecretStoreArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretStoreArn = this._awsSecretStoreArn;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dbClusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsSecretStoreArn = undefined;
      this._databaseName = undefined;
      this._dbClusterIdentifier = undefined;
      this._region = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsSecretStoreArn = value.awsSecretStoreArn;
      this._databaseName = value.databaseName;
      this._dbClusterIdentifier = value.dbClusterIdentifier;
      this._region = value.region;
      this._schema = value.schema;
    }
  }

  // aws_secret_store_arn - computed: false, optional: false, required: true
  private _awsSecretStoreArn?: string; 
  public get awsSecretStoreArn() {
    return this.getStringAttribute('aws_secret_store_arn');
  }
  public set awsSecretStoreArn(value: string) {
    this._awsSecretStoreArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretStoreArnInput() {
    return this._awsSecretStoreArn;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // db_cluster_identifier - computed: false, optional: false, required: true
  private _dbClusterIdentifier?: string; 
  public get dbClusterIdentifier() {
    return this.getStringAttribute('db_cluster_identifier');
  }
  public set dbClusterIdentifier(value: string) {
    this._dbClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbClusterIdentifierInput() {
    return this._dbClusterIdentifier;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface AppsyncDatasourceRelationalDatabaseConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#source_type AppsyncDatasource#source_type}
  */
  readonly sourceType?: string;
  /**
  * http_endpoint_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource#http_endpoint_config AppsyncDatasource#http_endpoint_config}
  */
  readonly httpEndpointConfig?: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig;
}

export function appsyncDatasourceRelationalDatabaseConfigToTerraform(struct?: AppsyncDatasourceRelationalDatabaseConfigOutputReference | AppsyncDatasourceRelationalDatabaseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    http_endpoint_config: appsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigToTerraform(struct!.httpEndpointConfig),
  }
}

export class AppsyncDatasourceRelationalDatabaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncDatasourceRelationalDatabaseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._httpEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpointConfig = this._httpEndpointConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncDatasourceRelationalDatabaseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceType = undefined;
      this._httpEndpointConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceType = value.sourceType;
      this._httpEndpointConfig.internalValue = value.httpEndpointConfig;
    }
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // http_endpoint_config - computed: false, optional: true, required: false
  private _httpEndpointConfig = new AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfigOutputReference(this, "http_endpoint_config");
  public get httpEndpointConfig() {
    return this._httpEndpointConfig;
  }
  public putHttpEndpointConfig(value: AppsyncDatasourceRelationalDatabaseConfigHttpEndpointConfig) {
    this._httpEndpointConfig.internalValue = value;
  }
  public resetHttpEndpointConfig() {
    this._httpEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointConfigInput() {
    return this._httpEndpointConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource aws_appsync_datasource}
*/
export class AppsyncDatasource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_datasource";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_datasource aws_appsync_datasource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_datasource',
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
    this._apiId = config.apiId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._serviceRoleArn = config.serviceRoleArn;
    this._type = config.type;
    this._dynamodbConfig.internalValue = config.dynamodbConfig;
    this._elasticsearchConfig.internalValue = config.elasticsearchConfig;
    this._httpConfig.internalValue = config.httpConfig;
    this._lambdaConfig.internalValue = config.lambdaConfig;
    this._relationalDatabaseConfig.internalValue = config.relationalDatabaseConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dynamodb_config - computed: false, optional: true, required: false
  private _dynamodbConfig = new AppsyncDatasourceDynamodbConfigOutputReference(this, "dynamodb_config");
  public get dynamodbConfig() {
    return this._dynamodbConfig;
  }
  public putDynamodbConfig(value: AppsyncDatasourceDynamodbConfig) {
    this._dynamodbConfig.internalValue = value;
  }
  public resetDynamodbConfig() {
    this._dynamodbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbConfigInput() {
    return this._dynamodbConfig.internalValue;
  }

  // elasticsearch_config - computed: false, optional: true, required: false
  private _elasticsearchConfig = new AppsyncDatasourceElasticsearchConfigOutputReference(this, "elasticsearch_config");
  public get elasticsearchConfig() {
    return this._elasticsearchConfig;
  }
  public putElasticsearchConfig(value: AppsyncDatasourceElasticsearchConfig) {
    this._elasticsearchConfig.internalValue = value;
  }
  public resetElasticsearchConfig() {
    this._elasticsearchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchConfigInput() {
    return this._elasticsearchConfig.internalValue;
  }

  // http_config - computed: false, optional: true, required: false
  private _httpConfig = new AppsyncDatasourceHttpConfigOutputReference(this, "http_config");
  public get httpConfig() {
    return this._httpConfig;
  }
  public putHttpConfig(value: AppsyncDatasourceHttpConfig) {
    this._httpConfig.internalValue = value;
  }
  public resetHttpConfig() {
    this._httpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig.internalValue;
  }

  // lambda_config - computed: false, optional: true, required: false
  private _lambdaConfig = new AppsyncDatasourceLambdaConfigOutputReference(this, "lambda_config");
  public get lambdaConfig() {
    return this._lambdaConfig;
  }
  public putLambdaConfig(value: AppsyncDatasourceLambdaConfig) {
    this._lambdaConfig.internalValue = value;
  }
  public resetLambdaConfig() {
    this._lambdaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigInput() {
    return this._lambdaConfig.internalValue;
  }

  // relational_database_config - computed: false, optional: true, required: false
  private _relationalDatabaseConfig = new AppsyncDatasourceRelationalDatabaseConfigOutputReference(this, "relational_database_config");
  public get relationalDatabaseConfig() {
    return this._relationalDatabaseConfig;
  }
  public putRelationalDatabaseConfig(value: AppsyncDatasourceRelationalDatabaseConfig) {
    this._relationalDatabaseConfig.internalValue = value;
  }
  public resetRelationalDatabaseConfig() {
    this._relationalDatabaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalDatabaseConfigInput() {
    return this._relationalDatabaseConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      type: cdktf.stringToTerraform(this._type),
      dynamodb_config: appsyncDatasourceDynamodbConfigToTerraform(this._dynamodbConfig.internalValue),
      elasticsearch_config: appsyncDatasourceElasticsearchConfigToTerraform(this._elasticsearchConfig.internalValue),
      http_config: appsyncDatasourceHttpConfigToTerraform(this._httpConfig.internalValue),
      lambda_config: appsyncDatasourceLambdaConfigToTerraform(this._lambdaConfig.internalValue),
      relational_database_config: appsyncDatasourceRelationalDatabaseConfigToTerraform(this._relationalDatabaseConfig.internalValue),
    };
  }
}
