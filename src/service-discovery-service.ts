// https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServiceDiscoveryServiceConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly namespaceId?: string;
  readonly tags?: { [key: string]: string };
  /** dns_config block */
  readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig[];
  /** health_check_config block */
  readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig[];
  /** health_check_custom_config block */
  readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig[];
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
  readonly ttl: number;
  readonly type: string;
}
export interface ServiceDiscoveryServiceDnsConfig {
  readonly namespaceId: string;
  readonly routingPolicy?: string;
  /** dns_records block */
  readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[];
}
export interface ServiceDiscoveryServiceHealthCheckConfig {
  readonly failureThreshold?: number;
  readonly resourcePath?: string;
  readonly type?: string;
}
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
  readonly failureThreshold?: number;
}

// Resource

export class ServiceDiscoveryService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._tags = config.tags;
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
      description: this._description,
      name: this._name,
      namespace_id: this._namespaceId,
      tags: this._tags,
      dns_config: this._dnsConfig,
      health_check_config: this._healthCheckConfig,
      health_check_custom_config: this._healthCheckCustomConfig,
    };
  }
}
