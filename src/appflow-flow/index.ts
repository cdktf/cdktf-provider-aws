// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#description AppflowFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#id AppflowFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#kms_arn AppflowFlow#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#name AppflowFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#tags AppflowFlow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#tags_all AppflowFlow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * destination_flow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#destination_flow_config AppflowFlow#destination_flow_config}
  */
  readonly destinationFlowConfig: AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable;
  /**
  * metadata_catalog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#metadata_catalog_config AppflowFlow#metadata_catalog_config}
  */
  readonly metadataCatalogConfig?: AppflowFlowMetadataCatalogConfig;
  /**
  * source_flow_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#source_flow_config AppflowFlow#source_flow_config}
  */
  readonly sourceFlowConfig: AppflowFlowSourceFlowConfig;
  /**
  * task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#task AppflowFlow#task}
  */
  readonly task: AppflowFlowTask[] | cdktf.IResolvable;
  /**
  * trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#trigger_config AppflowFlow#trigger_config}
  */
  readonly triggerConfig: AppflowFlowTriggerConfig;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#custom_properties AppflowFlow#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#entity_name AppflowFlow#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customProperties),
    entity_name: cdktf.stringToTerraform(struct!.entityName),
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idFieldNames),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    entity_name: {
      value: cdktf.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    write_operation_type: {
      value: cdktf.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProperties = undefined;
      this._entityName = undefined;
      this._idFieldNames = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProperties = value.customProperties;
      this._entityName = value.entityName;
      this._idFieldNames = value.idFieldNames;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#domain_name AppflowFlow#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object_type_name AppflowFlow#object_type_name}
  */
  readonly objectTypeName?: string;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    object_type_name: cdktf.stringToTerraform(struct!.objectTypeName),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type_name: {
      value: cdktf.stringToHclTerraform(struct!.objectTypeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._objectTypeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTypeName = this._objectTypeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._objectTypeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._objectTypeName = value.objectTypeName;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // object_type_name - computed: false, optional: true, required: false
  private _objectTypeName?: string; 
  public get objectTypeName() {
    return this.getStringAttribute('object_type_name');
  }
  public set objectTypeName(value: string) {
    this._objectTypeName = value;
  }
  public resetObjectTypeName() {
    this._objectTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeNameInput() {
    return this._objectTypeName;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics {
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    intermediate_bucket_name: cdktf.stringToTerraform(struct!.intermediateBucketName),
    object: cdktf.stringToTerraform(struct!.object),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intermediate_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.intermediateBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._intermediateBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateBucketName = this._intermediateBucketName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketPrefix = undefined;
      this._intermediateBucketName = undefined;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketPrefix = value.bucketPrefix;
      this._intermediateBucketName = value.intermediateBucketName;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // intermediate_bucket_name - computed: false, optional: false, required: true
  private _intermediateBucketName?: string; 
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }
  public set intermediateBucketName(value: string) {
    this._intermediateBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateBucketNameInput() {
    return this._intermediateBucketName;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#aggregation_type AppflowFlow#aggregation_type}
  */
  readonly aggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#target_file_size AppflowFlow#target_file_size}
  */
  readonly targetFileSize?: number;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    target_file_size: cdktf.numberToTerraform(struct!.targetFileSize),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_file_size: {
      value: cdktf.numberToHclTerraform(struct!.targetFileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._targetFileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetFileSize = this._targetFileSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._targetFileSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._targetFileSize = value.targetFileSize;
    }
  }

  // aggregation_type - computed: true, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // target_file_size - computed: true, optional: true, required: false
  private _targetFileSize?: number; 
  public get targetFileSize() {
    return this.getNumberAttribute('target_file_size');
  }
  public set targetFileSize(value: number) {
    this._targetFileSize = value;
  }
  public resetTargetFileSize() {
    this._targetFileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetFileSizeInput() {
    return this._targetFileSize;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_format AppflowFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_hierarchy AppflowFlow#prefix_hierarchy}
  */
  readonly prefixHierarchy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_type AppflowFlow#prefix_type}
  */
  readonly prefixType?: string;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_format: cdktf.stringToTerraform(struct!.prefixFormat),
    prefix_hierarchy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixHierarchy),
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_format: {
      value: cdktf.stringToHclTerraform(struct!.prefixFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_hierarchy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixHierarchy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_type: {
      value: cdktf.stringToHclTerraform(struct!.prefixType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFormat = this._prefixFormat;
    }
    if (this._prefixHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHierarchy = this._prefixHierarchy;
    }
    if (this._prefixType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixType = this._prefixType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixFormat = undefined;
      this._prefixHierarchy = undefined;
      this._prefixType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixFormat = value.prefixFormat;
      this._prefixHierarchy = value.prefixHierarchy;
      this._prefixType = value.prefixType;
    }
  }

  // prefix_format - computed: false, optional: true, required: false
  private _prefixFormat?: string; 
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }
  public set prefixFormat(value: string) {
    this._prefixFormat = value;
  }
  public resetPrefixFormat() {
    this._prefixFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFormatInput() {
    return this._prefixFormat;
  }

  // prefix_hierarchy - computed: true, optional: true, required: false
  private _prefixHierarchy?: string[]; 
  public get prefixHierarchy() {
    return this.getListAttribute('prefix_hierarchy');
  }
  public set prefixHierarchy(value: string[]) {
    this._prefixHierarchy = value;
  }
  public resetPrefixHierarchy() {
    this._prefixHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHierarchyInput() {
    return this._prefixHierarchy;
  }

  // prefix_type - computed: false, optional: true, required: false
  private _prefixType?: string; 
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
  public set prefixType(value: string) {
    this._prefixType = value;
  }
  public resetPrefixType() {
    this._prefixType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixTypeInput() {
    return this._prefixType;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#file_type AppflowFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#preserve_source_data_typing AppflowFlow#preserve_source_data_typing}
  */
  readonly preserveSourceDataTyping?: boolean | cdktf.IResolvable;
  /**
  * aggregation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#aggregation_config AppflowFlow#aggregation_config}
  */
  readonly aggregationConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
  /**
  * prefix_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_config AppflowFlow#prefix_config}
  */
  readonly prefixConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_type: cdktf.stringToTerraform(struct!.fileType),
    preserve_source_data_typing: cdktf.booleanToTerraform(struct!.preserveSourceDataTyping),
    aggregation_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    prefix_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve_source_data_typing: {
      value: cdktf.booleanToHclTerraform(struct!.preserveSourceDataTyping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToHclTerraform(struct!.aggregationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigList",
    },
    prefix_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToHclTerraform(struct!.prefixConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._preserveSourceDataTyping !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveSourceDataTyping = this._preserveSourceDataTyping;
    }
    if (this._aggregationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationConfig = this._aggregationConfig?.internalValue;
    }
    if (this._prefixConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixConfig = this._prefixConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileType = undefined;
      this._preserveSourceDataTyping = undefined;
      this._aggregationConfig.internalValue = undefined;
      this._prefixConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileType = value.fileType;
      this._preserveSourceDataTyping = value.preserveSourceDataTyping;
      this._aggregationConfig.internalValue = value.aggregationConfig;
      this._prefixConfig.internalValue = value.prefixConfig;
    }
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // preserve_source_data_typing - computed: true, optional: true, required: false
  private _preserveSourceDataTyping?: boolean | cdktf.IResolvable; 
  public get preserveSourceDataTyping() {
    return this.getBooleanAttribute('preserve_source_data_typing');
  }
  public set preserveSourceDataTyping(value: boolean | cdktf.IResolvable) {
    this._preserveSourceDataTyping = value;
  }
  public resetPreserveSourceDataTyping() {
    this._preserveSourceDataTyping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveSourceDataTypingInput() {
    return this._preserveSourceDataTyping;
  }

  // aggregation_config - computed: false, optional: true, required: false
  private _aggregationConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference(this, "aggregation_config");
  public get aggregationConfig() {
    return this._aggregationConfig;
  }
  public putAggregationConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig) {
    this._aggregationConfig.internalValue = value;
  }
  public resetAggregationConfig() {
    this._aggregationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationConfigInput() {
    return this._aggregationConfig.internalValue;
  }

  // prefix_config - computed: false, optional: true, required: false
  private _prefixConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigOutputReference(this, "prefix_config");
  public get prefixConfig() {
    return this._prefixConfig;
  }
  public putPrefixConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig) {
    this._prefixConfig.internalValue = value;
  }
  public resetPrefixConfig() {
    this._prefixConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixConfigInput() {
    return this._prefixConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_output_format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3_output_format_config AppflowFlow#s3_output_format_config}
  */
  readonly s3OutputFormatConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3ToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigToTerraform(struct!.s3OutputFormatConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3ToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_format_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigToHclTerraform(struct!.s3OutputFormatConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._s3OutputFormatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputFormatConfig = this._s3OutputFormatConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._s3OutputFormatConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._s3OutputFormatConfig.internalValue = value.s3OutputFormatConfig;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: true, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // s3_output_format_config - computed: false, optional: true, required: false
  private _s3OutputFormatConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigOutputReference(this, "s3_output_format_config");
  public get s3OutputFormatConfig() {
    return this._s3OutputFormatConfig;
  }
  public putS3OutputFormatConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfig) {
    this._s3OutputFormatConfig.internalValue = value;
  }
  public resetS3OutputFormatConfig() {
    this._s3OutputFormatConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputFormatConfigInput() {
    return this._s3OutputFormatConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#data_transfer_api AppflowFlow#data_transfer_api}
  */
  readonly dataTransferApi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_transfer_api: cdktf.stringToTerraform(struct!.dataTransferApi),
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_transfer_api: {
      value: cdktf.stringToHclTerraform(struct!.dataTransferApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operation_type: {
      value: cdktf.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransferApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferApi = this._dataTransferApi;
    }
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTransferApi = undefined;
      this._idFieldNames = undefined;
      this._object = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTransferApi = value.dataTransferApi;
      this._idFieldNames = value.idFieldNames;
      this._object = value.object;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // data_transfer_api - computed: false, optional: true, required: false
  private _dataTransferApi?: string; 
  public get dataTransferApi() {
    return this.getStringAttribute('data_transfer_api');
  }
  public set dataTransferApi(value: string) {
    this._dataTransferApi = value;
  }
  public resetDataTransferApi() {
    this._dataTransferApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferApiInput() {
    return this._dataTransferApi;
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object_path AppflowFlow#object_path}
  */
  readonly objectPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig;
  /**
  * success_response_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#success_response_handling_config AppflowFlow#success_response_handling_config}
  */
  readonly successResponseHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idFieldNames),
    object_path: cdktf.stringToTerraform(struct!.objectPath),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
    success_response_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToTerraform(struct!.successResponseHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object_path: {
      value: cdktf.stringToHclTerraform(struct!.objectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operation_type: {
      value: cdktf.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigList",
    },
    success_response_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigToHclTerraform(struct!.successResponseHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._objectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPath = this._objectPath;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    if (this._successResponseHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successResponseHandlingConfig = this._successResponseHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idFieldNames = undefined;
      this._objectPath = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
      this._successResponseHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idFieldNames = value.idFieldNames;
      this._objectPath = value.objectPath;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
      this._successResponseHandlingConfig.internalValue = value.successResponseHandlingConfig;
    }
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // object_path - computed: false, optional: false, required: true
  private _objectPath?: string; 
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }
  public set objectPath(value: string) {
    this._objectPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPathInput() {
    return this._objectPath;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }

  // success_response_handling_config - computed: false, optional: true, required: false
  private _successResponseHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfigOutputReference(this, "success_response_handling_config");
  public get successResponseHandlingConfig() {
    return this._successResponseHandlingConfig;
  }
  public putSuccessResponseHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataSuccessResponseHandlingConfig) {
    this._successResponseHandlingConfig.internalValue = value;
  }
  public resetSuccessResponseHandlingConfig() {
    this._successResponseHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successResponseHandlingConfigInput() {
    return this._successResponseHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    intermediate_bucket_name: cdktf.stringToTerraform(struct!.intermediateBucketName),
    object: cdktf.stringToTerraform(struct!.object),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intermediate_bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.intermediateBucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._intermediateBucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateBucketName = this._intermediateBucketName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketPrefix = undefined;
      this._intermediateBucketName = undefined;
      this._object = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketPrefix = value.bucketPrefix;
      this._intermediateBucketName = value.intermediateBucketName;
      this._object = value.object;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // intermediate_bucket_name - computed: false, optional: false, required: true
  private _intermediateBucketName?: string; 
  public get intermediateBucketName() {
    return this.getStringAttribute('intermediate_bucket_name');
  }
  public set intermediateBucketName(value: string) {
    this._intermediateBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateBucketNameInput() {
    return this._intermediateBucketName;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#aggregation_type AppflowFlow#aggregation_type}
  */
  readonly aggregationType?: string;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
    }
  }

  // aggregation_type - computed: false, optional: true, required: false
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  public resetAggregationType() {
    this._aggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_format AppflowFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_hierarchy AppflowFlow#prefix_hierarchy}
  */
  readonly prefixHierarchy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_type AppflowFlow#prefix_type}
  */
  readonly prefixType: string;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_format: cdktf.stringToTerraform(struct!.prefixFormat),
    prefix_hierarchy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixHierarchy),
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_format: {
      value: cdktf.stringToHclTerraform(struct!.prefixFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_hierarchy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixHierarchy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix_type: {
      value: cdktf.stringToHclTerraform(struct!.prefixType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixFormat = this._prefixFormat;
    }
    if (this._prefixHierarchy !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixHierarchy = this._prefixHierarchy;
    }
    if (this._prefixType !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixType = this._prefixType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixFormat = undefined;
      this._prefixHierarchy = undefined;
      this._prefixType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixFormat = value.prefixFormat;
      this._prefixHierarchy = value.prefixHierarchy;
      this._prefixType = value.prefixType;
    }
  }

  // prefix_format - computed: false, optional: true, required: false
  private _prefixFormat?: string; 
  public get prefixFormat() {
    return this.getStringAttribute('prefix_format');
  }
  public set prefixFormat(value: string) {
    this._prefixFormat = value;
  }
  public resetPrefixFormat() {
    this._prefixFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixFormatInput() {
    return this._prefixFormat;
  }

  // prefix_hierarchy - computed: true, optional: true, required: false
  private _prefixHierarchy?: string[]; 
  public get prefixHierarchy() {
    return this.getListAttribute('prefix_hierarchy');
  }
  public set prefixHierarchy(value: string[]) {
    this._prefixHierarchy = value;
  }
  public resetPrefixHierarchy() {
    this._prefixHierarchy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixHierarchyInput() {
    return this._prefixHierarchy;
  }

  // prefix_type - computed: false, optional: false, required: true
  private _prefixType?: string; 
  public get prefixType() {
    return this.getStringAttribute('prefix_type');
  }
  public set prefixType(value: string) {
    this._prefixType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixTypeInput() {
    return this._prefixType;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#file_type AppflowFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * aggregation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#aggregation_config AppflowFlow#aggregation_config}
  */
  readonly aggregationConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
  /**
  * prefix_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#prefix_config AppflowFlow#prefix_config}
  */
  readonly prefixConfig: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_type: cdktf.stringToTerraform(struct!.fileType),
    aggregation_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    prefix_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aggregation_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigToHclTerraform(struct!.aggregationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigList",
    },
    prefix_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigToHclTerraform(struct!.prefixConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._aggregationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationConfig = this._aggregationConfig?.internalValue;
    }
    if (this._prefixConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixConfig = this._prefixConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileType = undefined;
      this._aggregationConfig.internalValue = undefined;
      this._prefixConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileType = value.fileType;
      this._aggregationConfig.internalValue = value.aggregationConfig;
      this._prefixConfig.internalValue = value.prefixConfig;
    }
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // aggregation_config - computed: false, optional: true, required: false
  private _aggregationConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfigOutputReference(this, "aggregation_config");
  public get aggregationConfig() {
    return this._aggregationConfig;
  }
  public putAggregationConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig) {
    this._aggregationConfig.internalValue = value;
  }
  public resetAggregationConfig() {
    this._aggregationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationConfigInput() {
    return this._aggregationConfig.internalValue;
  }

  // prefix_config - computed: false, optional: false, required: true
  private _prefixConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfigOutputReference(this, "prefix_config");
  public get prefixConfig() {
    return this._prefixConfig;
  }
  public putPrefixConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigPrefixConfig) {
    this._prefixConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixConfigInput() {
    return this._prefixConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_output_format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3_output_format_config AppflowFlow#s3_output_format_config}
  */
  readonly s3OutputFormatConfig: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_output_format_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToTerraform(struct!.s3OutputFormatConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_output_format_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigToHclTerraform(struct!.s3OutputFormatConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._s3OutputFormatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputFormatConfig = this._s3OutputFormatConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._s3OutputFormatConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._s3OutputFormatConfig.internalValue = value.s3OutputFormatConfig;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // s3_output_format_config - computed: false, optional: false, required: true
  private _s3OutputFormatConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigOutputReference(this, "s3_output_format_config");
  public get s3OutputFormatConfig() {
    return this._s3OutputFormatConfig;
  }
  public putS3OutputFormatConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfig) {
    this._s3OutputFormatConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputFormatConfigInput() {
    return this._s3OutputFormatConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
  */
  readonly failOnFirstDestinationError?: boolean | cdktf.IResolvable;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    fail_on_first_destination_error: cdktf.booleanToTerraform(struct!.failOnFirstDestinationError),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_on_first_destination_error: {
      value: cdktf.booleanToHclTerraform(struct!.failOnFirstDestinationError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._failOnFirstDestinationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.failOnFirstDestinationError = this._failOnFirstDestinationError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._failOnFirstDestinationError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._failOnFirstDestinationError = value.failOnFirstDestinationError;
    }
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: true, required: false
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  public resetBucketPrefix() {
    this._bucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // fail_on_first_destination_error - computed: false, optional: true, required: false
  private _failOnFirstDestinationError?: boolean | cdktf.IResolvable; 
  public get failOnFirstDestinationError() {
    return this.getBooleanAttribute('fail_on_first_destination_error');
  }
  public set failOnFirstDestinationError(value: boolean | cdktf.IResolvable) {
    this._failOnFirstDestinationError = value;
  }
  public resetFailOnFirstDestinationError() {
    this._failOnFirstDestinationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOnFirstDestinationErrorInput() {
    return this._failOnFirstDestinationError;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id_field_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.idFieldNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    write_operation_type: {
      value: cdktf.stringToHclTerraform(struct!.writeOperationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_handling_config: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigToHclTerraform(struct!.errorHandlingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idFieldNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.idFieldNames = this._idFieldNames;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._writeOperationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeOperationType = this._writeOperationType;
    }
    if (this._errorHandlingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHandlingConfig = this._errorHandlingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idFieldNames = undefined;
      this._object = undefined;
      this._writeOperationType = undefined;
      this._errorHandlingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idFieldNames = value.idFieldNames;
      this._object = value.object;
      this._writeOperationType = value.writeOperationType;
      this._errorHandlingConfig.internalValue = value.errorHandlingConfig;
    }
  }

  // id_field_names - computed: false, optional: true, required: false
  private _idFieldNames?: string[]; 
  public get idFieldNames() {
    return this.getListAttribute('id_field_names');
  }
  public set idFieldNames(value: string[]) {
    this._idFieldNames = value;
  }
  public resetIdFieldNames() {
    this._idFieldNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idFieldNamesInput() {
    return this._idFieldNames;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // write_operation_type - computed: false, optional: true, required: false
  private _writeOperationType?: string; 
  public get writeOperationType() {
    return this.getStringAttribute('write_operation_type');
  }
  public set writeOperationType(value: string) {
    this._writeOperationType = value;
  }
  public resetWriteOperationType() {
    this._writeOperationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeOperationTypeInput() {
    return this._writeOperationType;
  }

  // error_handling_config - computed: false, optional: true, required: false
  private _errorHandlingConfig = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfigOutputReference(this, "error_handling_config");
  public get errorHandlingConfig() {
    return this._errorHandlingConfig;
  }
  public putErrorHandlingConfig(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskErrorHandlingConfig) {
    this._errorHandlingConfig.internalValue = value;
  }
  public resetErrorHandlingConfig() {
    this._errorHandlingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHandlingConfigInput() {
    return this._errorHandlingConfig.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorProperties {
  /**
  * custom_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#custom_connector AppflowFlow#custom_connector}
  */
  readonly customConnector?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector;
  /**
  * customer_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#customer_profiles AppflowFlow#customer_profiles}
  */
  readonly customerProfiles?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles;
  /**
  * event_bridge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#event_bridge AppflowFlow#event_bridge}
  */
  readonly eventBridge?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge;
  /**
  * honeycode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#honeycode AppflowFlow#honeycode}
  */
  readonly honeycode?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode;
  /**
  * lookout_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#lookout_metrics AppflowFlow#lookout_metrics}
  */
  readonly lookoutMetrics?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics;
  /**
  * marketo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#marketo AppflowFlow#marketo}
  */
  readonly marketo?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#redshift AppflowFlow#redshift}
  */
  readonly redshift?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3 AppflowFlow#s3}
  */
  readonly s3?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce;
  /**
  * sapo_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#sapo_data AppflowFlow#sapo_data}
  */
  readonly sapoData?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData;
  /**
  * snowflake block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#snowflake AppflowFlow#snowflake}
  */
  readonly snowflake?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake;
  /**
  * upsolver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#upsolver AppflowFlow#upsolver}
  */
  readonly upsolver?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#zendesk AppflowFlow#zendesk}
  */
  readonly zendesk?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_connector: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorToTerraform(struct!.customConnector),
    customer_profiles: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesToTerraform(struct!.customerProfiles),
    event_bridge: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeToTerraform(struct!.eventBridge),
    honeycode: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeToTerraform(struct!.honeycode),
    lookout_metrics: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsToTerraform(struct!.lookoutMetrics),
    marketo: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoToTerraform(struct!.marketo),
    redshift: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftToTerraform(struct!.redshift),
    s3: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    sapo_data: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataToTerraform(struct!.sapoData),
    snowflake: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeToTerraform(struct!.snowflake),
    upsolver: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverToTerraform(struct!.upsolver),
    zendesk: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}


export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesToHclTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_connector: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorList",
    },
    customer_profiles: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesToHclTerraform(struct!.customerProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesList",
    },
    event_bridge: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeToHclTerraform(struct!.eventBridge),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeList",
    },
    honeycode: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeToHclTerraform(struct!.honeycode),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeList",
    },
    lookout_metrics: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsToHclTerraform(struct!.lookoutMetrics),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsList",
    },
    marketo: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoList",
    },
    redshift: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftToHclTerraform(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftList",
    },
    s3: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3List",
    },
    salesforce: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceList",
    },
    sapo_data: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataList",
    },
    snowflake: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeToHclTerraform(struct!.snowflake),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeList",
    },
    upsolver: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverToHclTerraform(struct!.upsolver),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverList",
    },
    zendesk: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowDestinationFlowConfigDestinationConnectorProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._customerProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerProfiles = this._customerProfiles?.internalValue;
    }
    if (this._eventBridge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridge = this._eventBridge?.internalValue;
    }
    if (this._honeycode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycode = this._honeycode?.internalValue;
    }
    if (this._lookoutMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookoutMetrics = this._lookoutMetrics?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._snowflake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflake = this._snowflake?.internalValue;
    }
    if (this._upsolver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsolver = this._upsolver?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customConnector.internalValue = undefined;
      this._customerProfiles.internalValue = undefined;
      this._eventBridge.internalValue = undefined;
      this._honeycode.internalValue = undefined;
      this._lookoutMetrics.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._snowflake.internalValue = undefined;
      this._upsolver.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customConnector.internalValue = value.customConnector;
      this._customerProfiles.internalValue = value.customerProfiles;
      this._eventBridge.internalValue = value.eventBridge;
      this._honeycode.internalValue = value.honeycode;
      this._lookoutMetrics.internalValue = value.lookoutMetrics;
      this._marketo.internalValue = value.marketo;
      this._redshift.internalValue = value.redshift;
      this._s3.internalValue = value.s3;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._snowflake.internalValue = value.snowflake;
      this._upsolver.internalValue = value.upsolver;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // customer_profiles - computed: false, optional: true, required: false
  private _customerProfiles = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfilesOutputReference(this, "customer_profiles");
  public get customerProfiles() {
    return this._customerProfiles;
  }
  public putCustomerProfiles(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles) {
    this._customerProfiles.internalValue = value;
  }
  public resetCustomerProfiles() {
    this._customerProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerProfilesInput() {
    return this._customerProfiles.internalValue;
  }

  // event_bridge - computed: false, optional: true, required: false
  private _eventBridge = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridgeOutputReference(this, "event_bridge");
  public get eventBridge() {
    return this._eventBridge;
  }
  public putEventBridge(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge) {
    this._eventBridge.internalValue = value;
  }
  public resetEventBridge() {
    this._eventBridge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeInput() {
    return this._eventBridge.internalValue;
  }

  // honeycode - computed: false, optional: true, required: false
  private _honeycode = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycodeOutputReference(this, "honeycode");
  public get honeycode() {
    return this._honeycode;
  }
  public putHoneycode(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode) {
    this._honeycode.internalValue = value;
  }
  public resetHoneycode() {
    this._honeycode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycodeInput() {
    return this._honeycode.internalValue;
  }

  // lookout_metrics - computed: false, optional: true, required: false
  private _lookoutMetrics = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetricsOutputReference(this, "lookout_metrics");
  public get lookoutMetrics() {
    return this._lookoutMetrics;
  }
  public putLookoutMetrics(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics) {
    this._lookoutMetrics.internalValue = value;
  }
  public resetLookoutMetrics() {
    this._lookoutMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookoutMetricsInput() {
    return this._lookoutMetrics.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // snowflake - computed: false, optional: true, required: false
  private _snowflake = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }
  public putSnowflake(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake) {
    this._snowflake.internalValue = value;
  }
  public resetSnowflake() {
    this._snowflake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeInput() {
    return this._snowflake.internalValue;
  }

  // upsolver - computed: false, optional: true, required: false
  private _upsolver = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverOutputReference(this, "upsolver");
  public get upsolver() {
    return this._upsolver;
  }
  public putUpsolver(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver) {
    this._upsolver.internalValue = value;
  }
  public resetUpsolver() {
    this._upsolver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsolverInput() {
    return this._upsolver.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface AppflowFlowDestinationFlowConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#api_version AppflowFlow#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#connector_profile_name AppflowFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#connector_type AppflowFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * destination_connector_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#destination_connector_properties AppflowFlow#destination_connector_properties}
  */
  readonly destinationConnectorProperties: AppflowFlowDestinationFlowConfigDestinationConnectorProperties;
}

export function appflowFlowDestinationFlowConfigToTerraform(struct?: AppflowFlowDestinationFlowConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    destination_connector_properties: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesToTerraform(struct!.destinationConnectorProperties),
  }
}


export function appflowFlowDestinationFlowConfigToHclTerraform(struct?: AppflowFlowDestinationFlowConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.connectorProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_connector_properties: {
      value: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesToHclTerraform(struct!.destinationConnectorProperties),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowDestinationFlowConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppflowFlowDestinationFlowConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._connectorProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileName = this._connectorProfileName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._destinationConnectorProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectorProperties = this._destinationConnectorProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._connectorProfileName = undefined;
      this._connectorType = undefined;
      this._destinationConnectorProperties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._connectorProfileName = value.connectorProfileName;
      this._connectorType = value.connectorType;
      this._destinationConnectorProperties.internalValue = value.destinationConnectorProperties;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // connector_profile_name - computed: false, optional: true, required: false
  private _connectorProfileName?: string; 
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  public resetConnectorProfileName() {
    this._connectorProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // destination_connector_properties - computed: false, optional: false, required: true
  private _destinationConnectorProperties = new AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesOutputReference(this, "destination_connector_properties");
  public get destinationConnectorProperties() {
    return this._destinationConnectorProperties;
  }
  public putDestinationConnectorProperties(value: AppflowFlowDestinationFlowConfigDestinationConnectorProperties) {
    this._destinationConnectorProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectorPropertiesInput() {
    return this._destinationConnectorProperties.internalValue;
  }
}

export class AppflowFlowDestinationFlowConfigList extends cdktf.ComplexList {
  public internalValue? : AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable

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
  public get(index: number): AppflowFlowDestinationFlowConfigOutputReference {
    return new AppflowFlowDestinationFlowConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppflowFlowMetadataCatalogConfigGlueDataCatalog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#database_name AppflowFlow#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#role_arn AppflowFlow#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#table_prefix AppflowFlow#table_prefix}
  */
  readonly tablePrefix: string;
}

export function appflowFlowMetadataCatalogConfigGlueDataCatalogToTerraform(struct?: AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference | AppflowFlowMetadataCatalogConfigGlueDataCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    table_prefix: cdktf.stringToTerraform(struct!.tablePrefix),
  }
}


export function appflowFlowMetadataCatalogConfigGlueDataCatalogToHclTerraform(struct?: AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference | AppflowFlowMetadataCatalogConfigGlueDataCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktf.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowMetadataCatalogConfigGlueDataCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._roleArn = undefined;
      this._tablePrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._roleArn = value.roleArn;
      this._tablePrefix = value.tablePrefix;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // table_prefix - computed: false, optional: false, required: true
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }
}
export interface AppflowFlowMetadataCatalogConfig {
  /**
  * glue_data_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#glue_data_catalog AppflowFlow#glue_data_catalog}
  */
  readonly glueDataCatalog?: AppflowFlowMetadataCatalogConfigGlueDataCatalog;
}

export function appflowFlowMetadataCatalogConfigToTerraform(struct?: AppflowFlowMetadataCatalogConfigOutputReference | AppflowFlowMetadataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    glue_data_catalog: appflowFlowMetadataCatalogConfigGlueDataCatalogToTerraform(struct!.glueDataCatalog),
  }
}


export function appflowFlowMetadataCatalogConfigToHclTerraform(struct?: AppflowFlowMetadataCatalogConfigOutputReference | AppflowFlowMetadataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    glue_data_catalog: {
      value: appflowFlowMetadataCatalogConfigGlueDataCatalogToHclTerraform(struct!.glueDataCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowMetadataCatalogConfigGlueDataCatalogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowMetadataCatalogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowMetadataCatalogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._glueDataCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueDataCatalog = this._glueDataCatalog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowMetadataCatalogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._glueDataCatalog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._glueDataCatalog.internalValue = value.glueDataCatalog;
    }
  }

  // glue_data_catalog - computed: false, optional: true, required: false
  private _glueDataCatalog = new AppflowFlowMetadataCatalogConfigGlueDataCatalogOutputReference(this, "glue_data_catalog");
  public get glueDataCatalog() {
    return this._glueDataCatalog;
  }
  public putGlueDataCatalog(value: AppflowFlowMetadataCatalogConfigGlueDataCatalog) {
    this._glueDataCatalog.internalValue = value;
  }
  public resetGlueDataCatalog() {
    this._glueDataCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueDataCatalogInput() {
    return this._glueDataCatalog.internalValue;
  }
}
export interface AppflowFlowSourceFlowConfigIncrementalPullConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#datetime_type_field_name AppflowFlow#datetime_type_field_name}
  */
  readonly datetimeTypeFieldName?: string;
}

export function appflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct?: AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference | AppflowFlowSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datetime_type_field_name: cdktf.stringToTerraform(struct!.datetimeTypeFieldName),
  }
}


export function appflowFlowSourceFlowConfigIncrementalPullConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference | AppflowFlowSourceFlowConfigIncrementalPullConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datetime_type_field_name: {
      value: cdktf.stringToHclTerraform(struct!.datetimeTypeFieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigIncrementalPullConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datetimeTypeFieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datetimeTypeFieldName = this._datetimeTypeFieldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigIncrementalPullConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datetimeTypeFieldName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datetimeTypeFieldName = value.datetimeTypeFieldName;
    }
  }

  // datetime_type_field_name - computed: false, optional: true, required: false
  private _datetimeTypeFieldName?: string; 
  public get datetimeTypeFieldName() {
    return this.getStringAttribute('datetime_type_field_name');
  }
  public set datetimeTypeFieldName(value: string) {
    this._datetimeTypeFieldName = value;
  }
  public resetDatetimeTypeFieldName() {
    this._datetimeTypeFieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datetimeTypeFieldNameInput() {
    return this._datetimeTypeFieldName;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#custom_properties AppflowFlow#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#entity_name AppflowFlow#entity_name}
  */
  readonly entityName: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customProperties),
    entity_name: cdktf.stringToTerraform(struct!.entityName),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    entity_name: {
      value: cdktf.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProperties = this._customProperties;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customProperties = undefined;
      this._entityName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customProperties = value.customProperties;
      this._entityName = value.entityName;
    }
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3_input_file_type AppflowFlow#s3_input_file_type}
  */
  readonly s3InputFileType?: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_input_file_type: cdktf.stringToTerraform(struct!.s3InputFileType),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_input_file_type: {
      value: cdktf.stringToHclTerraform(struct!.s3InputFileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3InputFileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputFileType = this._s3InputFileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3InputFileType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3InputFileType = value.s3InputFileType;
    }
  }

  // s3_input_file_type - computed: false, optional: true, required: false
  private _s3InputFileType?: string; 
  public get s3InputFileType() {
    return this.getStringAttribute('s3_input_file_type');
  }
  public set s3InputFileType(value: string) {
    this._s3InputFileType = value;
  }
  public resetS3InputFileType() {
    this._s3InputFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputFileTypeInput() {
    return this._s3InputFileType;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix: string;
  /**
  * s3_input_format_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3_input_format_config AppflowFlow#s3_input_format_config}
  */
  readonly s3InputFormatConfig?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    bucket_prefix: cdktf.stringToTerraform(struct!.bucketPrefix),
    s3_input_format_config: appflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToTerraform(struct!.s3InputFormatConfig),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_prefix: {
      value: cdktf.stringToHclTerraform(struct!.bucketPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_input_format_config: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigToHclTerraform(struct!.s3InputFormatConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._bucketPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPrefix = this._bucketPrefix;
    }
    if (this._s3InputFormatConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3InputFormatConfig = this._s3InputFormatConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._bucketPrefix = undefined;
      this._s3InputFormatConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._bucketPrefix = value.bucketPrefix;
      this._s3InputFormatConfig.internalValue = value.s3InputFormatConfig;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // bucket_prefix - computed: false, optional: false, required: true
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // s3_input_format_config - computed: false, optional: true, required: false
  private _s3InputFormatConfig = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfigOutputReference(this, "s3_input_format_config");
  public get s3InputFormatConfig() {
    return this._s3InputFormatConfig;
  }
  public putS3InputFormatConfig(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3S3InputFormatConfig) {
    this._s3InputFormatConfig.internalValue = value;
  }
  public resetS3InputFormatConfig() {
    this._s3InputFormatConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3InputFormatConfigInput() {
    return this._s3InputFormatConfig.internalValue;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#data_transfer_api AppflowFlow#data_transfer_api}
  */
  readonly dataTransferApi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#enable_dynamic_field_update AppflowFlow#enable_dynamic_field_update}
  */
  readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#include_deleted_records AppflowFlow#include_deleted_records}
  */
  readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_transfer_api: cdktf.stringToTerraform(struct!.dataTransferApi),
    enable_dynamic_field_update: cdktf.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktf.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_transfer_api: {
      value: cdktf.stringToHclTerraform(struct!.dataTransferApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dynamic_field_update: {
      value: cdktf.booleanToHclTerraform(struct!.enableDynamicFieldUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_deleted_records: {
      value: cdktf.booleanToHclTerraform(struct!.includeDeletedRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataTransferApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTransferApi = this._dataTransferApi;
    }
    if (this._enableDynamicFieldUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDynamicFieldUpdate = this._enableDynamicFieldUpdate;
    }
    if (this._includeDeletedRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeDeletedRecords = this._includeDeletedRecords;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataTransferApi = undefined;
      this._enableDynamicFieldUpdate = undefined;
      this._includeDeletedRecords = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataTransferApi = value.dataTransferApi;
      this._enableDynamicFieldUpdate = value.enableDynamicFieldUpdate;
      this._includeDeletedRecords = value.includeDeletedRecords;
      this._object = value.object;
    }
  }

  // data_transfer_api - computed: false, optional: true, required: false
  private _dataTransferApi?: string; 
  public get dataTransferApi() {
    return this.getStringAttribute('data_transfer_api');
  }
  public set dataTransferApi(value: string) {
    this._dataTransferApi = value;
  }
  public resetDataTransferApi() {
    this._dataTransferApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTransferApiInput() {
    return this._dataTransferApi;
  }

  // enable_dynamic_field_update - computed: false, optional: true, required: false
  private _enableDynamicFieldUpdate?: boolean | cdktf.IResolvable; 
  public get enableDynamicFieldUpdate() {
    return this.getBooleanAttribute('enable_dynamic_field_update');
  }
  public set enableDynamicFieldUpdate(value: boolean | cdktf.IResolvable) {
    this._enableDynamicFieldUpdate = value;
  }
  public resetEnableDynamicFieldUpdate() {
    this._enableDynamicFieldUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicFieldUpdateInput() {
    return this._enableDynamicFieldUpdate;
  }

  // include_deleted_records - computed: false, optional: true, required: false
  private _includeDeletedRecords?: boolean | cdktf.IResolvable; 
  public get includeDeletedRecords() {
    return this.getBooleanAttribute('include_deleted_records');
  }
  public set includeDeletedRecords(value: boolean | cdktf.IResolvable) {
    this._includeDeletedRecords = value;
  }
  public resetIncludeDeletedRecords() {
    this._includeDeletedRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedRecordsInput() {
    return this._includeDeletedRecords;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#max_page_size AppflowFlow#max_page_size}
  */
  readonly maxPageSize: number;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_page_size: cdktf.numberToTerraform(struct!.maxPageSize),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_page_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPageSize = this._maxPageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPageSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPageSize = value.maxPageSize;
    }
  }

  // max_page_size - computed: false, optional: false, required: true
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#max_page_size AppflowFlow#max_page_size}
  */
  readonly maxPageSize: number;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_page_size: cdktf.numberToTerraform(struct!.maxPageSize),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_page_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPageSize = this._maxPageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPageSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPageSize = value.maxPageSize;
    }
  }

  // max_page_size - computed: false, optional: false, required: true
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object_path AppflowFlow#object_path}
  */
  readonly objectPath: string;
  /**
  * pagination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#pagination_config AppflowFlow#pagination_config}
  */
  readonly paginationConfig?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig;
  /**
  * parallelism_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#parallelism_config AppflowFlow#parallelism_config}
  */
  readonly parallelismConfig?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_path: cdktf.stringToTerraform(struct!.objectPath),
    pagination_config: appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToTerraform(struct!.paginationConfig),
    parallelism_config: appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToTerraform(struct!.parallelismConfig),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_path: {
      value: cdktf.stringToHclTerraform(struct!.objectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pagination_config: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigToHclTerraform(struct!.paginationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigList",
    },
    parallelism_config: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigToHclTerraform(struct!.parallelismConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectPath = this._objectPath;
    }
    if (this._paginationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paginationConfig = this._paginationConfig?.internalValue;
    }
    if (this._parallelismConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelismConfig = this._parallelismConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectPath = undefined;
      this._paginationConfig.internalValue = undefined;
      this._parallelismConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectPath = value.objectPath;
      this._paginationConfig.internalValue = value.paginationConfig;
      this._parallelismConfig.internalValue = value.parallelismConfig;
    }
  }

  // object_path - computed: false, optional: false, required: true
  private _objectPath?: string; 
  public get objectPath() {
    return this.getStringAttribute('object_path');
  }
  public set objectPath(value: string) {
    this._objectPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPathInput() {
    return this._objectPath;
  }

  // pagination_config - computed: false, optional: true, required: false
  private _paginationConfig = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfigOutputReference(this, "pagination_config");
  public get paginationConfig() {
    return this._paginationConfig;
  }
  public putPaginationConfig(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataPaginationConfig) {
    this._paginationConfig.internalValue = value;
  }
  public resetPaginationConfig() {
    this._paginationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paginationConfigInput() {
    return this._paginationConfig.internalValue;
  }

  // parallelism_config - computed: false, optional: true, required: false
  private _parallelismConfig = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfigOutputReference(this, "parallelism_config");
  public get parallelismConfig() {
    return this._parallelismConfig;
  }
  public putParallelismConfig(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataParallelismConfig) {
    this._parallelismConfig.internalValue = value;
  }
  public resetParallelismConfig() {
    this._parallelismConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismConfigInput() {
    return this._parallelismConfig.internalValue;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#document_type AppflowFlow#document_type}
  */
  readonly documentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#include_all_versions AppflowFlow#include_all_versions}
  */
  readonly includeAllVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#include_renditions AppflowFlow#include_renditions}
  */
  readonly includeRenditions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#include_source_files AppflowFlow#include_source_files}
  */
  readonly includeSourceFiles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_type: cdktf.stringToTerraform(struct!.documentType),
    include_all_versions: cdktf.booleanToTerraform(struct!.includeAllVersions),
    include_renditions: cdktf.booleanToTerraform(struct!.includeRenditions),
    include_source_files: cdktf.booleanToTerraform(struct!.includeSourceFiles),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    document_type: {
      value: cdktf.stringToHclTerraform(struct!.documentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_all_versions: {
      value: cdktf.booleanToHclTerraform(struct!.includeAllVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_renditions: {
      value: cdktf.booleanToHclTerraform(struct!.includeRenditions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_source_files: {
      value: cdktf.booleanToHclTerraform(struct!.includeSourceFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentType = this._documentType;
    }
    if (this._includeAllVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAllVersions = this._includeAllVersions;
    }
    if (this._includeRenditions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRenditions = this._includeRenditions;
    }
    if (this._includeSourceFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSourceFiles = this._includeSourceFiles;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentType = undefined;
      this._includeAllVersions = undefined;
      this._includeRenditions = undefined;
      this._includeSourceFiles = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentType = value.documentType;
      this._includeAllVersions = value.includeAllVersions;
      this._includeRenditions = value.includeRenditions;
      this._includeSourceFiles = value.includeSourceFiles;
      this._object = value.object;
    }
  }

  // document_type - computed: false, optional: true, required: false
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  public resetDocumentType() {
    this._documentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
  }

  // include_all_versions - computed: false, optional: true, required: false
  private _includeAllVersions?: boolean | cdktf.IResolvable; 
  public get includeAllVersions() {
    return this.getBooleanAttribute('include_all_versions');
  }
  public set includeAllVersions(value: boolean | cdktf.IResolvable) {
    this._includeAllVersions = value;
  }
  public resetIncludeAllVersions() {
    this._includeAllVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAllVersionsInput() {
    return this._includeAllVersions;
  }

  // include_renditions - computed: false, optional: true, required: false
  private _includeRenditions?: boolean | cdktf.IResolvable; 
  public get includeRenditions() {
    return this.getBooleanAttribute('include_renditions');
  }
  public set includeRenditions(value: boolean | cdktf.IResolvable) {
    this._includeRenditions = value;
  }
  public resetIncludeRenditions() {
    this._includeRenditions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRenditionsInput() {
    return this._includeRenditions;
  }

  // include_source_files - computed: false, optional: true, required: false
  private _includeSourceFiles?: boolean | cdktf.IResolvable; 
  public get includeSourceFiles() {
    return this.getBooleanAttribute('include_source_files');
  }
  public set includeSourceFiles(value: boolean | cdktf.IResolvable) {
    this._includeSourceFiles = value;
  }
  public resetIncludeSourceFiles() {
    this._includeSourceFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSourceFilesInput() {
    return this._includeSourceFiles;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._object = value.object;
    }
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AppflowFlowSourceFlowConfigSourceConnectorProperties {
  /**
  * amplitude block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#amplitude AppflowFlow#amplitude}
  */
  readonly amplitude?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude;
  /**
  * custom_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#custom_connector AppflowFlow#custom_connector}
  */
  readonly customConnector?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#datadog AppflowFlow#datadog}
  */
  readonly datadog?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#dynatrace AppflowFlow#dynatrace}
  */
  readonly dynatrace?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
  /**
  * google_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#google_analytics AppflowFlow#google_analytics}
  */
  readonly googleAnalytics?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
  /**
  * infor_nexus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#infor_nexus AppflowFlow#infor_nexus}
  */
  readonly inforNexus?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus;
  /**
  * marketo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#marketo AppflowFlow#marketo}
  */
  readonly marketo?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3 AppflowFlow#s3}
  */
  readonly s3?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3;
  /**
  * salesforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce;
  /**
  * sapo_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#sapo_data AppflowFlow#sapo_data}
  */
  readonly sapoData?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData;
  /**
  * service_now block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#service_now AppflowFlow#service_now}
  */
  readonly serviceNow?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow;
  /**
  * singular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#singular AppflowFlow#singular}
  */
  readonly singular?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular;
  /**
  * slack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#slack AppflowFlow#slack}
  */
  readonly slack?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack;
  /**
  * trendmicro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#trendmicro AppflowFlow#trendmicro}
  */
  readonly trendmicro?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;
  /**
  * veeva block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#veeva AppflowFlow#veeva}
  */
  readonly veeva?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva;
  /**
  * zendesk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#zendesk AppflowFlow#zendesk}
  */
  readonly zendesk?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference | AppflowFlowSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amplitude: appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToTerraform(struct!.amplitude),
    custom_connector: appflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToTerraform(struct!.customConnector),
    datadog: appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToTerraform(struct!.datadog),
    dynatrace: appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToTerraform(struct!.dynatrace),
    google_analytics: appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToTerraform(struct!.googleAnalytics),
    infor_nexus: appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToTerraform(struct!.inforNexus),
    marketo: appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToTerraform(struct!.marketo),
    s3: appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToTerraform(struct!.s3),
    salesforce: appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct!.salesforce),
    sapo_data: appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToTerraform(struct!.sapoData),
    service_now: appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToTerraform(struct!.serviceNow),
    singular: appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToTerraform(struct!.singular),
    slack: appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToTerraform(struct!.slack),
    trendmicro: appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToTerraform(struct!.trendmicro),
    veeva: appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToTerraform(struct!.veeva),
    zendesk: appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToTerraform(struct!.zendesk),
  }
}


export function appflowFlowSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference | AppflowFlowSourceFlowConfigSourceConnectorProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amplitude: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeToHclTerraform(struct!.amplitude),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeList",
    },
    custom_connector: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorList",
    },
    datadog: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogToHclTerraform(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogList",
    },
    dynatrace: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceToHclTerraform(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceList",
    },
    google_analytics: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsToHclTerraform(struct!.googleAnalytics),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsList",
    },
    infor_nexus: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusToHclTerraform(struct!.inforNexus),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusList",
    },
    marketo: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoToHclTerraform(struct!.marketo),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoList",
    },
    s3: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3List",
    },
    salesforce: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToHclTerraform(struct!.salesforce),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceList",
    },
    sapo_data: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToHclTerraform(struct!.sapoData),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataList",
    },
    service_now: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowToHclTerraform(struct!.serviceNow),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowList",
    },
    singular: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesSingularToHclTerraform(struct!.singular),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularList",
    },
    slack: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesSlackToHclTerraform(struct!.slack),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackList",
    },
    trendmicro: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroToHclTerraform(struct!.trendmicro),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroList",
    },
    veeva: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaToHclTerraform(struct!.veeva),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaList",
    },
    zendesk: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskToHclTerraform(struct!.zendesk),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfigSourceConnectorProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._googleAnalytics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics?.internalValue;
    }
    if (this._inforNexus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus?.internalValue;
    }
    if (this._marketo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._salesforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce?.internalValue;
    }
    if (this._sapoData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData?.internalValue;
    }
    if (this._serviceNow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow?.internalValue;
    }
    if (this._singular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular?.internalValue;
    }
    if (this._slack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack?.internalValue;
    }
    if (this._trendmicro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro?.internalValue;
    }
    if (this._veeva?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva?.internalValue;
    }
    if (this._zendesk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._amplitude.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._googleAnalytics.internalValue = undefined;
      this._inforNexus.internalValue = undefined;
      this._marketo.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._salesforce.internalValue = undefined;
      this._sapoData.internalValue = undefined;
      this._serviceNow.internalValue = undefined;
      this._singular.internalValue = undefined;
      this._slack.internalValue = undefined;
      this._trendmicro.internalValue = undefined;
      this._veeva.internalValue = undefined;
      this._zendesk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._amplitude.internalValue = value.amplitude;
      this._customConnector.internalValue = value.customConnector;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._googleAnalytics.internalValue = value.googleAnalytics;
      this._inforNexus.internalValue = value.inforNexus;
      this._marketo.internalValue = value.marketo;
      this._s3.internalValue = value.s3;
      this._salesforce.internalValue = value.salesforce;
      this._sapoData.internalValue = value.sapoData;
      this._serviceNow.internalValue = value.serviceNow;
      this._singular.internalValue = value.singular;
      this._slack.internalValue = value.slack;
      this._trendmicro.internalValue = value.trendmicro;
      this._veeva.internalValue = value.veeva;
      this._zendesk.internalValue = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitudeOutputReference(this, "amplitude");
  public get amplitude() {
    return this._amplitude;
  }
  public putAmplitude(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude) {
    this._amplitude.internalValue = value;
  }
  public resetAmplitude() {
    this._amplitude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude.internalValue;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatraceOutputReference(this, "dynatrace");
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalyticsOutputReference(this, "google_analytics");
  public get googleAnalytics() {
    return this._googleAnalytics;
  }
  public putGoogleAnalytics(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics) {
    this._googleAnalytics.internalValue = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics.internalValue;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexusOutputReference(this, "infor_nexus");
  public get inforNexus() {
    return this._inforNexus;
  }
  public putInforNexus(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus) {
    this._inforNexus.internalValue = value;
  }
  public resetInforNexus() {
    this._inforNexus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus.internalValue;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketoOutputReference(this, "marketo");
  public get marketo() {
    return this._marketo;
  }
  public putMarketo(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo) {
    this._marketo.internalValue = value;
  }
  public resetMarketo() {
    this._marketo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference(this, "salesforce");
  public get salesforce() {
    return this._salesforce;
  }
  public putSalesforce(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce) {
    this._salesforce.internalValue = value;
  }
  public resetSalesforce() {
    this._salesforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce.internalValue;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference(this, "sapo_data");
  public get sapoData() {
    return this._sapoData;
  }
  public putSapoData(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData) {
    this._sapoData.internalValue = value;
  }
  public resetSapoData() {
    this._sapoData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData.internalValue;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNowOutputReference(this, "service_now");
  public get serviceNow() {
    return this._serviceNow;
  }
  public putServiceNow(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow) {
    this._serviceNow.internalValue = value;
  }
  public resetServiceNow() {
    this._serviceNow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow.internalValue;
  }

  // singular - computed: false, optional: true, required: false
  private _singular = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingularOutputReference(this, "singular");
  public get singular() {
    return this._singular;
  }
  public putSingular(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular) {
    this._singular.internalValue = value;
  }
  public resetSingular() {
    this._singular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular.internalValue;
  }

  // slack - computed: false, optional: true, required: false
  private _slack = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlackOutputReference(this, "slack");
  public get slack() {
    return this._slack;
  }
  public putSlack(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack) {
    this._slack.internalValue = value;
  }
  public resetSlack() {
    this._slack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack.internalValue;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicroOutputReference(this, "trendmicro");
  public get trendmicro() {
    return this._trendmicro;
  }
  public putTrendmicro(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro) {
    this._trendmicro.internalValue = value;
  }
  public resetTrendmicro() {
    this._trendmicro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro.internalValue;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeevaOutputReference(this, "veeva");
  public get veeva() {
    return this._veeva;
  }
  public putVeeva(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva) {
    this._veeva.internalValue = value;
  }
  public resetVeeva() {
    this._veeva.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva.internalValue;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendeskOutputReference(this, "zendesk");
  public get zendesk() {
    return this._zendesk;
  }
  public putZendesk(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesZendesk) {
    this._zendesk.internalValue = value;
  }
  public resetZendesk() {
    this._zendesk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk.internalValue;
  }
}
export interface AppflowFlowSourceFlowConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#api_version AppflowFlow#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#connector_profile_name AppflowFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#connector_type AppflowFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * incremental_pull_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#incremental_pull_config AppflowFlow#incremental_pull_config}
  */
  readonly incrementalPullConfig?: AppflowFlowSourceFlowConfigIncrementalPullConfig;
  /**
  * source_connector_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#source_connector_properties AppflowFlow#source_connector_properties}
  */
  readonly sourceConnectorProperties: AppflowFlowSourceFlowConfigSourceConnectorProperties;
}

export function appflowFlowSourceFlowConfigToTerraform(struct?: AppflowFlowSourceFlowConfigOutputReference | AppflowFlowSourceFlowConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    connector_profile_name: cdktf.stringToTerraform(struct!.connectorProfileName),
    connector_type: cdktf.stringToTerraform(struct!.connectorType),
    incremental_pull_config: appflowFlowSourceFlowConfigIncrementalPullConfigToTerraform(struct!.incrementalPullConfig),
    source_connector_properties: appflowFlowSourceFlowConfigSourceConnectorPropertiesToTerraform(struct!.sourceConnectorProperties),
  }
}


export function appflowFlowSourceFlowConfigToHclTerraform(struct?: AppflowFlowSourceFlowConfigOutputReference | AppflowFlowSourceFlowConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.connectorProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_type: {
      value: cdktf.stringToHclTerraform(struct!.connectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incremental_pull_config: {
      value: appflowFlowSourceFlowConfigIncrementalPullConfigToHclTerraform(struct!.incrementalPullConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigIncrementalPullConfigList",
    },
    source_connector_properties: {
      value: appflowFlowSourceFlowConfigSourceConnectorPropertiesToHclTerraform(struct!.sourceConnectorProperties),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowSourceFlowConfigSourceConnectorPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowSourceFlowConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowSourceFlowConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._connectorProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorProfileName = this._connectorProfileName;
    }
    if (this._connectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorType = this._connectorType;
    }
    if (this._incrementalPullConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementalPullConfig = this._incrementalPullConfig?.internalValue;
    }
    if (this._sourceConnectorProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectorProperties = this._sourceConnectorProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._connectorProfileName = undefined;
      this._connectorType = undefined;
      this._incrementalPullConfig.internalValue = undefined;
      this._sourceConnectorProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._connectorProfileName = value.connectorProfileName;
      this._connectorType = value.connectorType;
      this._incrementalPullConfig.internalValue = value.incrementalPullConfig;
      this._sourceConnectorProperties.internalValue = value.sourceConnectorProperties;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // connector_profile_name - computed: false, optional: true, required: false
  private _connectorProfileName?: string; 
  public get connectorProfileName() {
    return this.getStringAttribute('connector_profile_name');
  }
  public set connectorProfileName(value: string) {
    this._connectorProfileName = value;
  }
  public resetConnectorProfileName() {
    this._connectorProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorProfileNameInput() {
    return this._connectorProfileName;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // incremental_pull_config - computed: false, optional: true, required: false
  private _incrementalPullConfig = new AppflowFlowSourceFlowConfigIncrementalPullConfigOutputReference(this, "incremental_pull_config");
  public get incrementalPullConfig() {
    return this._incrementalPullConfig;
  }
  public putIncrementalPullConfig(value: AppflowFlowSourceFlowConfigIncrementalPullConfig) {
    this._incrementalPullConfig.internalValue = value;
  }
  public resetIncrementalPullConfig() {
    this._incrementalPullConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalPullConfigInput() {
    return this._incrementalPullConfig.internalValue;
  }

  // source_connector_properties - computed: false, optional: false, required: true
  private _sourceConnectorProperties = new AppflowFlowSourceFlowConfigSourceConnectorPropertiesOutputReference(this, "source_connector_properties");
  public get sourceConnectorProperties() {
    return this._sourceConnectorProperties;
  }
  public putSourceConnectorProperties(value: AppflowFlowSourceFlowConfigSourceConnectorProperties) {
    this._sourceConnectorProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectorPropertiesInput() {
    return this._sourceConnectorProperties.internalValue;
  }
}
export interface AppflowFlowTaskConnectorOperator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#amplitude AppflowFlow#amplitude}
  */
  readonly amplitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#custom_connector AppflowFlow#custom_connector}
  */
  readonly customConnector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#datadog AppflowFlow#datadog}
  */
  readonly datadog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#dynatrace AppflowFlow#dynatrace}
  */
  readonly dynatrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#google_analytics AppflowFlow#google_analytics}
  */
  readonly googleAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#infor_nexus AppflowFlow#infor_nexus}
  */
  readonly inforNexus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#marketo AppflowFlow#marketo}
  */
  readonly marketo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#s3 AppflowFlow#s3}
  */
  readonly s3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#sapo_data AppflowFlow#sapo_data}
  */
  readonly sapoData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#service_now AppflowFlow#service_now}
  */
  readonly serviceNow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#singular AppflowFlow#singular}
  */
  readonly singular?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#slack AppflowFlow#slack}
  */
  readonly slack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#trendmicro AppflowFlow#trendmicro}
  */
  readonly trendmicro?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#veeva AppflowFlow#veeva}
  */
  readonly veeva?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#zendesk AppflowFlow#zendesk}
  */
  readonly zendesk?: string;
}

export function appflowFlowTaskConnectorOperatorToTerraform(struct?: AppflowFlowTaskConnectorOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amplitude: cdktf.stringToTerraform(struct!.amplitude),
    custom_connector: cdktf.stringToTerraform(struct!.customConnector),
    datadog: cdktf.stringToTerraform(struct!.datadog),
    dynatrace: cdktf.stringToTerraform(struct!.dynatrace),
    google_analytics: cdktf.stringToTerraform(struct!.googleAnalytics),
    infor_nexus: cdktf.stringToTerraform(struct!.inforNexus),
    marketo: cdktf.stringToTerraform(struct!.marketo),
    s3: cdktf.stringToTerraform(struct!.s3),
    salesforce: cdktf.stringToTerraform(struct!.salesforce),
    sapo_data: cdktf.stringToTerraform(struct!.sapoData),
    service_now: cdktf.stringToTerraform(struct!.serviceNow),
    singular: cdktf.stringToTerraform(struct!.singular),
    slack: cdktf.stringToTerraform(struct!.slack),
    trendmicro: cdktf.stringToTerraform(struct!.trendmicro),
    veeva: cdktf.stringToTerraform(struct!.veeva),
    zendesk: cdktf.stringToTerraform(struct!.zendesk),
  }
}


export function appflowFlowTaskConnectorOperatorToHclTerraform(struct?: AppflowFlowTaskConnectorOperator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amplitude: {
      value: cdktf.stringToHclTerraform(struct!.amplitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_connector: {
      value: cdktf.stringToHclTerraform(struct!.customConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datadog: {
      value: cdktf.stringToHclTerraform(struct!.datadog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynatrace: {
      value: cdktf.stringToHclTerraform(struct!.dynatrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google_analytics: {
      value: cdktf.stringToHclTerraform(struct!.googleAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infor_nexus: {
      value: cdktf.stringToHclTerraform(struct!.inforNexus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marketo: {
      value: cdktf.stringToHclTerraform(struct!.marketo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3: {
      value: cdktf.stringToHclTerraform(struct!.s3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salesforce: {
      value: cdktf.stringToHclTerraform(struct!.salesforce),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sapo_data: {
      value: cdktf.stringToHclTerraform(struct!.sapoData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_now: {
      value: cdktf.stringToHclTerraform(struct!.serviceNow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    singular: {
      value: cdktf.stringToHclTerraform(struct!.singular),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slack: {
      value: cdktf.stringToHclTerraform(struct!.slack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trendmicro: {
      value: cdktf.stringToHclTerraform(struct!.trendmicro),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    veeva: {
      value: cdktf.stringToHclTerraform(struct!.veeva),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zendesk: {
      value: cdktf.stringToHclTerraform(struct!.zendesk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowTaskConnectorOperatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppflowFlowTaskConnectorOperator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amplitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.amplitude = this._amplitude;
    }
    if (this._customConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector;
    }
    if (this._datadog !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog;
    }
    if (this._dynatrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace;
    }
    if (this._googleAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAnalytics = this._googleAnalytics;
    }
    if (this._inforNexus !== undefined) {
      hasAnyValues = true;
      internalValueResult.inforNexus = this._inforNexus;
    }
    if (this._marketo !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketo = this._marketo;
    }
    if (this._s3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3;
    }
    if (this._salesforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforce = this._salesforce;
    }
    if (this._sapoData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sapoData = this._sapoData;
    }
    if (this._serviceNow !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNow = this._serviceNow;
    }
    if (this._singular !== undefined) {
      hasAnyValues = true;
      internalValueResult.singular = this._singular;
    }
    if (this._slack !== undefined) {
      hasAnyValues = true;
      internalValueResult.slack = this._slack;
    }
    if (this._trendmicro !== undefined) {
      hasAnyValues = true;
      internalValueResult.trendmicro = this._trendmicro;
    }
    if (this._veeva !== undefined) {
      hasAnyValues = true;
      internalValueResult.veeva = this._veeva;
    }
    if (this._zendesk !== undefined) {
      hasAnyValues = true;
      internalValueResult.zendesk = this._zendesk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowTaskConnectorOperator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amplitude = undefined;
      this._customConnector = undefined;
      this._datadog = undefined;
      this._dynatrace = undefined;
      this._googleAnalytics = undefined;
      this._inforNexus = undefined;
      this._marketo = undefined;
      this._s3 = undefined;
      this._salesforce = undefined;
      this._sapoData = undefined;
      this._serviceNow = undefined;
      this._singular = undefined;
      this._slack = undefined;
      this._trendmicro = undefined;
      this._veeva = undefined;
      this._zendesk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amplitude = value.amplitude;
      this._customConnector = value.customConnector;
      this._datadog = value.datadog;
      this._dynatrace = value.dynatrace;
      this._googleAnalytics = value.googleAnalytics;
      this._inforNexus = value.inforNexus;
      this._marketo = value.marketo;
      this._s3 = value.s3;
      this._salesforce = value.salesforce;
      this._sapoData = value.sapoData;
      this._serviceNow = value.serviceNow;
      this._singular = value.singular;
      this._slack = value.slack;
      this._trendmicro = value.trendmicro;
      this._veeva = value.veeva;
      this._zendesk = value.zendesk;
    }
  }

  // amplitude - computed: false, optional: true, required: false
  private _amplitude?: string; 
  public get amplitude() {
    return this.getStringAttribute('amplitude');
  }
  public set amplitude(value: string) {
    this._amplitude = value;
  }
  public resetAmplitude() {
    this._amplitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amplitudeInput() {
    return this._amplitude;
  }

  // custom_connector - computed: false, optional: true, required: false
  private _customConnector?: string; 
  public get customConnector() {
    return this.getStringAttribute('custom_connector');
  }
  public set customConnector(value: string) {
    this._customConnector = value;
  }
  public resetCustomConnector() {
    this._customConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog?: string; 
  public get datadog() {
    return this.getStringAttribute('datadog');
  }
  public set datadog(value: string) {
    this._datadog = value;
  }
  public resetDatadog() {
    this._datadog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace?: string; 
  public get dynatrace() {
    return this.getStringAttribute('dynatrace');
  }
  public set dynatrace(value: string) {
    this._dynatrace = value;
  }
  public resetDynatrace() {
    this._dynatrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace;
  }

  // google_analytics - computed: false, optional: true, required: false
  private _googleAnalytics?: string; 
  public get googleAnalytics() {
    return this.getStringAttribute('google_analytics');
  }
  public set googleAnalytics(value: string) {
    this._googleAnalytics = value;
  }
  public resetGoogleAnalytics() {
    this._googleAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAnalyticsInput() {
    return this._googleAnalytics;
  }

  // infor_nexus - computed: false, optional: true, required: false
  private _inforNexus?: string; 
  public get inforNexus() {
    return this.getStringAttribute('infor_nexus');
  }
  public set inforNexus(value: string) {
    this._inforNexus = value;
  }
  public resetInforNexus() {
    this._inforNexus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inforNexusInput() {
    return this._inforNexus;
  }

  // marketo - computed: false, optional: true, required: false
  private _marketo?: string; 
  public get marketo() {
    return this.getStringAttribute('marketo');
  }
  public set marketo(value: string) {
    this._marketo = value;
  }
  public resetMarketo() {
    this._marketo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketoInput() {
    return this._marketo;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3?: string; 
  public get s3() {
    return this.getStringAttribute('s3');
  }
  public set s3(value: string) {
    this._s3 = value;
  }
  public resetS3() {
    this._s3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3;
  }

  // salesforce - computed: false, optional: true, required: false
  private _salesforce?: string; 
  public get salesforce() {
    return this.getStringAttribute('salesforce');
  }
  public set salesforce(value: string) {
    this._salesforce = value;
  }
  public resetSalesforce() {
    this._salesforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceInput() {
    return this._salesforce;
  }

  // sapo_data - computed: false, optional: true, required: false
  private _sapoData?: string; 
  public get sapoData() {
    return this.getStringAttribute('sapo_data');
  }
  public set sapoData(value: string) {
    this._sapoData = value;
  }
  public resetSapoData() {
    this._sapoData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sapoDataInput() {
    return this._sapoData;
  }

  // service_now - computed: false, optional: true, required: false
  private _serviceNow?: string; 
  public get serviceNow() {
    return this.getStringAttribute('service_now');
  }
  public set serviceNow(value: string) {
    this._serviceNow = value;
  }
  public resetServiceNow() {
    this._serviceNow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNowInput() {
    return this._serviceNow;
  }

  // singular - computed: false, optional: true, required: false
  private _singular?: string; 
  public get singular() {
    return this.getStringAttribute('singular');
  }
  public set singular(value: string) {
    this._singular = value;
  }
  public resetSingular() {
    this._singular = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singularInput() {
    return this._singular;
  }

  // slack - computed: false, optional: true, required: false
  private _slack?: string; 
  public get slack() {
    return this.getStringAttribute('slack');
  }
  public set slack(value: string) {
    this._slack = value;
  }
  public resetSlack() {
    this._slack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slackInput() {
    return this._slack;
  }

  // trendmicro - computed: false, optional: true, required: false
  private _trendmicro?: string; 
  public get trendmicro() {
    return this.getStringAttribute('trendmicro');
  }
  public set trendmicro(value: string) {
    this._trendmicro = value;
  }
  public resetTrendmicro() {
    this._trendmicro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trendmicroInput() {
    return this._trendmicro;
  }

  // veeva - computed: false, optional: true, required: false
  private _veeva?: string; 
  public get veeva() {
    return this.getStringAttribute('veeva');
  }
  public set veeva(value: string) {
    this._veeva = value;
  }
  public resetVeeva() {
    this._veeva = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veevaInput() {
    return this._veeva;
  }

  // zendesk - computed: false, optional: true, required: false
  private _zendesk?: string; 
  public get zendesk() {
    return this.getStringAttribute('zendesk');
  }
  public set zendesk(value: string) {
    this._zendesk = value;
  }
  public resetZendesk() {
    this._zendesk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zendeskInput() {
    return this._zendesk;
  }
}

export class AppflowFlowTaskConnectorOperatorList extends cdktf.ComplexList {
  public internalValue? : AppflowFlowTaskConnectorOperator[] | cdktf.IResolvable

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
  public get(index: number): AppflowFlowTaskConnectorOperatorOutputReference {
    return new AppflowFlowTaskConnectorOperatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppflowFlowTask {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#destination_field AppflowFlow#destination_field}
  */
  readonly destinationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#source_fields AppflowFlow#source_fields}
  */
  readonly sourceFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#task_properties AppflowFlow#task_properties}
  */
  readonly taskProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#task_type AppflowFlow#task_type}
  */
  readonly taskType: string;
  /**
  * connector_operator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#connector_operator AppflowFlow#connector_operator}
  */
  readonly connectorOperator?: AppflowFlowTaskConnectorOperator[] | cdktf.IResolvable;
}

export function appflowFlowTaskToTerraform(struct?: AppflowFlowTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_field: cdktf.stringToTerraform(struct!.destinationField),
    source_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceFields),
    task_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.taskProperties),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    connector_operator: cdktf.listMapper(appflowFlowTaskConnectorOperatorToTerraform, true)(struct!.connectorOperator),
  }
}


export function appflowFlowTaskToHclTerraform(struct?: AppflowFlowTask | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_field: {
      value: cdktf.stringToHclTerraform(struct!.destinationField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    task_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.taskProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connector_operator: {
      value: cdktf.listMapperHcl(appflowFlowTaskConnectorOperatorToHclTerraform, true)(struct!.connectorOperator),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowTaskConnectorOperatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowTaskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppflowFlowTask | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationField !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationField = this._destinationField;
    }
    if (this._sourceFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFields = this._sourceFields;
    }
    if (this._taskProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskProperties = this._taskProperties;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._connectorOperator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorOperator = this._connectorOperator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowTask | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationField = undefined;
      this._sourceFields = undefined;
      this._taskProperties = undefined;
      this._taskType = undefined;
      this._connectorOperator.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationField = value.destinationField;
      this._sourceFields = value.sourceFields;
      this._taskProperties = value.taskProperties;
      this._taskType = value.taskType;
      this._connectorOperator.internalValue = value.connectorOperator;
    }
  }

  // destination_field - computed: false, optional: true, required: false
  private _destinationField?: string; 
  public get destinationField() {
    return this.getStringAttribute('destination_field');
  }
  public set destinationField(value: string) {
    this._destinationField = value;
  }
  public resetDestinationField() {
    this._destinationField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFieldInput() {
    return this._destinationField;
  }

  // source_fields - computed: true, optional: true, required: false
  private _sourceFields?: string[]; 
  public get sourceFields() {
    return this.getListAttribute('source_fields');
  }
  public set sourceFields(value: string[]) {
    this._sourceFields = value;
  }
  public resetSourceFields() {
    this._sourceFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldsInput() {
    return this._sourceFields;
  }

  // task_properties - computed: false, optional: true, required: false
  private _taskProperties?: { [key: string]: string }; 
  public get taskProperties() {
    return this.getStringMapAttribute('task_properties');
  }
  public set taskProperties(value: { [key: string]: string }) {
    this._taskProperties = value;
  }
  public resetTaskProperties() {
    this._taskProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskPropertiesInput() {
    return this._taskProperties;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // connector_operator - computed: false, optional: true, required: false
  private _connectorOperator = new AppflowFlowTaskConnectorOperatorList(this, "connector_operator", false);
  public get connectorOperator() {
    return this._connectorOperator;
  }
  public putConnectorOperator(value: AppflowFlowTaskConnectorOperator[] | cdktf.IResolvable) {
    this._connectorOperator.internalValue = value;
  }
  public resetConnectorOperator() {
    this._connectorOperator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorOperatorInput() {
    return this._connectorOperator.internalValue;
  }
}

export class AppflowFlowTaskList extends cdktf.ComplexList {
  public internalValue? : AppflowFlowTask[] | cdktf.IResolvable

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
  public get(index: number): AppflowFlowTaskOutputReference {
    return new AppflowFlowTaskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppflowFlowTriggerConfigTriggerPropertiesScheduled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#data_pull_mode AppflowFlow#data_pull_mode}
  */
  readonly dataPullMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#first_execution_from AppflowFlow#first_execution_from}
  */
  readonly firstExecutionFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#schedule_end_time AppflowFlow#schedule_end_time}
  */
  readonly scheduleEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#schedule_expression AppflowFlow#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#schedule_offset AppflowFlow#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#schedule_start_time AppflowFlow#schedule_start_time}
  */
  readonly scheduleStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#timezone AppflowFlow#timezone}
  */
  readonly timezone?: string;
}

export function appflowFlowTriggerConfigTriggerPropertiesScheduledToTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference | AppflowFlowTriggerConfigTriggerPropertiesScheduled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pull_mode: cdktf.stringToTerraform(struct!.dataPullMode),
    first_execution_from: cdktf.stringToTerraform(struct!.firstExecutionFrom),
    schedule_end_time: cdktf.stringToTerraform(struct!.scheduleEndTime),
    schedule_expression: cdktf.stringToTerraform(struct!.scheduleExpression),
    schedule_offset: cdktf.numberToTerraform(struct!.scheduleOffset),
    schedule_start_time: cdktf.stringToTerraform(struct!.scheduleStartTime),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function appflowFlowTriggerConfigTriggerPropertiesScheduledToHclTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference | AppflowFlowTriggerConfigTriggerPropertiesScheduled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pull_mode: {
      value: cdktf.stringToHclTerraform(struct!.dataPullMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_execution_from: {
      value: cdktf.stringToHclTerraform(struct!.firstExecutionFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_end_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduleEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_expression: {
      value: cdktf.stringToHclTerraform(struct!.scheduleExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_offset: {
      value: cdktf.numberToHclTerraform(struct!.scheduleOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_start_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduleStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowTriggerConfigTriggerPropertiesScheduled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPullMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPullMode = this._dataPullMode;
    }
    if (this._firstExecutionFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstExecutionFrom = this._firstExecutionFrom;
    }
    if (this._scheduleEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleEndTime = this._scheduleEndTime;
    }
    if (this._scheduleExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleExpression = this._scheduleExpression;
    }
    if (this._scheduleOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleOffset = this._scheduleOffset;
    }
    if (this._scheduleStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStartTime = this._scheduleStartTime;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowTriggerConfigTriggerPropertiesScheduled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataPullMode = undefined;
      this._firstExecutionFrom = undefined;
      this._scheduleEndTime = undefined;
      this._scheduleExpression = undefined;
      this._scheduleOffset = undefined;
      this._scheduleStartTime = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataPullMode = value.dataPullMode;
      this._firstExecutionFrom = value.firstExecutionFrom;
      this._scheduleEndTime = value.scheduleEndTime;
      this._scheduleExpression = value.scheduleExpression;
      this._scheduleOffset = value.scheduleOffset;
      this._scheduleStartTime = value.scheduleStartTime;
      this._timezone = value.timezone;
    }
  }

  // data_pull_mode - computed: false, optional: true, required: false
  private _dataPullMode?: string; 
  public get dataPullMode() {
    return this.getStringAttribute('data_pull_mode');
  }
  public set dataPullMode(value: string) {
    this._dataPullMode = value;
  }
  public resetDataPullMode() {
    this._dataPullMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPullModeInput() {
    return this._dataPullMode;
  }

  // first_execution_from - computed: false, optional: true, required: false
  private _firstExecutionFrom?: string; 
  public get firstExecutionFrom() {
    return this.getStringAttribute('first_execution_from');
  }
  public set firstExecutionFrom(value: string) {
    this._firstExecutionFrom = value;
  }
  public resetFirstExecutionFrom() {
    this._firstExecutionFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstExecutionFromInput() {
    return this._firstExecutionFrom;
  }

  // schedule_end_time - computed: false, optional: true, required: false
  private _scheduleEndTime?: string; 
  public get scheduleEndTime() {
    return this.getStringAttribute('schedule_end_time');
  }
  public set scheduleEndTime(value: string) {
    this._scheduleEndTime = value;
  }
  public resetScheduleEndTime() {
    this._scheduleEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEndTimeInput() {
    return this._scheduleEndTime;
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_offset - computed: false, optional: true, required: false
  private _scheduleOffset?: number; 
  public get scheduleOffset() {
    return this.getNumberAttribute('schedule_offset');
  }
  public set scheduleOffset(value: number) {
    this._scheduleOffset = value;
  }
  public resetScheduleOffset() {
    this._scheduleOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOffsetInput() {
    return this._scheduleOffset;
  }

  // schedule_start_time - computed: false, optional: true, required: false
  private _scheduleStartTime?: string; 
  public get scheduleStartTime() {
    return this.getStringAttribute('schedule_start_time');
  }
  public set scheduleStartTime(value: string) {
    this._scheduleStartTime = value;
  }
  public resetScheduleStartTime() {
    this._scheduleStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStartTimeInput() {
    return this._scheduleStartTime;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface AppflowFlowTriggerConfigTriggerProperties {
  /**
  * scheduled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#scheduled AppflowFlow#scheduled}
  */
  readonly scheduled?: AppflowFlowTriggerConfigTriggerPropertiesScheduled;
}

export function appflowFlowTriggerConfigTriggerPropertiesToTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesOutputReference | AppflowFlowTriggerConfigTriggerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheduled: appflowFlowTriggerConfigTriggerPropertiesScheduledToTerraform(struct!.scheduled),
  }
}


export function appflowFlowTriggerConfigTriggerPropertiesToHclTerraform(struct?: AppflowFlowTriggerConfigTriggerPropertiesOutputReference | AppflowFlowTriggerConfigTriggerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheduled: {
      value: appflowFlowTriggerConfigTriggerPropertiesScheduledToHclTerraform(struct!.scheduled),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowTriggerConfigTriggerPropertiesScheduledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowTriggerConfigTriggerPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowTriggerConfigTriggerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduled = this._scheduled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowTriggerConfigTriggerProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduled.internalValue = value.scheduled;
    }
  }

  // scheduled - computed: false, optional: true, required: false
  private _scheduled = new AppflowFlowTriggerConfigTriggerPropertiesScheduledOutputReference(this, "scheduled");
  public get scheduled() {
    return this._scheduled;
  }
  public putScheduled(value: AppflowFlowTriggerConfigTriggerPropertiesScheduled) {
    this._scheduled.internalValue = value;
  }
  public resetScheduled() {
    this._scheduled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledInput() {
    return this._scheduled.internalValue;
  }
}
export interface AppflowFlowTriggerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#trigger_type AppflowFlow#trigger_type}
  */
  readonly triggerType: string;
  /**
  * trigger_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#trigger_properties AppflowFlow#trigger_properties}
  */
  readonly triggerProperties?: AppflowFlowTriggerConfigTriggerProperties;
}

export function appflowFlowTriggerConfigToTerraform(struct?: AppflowFlowTriggerConfigOutputReference | AppflowFlowTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    trigger_properties: appflowFlowTriggerConfigTriggerPropertiesToTerraform(struct!.triggerProperties),
  }
}


export function appflowFlowTriggerConfigToHclTerraform(struct?: AppflowFlowTriggerConfigOutputReference | AppflowFlowTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_properties: {
      value: appflowFlowTriggerConfigTriggerPropertiesToHclTerraform(struct!.triggerProperties),
      isBlock: true,
      type: "list",
      storageClassType: "AppflowFlowTriggerConfigTriggerPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppflowFlowTriggerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppflowFlowTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._triggerProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerProperties = this._triggerProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._triggerType = undefined;
      this._triggerProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._triggerType = value.triggerType;
      this._triggerProperties.internalValue = value.triggerProperties;
    }
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // trigger_properties - computed: false, optional: true, required: false
  private _triggerProperties = new AppflowFlowTriggerConfigTriggerPropertiesOutputReference(this, "trigger_properties");
  public get triggerProperties() {
    return this._triggerProperties;
  }
  public putTriggerProperties(value: AppflowFlowTriggerConfigTriggerProperties) {
    this._triggerProperties.internalValue = value;
  }
  public resetTriggerProperties() {
    this._triggerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerPropertiesInput() {
    return this._triggerProperties.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow aws_appflow_flow}
*/
export class AppflowFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appflow_flow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppflowFlow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppflowFlow to import
  * @param importFromId The id of the existing AppflowFlow that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppflowFlow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appflow_flow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/appflow_flow aws_appflow_flow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppflowFlowConfig
  */
  public constructor(scope: Construct, id: string, config: AppflowFlowConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appflow_flow',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._id = config.id;
    this._kmsArn = config.kmsArn;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._destinationFlowConfig.internalValue = config.destinationFlowConfig;
    this._metadataCatalogConfig.internalValue = config.metadataCatalogConfig;
    this._sourceFlowConfig.internalValue = config.sourceFlowConfig;
    this._task.internalValue = config.task;
    this._triggerConfig.internalValue = config.triggerConfig;
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

  // flow_status - computed: true, optional: false, required: false
  public get flowStatus() {
    return this.getStringAttribute('flow_status');
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

  // kms_arn - computed: true, optional: true, required: false
  private _kmsArn?: string; 
  public get kmsArn() {
    return this.getStringAttribute('kms_arn');
  }
  public set kmsArn(value: string) {
    this._kmsArn = value;
  }
  public resetKmsArn() {
    this._kmsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsArnInput() {
    return this._kmsArn;
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

  // destination_flow_config - computed: false, optional: false, required: true
  private _destinationFlowConfig = new AppflowFlowDestinationFlowConfigList(this, "destination_flow_config", false);
  public get destinationFlowConfig() {
    return this._destinationFlowConfig;
  }
  public putDestinationFlowConfig(value: AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable) {
    this._destinationFlowConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationFlowConfigInput() {
    return this._destinationFlowConfig.internalValue;
  }

  // metadata_catalog_config - computed: false, optional: true, required: false
  private _metadataCatalogConfig = new AppflowFlowMetadataCatalogConfigOutputReference(this, "metadata_catalog_config");
  public get metadataCatalogConfig() {
    return this._metadataCatalogConfig;
  }
  public putMetadataCatalogConfig(value: AppflowFlowMetadataCatalogConfig) {
    this._metadataCatalogConfig.internalValue = value;
  }
  public resetMetadataCatalogConfig() {
    this._metadataCatalogConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCatalogConfigInput() {
    return this._metadataCatalogConfig.internalValue;
  }

  // source_flow_config - computed: false, optional: false, required: true
  private _sourceFlowConfig = new AppflowFlowSourceFlowConfigOutputReference(this, "source_flow_config");
  public get sourceFlowConfig() {
    return this._sourceFlowConfig;
  }
  public putSourceFlowConfig(value: AppflowFlowSourceFlowConfig) {
    this._sourceFlowConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFlowConfigInput() {
    return this._sourceFlowConfig.internalValue;
  }

  // task - computed: false, optional: false, required: true
  private _task = new AppflowFlowTaskList(this, "task", true);
  public get task() {
    return this._task;
  }
  public putTask(value: AppflowFlowTask[] | cdktf.IResolvable) {
    this._task.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInput() {
    return this._task.internalValue;
  }

  // trigger_config - computed: false, optional: false, required: true
  private _triggerConfig = new AppflowFlowTriggerConfigOutputReference(this, "trigger_config");
  public get triggerConfig() {
    return this._triggerConfig;
  }
  public putTriggerConfig(value: AppflowFlowTriggerConfig) {
    this._triggerConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerConfigInput() {
    return this._triggerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kms_arn: cdktf.stringToTerraform(this._kmsArn),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      destination_flow_config: cdktf.listMapper(appflowFlowDestinationFlowConfigToTerraform, true)(this._destinationFlowConfig.internalValue),
      metadata_catalog_config: appflowFlowMetadataCatalogConfigToTerraform(this._metadataCatalogConfig.internalValue),
      source_flow_config: appflowFlowSourceFlowConfigToTerraform(this._sourceFlowConfig.internalValue),
      task: cdktf.listMapper(appflowFlowTaskToTerraform, true)(this._task.internalValue),
      trigger_config: appflowFlowTriggerConfigToTerraform(this._triggerConfig.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_arn: {
        value: cdktf.stringToHclTerraform(this._kmsArn),
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
      destination_flow_config: {
        value: cdktf.listMapperHcl(appflowFlowDestinationFlowConfigToHclTerraform, true)(this._destinationFlowConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppflowFlowDestinationFlowConfigList",
      },
      metadata_catalog_config: {
        value: appflowFlowMetadataCatalogConfigToHclTerraform(this._metadataCatalogConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppflowFlowMetadataCatalogConfigList",
      },
      source_flow_config: {
        value: appflowFlowSourceFlowConfigToHclTerraform(this._sourceFlowConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppflowFlowSourceFlowConfigList",
      },
      task: {
        value: cdktf.listMapperHcl(appflowFlowTaskToHclTerraform, true)(this._task.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AppflowFlowTaskList",
      },
      trigger_config: {
        value: appflowFlowTriggerConfigToHclTerraform(this._triggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppflowFlowTriggerConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
