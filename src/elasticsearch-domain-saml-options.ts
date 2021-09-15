// https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchDomainSamlOptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#domain_name ElasticsearchDomainSamlOptions#domain_name}
  */
  readonly domainName: string;
  /**
  * saml_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#saml_options ElasticsearchDomainSamlOptions#saml_options}
  */
  readonly samlOptions?: ElasticsearchDomainSamlOptionsSamlOptions[];
}
export interface ElasticsearchDomainSamlOptionsSamlOptionsIdp {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#entity_id ElasticsearchDomainSamlOptions#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#metadata_content ElasticsearchDomainSamlOptions#metadata_content}
  */
  readonly metadataContent: string;
}

function elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsIdp): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    metadata_content: cdktf.stringToTerraform(struct!.metadataContent),
  }
}

export interface ElasticsearchDomainSamlOptionsSamlOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#enabled ElasticsearchDomainSamlOptions#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}
  */
  readonly masterBackendRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#master_user_name ElasticsearchDomainSamlOptions#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#roles_key ElasticsearchDomainSamlOptions#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#subject_key ElasticsearchDomainSamlOptions#subject_key}
  */
  readonly subjectKey?: string;
  /**
  * idp block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#idp ElasticsearchDomainSamlOptions#idp}
  */
  readonly idp?: ElasticsearchDomainSamlOptionsSamlOptionsIdp[];
}

function elasticsearchDomainSamlOptionsSamlOptionsToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    master_backend_role: cdktf.stringToTerraform(struct!.masterBackendRole),
    master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    session_timeout_minutes: cdktf.numberToTerraform(struct!.sessionTimeoutMinutes),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
    idp: cdktf.listMapper(elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform)(struct!.idp),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options}
*/
export class ElasticsearchDomainSamlOptions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_elasticsearch_domain_saml_options";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchDomainSamlOptionsConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchDomainSamlOptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_elasticsearch_domain_saml_options',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._domainName = config.domainName;
    this._samlOptions = config.samlOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // saml_options - computed: false, optional: true, required: false
  private _samlOptions?: ElasticsearchDomainSamlOptionsSamlOptions[];
  public get samlOptions() {
    return this.interpolationForAttribute('saml_options') as any;
  }
  public set samlOptions(value: ElasticsearchDomainSamlOptionsSamlOptions[] ) {
    this._samlOptions = value;
  }
  public resetSamlOptions() {
    this._samlOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOptionsInput() {
    return this._samlOptions
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      saml_options: cdktf.listMapper(elasticsearchDomainSamlOptionsSamlOptionsToTerraform)(this._samlOptions),
    };
  }
}
