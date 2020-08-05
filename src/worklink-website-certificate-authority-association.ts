// https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "certificate": {
        "type": "string",
        "required": true
      },
      "display_name": {
        "type": "string",
        "optional": true
      },
      "fleet_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "website_ca_id": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface WorklinkWebsiteCertificateAuthorityAssociationConfig extends TerraformMetaArguments {
  readonly certificate: string;
  readonly displayName?: string;
  readonly fleetArn: string;
}

// Resource

export class WorklinkWebsiteCertificateAuthorityAssociation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _certificate: string;
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string) {
    this._certificate = value;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // fleet_arn - computed: false, optional: false, required: true
  private _fleetArn: string;
  public get fleetArn() {
    return this._fleetArn;
  }
  public set fleetArn(value: string) {
    this._fleetArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // website_ca_id - computed: true, optional: false, required: true
  public get websiteCaId() {
    return this.getStringAttribute('website_ca_id');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: this._certificate,
      display_name: this._displayName,
      fleet_arn: this._fleetArn,
    };
  }
}
