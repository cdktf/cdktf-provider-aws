// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Global Accelerator
*/
export namespace GlobalAccelerator {
  export interface GlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#enabled GlobalacceleratorAccelerator#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#ip_address_type GlobalacceleratorAccelerator#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#name GlobalacceleratorAccelerator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags GlobalacceleratorAccelerator#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#tags_all GlobalacceleratorAccelerator#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * attributes block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#attributes GlobalacceleratorAccelerator#attributes}
    */
    readonly attributes?: GlobalacceleratorAcceleratorAttributes;
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#timeouts GlobalacceleratorAccelerator#timeouts}
    */
    readonly timeouts?: GlobalacceleratorAcceleratorTimeouts;
  }
  export class GlobalacceleratorAcceleratorIpSets extends cdktf.ComplexComputedList {

    // ip_addresses - computed: true, optional: false, required: false
    public get ipAddresses() {
      return this.getListAttribute('ip_addresses');
    }

    // ip_family - computed: true, optional: false, required: false
    public get ipFamily() {
      return this.getStringAttribute('ip_family');
    }
  }
  export interface GlobalacceleratorAcceleratorAttributes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_enabled GlobalacceleratorAccelerator#flow_logs_enabled}
    */
    readonly flowLogsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_bucket GlobalacceleratorAccelerator#flow_logs_s3_bucket}
    */
    readonly flowLogsS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#flow_logs_s3_prefix GlobalacceleratorAccelerator#flow_logs_s3_prefix}
    */
    readonly flowLogsS3Prefix?: string;
  }

  function globalacceleratorAcceleratorAttributesToTerraform(struct?: GlobalacceleratorAcceleratorAttributesOutputReference | GlobalacceleratorAcceleratorAttributes): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      flow_logs_enabled: cdktf.booleanToTerraform(struct!.flowLogsEnabled),
      flow_logs_s3_bucket: cdktf.stringToTerraform(struct!.flowLogsS3Bucket),
      flow_logs_s3_prefix: cdktf.stringToTerraform(struct!.flowLogsS3Prefix),
    }
  }

  export class GlobalacceleratorAcceleratorAttributesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // flow_logs_enabled - computed: false, optional: true, required: false
    private _flowLogsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get flowLogsEnabled() {
      return this.getBooleanAttribute('flow_logs_enabled') as any;
    }
    public set flowLogsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._flowLogsEnabled = value;
    }
    public resetFlowLogsEnabled() {
      this._flowLogsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowLogsEnabledInput() {
      return this._flowLogsEnabled
    }

    // flow_logs_s3_bucket - computed: false, optional: true, required: false
    private _flowLogsS3Bucket?: string | undefined; 
    public get flowLogsS3Bucket() {
      return this.getStringAttribute('flow_logs_s3_bucket');
    }
    public set flowLogsS3Bucket(value: string | undefined) {
      this._flowLogsS3Bucket = value;
    }
    public resetFlowLogsS3Bucket() {
      this._flowLogsS3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowLogsS3BucketInput() {
      return this._flowLogsS3Bucket
    }

    // flow_logs_s3_prefix - computed: false, optional: true, required: false
    private _flowLogsS3Prefix?: string | undefined; 
    public get flowLogsS3Prefix() {
      return this.getStringAttribute('flow_logs_s3_prefix');
    }
    public set flowLogsS3Prefix(value: string | undefined) {
      this._flowLogsS3Prefix = value;
    }
    public resetFlowLogsS3Prefix() {
      this._flowLogsS3Prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowLogsS3PrefixInput() {
      return this._flowLogsS3Prefix
    }
  }
  export interface GlobalacceleratorAcceleratorTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#create GlobalacceleratorAccelerator#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html#update GlobalacceleratorAccelerator#update}
    */
    readonly update?: string;
  }

  function globalacceleratorAcceleratorTimeoutsToTerraform(struct?: GlobalacceleratorAcceleratorTimeoutsOutputReference | GlobalacceleratorAcceleratorTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class GlobalacceleratorAcceleratorTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
  */
  export class GlobalacceleratorAccelerator extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_globalaccelerator_accelerator";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorAcceleratorConfig
    */
    public constructor(scope: Construct, id: string, config: GlobalacceleratorAcceleratorConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_globalaccelerator_accelerator',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._enabled = config.enabled;
      this._ipAddressType = config.ipAddressType;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._attributes = config.attributes;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address_type - computed: false, optional: true, required: false
    private _ipAddressType?: string | undefined; 
    public get ipAddressType() {
      return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string | undefined) {
      this._ipAddressType = value;
    }
    public resetIpAddressType() {
      this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
      return this._ipAddressType
    }

    // ip_sets - computed: true, optional: false, required: false
    public ipSets(index: string) {
      return new GlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
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

    // attributes - computed: false, optional: true, required: false
    private _attributes?: GlobalacceleratorAcceleratorAttributes | undefined; 
    private __attributesOutput = new GlobalacceleratorAcceleratorAttributesOutputReference(this as any, "attributes", true);
    public get attributes() {
      return this.__attributesOutput;
    }
    public putAttributes(value: GlobalacceleratorAcceleratorAttributes | undefined) {
      this._attributes = value;
    }
    public resetAttributes() {
      this._attributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
      return this._attributes
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GlobalacceleratorAcceleratorTimeouts | undefined; 
    private __timeoutsOutput = new GlobalacceleratorAcceleratorTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GlobalacceleratorAcceleratorTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        enabled: cdktf.booleanToTerraform(this._enabled),
        ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        attributes: globalacceleratorAcceleratorAttributesToTerraform(this._attributes),
        timeouts: globalacceleratorAcceleratorTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface GlobalacceleratorEndpointGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}
    */
    readonly endpointGroupRegion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}
    */
    readonly healthCheckIntervalSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_path GlobalacceleratorEndpointGroup#health_check_path}
    */
    readonly healthCheckPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_port GlobalacceleratorEndpointGroup#health_check_port}
    */
    readonly healthCheckPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}
    */
    readonly healthCheckProtocol?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#listener_arn GlobalacceleratorEndpointGroup#listener_arn}
    */
    readonly listenerArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#threshold_count GlobalacceleratorEndpointGroup#threshold_count}
    */
    readonly thresholdCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}
    */
    readonly trafficDialPercentage?: number;
    /**
    * endpoint_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_configuration GlobalacceleratorEndpointGroup#endpoint_configuration}
    */
    readonly endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[];
    /**
    * port_override block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#port_override GlobalacceleratorEndpointGroup#port_override}
    */
    readonly portOverride?: GlobalacceleratorEndpointGroupPortOverride[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#timeouts GlobalacceleratorEndpointGroup#timeouts}
    */
    readonly timeouts?: GlobalacceleratorEndpointGroupTimeouts;
  }
  export interface GlobalacceleratorEndpointGroupEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}
    */
    readonly clientIpPreservationEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#weight GlobalacceleratorEndpointGroup#weight}
    */
    readonly weight?: number;
  }

  function globalacceleratorEndpointGroupEndpointConfigurationToTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_ip_preservation_enabled: cdktf.booleanToTerraform(struct!.clientIpPreservationEnabled),
      endpoint_id: cdktf.stringToTerraform(struct!.endpointId),
      weight: cdktf.numberToTerraform(struct!.weight),
    }
  }

  export interface GlobalacceleratorEndpointGroupPortOverride {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}
    */
    readonly endpointPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#listener_port GlobalacceleratorEndpointGroup#listener_port}
    */
    readonly listenerPort: number;
  }

  function globalacceleratorEndpointGroupPortOverrideToTerraform(struct?: GlobalacceleratorEndpointGroupPortOverride): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      endpoint_port: cdktf.numberToTerraform(struct!.endpointPort),
      listener_port: cdktf.numberToTerraform(struct!.listenerPort),
    }
  }

  export interface GlobalacceleratorEndpointGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#create GlobalacceleratorEndpointGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#delete GlobalacceleratorEndpointGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html#update GlobalacceleratorEndpointGroup#update}
    */
    readonly update?: string;
  }

  function globalacceleratorEndpointGroupTimeoutsToTerraform(struct?: GlobalacceleratorEndpointGroupTimeoutsOutputReference | GlobalacceleratorEndpointGroupTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class GlobalacceleratorEndpointGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group}
  */
  export class GlobalacceleratorEndpointGroup extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_globalaccelerator_endpoint_group";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_endpoint_group.html aws_globalaccelerator_endpoint_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorEndpointGroupConfig
    */
    public constructor(scope: Construct, id: string, config: GlobalacceleratorEndpointGroupConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_globalaccelerator_endpoint_group',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._endpointGroupRegion = config.endpointGroupRegion;
      this._healthCheckIntervalSeconds = config.healthCheckIntervalSeconds;
      this._healthCheckPath = config.healthCheckPath;
      this._healthCheckPort = config.healthCheckPort;
      this._healthCheckProtocol = config.healthCheckProtocol;
      this._listenerArn = config.listenerArn;
      this._thresholdCount = config.thresholdCount;
      this._trafficDialPercentage = config.trafficDialPercentage;
      this._endpointConfiguration = config.endpointConfiguration;
      this._portOverride = config.portOverride;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // endpoint_group_region - computed: true, optional: true, required: false
    private _endpointGroupRegion?: string | undefined; 
    public get endpointGroupRegion() {
      return this.getStringAttribute('endpoint_group_region');
    }
    public set endpointGroupRegion(value: string | undefined) {
      this._endpointGroupRegion = value;
    }
    public resetEndpointGroupRegion() {
      this._endpointGroupRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointGroupRegionInput() {
      return this._endpointGroupRegion
    }

    // health_check_interval_seconds - computed: false, optional: true, required: false
    private _healthCheckIntervalSeconds?: number | undefined; 
    public get healthCheckIntervalSeconds() {
      return this.getNumberAttribute('health_check_interval_seconds');
    }
    public set healthCheckIntervalSeconds(value: number | undefined) {
      this._healthCheckIntervalSeconds = value;
    }
    public resetHealthCheckIntervalSeconds() {
      this._healthCheckIntervalSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckIntervalSecondsInput() {
      return this._healthCheckIntervalSeconds
    }

    // health_check_path - computed: true, optional: true, required: false
    private _healthCheckPath?: string | undefined; 
    public get healthCheckPath() {
      return this.getStringAttribute('health_check_path');
    }
    public set healthCheckPath(value: string | undefined) {
      this._healthCheckPath = value;
    }
    public resetHealthCheckPath() {
      this._healthCheckPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPathInput() {
      return this._healthCheckPath
    }

    // health_check_port - computed: true, optional: true, required: false
    private _healthCheckPort?: number | undefined; 
    public get healthCheckPort() {
      return this.getNumberAttribute('health_check_port');
    }
    public set healthCheckPort(value: number | undefined) {
      this._healthCheckPort = value;
    }
    public resetHealthCheckPort() {
      this._healthCheckPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckPortInput() {
      return this._healthCheckPort
    }

    // health_check_protocol - computed: false, optional: true, required: false
    private _healthCheckProtocol?: string | undefined; 
    public get healthCheckProtocol() {
      return this.getStringAttribute('health_check_protocol');
    }
    public set healthCheckProtocol(value: string | undefined) {
      this._healthCheckProtocol = value;
    }
    public resetHealthCheckProtocol() {
      this._healthCheckProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckProtocolInput() {
      return this._healthCheckProtocol
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // listener_arn - computed: false, optional: false, required: true
    private _listenerArn?: string; 
    public get listenerArn() {
      return this.getStringAttribute('listener_arn');
    }
    public set listenerArn(value: string) {
      this._listenerArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get listenerArnInput() {
      return this._listenerArn
    }

    // threshold_count - computed: false, optional: true, required: false
    private _thresholdCount?: number | undefined; 
    public get thresholdCount() {
      return this.getNumberAttribute('threshold_count');
    }
    public set thresholdCount(value: number | undefined) {
      this._thresholdCount = value;
    }
    public resetThresholdCount() {
      this._thresholdCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdCountInput() {
      return this._thresholdCount
    }

    // traffic_dial_percentage - computed: false, optional: true, required: false
    private _trafficDialPercentage?: number | undefined; 
    public get trafficDialPercentage() {
      return this.getNumberAttribute('traffic_dial_percentage');
    }
    public set trafficDialPercentage(value: number | undefined) {
      this._trafficDialPercentage = value;
    }
    public resetTrafficDialPercentage() {
      this._trafficDialPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trafficDialPercentageInput() {
      return this._trafficDialPercentage
    }

    // endpoint_configuration - computed: false, optional: true, required: false
    private _endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[] | undefined; 
    public get endpointConfiguration() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('endpoint_configuration') as any;
    }
    public set endpointConfiguration(value: GlobalacceleratorEndpointGroupEndpointConfiguration[] | undefined) {
      this._endpointConfiguration = value;
    }
    public resetEndpointConfiguration() {
      this._endpointConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigurationInput() {
      return this._endpointConfiguration
    }

    // port_override - computed: false, optional: true, required: false
    private _portOverride?: GlobalacceleratorEndpointGroupPortOverride[] | undefined; 
    public get portOverride() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('port_override') as any;
    }
    public set portOverride(value: GlobalacceleratorEndpointGroupPortOverride[] | undefined) {
      this._portOverride = value;
    }
    public resetPortOverride() {
      this._portOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portOverrideInput() {
      return this._portOverride
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GlobalacceleratorEndpointGroupTimeouts | undefined; 
    private __timeoutsOutput = new GlobalacceleratorEndpointGroupTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GlobalacceleratorEndpointGroupTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        endpoint_group_region: cdktf.stringToTerraform(this._endpointGroupRegion),
        health_check_interval_seconds: cdktf.numberToTerraform(this._healthCheckIntervalSeconds),
        health_check_path: cdktf.stringToTerraform(this._healthCheckPath),
        health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
        health_check_protocol: cdktf.stringToTerraform(this._healthCheckProtocol),
        listener_arn: cdktf.stringToTerraform(this._listenerArn),
        threshold_count: cdktf.numberToTerraform(this._thresholdCount),
        traffic_dial_percentage: cdktf.numberToTerraform(this._trafficDialPercentage),
        endpoint_configuration: cdktf.listMapper(globalacceleratorEndpointGroupEndpointConfigurationToTerraform)(this._endpointConfiguration),
        port_override: cdktf.listMapper(globalacceleratorEndpointGroupPortOverrideToTerraform)(this._portOverride),
        timeouts: globalacceleratorEndpointGroupTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface GlobalacceleratorListenerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#accelerator_arn GlobalacceleratorListener#accelerator_arn}
    */
    readonly acceleratorArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#client_affinity GlobalacceleratorListener#client_affinity}
    */
    readonly clientAffinity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#protocol GlobalacceleratorListener#protocol}
    */
    readonly protocol: string;
    /**
    * port_range block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#port_range GlobalacceleratorListener#port_range}
    */
    readonly portRange: GlobalacceleratorListenerPortRange[];
    /**
    * timeouts block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#timeouts GlobalacceleratorListener#timeouts}
    */
    readonly timeouts?: GlobalacceleratorListenerTimeouts;
  }
  export interface GlobalacceleratorListenerPortRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#from_port GlobalacceleratorListener#from_port}
    */
    readonly fromPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#to_port GlobalacceleratorListener#to_port}
    */
    readonly toPort?: number;
  }

  function globalacceleratorListenerPortRangeToTerraform(struct?: GlobalacceleratorListenerPortRange): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      from_port: cdktf.numberToTerraform(struct!.fromPort),
      to_port: cdktf.numberToTerraform(struct!.toPort),
    }
  }

  export interface GlobalacceleratorListenerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#create GlobalacceleratorListener#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#delete GlobalacceleratorListener#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html#update GlobalacceleratorListener#update}
    */
    readonly update?: string;
  }

  function globalacceleratorListenerTimeoutsToTerraform(struct?: GlobalacceleratorListenerTimeoutsOutputReference | GlobalacceleratorListenerTimeouts): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      create: cdktf.stringToTerraform(struct!.create),
      delete: cdktf.stringToTerraform(struct!.delete),
      update: cdktf.stringToTerraform(struct!.update),
    }
  }

  export class GlobalacceleratorListenerTimeoutsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // create - computed: false, optional: true, required: false
    private _create?: string | undefined; 
    public get create() {
      return this.getStringAttribute('create');
    }
    public set create(value: string | undefined) {
      this._create = value;
    }
    public resetCreate() {
      this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createInput() {
      return this._create
    }

    // delete - computed: false, optional: true, required: false
    private _delete?: string | undefined; 
    public get delete() {
      return this.getStringAttribute('delete');
    }
    public set delete(value: string | undefined) {
      this._delete = value;
    }
    public resetDelete() {
      this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteInput() {
      return this._delete
    }

    // update - computed: false, optional: true, required: false
    private _update?: string | undefined; 
    public get update() {
      return this.getStringAttribute('update');
    }
    public set update(value: string | undefined) {
      this._update = value;
    }
    public resetUpdate() {
      this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateInput() {
      return this._update
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener}
  */
  export class GlobalacceleratorListener extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_globalaccelerator_listener";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/globalaccelerator_listener.html aws_globalaccelerator_listener} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlobalacceleratorListenerConfig
    */
    public constructor(scope: Construct, id: string, config: GlobalacceleratorListenerConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_globalaccelerator_listener',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._acceleratorArn = config.acceleratorArn;
      this._clientAffinity = config.clientAffinity;
      this._protocol = config.protocol;
      this._portRange = config.portRange;
      this._timeouts = config.timeouts;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accelerator_arn - computed: false, optional: false, required: true
    private _acceleratorArn?: string; 
    public get acceleratorArn() {
      return this.getStringAttribute('accelerator_arn');
    }
    public set acceleratorArn(value: string) {
      this._acceleratorArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get acceleratorArnInput() {
      return this._acceleratorArn
    }

    // client_affinity - computed: false, optional: true, required: false
    private _clientAffinity?: string | undefined; 
    public get clientAffinity() {
      return this.getStringAttribute('client_affinity');
    }
    public set clientAffinity(value: string | undefined) {
      this._clientAffinity = value;
    }
    public resetClientAffinity() {
      this._clientAffinity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientAffinityInput() {
      return this._clientAffinity
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // protocol - computed: false, optional: false, required: true
    private _protocol?: string; 
    public get protocol() {
      return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
      this._protocol = value;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
      return this._protocol
    }

    // port_range - computed: false, optional: false, required: true
    private _portRange?: GlobalacceleratorListenerPortRange[]; 
    public get portRange() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('port_range') as any;
    }
    public set portRange(value: GlobalacceleratorListenerPortRange[]) {
      this._portRange = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portRangeInput() {
      return this._portRange
    }

    // timeouts - computed: false, optional: true, required: false
    private _timeouts?: GlobalacceleratorListenerTimeouts | undefined; 
    private __timeoutsOutput = new GlobalacceleratorListenerTimeoutsOutputReference(this as any, "timeouts", true);
    public get timeouts() {
      return this.__timeoutsOutput;
    }
    public putTimeouts(value: GlobalacceleratorListenerTimeouts | undefined) {
      this._timeouts = value;
    }
    public resetTimeouts() {
      this._timeouts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutsInput() {
      return this._timeouts
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        accelerator_arn: cdktf.stringToTerraform(this._acceleratorArn),
        client_affinity: cdktf.stringToTerraform(this._clientAffinity),
        protocol: cdktf.stringToTerraform(this._protocol),
        port_range: cdktf.listMapper(globalacceleratorListenerPortRangeToTerraform)(this._portRange),
        timeouts: globalacceleratorListenerTimeoutsToTerraform(this._timeouts),
      };
    }
  }
  export interface DataAwsGlobalacceleratorAcceleratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html#name DataAwsGlobalacceleratorAccelerator#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html#tags DataAwsGlobalacceleratorAccelerator#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsGlobalacceleratorAcceleratorAttributes extends cdktf.ComplexComputedList {

    // flow_logs_enabled - computed: true, optional: false, required: false
    public get flowLogsEnabled() {
      return this.getBooleanAttribute('flow_logs_enabled') as any;
    }

    // flow_logs_s3_bucket - computed: true, optional: false, required: false
    public get flowLogsS3Bucket() {
      return this.getStringAttribute('flow_logs_s3_bucket');
    }

    // flow_logs_s3_prefix - computed: true, optional: false, required: false
    public get flowLogsS3Prefix() {
      return this.getStringAttribute('flow_logs_s3_prefix');
    }
  }
  export class DataAwsGlobalacceleratorAcceleratorIpSets extends cdktf.ComplexComputedList {

    // ip_addresses - computed: true, optional: false, required: false
    public get ipAddresses() {
      return this.getListAttribute('ip_addresses');
    }

    // ip_family - computed: true, optional: false, required: false
    public get ipFamily() {
      return this.getStringAttribute('ip_family');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator}
  */
  export class DataAwsGlobalacceleratorAccelerator extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_globalaccelerator_accelerator";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/globalaccelerator_accelerator.html aws_globalaccelerator_accelerator} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlobalacceleratorAcceleratorConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsGlobalacceleratorAcceleratorConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_globalaccelerator_accelerator',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // attributes - computed: true, optional: false, required: false
    public attributes(index: string) {
      return new DataAwsGlobalacceleratorAcceleratorAttributes(this, 'attributes', index);
    }

    // dns_name - computed: true, optional: false, required: false
    public get dnsName() {
      return this.getStringAttribute('dns_name');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
      return this.getStringAttribute('hosted_zone_id');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // ip_address_type - computed: true, optional: false, required: false
    public get ipAddressType() {
      return this.getStringAttribute('ip_address_type');
    }

    // ip_sets - computed: true, optional: false, required: false
    public ipSets(index: string) {
      return new DataAwsGlobalacceleratorAcceleratorIpSets(this, 'ip_sets', index);
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // tags - computed: true, optional: true, required: false
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
}
