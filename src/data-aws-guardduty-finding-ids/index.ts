/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/guardduty_finding_ids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsGuarddutyFindingIdsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/guardduty_finding_ids#detector_id DataAwsGuarddutyFindingIds#detector_id}
  */
  readonly detectorId: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/guardduty_finding_ids#region DataAwsGuarddutyFindingIds#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids}
*/
export class DataAwsGuarddutyFindingIds extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_guardduty_finding_ids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsGuarddutyFindingIds resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsGuarddutyFindingIds to import
  * @param importFromId The id of the existing DataAwsGuarddutyFindingIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/guardduty_finding_ids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsGuarddutyFindingIds to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_guardduty_finding_ids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/data-sources/guardduty_finding_ids aws_guardduty_finding_ids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsGuarddutyFindingIdsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsGuarddutyFindingIdsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_finding_ids',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._detectorId = config.detectorId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detector_id - computed: false, optional: false, required: true
  private _detectorId?: string; 
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId;
  }

  // finding_ids - computed: true, optional: false, required: false
  public get findingIds() {
    return this.getListAttribute('finding_ids');
  }

  // has_findings - computed: true, optional: false, required: false
  public get hasFindings() {
    return this.getBooleanAttribute('has_findings');
  }

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
      detector_id: cdktf.stringToTerraform(this._detectorId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detector_id: {
        value: cdktf.stringToHclTerraform(this._detectorId),
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
