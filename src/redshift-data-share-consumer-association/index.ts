/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftDataShareConsumerAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association#allow_writes RedshiftDataShareConsumerAssociation#allow_writes}
  */
  readonly allowWrites?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association#associate_entire_account RedshiftDataShareConsumerAssociation#associate_entire_account}
  */
  readonly associateEntireAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association#consumer_arn RedshiftDataShareConsumerAssociation#consumer_arn}
  */
  readonly consumerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association#consumer_region RedshiftDataShareConsumerAssociation#consumer_region}
  */
  readonly consumerRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association#data_share_arn RedshiftDataShareConsumerAssociation#data_share_arn}
  */
  readonly dataShareArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association}
*/
export class RedshiftDataShareConsumerAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_redshift_data_share_consumer_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftDataShareConsumerAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftDataShareConsumerAssociation to import
  * @param importFromId The id of the existing RedshiftDataShareConsumerAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftDataShareConsumerAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_redshift_data_share_consumer_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.72.1/docs/resources/redshift_data_share_consumer_association aws_redshift_data_share_consumer_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftDataShareConsumerAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftDataShareConsumerAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_redshift_data_share_consumer_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.72.1',
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
    this._associateEntireAccount = config.associateEntireAccount;
    this._consumerArn = config.consumerArn;
    this._consumerRegion = config.consumerRegion;
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

  // associate_entire_account - computed: false, optional: true, required: false
  private _associateEntireAccount?: boolean | cdktf.IResolvable; 
  public get associateEntireAccount() {
    return this.getBooleanAttribute('associate_entire_account');
  }
  public set associateEntireAccount(value: boolean | cdktf.IResolvable) {
    this._associateEntireAccount = value;
  }
  public resetAssociateEntireAccount() {
    this._associateEntireAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associateEntireAccountInput() {
    return this._associateEntireAccount;
  }

  // consumer_arn - computed: false, optional: true, required: false
  private _consumerArn?: string; 
  public get consumerArn() {
    return this.getStringAttribute('consumer_arn');
  }
  public set consumerArn(value: string) {
    this._consumerArn = value;
  }
  public resetConsumerArn() {
    this._consumerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerArnInput() {
    return this._consumerArn;
  }

  // consumer_region - computed: false, optional: true, required: false
  private _consumerRegion?: string; 
  public get consumerRegion() {
    return this.getStringAttribute('consumer_region');
  }
  public set consumerRegion(value: string) {
    this._consumerRegion = value;
  }
  public resetConsumerRegion() {
    this._consumerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerRegionInput() {
    return this._consumerRegion;
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
      associate_entire_account: cdktf.booleanToTerraform(this._associateEntireAccount),
      consumer_arn: cdktf.stringToTerraform(this._consumerArn),
      consumer_region: cdktf.stringToTerraform(this._consumerRegion),
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
      associate_entire_account: {
        value: cdktf.booleanToHclTerraform(this._associateEntireAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consumer_arn: {
        value: cdktf.stringToHclTerraform(this._consumerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_region: {
        value: cdktf.stringToHclTerraform(this._consumerRegion),
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
