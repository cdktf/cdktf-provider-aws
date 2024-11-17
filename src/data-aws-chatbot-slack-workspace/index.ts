/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/chatbot_slack_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsChatbotSlackWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/chatbot_slack_workspace#slack_team_name DataAwsChatbotSlackWorkspace#slack_team_name}
  */
  readonly slackTeamName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace}
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
  * @param importFromId The id of the existing DataAwsChatbotSlackWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/chatbot_slack_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsChatbotSlackWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_chatbot_slack_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.76.0/docs/data-sources/chatbot_slack_workspace aws_chatbot_slack_workspace} Data Source
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
        providerVersion: '5.76.0',
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
    this._slackTeamName = config.slackTeamName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      slack_team_name: cdktf.stringToTerraform(this._slackTeamName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
