// https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  readonly autoscalingPolicy?: string;
  readonly bidPrice?: string;
  readonly clusterId: string;
  readonly configurationsJson?: string;
  readonly ebsOptimized?: boolean;
  readonly instanceCount?: number;
  readonly instanceType: string;
  readonly name?: string;
  /** ebs_config block */
  readonly ebsConfig?: EmrInstanceGroupEbsConfig[];
}
export interface EmrInstanceGroupEbsConfig {
  readonly iops?: number;
  readonly size: number;
  readonly type: string;
  readonly volumesPerInstance?: number;
}

function emrInstanceGroupEbsConfigToTerraform(struct?: EmrInstanceGroupEbsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}


// Resource

export class EmrInstanceGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EmrInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoscalingPolicy = config.autoscalingPolicy;
    this._bidPrice = config.bidPrice;
    this._clusterId = config.clusterId;
    this._configurationsJson = config.configurationsJson;
    this._ebsOptimized = config.ebsOptimized;
    this._instanceCount = config.instanceCount;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._ebsConfig = config.ebsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy?: string;
  public get autoscalingPolicy() {
    return this.getStringAttribute('autoscaling_policy');
  }
  public set autoscalingPolicy(value: string ) {
    this._autoscalingPolicy = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string;
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string ) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string;
  public get configurationsJson() {
    return this.getStringAttribute('configurations_json');
  }
  public set configurationsJson(value: string ) {
    this._configurationsJson = value;
  }
  public resetConfigurationsJson() {
    this._configurationsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsJsonInput() {
    return this._configurationsJson
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean;
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean ) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number;
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number ) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType: string;
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // running_instance_count - computed: true, optional: false, required: false
  public get runningInstanceCount() {
    return this.getNumberAttribute('running_instance_count');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ebs_config - computed: false, optional: true, required: false
  private _ebsConfig?: EmrInstanceGroupEbsConfig[];
  public get ebsConfig() {
    return this.interpolationForAttribute('ebs_config') as any;
  }
  public set ebsConfig(value: EmrInstanceGroupEbsConfig[] ) {
    this._ebsConfig = value;
  }
  public resetEbsConfig() {
    this._ebsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoscaling_policy: cdktf.stringToTerraform(this._autoscalingPolicy),
      bid_price: cdktf.stringToTerraform(this._bidPrice),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      configurations_json: cdktf.stringToTerraform(this._configurationsJson),
      ebs_optimized: cdktf.booleanToTerraform(this._ebsOptimized),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      ebs_config: cdktf.listMapper(emrInstanceGroupEbsConfigToTerraform)(this._ebsConfig),
    };
  }
}
