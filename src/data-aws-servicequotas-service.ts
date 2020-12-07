// https://www.terraform.io/docs/providers/aws/r/data_aws_servicequotas_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsServicequotasServiceConfig extends cdktf.TerraformMetaArguments {
  readonly serviceName: string;
}

// Resource

export class DataAwsServicequotasService extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicequotas_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_code - computed: true, optional: false, required: false
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName: string;
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }
}
