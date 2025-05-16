/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/sesv2_account_suppression_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Sesv2AccountSuppressionAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/sesv2_account_suppression_attributes#suppressed_reasons Sesv2AccountSuppressionAttributes#suppressed_reasons}
  */
  readonly suppressedReasons: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/sesv2_account_suppression_attributes aws_sesv2_account_suppression_attributes}
*/
export class Sesv2AccountSuppressionAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sesv2_account_suppression_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sesv2AccountSuppressionAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sesv2AccountSuppressionAttributes to import
  * @param importFromId The id of the existing Sesv2AccountSuppressionAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/sesv2_account_suppression_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sesv2AccountSuppressionAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sesv2_account_suppression_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.98.0/docs/resources/sesv2_account_suppression_attributes aws_sesv2_account_suppression_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Sesv2AccountSuppressionAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: Sesv2AccountSuppressionAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sesv2_account_suppression_attributes',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.98.0',
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
    this._suppressedReasons = config.suppressedReasons;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // suppressed_reasons - computed: false, optional: false, required: true
  private _suppressedReasons?: string[]; 
  public get suppressedReasons() {
    return cdktf.Fn.tolist(this.getListAttribute('suppressed_reasons'));
  }
  public set suppressedReasons(value: string[]) {
    this._suppressedReasons = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressedReasonsInput() {
    return this._suppressedReasons;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      suppressed_reasons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._suppressedReasons),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      suppressed_reasons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._suppressedReasons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
