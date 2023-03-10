// https://www.terraform.io/docs/providers/aws/r/appflow_flow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppflowFlowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#description AppflowFlow#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#id AppflowFlow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#kms_arn AppflowFlow#kms_arn}
  */
  readonly kmsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#name AppflowFlow#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#tags AppflowFlow#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#tags_all AppflowFlow#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * destination_flow_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#destination_flow_config AppflowFlow#destination_flow_config}
  */
  readonly destinationFlowConfig: AppflowFlowDestinationFlowConfig[] | cdktf.IResolvable;
  /**
  * source_flow_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#source_flow_config AppflowFlow#source_flow_config}
  */
  readonly sourceFlowConfig: AppflowFlowSourceFlowConfig;
  /**
  * task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#task AppflowFlow#task}
  */
  readonly task: AppflowFlowTask[] | cdktf.IResolvable;
  /**
  * trigger_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#trigger_config AppflowFlow#trigger_config}
  */
  readonly triggerConfig: AppflowFlowTriggerConfig;
}
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnectorErrorHandlingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#custom_properties AppflowFlow#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#entity_name AppflowFlow#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#domain_name AppflowFlow#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object_type_name AppflowFlow#object_type_name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#aggregation_type AppflowFlow#aggregation_type}
  */
  readonly aggregationType?: string;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig | undefined) {
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
export interface AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#prefix_format AppflowFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#prefix_type AppflowFlow#prefix_type}
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
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
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
      this._prefixType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixFormat = value.prefixFormat;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#file_type AppflowFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * aggregation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#aggregation_config AppflowFlow#aggregation_config}
  */
  readonly aggregationConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfig;
  /**
  * prefix_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#prefix_config AppflowFlow#prefix_config}
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
    aggregation_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigAggregationConfigToTerraform(struct!.aggregationConfig),
    prefix_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3S3OutputFormatConfigPrefixConfigToTerraform(struct!.prefixConfig),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_output_format_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3_output_format_config AppflowFlow#s3_output_format_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfig;
}

export function appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceOutputReference | AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id_field_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.idFieldNames),
    object: cdktf.stringToTerraform(struct!.object),
    write_operation_type: cdktf.stringToTerraform(struct!.writeOperationType),
    error_handling_config: appflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforceErrorHandlingConfigToTerraform(struct!.errorHandlingConfig),
  }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object_path AppflowFlow#object_path}
  */
  readonly objectPath: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
  */
  readonly errorHandlingConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoDataErrorHandlingConfig;
  /**
  * success_response_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#success_response_handling_config AppflowFlow#success_response_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#intermediate_bucket_name AppflowFlow#intermediate_bucket_name}
  */
  readonly intermediateBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#aggregation_type AppflowFlow#aggregation_type}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#prefix_format AppflowFlow#prefix_format}
  */
  readonly prefixFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#prefix_type AppflowFlow#prefix_type}
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
    prefix_type: cdktf.stringToTerraform(struct!.prefixType),
  }
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
      this._prefixType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixFormat = value.prefixFormat;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#file_type AppflowFlow#file_type}
  */
  readonly fileType?: string;
  /**
  * aggregation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#aggregation_config AppflowFlow#aggregation_config}
  */
  readonly aggregationConfig?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolverS3OutputFormatConfigAggregationConfig;
  /**
  * prefix_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#prefix_config AppflowFlow#prefix_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_output_format_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3_output_format_config AppflowFlow#s3_output_format_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#fail_on_first_destination_error AppflowFlow#fail_on_first_destination_error}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#id_field_names AppflowFlow#id_field_names}
  */
  readonly idFieldNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#write_operation_type AppflowFlow#write_operation_type}
  */
  readonly writeOperationType?: string;
  /**
  * error_handling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#error_handling_config AppflowFlow#error_handling_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#custom_connector AppflowFlow#custom_connector}
  */
  readonly customConnector?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomConnector;
  /**
  * customer_profiles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#customer_profiles AppflowFlow#customer_profiles}
  */
  readonly customerProfiles?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesCustomerProfiles;
  /**
  * event_bridge block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#event_bridge AppflowFlow#event_bridge}
  */
  readonly eventBridge?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesEventBridge;
  /**
  * honeycode block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#honeycode AppflowFlow#honeycode}
  */
  readonly honeycode?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesHoneycode;
  /**
  * lookout_metrics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#lookout_metrics AppflowFlow#lookout_metrics}
  */
  readonly lookoutMetrics?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesLookoutMetrics;
  /**
  * marketo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#marketo AppflowFlow#marketo}
  */
  readonly marketo?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesMarketo;
  /**
  * redshift block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#redshift AppflowFlow#redshift}
  */
  readonly redshift?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesRedshift;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3 AppflowFlow#s3}
  */
  readonly s3?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesS3;
  /**
  * salesforce block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSalesforce;
  /**
  * sapo_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#sapo_data AppflowFlow#sapo_data}
  */
  readonly sapoData?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSapoData;
  /**
  * snowflake block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#snowflake AppflowFlow#snowflake}
  */
  readonly snowflake?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesSnowflake;
  /**
  * upsolver block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#upsolver AppflowFlow#upsolver}
  */
  readonly upsolver?: AppflowFlowDestinationFlowConfigDestinationConnectorPropertiesUpsolver;
  /**
  * zendesk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#zendesk AppflowFlow#zendesk}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#api_version AppflowFlow#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#connector_profile_name AppflowFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#connector_type AppflowFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * destination_connector_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#destination_connector_properties AppflowFlow#destination_connector_properties}
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
export interface AppflowFlowSourceFlowConfigIncrementalPullConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#datetime_type_field_name AppflowFlow#datetime_type_field_name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#custom_properties AppflowFlow#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#entity_name AppflowFlow#entity_name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3_input_file_type AppflowFlow#s3_input_file_type}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_name AppflowFlow#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#bucket_prefix AppflowFlow#bucket_prefix}
  */
  readonly bucketPrefix?: string;
  /**
  * s3_input_format_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3_input_format_config AppflowFlow#s3_input_format_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#enable_dynamic_field_update AppflowFlow#enable_dynamic_field_update}
  */
  readonly enableDynamicFieldUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#include_deleted_records AppflowFlow#include_deleted_records}
  */
  readonly includeDeletedRecords?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
  */
  readonly object: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforceOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_dynamic_field_update: cdktf.booleanToTerraform(struct!.enableDynamicFieldUpdate),
    include_deleted_records: cdktf.booleanToTerraform(struct!.includeDeletedRecords),
    object: cdktf.stringToTerraform(struct!.object),
  }
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
      this._enableDynamicFieldUpdate = undefined;
      this._includeDeletedRecords = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableDynamicFieldUpdate = value.enableDynamicFieldUpdate;
      this._includeDeletedRecords = value.includeDeletedRecords;
      this._object = value.object;
    }
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
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object_path AppflowFlow#object_path}
  */
  readonly objectPath: string;
}

