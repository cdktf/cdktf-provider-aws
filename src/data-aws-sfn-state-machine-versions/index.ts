/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/data-sources/sfn_state_machine_versions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSfnStateMachineVersionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/data-sources/sfn_state_machine_versions#id DataAwsSfnStateMachineVersions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/data-sources/sfn_state_machine_versions#statemachine_arn DataAwsSfnStateMachineVersions#statemachine_arn}
  */
  readonly statemachineArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/data-sources/sfn_state_machine_versions aws_sfn_state_machine_versions}
*/
export class DataAwsSfnStateMachineVersions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sfn_state_machine_versions";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.9.0/docs/data-sources/sfn_state_machine_versions aws_sfn_state_machine_versions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSfnStateMachineVersionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSfnStateMachineVersionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sfn_state_machine_versions',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.9.0',
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
    this._statemachineArn = config.statemachineArn;
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

  // statemachine_arn - computed: false, optional: false, required: true
  private _statemachineArn?: string; 
  public get statemachineArn() {
    return this.getStringAttribute('statemachine_arn');
  }
  public set statemachineArn(value: string) {
    this._statemachineArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statemachineArnInput() {
    return this._statemachineArn;
  }

  // statemachine_versions - computed: true, optional: false, required: false
  public get statemachineVersions() {
    return this.getListAttribute('statemachine_versions');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      statemachine_arn: cdktf.stringToTerraform(this._statemachineArn),
    };
  }
}
