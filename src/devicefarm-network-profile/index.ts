/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicefarmNetworkProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#description DevicefarmNetworkProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}
  */
  readonly downlinkBandwidthBits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}
  */
  readonly downlinkDelayMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}
  */
  readonly downlinkJitterMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}
  */
  readonly downlinkLossPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#id DevicefarmNetworkProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#name DevicefarmNetworkProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}
  */
  readonly projectArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#region DevicefarmNetworkProfile#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#type DevicefarmNetworkProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}
  */
  readonly uplinkBandwidthBits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}
  */
  readonly uplinkDelayMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}
  */
  readonly uplinkJitterMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}
  */
  readonly uplinkLossPercent?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile aws_devicefarm_network_profile}
*/
export class DevicefarmNetworkProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_devicefarm_network_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicefarmNetworkProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicefarmNetworkProfile to import
  * @param importFromId The id of the existing DevicefarmNetworkProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicefarmNetworkProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_devicefarm_network_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/devicefarm_network_profile aws_devicefarm_network_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicefarmNetworkProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DevicefarmNetworkProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_devicefarm_network_profile',
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
    this._description = config.description;
    this._downlinkBandwidthBits = config.downlinkBandwidthBits;
    this._downlinkDelayMs = config.downlinkDelayMs;
    this._downlinkJitterMs = config.downlinkJitterMs;
    this._downlinkLossPercent = config.downlinkLossPercent;
    this._id = config.id;
    this._name = config.name;
    this._projectArn = config.projectArn;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._uplinkBandwidthBits = config.uplinkBandwidthBits;
    this._uplinkDelayMs = config.uplinkDelayMs;
    this._uplinkJitterMs = config.uplinkJitterMs;
    this._uplinkLossPercent = config.uplinkLossPercent;
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

  // downlink_bandwidth_bits - computed: false, optional: true, required: false
  private _downlinkBandwidthBits?: number; 
  public get downlinkBandwidthBits() {
    return this.getNumberAttribute('downlink_bandwidth_bits');
  }
  public set downlinkBandwidthBits(value: number) {
    this._downlinkBandwidthBits = value;
  }
  public resetDownlinkBandwidthBits() {
    this._downlinkBandwidthBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkBandwidthBitsInput() {
    return this._downlinkBandwidthBits;
  }

  // downlink_delay_ms - computed: false, optional: true, required: false
  private _downlinkDelayMs?: number; 
  public get downlinkDelayMs() {
    return this.getNumberAttribute('downlink_delay_ms');
  }
  public set downlinkDelayMs(value: number) {
    this._downlinkDelayMs = value;
  }
  public resetDownlinkDelayMs() {
    this._downlinkDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkDelayMsInput() {
    return this._downlinkDelayMs;
  }

  // downlink_jitter_ms - computed: false, optional: true, required: false
  private _downlinkJitterMs?: number; 
  public get downlinkJitterMs() {
    return this.getNumberAttribute('downlink_jitter_ms');
  }
  public set downlinkJitterMs(value: number) {
    this._downlinkJitterMs = value;
  }
  public resetDownlinkJitterMs() {
    this._downlinkJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkJitterMsInput() {
    return this._downlinkJitterMs;
  }

  // downlink_loss_percent - computed: false, optional: true, required: false
  private _downlinkLossPercent?: number; 
  public get downlinkLossPercent() {
    return this.getNumberAttribute('downlink_loss_percent');
  }
  public set downlinkLossPercent(value: number) {
    this._downlinkLossPercent = value;
  }
  public resetDownlinkLossPercent() {
    this._downlinkLossPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkLossPercentInput() {
    return this._downlinkLossPercent;
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

  // project_arn - computed: false, optional: false, required: true
  private _projectArn?: string; 
  public get projectArn() {
    return this.getStringAttribute('project_arn');
  }
  public set projectArn(value: string) {
    this._projectArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectArnInput() {
    return this._projectArn;
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

  // uplink_bandwidth_bits - computed: false, optional: true, required: false
  private _uplinkBandwidthBits?: number; 
  public get uplinkBandwidthBits() {
    return this.getNumberAttribute('uplink_bandwidth_bits');
  }
  public set uplinkBandwidthBits(value: number) {
    this._uplinkBandwidthBits = value;
  }
  public resetUplinkBandwidthBits() {
    this._uplinkBandwidthBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkBandwidthBitsInput() {
    return this._uplinkBandwidthBits;
  }

  // uplink_delay_ms - computed: false, optional: true, required: false
  private _uplinkDelayMs?: number; 
  public get uplinkDelayMs() {
    return this.getNumberAttribute('uplink_delay_ms');
  }
  public set uplinkDelayMs(value: number) {
    this._uplinkDelayMs = value;
  }
  public resetUplinkDelayMs() {
    this._uplinkDelayMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkDelayMsInput() {
    return this._uplinkDelayMs;
  }

  // uplink_jitter_ms - computed: false, optional: true, required: false
  private _uplinkJitterMs?: number; 
  public get uplinkJitterMs() {
    return this.getNumberAttribute('uplink_jitter_ms');
  }
  public set uplinkJitterMs(value: number) {
    this._uplinkJitterMs = value;
  }
  public resetUplinkJitterMs() {
    this._uplinkJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkJitterMsInput() {
    return this._uplinkJitterMs;
  }

  // uplink_loss_percent - computed: false, optional: true, required: false
  private _uplinkLossPercent?: number; 
  public get uplinkLossPercent() {
    return this.getNumberAttribute('uplink_loss_percent');
  }
  public set uplinkLossPercent(value: number) {
    this._uplinkLossPercent = value;
  }
  public resetUplinkLossPercent() {
    this._uplinkLossPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkLossPercentInput() {
    return this._uplinkLossPercent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      downlink_bandwidth_bits: cdktf.numberToTerraform(this._downlinkBandwidthBits),
      downlink_delay_ms: cdktf.numberToTerraform(this._downlinkDelayMs),
      downlink_jitter_ms: cdktf.numberToTerraform(this._downlinkJitterMs),
      downlink_loss_percent: cdktf.numberToTerraform(this._downlinkLossPercent),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_arn: cdktf.stringToTerraform(this._projectArn),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      uplink_bandwidth_bits: cdktf.numberToTerraform(this._uplinkBandwidthBits),
      uplink_delay_ms: cdktf.numberToTerraform(this._uplinkDelayMs),
      uplink_jitter_ms: cdktf.numberToTerraform(this._uplinkJitterMs),
      uplink_loss_percent: cdktf.numberToTerraform(this._uplinkLossPercent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downlink_bandwidth_bits: {
        value: cdktf.numberToHclTerraform(this._downlinkBandwidthBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_delay_ms: {
        value: cdktf.numberToHclTerraform(this._downlinkDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_jitter_ms: {
        value: cdktf.numberToHclTerraform(this._downlinkJitterMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_loss_percent: {
        value: cdktf.numberToHclTerraform(this._downlinkLossPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      project_arn: {
        value: cdktf.stringToHclTerraform(this._projectArn),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uplink_bandwidth_bits: {
        value: cdktf.numberToHclTerraform(this._uplinkBandwidthBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_delay_ms: {
        value: cdktf.numberToHclTerraform(this._uplinkDelayMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_jitter_ms: {
        value: cdktf.numberToHclTerraform(this._uplinkJitterMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_loss_percent: {
        value: cdktf.numberToHclTerraform(this._uplinkLossPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
