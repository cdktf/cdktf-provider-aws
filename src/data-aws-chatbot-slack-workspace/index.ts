/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/chatbot_slack_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsChatbotSlackWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/chatbot_slack_workspace#region DataAwsChatbotSlackWorkspace#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/chatbot_slack_workspace#slack_team_name DataAwsChatbotSlackWorkspace#slack_team_name}
  */
  readonly slackTeamName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace}
*/
export class DataAwsChatbotSlackWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chatbot_slack_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsChatbotSlackWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsChatbotSlackWorkspace to import
  * @param importFromId The id of the existing DataAwsChatbotSlackWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/chatbot_slack_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsChatbotSlackWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chatbot_slack_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsChatbotSlackWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsChatbotSlackWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chatbot_slack_workspace',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.13.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._region = config.region;
    this._slackTeamName = config.slackTeamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // slack_team_id - computed: true, optional: false, required: false
  public get slackTeamId() {
    return this.getStringAttribute('slack_team_id');
  }

  // slack_team_name - computed: false, optional: false, required: true
  private _slackTeamName?: string; 
  public get slackTeamName() {
    return this.getStringAttribute('slack_team_name');
  }
  public set slackTeamName(value: string) {
    this._slackTeamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slackTeamNameInput() {
    return this._slackTeamName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktf.stringToTerraform(this._region),
      slack_team_name: cdktf.stringToTerraform(this._slackTeamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slack_team_name: {
        value: cdktf.stringToHclTerraform(this._slackTeamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
