// https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}
  */
  readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}
  */
  readonly executionRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#id SagemakerModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#name SagemakerModel#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#tags SagemakerModel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#container SagemakerModel#container}
  */
  readonly container?: SagemakerModelContainer[] | cdktf.IResolvable;
  /**
  * inference_execution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}
  */
  readonly inferenceExecutionConfig?: SagemakerModelInferenceExecutionConfig;
  /**
  * primary_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}
  */
  readonly primaryContainer?: SagemakerModelPrimaryContainer;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}
  */
  readonly vpcConfig?: SagemakerModelVpcConfig;
}
export interface SagemakerModelContainerImageConfigRepositoryAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}
  */
  readonly repositoryCredentialsProviderArn: string;
}

export function sagemakerModelContainerImageConfigRepositoryAuthConfigToTerraform(struct?: SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference | SagemakerModelContainerImageConfigRepositoryAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_credentials_provider_arn: cdktf.stringToTerraform(struct!.repositoryCredentialsProviderArn),
  }
}


export function sagemakerModelContainerImageConfigRepositoryAuthConfigToHclTerraform(struct?: SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference | SagemakerModelContainerImageConfigRepositoryAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_credentials_provider_arn: {
      value: cdktf.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelContainerImageConfigRepositoryAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainerImageConfigRepositoryAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryCredentialsProviderArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
    }
  }

  // repository_credentials_provider_arn - computed: false, optional: false, required: true
  private _repositoryCredentialsProviderArn?: string; 
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
  public set repositoryCredentialsProviderArn(value: string) {
    this._repositoryCredentialsProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsProviderArnInput() {
    return this._repositoryCredentialsProviderArn;
  }
}
export interface SagemakerModelContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
  /**
  * repository_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}
  */
  readonly repositoryAuthConfig?: SagemakerModelContainerImageConfigRepositoryAuthConfig;
}

export function sagemakerModelContainerImageConfigToTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
    repository_auth_config: sagemakerModelContainerImageConfigRepositoryAuthConfigToTerraform(struct!.repositoryAuthConfig),
  }
}


export function sagemakerModelContainerImageConfigToHclTerraform(struct?: SagemakerModelContainerImageConfigOutputReference | SagemakerModelContainerImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.repositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_auth_config: {
      value: sagemakerModelContainerImageConfigRepositoryAuthConfigToHclTerraform(struct!.repositoryAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelContainerImageConfigRepositoryAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelContainerImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
    }
    if (this._repositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainerImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryAccessMode = undefined;
      this._repositoryAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryAccessMode = value.repositoryAccessMode;
      this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
    }
  }

  // repository_access_mode - computed: false, optional: false, required: true
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode;
  }

  // repository_auth_config - computed: false, optional: true, required: false
  private _repositoryAuthConfig = new SagemakerModelContainerImageConfigRepositoryAuthConfigOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
  public putRepositoryAuthConfig(value: SagemakerModelContainerImageConfigRepositoryAuthConfig) {
    this._repositoryAuthConfig.internalValue = value;
  }
  public resetRepositoryAuthConfig() {
    this._repositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthConfigInput() {
    return this._repositoryAuthConfig.internalValue;
  }
}
export interface SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}
  */
  readonly acceptEula: boolean | cdktf.IResolvable;
}

export function sagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference | SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference | SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface SagemakerModelContainerModelDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig;
}

export function sagemakerModelContainerModelDataSourceS3DataSourceToTerraform(struct?: SagemakerModelContainerModelDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    model_access_config: sagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
  }
}


