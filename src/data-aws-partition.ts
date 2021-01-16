// https://www.terraform.io/docs/providers/aws/r/data_aws_partition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsPartitionConfig extends TerraformMetaArguments {
}

// Resource

export class DataAwsPartition extends TerraformDataSource {

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

  // dns_suffix - computed: true, optional: false, required: true
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // partition - computed: true, optional: false, required: true
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // reverse_dns_prefix - computed: true, optional: false, required: true
  public get reverseDnsPrefix() {
    return this.getStringAttribute('reverse_dns_prefix');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
