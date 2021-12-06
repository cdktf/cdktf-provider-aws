// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeCommit
*/
export interface DataAwsCodecommitApprovalRuleTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html#name DataAwsCodecommitApprovalRuleTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template}
*/
export class DataAwsCodecommitApprovalRuleTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codecommit_approval_rule_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codecommit_approval_rule_template.html aws_codecommit_approval_rule_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsCodecommitApprovalRuleTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsCodecommitApprovalRuleTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codecommit_approval_rule_template',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_rule_template_id - computed: true, optional: false, required: false
  public get approvalRuleTemplateId() {
    return this.getStringAttribute('approval_rule_template_id');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_date - computed: true, optional: false, required: false
  public get lastModifiedDate() {
    return this.getStringAttribute('last_modified_date');
  }

  // last_modified_user - computed: true, optional: false, required: false
  public get lastModifiedUser() {
    return this.getStringAttribute('last_modified_user');
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

  // rule_content_sha256 - computed: true, optional: false, required: false
  public get ruleContentSha256() {
    return this.getStringAttribute('rule_content_sha256');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
