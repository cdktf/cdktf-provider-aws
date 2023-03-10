// https://www.terraform.io/docs/providers/aws/r/connect_bot_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectBotAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association#id ConnectBotAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association#instance_id ConnectBotAssociation#instance_id}
  */
  readonly instanceId: string;
  /**
  * lex_bot block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association#lex_bot ConnectBotAssociation#lex_bot}
  */
  readonly lexBot: ConnectBotAssociationLexBot;
}
export interface ConnectBotAssociationLexBot {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association#lex_region ConnectBotAssociation#lex_region}
  */
  readonly lexRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association#name ConnectBotAssociation#name}
  */
  readonly name: string;
}

export function connectBotAssociationLexBotToTerraform(struct?: ConnectBotAssociationLexBotOutputReference | ConnectBotAssociationLexBot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lex_region: cdktf.stringToTerraform(struct!.lexRegion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ConnectBotAssociationLexBotOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectBotAssociationLexBot | undefined {
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

  public set internalValue(value: ConnectBotAssociationLexBot | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association aws_connect_bot_association}
*/
export class ConnectBotAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_connect_bot_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/connect_bot_association aws_connect_bot_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectBotAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectBotAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_connect_bot_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
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
  private _lexBot = new ConnectBotAssociationLexBotOutputReference(this, "lex_bot");
  public get lexBot() {
    return this._lexBot;
  }
  public putLexBot(value: ConnectBotAssociationLexBot) {
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
      lex_bot: connectBotAssociationLexBotToTerraform(this._lexBot.internalValue),
    };
  }
}
