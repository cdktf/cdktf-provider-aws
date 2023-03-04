// https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodecommitApprovalRuleTemplateAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}
  */
  readonly approvalRuleTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#id CodecommitApprovalRuleTemplateAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}
  */
  readonly repositoryName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association}
*/
export class CodecommitApprovalRuleTemplateAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codecommit_approval_rule_template_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association aws_codecommit_approval_rule_template_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodecommitApprovalRuleTemplateAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecommit_approval_rule_template_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._approvalRuleTemplateName = config.approvalRuleTemplateName;
    this._id = config.id;
    this._repositoryName = config.repositoryName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_rule_template_name - computed: false, optional: false, required: true
  private _approvalRuleTemplateName?: string; 
  public get approvalRuleTemplateName() {
    return this.getStringAttribute('approval_rule_template_name');
  }
  public set approvalRuleTemplateName(value: string) {
    this._approvalRuleTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRuleTemplateNameInput() {
    return this._approvalRuleTemplateName;
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

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approval_rule_template_name: cdktf.stringToTerraform(this._approvalRuleTemplateName),
      id: cdktf.stringToTerraform(this._id),
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }
}