export function appflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataToTerraform(struct?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoDataOutputReference | AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_path: cdktf.stringToTerraform(struct!.objectPath),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectPath = value.objectPath;
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
}
export interface AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#document_type AppflowFlow#document_type}
  */
  readonly documentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#include_all_versions AppflowFlow#include_all_versions}
  */
  readonly includeAllVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#include_renditions AppflowFlow#include_renditions}
  */
  readonly includeRenditions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#include_source_files AppflowFlow#include_source_files}
  */
  readonly includeSourceFiles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#object AppflowFlow#object}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#amplitude AppflowFlow#amplitude}
  */
  readonly amplitude?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesAmplitude;
  /**
  * custom_connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#custom_connector AppflowFlow#custom_connector}
  */
  readonly customConnector?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesCustomConnector;
  /**
  * datadog block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#datadog AppflowFlow#datadog}
  */
  readonly datadog?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDatadog;
  /**
  * dynatrace block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#dynatrace AppflowFlow#dynatrace}
  */
  readonly dynatrace?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesDynatrace;
  /**
  * google_analytics block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#google_analytics AppflowFlow#google_analytics}
  */
  readonly googleAnalytics?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesGoogleAnalytics;
  /**
  * infor_nexus block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#infor_nexus AppflowFlow#infor_nexus}
  */
  readonly inforNexus?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesInforNexus;
  /**
  * marketo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#marketo AppflowFlow#marketo}
  */
  readonly marketo?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesMarketo;
  /**
  * s3 block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3 AppflowFlow#s3}
  */
  readonly s3?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesS3;
  /**
  * salesforce block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSalesforce;
  /**
  * sapo_data block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#sapo_data AppflowFlow#sapo_data}
  */
  readonly sapoData?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSapoData;
  /**
  * service_now block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#service_now AppflowFlow#service_now}
  */
  readonly serviceNow?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesServiceNow;
  /**
  * singular block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#singular AppflowFlow#singular}
  */
  readonly singular?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSingular;
  /**
  * slack block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#slack AppflowFlow#slack}
  */
  readonly slack?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesSlack;
  /**
  * trendmicro block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#trendmicro AppflowFlow#trendmicro}
  */
  readonly trendmicro?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesTrendmicro;
  /**
  * veeva block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#veeva AppflowFlow#veeva}
  */
  readonly veeva?: AppflowFlowSourceFlowConfigSourceConnectorPropertiesVeeva;
  /**
  * zendesk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#zendesk AppflowFlow#zendesk}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#api_version AppflowFlow#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#connector_profile_name AppflowFlow#connector_profile_name}
  */
  readonly connectorProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#connector_type AppflowFlow#connector_type}
  */
  readonly connectorType: string;
  /**
  * incremental_pull_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#incremental_pull_config AppflowFlow#incremental_pull_config}
  */
  readonly incrementalPullConfig?: AppflowFlowSourceFlowConfigIncrementalPullConfig;
  /**
  * source_connector_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#source_connector_properties AppflowFlow#source_connector_properties}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#amplitude AppflowFlow#amplitude}
  */
  readonly amplitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#custom_connector AppflowFlow#custom_connector}
  */
  readonly customConnector?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#datadog AppflowFlow#datadog}
  */
  readonly datadog?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#dynatrace AppflowFlow#dynatrace}
  */
  readonly dynatrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#google_analytics AppflowFlow#google_analytics}
  */
  readonly googleAnalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#infor_nexus AppflowFlow#infor_nexus}
  */
  readonly inforNexus?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#marketo AppflowFlow#marketo}
  */
  readonly marketo?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#s3 AppflowFlow#s3}
  */
  readonly s3?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#salesforce AppflowFlow#salesforce}
  */
  readonly salesforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#sapo_data AppflowFlow#sapo_data}
  */
  readonly sapoData?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#service_now AppflowFlow#service_now}
  */
  readonly serviceNow?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#singular AppflowFlow#singular}
  */
  readonly singular?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#slack AppflowFlow#slack}
  */
  readonly slack?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#trendmicro AppflowFlow#trendmicro}
  */
  readonly trendmicro?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#veeva AppflowFlow#veeva}
  */
  readonly veeva?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#zendesk AppflowFlow#zendesk}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#destination_field AppflowFlow#destination_field}
  */
  readonly destinationField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#source_fields AppflowFlow#source_fields}
  */
  readonly sourceFields: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#task_properties AppflowFlow#task_properties}
  */
  readonly taskProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#task_type AppflowFlow#task_type}
  */
  readonly taskType: string;
  /**
  * connector_operator block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#connector_operator AppflowFlow#connector_operator}
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

  // source_fields - computed: false, optional: false, required: true
  private _sourceFields?: string[]; 
  public get sourceFields() {
    return this.getListAttribute('source_fields');
  }
  public set sourceFields(value: string[]) {
    this._sourceFields = value;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#data_pull_mode AppflowFlow#data_pull_mode}
  */
  readonly dataPullMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#first_execution_from AppflowFlow#first_execution_from}
  */
  readonly firstExecutionFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#schedule_end_time AppflowFlow#schedule_end_time}
  */
  readonly scheduleEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#schedule_expression AppflowFlow#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#schedule_offset AppflowFlow#schedule_offset}
  */
  readonly scheduleOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#schedule_start_time AppflowFlow#schedule_start_time}
  */
  readonly scheduleStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#timezone AppflowFlow#timezone}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#scheduled AppflowFlow#scheduled}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#trigger_type AppflowFlow#trigger_type}
  */
  readonly triggerType: string;
  /**
  * trigger_properties block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow#trigger_properties AppflowFlow#trigger_properties}
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow aws_appflow_flow}
*/
export class AppflowFlow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appflow_flow";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appflow_flow aws_appflow_flow} Resource
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
    this._description = config.description;
    this._id = config.id;
    this._kmsArn = config.kmsArn;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._destinationFlowConfig.internalValue = config.destinationFlowConfig;
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
  private _destinationFlowConfig = new AppflowFlowDestinationFlowConfigList(this, "destination_flow_config", true);
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
      source_flow_config: appflowFlowSourceFlowConfigToTerraform(this._sourceFlowConfig.internalValue),
      task: cdktf.listMapper(appflowFlowTaskToTerraform, true)(this._task.internalValue),
      trigger_config: appflowFlowTriggerConfigToTerraform(this._triggerConfig.internalValue),
    };
  }
}
