// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#description SagemakerFeatureGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
  */
  readonly eventTimeFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}
  */
  readonly featureGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#id SagemakerFeatureGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
  */
  readonly recordIdentifierFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * feature_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}
  */
  readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable;
  /**
  * offline_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}
  */
  readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
  /**
  * online_store_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}
  */
  readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
  /**
  * throughput_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#throughput_config SagemakerFeatureGroup#throughput_config}
  */
  readonly throughputConfig?: SagemakerFeatureGroupThroughputConfig;
}
export interface SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#dimension SagemakerFeatureGroup#dimension}
  */
  readonly dimension?: number;
}

export function sagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigToTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.numberToTerraform(struct!.dimension),
  }
}


export function sagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigToHclTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.numberToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension = value.dimension;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }
}
export interface SagemakerFeatureGroupFeatureDefinitionCollectionConfig {
  /**
  * vector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#vector_config SagemakerFeatureGroup#vector_config}
  */
  readonly vectorConfig?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig;
}

export function sagemakerFeatureGroupFeatureDefinitionCollectionConfigToTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vector_config: sagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigToTerraform(struct!.vectorConfig),
  }
}


export function sagemakerFeatureGroupFeatureDefinitionCollectionConfigToHclTerraform(struct?: SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference | SagemakerFeatureGroupFeatureDefinitionCollectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vector_config: {
      value: sagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigToHclTerraform(struct!.vectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupFeatureDefinitionCollectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorConfig = this._vectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vectorConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vectorConfig.internalValue = value.vectorConfig;
    }
  }

  // vector_config - computed: false, optional: true, required: false
  private _vectorConfig = new SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfigOutputReference(this, "vector_config");
  public get vectorConfig() {
    return this._vectorConfig;
  }
  public putVectorConfig(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfigVectorConfig) {
    this._vectorConfig.internalValue = value;
  }
  public resetVectorConfig() {
    this._vectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorConfigInput() {
    return this._vectorConfig.internalValue;
  }
}
export interface SagemakerFeatureGroupFeatureDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#collection_type SagemakerFeatureGroup#collection_type}
  */
  readonly collectionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}
  */
  readonly featureType?: string;
  /**
  * collection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#collection_config SagemakerFeatureGroup#collection_config}
  */
  readonly collectionConfig?: SagemakerFeatureGroupFeatureDefinitionCollectionConfig;
}

export function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_type: cdktf.stringToTerraform(struct!.collectionType),
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
    collection_config: sagemakerFeatureGroupFeatureDefinitionCollectionConfigToTerraform(struct!.collectionConfig),
  }
}


