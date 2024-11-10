/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/apprunner_hosted_zone_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApprunnerHostedZoneIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/apprunner_hosted_zone_id#region DataAwsApprunnerHostedZoneId#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/apprunner_hosted_zone_id aws_apprunner_hosted_zone_id}
*/
export class DataAwsApprunnerHostedZoneId extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_hosted_zone_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsApprunnerHostedZoneId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsApprunnerHostedZoneId to import
  * @param importFromId The id of the existing DataAwsApprunnerHostedZoneId that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/apprunner_hosted_zone_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsApprunnerHostedZoneId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apprunner_hosted_zone_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.0/docs/data-sources/apprunner_hosted_zone_id aws_apprunner_hosted_zone_id} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApprunnerHostedZoneIdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsApprunnerHostedZoneIdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_hosted_zone_id',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.0',
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
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
