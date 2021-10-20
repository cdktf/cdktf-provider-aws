// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Discovery
*/
export namespace ServiceDiscovery {
  export interface ServiceDiscoveryHttpNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html#description ServiceDiscoveryHttpNamespace#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html#name ServiceDiscoveryHttpNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html#tags ServiceDiscoveryHttpNamespace#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html#tags_all ServiceDiscoveryHttpNamespace#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html aws_service_discovery_http_namespace}
  */
  export class ServiceDiscoveryHttpNamespace extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_service_discovery_http_namespace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_http_namespace.html aws_service_discovery_http_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryHttpNamespaceConfig
    */
    public constructor(scope: Construct, id: string, config: ServiceDiscoveryHttpNamespaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_service_discovery_http_namespace',
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
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _name?: string; 
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

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ServiceDiscoveryInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#attributes ServiceDiscoveryInstance#attributes}
    */
    readonly attributes: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#instance_id ServiceDiscoveryInstance#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html#service_id ServiceDiscoveryInstance#service_id}
    */
    readonly serviceId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance}
  */
  export class ServiceDiscoveryInstance extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_service_discovery_instance";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_instance.html aws_service_discovery_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryInstanceConfig
    */
    public constructor(scope: Construct, id: string, config: ServiceDiscoveryInstanceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_service_discovery_instance',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._attributes = config.attributes;
      this._instanceId = config.instanceId;
      this._serviceId = config.serviceId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attributes - computed: false, optional: false, required: true
    private _attributes?: { [key: string]: string } | cdktf.IResolvable; 
    public get attributes() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('attributes') as any;
    }
    public set attributes(value: { [key: string]: string } | cdktf.IResolvable) {
      this._attributes = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
      return this._attributes
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // instance_id - computed: false, optional: false, required: true
    private _instanceId?: string; 
    public get instanceId() {
      return this.getStringAttribute('instance_id');
    }
    public set instanceId(value: string) {
      this._instanceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceIdInput() {
      return this._instanceId
    }

    // service_id - computed: false, optional: false, required: true
    private _serviceId?: string; 
    public get serviceId() {
      return this.getStringAttribute('service_id');
    }
    public set serviceId(value: string) {
      this._serviceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceIdInput() {
      return this._serviceId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        attributes: cdktf.hashMapper(cdktf.anyToTerraform)(this._attributes),
        instance_id: cdktf.stringToTerraform(this._instanceId),
        service_id: cdktf.stringToTerraform(this._serviceId),
      };
    }
  }
  export interface ServiceDiscoveryPrivateDnsNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#description ServiceDiscoveryPrivateDnsNamespace#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#name ServiceDiscoveryPrivateDnsNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#tags ServiceDiscoveryPrivateDnsNamespace#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}
    */
    readonly vpc: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html aws_service_discovery_private_dns_namespace}
  */
  export class ServiceDiscoveryPrivateDnsNamespace extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_service_discovery_private_dns_namespace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_private_dns_namespace.html aws_service_discovery_private_dns_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryPrivateDnsNamespaceConfig
    */
    public constructor(scope: Construct, id: string, config: ServiceDiscoveryPrivateDnsNamespaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_service_discovery_private_dns_namespace',
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
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._vpc = config.vpc;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // hosted_zone - computed: true, optional: false, required: false
    public get hostedZone() {
      return this.getStringAttribute('hosted_zone');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // vpc - computed: false, optional: false, required: true
    private _vpc?: string; 
    public get vpc() {
      return this.getStringAttribute('vpc');
    }
    public set vpc(value: string) {
      this._vpc = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
      return this._vpc
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        vpc: cdktf.stringToTerraform(this._vpc),
      };
    }
  }
  export interface ServiceDiscoveryPublicDnsNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html#description ServiceDiscoveryPublicDnsNamespace#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html#name ServiceDiscoveryPublicDnsNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html#tags ServiceDiscoveryPublicDnsNamespace#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html#tags_all ServiceDiscoveryPublicDnsNamespace#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html aws_service_discovery_public_dns_namespace}
  */
  export class ServiceDiscoveryPublicDnsNamespace extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_service_discovery_public_dns_namespace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html aws_service_discovery_public_dns_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryPublicDnsNamespaceConfig
    */
    public constructor(scope: Construct, id: string, config: ServiceDiscoveryPublicDnsNamespaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_service_discovery_public_dns_namespace',
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
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // hosted_zone - computed: true, optional: false, required: false
    public get hostedZone() {
      return this.getStringAttribute('hosted_zone');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
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
    readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig;
    /**
    * health_check_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_config ServiceDiscoveryService#health_check_config}
    */
    readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig;
    /**
    * health_check_custom_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}
    */
    readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig;
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
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
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

  function serviceDiscoveryServiceDnsConfigToTerraform(struct?: ServiceDiscoveryServiceDnsConfigOutputReference | ServiceDiscoveryServiceDnsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
      routing_policy: cdktf.stringToTerraform(struct!.routingPolicy),
      dns_records: cdktf.listMapper(serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform)(struct!.dnsRecords),
    }
  }

  export class ServiceDiscoveryServiceDnsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._namespaceId
    }