export function sagemakerModelContainerModelDataSourceS3DataSourceToHclTerraform(struct?: SagemakerModelContainerModelDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: sagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerModelDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerModelContainerModelDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainerModelDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerModelContainerModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class SagemakerModelContainerModelDataSourceS3DataSourceList extends cdktf.ComplexList {
  public internalValue? : SagemakerModelContainerModelDataSourceS3DataSource[] | cdktf.IResolvable

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
  public get(index: number): SagemakerModelContainerModelDataSourceS3DataSourceOutputReference {
    return new SagemakerModelContainerModelDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelContainerModelDataSource {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}
  */
  readonly s3DataSource: SagemakerModelContainerModelDataSourceS3DataSource[] | cdktf.IResolvable;
}

export function sagemakerModelContainerModelDataSourceToTerraform(struct?: SagemakerModelContainerModelDataSourceOutputReference | SagemakerModelContainerModelDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: cdktf.listMapper(sagemakerModelContainerModelDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerModelContainerModelDataSourceToHclTerraform(struct?: SagemakerModelContainerModelDataSourceOutputReference | SagemakerModelContainerModelDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: cdktf.listMapperHcl(sagemakerModelContainerModelDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelContainerModelDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerModelDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelContainerModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainerModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3DataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: false, required: true
  private _s3DataSource = new SagemakerModelContainerModelDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerModelContainerModelDataSourceS3DataSource[] | cdktf.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface SagemakerModelContainerMultiModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}
  */
  readonly modelCacheSetting?: string;
}

export function sagemakerModelContainerMultiModelConfigToTerraform(struct?: SagemakerModelContainerMultiModelConfigOutputReference | SagemakerModelContainerMultiModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_cache_setting: cdktf.stringToTerraform(struct!.modelCacheSetting),
  }
}


export function sagemakerModelContainerMultiModelConfigToHclTerraform(struct?: SagemakerModelContainerMultiModelConfigOutputReference | SagemakerModelContainerMultiModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_cache_setting: {
      value: cdktf.stringToHclTerraform(struct!.modelCacheSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerMultiModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelContainerMultiModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCacheSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCacheSetting = this._modelCacheSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainerMultiModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelCacheSetting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelCacheSetting = value.modelCacheSetting;
    }
  }

  // model_cache_setting - computed: false, optional: true, required: false
  private _modelCacheSetting?: string; 
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
  public set modelCacheSetting(value: string) {
    this._modelCacheSetting = value;
  }
  public resetModelCacheSetting() {
    this._modelCacheSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCacheSettingInput() {
    return this._modelCacheSetting;
  }
}
export interface SagemakerModelContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#image SagemakerModel#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}
  */
  readonly inferenceSpecificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}
  */
  readonly imageConfig?: SagemakerModelContainerImageConfig;
  /**
  * model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}
  */
  readonly modelDataSource?: SagemakerModelContainerModelDataSource;
  /**
  * multi_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}
  */
  readonly multiModelConfig?: SagemakerModelContainerMultiModelConfig;
}

export function sagemakerModelContainerToTerraform(struct?: SagemakerModelContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    inference_specification_name: cdktf.stringToTerraform(struct!.inferenceSpecificationName),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    model_package_name: cdktf.stringToTerraform(struct!.modelPackageName),
    image_config: sagemakerModelContainerImageConfigToTerraform(struct!.imageConfig),
    model_data_source: sagemakerModelContainerModelDataSourceToTerraform(struct!.modelDataSource),
    multi_model_config: sagemakerModelContainerMultiModelConfigToTerraform(struct!.multiModelConfig),
  }
}


export function sagemakerModelContainerToHclTerraform(struct?: SagemakerModelContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_hostname: {
      value: cdktf.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_specification_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceSpecificationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_package_name: {
      value: cdktf.stringToHclTerraform(struct!.modelPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_config: {
      value: sagemakerModelContainerImageConfigToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelContainerImageConfigList",
    },
    model_data_source: {
      value: sagemakerModelContainerModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelContainerModelDataSourceList",
    },
    multi_model_config: {
      value: sagemakerModelContainerMultiModelConfigToHclTerraform(struct!.multiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelContainerMultiModelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerModelContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inferenceSpecificationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._multiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._inferenceSpecificationName = undefined;
      this._mode = undefined;
      this._modelDataUrl = undefined;
      this._modelPackageName = undefined;
      this._imageConfig.internalValue = undefined;
      this._modelDataSource.internalValue = undefined;
      this._multiModelConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._image = value.image;
      this._inferenceSpecificationName = value.inferenceSpecificationName;
      this._mode = value.mode;
      this._modelDataUrl = value.modelDataUrl;
      this._modelPackageName = value.modelPackageName;
      this._imageConfig.internalValue = value.imageConfig;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._multiModelConfig.internalValue = value.multiModelConfig;
    }
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inference_specification_name - computed: false, optional: true, required: false
  private _inferenceSpecificationName?: string; 
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }
  public set inferenceSpecificationName(value: string) {
    this._inferenceSpecificationName = value;
  }
  public resetInferenceSpecificationName() {
    this._inferenceSpecificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationNameInput() {
    return this._inferenceSpecificationName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_package_name - computed: false, optional: true, required: false
  private _modelPackageName?: string; 
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }
  public set modelPackageName(value: string) {
    this._modelPackageName = value;
  }
  public resetModelPackageName() {
    this._modelPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageNameInput() {
    return this._modelPackageName;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new SagemakerModelContainerImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: SagemakerModelContainerImageConfig) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new SagemakerModelContainerModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: SagemakerModelContainerModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // multi_model_config - computed: false, optional: true, required: false
  private _multiModelConfig = new SagemakerModelContainerMultiModelConfigOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
  public putMultiModelConfig(value: SagemakerModelContainerMultiModelConfig) {
    this._multiModelConfig.internalValue = value;
  }
  public resetMultiModelConfig() {
    this._multiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModelConfigInput() {
    return this._multiModelConfig.internalValue;
  }
}

export class SagemakerModelContainerList extends cdktf.ComplexList {
  public internalValue? : SagemakerModelContainer[] | cdktf.IResolvable

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
  public get(index: number): SagemakerModelContainerOutputReference {
    return new SagemakerModelContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelInferenceExecutionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}
  */
  readonly mode: string;
}

export function sagemakerModelInferenceExecutionConfigToTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function sagemakerModelInferenceExecutionConfigToHclTerraform(struct?: SagemakerModelInferenceExecutionConfigOutputReference | SagemakerModelInferenceExecutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelInferenceExecutionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelInferenceExecutionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelInferenceExecutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#repository_credentials_provider_arn SagemakerModel#repository_credentials_provider_arn}
  */
  readonly repositoryCredentialsProviderArn: string;
}

export function sagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference | SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_credentials_provider_arn: cdktf.stringToTerraform(struct!.repositoryCredentialsProviderArn),
  }
}


export function sagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigToHclTerraform(struct?: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference | SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_credentials_provider_arn: {
      value: cdktf.stringToHclTerraform(struct!.repositoryCredentialsProviderArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryCredentialsProviderArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCredentialsProviderArn = this._repositoryCredentialsProviderArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryCredentialsProviderArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryCredentialsProviderArn = value.repositoryCredentialsProviderArn;
    }
  }

  // repository_credentials_provider_arn - computed: false, optional: false, required: true
  private _repositoryCredentialsProviderArn?: string; 
  public get repositoryCredentialsProviderArn() {
    return this.getStringAttribute('repository_credentials_provider_arn');
  }
  public set repositoryCredentialsProviderArn(value: string) {
    this._repositoryCredentialsProviderArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCredentialsProviderArnInput() {
    return this._repositoryCredentialsProviderArn;
  }
}
export interface SagemakerModelPrimaryContainerImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}
  */
  readonly repositoryAccessMode: string;
  /**
  * repository_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#repository_auth_config SagemakerModel#repository_auth_config}
  */
  readonly repositoryAuthConfig?: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig;
}

export function sagemakerModelPrimaryContainerImageConfigToTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_access_mode: cdktf.stringToTerraform(struct!.repositoryAccessMode),
    repository_auth_config: sagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigToTerraform(struct!.repositoryAuthConfig),
  }
}


export function sagemakerModelPrimaryContainerImageConfigToHclTerraform(struct?: SagemakerModelPrimaryContainerImageConfigOutputReference | SagemakerModelPrimaryContainerImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.repositoryAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_auth_config: {
      value: sagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigToHclTerraform(struct!.repositoryAuthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelPrimaryContainerImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAccessMode = this._repositoryAccessMode;
    }
    if (this._repositoryAuthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryAuthConfig = this._repositoryAuthConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainerImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryAccessMode = undefined;
      this._repositoryAuthConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryAccessMode = value.repositoryAccessMode;
      this._repositoryAuthConfig.internalValue = value.repositoryAuthConfig;
    }
  }

  // repository_access_mode - computed: false, optional: false, required: true
  private _repositoryAccessMode?: string; 
  public get repositoryAccessMode() {
    return this.getStringAttribute('repository_access_mode');
  }
  public set repositoryAccessMode(value: string) {
    this._repositoryAccessMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAccessModeInput() {
    return this._repositoryAccessMode;
  }

  // repository_auth_config - computed: false, optional: true, required: false
  private _repositoryAuthConfig = new SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfigOutputReference(this, "repository_auth_config");
  public get repositoryAuthConfig() {
    return this._repositoryAuthConfig;
  }
  public putRepositoryAuthConfig(value: SagemakerModelPrimaryContainerImageConfigRepositoryAuthConfig) {
    this._repositoryAuthConfig.internalValue = value;
  }
  public resetRepositoryAuthConfig() {
    this._repositoryAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAuthConfigInput() {
    return this._repositoryAuthConfig.internalValue;
  }
}
export interface SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#accept_eula SagemakerModel#accept_eula}
  */
  readonly acceptEula: boolean | cdktf.IResolvable;
}

export function sagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct?: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference | SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.booleanToTerraform(struct!.acceptEula),
  }
}


export function sagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct?: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference | SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
    }
  }

  // accept_eula - computed: false, optional: false, required: true
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }
}
export interface SagemakerModelPrimaryContainerModelDataSourceS3DataSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#compression_type SagemakerModel#compression_type}
  */
  readonly compressionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#s3_data_type SagemakerModel#s3_data_type}
  */
  readonly s3DataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#s3_uri SagemakerModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * model_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_access_config SagemakerModel#model_access_config}
  */
  readonly modelAccessConfig?: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig;
}

