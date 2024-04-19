// https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecuritylakeSubscriberNotificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#subscriber_id SecuritylakeSubscriberNotification#subscriber_id}
  */
  readonly subscriberId: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#configuration SecuritylakeSubscriberNotification#configuration}
  */
  readonly configuration?: SecuritylakeSubscriberNotificationConfiguration[] | cdktf.IResolvable;
}
export interface SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}
  */
  readonly authorizationApiKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}
  */
  readonly authorizationApiKeyValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}
  */
  readonly targetRoleArn?: string;
}

export function securitylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationToTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_api_key_name: cdktf.stringToTerraform(struct!.authorizationApiKeyName),
    authorization_api_key_value: cdktf.stringToTerraform(struct!.authorizationApiKeyValue),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    target_role_arn: cdktf.stringToTerraform(struct!.targetRoleArn),
  }
}


export function securitylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationToHclTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_api_key_name: {
      value: cdktf.stringToHclTerraform(struct!.authorizationApiKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_api_key_value: {
      value: cdktf.stringToHclTerraform(struct!.authorizationApiKeyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationApiKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationApiKeyName = this._authorizationApiKeyName;
    }
    if (this._authorizationApiKeyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationApiKeyValue = this._authorizationApiKeyValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._targetRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRoleArn = this._targetRoleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationApiKeyName = undefined;
      this._authorizationApiKeyValue = undefined;
      this._endpoint = undefined;
      this._httpMethod = undefined;
      this._targetRoleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationApiKeyName = value.authorizationApiKeyName;
      this._authorizationApiKeyValue = value.authorizationApiKeyValue;
      this._endpoint = value.endpoint;
      this._httpMethod = value.httpMethod;
      this._targetRoleArn = value.targetRoleArn;
    }
  }

  // authorization_api_key_name - computed: false, optional: true, required: false
  private _authorizationApiKeyName?: string; 
  public get authorizationApiKeyName() {
    return this.getStringAttribute('authorization_api_key_name');
  }
  public set authorizationApiKeyName(value: string) {
    this._authorizationApiKeyName = value;
  }
  public resetAuthorizationApiKeyName() {
    this._authorizationApiKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationApiKeyNameInput() {
    return this._authorizationApiKeyName;
  }

  // authorization_api_key_value - computed: false, optional: true, required: false
  private _authorizationApiKeyValue?: string; 
  public get authorizationApiKeyValue() {
    return this.getStringAttribute('authorization_api_key_value');
  }
  public set authorizationApiKeyValue(value: string) {
    this._authorizationApiKeyValue = value;
  }
  public resetAuthorizationApiKeyValue() {
    this._authorizationApiKeyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationApiKeyValueInput() {
    return this._authorizationApiKeyValue;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // target_role_arn - computed: false, optional: true, required: false
  private _targetRoleArn?: string; 
  public get targetRoleArn() {
    return this.getStringAttribute('target_role_arn');
  }
  public set targetRoleArn(value: string) {
    this._targetRoleArn = value;
  }
  public resetTargetRoleArn() {
    this._targetRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRoleArnInput() {
    return this._targetRoleArn;
  }
}

export class SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference {
    return new SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration {
}

export function securitylakeSubscriberNotificationConfigurationSqsNotificationConfigurationToTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securitylakeSubscriberNotificationConfigurationSqsNotificationConfigurationToHclTerraform(struct?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference {
    return new SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuritylakeSubscriberNotificationConfiguration {
  /**
  * https_notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}
  */
  readonly httpsNotificationConfiguration?: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | cdktf.IResolvable;
  /**
  * sqs_notification_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}
  */
  readonly sqsNotificationConfiguration?: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | cdktf.IResolvable;
}

export function securitylakeSubscriberNotificationConfigurationToTerraform(struct?: SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    https_notification_configuration: cdktf.listMapper(securitylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationToTerraform, true)(struct!.httpsNotificationConfiguration),
    sqs_notification_configuration: cdktf.listMapper(securitylakeSubscriberNotificationConfigurationSqsNotificationConfigurationToTerraform, true)(struct!.sqsNotificationConfiguration),
  }
}


export function securitylakeSubscriberNotificationConfigurationToHclTerraform(struct?: SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    https_notification_configuration: {
      value: cdktf.listMapperHcl(securitylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationToHclTerraform, true)(struct!.httpsNotificationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList",
    },
    sqs_notification_configuration: {
      value: cdktf.listMapperHcl(securitylakeSubscriberNotificationConfigurationSqsNotificationConfigurationToHclTerraform, true)(struct!.sqsNotificationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuritylakeSubscriberNotificationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpsNotificationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsNotificationConfiguration = this._httpsNotificationConfiguration?.internalValue;
    }
    if (this._sqsNotificationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsNotificationConfiguration = this._sqsNotificationConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuritylakeSubscriberNotificationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpsNotificationConfiguration.internalValue = undefined;
      this._sqsNotificationConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpsNotificationConfiguration.internalValue = value.httpsNotificationConfiguration;
      this._sqsNotificationConfiguration.internalValue = value.sqsNotificationConfiguration;
    }
  }

  // https_notification_configuration - computed: false, optional: true, required: false
  private _httpsNotificationConfiguration = new SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfigurationList(this, "https_notification_configuration", false);
  public get httpsNotificationConfiguration() {
    return this._httpsNotificationConfiguration;
  }
  public putHttpsNotificationConfiguration(value: SecuritylakeSubscriberNotificationConfigurationHttpsNotificationConfiguration[] | cdktf.IResolvable) {
    this._httpsNotificationConfiguration.internalValue = value;
  }
  public resetHttpsNotificationConfiguration() {
    this._httpsNotificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsNotificationConfigurationInput() {
    return this._httpsNotificationConfiguration.internalValue;
  }

  // sqs_notification_configuration - computed: false, optional: true, required: false
  private _sqsNotificationConfiguration = new SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfigurationList(this, "sqs_notification_configuration", false);
  public get sqsNotificationConfiguration() {
    return this._sqsNotificationConfiguration;
  }
  public putSqsNotificationConfiguration(value: SecuritylakeSubscriberNotificationConfigurationSqsNotificationConfiguration[] | cdktf.IResolvable) {
    this._sqsNotificationConfiguration.internalValue = value;
  }
  public resetSqsNotificationConfiguration() {
    this._sqsNotificationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsNotificationConfigurationInput() {
    return this._sqsNotificationConfiguration.internalValue;
  }
}

export class SecuritylakeSubscriberNotificationConfigurationList extends cdktf.ComplexList {
  public internalValue? : SecuritylakeSubscriberNotificationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): SecuritylakeSubscriberNotificationConfigurationOutputReference {
    return new SecuritylakeSubscriberNotificationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification}
*/
export class SecuritylakeSubscriberNotification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securitylake_subscriber_notification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecuritylakeSubscriberNotification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecuritylakeSubscriberNotification to import
  * @param importFromId The id of the existing SecuritylakeSubscriberNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securitylake_subscriber_notification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.46.0/docs/resources/securitylake_subscriber_notification aws_securitylake_subscriber_notification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecuritylakeSubscriberNotificationConfig
  */
  public constructor(scope: Construct, id: string, config: SecuritylakeSubscriberNotificationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securitylake_subscriber_notification',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.46.0',
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
    this._subscriberId = config.subscriberId;
    this._configuration.internalValue = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: true, optional: false, required: false
  public get endpointId() {
    return this.getStringAttribute('endpoint_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // subscriber_id - computed: false, optional: false, required: true
  private _subscriberId?: string; 
  public get subscriberId() {
    return this.getStringAttribute('subscriber_id');
  }
  public set subscriberId(value: string) {
    this._subscriberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdInput() {
    return this._subscriberId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new SecuritylakeSubscriberNotificationConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SecuritylakeSubscriberNotificationConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
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
      subscriber_id: cdktf.stringToTerraform(this._subscriberId),
      configuration: cdktf.listMapper(securitylakeSubscriberNotificationConfigurationToTerraform, true)(this._configuration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      subscriber_id: {
        value: cdktf.stringToHclTerraform(this._subscriberId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.listMapperHcl(securitylakeSubscriberNotificationConfigurationToHclTerraform, true)(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecuritylakeSubscriberNotificationConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
