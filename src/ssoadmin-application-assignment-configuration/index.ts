// https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/ssoadmin_application_assignment_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminApplicationAssignmentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/ssoadmin_application_assignment_configuration#application_arn SsoadminApplicationAssignmentConfiguration#application_arn}
  */
  readonly applicationArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/ssoadmin_application_assignment_configuration#assignment_required SsoadminApplicationAssignmentConfiguration#assignment_required}
  */
  readonly assignmentRequired: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/ssoadmin_application_assignment_configuration aws_ssoadmin_application_assignment_configuration}
*/
export class SsoadminApplicationAssignmentConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_application_assignment_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoadminApplicationAssignmentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoadminApplicationAssignmentConfiguration to import
  * @param importFromId The id of the existing SsoadminApplicationAssignmentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/ssoadmin_application_assignment_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoadminApplicationAssignmentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_application_assignment_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.0/docs/resources/ssoadmin_application_assignment_configuration aws_ssoadmin_application_assignment_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminApplicationAssignmentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminApplicationAssignmentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_application_assignment_configuration',
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
    this._applicationArn = config.applicationArn;
    this._assignmentRequired = config.assignmentRequired;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_arn - computed: false, optional: false, required: true
  private _applicationArn?: string; 
  public get applicationArn() {
    return this.getStringAttribute('application_arn');
  }
  public set applicationArn(value: string) {
    this._applicationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationArnInput() {
    return this._applicationArn;
  }

  // assignment_required - computed: false, optional: false, required: true
  private _assignmentRequired?: boolean | cdktf.IResolvable; 
  public get assignmentRequired() {
    return this.getBooleanAttribute('assignment_required');
  }
  public set assignmentRequired(value: boolean | cdktf.IResolvable) {
    this._assignmentRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentRequiredInput() {
    return this._assignmentRequired;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_arn: cdktf.stringToTerraform(this._applicationArn),
      assignment_required: cdktf.booleanToTerraform(this._assignmentRequired),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_arn: {
        value: cdktf.stringToHclTerraform(this._applicationArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_required: {
        value: cdktf.booleanToHclTerraform(this._assignmentRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
