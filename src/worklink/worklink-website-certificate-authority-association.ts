// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkLink
*/
export interface WorklinkWebsiteCertificateAuthorityAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}
  */
  readonly certificate: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}
  */
  readonly fleetArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association aws_worklink_website_certificate_authority_association}
*/
export class WorklinkWebsiteCertificateAuthorityAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_worklink_website_certificate_authority_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association aws_worklink_website_certificate_authority_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorklinkWebsiteCertificateAuthorityAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: WorklinkWebsiteCertificateAuthorityAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_worklink_website_certificate_authority_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._displayName = config.displayName;
    this._fleetArn = config.fleetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fleet_arn - computed: false, optional: false, required: true
  private _fleetArn?: string; 
  public get fleetArn() {
    return this.getStringAttribute('fleet_arn');
  }
  public set fleetArn(value: string) {
    this._fleetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetArnInput() {
    return this._fleetArn;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // website_ca_id - computed: true, optional: false, required: false
  public get websiteCaId() {
    return this.getStringAttribute('website_ca_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      display_name: cdktf.stringToTerraform(this._displayName),
      fleet_arn: cdktf.stringToTerraform(this._fleetArn),
    };
  }
}
