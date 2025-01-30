/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/msk_single_scram_secret_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MskSingleScramSecretAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/msk_single_scram_secret_association#cluster_arn MskSingleScramSecretAssociation#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/msk_single_scram_secret_association#secret_arn MskSingleScramSecretAssociation#secret_arn}
  */
  readonly secretArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/msk_single_scram_secret_association aws_msk_single_scram_secret_association}
*/
export class MskSingleScramSecretAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_msk_single_scram_secret_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MskSingleScramSecretAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MskSingleScramSecretAssociation to import
  * @param importFromId The id of the existing MskSingleScramSecretAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/msk_single_scram_secret_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MskSingleScramSecretAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_msk_single_scram_secret_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.84.0/docs/resources/msk_single_scram_secret_association aws_msk_single_scram_secret_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MskSingleScramSecretAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: MskSingleScramSecretAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_msk_single_scram_secret_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.84.0',
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
    this._clusterArn = config.clusterArn;
    this._secretArn = config.secretArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_arn: cdktf.stringToTerraform(this._clusterArn),
      secret_arn: cdktf.stringToTerraform(this._secretArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_arn: {
        value: cdktf.stringToHclTerraform(this._clusterArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_arn: {
        value: cdktf.stringToHclTerraform(this._secretArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
