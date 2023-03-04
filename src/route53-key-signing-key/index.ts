// https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route53KeySigningKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#hosted_zone_id Route53KeySigningKey#hosted_zone_id}
  */
  readonly hostedZoneId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#id Route53KeySigningKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#key_management_service_arn Route53KeySigningKey#key_management_service_arn}
  */
  readonly keyManagementServiceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#name Route53KeySigningKey#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key#status Route53KeySigningKey#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key aws_route53_key_signing_key}
*/
export class Route53KeySigningKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_key_signing_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_key_signing_key aws_route53_key_signing_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route53KeySigningKeyConfig
  */
  public constructor(scope: Construct, id: string, config: Route53KeySigningKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_key_signing_key',
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
    this._hostedZoneId = config.hostedZoneId;
    this._id = config.id;
    this._keyManagementServiceArn = config.keyManagementServiceArn;
    this._name = config.name;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest_algorithm_mnemonic - computed: true, optional: false, required: false
  public get digestAlgorithmMnemonic() {
    return this.getStringAttribute('digest_algorithm_mnemonic');
  }

  // digest_algorithm_type - computed: true, optional: false, required: false
  public get digestAlgorithmType() {
    return this.getNumberAttribute('digest_algorithm_type');
  }

  // digest_value - computed: true, optional: false, required: false
  public get digestValue() {
    return this.getStringAttribute('digest_value');
  }

  // dnskey_record - computed: true, optional: false, required: false
  public get dnskeyRecord() {
    return this.getStringAttribute('dnskey_record');
  }

  // ds_record - computed: true, optional: false, required: false
  public get dsRecord() {
    return this.getStringAttribute('ds_record');
  }

  // flag - computed: true, optional: false, required: false
  public get flag() {
    return this.getNumberAttribute('flag');
  }

  // hosted_zone_id - computed: false, optional: false, required: true
  private _hostedZoneId?: string; 
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
  public set hostedZoneId(value: string) {
    this._hostedZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedZoneIdInput() {
    return this._hostedZoneId;
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

  // key_management_service_arn - computed: false, optional: false, required: true
  private _keyManagementServiceArn?: string; 
  public get keyManagementServiceArn() {
    return this.getStringAttribute('key_management_service_arn');
  }
  public set keyManagementServiceArn(value: string) {
    this._keyManagementServiceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementServiceArnInput() {
    return this._keyManagementServiceArn;
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // signing_algorithm_mnemonic - computed: true, optional: false, required: false
  public get signingAlgorithmMnemonic() {
    return this.getStringAttribute('signing_algorithm_mnemonic');
  }

  // signing_algorithm_type - computed: true, optional: false, required: false
  public get signingAlgorithmType() {
    return this.getNumberAttribute('signing_algorithm_type');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hosted_zone_id: cdktf.stringToTerraform(this._hostedZoneId),
      id: cdktf.stringToTerraform(this._id),
      key_management_service_arn: cdktf.stringToTerraform(this._keyManagementServiceArn),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
