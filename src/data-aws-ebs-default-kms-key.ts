// https://www.terraform.io/docs/providers/aws/r/data_aws_ebs_default_kms_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsEbsDefaultKmsKeyConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataAwsEbsDefaultKmsKey extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsEbsDefaultKmsKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_ebs_default_kms_key',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_arn - computed: true, optional: false, required: false
  public get keyArn() {
    return this.getStringAttribute('key_arn');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
