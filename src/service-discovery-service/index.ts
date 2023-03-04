// https://www.terraform.io/docs/providers/aws/r/service_discovery_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDiscoveryServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}
  */
  readonly type?: string;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_config ServiceDiscoveryService#dns_config}
  */
  readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig;
  /**
  * health_check_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_config ServiceDiscoveryService#health_check_config}
  */
  readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig;
  /**
  * health_check_custom_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}
  */
  readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig;
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#ttl ServiceDiscoveryService#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}
  */
  readonly type: string;
}

export function serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform(struct?: ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryServiceDnsConfigDnsRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ttl = value.ttl;
      this._type = value.type;
    }
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
}

export class ServiceDiscoveryServiceDnsConfigDnsRecordsList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryServiceDnsConfigDnsRecords[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference {
    return new ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryServiceDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}
  */
  readonly routingPolicy?: string;
  /**
  * dns_records block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_records ServiceDiscoveryService#dns_records}
  */
  readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[] | cdktf.IResolvable;
}

export function serviceDiscoveryServiceDnsConfigToTerraform(struct?: ServiceDiscoveryServiceDnsConfigOutputReference | ServiceDiscoveryServiceDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    routing_policy: cdktf.stringToTerraform(struct!.routingPolicy),
    dns_records: cdktf.listMapper(serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform, true)(struct!.dnsRecords),
  }
}

export class ServiceDiscoveryServiceDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDiscoveryServiceDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._routingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingPolicy = this._routingPolicy;
    }
    if (this._dnsRecords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecords = this._dnsRecords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryServiceDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceId = undefined;
      this._routingPolicy = undefined;
      this._dnsRecords.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceId = value.namespaceId;
      this._routingPolicy = value.routingPolicy;
      this._dnsRecords.internalValue = value.dnsRecords;
    }
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // routing_policy - computed: false, optional: true, required: false
  private _routingPolicy?: string; 
  public get routingPolicy() {
    return this.getStringAttribute('routing_policy');
  }
  public set routingPolicy(value: string) {
    this._routingPolicy = value;
  }
  public resetRoutingPolicy() {
    this._routingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyInput() {
    return this._routingPolicy;
  }

  // dns_records - computed: false, optional: false, required: true
  private _dnsRecords = new ServiceDiscoveryServiceDnsConfigDnsRecordsList(this, "dns_records", false);
  public get dnsRecords() {
    return this._dnsRecords;
  }
  public putDnsRecords(value: ServiceDiscoveryServiceDnsConfigDnsRecords[] | cdktf.IResolvable) {
    this._dnsRecords.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordsInput() {
    return this._dnsRecords.internalValue;
  }
}
export interface ServiceDiscoveryServiceHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}
  */
  readonly resourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}
  */
  readonly type?: string;
}

export function serviceDiscoveryServiceHealthCheckConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckConfigOutputReference | ServiceDiscoveryServiceHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    resource_path: cdktf.stringToTerraform(struct!.resourcePath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ServiceDiscoveryServiceHealthCheckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDiscoveryServiceHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._resourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePath = this._resourcePath;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryServiceHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._resourcePath = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._resourcePath = value.resourcePath;
      this._type = value.type;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // resource_path - computed: false, optional: true, required: false
  private _resourcePath?: string; 
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }
  public set resourcePath(value: string) {
    this._resourcePath = value;
  }
  public resetResourcePath() {
    this._resourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePathInput() {
    return this._resourcePath;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}
  */
  readonly failureThreshold?: number;
}

export function serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference | ServiceDiscoveryServiceHealthCheckCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
  }
}

export class ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDiscoveryServiceHealthCheckCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryServiceHealthCheckCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service aws_service_discovery_service}
*/
export class ServiceDiscoveryService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_service_discovery_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service aws_service_discovery_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDiscoveryServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_service_discovery_service',
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
    this._forceDestroy = config.forceDestroy;
    this._id = config.id;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._healthCheckConfig.internalValue = config.healthCheckConfig;
    this._healthCheckCustomConfig.internalValue = config.healthCheckCustomConfig;
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

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable; 
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy;
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

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new ServiceDiscoveryServiceDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: ServiceDiscoveryServiceDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig = new ServiceDiscoveryServiceHealthCheckConfigOutputReference(this, "health_check_config");
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }
  public putHealthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig) {
    this._healthCheckConfig.internalValue = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig.internalValue;
  }

  // health_check_custom_config - computed: false, optional: true, required: false
  private _healthCheckCustomConfig = new ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference(this, "health_check_custom_config");
  public get healthCheckCustomConfig() {
    return this._healthCheckCustomConfig;
  }
  public putHealthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig) {
    this._healthCheckCustomConfig.internalValue = value;
  }
  public resetHealthCheckCustomConfig() {
    this._healthCheckCustomConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCustomConfigInput() {
    return this._healthCheckCustomConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      dns_config: serviceDiscoveryServiceDnsConfigToTerraform(this._dnsConfig.internalValue),
      health_check_config: serviceDiscoveryServiceHealthCheckConfigToTerraform(this._healthCheckConfig.internalValue),
      health_check_custom_config: serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(this._healthCheckCustomConfig.internalValue),
    };
  }
}
