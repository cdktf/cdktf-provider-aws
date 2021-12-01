// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Runner
*/
export interface ApprunnerCustomDomainAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#domain_name ApprunnerCustomDomainAssociation#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#enable_www_subdomain ApprunnerCustomDomainAssociation#enable_www_subdomain}
  */
  readonly enableWwwSubdomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html#service_arn ApprunnerCustomDomainAssociation#service_arn}
  */
  readonly serviceArn: string;
}
export class ApprunnerCustomDomainAssociationCertificateValidationRecords extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association}
*/
export class ApprunnerCustomDomainAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_apprunner_custom_domain_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_custom_domain_association.html aws_apprunner_custom_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerCustomDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerCustomDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_custom_domain_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._enableWwwSubdomain = config.enableWwwSubdomain;
    this._serviceArn = config.serviceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_validation_records - computed: true, optional: false, required: false
  public certificateValidationRecords(index: string) {
    return new ApprunnerCustomDomainAssociationCertificateValidationRecords(this, 'certificate_validation_records', index);
  }

  // dns_target - computed: true, optional: false, required: false
  public get dnsTarget() {
    return this.getStringAttribute('dns_target');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // enable_www_subdomain - computed: false, optional: true, required: false
  private _enableWwwSubdomain?: boolean | cdktf.IResolvable; 
  public get enableWwwSubdomain() {
    return this.getBooleanAttribute('enable_www_subdomain') as any;
  }
  public set enableWwwSubdomain(value: boolean | cdktf.IResolvable) {
    this._enableWwwSubdomain = value;
  }
  public resetEnableWwwSubdomain() {
    this._enableWwwSubdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWwwSubdomainInput() {
    return this._enableWwwSubdomain;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_arn - computed: false, optional: false, required: true
  private _serviceArn?: string; 
  public get serviceArn() {
    return this.getStringAttribute('service_arn');
  }
  public set serviceArn(value: string) {
    this._serviceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceArnInput() {
    return this._serviceArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      enable_www_subdomain: cdktf.booleanToTerraform(this._enableWwwSubdomain),
      service_arn: cdktf.stringToTerraform(this._serviceArn),
    };
  }
}