export function sagemakerModelPrimaryContainerModelDataSourceS3DataSourceToTerraform(struct?: SagemakerModelPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression_type: cdktf.stringToTerraform(struct!.compressionType),
    s3_data_type: cdktf.stringToTerraform(struct!.s3DataType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    model_access_config: sagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToTerraform(struct!.modelAccessConfig),
  }
}


export function sagemakerModelPrimaryContainerModelDataSourceS3DataSourceToHclTerraform(struct?: SagemakerModelPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compression_type: {
      value: cdktf.stringToHclTerraform(struct!.compressionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_data_type: {
      value: cdktf.stringToHclTerraform(struct!.s3DataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_access_config: {
      value: sagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigToHclTerraform(struct!.modelAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerModelPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionType = this._compressionType;
    }
    if (this._s3DataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataType = this._s3DataType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._modelAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainerModelDataSourceS3DataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compressionType = undefined;
      this._s3DataType = undefined;
      this._s3Uri = undefined;
      this._modelAccessConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compressionType = value.compressionType;
      this._s3DataType = value.s3DataType;
      this._s3Uri = value.s3Uri;
      this._modelAccessConfig.internalValue = value.modelAccessConfig;
    }
  }

  // compression_type - computed: false, optional: false, required: true
  private _compressionType?: string; 
  public get compressionType() {
    return this.getStringAttribute('compression_type');
  }
  public set compressionType(value: string) {
    this._compressionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionTypeInput() {
    return this._compressionType;
  }

  // s3_data_type - computed: false, optional: false, required: true
  private _s3DataType?: string; 
  public get s3DataType() {
    return this.getStringAttribute('s3_data_type');
  }
  public set s3DataType(value: string) {
    this._s3DataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataTypeInput() {
    return this._s3DataType;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // model_access_config - computed: false, optional: true, required: false
  private _modelAccessConfig = new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfigOutputReference(this, "model_access_config");
  public get modelAccessConfig() {
    return this._modelAccessConfig;
  }
  public putModelAccessConfig(value: SagemakerModelPrimaryContainerModelDataSourceS3DataSourceModelAccessConfig) {
    this._modelAccessConfig.internalValue = value;
  }
  public resetModelAccessConfig() {
    this._modelAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAccessConfigInput() {
    return this._modelAccessConfig.internalValue;
  }
}

export class SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList extends cdktf.ComplexList {
  public internalValue? : SagemakerModelPrimaryContainerModelDataSourceS3DataSource[] | cdktf.IResolvable

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
  public get(index: number): SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference {
    return new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerModelPrimaryContainerModelDataSource {
  /**
  * s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#s3_data_source SagemakerModel#s3_data_source}
  */
  readonly s3DataSource: SagemakerModelPrimaryContainerModelDataSourceS3DataSource[] | cdktf.IResolvable;
}

export function sagemakerModelPrimaryContainerModelDataSourceToTerraform(struct?: SagemakerModelPrimaryContainerModelDataSourceOutputReference | SagemakerModelPrimaryContainerModelDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_data_source: cdktf.listMapper(sagemakerModelPrimaryContainerModelDataSourceS3DataSourceToTerraform, true)(struct!.s3DataSource),
  }
}


export function sagemakerModelPrimaryContainerModelDataSourceToHclTerraform(struct?: SagemakerModelPrimaryContainerModelDataSourceOutputReference | SagemakerModelPrimaryContainerModelDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_data_source: {
      value: cdktf.listMapperHcl(sagemakerModelPrimaryContainerModelDataSourceS3DataSourceToHclTerraform, true)(struct!.s3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerModelDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelPrimaryContainerModelDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainerModelDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3DataSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3DataSource.internalValue = value.s3DataSource;
    }
  }

  // s3_data_source - computed: false, optional: false, required: true
  private _s3DataSource = new SagemakerModelPrimaryContainerModelDataSourceS3DataSourceList(this, "s3_data_source", false);
  public get s3DataSource() {
    return this._s3DataSource;
  }
  public putS3DataSource(value: SagemakerModelPrimaryContainerModelDataSourceS3DataSource[] | cdktf.IResolvable) {
    this._s3DataSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DataSourceInput() {
    return this._s3DataSource.internalValue;
  }
}
export interface SagemakerModelPrimaryContainerMultiModelConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_cache_setting SagemakerModel#model_cache_setting}
  */
  readonly modelCacheSetting?: string;
}

export function sagemakerModelPrimaryContainerMultiModelConfigToTerraform(struct?: SagemakerModelPrimaryContainerMultiModelConfigOutputReference | SagemakerModelPrimaryContainerMultiModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_cache_setting: cdktf.stringToTerraform(struct!.modelCacheSetting),
  }
}


export function sagemakerModelPrimaryContainerMultiModelConfigToHclTerraform(struct?: SagemakerModelPrimaryContainerMultiModelConfigOutputReference | SagemakerModelPrimaryContainerMultiModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_cache_setting: {
      value: cdktf.stringToHclTerraform(struct!.modelCacheSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerMultiModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelPrimaryContainerMultiModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelCacheSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelCacheSetting = this._modelCacheSetting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainerMultiModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modelCacheSetting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modelCacheSetting = value.modelCacheSetting;
    }
  }

  // model_cache_setting - computed: false, optional: true, required: false
  private _modelCacheSetting?: string; 
  public get modelCacheSetting() {
    return this.getStringAttribute('model_cache_setting');
  }
  public set modelCacheSetting(value: string) {
    this._modelCacheSetting = value;
  }
  public resetModelCacheSetting() {
    this._modelCacheSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelCacheSettingInput() {
    return this._modelCacheSetting;
  }
}
export interface SagemakerModelPrimaryContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}
  */
  readonly containerHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#image SagemakerModel#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#inference_specification_name SagemakerModel#inference_specification_name}
  */
  readonly inferenceSpecificationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}
  */
  readonly modelDataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_package_name SagemakerModel#model_package_name}
  */
  readonly modelPackageName?: string;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}
  */
  readonly imageConfig?: SagemakerModelPrimaryContainerImageConfig;
  /**
  * model_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#model_data_source SagemakerModel#model_data_source}
  */
  readonly modelDataSource?: SagemakerModelPrimaryContainerModelDataSource;
  /**
  * multi_model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#multi_model_config SagemakerModel#multi_model_config}
  */
  readonly multiModelConfig?: SagemakerModelPrimaryContainerMultiModelConfig;
}

export function sagemakerModelPrimaryContainerToTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_hostname: cdktf.stringToTerraform(struct!.containerHostname),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    inference_specification_name: cdktf.stringToTerraform(struct!.inferenceSpecificationName),
    mode: cdktf.stringToTerraform(struct!.mode),
    model_data_url: cdktf.stringToTerraform(struct!.modelDataUrl),
    model_package_name: cdktf.stringToTerraform(struct!.modelPackageName),
    image_config: sagemakerModelPrimaryContainerImageConfigToTerraform(struct!.imageConfig),
    model_data_source: sagemakerModelPrimaryContainerModelDataSourceToTerraform(struct!.modelDataSource),
    multi_model_config: sagemakerModelPrimaryContainerMultiModelConfigToTerraform(struct!.multiModelConfig),
  }
}


export function sagemakerModelPrimaryContainerToHclTerraform(struct?: SagemakerModelPrimaryContainerOutputReference | SagemakerModelPrimaryContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_hostname: {
      value: cdktf.stringToHclTerraform(struct!.containerHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_specification_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceSpecificationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_data_url: {
      value: cdktf.stringToHclTerraform(struct!.modelDataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_package_name: {
      value: cdktf.stringToHclTerraform(struct!.modelPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_config: {
      value: sagemakerModelPrimaryContainerImageConfigToHclTerraform(struct!.imageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPrimaryContainerImageConfigList",
    },
    model_data_source: {
      value: sagemakerModelPrimaryContainerModelDataSourceToHclTerraform(struct!.modelDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPrimaryContainerModelDataSourceList",
    },
    multi_model_config: {
      value: sagemakerModelPrimaryContainerMultiModelConfigToHclTerraform(struct!.multiModelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerModelPrimaryContainerMultiModelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelPrimaryContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelPrimaryContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerHostname = this._containerHostname;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inferenceSpecificationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceSpecificationName = this._inferenceSpecificationName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._modelDataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataUrl = this._modelDataUrl;
    }
    if (this._modelPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelPackageName = this._modelPackageName;
    }
    if (this._imageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageConfig = this._imageConfig?.internalValue;
    }
    if (this._modelDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
    }
    if (this._multiModelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiModelConfig = this._multiModelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelPrimaryContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerHostname = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._inferenceSpecificationName = undefined;
      this._mode = undefined;
      this._modelDataUrl = undefined;
      this._modelPackageName = undefined;
      this._imageConfig.internalValue = undefined;
      this._modelDataSource.internalValue = undefined;
      this._multiModelConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerHostname = value.containerHostname;
      this._environment = value.environment;
      this._image = value.image;
      this._inferenceSpecificationName = value.inferenceSpecificationName;
      this._mode = value.mode;
      this._modelDataUrl = value.modelDataUrl;
      this._modelPackageName = value.modelPackageName;
      this._imageConfig.internalValue = value.imageConfig;
      this._modelDataSource.internalValue = value.modelDataSource;
      this._multiModelConfig.internalValue = value.multiModelConfig;
    }
  }

  // container_hostname - computed: false, optional: true, required: false
  private _containerHostname?: string; 
  public get containerHostname() {
    return this.getStringAttribute('container_hostname');
  }
  public set containerHostname(value: string) {
    this._containerHostname = value;
  }
  public resetContainerHostname() {
    this._containerHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerHostnameInput() {
    return this._containerHostname;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inference_specification_name - computed: false, optional: true, required: false
  private _inferenceSpecificationName?: string; 
  public get inferenceSpecificationName() {
    return this.getStringAttribute('inference_specification_name');
  }
  public set inferenceSpecificationName(value: string) {
    this._inferenceSpecificationName = value;
  }
  public resetInferenceSpecificationName() {
    this._inferenceSpecificationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecificationNameInput() {
    return this._inferenceSpecificationName;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // model_data_url - computed: false, optional: true, required: false
  private _modelDataUrl?: string; 
  public get modelDataUrl() {
    return this.getStringAttribute('model_data_url');
  }
  public set modelDataUrl(value: string) {
    this._modelDataUrl = value;
  }
  public resetModelDataUrl() {
    this._modelDataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataUrlInput() {
    return this._modelDataUrl;
  }

  // model_package_name - computed: false, optional: true, required: false
  private _modelPackageName?: string; 
  public get modelPackageName() {
    return this.getStringAttribute('model_package_name');
  }
  public set modelPackageName(value: string) {
    this._modelPackageName = value;
  }
  public resetModelPackageName() {
    this._modelPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPackageNameInput() {
    return this._modelPackageName;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new SagemakerModelPrimaryContainerImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: SagemakerModelPrimaryContainerImageConfig) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // model_data_source - computed: false, optional: true, required: false
  private _modelDataSource = new SagemakerModelPrimaryContainerModelDataSourceOutputReference(this, "model_data_source");
  public get modelDataSource() {
    return this._modelDataSource;
  }
  public putModelDataSource(value: SagemakerModelPrimaryContainerModelDataSource) {
    this._modelDataSource.internalValue = value;
  }
  public resetModelDataSource() {
    this._modelDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDataSourceInput() {
    return this._modelDataSource.internalValue;
  }

  // multi_model_config - computed: false, optional: true, required: false
  private _multiModelConfig = new SagemakerModelPrimaryContainerMultiModelConfigOutputReference(this, "multi_model_config");
  public get multiModelConfig() {
    return this._multiModelConfig;
  }
  public putMultiModelConfig(value: SagemakerModelPrimaryContainerMultiModelConfig) {
    this._multiModelConfig.internalValue = value;
  }
  public resetMultiModelConfig() {
    this._multiModelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiModelConfigInput() {
    return this._multiModelConfig.internalValue;
  }
}
export interface SagemakerModelVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}
  */
  readonly subnets: string[];
}

export function sagemakerModelVpcConfigToTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function sagemakerModelVpcConfigToHclTerraform(struct?: SagemakerModelVpcConfigOutputReference | SagemakerModelVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerModelVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerModelVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerModelVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model aws_sagemaker_model}
*/
export class SagemakerModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerModel to import
  * @param importFromId The id of the existing SagemakerModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.1/docs/resources/sagemaker_model aws_sagemaker_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerModelConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._executionRoleArn = config.executionRoleArn;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._container.internalValue = config.container;
    this._inferenceExecutionConfig.internalValue = config.inferenceExecutionConfig;
    this._primaryContainer.internalValue = config.primaryContainer;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean | cdktf.IResolvable; 
  public get enableNetworkIsolation() {
    return this.getBooleanAttribute('enable_network_isolation');
  }
  public set enableNetworkIsolation(value: boolean | cdktf.IResolvable) {
    this._enableNetworkIsolation = value;
  }
  public resetEnableNetworkIsolation() {
    this._enableNetworkIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkIsolationInput() {
    return this._enableNetworkIsolation;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn?: string; 
  public get executionRoleArn() {
    return this.getStringAttribute('execution_role_arn');
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionRoleArnInput() {
    return this._executionRoleArn;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // container - computed: false, optional: true, required: false
  private _container = new SagemakerModelContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: SagemakerModelContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // inference_execution_config - computed: false, optional: true, required: false
  private _inferenceExecutionConfig = new SagemakerModelInferenceExecutionConfigOutputReference(this, "inference_execution_config");
  public get inferenceExecutionConfig() {
    return this._inferenceExecutionConfig;
  }
  public putInferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig) {
    this._inferenceExecutionConfig.internalValue = value;
  }
  public resetInferenceExecutionConfig() {
    this._inferenceExecutionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceExecutionConfigInput() {
    return this._inferenceExecutionConfig.internalValue;
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer = new SagemakerModelPrimaryContainerOutputReference(this, "primary_container");
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public putPrimaryContainer(value: SagemakerModelPrimaryContainer) {
    this._primaryContainer.internalValue = value;
  }
  public resetPrimaryContainer() {
    this._primaryContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContainerInput() {
    return this._primaryContainer.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new SagemakerModelVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: SagemakerModelVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_network_isolation: cdktf.booleanToTerraform(this._enableNetworkIsolation),
      execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      container: cdktf.listMapper(sagemakerModelContainerToTerraform, true)(this._container.internalValue),
      inference_execution_config: sagemakerModelInferenceExecutionConfigToTerraform(this._inferenceExecutionConfig.internalValue),
      primary_container: sagemakerModelPrimaryContainerToTerraform(this._primaryContainer.internalValue),
      vpc_config: sagemakerModelVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_network_isolation: {
        value: cdktf.booleanToHclTerraform(this._enableNetworkIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._executionRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      container: {
        value: cdktf.listMapperHcl(sagemakerModelContainerToHclTerraform, true)(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelContainerList",
      },
      inference_execution_config: {
        value: sagemakerModelInferenceExecutionConfigToHclTerraform(this._inferenceExecutionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelInferenceExecutionConfigList",
      },
      primary_container: {
        value: sagemakerModelPrimaryContainerToHclTerraform(this._primaryContainer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelPrimaryContainerList",
      },
      vpc_config: {
        value: sagemakerModelVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerModelVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
