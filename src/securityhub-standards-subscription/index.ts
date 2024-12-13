/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/securityhub_standards_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubStandardsSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/securityhub_standards_subscription#id SecurityhubStandardsSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/securityhub_standards_subscription#standards_arn SecurityhubStandardsSubscription#standards_arn}
  */
  readonly standardsArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/securityhub_standards_subscription aws_securityhub_standards_subscription}
*/
export class SecurityhubStandardsSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_standards_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityhubStandardsSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubStandardsSubscription to import
  * @param importFromId The id of the existing SecurityhubStandardsSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/securityhub_standards_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubStandardsSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_standards_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.81.0/docs/resources/securityhub_standards_subscription aws_securityhub_standards_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubStandardsSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubStandardsSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_standards_subscription',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.81.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._standardsArn = config.standardsArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // standards_arn - computed: false, optional: false, required: true
  private _standardsArn?: string; 
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }
  public set standardsArn(value: string) {
    this._standardsArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsArnInput() {
    return this._standardsArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      standards_arn: cdktf.stringToTerraform(this._standardsArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standards_arn: {
        value: cdktf.stringToHclTerraform(this._standardsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
