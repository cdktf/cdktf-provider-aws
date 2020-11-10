// https://www.terraform.io/docs/providers/aws/r/acm_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface AcmCertificateConfig extends TerraformMetaArguments {
  readonly certificateAuthorityArn?: string;
  readonly certificateBody?: string;
  readonly certificateChain?: string;
  readonly domainName?: string;
  readonly privateKey?: string;
  readonly subjectAlternativeNames?: string[];
  readonly tags?: { [key: string]: string };
  readonly validationMethod?: string;
  /** options block */
  readonly options?: AcmCertificateOptions[];
}
export class AcmCertificateDomainValidationOptions extends ComplexComputedList {

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // resource_record_name - computed: true, optional: false, required: false
  public get resourceRecordName() {
    return this.getStringAttribute('resource_record_name');
  }

  // resource_record_type - computed: true, optional: false, required: false
  public get resourceRecordType() {
    return this.getStringAttribute('resource_record_type');
  }

  // resource_record_value - computed: true, optional: false, required: false
  public get resourceRecordValue() {
    return this.getStringAttribute('resource_record_value');
  }
}
export interface AcmCertificateOptions {
  readonly certificateTransparencyLoggingPreference?: string;
}

// Resource

export class AcmCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AcmCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_acm_certificate',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthorityArn = config.certificateAuthorityArn;
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._domainName = config.domainName;
    this._privateKey = config.privateKey;
    this._subjectAlternativeNames = config.subjectAlternativeNames;
    this._tags = config.tags;
    this._validationMethod = config.validationMethod;
    this._options = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string;
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string ) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn
  }

  // certificate_body - computed: false, optional: true, required: false
  private _certificateBody?: string;
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string ) {
    this._certificateBody = value;
  }
  public resetCertificateBody() {
    this._certificateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string;
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string ) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // domain_validation_options - computed: true, optional: false, required: false
  public domainValidationOptions(index: string) {
    return new AcmCertificateDomainValidationOptions(this, 'domain_validation_options', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string;
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string ) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[];
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // validation_emails - computed: true, optional: false, required: false
  public get validationEmails() {
    return this.getListAttribute('validation_emails');
  }

  // validation_method - computed: true, optional: true, required: false
  private _validationMethod?: string;
  public get validationMethod() {
    return this.getStringAttribute('validation_method');
  }
  public set validationMethod(value: string) {
    this._validationMethod = value;
  }
  public resetValidationMethod() {
    this._validationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationMethodInput() {
    return this._validationMethod
  }

  // options - computed: false, optional: true, required: false
  private _options?: AcmCertificateOptions[];
  public get options() {
    return this.interpolationForAttribute('options') as any;
  }
  public set options(value: AcmCertificateOptions[] ) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_arn: this._certificateAuthorityArn,
      certificate_body: this._certificateBody,
      certificate_chain: this._certificateChain,
      domain_name: this._domainName,
      private_key: this._privateKey,
      subject_alternative_names: this._subjectAlternativeNames,
      tags: this._tags,
      validation_method: this._validationMethod,
      options: this._options,
    };
  }
}
