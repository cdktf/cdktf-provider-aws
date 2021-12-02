// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Relational Database Service
*/
export interface DataAwsRdsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html#latest_valid_till DataAwsRdsCertificate#latest_valid_till}
  */
  readonly latestValidTill?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate}
*/
export class DataAwsRdsCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_rds_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate.html aws_rds_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsCertificateConfig = {}
  */
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_type - computed: true, optional: false, required: false
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }

  // customer_override - computed: true, optional: false, required: false
  public get customerOverride() {
    return this.getBooleanAttribute('customer_override') as any;
  }

  // customer_override_valid_till - computed: true, optional: false, required: false
  public get customerOverrideValidTill() {
    return this.getStringAttribute('customer_override_valid_till');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_valid_till - computed: false, optional: true, required: false
  private _latestValidTill?: boolean | cdktf.IResolvable; 
  public get latestValidTill() {
    return this.getBooleanAttribute('latest_valid_till') as any;
  }
  public set latestValidTill(value: boolean | cdktf.IResolvable) {
    this._latestValidTill = value;
  }
  public resetLatestValidTill() {
    this._latestValidTill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestValidTillInput() {
    return this._latestValidTill;
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // valid_till - computed: true, optional: false, required: false
  public get validTill() {
    return this.getStringAttribute('valid_till');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      latest_valid_till: cdktf.booleanToTerraform(this._latestValidTill),
    };
  }
}
