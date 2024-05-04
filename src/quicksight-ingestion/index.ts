/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QuicksightIngestionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion#aws_account_id QuicksightIngestion#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion#data_set_id QuicksightIngestion#data_set_id}
  */
  readonly dataSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion#ingestion_id QuicksightIngestion#ingestion_id}
  */
  readonly ingestionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion#ingestion_type QuicksightIngestion#ingestion_type}
  */
  readonly ingestionType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion aws_quicksight_ingestion}
*/
export class QuicksightIngestion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_quicksight_ingestion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QuicksightIngestion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QuicksightIngestion to import
  * @param importFromId The id of the existing QuicksightIngestion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QuicksightIngestion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_quicksight_ingestion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.48.0/docs/resources/quicksight_ingestion aws_quicksight_ingestion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QuicksightIngestionConfig
  */
  public constructor(scope: Construct, id: string, config: QuicksightIngestionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_quicksight_ingestion',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.48.0',
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
    this._awsAccountId = config.awsAccountId;
    this._dataSetId = config.dataSetId;
    this._ingestionId = config.ingestionId;
    this._ingestionType = config.ingestionType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // data_set_id - computed: false, optional: false, required: true
  private _dataSetId?: string; 
  public get dataSetId() {
    return this.getStringAttribute('data_set_id');
  }
  public set dataSetId(value: string) {
    this._dataSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSetIdInput() {
    return this._dataSetId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_id - computed: false, optional: false, required: true
  private _ingestionId?: string; 
  public get ingestionId() {
    return this.getStringAttribute('ingestion_id');
  }
  public set ingestionId(value: string) {
    this._ingestionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionIdInput() {
    return this._ingestionId;
  }

  // ingestion_status - computed: true, optional: false, required: false
  public get ingestionStatus() {
    return this.getStringAttribute('ingestion_status');
  }

  // ingestion_type - computed: false, optional: false, required: true
  private _ingestionType?: string; 
  public get ingestionType() {
    return this.getStringAttribute('ingestion_type');
  }
  public set ingestionType(value: string) {
    this._ingestionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionTypeInput() {
    return this._ingestionType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      data_set_id: cdktf.stringToTerraform(this._dataSetId),
      ingestion_id: cdktf.stringToTerraform(this._ingestionId),
      ingestion_type: cdktf.stringToTerraform(this._ingestionType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_set_id: {
        value: cdktf.stringToHclTerraform(this._dataSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingestion_id: {
        value: cdktf.stringToHclTerraform(this._ingestionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingestion_type: {
        value: cdktf.stringToHclTerraform(this._ingestionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
