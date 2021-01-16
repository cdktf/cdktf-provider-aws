// https://www.terraform.io/docs/providers/aws/r/data_aws_ssoadmin_instances.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsoadminInstancesConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataAwsSsoadminInstances extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsSsoadminInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_instances',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_store_ids - computed: true, optional: false, required: false
  public get identityStoreIds() {
    return this.getListAttribute('identity_store_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
