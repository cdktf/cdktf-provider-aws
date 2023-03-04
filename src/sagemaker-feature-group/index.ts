// https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#description SagemakerFeatureGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#event_time_feature_name SagemakerFeatureGroup#event_time_feature_name}
  */
  readonly eventTimeFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_group_name SagemakerFeatureGroup#feature_group_name}
  */
  readonly featureGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#id SagemakerFeatureGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#record_identifier_feature_name SagemakerFeatureGroup#record_identifier_feature_name}
  */
  readonly recordIdentifierFeatureName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#role_arn SagemakerFeatureGroup#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#tags SagemakerFeatureGroup#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#tags_all SagemakerFeatureGroup#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * feature_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_definition SagemakerFeatureGroup#feature_definition}
  */
  readonly featureDefinition: SagemakerFeatureGroupFeatureDefinition[] | cdktf.IResolvable;
  /**
  * offline_store_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#offline_store_config SagemakerFeatureGroup#offline_store_config}
  */
  readonly offlineStoreConfig?: SagemakerFeatureGroupOfflineStoreConfig;
  /**
  * online_store_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#online_store_config SagemakerFeatureGroup#online_store_config}
  */
  readonly onlineStoreConfig?: SagemakerFeatureGroupOnlineStoreConfig;
}
export interface SagemakerFeatureGroupFeatureDefinition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_name SagemakerFeatureGroup#feature_name}
  */
  readonly featureName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#feature_type SagemakerFeatureGroup#feature_type}
  */
  readonly featureType?: string;
}

export function sagemakerFeatureGroupFeatureDefinitionToTerraform(struct?: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_name: cdktf.stringToTerraform(struct!.featureName),
    feature_type: cdktf.stringToTerraform(struct!.featureType),
  }
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
    if (this._featureName !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureName = this._featureName;
    }
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupFeatureDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureName = undefined;
      this._featureType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureName = value.featureName;
      this._featureType = value.featureType;
    }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#catalog SagemakerFeatureGroup#catalog}
  */
  readonly catalog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#database SagemakerFeatureGroup#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#table_name SagemakerFeatureGroup#table_name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#s3_uri SagemakerFeatureGroup#s3_uri}
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
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
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
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#disable_glue_table_creation SagemakerFeatureGroup#disable_glue_table_creation}
  */
  readonly disableGlueTableCreation?: boolean | cdktf.IResolvable;
  /**
  * data_catalog_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#data_catalog_config SagemakerFeatureGroup#data_catalog_config}
  */
  readonly dataCatalogConfig?: SagemakerFeatureGroupOfflineStoreConfigDataCatalogConfig;
  /**
  * s3_storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#s3_storage_config SagemakerFeatureGroup#s3_storage_config}
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
    data_catalog_config: sagemakerFeatureGroupOfflineStoreConfigDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
    s3_storage_config: sagemakerFeatureGroupOfflineStoreConfigS3StorageConfigToTerraform(struct!.s3StorageConfig),
  }
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
      this._dataCatalogConfig.internalValue = undefined;
      this._s3StorageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableGlueTableCreation = value.disableGlueTableCreation;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#kms_key_id SagemakerFeatureGroup#kms_key_id}
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
export interface SagemakerFeatureGroupOnlineStoreConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#enable_online_store SagemakerFeatureGroup#enable_online_store}
  */
  readonly enableOnlineStore?: boolean | cdktf.IResolvable;
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group#security_config SagemakerFeatureGroup#security_config}
  */
  readonly securityConfig?: SagemakerFeatureGroupOnlineStoreConfigSecurityConfig;
}

export function sagemakerFeatureGroupOnlineStoreConfigToTerraform(struct?: SagemakerFeatureGroupOnlineStoreConfigOutputReference | SagemakerFeatureGroupOnlineStoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_online_store: cdktf.booleanToTerraform(struct!.enableOnlineStore),
    security_config: sagemakerFeatureGroupOnlineStoreConfigSecurityConfigToTerraform(struct!.securityConfig),
  }
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
    if (this._securityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityConfig = this._securityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerFeatureGroupOnlineStoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOnlineStore = undefined;
      this._securityConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOnlineStore = value.enableOnlineStore;
      this._securityConfig.internalValue = value.securityConfig;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group aws_sagemaker_feature_group}
*/
export class SagemakerFeatureGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_feature_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_feature_group aws_sagemaker_feature_group} Resource
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
    };
  }
}
