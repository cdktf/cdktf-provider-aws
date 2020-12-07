// https://www.terraform.io/docs/providers/aws/r/data_aws_region.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRegionConfig extends cdktf.TerraformMetaArguments {
  readonly current?: boolean;
  readonly endpoint?: string;
  readonly name?: string;
}

// Resource

export class DataAwsRegion extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRegionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_region',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._current = config.current;
    this._endpoint = config.endpoint;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current - computed: true, optional: true, required: false
  private _current?: boolean;
  public get current() {
    return this.getBooleanAttribute('current');
  }
  public set current(value: boolean) {
    this._current = value;
  }
  public resetCurrent() {
    this._current = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentInput() {
    return this._current
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string;
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current: cdktf.booleanToTerraform(this._current),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
