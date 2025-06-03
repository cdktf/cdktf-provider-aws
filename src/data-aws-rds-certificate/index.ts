/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate#default_for_new_launches DataAwsRdsCertificate#default_for_new_launches}
  */
  readonly defaultForNewLaunches?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate#id DataAwsRdsCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate#latest_valid_till DataAwsRdsCertificate#latest_valid_till}
  */
  readonly latestValidTill?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate aws_rds_certificate}
*/
export class DataAwsRdsCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRdsCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRdsCertificate to import
  * @param importFromId The id of the existing DataAwsRdsCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRdsCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_rds_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/data-sources/rds_certificate aws_rds_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._defaultForNewLaunches = config.defaultForNewLaunches;
    this._id = config.id;
    this._latestValidTill = config.latestValidTill;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // customer_override - computed: true, optional: false, required: false
  public get customerOverride() {
    return this.getBooleanAttribute('customer_override');
  }

  // customer_override_valid_till - computed: true, optional: false, required: false
  public get customerOverrideValidTill() {
    return this.getStringAttribute('customer_override_valid_till');
  }

  // default_for_new_launches - computed: false, optional: true, required: false
  private _defaultForNewLaunches?: boolean | cdktf.IResolvable; 
  public get defaultForNewLaunches() {
    return this.getBooleanAttribute('default_for_new_launches');
  }
  public set defaultForNewLaunches(value: boolean | cdktf.IResolvable) {
    this._defaultForNewLaunches = value;
  }
  public resetDefaultForNewLaunches() {
    this._defaultForNewLaunches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultForNewLaunchesInput() {
    return this._defaultForNewLaunches;
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

  // latest_valid_till - computed: false, optional: true, required: false
  private _latestValidTill?: boolean | cdktf.IResolvable; 
  public get latestValidTill() {
    return this.getBooleanAttribute('latest_valid_till');
  }
  public set latestValidTill(value: boolean | cdktf.IResolvable) {
    this._latestValidTill = value;
  }
  public resetLatestValidTill() {
    this._latestValidTill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestValidTillInput() {
    return this._latestValidTill;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_till - computed: true, optional: false, required: false
  public get validTill() {
    return this.getStringAttribute('valid_till');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_for_new_launches: cdktf.booleanToTerraform(this._defaultForNewLaunches),
      id: cdktf.stringToTerraform(this._id),
      latest_valid_till: cdktf.booleanToTerraform(this._latestValidTill),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_for_new_launches: {
        value: cdktf.booleanToHclTerraform(this._defaultForNewLaunches),
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
      latest_valid_till: {
        value: cdktf.booleanToHclTerraform(this._latestValidTill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
