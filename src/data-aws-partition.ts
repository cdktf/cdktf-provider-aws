// https://www.terraform.io/docs/providers/aws/r/data_aws_partition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsPartitionConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataAwsPartition extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsPartitionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_partition',
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

  // dns_suffix - computed: true, optional: false, required: false
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