    // routing_policy - computed: false, optional: true, required: false
    private _routingPolicy?: string | undefined; 
    public get routingPolicy() {
      return this.getStringAttribute('routing_policy');
    }
    public set routingPolicy(value: string | undefined) {
      this._routingPolicy = value;
    }
    public resetRoutingPolicy() {
      this._routingPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingPolicyInput() {
      return this._routingPolicy
    }

    // dns_records - computed: false, optional: false, required: true
    private _dnsRecords?: ServiceDiscoveryServiceDnsConfigDnsRecords[]; 
    public get dnsRecords() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('dns_records') as any;
    }
    public set dnsRecords(value: ServiceDiscoveryServiceDnsConfigDnsRecords[]) {
      this._dnsRecords = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dnsRecordsInput() {
      return this._dnsRecords
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

  function serviceDiscoveryServiceHealthCheckConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckConfigOutputReference | ServiceDiscoveryServiceHealthCheckConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
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
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // failure_threshold - computed: false, optional: true, required: false
    private _failureThreshold?: number | undefined; 
    public get failureThreshold() {
      return this.getNumberAttribute('failure_threshold');
    }
    public set failureThreshold(value: number | undefined) {
      this._failureThreshold = value;
    }
    public resetFailureThreshold() {
      this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureThresholdInput() {
      return this._failureThreshold
    }

    // resource_path - computed: false, optional: true, required: false
    private _resourcePath?: string | undefined; 
    public get resourcePath() {
      return this.getStringAttribute('resource_path');
    }
    public set resourcePath(value: string | undefined) {
      this._resourcePath = value;
    }
    public resetResourcePath() {
      this._resourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePathInput() {
      return this._resourcePath
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }
  export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}
    */
    readonly failureThreshold?: number;
  }

  function serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference | ServiceDiscoveryServiceHealthCheckCustomConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    }
  }

  export class ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // failure_threshold - computed: false, optional: true, required: false
    private _failureThreshold?: number | undefined; 
    public get failureThreshold() {
      return this.getNumberAttribute('failure_threshold');
    }
    public set failureThreshold(value: number | undefined) {
      this._failureThreshold = value;
    }
    public resetFailureThreshold() {
      this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureThresholdInput() {
      return this._failureThreshold
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _forceDestroy?: boolean | cdktf.IResolvable | undefined; 
    public get forceDestroy() {
      return this.getBooleanAttribute('force_destroy') as any;
    }
    public set forceDestroy(value: boolean | cdktf.IResolvable | undefined) {
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
    private _name?: string; 
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
    private _namespaceId?: string | undefined; 
    public get namespaceId() {
      return this.getStringAttribute('namespace_id');
    }
    public set namespaceId(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _dnsConfig?: ServiceDiscoveryServiceDnsConfig | undefined; 
    private __dnsConfigOutput = new ServiceDiscoveryServiceDnsConfigOutputReference(this as any, "dns_config", true);
    public get dnsConfig() {
      return this.__dnsConfigOutput;
    }
    public putDnsConfig(value: ServiceDiscoveryServiceDnsConfig | undefined) {
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
    private _healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig | undefined; 
    private __healthCheckConfigOutput = new ServiceDiscoveryServiceHealthCheckConfigOutputReference(this as any, "health_check_config", true);
    public get healthCheckConfig() {
      return this.__healthCheckConfigOutput;
    }
    public putHealthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig | undefined) {
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
    private _healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig | undefined; 
    private __healthCheckCustomConfigOutput = new ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference(this as any, "health_check_custom_config", true);
    public get healthCheckCustomConfig() {
      return this.__healthCheckCustomConfigOutput;
    }
    public putHealthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig | undefined) {
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
        dns_config: serviceDiscoveryServiceDnsConfigToTerraform(this._dnsConfig),
        health_check_config: serviceDiscoveryServiceHealthCheckConfigToTerraform(this._healthCheckConfig),
        health_check_custom_config: serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(this._healthCheckCustomConfig),
      };
    }
  }
  export interface DataAwsServiceDiscoveryDnsNamespaceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html#name DataAwsServiceDiscoveryDnsNamespace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html#type DataAwsServiceDiscoveryDnsNamespace#type}
    */
    readonly type: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html aws_service_discovery_dns_namespace}
  */
  export class DataAwsServiceDiscoveryDnsNamespace extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_service_discovery_dns_namespace";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/service_discovery_dns_namespace.html aws_service_discovery_dns_namespace} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsServiceDiscoveryDnsNamespaceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsServiceDiscoveryDnsNamespaceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_service_discovery_dns_namespace',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // hosted_zone - computed: true, optional: false, required: false
    public get hostedZone() {
      return this.getStringAttribute('hosted_zone');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
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
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
}
