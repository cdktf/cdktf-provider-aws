/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53TrafficPolicyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#hosted_zone_id Route53TrafficPolicyInstance#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#id Route53TrafficPolicyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#name Route53TrafficPolicyInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#traffic_policy_id Route53TrafficPolicyInstance#traffic_policy_id}
  */
  readonly trafficPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#traffic_policy_version Route53TrafficPolicyInstance#traffic_policy_version}
  */
  readonly trafficPolicyVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#ttl Route53TrafficPolicyInstance#ttl}
  */
  readonly ttl: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance aws_route53_traffic_policy_instance}
*/
export class Route53TrafficPolicyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_traffic_policy_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53TrafficPolicyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53TrafficPolicyInstance to import
  * @param importFromId The id of the existing Route53TrafficPolicyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53TrafficPolicyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_traffic_policy_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/route53_traffic_policy_instance aws_route53_traffic_policy_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53TrafficPolicyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: Route53TrafficPolicyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_traffic_policy_instance',
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
    this._hostedZoneId = config.hostedZoneId;
    this._id = config.id;
    this._name = config.name;
    this._trafficPolicyId = config.trafficPolicyId;
    this._trafficPolicyVersion = config.trafficPolicyVersion;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
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

  // traffic_policy_id - computed: false, optional: false, required: true
  private _trafficPolicyId?: string; 
  public get trafficPolicyId() {
    return this.getStringAttribute('traffic_policy_id');
  }
  public set trafficPolicyId(value: string) {
    this._trafficPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyIdInput() {
    return this._trafficPolicyId;
  }

  // traffic_policy_version - computed: false, optional: false, required: true
  private _trafficPolicyVersion?: number; 
  public get trafficPolicyVersion() {
    return this.getNumberAttribute('traffic_policy_version');
  }
  public set trafficPolicyVersion(value: number) {
    this._trafficPolicyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyVersionInput() {
    return this._trafficPolicyVersion;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      traffic_policy_id: cdktf.stringToTerraform(this._trafficPolicyId),
      traffic_policy_version: cdktf.numberToTerraform(this._trafficPolicyVersion),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hosted_zone_id: {
        value: cdktf.stringToHclTerraform(this._hostedZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      traffic_policy_id: {
        value: cdktf.stringToHclTerraform(this._trafficPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_policy_version: {
        value: cdktf.numberToHclTerraform(this._trafficPolicyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
