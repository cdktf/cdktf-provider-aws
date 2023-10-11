// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchEventEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#description CloudwatchEventEndpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#id CloudwatchEventEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#name CloudwatchEventEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#role_arn CloudwatchEventEndpoint#role_arn}
  */
  readonly roleArn?: string;
  /**
  * event_bus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#event_bus CloudwatchEventEndpoint#event_bus}
  */
  readonly eventBus: CloudwatchEventEndpointEventBus[] | cdktf.IResolvable;
  /**
  * replication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#replication_config CloudwatchEventEndpoint#replication_config}
  */
  readonly replicationConfig?: CloudwatchEventEndpointReplicationConfig;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#routing_config CloudwatchEventEndpoint#routing_config}
  */
  readonly routingConfig: CloudwatchEventEndpointRoutingConfig;
}
export interface CloudwatchEventEndpointEventBus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#event_bus_arn CloudwatchEventEndpoint#event_bus_arn}
  */
  readonly eventBusArn: string;
}

export function cloudwatchEventEndpointEventBusToTerraform(struct?: CloudwatchEventEndpointEventBus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_bus_arn: cdktf.stringToTerraform(struct!.eventBusArn),
  }
}

export class CloudwatchEventEndpointEventBusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudwatchEventEndpointEventBus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventBusArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBusArn = this._eventBusArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventEndpointEventBus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventBusArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventBusArn = value.eventBusArn;
    }
  }

  // event_bus_arn - computed: false, optional: false, required: true
  private _eventBusArn?: string; 
  public get eventBusArn() {
    return this.getStringAttribute('event_bus_arn');
  }
  public set eventBusArn(value: string) {
    this._eventBusArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusArnInput() {
    return this._eventBusArn;
  }
}

export class CloudwatchEventEndpointEventBusList extends cdktf.ComplexList {
  public internalValue? : CloudwatchEventEndpointEventBus[] | cdktf.IResolvable

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
  public get(index: number): CloudwatchEventEndpointEventBusOutputReference {
    return new CloudwatchEventEndpointEventBusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudwatchEventEndpointReplicationConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#state CloudwatchEventEndpoint#state}
  */
  readonly state?: string;
}

export function cloudwatchEventEndpointReplicationConfigToTerraform(struct?: CloudwatchEventEndpointReplicationConfigOutputReference | CloudwatchEventEndpointReplicationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export class CloudwatchEventEndpointReplicationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventEndpointReplicationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventEndpointReplicationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#health_check CloudwatchEventEndpoint#health_check}
  */
  readonly healthCheck?: string;
}

export function cloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryToTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
  }
}

export class CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthCheck = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthCheck = value.healthCheck;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }
}
export interface CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#route CloudwatchEventEndpoint#route}
  */
  readonly route?: string;
}

export function cloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryToTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route: cdktf.stringToTerraform(struct!.route),
  }
}

export class CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._route !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._route = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._route = value.route;
    }
  }

  // route - computed: false, optional: true, required: false
  private _route?: string; 
  public get route() {
    return this.getStringAttribute('route');
  }
  public set route(value: string) {
    this._route = value;
  }
  public resetRoute() {
    this._route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route;
  }
}
export interface CloudwatchEventEndpointRoutingConfigFailoverConfig {
  /**
  * primary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#primary CloudwatchEventEndpoint#primary}
  */
  readonly primary: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary;
  /**
  * secondary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#secondary CloudwatchEventEndpoint#secondary}
  */
  readonly secondary: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary;
}

export function cloudwatchEventEndpointRoutingConfigFailoverConfigToTerraform(struct?: CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference | CloudwatchEventEndpointRoutingConfigFailoverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryToTerraform(struct!.primary),
    secondary: cloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryToTerraform(struct!.secondary),
  }
}

export class CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventEndpointRoutingConfigFailoverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventEndpointRoutingConfigFailoverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primary.internalValue = undefined;
      this._secondary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primary.internalValue = value.primary;
      this._secondary.internalValue = value.secondary;
    }
  }

  // primary - computed: false, optional: false, required: true
  private _primary = new CloudwatchEventEndpointRoutingConfigFailoverConfigPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: CloudwatchEventEndpointRoutingConfigFailoverConfigPrimary) {
    this._primary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: false, optional: false, required: true
  private _secondary = new CloudwatchEventEndpointRoutingConfigFailoverConfigSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: CloudwatchEventEndpointRoutingConfigFailoverConfigSecondary) {
    this._secondary.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }
}
export interface CloudwatchEventEndpointRoutingConfig {
  /**
  * failover_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint#failover_config CloudwatchEventEndpoint#failover_config}
  */
  readonly failoverConfig: CloudwatchEventEndpointRoutingConfigFailoverConfig;
}

export function cloudwatchEventEndpointRoutingConfigToTerraform(struct?: CloudwatchEventEndpointRoutingConfigOutputReference | CloudwatchEventEndpointRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_config: cloudwatchEventEndpointRoutingConfigFailoverConfigToTerraform(struct!.failoverConfig),
  }
}

export class CloudwatchEventEndpointRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudwatchEventEndpointRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverConfig = this._failoverConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudwatchEventEndpointRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverConfig.internalValue = value.failoverConfig;
    }
  }

  // failover_config - computed: false, optional: false, required: true
  private _failoverConfig = new CloudwatchEventEndpointRoutingConfigFailoverConfigOutputReference(this, "failover_config");
  public get failoverConfig() {
    return this._failoverConfig;
  }
  public putFailoverConfig(value: CloudwatchEventEndpointRoutingConfigFailoverConfig) {
    this._failoverConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverConfigInput() {
    return this._failoverConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint}
*/
export class CloudwatchEventEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_event_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/cloudwatch_event_endpoint aws_cloudwatch_event_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchEventEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchEventEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_event_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._eventBus.internalValue = config.eventBus;
    this._replicationConfig.internalValue = config.replicationConfig;
    this._routingConfig.internalValue = config.routingConfig;
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

  // endpoint_url - computed: true, optional: false, required: false
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // event_bus - computed: false, optional: false, required: true
  private _eventBus = new CloudwatchEventEndpointEventBusList(this, "event_bus", false);
  public get eventBus() {
    return this._eventBus;
  }
  public putEventBus(value: CloudwatchEventEndpointEventBus[] | cdktf.IResolvable) {
    this._eventBus.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBusInput() {
    return this._eventBus.internalValue;
  }

  // replication_config - computed: false, optional: true, required: false
  private _replicationConfig = new CloudwatchEventEndpointReplicationConfigOutputReference(this, "replication_config");
  public get replicationConfig() {
    return this._replicationConfig;
  }
  public putReplicationConfig(value: CloudwatchEventEndpointReplicationConfig) {
    this._replicationConfig.internalValue = value;
  }
  public resetReplicationConfig() {
    this._replicationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConfigInput() {
    return this._replicationConfig.internalValue;
  }

  // routing_config - computed: false, optional: false, required: true
  private _routingConfig = new CloudwatchEventEndpointRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: CloudwatchEventEndpointRoutingConfig) {
    this._routingConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      event_bus: cdktf.listMapper(cloudwatchEventEndpointEventBusToTerraform, true)(this._eventBus.internalValue),
      replication_config: cloudwatchEventEndpointReplicationConfigToTerraform(this._replicationConfig.internalValue),
      routing_config: cloudwatchEventEndpointRoutingConfigToTerraform(this._routingConfig.internalValue),
    };
  }
}