export function sagemakerFeatureGroupFeatureDefinitionToHclTerraform(struct?: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_type: {
      value: cdktf.stringToHclTerraform(struct!.collectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_name: {
      value: cdktf.stringToHclTerraform(struct!.featureName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_type: {
      value: cdktf.stringToHclTerraform(struct!.featureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collection_config: {
      value: sagemakerFeatureGroupFeatureDefinitionCollectionConfigToHclTerraform(struct!.collectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerFeatureGroupFeatureDefinitionCollectionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupFeatureDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionType = this._collectionType;
    }
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    if (this._collectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionConfig = this._collectionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionType = undefined;
      this._featureName = undefined;
      this._featureType = undefined;
      this._collectionConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionType = value.collectionType;
      this._featureName = value.featureName;
      this._featureType = value.featureType;
      this._collectionConfig.internalValue = value.collectionConfig;
    }
  }

  // collection_type - computed: false, optional: true, required: false
  private _collectionType?: string; 
  public get collectionType() {
    return this.getStringAttribute('collection_type');
  }
  public set collectionType(value: string) {
    this._collectionType = value;
  }
  public resetCollectionType() {
    this._collectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTypeInput() {
    return this._collectionType;
  }

  // feature_name - computed: false, optional: true, required: false
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  public resetFeatureName() {
    this._featureName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
  }

  // feature_type - computed: false, optional: true, required: false
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  public resetFeatureType() {
    this._featureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
  }

  // collection_config - computed: false, optional: true, required: false
  private _collectionConfig = new SagemakerFeatureGroupFeatureDefinitionCollectionConfigOutputReference(this, "collection_config");
  public get collectionConfig() {
    return this._collectionConfig;
  }
  public putCollectionConfig(value: SagemakerFeatureGroupFeatureDefinitionCollectionConfig) {
    this._collectionConfig.internalValue = value;
  }
  public resetCollectionConfig() {
    this._collectionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionConfigInput() {
    return this._collectionConfig.internalValue;
  }
}

export class SagemakerFeatureGroupFeatureDefinitionList extends cdktf.ComplexList {
  public internalValue? : SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable

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
  public get(index: number): SagemakerFeatureGroupFeatureDefinitionOutputReference {
    return new SagemakerFeatureGroupFeatureDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#database SagemakerFeatureGroup#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}
  */
  readonly tableName?: string;
}

export function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    database: cdktf.stringToTerraform(struct!.database),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToHclTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._database = undefined;
      this._tableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._database = value.database;
      this._tableName = value.tableName;
    }
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#resolved_output_s3_uri SagemakerFeatureGroup#resolved_output_s3_uri}
  */
  readonly resolvedOutputS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}
  */
  readonly s3Uri: string;
}

export function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    resolved_output_s3_uri: cdktf.stringToTerraform(struct!.resolvedOutputS3Uri),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}


export function sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToHclTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolved_output_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.resolvedOutputS3Uri),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._resolvedOutputS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedOutputS3Uri = this._resolvedOutputS3Uri;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._resolvedOutputS3Uri = undefined;
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._resolvedOutputS3Uri = value.resolvedOutputS3Uri;
      this._s3Uri = value.s3Uri;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // resolved_output_s3_uri - computed: true, optional: true, required: false
  private _resolvedOutputS3Uri?: string; 
  public get resolvedOutputS3Uri() {
    return this.getStringAttribute('resolved_output_s3_uri');
  }
  public set resolvedOutputS3Uri(value: string) {
    this._resolvedOutputS3Uri = value;
  }
  public resetResolvedOutputS3Uri() {
    this._resolvedOutputS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedOutputS3UriInput() {
    return this._resolvedOutputS3Uri;
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
}
export interface SagemakerFeatureGroupOfflineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
  */
  readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#table_format SagemakerFeatureGroup#table_format}
  */
  readonly tableFormat?: string;
  /**
  * data_catalog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
  */
  readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
  /**
  * s3_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
  */
  readonly s3StorageConfig: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig;
}

export function sagemakerFeatureGroupOfflineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_glue_table_creation: cdktf.booleanToTerraform(struct!.disableGlueTableCreation),
    table_format: cdktf.stringToTerraform(struct!.tableFormat),
    data_catalog_config: sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
    s3_storage_config: sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
  }
}


export function sagemakerFeatureGroupOfflineStoreConfigToHclTerraform(struct?: SagemakerFeatureGroupOfflineStoreConfigOutputReference | SagemakerFeatureGroupOfflineStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_glue_table_creation: {
      value: cdktf.booleanToHclTerraform(struct!.disableGlueTableCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    table_format: {
      value: cdktf.stringToHclTerraform(struct!.tableFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_catalog_config: {
      value: sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToHclTerraform(struct!.dataCatalogConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigList",
    },
    s3_storage_config: {
      value: sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToHclTerraform(struct!.s3StorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupOfflineStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupOfflineStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableGlueTableCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableGlueTableCreation = this._disableGlueTableCreation;
    }
    if (this._tableFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFormat = this._tableFormat;
    }
    if (this._dataCatalogConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCatalogConfig = this._dataCatalogConfig?.internalValue;
    }
    if (this._s3StorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3StorageConfig = this._s3StorageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOfflineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableGlueTableCreation = undefined;
      this._tableFormat = undefined;
      this._dataCatalogConfig.internalValue = undefined;
      this._s3StorageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableGlueTableCreation = value.disableGlueTableCreation;
      this._tableFormat = value.tableFormat;
      this._dataCatalogConfig.internalValue = value.dataCatalogConfig;
      this._s3StorageConfig.internalValue = value.s3StorageConfig;
    }
  }

  // disable_glue_table_creation - computed: false, optional: true, required: false
  private _disableGlueTableCreation?: boolean | cdktf.IResolvable; 
  public get disableGlueTableCreation() {
    return this.getBooleanAttribute('disable_glue_table_creation');
  }
  public set disableGlueTableCreation(value: boolean | cdktf.IResolvable) {
    this._disableGlueTableCreation = value;
  }
  public resetDisableGlueTableCreation() {
    this._disableGlueTableCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableGlueTableCreationInput() {
    return this._disableGlueTableCreation;
  }

  // table_format - computed: false, optional: true, required: false
  private _tableFormat?: string; 
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
  public set tableFormat(value: string) {
    this._tableFormat = value;
  }
  public resetTableFormat() {
    this._tableFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatInput() {
    return this._tableFormat;
  }

  // data_catalog_config - computed: false, optional: true, required: false
  private _dataCatalogConfig = new SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigOutputReference(this, "data_catalog_config");
  public get dataCatalogConfig() {
    return this._dataCatalogConfig;
  }
  public putDataCatalogConfig(value: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig) {
    this._dataCatalogConfig.internalValue = value;
  }
  public resetDataCatalogConfig() {
    this._dataCatalogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogConfigInput() {
    return this._dataCatalogConfig.internalValue;
  }

  // s3_storage_config - computed: false, optional: false, required: true
  private _s3StorageConfig = new SagemakerFeatureGroupOfflineStoreConfigS3StorageConfigOutputReference(this, "s3_storage_config");
  public get s3StorageConfig() {
    return this._s3StorageConfig;
  }
  public putS3StorageConfig(value: SagemakerFeatureGroupOfflineStoreConfigS3StorageConfig) {
    this._s3StorageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageConfigInput() {
    return this._s3StorageConfig.internalValue;
  }
}
export interface SagemakerFeatureGroupOnlineStoreConfigSecurityConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToHclTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface SagemakerFeatureGroupOnlineStoreConfigTtlDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#unit SagemakerFeatureGroup#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#value SagemakerFeatureGroup#value}
  */
  readonly value?: number;
}

export function sagemakerFeatureGroupOnlineStoreConfigTtlDurationToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference | SagemakerFeatureGroupOnlineStoreConfigTtlDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sagemakerFeatureGroupOnlineStoreConfigTtlDurationToHclTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference | SagemakerFeatureGroupOnlineStoreConfigTtlDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOnlineStoreConfigTtlDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unit = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SagemakerFeatureGroupOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}
  */
  readonly enableOnlineStore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#storage_type SagemakerFeatureGroup#storage_type}
  */
  readonly storageType?: string;
  /**
  * security_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}
  */
  readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
  /**
  * ttl_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#ttl_duration SagemakerFeatureGroup#ttl_duration}
  */
  readonly ttlDuration?: SagemakerFeatureGroupOnlineStoreConfigTtlDuration;
}

export function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    security_config: sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
    ttl_duration: sagemakerFeatureGroupOnlineStoreConfigTtlDurationToTerraform(struct!.ttlDuration),
  }
}


export function sagemakerFeatureGroupOnlineStoreConfigToHclTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_online_store: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnlineStore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_config: {
      value: sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToHclTerraform(struct!.securityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerFeatureGroupOnlineStoreConfigSecurityConfigList",
    },
    ttl_duration: {
      value: sagemakerFeatureGroupOnlineStoreConfigTtlDurationToHclTerraform(struct!.ttlDuration),
      isBlock: true,
      type: "list",
      storageClassType: "SagemakerFeatureGroupOnlineStoreConfigTtlDurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupOnlineStoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupOnlineStoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOnlineStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnlineStore = this._enableOnlineStore;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._securityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    if (this._ttlDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlDuration = this._ttlDuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOnlineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOnlineStore = undefined;
      this._storageType = undefined;
      this._securityConfig.internalValue = undefined;
      this._ttlDuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOnlineStore = value.enableOnlineStore;
      this._storageType = value.storageType;
      this._securityConfig.internalValue = value.securityConfig;
      this._ttlDuration.internalValue = value.ttlDuration;
    }
  }

  // enable_online_store - computed: false, optional: true, required: false
  private _enableOnlineStore?: boolean | cdktf.IResolvable; 
  public get enableOnlineStore() {
    return this.getBooleanAttribute('enable_online_store');
  }
  public set enableOnlineStore(value: boolean | cdktf.IResolvable) {
    this._enableOnlineStore = value;
  }
  public resetEnableOnlineStore() {
    this._enableOnlineStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnlineStoreInput() {
    return this._enableOnlineStore;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new SagemakerFeatureGroupOnlineStoreConfigSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // ttl_duration - computed: false, optional: true, required: false
  private _ttlDuration = new SagemakerFeatureGroupOnlineStoreConfigTtlDurationOutputReference(this, "ttl_duration");
  public get ttlDuration() {
    return this._ttlDuration;
  }
  public putTtlDuration(value: SagemakerFeatureGroupOnlineStoreConfigTtlDuration) {
    this._ttlDuration.internalValue = value;
  }
  public resetTtlDuration() {
    this._ttlDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlDurationInput() {
    return this._ttlDuration.internalValue;
  }
}
export interface SagemakerFeatureGroupThroughputConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#provisioned_read_capacity_units SagemakerFeatureGroup#provisioned_read_capacity_units}
  */
  readonly provisionedReadCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#provisioned_write_capacity_units SagemakerFeatureGroup#provisioned_write_capacity_units}
  */
  readonly provisionedWriteCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#throughput_mode SagemakerFeatureGroup#throughput_mode}
  */
  readonly throughputMode?: string;
}

export function sagemakerFeatureGroupThroughputConfigToTerraform(struct?: SagemakerFeatureGroupThroughputConfigOutputReference | SagemakerFeatureGroupThroughputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provisioned_read_capacity_units: cdktf.numberToTerraform(struct!.provisionedReadCapacityUnits),
    provisioned_write_capacity_units: cdktf.numberToTerraform(struct!.provisionedWriteCapacityUnits),
    throughput_mode: cdktf.stringToTerraform(struct!.throughputMode),
  }
}


export function sagemakerFeatureGroupThroughputConfigToHclTerraform(struct?: SagemakerFeatureGroupThroughputConfigOutputReference | SagemakerFeatureGroupThroughputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provisioned_read_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.provisionedReadCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provisioned_write_capacity_units: {
      value: cdktf.numberToHclTerraform(struct!.provisionedWriteCapacityUnits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput_mode: {
      value: cdktf.stringToHclTerraform(struct!.throughputMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerFeatureGroupThroughputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerFeatureGroupThroughputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provisionedReadCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedReadCapacityUnits = this._provisionedReadCapacityUnits;
    }
    if (this._provisionedWriteCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionedWriteCapacityUnits = this._provisionedWriteCapacityUnits;
    }
    if (this._throughputMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputMode = this._throughputMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupThroughputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provisionedReadCapacityUnits = undefined;
      this._provisionedWriteCapacityUnits = undefined;
      this._throughputMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provisionedReadCapacityUnits = value.provisionedReadCapacityUnits;
      this._provisionedWriteCapacityUnits = value.provisionedWriteCapacityUnits;
      this._throughputMode = value.throughputMode;
    }
  }

  // provisioned_read_capacity_units - computed: false, optional: true, required: false
  private _provisionedReadCapacityUnits?: number; 
  public get provisionedReadCapacityUnits() {
    return this.getNumberAttribute('provisioned_read_capacity_units');
  }
  public set provisionedReadCapacityUnits(value: number) {
    this._provisionedReadCapacityUnits = value;
  }
  public resetProvisionedReadCapacityUnits() {
    this._provisionedReadCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedReadCapacityUnitsInput() {
    return this._provisionedReadCapacityUnits;
  }

  // provisioned_write_capacity_units - computed: false, optional: true, required: false
  private _provisionedWriteCapacityUnits?: number; 
  public get provisionedWriteCapacityUnits() {
    return this.getNumberAttribute('provisioned_write_capacity_units');
  }
  public set provisionedWriteCapacityUnits(value: number) {
    this._provisionedWriteCapacityUnits = value;
  }
  public resetProvisionedWriteCapacityUnits() {
    this._provisionedWriteCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedWriteCapacityUnitsInput() {
    return this._provisionedWriteCapacityUnits;
  }

  // throughput_mode - computed: true, optional: true, required: false
  private _throughputMode?: string; 
  public get throughputMode() {
    return this.getStringAttribute('throughput_mode');
  }
  public set throughputMode(value: string) {
    this._throughputMode = value;
  }
  public resetThroughputMode() {
    this._throughputMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputModeInput() {
    return this._throughputMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group aws_sagemaker_feature_group}
*/
export class SagemakerFeatureGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_feature_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerFeatureGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerFeatureGroup to import
  * @param importFromId The id of the existing SagemakerFeatureGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerFeatureGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_feature_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/sagemaker_feature_group aws_sagemaker_feature_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerFeatureGroupConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerFeatureGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_feature_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
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
    this._description = config.description;
    this._eventTimeFeatureName = config.eventTimeFeatureName;
    this._featureGroupName = config.featureGroupName;
    this._id = config.id;
    this._recordIdentifierFeatureName = config.recordIdentifierFeatureName;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._featureDefinition.internalValue = config.featureDefinition;
    this._offlineStoreConfig.internalValue = config.offlineStoreConfig;
    this._onlineStoreConfig.internalValue = config.onlineStoreConfig;
    this._throughputConfig.internalValue = config.throughputConfig;
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

  // event_time_feature_name - computed: false, optional: false, required: true
  private _eventTimeFeatureName?: string; 
  public get eventTimeFeatureName() {
    return this.getStringAttribute('event_time_feature_name');
  }
  public set eventTimeFeatureName(value: string) {
    this._eventTimeFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimeFeatureNameInput() {
    return this._eventTimeFeatureName;
  }

  // feature_group_name - computed: false, optional: false, required: true
  private _featureGroupName?: string; 
  public get featureGroupName() {
    return this.getStringAttribute('feature_group_name');
  }
  public set featureGroupName(value: string) {
    this._featureGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGroupNameInput() {
    return this._featureGroupName;
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

  // record_identifier_feature_name - computed: false, optional: false, required: true
  private _recordIdentifierFeatureName?: string; 
  public get recordIdentifierFeatureName() {
    return this.getStringAttribute('record_identifier_feature_name');
  }
  public set recordIdentifierFeatureName(value: string) {
    this._recordIdentifierFeatureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdentifierFeatureNameInput() {
    return this._recordIdentifierFeatureName;
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

  // feature_definition - computed: false, optional: false, required: true
  private _featureDefinition = new SagemakerFeatureGroupFeatureDefinitionList(this, "feature_definition", false);
  public get featureDefinition() {
    return this._featureDefinition;
  }
  public putFeatureDefinition(value: SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable) {
    this._featureDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDefinitionInput() {
    return this._featureDefinition.internalValue;
  }

  // offline_store_config - computed: false, optional: true, required: false
  private _offlineStoreConfig = new SagemakerFeatureGroupOfflineStoreConfigOutputReference(this, "offline_store_config");
  public get offlineStoreConfig() {
    return this._offlineStoreConfig;
  }
  public putOfflineStoreConfig(value: SagemakerFeatureGroupOfflineStoreConfig) {
    this._offlineStoreConfig.internalValue = value;
  }
  public resetOfflineStoreConfig() {
    this._offlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineStoreConfigInput() {
    return this._offlineStoreConfig.internalValue;
  }

  // online_store_config - computed: false, optional: true, required: false
  private _onlineStoreConfig = new SagemakerFeatureGroupOnlineStoreConfigOutputReference(this, "online_store_config");
  public get onlineStoreConfig() {
    return this._onlineStoreConfig;
  }
  public putOnlineStoreConfig(value: SagemakerFeatureGroupOnlineStoreConfig) {
    this._onlineStoreConfig.internalValue = value;
  }
  public resetOnlineStoreConfig() {
    this._onlineStoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineStoreConfigInput() {
    return this._onlineStoreConfig.internalValue;
  }

  // throughput_config - computed: false, optional: true, required: false
  private _throughputConfig = new SagemakerFeatureGroupThroughputConfigOutputReference(this, "throughput_config");
  public get throughputConfig() {
    return this._throughputConfig;
  }
  public putThroughputConfig(value: SagemakerFeatureGroupThroughputConfig) {
    this._throughputConfig.internalValue = value;
  }
  public resetThroughputConfig() {
    this._throughputConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputConfigInput() {
    return this._throughputConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      event_time_feature_name: cdktf.stringToTerraform(this._eventTimeFeatureName),
      feature_group_name: cdktf.stringToTerraform(this._featureGroupName),
      id: cdktf.stringToTerraform(this._id),
      record_identifier_feature_name: cdktf.stringToTerraform(this._recordIdentifierFeatureName),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      feature_definition: cdktf.listMapper(sagemakerFeatureGroupFeatureDefinitionToTerraform, true)(this._featureDefinition.internalValue),
      offline_store_config: sagemakerFeatureGroupOfflineStoreConfigToTerraform(this._offlineStoreConfig.internalValue),
      online_store_config: sagemakerFeatureGroupOnlineStoreConfigToTerraform(this._onlineStoreConfig.internalValue),
      throughput_config: sagemakerFeatureGroupThroughputConfigToTerraform(this._throughputConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_time_feature_name: {
        value: cdktf.stringToHclTerraform(this._eventTimeFeatureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_group_name: {
        value: cdktf.stringToHclTerraform(this._featureGroupName),
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
      record_identifier_feature_name: {
        value: cdktf.stringToHclTerraform(this._recordIdentifierFeatureName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
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
      feature_definition: {
        value: cdktf.listMapperHcl(sagemakerFeatureGroupFeatureDefinitionToHclTerraform, true)(this._featureDefinition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerFeatureGroupFeatureDefinitionList",
      },
      offline_store_config: {
        value: sagemakerFeatureGroupOfflineStoreConfigToHclTerraform(this._offlineStoreConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerFeatureGroupOfflineStoreConfigList",
      },
      online_store_config: {
        value: sagemakerFeatureGroupOnlineStoreConfigToHclTerraform(this._onlineStoreConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerFeatureGroupOnlineStoreConfigList",
      },
      throughput_config: {
        value: sagemakerFeatureGroupThroughputConfigToHclTerraform(this._throughputConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerFeatureGroupThroughputConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
