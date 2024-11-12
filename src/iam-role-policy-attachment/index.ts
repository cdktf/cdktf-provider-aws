// https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamRolePolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment#id IamRolePolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment#policy_arn IamRolePolicyAttachment#policy_arn}
  */
  readonly policyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment#role IamRolePolicyAttachment#role}
  */
  readonly role: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment aws_iam_role_policy_attachment}
*/
export class IamRolePolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_role_policy_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamRolePolicyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamRolePolicyAttachment to import
  * @param importFromId The id of the existing IamRolePolicyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamRolePolicyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_role_policy_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.75.1/docs/resources/iam_role_policy_attachment aws_iam_role_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamRolePolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: IamRolePolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_role_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.75.1',
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
    this._policyArn = config.policyArn;
    this._role = config.role;
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

  // policy_arn - computed: false, optional: false, required: true
  private _policyArn?: string; 
  public get policyArn() {
    return this.getStringAttribute('policy_arn');
  }
  public set policyArn(value: string) {
    this._policyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyArnInput() {
    return this._policyArn;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_arn: cdktf.stringToTerraform(this._policyArn),
      role: cdktf.stringToTerraform(this._role),
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
      policy_arn: {
        value: cdktf.stringToHclTerraform(this._policyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
