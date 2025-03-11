/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53CidrLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location#cidr_blocks Route53CidrLocation#cidr_blocks}
  */
  readonly cidrBlocks: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location#cidr_collection_id Route53CidrLocation#cidr_collection_id}
  */
  readonly cidrCollectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location#name Route53CidrLocation#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location aws_route53_cidr_location}
*/
export class Route53CidrLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_cidr_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route53CidrLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route53CidrLocation to import
  * @param importFromId The id of the existing Route53CidrLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route53CidrLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_cidr_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.90.1/docs/resources/route53_cidr_location aws_route53_cidr_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53CidrLocationConfig
  */
  public constructor(scope: Construct, id: string, config: Route53CidrLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_cidr_location',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.90.1',
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
    this._cidrBlocks = config.cidrBlocks;
    this._cidrCollectionId = config.cidrCollectionId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: false, optional: false, required: true
  private _cidrBlocks?: string[]; 
  public get cidrBlocks() {
    return cdktf.Fn.tolist(this.getListAttribute('cidr_blocks'));
  }
  public set cidrBlocks(value: string[]) {
    this._cidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }

  // cidr_collection_id - computed: false, optional: false, required: true
  private _cidrCollectionId?: string; 
  public get cidrCollectionId() {
    return this.getStringAttribute('cidr_collection_id');
  }
  public set cidrCollectionId(value: string) {
    this._cidrCollectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrCollectionIdInput() {
    return this._cidrCollectionId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cidrBlocks),
      cidr_collection_id: cdktf.stringToTerraform(this._cidrCollectionId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cidrBlocks),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cidr_collection_id: {
        value: cdktf.stringToHclTerraform(this._cidrCollectionId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
