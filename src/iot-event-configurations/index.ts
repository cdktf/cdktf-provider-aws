/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/iot_event_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotEventConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/iot_event_configurations#event_configurations IotEventConfigurations#event_configurations}
  */
  readonly eventConfigurations: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/iot_event_configurations#id IotEventConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/iot_event_configurations aws_iot_event_configurations}
*/
export class IotEventConfigurations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iot_event_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IotEventConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IotEventConfigurations to import
  * @param importFromId The id of the existing IotEventConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/iot_event_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IotEventConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iot_event_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.30.0/docs/resources/iot_event_configurations aws_iot_event_configurations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IotEventConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: IotEventConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_event_configurations',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.30.0',
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
    this._eventConfigurations = config.eventConfigurations;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // event_configurations - computed: false, optional: false, required: true
  private _eventConfigurations?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get eventConfigurations() {
    return this.getBooleanMapAttribute('event_configurations');
  }
  public set eventConfigurations(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._eventConfigurations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConfigurationsInput() {
    return this._eventConfigurations;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      event_configurations: cdktf.hashMapper(cdktf.booleanToTerraform)(this._eventConfigurations),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
