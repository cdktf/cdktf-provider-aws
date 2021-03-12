// https://www.terraform.io/docs/providers/aws/r/data_aws_apigatewayv2_apis.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApigatewayv2ApisConfig extends cdktf.TerraformMetaArguments {
  readonly name?: string;
  readonly protocolType?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class DataAwsApigatewayv2Apis extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsApigatewayv2ApisConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_apis',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._protocolType = config.protocolType;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // protocol_type - computed: false, optional: true, required: false
  private _protocolType?: string;
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }
  public set protocolType(value: string ) {
    this._protocolType = value;
  }
  public resetProtocolType() {
    this._protocolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolTypeInput() {
    return this._protocolType
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      protocol_type: cdktf.stringToTerraform(this._protocolType),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
