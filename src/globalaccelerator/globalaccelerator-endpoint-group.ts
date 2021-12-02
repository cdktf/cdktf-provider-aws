// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Global Accelerator
*/
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

export function globalacceleratorEndpointGroupEndpointConfigurationToTerraform(struct?: GlobalacceleratorEndpointGroupEndpointConfiguration): any {
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

export function globalacceleratorEndpointGroupPortOverrideToTerraform(struct?: GlobalacceleratorEndpointGroupPortOverride): any {
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

export function globalacceleratorEndpointGroupTimeoutsToTerraform(struct?: GlobalacceleratorEndpointGroupTimeoutsOutputReference | GlobalacceleratorEndpointGroupTimeouts): any {
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

  public get internalValue(): GlobalacceleratorEndpointGroupTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalacceleratorEndpointGroupTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_group_region - computed: true, optional: true, required: false
  private _endpointGroupRegion?: string; 
  public get endpointGroupRegion() {
    return this.getStringAttribute('endpoint_group_region');
  }
  public set endpointGroupRegion(value: string) {
    this._endpointGroupRegion = value;
  }
  public resetEndpointGroupRegion() {
    this._endpointGroupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointGroupRegionInput() {
    return this._endpointGroupRegion;
  }

  // health_check_interval_seconds - computed: false, optional: true, required: false
  private _healthCheckIntervalSeconds?: number; 
  public get healthCheckIntervalSeconds() {
    return this.getNumberAttribute('health_check_interval_seconds');
  }
  public set healthCheckIntervalSeconds(value: number) {
    this._healthCheckIntervalSeconds = value;
  }
  public resetHealthCheckIntervalSeconds() {
    this._healthCheckIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckIntervalSecondsInput() {
    return this._healthCheckIntervalSeconds;
  }

  // health_check_path - computed: true, optional: true, required: false
  private _healthCheckPath?: string; 
  public get healthCheckPath() {
    return this.getStringAttribute('health_check_path');
  }
  public set healthCheckPath(value: string) {
    this._healthCheckPath = value;
  }
  public resetHealthCheckPath() {
    this._healthCheckPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPathInput() {
    return this._healthCheckPath;
  }

  // health_check_port - computed: true, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
  }

  // health_check_protocol - computed: false, optional: true, required: false
  private _healthCheckProtocol?: string; 
  public get healthCheckProtocol() {
    return this.getStringAttribute('health_check_protocol');
  }
  public set healthCheckProtocol(value: string) {
    this._healthCheckProtocol = value;
  }
  public resetHealthCheckProtocol() {
    this._healthCheckProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtocolInput() {
    return this._healthCheckProtocol;
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
    return this._listenerArn;
  }

  // threshold_count - computed: false, optional: true, required: false
  private _thresholdCount?: number; 
  public get thresholdCount() {
    return this.getNumberAttribute('threshold_count');
  }
  public set thresholdCount(value: number) {
    this._thresholdCount = value;
  }
  public resetThresholdCount() {
    this._thresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCountInput() {
    return this._thresholdCount;
  }

  // traffic_dial_percentage - computed: false, optional: true, required: false
  private _trafficDialPercentage?: number; 
  public get trafficDialPercentage() {
    return this.getNumberAttribute('traffic_dial_percentage');
  }
  public set trafficDialPercentage(value: number) {
    this._trafficDialPercentage = value;
  }
  public resetTrafficDialPercentage() {
    this._trafficDialPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDialPercentageInput() {
    return this._trafficDialPercentage;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: GlobalacceleratorEndpointGroupEndpointConfiguration[]; 
  public get endpointConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: GlobalacceleratorEndpointGroupEndpointConfiguration[]) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration;
  }

  // port_override - computed: false, optional: true, required: false
  private _portOverride?: GlobalacceleratorEndpointGroupPortOverride[]; 
  public get portOverride() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port_override') as any;
  }
  public set portOverride(value: GlobalacceleratorEndpointGroupPortOverride[]) {
    this._portOverride = value;
  }
  public resetPortOverride() {
    this._portOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverrideInput() {
    return this._portOverride;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GlobalacceleratorEndpointGroupTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GlobalacceleratorEndpointGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      timeouts: globalacceleratorEndpointGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
