// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Connect
*/
export interface DataAwsConnectBotAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#instance_id DataAwsConnectBotAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * lex_bot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#lex_bot DataAwsConnectBotAssociation#lex_bot}
  */
  readonly lexBot: DataAwsConnectBotAssociationLexBot;
}
export interface DataAwsConnectBotAssociationLexBot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#lex_region DataAwsConnectBotAssociation#lex_region}
  */
  readonly lexRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association#name DataAwsConnectBotAssociation#name}
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

export class DataAwsConnectBotAssociationLexBotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association aws_connect_bot_association}
*/
export class DataAwsConnectBotAssociation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_connect_bot_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_bot_association aws_connect_bot_association} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsConnectBotAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsConnectBotAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_bot_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceId = config.instanceId;
    this._lexBot.internalValue = config.lexBot;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _lexBot = new DataAwsConnectBotAssociationLexBotOutputReference(this, "lex_bot", true);
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
      instance_id: cdktf.stringToTerraform(this._instanceId),
      lex_bot: dataAwsConnectBotAssociationLexBotToTerraform(this._lexBot.internalValue),
    };
  }
}
