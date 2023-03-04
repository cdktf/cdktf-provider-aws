// https://www.terraform.io/docs/providers/aws/d/rds_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRdsCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate#id DataAwsRdsCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate#latest_valid_till DataAwsRdsCertificate#latest_valid_till}
  */
  readonly latestValidTill?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate aws_rds_certificate}
*/
export class DataAwsRdsCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_rds_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_certificate aws_rds_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRdsCertificateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsRdsCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_rds_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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
    return this.getBooleanAttribute('customer_override');
  }

  // customer_override_valid_till - computed: true, optional: false, required: false
  public get customerOverrideValidTill() {
    return this.getStringAttribute('customer_override_valid_till');
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

  // latest_valid_till - computed: false, optional: true, required: false
  private _latestValidTill?: boolean | cdktf.IResolvable; 
  public get latestValidTill() {
    return this.getBooleanAttribute('latest_valid_till');
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
      id: cdktf.stringToTerraform(this._id),
      latest_valid_till: cdktf.booleanToTerraform(this._latestValidTill),
    };
  }
}
