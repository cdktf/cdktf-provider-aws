/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrInstanceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#autoscaling_policy EmrInstanceGroup#autoscaling_policy}
  */
  readonly autoscalingPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#bid_price EmrInstanceGroup#bid_price}
  */
  readonly bidPrice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#cluster_id EmrInstanceGroup#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#configurations_json EmrInstanceGroup#configurations_json}
  */
  readonly configurationsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#ebs_optimized EmrInstanceGroup#ebs_optimized}
  */
  readonly ebsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#id EmrInstanceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#instance_count EmrInstanceGroup#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#instance_type EmrInstanceGroup#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#name EmrInstanceGroup#name}
  */
  readonly name?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#region EmrInstanceGroup#region}
  */
  readonly region?: string;
  /**
  * ebs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#ebs_config EmrInstanceGroup#ebs_config}
  */
  readonly ebsConfig?: EmrInstanceGroupEbsConfig[] | cdktf.IResolvable;
}
export interface EmrInstanceGroupEbsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#iops EmrInstanceGroup#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#size EmrInstanceGroup#size}
  */
  readonly size: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#type EmrInstanceGroup#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#volumes_per_instance EmrInstanceGroup#volumes_per_instance}
  */
  readonly volumesPerInstance?: number;
}

export function emrInstanceGroupEbsConfigToTerraform(struct?: EmrInstanceGroupEbsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    size: cdktf.numberToTerraform(struct!.size),
    type: cdktf.stringToTerraform(struct!.type),
    volumes_per_instance: cdktf.numberToTerraform(struct!.volumesPerInstance),
  }
}


export function emrInstanceGroupEbsConfigToHclTerraform(struct?: EmrInstanceGroupEbsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_per_instance: {
      value: cdktf.numberToHclTerraform(struct!.volumesPerInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrInstanceGroupEbsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrInstanceGroupEbsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumesPerInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesPerInstance = this._volumesPerInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrInstanceGroupEbsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._size = undefined;
      this._type = undefined;
      this._volumesPerInstance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._size = value.size;
      this._type = value.type;
      this._volumesPerInstance = value.volumesPerInstance;
    }
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // volumes_per_instance - computed: false, optional: true, required: false
  private _volumesPerInstance?: number; 
  public get volumesPerInstance() {
    return this.getNumberAttribute('volumes_per_instance');
  }
  public set volumesPerInstance(value: number) {
    this._volumesPerInstance = value;
  }
  public resetVolumesPerInstance() {
    this._volumesPerInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesPerInstanceInput() {
    return this._volumesPerInstance;
  }
}

export class EmrInstanceGroupEbsConfigList extends cdktf.ComplexList {
  public internalValue? : EmrInstanceGroupEbsConfig[] | cdktf.IResolvable

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
  public get(index: number): EmrInstanceGroupEbsConfigOutputReference {
    return new EmrInstanceGroupEbsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group aws_emr_instance_group}
*/
export class EmrInstanceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_emr_instance_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrInstanceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrInstanceGroup to import
  * @param importFromId The id of the existing EmrInstanceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrInstanceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_emr_instance_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/emr_instance_group aws_emr_instance_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrInstanceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EmrInstanceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_emr_instance_group',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoscalingPolicy = config.autoscalingPolicy;
    this._bidPrice = config.bidPrice;
    this._clusterId = config.clusterId;
    this._configurationsJson = config.configurationsJson;
    this._ebsOptimized = config.ebsOptimized;
    this._id = config.id;
    this._instanceCount = config.instanceCount;
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._region = config.region;
    this._ebsConfig.internalValue = config.ebsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoscaling_policy - computed: false, optional: true, required: false
  private _autoscalingPolicy?: string; 
  public get autoscalingPolicy() {
    return this.getStringAttribute('autoscaling_policy');
  }
  public set autoscalingPolicy(value: string) {
    this._autoscalingPolicy = value;
  }
  public resetAutoscalingPolicy() {
    this._autoscalingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy;
  }

  // bid_price - computed: false, optional: true, required: false
  private _bidPrice?: string; 
  public get bidPrice() {
    return this.getStringAttribute('bid_price');
  }
  public set bidPrice(value: string) {
    this._bidPrice = value;
  }
  public resetBidPrice() {
    this._bidPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // configurations_json - computed: false, optional: true, required: false
  private _configurationsJson?: string; 
  public get configurationsJson() {
    return this.getStringAttribute('configurations_json');
  }
  public set configurationsJson(value: string) {
    this._configurationsJson = value;
  }
  public resetConfigurationsJson() {
    this._configurationsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsJsonInput() {
    return this._configurationsJson;
  }

  // ebs_optimized - computed: false, optional: true, required: false
  private _ebsOptimized?: boolean | cdktf.IResolvable; 
  public get ebsOptimized() {
    return this.getBooleanAttribute('ebs_optimized');
  }
  public set ebsOptimized(value: boolean | cdktf.IResolvable) {
    this._ebsOptimized = value;
  }
  public resetEbsOptimized() {
    this._ebsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptimizedInput() {
    return this._ebsOptimized;
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

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _ebsConfig = new EmrInstanceGroupEbsConfigList(this, "ebs_config", true);
  public get ebsConfig() {
    return this._ebsConfig;
  }
  public putEbsConfig(value: EmrInstanceGroupEbsConfig[] | cdktf.IResolvable) {
    this._ebsConfig.internalValue = value;
  }
  public resetEbsConfig() {
    this._ebsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsConfigInput() {
    return this._ebsConfig.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      ebs_config: cdktf.listMapper(emrInstanceGroupEbsConfigToTerraform, true)(this._ebsConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoscaling_policy: {
        value: cdktf.stringToHclTerraform(this._autoscalingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bid_price: {
        value: cdktf.stringToHclTerraform(this._bidPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configurations_json: {
        value: cdktf.stringToHclTerraform(this._configurationsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._ebsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ebs_config: {
        value: cdktf.listMapperHcl(emrInstanceGroupEbsConfigToHclTerraform, true)(this._ebsConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EmrInstanceGroupEbsConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
