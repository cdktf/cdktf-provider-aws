/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudwatchLogDeliveryDestinationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy#delivery_destination_name CloudwatchLogDeliveryDestinationPolicy#delivery_destination_name}
  */
  readonly deliveryDestinationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy#delivery_destination_policy CloudwatchLogDeliveryDestinationPolicy#delivery_destination_policy}
  */
  readonly deliveryDestinationPolicy: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy#region CloudwatchLogDeliveryDestinationPolicy#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy aws_cloudwatch_log_delivery_destination_policy}
*/
export class CloudwatchLogDeliveryDestinationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudwatch_log_delivery_destination_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudwatchLogDeliveryDestinationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudwatchLogDeliveryDestinationPolicy to import
  * @param importFromId The id of the existing CloudwatchLogDeliveryDestinationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudwatchLogDeliveryDestinationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudwatch_log_delivery_destination_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.9.0/docs/resources/cloudwatch_log_delivery_destination_policy aws_cloudwatch_log_delivery_destination_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudwatchLogDeliveryDestinationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudwatchLogDeliveryDestinationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudwatch_log_delivery_destination_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.9.0',
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
    this._deliveryDestinationName = config.deliveryDestinationName;
    this._deliveryDestinationPolicy = config.deliveryDestinationPolicy;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delivery_destination_name - computed: false, optional: false, required: true
  private _deliveryDestinationName?: string; 
  public get deliveryDestinationName() {
    return this.getStringAttribute('delivery_destination_name');
  }
  public set deliveryDestinationName(value: string) {
    this._deliveryDestinationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDestinationNameInput() {
    return this._deliveryDestinationName;
  }

  // delivery_destination_policy - computed: false, optional: false, required: true
  private _deliveryDestinationPolicy?: string; 
  public get deliveryDestinationPolicy() {
    return this.getStringAttribute('delivery_destination_policy');
  }
  public set deliveryDestinationPolicy(value: string) {
    this._deliveryDestinationPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryDestinationPolicyInput() {
    return this._deliveryDestinationPolicy;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delivery_destination_name: cdktf.stringToTerraform(this._deliveryDestinationName),
      delivery_destination_policy: cdktf.stringToTerraform(this._deliveryDestinationPolicy),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delivery_destination_name: {
        value: cdktf.stringToHclTerraform(this._deliveryDestinationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_destination_policy: {
        value: cdktf.stringToHclTerraform(this._deliveryDestinationPolicy),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
