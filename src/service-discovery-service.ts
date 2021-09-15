// https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDiscoveryServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#description ServiceDiscoveryService#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#force_destroy ServiceDiscoveryService#force_destroy}
  */
  readonly forceDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#name ServiceDiscoveryService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#namespace_id ServiceDiscoveryService#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#tags ServiceDiscoveryService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#tags_all ServiceDiscoveryService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#dns_config ServiceDiscoveryService#dns_config}
  */
  readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig[];
  /**
  * health_check_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_config ServiceDiscoveryService#health_check_config}
  */
  readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig[];
  /**
  * health_check_custom_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}
  */
  readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig[];
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#ttl ServiceDiscoveryService#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#type ServiceDiscoveryService#type}
  */
  readonly type: string;
}

function serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform(struct?: ServiceDiscoveryServiceDnsConfigDnsRecords): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ServiceDiscoveryServiceDnsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#namespace_id ServiceDiscoveryService#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#routing_policy ServiceDiscoveryService#routing_policy}
  */
  readonly routingPolicy?: string;
  /**
  * dns_records block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#dns_records ServiceDiscoveryService#dns_records}
  */
  readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[];
}

function serviceDiscoveryServiceDnsConfigToTerraform(struct?: ServiceDiscoveryServiceDnsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    routing_policy: cdktf.stringToTerraform(struct!.routingPolicy),
    dns_records: cdktf.listMapper(serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform)(struct!.dnsRecords),
  }
}

export interface ServiceDiscoveryServiceHealthCheckConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#resource_path ServiceDiscoveryService#resource_path}
  */
  readonly resourcePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#type ServiceDiscoveryService#type}
  */
  readonly type?: string;
}

function serviceDiscoveryServiceHealthCheckConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    resource_path: cdktf.stringToTerraform(struct!.resourcePath),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}
  */
  readonly failureThreshold?: number;
}

function serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckCustomConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service}
*/
export class ServiceDiscoveryService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_service_discovery_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDiscoveryServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_service_discovery_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._dnsConfig = config.dnsConfig;
    this._healthCheckConfig = config.healthCheckConfig;
    this._healthCheckCustomConfig = config.healthCheckCustomConfig;
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
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean | cdktf.IResolvable;
  public get forceDestroy() {
    return this.getBooleanAttribute('force_destroy');
  }
  public set forceDestroy(value: boolean | cdktf.IResolvable ) {
    this._forceDestroy = value;
  }
  public resetForceDestroy() {
    this._forceDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDestroyInput() {
    return this._forceDestroy
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._namespaceId
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig?: ServiceDiscoveryServiceDnsConfig[];
  public get dnsConfig() {
    return this.interpolationForAttribute('dns_config') as any;
  }
  public set dnsConfig(value: ServiceDiscoveryServiceDnsConfig[] ) {
    this._dnsConfig = value;
  }
  public resetDnsConfig() {
    this._dnsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig
  }

  // health_check_config - computed: false, optional: true, required: false
  private _healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig[];
  public get healthCheckConfig() {
    return this.interpolationForAttribute('health_check_config') as any;
  }
  public set healthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig[] ) {
    this._healthCheckConfig = value;
  }
  public resetHealthCheckConfig() {
    this._healthCheckConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckConfigInput() {
    return this._healthCheckConfig
  }

  // health_check_custom_config - computed: false, optional: true, required: false
  private _healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig[];
  public get healthCheckCustomConfig() {
    return this.interpolationForAttribute('health_check_custom_config') as any;
  }
  public set healthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig[] ) {
    this._healthCheckCustomConfig = value;
  }
  public resetHealthCheckCustomConfig() {
    this._healthCheckCustomConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckCustomConfigInput() {
    return this._healthCheckCustomConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      dns_config: cdktf.listMapper(serviceDiscoveryServiceDnsConfigToTerraform)(this._dnsConfig),
      health_check_config: cdktf.listMapper(serviceDiscoveryServiceHealthCheckConfigToTerraform)(this._healthCheckConfig),
      health_check_custom_config: cdktf.listMapper(serviceDiscoveryServiceHealthCheckCustomConfigToTerraform)(this._healthCheckCustomConfig),
    };
  }
}
