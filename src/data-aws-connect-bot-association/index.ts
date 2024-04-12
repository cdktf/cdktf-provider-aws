/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsConnectBotAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association#id DataAwsConnectBotAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * lex_bot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association#lex_bot DataAwsConnectBotAssociation#lex_bot}
  */
  readonly lexBot: DataAwsConnectBotAssociationLexBot;
}
export interface DataAwsConnectBotAssociationLexBot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}
  */
  readonly lexRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association#name DataAwsConnectBotAssociation#name}
  */
  readonly name: string;
}

export function dataAwsConnectBotAssociationLexBotToTerraform(struct?: DataAwsConnectBotAssociationLexBotOutputReference | DataAwsConnectBotAssociationLexBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lex_region: cdktf.stringToTerraform(struct!.lexRegion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataAwsConnectBotAssociationLexBotToHclTerraform(struct?: DataAwsConnectBotAssociationLexBotOutputReference | DataAwsConnectBotAssociationLexBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lex_region: {
      value: cdktf.stringToHclTerraform(struct!.lexRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAwsConnectBotAssociationLexBotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsConnectBotAssociationLexBot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lexRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.lexRegion = this._lexRegion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsConnectBotAssociationLexBot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lexRegion = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lexRegion = value.lexRegion;
      this._name = value.name;
    }
  }

  // lex_region - computed: true, optional: true, required: false
  private _lexRegion?: string; 
  public get lexRegion() {
    return this.getStringAttribute('lex_region');
  }
  public set lexRegion(value: string) {
    this._lexRegion = value;
  }
  public resetLexRegion() {
    this._lexRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lexRegionInput() {
    return this._lexRegion;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association aws_connect_bot_association}
*/
export class DataAwsConnectBotAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_bot_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsConnectBotAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsConnectBotAssociation to import
  * @param importFromId The id of the existing DataAwsConnectBotAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsConnectBotAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_connect_bot_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.45.0/docs/data-sources/connect_bot_association aws_connect_bot_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectBotAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectBotAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_bot_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.45.0',
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
    this._instanceId = config.instanceId;
    this._lexBot.internalValue = config.lexBot;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // lex_bot - computed: false, optional: false, required: true
  private _lexBot = new DataAwsConnectBotAssociationLexBotOutputReference(this, "lex_bot");
  public get lexBot() {
    return this._lexBot;
  }
  public putLexBot(value: DataAwsConnectBotAssociationLexBot) {
    this._lexBot.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lexBotInput() {
    return this._lexBot.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lex_bot: dataAwsConnectBotAssociationLexBotToTerraform(this._lexBot.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lex_bot: {
        value: dataAwsConnectBotAssociationLexBotToHclTerraform(this._lexBot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsConnectBotAssociationLexBotList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
