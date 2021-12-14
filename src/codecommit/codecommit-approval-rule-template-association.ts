// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeCommit
*/
export interface CodecommitApprovalRuleTemplateAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html#approval_rule_template_name CodecommitApprovalRuleTemplateAssociation#approval_rule_template_name}
  */
  readonly approvalRuleTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html#repository_name CodecommitApprovalRuleTemplateAssociation#repository_name}
  */
  readonly repositoryName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html aws_codecommit_approval_rule_template_association}
*/
export class CodecommitApprovalRuleTemplateAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codecommit_approval_rule_template_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_approval_rule_template_association.html aws_codecommit_approval_rule_template_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodecommitApprovalRuleTemplateAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: CodecommitApprovalRuleTemplateAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecommit_approval_rule_template_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._approvalRuleTemplateName = config.approvalRuleTemplateName;
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
  public get id() {
    return this.getStringAttribute('id');
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
      repository_name: cdktf.stringToTerraform(this._repositoryName),
    };
  }
}
