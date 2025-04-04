/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftDataShareAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization#allow_writes RedshiftDataShareAuthorization#allow_writes}
  */
  readonly allowWrites?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization#consumer_identifier RedshiftDataShareAuthorization#consumer_identifier}
  */
  readonly consumerIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization#data_share_arn RedshiftDataShareAuthorization#data_share_arn}
  */
  readonly dataShareArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization aws_redshift_data_share_authorization}
*/
export class RedshiftDataShareAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_data_share_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftDataShareAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftDataShareAuthorization to import
  * @param importFromId The id of the existing RedshiftDataShareAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftDataShareAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_data_share_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/redshift_data_share_authorization aws_redshift_data_share_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftDataShareAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftDataShareAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_data_share_authorization',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.94.0',
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
    this._allowWrites = config.allowWrites;
    this._consumerIdentifier = config.consumerIdentifier;
    this._dataShareArn = config.dataShareArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_writes - computed: false, optional: true, required: false
  private _allowWrites?: boolean | cdktf.IResolvable; 
  public get allowWrites() {
    return this.getBooleanAttribute('allow_writes');
  }
  public set allowWrites(value: boolean | cdktf.IResolvable) {
    this._allowWrites = value;
  }
  public resetAllowWrites() {
    this._allowWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWritesInput() {
    return this._allowWrites;
  }

  // consumer_identifier - computed: false, optional: false, required: true
  private _consumerIdentifier?: string; 
  public get consumerIdentifier() {
    return this.getStringAttribute('consumer_identifier');
  }
  public set consumerIdentifier(value: string) {
    this._consumerIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdentifierInput() {
    return this._consumerIdentifier;
  }

  // data_share_arn - computed: false, optional: false, required: true
  private _dataShareArn?: string; 
  public get dataShareArn() {
    return this.getStringAttribute('data_share_arn');
  }
  public set dataShareArn(value: string) {
    this._dataShareArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShareArnInput() {
    return this._dataShareArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_by - computed: true, optional: false, required: false
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }

  // producer_arn - computed: true, optional: false, required: false
  public get producerArn() {
    return this.getStringAttribute('producer_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_writes: cdktf.booleanToTerraform(this._allowWrites),
      consumer_identifier: cdktf.stringToTerraform(this._consumerIdentifier),
      data_share_arn: cdktf.stringToTerraform(this._dataShareArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_writes: {
        value: cdktf.booleanToHclTerraform(this._allowWrites),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consumer_identifier: {
        value: cdktf.stringToHclTerraform(this._consumerIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_share_arn: {
        value: cdktf.stringToHclTerraform(this._dataShareArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
