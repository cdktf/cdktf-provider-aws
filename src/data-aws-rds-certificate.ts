// https://www.terraform.io/docs/providers/aws/r/data_aws_rds_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsRdsCertificateConfig extends TerraformMetaArguments {
  readonly latestValidTill?: boolean;
}

// Resource

export class DataAwsRdsCertificate extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsRdsCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._latestValidTill = config.latestValidTill;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_type - computed: true, optional: false, required: true
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // customer_override - computed: true, optional: false, required: true
  public get customerOverride() {
    return this.getBooleanAttribute('customer_override');
  }

  // customer_override_valid_till - computed: true, optional: false, required: true
  public get customerOverrideValidTill() {
    return this.getStringAttribute('customer_override_valid_till');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // latest_valid_till - computed: false, optional: true, required: false
  private _latestValidTill?: boolean;
  public get latestValidTill() {
    return this._latestValidTill;
  }
  public set latestValidTill(value: boolean | undefined) {
    this._latestValidTill = value;
  }

  // thumbprint - computed: true, optional: false, required: true
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // valid_from - computed: true, optional: false, required: true
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_till - computed: true, optional: false, required: true
  public get validTill() {
    return this.getStringAttribute('valid_till');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      latest_valid_till: this._latestValidTill,
    };
  }
}
